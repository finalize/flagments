import { useReactiveVar } from "@apollo/client"
import { useCallback, useEffect } from "react"
import { NodeDragHandler, useNodesState } from "react-flow-renderer"

import { selectedNodeVar } from "@/hooks/apollo"
import { SelectedNode } from "@/hooks/apollo/useSelectNodeVar"
import { NodeData } from "@/types"

export const useNode = () => {
  const selectedNode = useReactiveVar(selectedNodeVar)

  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>([])

  const onNodeDragStop: NodeDragHandler = useCallback((_, node) => {
    selectedNodeVar({ ...node, selected: true })
  }, [])

  const handleSelectNode = useCallback(
    (selectedNode: SelectedNode) => {
      if (selectedNode) {
        setNodes((nds) =>
          nds.map((nd) =>
            nd.id === selectedNode.id
              ? { ...nd, selected: true }
              : { ...nd, selected: false }
          )
        )
      }
    },
    [setNodes]
  )

  useEffect(() => {
    handleSelectNode(selectedNode)
  }, [selectedNode, handleSelectNode])

  return {
    nodes,
    setNodes,
    onNodesChange,
    onNodeDragStop,
  }
}
