import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/legacy/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import MainTemplate from '~/components/templates/MainTemplate'
import { Text } from '~/components/atoms/Text'
import { Button } from '~/components/atoms/Button'

import { IBlogs } from '~/shared/interfaces'
import { useGetBlogs } from '~/helpers/tanstack/queries/blogs'

const Blog = () => {

  const { data: blogs, isLoading } = useGetBlogs()

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <MainTemplate>
        <div className="flex flex-col items-center justify-start w-full h-full">
          <div className="flex flex-col items-center w-full max-w-full h-full mt-20 py-10 space-y-10 md:space-y-20">
            <div className="flex flex-col items-center w-full">
              <Text font='rock_salt' color='pink' align='center' weight='bold' size='5xl'>Blog</Text>
            </div>
            <div className="flex flex-col items-center w-full max-w-full px-5 space-y-10">
              <div className="flex flex-wrap justify-center gap-2 w-full">
                {isLoading
                  ? <div className="flex flex-row items-start justify-center w-full h-screen mt-20">
                      <Text font='prompt' align='center' size='xl'>Loading...</Text>
                    </div>
                  : <>
                      {blogs.map((item: IBlogs) => (
                        <div
                          key={item.id}
                          className="flex flex-col w-full max-w-md h-auto overflow-hidden bg-[#270091]"
                          data-aos="zoom-in-up"
                        >
                          <Image
                            priority
                            src={item.image}
                            blurDataURL={item.image}
                            className="w-full h-[15rem] object-cover"
                            width={500}
                            height={300}
                            alt="veoscript"
                            placeholder="blur"
                          />
                          <div className="flex flex-col items-start w-full p-5 space-y-5">
                            <Text font='prompt' weight="bold" color="yellow" size="xl">{item.title}</Text>
                            <ReactMarkdown
                              className="w-full font-prompt font-light text-base text-white line-clamp-3 break-words"
                              remarkPlugins={[remarkGfm]}
                            >
                              {item.article}
                            </ReactMarkdown>
                            <div className="flex flex-row items-center w-full space-x-2">
                              <Link href={`/blog/${item.id}`}>
                                <Button weight='normal' background_color='black' color='white' size='sm'>
                                  See more
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                }
              </div>
            </div>
          </div>
        </div>
      </MainTemplate>
    </>
  )
}

export default Blog