import { DragEventHandler, useCallback } from "react"
import { Node, useReactFlow } from "react-flow-renderer"

import { uuid } from "@/functions/uuid"
import { useNodes } from "@/hooks/flow/useNodes"

type Args = {
  reactFlowWrapper: React.RefObject<HTMLDivElement>
}

export const useFlow = ({ reactFlowWrapper }: Args) => {
  const instance = useReactFlow()

  const { addNode, resetTarget } = useNodes((state) => state)

  const onDragOver: DragEventHandler = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onPaneClick = useCallback(() => resetTarget(), [resetTarget])

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

      const node: Node = {
        id: uuid(),
        type: "custom",
        position,
        selected: true,
        data: { type, label: "" },
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
