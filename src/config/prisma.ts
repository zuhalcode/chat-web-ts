import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

export const prismaClient = (): PrismaClient => {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
};

export default prismaClient();
