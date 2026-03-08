import { PrismaClient, ProductStatus, UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'founder@rozelshop.com';
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'ChangeThisNow_123!';

  const passwordHash = await bcrypt.hash(adminPassword, 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail.toLowerCase() },
    update: {
      passwordHash,
      role: UserRole.SUPERADMIN,
      isActive: true,
    },
    create: {
      email: adminEmail.toLowerCase(),
      passwordHash,
      firstName: 'ROZEL',
      lastName: 'Founder',
      role: UserRole.SUPERADMIN,
      isActive: true,
    },
  });

  await prisma.product.upsert({
    where: { slug: 'noir-tailored-coat' },
    update: {},
    create: {
      slug: 'noir-tailored-coat',
      title: 'Noir Tailored Coat',
      subtitle: 'Signature silhouette',
      description:
        'Structured long coat with sharp shoulder line and refined editorial profile.',
      sku: 'RZL-COAT-001',
      price: 240000,
      currency: 'USD',
      status: ProductStatus.PUBLISHED,
      isFeatured: true,
      sortOrder: 1,
      createdById: admin.id,
      updatedById: admin.id,
      coverImage:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    },
  });

  await prisma.product.upsert({
    where: { slug: 'atelier-silk-dress' },
    update: {},
    create: {
      slug: 'atelier-silk-dress',
      title: 'Atelier Silk Dress',
      subtitle: 'Private capsule',
      description:
        'Fluid evening piece built for campaign presentation and limited release.',
      sku: 'RZL-DRS-001',
      price: 180000,
      currency: 'USD',
      status: ProductStatus.DRAFT,
      isFeatured: false,
      sortOrder: 2,
      createdById: admin.id,
      updatedById: admin.id,
    },
  });

  console.log('Seed complete');
  console.log(`Admin email: ${adminEmail}`);
  console.log(`Admin password: ${adminPassword}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
