import { useState, useEffect, useCallback, useMemo } from 'react'

export interface InsightsResult {
  positives: { title: string; detail: string }[]
  hotspots: { title: string; detail: string }[]
  attentionScores: { employeeId: string; score: number; reason: string }[]
}

const cache = new Map<string, InsightsResult>()

function getCacheKey(week: number) {
  const managementStyle = localStorage.getItem('managementStyle') ?? ''
  return `${week}::${managementStyle}`
}

async function fetchFromApi(week: number, signal: AbortSignal): Promise<InsightsResult> {
  const managementStyle = localStorage.getItem('managementStyle') ?? ''
  const res = await fetch('/api/insights', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ week, managementStyle }),
    signal,
  })

  if (!res.ok) {
    const err = await res.json() as { error?: string }
    throw new Error(err.error ?? `HTTP ${res.status}`)
  }

  return await res.json() as InsightsResult
}

export function useInsights(week: number) {
  // result tracks what the effect has resolved to (or null if still in-flight)
  const [result, setResult] = useState<
    { data: InsightsResult } | { error: string } | null
  >(null)
  const [fetchTrigger, setFetchTrigger] = useState(0)

  const cacheKey = getCacheKey(week)
  const cached = useMemo(() => cache.get(cacheKey) ?? null, [cacheKey])

  useEffect(() => {
    if (cached) return

    const controller = new AbortController()
    let cancelled = false

    fetchFromApi(week, controller.signal)
      .then((data) => {
        if (cancelled) return
        cache.set(getCacheKey(week), data)
        setResult({ data })
      })
      .catch((e) => {
        if (cancelled) return
        if (e instanceof DOMException && e.name === 'AbortError') return
        setResult({ error: e instanceof Error ? e.message : 'Failed to fetch insights' })
      })

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [week, fetchTrigger, cached])

  const data = cached ?? (result && 'data' in result ? result.data : null)
  // Loading = no cache, no result yet (effect is in-flight)
  const loading = !cached && result === null
  const error = !cached && result && 'error' in result ? result.error : null

  const refresh = useCallback(() => {
    cache.delete(getCacheKey(week))
    setResult(null)
    setFetchTrigger((n) => n + 1)
  }, [week])

  return { data, loading, error, refresh }
}
