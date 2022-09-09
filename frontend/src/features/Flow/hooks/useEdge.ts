import React from "react"
import { Edge, useEdgesState } from "react-flow-renderer"

import { selectedEdgeVar } from "@/hooks/apollo"

type OnEdgeClick =
  | ((event: React.MouseEvent<Element, MouseEvent>, node: Edge) => void)
  | undefined

export const useEdge = () => {
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const onEdgeClick: OnEdgeClick = (_, v) => selectedEdgeVar(v)

  return {
    edges,
    setEdges,
    onEdgesChange,
    onEdgeClick,
  }
}
