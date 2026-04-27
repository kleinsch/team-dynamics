import { createContext, useContext } from 'react'

interface ManagementStyleContextValue {
  style: string
  setStyle: (style: string) => void
}

export const DEFAULT_MANAGEMENT_STYLE = `I'm an engineering manager focused on team health and individual growth. I value open communication and want to help my team members grow in their careers.`

export const ManagementStyleContext = createContext<ManagementStyleContextValue>({
  style: DEFAULT_MANAGEMENT_STYLE,
  setStyle: () => {},
})

export function useManagementStyle() {
  return useContext(ManagementStyleContext)
}
