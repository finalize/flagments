import { useCallback, useEffect } from "react"
import { NodeDragHandler, useNodesState } from "react-flow-renderer"

import { nodeVar } from "@/hooks/apollo"
import { CustomNode, NodeData } from "@/types"

export const useNode = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>([])

  const onNodeDragStop: NodeDragHandler = useCallback((_, node) => {
    nodeVar({ target: { ...node, selected: true } })
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

  useEffect(() => {
    console.log({ nodes })
  }, [nodes])

  return {
    nodes,
    setNodes,
    onNodesChange,
    onNodeDragStop,
    handleSelectNode,
  }
}
