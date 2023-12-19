import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import MainTemplate from '~/components/templates/MainTemplate'
import { Text } from '~/components/atoms/Text'
import { Button } from '~/components/atoms/Button'

import { useLazyLoadOnScroll } from '~/helpers/hooks/useLazyLoadOnScroll';

const AboutSection = dynamic(() => import('~/components/molecules/AboutSection'), { ssr: false })
const SkillsServicesSection = dynamic(() => import('~/components/molecules/SkillsServicesSection'), { ssr: false })
const ExperiencesSection = dynamic(() => import('~/components/molecules/ExperiencesSection'), { ssr: false })
const TechStacksSection = dynamic(() => import('~/components/molecules/TechStacksSection'), { ssr: false })

const Home = () => {
  const isLazyLoad = useLazyLoadOnScroll()
  
  return (
    <>
      <Head>
        <title>Jerome Villaruel</title>
        <meta name="description" content="I'm Jerome Villaruel officially known as Veoscript, a software developer based in Philippines specializing in React, React Native, NextJS, NestJS, RestAPI, GraphQL, tRPC, Prisma, Supabase, and PlanetScale. I enjoy building dynamic web applications and leveraging these technologies to create robust and scalable solutions. Excited to collaborate on innovative projects and contribute to the world of software development." />
        <meta name="image" content="https://i.ibb.co/8MfwSGd/page-image.png" />
        <meta name="author" content="Jerome Villaruel" />
        <meta name="keywords" content="Jerome Villaruel" />
        <meta name="viewport" content="width=device-width, initial-scale-1" />
        
        <meta name="url" property="og:url" content="https://jeromevillaruel.cf" />
        <meta name="site_name" property="og:site_name" content="Jerome Villaruel (Veoscript)" />
        <meta name="description" property="og:description" content="I'm Jerome Villaruel officially known as Veoscript, a software developer based in Philippines specializing in React, React Native, NextJS, NestJS, RestAPI, GraphQL, tRPC, Prisma, Supabase, and PlanetScale. I enjoy building dynamic web applications and leveraging these technologies to create robust and scalable solutions. Excited to collaborate on innovative projects and contribute to the world of software development." />
        <meta name="secure_url" property="og:secure_url" content="https://i.ibb.co/8MfwSGd/page-image.png" />
        <meta name="image" property="og:image" content="https://i.ibb.co/8MfwSGd/page-image.png" />
        <meta name="type" property="og:image:type" content="png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Jerome Villaruel (Veoscript)" />
        <meta name="twitter:creator" content="Jerome Villaruel" />
        <meta name="twitter:title" content="Jerome Villaruel (Veoscript)" />
        <meta name="twitter:description" content="I'm Jerome Villaruel officially known as Veoscript, a software developer based in Philippines specializing in React, React Native, NextJS, NestJS, RestAPI, GraphQL, tRPC, Prisma, Supabase, and PlanetScale. I enjoy building dynamic web applications and leveraging these technologies to create robust and scalable solutions. Excited to collaborate on innovative projects and contribute to the world of software development." />
        <meta name="twitter:image" content="https://i.ibb.co/8MfwSGd/page-image.png" />
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
            <div className="flex flex-col items-center w-full space-y-10">
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
                className="flex flex-col items-center w-full max-w-xl space-y-10"
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
        {isLazyLoad && (
          <>
            <AboutSection />
            <SkillsServicesSection />
            <ExperiencesSection />
            <TechStacksSection />
          </>
        )}
      </MainTemplate>
    </>
  )
}

export default Home
