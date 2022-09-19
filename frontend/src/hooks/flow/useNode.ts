import { useReactiveVar } from "@apollo/client"
import { useCallback } from "react"
import { useReactFlow } from "react-flow-renderer"

import { nodeVar } from "@/hooks/apollo"

type onChangeHandlePositionArgs = {
  checked: boolean
  position: string
  positions: string[]
}

export const useNode = () => {
  const node = useReactiveVar(nodeVar)

  const { setNodes } = useReactFlow()

  const onChangeLabel = useCallback(
    (label: string) => {
      const { target } = node

      if (target === undefined) return

      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === target.id) {
            return {
              ...node,
              data: { ...target.data, label },
            }
          }

          return node
        })
      )
      nodeVar({
        target: {
          ...target,
          data: { ...target.data, label },
        },
      })
    },
    [setNodes, node]
  )

  const onChangeHandlePosition = useCallback(
    ({ checked, position, positions }: onChangeHandlePositionArgs) => {
      const { target } = node

      if (target === undefined) return

      const type = checked
        ? positions.indexOf(position) === -1
          ? target.data.type === ""
            ? position
            : `${target.data.type}_${position}`
          : target.data.type
        : positions.filter((p) => p !== position).join("_")

      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === target.id) {
            return {
              ...node,
              data: { ...target.data, type },
            }
          }

          return node
        })
      )
      nodeVar({
        target: {
          ...target,
          data: { ...target.data, type },
        },
      })
    },
    [node, setNodes]
  )

  const onDeleteNode = useCallback(() => {
    const { target } = node

    if (target === undefined) return

    setNodes((nds) => nds.filter((n) => n.id !== target.id))
    nodeVar({ target: undefined })
  }, [setNodes, node])

  return {
    onChangeLabel,
    onChangeHandlePosition,
    onDeleteNode,
  }
}
