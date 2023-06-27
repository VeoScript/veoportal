import { NextApiRequest, NextApiResponse } from "next";
import prisma from "~/config/Prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  res.status(200).json(blogs)
}