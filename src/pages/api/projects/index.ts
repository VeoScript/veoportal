import { NextApiRequest, NextApiResponse } from "next";
import prisma from "~/config/Prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const projects = await prisma.projects.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  res.status(200).json(projects)
}