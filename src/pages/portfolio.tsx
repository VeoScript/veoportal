import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/legacy/image'
import MainTemplate from '~/components/templates/MainTemplate'
import { Text } from '~/components/atoms/Text'
import { Button } from '~/components/atoms/Button'

import { IProjects } from '~/shared/interfaces'
import { useGetProjects } from '~/helpers/tanstack/queries/projects'

const Portfolio = () => {

  const { data: projects, isLoading } = useGetProjects()

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <MainTemplate>
        <div className="flex flex-col items-center justify-start w-full h-full">
          <div className="flex flex-col items-center w-full max-w-full h-full mt-20 py-10 space-y-10 md:space-y-20">
            <div className="flex flex-col items-center w-full">
              <Text font='rock_salt' color='pink' align='center' weight='bold' size='5xl'>Portfolio</Text>
            </div>
            <div className="flex flex-col items-center w-full max-w-full px-5 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
                {isLoading
                  ? <div className="col-span-3 flex flex-row items-start justify-center w-full h-screen mt-20">
                      <Text font='prompt' align='center' size='xl'>Loading...</Text>
                    </div>
                  : <>
                      {projects.items.map((item: { id: string, data: IProjects }) => (
                        <div
                          key={item.id}
                          className="flex flex-col w-full overflow-hidden bg-[#270091]"
                          data-aos="zoom-in-up"
                        >
                          <Image
                            priority
                            src={`${process.env.SQUIDEX_IMAGE_API_URL}${item.data.image[0]}`}
                            blurDataURL={`${process.env.SQUIDEX_IMAGE_API_URL}${item.data.image[0]}`}
                            className="w-full h-[15rem] object-cover"
                            width={500}
                            height={300}
                            alt="veoscript"
                            placeholder="blur"
                          />
                          <div className="flex flex-col items-start w-full p-5 space-y-5">
                            <Text font='prompt' weight="bold" color="yellow" size="xl">{item.data.title}</Text>
                            <div
                              className="font-prompt font-light text-base text-white"
                              dangerouslySetInnerHTML={{ __html: item.data.description }}
                            />
                            <div className="flex flex-row items-center w-full space-x-2">
                              {item.data.sourceCodeUrl && (
                                <Link href={item.data.sourceCodeUrl} target="_blank">
                                  <Button weight='normal' background_color='black' color='white' size='sm'>
                                    Source Code
                                  </Button>
                                </Link>
                              )}
                              {item.data.demoUrl && (
                                <Link href={item.data.demoUrl} target="_blank">
                                  <Button weight='normal' background_color='black' color='white' size='sm'>
                                    Demo
                                  </Button>
                                </Link>
                              )}
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

export default Portfolio