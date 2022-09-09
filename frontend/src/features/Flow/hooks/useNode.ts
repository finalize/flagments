import { useCallback } from "react"
import { NodeDragHandler, useNodesState } from "react-flow-renderer"

import { selectedNodeVar } from "@/hooks/apollo"
import { CustomNode, NodeData } from "@/types"

export const useNode = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>([])

  const onNodeDragStop: NodeDragHandler = useCallback((_, node) => {
    selectedNodeVar({ ...node, selected: true })
  }, [])

  const handleSelectNode = useCallback(
    (selectedNode: CustomNode) => {
      setNodes((nds) => [
        ...nds.map((nd) => ({ ...nd, selected: false })),
        selectedNode,
      ])
    },
    [setNodes]
  )

  return {
    nodes,
    onNodesChange,
    onNodeDragStop,
    handleSelectNode,
  }
}
