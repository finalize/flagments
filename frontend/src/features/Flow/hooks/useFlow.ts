import { DragEventHandler, useCallback } from "react"
import { useReactFlow } from "react-flow-renderer"

import { uuid } from "@/functions/uuid"
import { useStore } from "@/hooks/flow/useStore"
import { Colors } from "@/styles/theme"
import { CustomNode } from "@/types"

type Args = {
  reactFlowWrapper: React.RefObject<HTMLDivElement>
}

export const useFlow = ({ reactFlowWrapper }: Args) => {
  const instance = useReactFlow()

  const { addNode, resetTargetNode, resetTargetEdge } = useStore(
    (state) => state
  )

  const onDragOver: DragEventHandler = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onPaneClick = useCallback(() => {
    resetTargetNode()
    resetTargetEdge()
  }, [resetTargetNode, resetTargetEdge])

  const onDrop: DragEventHandler = useCallback(
    (event) => {
      event.preventDefault()

      const type = event.dataTransfer.getData("application/reactflow")

      if (
        typeof type === "undefined" ||
        !type ||
        reactFlowWrapper.current == null
      ) {
        return
      }

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()

      const position = instance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })

      const node: CustomNode = {
        id: uuid(),
        type: "custom",
        position,
        selected: true,
        data: { label: "", handles: [], color: Colors.black[400] },
      }

      addNode(node)
    },
    [instance, reactFlowWrapper, addNode]
  )

  return {
    onDragOver,
    onPaneClick,
    onDrop,
  }
}
