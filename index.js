const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Membuat data user baru
  const userBaru = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });

  console.log('User baru berhasil dibuat:', userBaru);

  // Menampilkan semua data user
  const semuaUser = await prisma.user.findMany();
  console.log('Daftar user:');
  console.table(semuaUser);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
