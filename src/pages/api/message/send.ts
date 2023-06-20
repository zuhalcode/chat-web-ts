import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { message } = req.body;
      const prisma = new PrismaClient();
      const newMessage = await prisma.message.create({
        data: {
          content: message,
          sender: { connect: { id: 1 } },
          receiver: { connect: { id: 2 } },
        },
      });

      res.json(newMessage);
    } catch (error) {
      console.log(error);
    }
  }
}
