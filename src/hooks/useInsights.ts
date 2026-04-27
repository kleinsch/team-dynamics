import { useState, useEffect, useCallback } from 'react'

export interface InsightsResult {
  positives: { title: string; detail: string }[]
  hotspots: { title: string; detail: string }[]
  attentionScores: { employeeId: string; score: number; reason: string }[]
}

const cache = new Map<string, InsightsResult>()

async function getInsights(week: number, managementStyle: string, signal: AbortSignal): Promise<InsightsResult> {
  const cacheKey = `${week}::${managementStyle}`
  const cached = cache.get(cacheKey)
  if (cached) return cached

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

  const data = await res.json() as InsightsResult
  cache.set(cacheKey, data)
  return data
}

export function useInsights(week: number, managementStyle: string) {
  const cacheKey = `${week}::${managementStyle}`

  const [result, setResult] = useState<
    { key: string; data: InsightsResult } | { key: string; error: string } | null
  >(() => {
    const cached = cache.get(cacheKey)
    return cached ? { key: cacheKey, data: cached } : null
  })
  const [fetchTrigger, setFetchTrigger] = useState(0)

  const resultForKey = result?.key === cacheKey ? result : null

  useEffect(() => {
    const controller = new AbortController()
    let cancelled = false

    getInsights(week, managementStyle, controller.signal)
      .then((data) => {
        if (cancelled) return
        setResult({ key: cacheKey, data })
      })
      .catch((e) => {
        if (cancelled) return
        if (e instanceof DOMException && e.name === 'AbortError') return
        setResult({ key: cacheKey, error: e instanceof Error ? e.message : 'Failed to fetch insights' })
      })

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [week, managementStyle, cacheKey, fetchTrigger])

  const data = resultForKey && 'data' in resultForKey ? resultForKey.data : null
  const loading = !resultForKey
  const error = resultForKey && 'error' in resultForKey ? resultForKey.error : null

  const refresh = useCallback(() => {
    cache.delete(cacheKey)
    setResult(null)
    setFetchTrigger((n) => n + 1)
  }, [cacheKey])

  return { data, loading, error, refresh }
}
