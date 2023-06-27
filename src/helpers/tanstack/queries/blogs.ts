import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { IBlogs } from '~/shared/interfaces'

export const useGetBlogs = () => {
  return useQuery(['blogs'],
    async () => {
      const blogs = await axios.get('/api/blogs')
      return blogs.data
    },
    {
      onError: (error: any) => {
        console.error('ERROR GET BLOGS', error.response.data)
      }
    }
  )
}

export const useGetBlog = (id: string) => {
  return useQuery<IBlogs>(['blog', id],
    async () => {
      const blog = await axios.get(`/api/blogs/${id}`)
      return blog.data
    },
    {
      enabled: !!id,
      onError: (error: any) => {
        console.error('ERROR GET BLOG DETAILS', error.response.data)
      }
    }
  )
}
