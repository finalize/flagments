import { useCallback } from "react"
import { NodeDragHandler, useNodesState } from "react-flow-renderer"

import { selectedNodeVar } from "@/hooks/apollo"
import { NodeData } from "@/types"

export const useNode = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>([])

  const onNodeDragStop: NodeDragHandler = useCallback((_, node) => {
    selectedNodeVar({ ...node, selected: true })
  }, [])

  return {
    nodes,
    setNodes,
    onNodesChange,
    onNodeDragStop,
  }
}
