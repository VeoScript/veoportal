import { useQuery } from '@tanstack/react-query'
import api from '../../../config/Axios'

export const useGetProjects = () => {
  return useQuery(['projects'],
    async () => {
      const projects = await api.get('api/content/veoportal/projects?q')
      return projects.data
    },
    {
      onError: (error: any) => {
        console.error('ERROR GET PROJECTS', error.response.data)
      }
    }
  )
}
