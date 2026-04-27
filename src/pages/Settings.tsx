import { useState } from 'react'
import { useManagementStyle, DEFAULT_MANAGEMENT_STYLE } from '@/hooks/useManagementStyle'

export default function Settings() {
  const { style, setStyle } = useManagementStyle()
  const [draft, setDraft] = useState(style)
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setStyle(draft)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="mt-2 text-muted-foreground">
        Describe your management style and goals. This is passed to the AI so insights and guidance are tailored to you.
      </p>
      <textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        rows={6}
        className="mt-4 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        placeholder={DEFAULT_MANAGEMENT_STYLE}
      />
      <div className="mt-3 flex items-center gap-3">
        <button
          onClick={handleSave}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
        >
          Save
        </button>
        {saved && <span className="text-sm text-muted-foreground">Saved</span>}
      </div>
    </div>
  )
}
