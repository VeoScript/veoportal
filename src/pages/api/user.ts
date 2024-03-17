import { NextApiRequest, NextApiResponse } from "next";
import prisma from "~/config/Prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await prisma.user.findUnique({
    where: {
      id: "clj2t4u0d000qksp8k8iv1pkn",
    },
    select: {
      isOpenToWork: true,
    },
  });
  res.status(200).json(user);
}
