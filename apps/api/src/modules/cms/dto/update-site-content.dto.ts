import {
  IsArray,
  IsBoolean,
  IsIn,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';

class HeroDto {
  @IsString()
  eyebrow!: string;

  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsString()
  primaryLabel!: string;

  @IsString()
  primaryHref!: string;

  @IsString()
  secondaryLabel!: string;

  @IsString()
  secondaryHref!: string;

  @IsString()
  sideTopLabel!: string;

  @IsString()
  sideTopText!: string;

  @IsString()
  sideBottomLabel!: string;

  @IsString()
  sideBottomText!: string;
}

class HomeDto {
  @IsString()
  introEyebrow!: string;

  @IsString()
  introTitle!: string;

  @IsString()
  productsEyebrow!: string;

  @IsString()
  productsTitle!: string;

  @IsString()
  productsLinkLabel!: string;

  @IsString()
  featuredEyebrow!: string;

  @IsString()
  featuredTitle!: string;

  @IsString()
  featuredText!: string;

  @IsString()
  featuredCta!: string;
}

class SectionsDto {
  @IsBoolean()
  showIntro!: boolean;

  @IsBoolean()
  showCollections!: boolean;

  @IsBoolean()
  showProducts!: boolean;

  @IsBoolean()
  showFeatured!: boolean;

  @IsBoolean()
  showEditorial!: boolean;
}

class SpotlightItemDto {
  @IsString()
  eyebrow!: string;

  @IsString()
  title!: string;

  @IsString()
  text!: string;
}

class SeoItemDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;
}

class SeoDto {
  @ValidateNested()
  @Type(() => SeoItemDto)
  home!: SeoItemDto;

  @ValidateNested()
  @Type(() => SeoItemDto)
  collections!: SeoItemDto;

  @ValidateNested()
  @Type(() => SeoItemDto)
  house!: SeoItemDto;

  @ValidateNested()
  @Type(() => SeoItemDto)
  contact!: SeoItemDto;
}

class MediaDto {
  @IsString()
  heroImage!: string;

  @IsString()
  featuredImage!: string;

  @IsString()
  spotlightOneImage!: string;

  @IsString()
  spotlightTwoImage!: string;

  @IsString()
  spotlightThreeImage!: string;
}

class HouseDto {
  @IsString()
  eyebrow!: string;

  @IsString()
  title!: string;

  @IsString()
  paragraphOne!: string;

  @IsString()
  paragraphTwo!: string;

  @IsString()
  paragraphThree!: string;
}

class ContactDto {
  @IsString()
  eyebrow!: string;

  @IsString()
  title!: string;

  @IsString()
  emailLabel!: string;

  @IsString()
  presenceLabel!: string;

  @IsString()
  email!: string;

  @IsString()
  city!: string;
}

export class UpdateSiteContentDto {
  @IsIn(['ru', 'en'])
  locale!: 'ru' | 'en';

  @ValidateNested()
  @Type(() => HeroDto)
  hero!: HeroDto;

  @ValidateNested()
  @Type(() => HomeDto)
  home!: HomeDto;

  @ValidateNested()
  @Type(() => SectionsDto)
  sections!: SectionsDto;

  @IsString()
  featuredProductSlug!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpotlightItemDto)
  spotlights!: SpotlightItemDto[];

  @ValidateNested()
  @Type(() => SeoDto)
  seo!: SeoDto;

  @ValidateNested()
  @Type(() => MediaDto)
  media!: MediaDto;

  @ValidateNested()
  @Type(() => HouseDto)
  house!: HouseDto;

  @ValidateNested()
  @Type(() => ContactDto)
  contact!: ContactDto;
}

export class PublicContentQueryDto {
  @IsOptional()
  @IsIn(['ru', 'en'])
  locale?: 'ru' | 'en';
}
