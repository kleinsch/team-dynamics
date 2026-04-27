import { useParams } from 'react-router-dom'

export default function TeamMember() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Team Member</h1>
      <p className="mt-2 text-muted-foreground">Details for member {id}</p>
    </div>
  )
}
