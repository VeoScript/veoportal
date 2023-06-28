import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import MainTemplate from '~/components/templates/MainTemplate'
import { Facebook, Twitter, Github, LinkedIn } from '~/utils/Icons'
import { Text } from '~/components/atoms/Text'
import { Button } from '~/components/atoms/Button'

const Home = () => {
  return (
    <>
      <Head>
        <title>Jerome Villaruel</title>
        <meta name="description" content="Official website of Jerome Villaruel (VEOSCRIPT)" />
        <meta name="author" content="Jerome Villaruel" />
        <meta name="keywords" content="Jerome Villaruel" />
        <meta name="viewport" content="width=device-width, initial-scale-1" />
        
        <meta name="url" property="og:url" content="https://jeromevillaruel.cf" />
        <meta name="site_name" property="og:site_name" content="Jerome Villaruel (Veoscript)" />
        <meta name="description" property="og:description" content="Official website of Jerome Villaruel (VEOSCRIPT)" />
        <meta name="secure_url" property="og:secure_url" content="https://i.ibb.co/2t5Jk45/page-image.png" />
        <meta name="image" property="og:image" content="https://i.ibb.co/2t5Jk45/page-image.png" />
        <meta name="type" property="og:image:type" content="png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Jerome Villaruel (Veoscript)" />
        <meta name="twitter:creator" content="Jerome Villaruel" />
        <meta name="twitter:title" content="Jerome Villaruel (Veoscript)" />
        <meta name="twitter:description" content="Official website of Jerome Villaruel (VEOSCRIPT)" />
        <meta name="twitter:image" content="https://i.ibb.co/2t5Jk45/page-image.png" />
        <meta name="twitter:domain" content="https://jeromevillaruel.cf" />
      </Head>
      <MainTemplate>
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <div className="flex flex-col items-center w-full max-w-full mt-10 px-5 md:px-0 space-y-10">
            <div
              className="flex items-center justify-center w-full"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Text font='rock_salt' color='pink' align='center' weight='bold' size='5xl'>Veo</Text>
              <Text font='rock_salt' color='yellow' align='center' weight='bold' size='5xl'>Script</Text>
            </div>
            <div className="flex flex-col items-center w-full space-y-5">
              <Text 
                align='center' 
                weight='bold' 
                size='5xl'
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                The Odyssey of a Full-Stack Developer
              </Text>
              <div
                className="flex flex-col items-center w-full max-w-xl space-y-5"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Text align='center' weight='light' size='xl'>{`"Let's keep it simple and focus on what matters. Don't let yourself be overwhelmed." - Confucius`}</Text>
                <Link href="/files/jeromevillaruel.pdf" target="_blank">
                  <Button weight='bold' background_color='black' color='white' size='xl'>
                  👋 Hire Me!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:justify-center w-full h-screen border-t border-neutral-800 bg-black">
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-full md:max-w-5xl h-full space-x-0 md:space-x-10">
            <div
              className="flex w-full max-w-full md:max-w-[20rem]"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Image
                src="/images/jeromevillaruel.png"
                className="w-full md:w-[20rem] h-[20rem] object-cover rounded-none md:rounded-ss-[5rem] md:rounded-ee-[5rem] bg-white"
                alt="veoscript"
                width={500}
                height={500}
                quality={100}
              />
            </div>
            <div
              className="flex flex-col items-start w-full px-5 md:px-0 py-5 md:py-3 space-y-10"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="flex flex-col w-full">
                <Text weight='bold' size='2xl'>Jerome Villaruel</Text>
                <Text weight='light' size='base'>Software Developer</Text>
              </div>
              <div className="flex flex-col w-full">
                <Text weight='light'>
                  {`👋 Hello, I'm Jerome Villaruel officially known as Veoscript, a software developer based in Philippines specializing in React, Next.js, Prisma, Supabase, and PlanetScale. I enjoy building dynamic web applications and leveraging these technologies to create robust and scalable solutions. Excited to collaborate on innovative projects and contribute to the world of software development.`}
                </Text>
              </div>
              <div className="flex flex-row items-center w-full space-x-5">
                <Link title="Facebook" href="https://www.facebook.com/veoscript" target="_blank">
                  <Facebook />
                </Link>
                <Link title="Twitter" href="https://twitter.com/veoscript" target="_blank">
                  <Twitter />
                </Link>
                <Link title="GitHub" href="https://github.com/veoscript" target="_blank">
                  <Github />
                </Link>
                <Link title="Linked In" href="https://www.linkedin.com/in/veoscript/" target="_blank">
                  <LinkedIn />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full md:h-screen px-5 border-t border-neutral-800 bg-accent-1">
          <div className="flex flex-col items-center w-full max-w-full md:max-w-7xl py-10 md:py-0 space-y-10 md:space-y-24">
            <div className="flex flex-col items-center w-full">
              <Text font='rock_salt' color='pink' align='center' weight='bold' size='5xl'>Skills and Services</Text>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between w-full space-x-0 md:space-x-5 space-y-5 md:space-y-0">
              <div
                className="relative flex flex-col items-center w-full space-y-3"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <svg className="w-16 md:w-20 h-16 md:h-20 fill-current text-accent-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22 17v-11.8c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20zm-18-11h16v9h-16v-9zm20 12v.8c0 .663-.537 1.2-1.2 1.2h-21.6c-.663 0-1.2-.537-1.2-1.2v-.8h10c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5h10z"/>
                </svg>
                <Text align='center' weight='bold' size='2xl'>Web Development</Text>
                <Text align='center' weight='light' size='sm'>Consider as a full-stack developer using Git, NextJS, NuxtJS, NestJS, Prisma, PostgreSQL, MySQL, MSSQL, PlanetScale, GraphQL and REST-API.</Text>
              </div>
              <div
                className="flex flex-col items-center w-full space-y-3"
                data-aos="fade-up"  
                data-aos-delay="400"
              >
                <svg className="w-16 md:w-20 h-16 md:h-20 fill-current text-accent-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/>
                </svg>
                <Text align='center' weight='bold' size='2xl'>Software Development</Text>
                <Text align='center' weight='light' size='sm'>Can create desktop applications using Tauri, Electron, and C# WFA. Mobile applications both iOS & Android using React Native and Ionic.</Text>
              </div>
              <div
                className="flex flex-col items-center w-full space-y-3"
                data-aos="fade-left"  
                data-aos-delay="600"
              >
                <svg className="w-16 md:w-20 h-16 md:h-20 fill-current text-accent-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.239-5 5s2.238 5 5 5 5-2.239 5-5-2.238-5-5-5zm15 9c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.944 1.764l5.488 2.927c-.072.301-.121.611-.121.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-22c-2.209 0-4 1.791-4 4 0 .324.049.634.121.935l-5.488 2.927c.395.536.713 1.128.944 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4s-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"/>
                </svg>
                <Text align='center' weight='bold' size='2xl'>I.T. Networking</Text>
                <Text align='center' weight='light' size='sm'>Handle network topology, network security, microservices, database administrator and local area network.</Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-screen px-5 border-t border-neutral-800 bg-accent-2">
          <div className="flex flex-col items-center w-full max-w-full space-y-24">
            <div className="flex flex-col items-center w-full">
              <Text font='rock_salt' color='pink' align='center' weight='bold' size='5xl'>Experiences</Text>
            </div>
            <div className="flex flex-col items-center w-full max-w-2xl space-y-5">
              <div
                className="flex flex-row items-center w-full p-3 space-x-5 overflow-hidden rounded-xl border border-neutral-800"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/veoportfolio.appspot.com/o/44977563_1502404626526285_6391029430868770816_n.jpg?alt=media&token=6abef4e3-5415-4337-9178-96da70db20dd"
                  className="w-[3rem] h-[3rem] object-cover rounded-full bg-transparent"
                  alt="Halcyon Agile"
                  width={100}
                  height={100}
                  quality={100}
                />
                <div className="flex flex-col items-start w-full">
                  <Link href="https://halcyonagile.com.ph/" target="_blank">
                    <Text weight='bold' size='lg'>Halcyon Agile</Text>
                  </Link>
                  <Text weight='light' size='sm'>Software Developer</Text>
                  <Text weight='thin' size='xs'>June 2022 - Present</Text>
                </div>
              </div>
              <div
                className="flex flex-row items-center w-full p-3 space-x-5 overflow-hidden rounded-xl border border-neutral-800"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/veoportfolio.appspot.com/o/spmi_icon.svg?alt=media&token=9a8bc5d0-2b5d-4dee-93ff-278e46248f6c"
                  className="w-[3rem] h-[3rem] object-cover rounded-full bg-transparent"
                  alt="Specialy Pulp Manufacturing, Inc."
                  width={500}
                  height={500}
                  quality={100}
                />
                <div className="flex flex-col items-start w-full">
                  <Link href="https://www.spmi-pulp.com/" target="_blank">
                    <Text weight='bold' size='lg'>Specialty Pulp Manufacturing, Inc.</Text>
                  </Link>
                  <Text weight='light' size='sm'>IT Specialist</Text>
                  <Text weight='thin' size='xs'>February 2020 - June 2022</Text>
                </div>
              </div>
              <div
                className="flex flex-row items-center w-full p-3 space-x-5 overflow-hidden rounded-xl border border-neutral-800"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/veoportfolio.appspot.com/o/Puregold_logo%20(1).svg?alt=media&token=2096d215-71f3-4434-a2f5-176d7f9a8583"
                  className="w-[3rem] h-[3rem] object-cover bg-transparent"
                  alt="Puregold Price Club, Inc."
                  width={500}
                  height={500}
                  quality={100}
                />
                <div className="flex flex-col items-start w-full">
                  <Link href="https://www.puregold.com.ph/" target="_blank">
                    <Text weight='bold' size='lg'>Puregold Price Club, Inc.</Text>
                  </Link>
                  <Text weight='light' size='sm'>Graphic Artist</Text>
                  <Text weight='thin' size='xs'>August 2019 - December 2019</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full md:h-screen px-5 border-t border-neutral-800 bg-accent-1">
          <div className="flex flex-col items-center w-full max-w-full py-10 md:py-0 space-y-10 md:space-y-24">
            <div className="flex flex-col items-center w-full">
              <Text font='rock_salt' color='pink' align='center' weight='bold' size='5xl'>Tech Stacks</Text>
            </div>
            <div
              className="flex flex-col items-center w-full max-w-full space-y-10"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap items-center justify-center w-full max-w-2xl gap-10">
                <Link href="https://react.dev/" target="_blank" className="transition ease-in-out duration-200 transform hover:scale-110">
                  <Image
                    src="/images/techstacks/reactjs.png"
                    className="w-[6rem] h-[6rem] object-cover bg-transparent"
                    alt="ReactJS"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
                <Link href="https://nextjs.org/" target="_blank" className="transition ease-in-out duration-200 transform hover:scale-110">
                  <Image
                    src="/images/techstacks/nextjs.png"
                    className="w-[6rem] h-[6rem] object-cover bg-transparent"
                    alt="NextJS"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
                <Link href="https://vuejs.org/" target="_blank" className="transition ease-in-out duration-200 transform hover:scale-110">
                  <Image
                    src="/images/techstacks/vuejs.png"
                    className="w-[6rem] h-[6rem] object-cover bg-transparent"
                    alt="NextJS"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
                <Link href="https://nuxt.com/" target="_blank" className="transition ease-in-out duration-200 transform hover:scale-110">
                  <Image
                    src="/images/techstacks/nuxtjs.png"
                    className="w-[6rem] h-[6rem] object-cover bg-transparent"
                    alt="NextJS"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>                
                <Link href="https://tanstack.com/query/v3/" target="_blank" className="transition ease-in-out duration-200 transform hover:scale-110">
                  <Image
                    src="/images/techstacks/reactquery.png"
                    className="w-[6rem] h-[6rem] object-cover bg-transparent"
                    alt="React Query"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
                <Link href="https://tailwindcss.com/" target="_blank" className="transition ease-in-out duration-200 transform hover:scale-110">
                  <Image
                    src="/images/techstacks/tailwindcss.png"
                    className="w-[6rem] h-[6rem] object-cover bg-transparent"
                    alt="TailwindCSS"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
                <Link href="https://tauri.app/" target="_blank" className="transition ease-in-out duration-200 transform hover:scale-110">
                  <Image
                    src="/images/techstacks/tauri.png"
                    className="w-[6rem] h-[6rem] object-cover bg-transparent"
                    alt="Tauri"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
                <Link href="https://ionicframework.com/" target="_blank" className="transition ease-in-out duration-200 transform hover:scale-110">
                  <Image
                    src="/images/techstacks/ionic.png"
                    className="w-[6rem] h-[6rem] object-cover bg-transparent"
                    alt="Tauri"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
                <Link href="https://nestjs.com/" target="_blank" className="transition ease-in-out duration-200 transform hover:scale-110">
                  <Image
                    src="/images/techstacks/nestjs.png"
                    className="w-[6rem] h-[6rem] object-cover bg-transparent"
                    alt="NestJS"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
                <Link href="https://graphql.org/" target="_blank" className="transition ease-in-out duration-200 transform hover:scale-110">
                  <Image
                    src="/images/techstacks/graphql.png"
                    className="w-[6rem] h-[6rem] object-cover bg-transparent"
                    alt="Tauri"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
                <Link href="https://www.prisma.io/" target="_blank" className="transition ease-in-out duration-200 transform hover:scale-110">
                  <Image
                    src="/images/techstacks/prismaorm.png"
                    className="w-[6rem] h-[6rem] object-cover bg-transparent"
                    alt="Prisma"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
                <Link href="https://supabase.com/" target="_blank" className="transition ease-in-out duration-200 transform hover:scale-110">
                  <Image
                    src="/images/techstacks/supabase.png"
                    className="w-[6rem] h-[6rem] object-cover bg-transparent"
                    alt="Supabase"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full p-3 bg-accent-2">
          <Text weight='light' size='xs'>&copy; {new Date().getFullYear()}, Jerome Villaruel (Veoscript). All rights reserved.</Text>
        </div>
      </MainTemplate>
    </>
  )
}

export default Home
