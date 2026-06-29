import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const EMAIL = "demo-checkout-test@idahoexamprep.org";

async function main() {
  const user = await prisma.user.findUnique({ where: { email: EMAIL } });
  if (!user) {
    console.log(`No user found with email ${EMAIL}`);
    return;
  }
  await prisma.user.delete({ where: { email: EMAIL } });
  console.log(`Deleted user ${user.id} (${EMAIL}) and cascaded rows.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
