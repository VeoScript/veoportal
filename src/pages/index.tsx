import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import MainTemplate from '~/components/templates/MainTemplate'
import { Facebook, Twitter, Github, LinkedIn } from '~/utils/Icons'
import { Text } from '~/components/atoms/Text'
import { Button } from '~/components/atoms/Button'

import { IExperience, ITechStacks } from '~/shared/interfaces'
import { experiences } from '../shared/mocks/experiences'
import { techstacks } from '../shared/mocks/techstacks'

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
        <meta name="secure_url" property="og:secure_url" content="https://i.ibb.co/5shcK8r/page-image.png" />
        <meta name="image" property="og:image" content="https://i.ibb.co/5shcK8r/page-image.png" />
        <meta name="type" property="og:image:type" content="png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Jerome Villaruel (Veoscript)" />
        <meta name="twitter:creator" content="Jerome Villaruel" />
        <meta name="twitter:title" content="Jerome Villaruel (Veoscript)" />
        <meta name="twitter:description" content="Official website of Jerome Villaruel (VEOSCRIPT)" />
        <meta name="twitter:image" content="https://i.ibb.co/5shcK8r/page-image.png" />
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
        <div className="flex flex-col items-center justify-start md:justify-center w-full h-full md:h-screen border-t border-neutral-800 bg-black">
          <div className="flex flex-col md:flex-row items-center justify-start md:justify-center w-full large-break-point:max-w-5xl extra-large-break-point:max-w-7xl h-full space-x-0 md:space-x-10">
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
                <Text weight='light' align='justify'>
                  {`👋 Hello, I'm Jerome Villaruel officially known as Veoscript, a software developer based in Philippines specializing in React, NextJS, NestJS, RestAPI, GraphQL, Prisma, Supabase, and PlanetScale. I enjoy building dynamic web applications and leveraging these technologies to create robust and scalable solutions. Excited to collaborate on innovative projects and contribute to the world of software development.`}
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
          <div className="flex flex-col items-center w-full large-break-point:max-w-5xl extra-large-break-point:max-w-7xl py-10 md:py-0 space-y-10 md:space-y-24">
            <div className="flex flex-col items-center w-full">
              <Text font='rock_salt' color='pink' align='center' weight='bold' size='5xl'>Skills and Services</Text>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between w-full space-x-0 md:space-x-10 space-y-5 md:space-y-0">
              <div
                className="relative flex flex-col items-center w-full space-y-3"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <Image
                  src="/images/icons/image2.webp"
                  className="w-16 md:w-28 h-16 md:h-28 object-cover bg-transparent"
                  alt="Web Development"
                  width={100}
                  height={100}
                  quality={100}
                />
                <Text align='center' weight='bold' size='2xl'>Web Development</Text>
                <Text align='left' weight='light' size='sm'>Consider as a full-stack developer using Git, NextJS, NuxtJS, NestJS, Prisma, PostgreSQL, MySQL, MSSQL, PlanetScale, GraphQL and REST-API.</Text>
              </div>
              <div
                className="flex flex-col items-center w-full space-y-3"
                data-aos="fade-up"  
                data-aos-delay="400"
              >
                <Image
                  src="/images/icons/image1.webp"
                  className="w-16 md:w-28 h-16 md:h-28 object-cover bg-transparent"
                  alt="Web Development"
                  width={100}
                  height={100}
                  quality={100}
                />
                <Text align='center' weight='bold' size='2xl'>Software Development</Text>
                <Text align='left' weight='light' size='sm'>Can create desktop applications using Tauri, Electron, and C# WFA. Mobile applications both iOS & Android using React Native and Ionic.</Text>
              </div>
              <div
                className="flex flex-col items-center w-full space-y-3"
                data-aos="fade-left"  
                data-aos-delay="600"
              >
                <Image
                  src="/images/icons/image4.webp"
                  className="w-16 md:w-28 h-16 md:h-28 object-cover bg-transparent"
                  alt="Web Development"
                  width={100}
                  height={100}
                  quality={100}
                />
                <Text align='center' weight='bold' size='2xl'>I.T. Networking</Text>
                <Text align='left' weight='light' size='sm'>Handle network topology, network security, microservices, database administrator and local area network.</Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-screen px-5 border-t border-neutral-800 bg-accent-2">
          <div className="flex flex-col items-center w-full large-break-point:max-w-5xl extra-large-break-point:max-w-7xl space-y-24">
            <div className="flex flex-col items-center w-full">
              <Text font='rock_salt' color='pink' align='center' weight='bold' size='5xl'>Experiences</Text>
            </div>
            <div className="flex flex-col items-center w-full max-w-full space-y-5">
              {experiences.map((experience: IExperience, index: number) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between w-full p-3 space-y-3 md:space-y-0 overflow-hidden rounded-xl border border-neutral-800"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="flex flex-row items-center w-auto space-x-5">
                    <Image
                      src={experience.image}
                      className="w-[3rem] h-[3rem] object-cover rounded-full bg-transparent"
                      alt={experience.image}
                      width={100}
                      height={100}
                      quality={100}
                    />
                    <div className="flex flex-col items-start w-full">
                      <Link href={experience.link} target="_blank">
                        <Text weight='bold' size='lg'>{experience.company}</Text>
                      </Link>
                      <Text weight='light' size='sm'>{experience.position}</Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start w-full md:w-auto ml-[4.2rem] md:ml-0">
                    <Text size='sm' color={`${experience.isCurrent ? 'yellow' : 'gray'}`}>{experience.experienceDate}</Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full md:h-screen px-5 border-t border-neutral-800 bg-accent-1">
          <div className="flex flex-col items-center w-full large-break-point:max-w-5xl extra-large-break-point:max-w-7xl py-10 md:py-0 space-y-10 md:space-y-24">
            <div className="flex flex-col items-center w-full">
              <Text font='rock_salt' color='pink' align='center' weight='bold' size='5xl'>Tech Stacks</Text>
            </div>
            <div
              className="flex flex-col items-center w-full max-w-full space-y-10"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap items-center justify-center w-full max-w-full gap-10">
                {techstacks.map((techstack: ITechStacks, index: number) => (
                  <Link
                    key={index}
                    href={techstack.link}
                    target="_blank"
                    className="transition ease-in-out duration-200 transform hover:scale-110"
                  >
                    <Image
                      src={techstack.icon}
                      className="w-[6rem] h-[6rem] object-cover bg-transparent"
                      alt={techstack.name}
                      width={500}
                      height={500}
                      quality={100}
                    />
                  </Link>
                ))}
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
