import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

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
