import { useMemo, useCallback, useRef, useEffect } from 'react'
import { forceX, forceY } from 'd3-force'
import ForceGraph2D, { type ForceGraphMethods, type NodeObject, type LinkObject } from 'react-force-graph-2d'
import { employees, computeInteractions, getSurveys } from '@/data'
import type { InteractionWeights, InteractionLink } from '@/data'

interface GraphNode {
  id: string
  name: string
  x?: number
  y?: number
}

interface Props {
  week: number
  width: number
  height: number
  weights: InteractionWeights
  minWeight: number
}

const MOOD_COLORS: Record<number, string> = {
  1: '#ef4444', // red-500
  2: '#fb923c', // orange-400
  3: '#facc15', // yellow-400
  4: '#a3e635', // lime-400
  5: '#22c55e', // green-500
}
const NO_SURVEY_COLOR = '#9ca3af'

export default function NetworkGraph({ week, width, height, weights, minWeight }: Props) {
  const moodMap = useMemo(() => {
    const surveys = getSurveys(week)
    const map = new Map<string, number>()
    for (const s of surveys) {
      map.set(s.employeeId, s.mood)
    }
    return map
  }, [week])

  const graphData = useMemo(() => {
    const nodes: GraphNode[] = employees.map((e) => ({
      id: e.id,
      name: e.name.split(' ')[0],
    }))
    const links = computeInteractions(week, weights, minWeight)
    return { nodes, links }
  }, [week, weights, minWeight])

  const maxWeight = useMemo(
    () => Math.max(...graphData.links.map((l) => l.weight), 0.01),
    [graphData],
  )

  type FGMethods = ForceGraphMethods<NodeObject<GraphNode>, LinkObject<GraphNode, InteractionLink>>
  const fgRef = useRef<FGMethods | undefined>(undefined)

  const configureForces = useCallback(function configureForces(fg: FGMethods) {
    const charge = fg.d3Force('charge') as { strength?: (v: number) => void } | null
    if (charge?.strength) charge.strength(-100)
    const link = fg.d3Force('link') as { distance?: (v: number) => void } | null
    if (link?.distance) link.distance(50)
    fg.d3Force('gravityX', forceX(0).strength(0.15))
    fg.d3Force('gravityY', forceY(0).strength(0.15))
  }, [])

  // Configure forces on mount and whenever data changes.
  // Use a small interval to catch the ref being set on first render.
  const initializedRef = useRef(false)
  useEffect(() => {
    function tryInit() {
      const fg = fgRef.current
      if (!fg) return false
      configureForces(fg)
      if (initializedRef.current) {
        fg.d3ReheatSimulation()
      }
      initializedRef.current = true
      setTimeout(() => fg.zoomToFit(300, 40), 600)
      return true
    }

    if (tryInit()) return

    // On first mount, ref may not be set yet — poll briefly
    const id = setInterval(() => {
      if (tryInit()) clearInterval(id)
    }, 50)
    return () => clearInterval(id)
  }, [graphData, configureForces])

  const nodeCanvasObject = useCallback(
    (node: GraphNode, ctx: CanvasRenderingContext2D) => {
      const x = node.x ?? 0
      const y = node.y ?? 0
      const r = 8
      const mood = moodMap.get(node.id)
      const color = mood ? MOOD_COLORS[mood] : NO_SURVEY_COLOR

      ctx.beginPath()
      ctx.arc(x, y, r, 0, 2 * Math.PI, false)
      ctx.fillStyle = color
      ctx.fill()

      ctx.font = '10px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'top'
      ctx.fillStyle = '#888'
      ctx.fillText(node.name, x, y + r + 3)
    },
    [moodMap],
  )

  const nodePointerAreaPaint = useCallback(
    (node: GraphNode, color: string, ctx: CanvasRenderingContext2D) => {
      ctx.beginPath()
      ctx.arc(node.x ?? 0, node.y ?? 0, 8, 0, 2 * Math.PI, false)
      ctx.fillStyle = color
      ctx.fill()
    },
    [],
  )

  const linkWidth = useCallback(
    (link: { weight: number }) => 1 + (link.weight / maxWeight) * 4,
    [maxWeight],
  )

  const linkColor = useCallback(
    (link: { weight: number }) => {
      const alpha = 0.15 + (link.weight / maxWeight) * 0.5
      return `rgba(99, 102, 241, ${alpha})`
    },
    [maxWeight],
  )

  if (width === 0 || height === 0) return null

  return (
    <ForceGraph2D
      ref={fgRef}
      width={width}
      height={height}
      graphData={graphData}
      nodeCanvasObject={nodeCanvasObject}
      nodePointerAreaPaint={nodePointerAreaPaint}
      linkWidth={linkWidth}
      linkColor={linkColor}
      cooldownTicks={100}
      enableZoomInteraction={false}
      enablePanInteraction={false}
    />
  )
}
