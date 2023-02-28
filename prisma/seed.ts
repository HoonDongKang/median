import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for mongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support fro mongoDB',
      body: 'test body',
      description: 'test description',
      published: false,
    },
  });
  const post2 = await prisma.article.upsert({
    where: { title: `What's new in Prisma?` },
    update: {},
    create: {
      title: `What's new in Prisma?`,
      body: 'test body 2',
      description: 'test description 2',
      published: true,
    },
  });
  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(-1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
