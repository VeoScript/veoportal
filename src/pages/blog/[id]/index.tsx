import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import moment from "moment";
import MainTemplate from "~/components/templates/MainTemplate";

import prisma from "~/config/Prisma";
import { IBlogs } from "~/shared/interfaces";
import { Text } from "~/components/atoms/Text";
import { Button } from "~/components/atoms/Button";

interface IProps {
  id: string;
  blog: IBlogs;
}

const BlogDetails: React.FC<IProps> = ({ id, blog }) => {
  return (
    <>
      <Head>
        <title>Blog | {blog.title}</title>
        <meta name="description" content={`${blog.title} - Jerome Villaruel (VEOSCRIPT)`} />
        <meta name="og:title" content={`${blog.title}`} />
        <meta name="og:image" content={`${blog.image}`} />
        <meta name="og:description" content={`${blog.title} - Jerome Villaruel (VEOSCRIPT)`} />
        <meta name="og:url" content={`https://www.jeromevillaruel.cf/blog/${id}`} />
        <meta name="og:type" content="website" />
      </Head>
      <MainTemplate>
        <div className="flex flex-col items-center justify-start w-full h-full">
          <div className="flex flex-col items-center w-full max-w-full h-full mt-20 md:px-0 py-10">
            <div className="flex flex-col items-center w-full max-w-full md:max-w-5xl h-full space-y-10 md:space-y-20">
              <div className="flex flex-col items-center w-full space-y-10 md:space-y-20">
                <div className="flex flex-col items-center w-full px-5 md:px-0 space-y-5">
                  <Text
                    font="prompt"
                    color="pink"
                    align="center"
                    weight="bold"
                    size="5xl"
                  >
                    {blog?.title}
                  </Text>
                  <span className="w-auto px-5 py-2 rounded-md bg-accent-2">
                    <Text
                      font="prompt"
                      color="yellow"
                      align="center"
                      weight="light"
                      size="sm"
                    >
                      {blog?.topic}
                    </Text>
                  </span>
                  <Text
                    font="prompt"
                    color="white"
                    align="center"
                    weight="light"
                    size="sm"
                  >
                    {moment(blog?.createdAt).format("LLLL")}
                  </Text>
                </div>
                <Image
                  priority
                  width={500}
                  height={500}
                  src={blog?.image ?? ""}
                  className="w-full h-[15rem] md:h-[30rem] object-cover"
                  alt={blog?.title ?? ""}
                />
              </div>
              <ReactMarkdown
                className="w-full px-5 md:px-0 prose-sm select-text font-prompt text-base text-white break-words"
                remarkPlugins={[remarkGfm]}
              >
                {blog?.article ?? ""}
              </ReactMarkdown>
              <div className="flex flex-row items-center w-full px-5 md:px-0 space-x-2">
                <Link href="/blog">
                  <Button
                    weight="normal"
                    background_color="black"
                    color="white"
                    size="sm"
                  >
                    Back to blogs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MainTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const id = params?.id;

  const blog = await prisma.blog.findFirst({
    where: {
      id: String(id),
    }
  });

  return {
    props: {
      id,
      blog: JSON.parse(JSON.stringify(blog)),
    },
  };
};

export default BlogDetails;
