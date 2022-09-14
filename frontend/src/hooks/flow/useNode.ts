import { useReactiveVar } from "@apollo/client"
import { useCallback } from "react"
import { useReactFlow } from "react-flow-renderer"

import { selectedNodeVar } from "@/hooks/apollo"

type onChangeHandlePositionArgs = {
  checked: boolean
  position: string
  positions: string[]
}

export const useNode = () => {
  const selectedNode = useReactiveVar(selectedNodeVar)

  const { setNodes } = useReactFlow()

  const onChangeLabel = useCallback(
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

  const onChangeHandlePosition = useCallback(
    ({ checked, position, positions }: onChangeHandlePositionArgs) => {
      if (selectedNode === undefined) return
      const type = checked
        ? positions.indexOf(position) === -1
          ? selectedNode.data.type === ""
            ? position
            : `${selectedNode.data.type}_${position}`
          : selectedNode.data.type
        : positions.filter((p) => p !== position).join("_")

      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === selectedNode.id) {
            return {
              ...node,
              data: { ...selectedNode.data, type },
            }
          }

          return node
        })
      )
      selectedNodeVar({
        ...selectedNode,
        data: { ...selectedNode.data, type },
      })
    },
    [selectedNode, setNodes]
  )

  return {
    onChangeLabel,
    onChangeHandlePosition,
  }
}
