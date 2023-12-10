import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/legacy/image'
import MainTemplate from '~/components/templates/MainTemplate'
import LoadingGrid from '~/components/molecules/Loading/LoadingGrid'
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
              <div className="flex flex-wrap justify-center gap-2 w-full">
                {isLoading
                  ? <LoadingGrid />
                  : <>
                      {projects.map((item: IProjects) => (
                        <div
                          key={item.id}
                          className="flex flex-col w-full max-w-md overflow-hidden bg-slate-300 dark:bg-[#1B263F]"
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
                            <h1 className="font-bold text-xl text-black dark:text-accent-3">{item.title}</h1>
                            <div
                              className="font-prompt font-light text-base text-black dark:text-white"
                              dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                            <div className="flex flex-row items-center w-full space-x-2">
                              {item.sourceCode && (
                                <Link href={item.sourceCode} target="_blank">
                                  <Button weight='normal' background_color='black' color='white' size='sm'>
                                    Source Code
                                  </Button>
                                </Link>
                              )}
                              {item.demoUrl && (
                                <Link href={item.demoUrl} target="_blank">
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