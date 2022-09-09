import { useReactiveVar } from "@apollo/client"
import { useCallback } from "react"
import { useReactFlow } from "react-flow-renderer"

import { selectedNodeVar } from "@/hooks/apollo"

export const useNode = () => {
  const selectedNode = useReactiveVar(selectedNodeVar)

  const { setNodes } = useReactFlow()

  const handleChangeLabel = useCallback(
    (label: string) => {
      if (selectedNode === undefined) return

      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === selectedNode.id) {
            return {
              ...node,
              data: { ...selectedNode.data, label },
            }
          }

          return node
        })
      )
      selectedNodeVar({
        ...selectedNode,
        data: { ...selectedNode.data, label },
      })
    },
    [setNodes, selectedNode]
  )

  return {
    handleChangeLabel,
  }
}
