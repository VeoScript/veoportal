export interface IProjects {
  id: string
  image: string
  title: string
  description: string
  sourceCode: string
  demoUrl: string
  createdAt: Date
  updatedAt: Date
}

export interface IBlogs {
  id: string
  image: string
  title: string
  topic: string
  article: string
  createdAt: Date
  updatedAt: Date
}

export interface IExperience {
  image: string
  company: string
  position: string
  link: string
  experienceDate: string
  isCurrent: boolean
}

export interface ITechStacks {
  icon: string
  name: string
  link: string
}