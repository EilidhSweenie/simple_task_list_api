import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const resolvers = {
    Query: {
        tasks: () => {
            return prisma.task.findMany();
        },
    }
}

export default resolvers;