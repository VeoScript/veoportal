export type ProjectList = {
  src: string;
  title: string;
  description: string;
  sourceCode?: string;
  demo?: string;
  isCompanyProject?: boolean;
  role?: "Project Lead" | "Contributing Developer";
};

export const projects: ProjectList[] = [
  {
    src: "/images/projects/elog66.webp",
    title: "eLog66",
    description:
      "Led the development of eLog66, a secure, auditable digital logbook for CASA Part 66 aircraft maintenance engineers. The platform replaces paper-based records with a mobile-first solution built for tracking maintenance experience and approvals.",
    demo: "https://tailwind-elog66.com",
    isCompanyProject: true,
    role: "Project Lead",
  },
  {
    src: "/images/projects/elog66-app.webp",
    title: "eLog66 App",
    description:
      "Led the development of the eLog66 mobile app for aircraft maintenance engineers working on the hangar floor, in line maintenance, or at remote sites. It helps engineers capture tasks, request supervisor sign-offs, and track progress, including when offline.",
    demo: "https://tailwind-elog66.com/mobile-app",
    isCompanyProject: true,
    role: "Project Lead",
  },
  {
    src: "/images/projects/booky.webp",
    title: "Booky",
    description:
      "Contributed as part of the Booky development team to a popular lifestyle and food platform in the Philippines that offers exclusive discount vouchers and deals of up to 50% off across thousands of partner merchants.",
    demo: "https://booky.ph",
    isCompanyProject: true,
    role: "Contributing Developer",
  },
  {
    src: "/images/projects/booky-app.webp",
    title: "Booky App",
    description:
      "Worked as part of the Booky app development team on a popular lifestyle and food platform in the Philippines, helping deliver exclusive discount vouchers and deals of up to 50% off across thousands of partner merchants.",
    demo: "https://booky.ph/app",
    isCompanyProject: true,
    role: "Contributing Developer",
  },
  {
    src: "/images/projects/angels-pizza.webp",
    title: "Angel's Pizza App",
    description:
      "Contributed as part of the development team to the Angel's Pizza mobile app, which lets customers browse the menu, order for delivery or pickup, and access available deals and promotions.",
    demo: "https://apps.apple.com/ph/app/angels-pizza/id6755482564",
    isCompanyProject: true,
    role: "Contributing Developer",
  },
  {
    src: "/images/projects/mimosa-plus-golf.webp",
    title: "Mimosa Plus Golf",
    description:
      "Contributed as part of the development team to the Mimosa Plus Golf app, a mobile product supporting the digital experience for golfers at Mimosa Plus Golf Course.",
    demo: "https://idealcontrols.com.ph",
    isCompanyProject: true,
    role: "Contributing Developer",
  },
  {
    src: "/images/projects/ideal-controls.webp",
    title: "Ideal Controls",
    description:
      "Contributed as part of the development team to the Ideal Controls project. Ideal Controls provides customized control and automation systems, including systems integration tailored to client needs.",
    demo: "https://idealcontrols.com.ph",
    isCompanyProject: true,
    role: "Contributing Developer",
  },
  {
    src: "/images/projects/pandan-pos.webp",
    title: "Pandan POS",
    description:
      "Take your business anywhere with Pandan POS, the ultimate offline point-of-sale system designed for small businesses, entrepreneurs, and mobile vendors. Whether you run a retail shop, food stall, or service-based business, Pandan POS helps you manage sales, orders and track inventory—all without needing an internet connection!",
    sourceCode: "https://github.com/VeoScript/pandan-pos",
    demo: "https://play.google.com/store/apps/details?id=com.veoscript.PandanPOS",
  },
  {
    src: "/images/projects/pandanpos-docs.webp",
    title: "Pandan POS Documentation",
    description:
      "A comprehensive documentation website for Pandan POS, built with React.js and Docusaurus. Provides developers, users, and business owners with clear guides, setup instructions, feature documentation, API references, and technical resources to help them understand, configure, and effectively use the Pandan POS ecosystem.",
    sourceCode: "https://github.com/VeoScript/pandan-pos-docs",
    demo: "https://pandanpos-docs.jeromevillaruel.com",
  },
  {
    src: "/images/projects/magaaazine.webp",
    title: "Magaaazine",
    description:
      "Discover, connect and share, with feature of sending messages, images, and files anonymously. Using NextJS 13, Tailwind CSS, Uploadthing, Resend, Prisma, Tanstack, tRPC, Supabase and PostgreSQL.",
    sourceCode: "https://github.com/VeoScript/magaaazine",
    demo: "https://magaaazine.jeromevillaruel.com",
  },
  {
    src: "/images/projects/papino-cover.webp",
    title: "Papino Android",
    description:
      "Transform images into text effortlessly! Detect text in captured image and turns to normal text. Using React Native and Google ML Kit.",
    sourceCode: "https://github.com/VeoScript/papino",
    demo: "https://github.com/VeoScript/papino/releases/download/v0.0.5/papino-v0.0.5.apk",
  },
  {
    src: "/images/projects/venus-dorm-budget.webp",
    title: "Venus Dorm Budget",
    description:
      "This app is for treasurer of Venus Dorm. It can manage cash in and add expenses in offline out-of-the-box. Using React Native, Zustand Persist, Tailwind and Local Storage.",
    sourceCode: "https://github.com/VeoScript/venus-dorm-budget",
    demo: "https://github.com/VeoScript/venus-dorm-budget/releases/download/beta-release/venus-dorm-v0.0.1.apk",
  },
  {
    src: "/images/projects/rekados-mobile.webp",
    title: "Rekados Mobile (Android)",
    description:
      "Your daily recipe at a glance 🍲. A social media app for people who want to share and explore new recipes and dishes. Using React Native, ExpressJS, TailwindCSS, Prisma, and PlanetScale.",
    sourceCode: "https://github.com/VeoScript/rekados-mobile",
    demo: "https://github.com/VeoScript/rekados-mobile/releases/download/pre-release/rekados-android.apk",
  },
  {
    src: "/images/projects/tomato-chat.webp",
    title: "TomatoChat",
    description:
      "Aesthetic social media with messenger featuring minimal designs. Discover the world of simplicity. Start your convo, with fun and aesthetic conversations. Using Next JS, Prisma, and PlanetScale",
    sourceCode: "https://github.com/VeoScript/tomatochat",
    demo: "https://tomatochat.vercel.app/",
  },
  {
    src: "/images/projects/budgie.webp",
    title: "Budgie",
    description:
      "Budgie is an open-source project a free personal finance, budget and expense tracking app to monitor your budget plan and daily expenses.",
    sourceCode: "https://github.com/VeoScript/budgie",
    demo: "https://budgie.vercel.app/",
  },
  {
    src: "/images/projects/fixrhythm.webp",
    title: "Fixrhythm",
    description:
      "Fixrhythm is a social media whose goal is for people to share their thoughts around the world through music and poetry. And to inspire other music artist and lyricists to compose their own compositions.",
    sourceCode: "https://github.com/VeoScript/fixrhythm",
    demo: "https://fixrhythm.vercel.app/",
  },
  {
    src: "/images/projects/cozy.webp",
    title: "Cozy",
    description:
      "Your online address book for the future with realtime room chatting feature. Created with Next JS, Prisma ORM, TailwindCSS, PostgreSQL and powered by Heroku.",
    sourceCode: "https://github.com/VeoScript/cozy",
    demo: "https://cozy-pied.vercel.app/",
  },
  {
    src: "/images/projects/ictmr.webp",
    title: "ICTMR",
    description:
      "Generate monthly reports, internet status and downtime reports monitoring. ICTMR managed all of computers that registered inside the plant and it can be used as your daily journal and notebook. Using NextJS and Prisma PostgreSQL",
    sourceCode: "https://github.com/VeoScript/ictmr",
  },
  {
    src: "/images/projects/spmi-health-declaration-android.webp",
    title: "SPMI Health Declaration Android",
    description:
      "SPMI Covid-19 Health Declaration System in Android & iOS mobile application version, using Xamarin C#.",
    sourceCode: "https://github.com/VeoScript/spmi-health-declaration-android",
  },
  {
    src: "/images/projects/spmi-health-declaration.webp",
    title: "SPMI Health Declaration",
    description:
      "This webapp is for covid19 health declaration system for the employees of Specialty Pulp Manufacturing Inc. using Vue JS Single Page Application, Backend by Hasura GraphQL.",
    sourceCode: "https://github.com/VeoScript/spmi-health-declaration",
    demo: "https://spmi-health-declaration.vercel.app/",
  },
  {
    src: "/images/projects/leyeco-iv-pos-and-inventory.webp",
    title: "Leyeco IV POS and Inventory",
    description: "LEYECO IV Canteen Point of Sales and Inventory System. Using C# and SQL Server.",
    sourceCode: "https://github.com/VeoScript/leyecoiv-pos-and-inventory",
  },
  {
    src: "/images/projects/gorehab.webp",
    title: "GoRehab",
    description:
      "GoRehab official website of a private sector rehabilitation center, using PHP and MySQL.",
    sourceCode: "https://github.com/VeoScript/GoRehab",
  },
  {
    src: "/images/projects/dafenhs-automated-enrollment-system.webp",
    title: "DAFENHS Automated Enrollment System",
    description:
      "This program was implemented in DAFENHS Don Agustin F. Escaño National High School, using Visual Basic and SQL Server.",
    sourceCode: "https://github.com/VeoScript/DAFENHS-Automated-Enrollment-System",
  },
  {
    src: "/images/projects/automated-parking-monitoring-system.webp",
    title: "Automated Parking Monitoring System",
    description:
      "Parking Lot Monitoring System this program is free to download, you can use this to your personal used. This system is using Visual Basic and SQL Server",
    sourceCode: "https://github.com/VeoScript/Automated-Parking-Monitoring-System",
  },
];
