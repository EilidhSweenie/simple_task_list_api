import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

// Inserts an initial record into the local database 
async function main() {
  const newTask = await prisma.task.create({
    data: {
      title: 'Visit Lush Spa on Oxford Street',
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })