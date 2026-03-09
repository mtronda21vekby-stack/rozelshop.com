import {
  BadRequestException,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { ProductStatus } from '@prisma/client';
import { randomUUID } from 'crypto';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { PrismaService } from '../../prisma/prisma.service';
import {
  PublicContentQueryDto,
  UpdateSiteContentDto
} from './dto/update-site-content.dto';
import { UpsertProductDto } from './dto/upsert-product.dto';

type Locale = 'ru' | 'en';

@Injectable()
export class CmsService {
  constructor(private readonly prisma: PrismaService) {}

  private ensureAdminKey(adminKey?: string) {
    const expected = process.env.ADMIN_API_KEY;

    if (!expected || !adminKey || adminKey !== expected) {
      throw new UnauthorizedException('Invalid admin key');
    }
  }

  private createR2Client() {
    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const accessKeyId = process.env.R2_ACCESS_KEY_ID;
    const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

    if (!accountId || !accessKeyId || !secretAccessKey) {
      throw new BadRequestException('R2 environment variables are not configured');
    }

    return new S3Client({
      region: 'auto',
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId,
        secretAccessKey
      }
    });
  }

  private defaultContent(locale: Locale) {
    const isRu = locale === 'ru';

    return {
      locale,
      hero: {
        eyebrow: 'Maison ROZEL',
        title: isRu
          ? 'Современный модный дом, построенный на точности, силуэте и сдержанности.'
          : 'A modern fashion house built on precision, silhouette, and restraint.',
        description: isRu
          ? 'ROZEL создаёт luxury ready-to-wear с кинематографичной подачей, точным кроем и тихой визуальной силой.'
          : 'ROZEL creates luxury ready-to-wear with a cinematic point of view, sharp tailoring, and quiet visual power.',
        primaryLabel: isRu ? 'Смотреть коллекции' : 'Explore Collections',
        primaryHref: '/collections',
        secondaryLabel: isRu ? 'Войти в дом' : 'Enter the House',
        secondaryHref: '/house',
        sideTopLabel: isRu ? 'Направление дома' : 'House Direction',
        sideTopText: isRu
          ? 'Кинематографичный чёрный, скульптурный тейлоринг и дорогой, спокойный ритм luxury-опыта.'
          : 'Cinematic black, sculpted tailoring, and a premium luxury rhythm shaped with control.',
        sideBottomLabel: isRu ? 'Фундамент' : 'Foundation',
        sideBottomText: isRu
          ? 'Сайт строится как premium storefront с местом для коллекций, product commerce, private client flows и скрытого admin-layer.'
          : 'The site is built as a premium storefront first, with room for collections, product commerce, private client flows, and a hidden admin layer.'
      },
      home: {
        introEyebrow: 'ROZEL',
        introTitle: isRu
          ? 'Дом, созданный для современной luxury-моды.'
          : 'A house built for modern luxury.',
        productsEyebrow: isRu ? 'Изделия' : 'Products',
        productsTitle: isRu
          ? 'Первый product layer дома.'
          : 'The first product layer of the house.',
        productsLinkLabel: isRu ? 'Открыть каталог' : 'Open catalog',
        featuredEyebrow: 'Featured',
        featuredTitle: isRu
          ? 'Избранное изделие сезона.'
          : 'The featured piece of the season.',
        featuredText: isRu
          ? 'Витрина ROZEL строится не как список вещей, а как curated luxury-selection с сильной editorial-подачей.'
          : 'The ROZEL storefront is built not as a list of items, but as a curated luxury selection with strong editorial framing.',
        featuredCta: isRu ? 'Открыть изделие' : 'Open item'
      },
      sections: {
        showIntro: true,
        showCollections: true,
        showProducts: true,
        showFeatured: true,
        showEditorial: true
      },
      featuredProductSlug: 'noir-tailored-coat',
      spotlights: isRu
        ? [
            {
              eyebrow: 'COLLECTION',
              title: 'Noir Atelier',
              text: 'Глубокий чёрный, строгая геометрия силуэта и структурный outerwear.'
            },
            {
              eyebrow: 'PRIVATE',
              title: 'Private Capsule',
              text: 'Ограниченные релизы для коллекционного формата luxury.'
            },
            {
              eyebrow: 'EVENING',
              title: 'Evening Study',
              text: 'Текучие вечерние формы, построенные на тишине и балансе.'
            }
          ]
        : [
            {
              eyebrow: 'COLLECTION',
              title: 'Noir Atelier',
              text: 'Deep black, sharp structure, and a controlled silhouette language.'
            },
            {
              eyebrow: 'PRIVATE',
              title: 'Private Capsule',
              text: 'Limited releases built for a tightly curated luxury format.'
            },
            {
              eyebrow: 'EVENING',
              title: 'Evening Study',
              text: 'Evening forms shaped by fluid balance and quiet visual power.'
            }
          ],
      seo: {
        home: {
          title: isRu ? 'ROZEL — модный дом' : 'ROZEL — fashion house',
          description: isRu
            ? 'ROZEL — современный luxury fashion house с коллекциями, редакционной подачей и премиальной витриной.'
            : 'ROZEL is a modern luxury fashion house with curated collections, editorial direction, and a premium storefront.'
        },
        collections: {
          title: isRu ? 'ROZEL — коллекции' : 'ROZEL — collections',
          description: isRu
            ? 'Коллекции ROZEL: outerwear, evening и capsule-направления в единой luxury-подаче.'
            : 'Explore ROZEL collections across outerwear, evening, and capsule luxury pieces.'
        },
        house: {
          title: isRu ? 'ROZEL — дом моды' : 'ROZEL — house',
          description: isRu
            ? 'Философия дома ROZEL: точность, силуэт, luxury-дисциплина и современная fashion-эстетика.'
            : 'The house of ROZEL: precision, silhouette, restraint, and a modern luxury identity.'
        },
        contact: {
          title: isRu ? 'ROZEL — контакты' : 'ROZEL — contact',
          description: isRu
            ? 'Контакты клиентского сервиса и официальные каналы дома ROZEL.'
            : 'Official contact details and client services for the house of ROZEL.'
        }
      },
      media: {
        heroImage: '',
        featuredImage: '',
        spotlightOneImage: '',
        spotlightTwoImage: '',
        spotlightThreeImage: ''
      },
      house: isRu
        ? {
            eyebrow: 'Дом моды',
            title: 'ROZEL строится на точности, сдержанности и силуэте.',
            paragraphOne:
              'Дом формируется через тихий подход к luxury: меньше жестов, сильнее форма, чище пропорция и жёстче визуальная дисциплина.',
            paragraphTwo:
              'ROZEL рассматривает тейлоринг, вечернюю конструкцию и editorial-подачу как единую систему. Вещь, кампания и клиентский опыт должны ощущаться согласованно.',
            paragraphThree:
              'Цифровая основа дома создаётся как полноценная fashion-платформа с коллекциями, клиентским сервисом и закрытым административным контуром.'
          }
        : {
            eyebrow: 'House',
            title: 'ROZEL is built on precision, restraint, and silhouette.',
            paragraphOne:
              'The house is shaped by a quiet approach to luxury: fewer gestures, stronger forms, cleaner proportions, and stricter visual discipline.',
            paragraphTwo:
              'ROZEL treats tailoring, evening structure, and editorial direction as one continuous system. The garment, the campaign, and the client experience are designed to feel aligned.',
            paragraphThree:
              'The digital house is built as a complete fashion platform with collections, client services, and a private administrative layer.'
          },
      contact: isRu
        ? {
            eyebrow: 'Контакты',
            title: 'Клиентский сервис и контакты дома.',
            emailLabel: 'Email',
            presenceLabel: 'Присутствие',
            email: 'clientservices@rozelshop.com',
            city: 'Paris / Online'
          }
        : {
            eyebrow: 'Contact',
            title: 'Client services and house contact.',
            emailLabel: 'Email',
            presenceLabel: 'Presence',
            email: 'clientservices@rozelshop.com',
            city: 'Paris / Online'
          }
    };
  }

  async getPublicContent(query: PublicContentQueryDto) {
    const locale: Locale = query.locale === 'en' ? 'en' : 'ru';

    const content = await this.prisma.siteContent.findUnique({
      where: { locale }
    });

    if (!content) {
      const created = await this.prisma.siteContent.create({
        data: this.defaultContent(locale)
      });

      return created;
    }

    return content;
  }

  async updateSiteContent(dto: UpdateSiteContentDto, adminKey?: string) {
    this.ensureAdminKey(adminKey);

    return this.prisma.siteContent.upsert({
      where: { locale: dto.locale },
      update: {
        hero: dto.hero,
        home: dto.home,
        sections: dto.sections,
        featuredProductSlug: dto.featuredProductSlug,
        spotlights: dto.spotlights,
        seo: dto.seo,
        media: dto.media,
        house: dto.house,
        contact: dto.contact
      },
      create: {
        locale: dto.locale,
        hero: dto.hero,
        home: dto.home,
        sections: dto.sections,
        featuredProductSlug: dto.featuredProductSlug,
        spotlights: dto.spotlights,
        seo: dto.seo,
        media: dto.media,
        house: dto.house,
        contact: dto.contact
      }
    });
  }

  async getPublicProducts(locale: Locale = 'ru') {
    const products = await this.prisma.product.findMany({
      where: {
        status: ProductStatus.PUBLISHED
      },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }]
    });

    return products.map((item) => ({
      id: item.id,
      slug: item.slug,
      title: locale === 'ru' ? item.titleRu : item.titleEn,
      collection: locale === 'ru' ? item.collectionRu : item.collectionEn,
      price: item.price,
      badge: locale === 'ru' ? item.badgeRu : item.badgeEn,
      subtitle: locale === 'ru' ? item.subtitleRu : item.subtitleEn,
      description: locale === 'ru' ? item.descriptionRu : item.descriptionEn,
      coverImage: item.coverImage,
      gallery: item.gallery,
      status: item.status
    }));
  }

  async getAdminProducts(adminKey?: string) {
    this.ensureAdminKey(adminKey);

    return this.prisma.product.findMany({
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }]
    });
  }

  async upsertProduct(dto: UpsertProductDto, adminKey?: string) {
    this.ensureAdminKey(adminKey);

    const payload = {
      slug: dto.slug,
      titleRu: dto.titleRu,
      titleEn: dto.titleEn,
      collectionRu: dto.collectionRu,
      collectionEn: dto.collectionEn,
      price: dto.price,
      badgeRu: dto.badgeRu,
      badgeEn: dto.badgeEn,
      subtitleRu: dto.subtitleRu,
      subtitleEn: dto.subtitleEn,
      descriptionRu: dto.descriptionRu,
      descriptionEn: dto.descriptionEn,
      coverImage: dto.coverImage || '',
      gallery: dto.gallery || [],
      status: dto.status === 'PUBLISHED' ? ProductStatus.PUBLISHED : ProductStatus.DRAFT,
      sortOrder: dto.sortOrder ?? 0
    };

    if (dto.id) {
      return this.prisma.product.update({
        where: { id: dto.id },
        data: payload
      });
    }

    return this.prisma.product.create({
      data: payload
    });
  }

  async deleteProduct(id: string, adminKey?: string) {
    this.ensureAdminKey(adminKey);

    return this.prisma.product.delete({
      where: { id }
    });
  }

  async uploadImage(file: Express.Multer.File, folder = 'cms', adminKey?: string) {
    this.ensureAdminKey(adminKey);

    if (!file) {
      throw new BadRequestException('File is required');
    }

    const bucket = process.env.R2_BUCKET_NAME;
    const publicBaseUrl = process.env.R2_PUBLIC_BASE_URL;

    if (!bucket || !publicBaseUrl) {
      throw new BadRequestException('R2 bucket variables are not configured');
    }

    const client = this.createR2Client();
    const ext = file.originalname.includes('.')
      ? file.originalname.split('.').pop()
      : 'jpg';

    const key = `${folder}/${Date.now()}-${randomUUID()}.${ext}`;

    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype
      })
    );

    return {
      key,
      url: `${publicBaseUrl.replace(/\/$/, '')}/${key}`
    };
  }
}
