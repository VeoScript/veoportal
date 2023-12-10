import React from "react";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import moment from "moment";

import prisma from "~/config/Prisma";
import { IBlogs } from "~/shared/interfaces";
import { Text } from "~/components/atoms/Text";
import { Button } from "~/components/atoms/Button";

const MainTemplate = dynamic(
  () => import("~/components/templates/MainTemplate"),
  {
    loading: () => (
      <div className="flex flex-row items-start justify-center w-full h-screen mt-20">
        <Text font="prompt" align="center" size="xl">
          Loading...
        </Text>
      </div>
    ),
  }
);

interface IProps {
  id: string;
  blog: IBlogs;
}

const BlogDetails: React.FC<IProps> = ({ id, blog }) => {
  return (
    <>
      <Head>
        <title>Blog | {blog.title}</title>
        <meta
          name="description"
          content="Official website of Jerome Villaruel (VEOSCRIPT)"
        />
        <meta name="image" content={`${blog.image}`} />
        <meta name="author" content="Jerome Villaruel" />
        <meta name="keywords" content="Jerome Villaruel" />
        <meta name="viewport" content="width=device-width, initial-scale-1" />

        <meta
          name="url"
          property="og:url"
          content={`https://www.jeromevillaruel.cf/blog/${id}`}
        />
        <meta
          name="site_name"
          property="og:site_name"
          content={`${blog.title}`}
        />
        <meta
          name="description"
          property="og:description"
          content="Official website of Jerome Villaruel (VEOSCRIPT)"
        />
        <meta
          name="secure_url"
          property="og:secure_url"
          content={`https://www.jeromevillaruel.cf/blog/${id}`}
        />
        <meta name="image" property="og:image" content={`${blog.image}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Jerome Villaruel (Veoscript)" />
        <meta name="twitter:creator" content="Jerome Villaruel" />
        <meta name="twitter:title" content={`${blog.title}`} />
        <meta
          name="twitter:description"
          content="Official website of Jerome Villaruel (VEOSCRIPT)"
        />
        <meta name="twitter:image" content={`${blog.image}`} />
        <meta
          name="twitter:domain"
          content={`https://www.jeromevillaruel.cf/blog/${id}`}
        />
      </Head>
      <MainTemplate>
        <div className="flex flex-col items-center justify-start w-full h-full">
          <div className="flex flex-col items-center w-full max-w-full h-full mt-20 md:px-0 py-10">
            <div className="flex flex-col items-center w-full max-w-full md:max-w-5xl h-full space-y-10">
              <div className="flex flex-col items-center w-full space-y-10">
                <div className="flex flex-col items-center w-full px-5 md:px-0 space-y-5">
                  <h1 className="font-bold text-5xl text-center text-black dark:text-accent-3">
                    {blog?.title}
                  </h1>
                  <span className="w-auto px-5 py-2 rounded-md font-light text-sm text-white dark:text-accent-4 bg-accent-2">
                    {blog?.topic}
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
                className="w-full px-5 md:px-0 prose-sm select-text font-prompt text-base text-black dark:text-white break-words"
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
    },
  });

  return {
    props: {
      id,
      blog: JSON.parse(JSON.stringify(blog)),
    },
  };
};

export default BlogDetails;
