import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seed mulai...");

  const result = await prisma.invitation.create({
    data: {
      slug: "andi-siti",
      groomName: "Andi",
      brideName: "Siti",
      eventDate: new Date(),
      eventTime: "10:00",
      venue: "Yogyakarta",
    },
  });

  console.log("Berhasil:", result);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });