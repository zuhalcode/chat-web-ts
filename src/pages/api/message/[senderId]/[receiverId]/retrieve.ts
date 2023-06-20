import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { senderId, receiverId } = req.query;
    try {
      const prisma = new PrismaClient();
      const newMessage = await prisma.message.findMany({
        where: { senderId: Number(senderId), receiverId: Number(receiverId) },
        orderBy: { createdAt: "asc" },
      });
      res.json(newMessage);
    } catch (error) {
      console.log(error);
    }
  }
}
