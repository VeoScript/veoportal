import { NextApiRequest, NextApiResponse } from "next";
import prisma from "~/config/Prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  const blogs = await prisma.blog.findFirst({
    where: {
      id: String(id)
    }
  })
  
  res.status(200).json(blogs)
}