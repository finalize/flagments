import { useReactiveVar } from "@apollo/client"
import React, { useEffect } from "react"
import { Edge, useEdgesState } from "react-flow-renderer"

import { selectedEdgeVar } from "@/hooks/apollo"
import { Colors } from "@/styles/theme"

type OnEdgeClick =
  | ((event: React.MouseEvent<Element, MouseEvent>, node: Edge) => void)
  | undefined

export const useEdge = () => {
  const selectedEdge = useReactiveVar(selectedEdgeVar)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const onEdgeClick: OnEdgeClick = (_, v) => selectedEdgeVar(v)

  useEffect(() => {
    if (selectedEdge) {
      setEdges((edgs) =>
        edgs.map((edg) =>
          edg.id === selectedEdge.id
            ? {
                ...edg,
                selected: true,
                animated: true,
                style: { stroke: Colors.blue[400] },
              }
            : { ...edg, selected: false, animated: false, style: undefined }
        )
      )
    } else {
      setEdges((edgs) =>
        edgs.map((edg) => ({
          ...edg,
          selected: false,
          animated: false,
          style: undefined,
        }))
      )
    }
  }, [setEdges, selectedEdge])

  return {
    edges,
    setEdges,
    onEdgesChange,
    onEdgeClick,
  }
}
