import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetProjects = () => {
  return useQuery(['projects'],
    async () => {
      const projects = await axios.get('/api/projects')
      return projects.data
    },
    {
      onError: (error: any) => {
        console.error('ERROR GET PROJECTS', error.response.data)
      }
    }
  )
}
