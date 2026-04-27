import { useState } from 'react'
import { ManagementStyleContext, DEFAULT_MANAGEMENT_STYLE } from '@/hooks/useManagementStyle'

export default function Root({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = useState(DEFAULT_MANAGEMENT_STYLE)

  return (
    <ManagementStyleContext value={{ style, setStyle }}>
      {children}
    </ManagementStyleContext>
  )
}
