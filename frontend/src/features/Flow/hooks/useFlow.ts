import { DragEventHandler, useCallback } from "react"
import { addEdge, OnConnect, useReactFlow } from "react-flow-renderer"

import { uuid } from "@/functions/uuid"
import { nodeVar, selectedEdgeVar } from "@/hooks/apollo"

import { useEdge, useNode } from "."

type Args = {
  reactFlowWrapper: React.RefObject<HTMLDivElement>
  setEdges: ReturnType<typeof useEdge>["setEdges"]
  handleSelectNode: ReturnType<typeof useNode>["handleSelectNode"]
}

export const useFlow = ({
  reactFlowWrapper,
  setEdges,
  handleSelectNode,
}: Args) => {
  const instance = useReactFlow()

  const onConnect: OnConnect = useCallback(
    (params) =>
      setEdges((eds) => {
        const edges = addEdge({ ...params }, eds)
        const edge = selectedEdgeVar(edges.at(-1))
        selectedEdgeVar(edge)
        return edges
      }),
    [setEdges]
  )

  const onDragOver: DragEventHandler = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onPaneClick = useCallback(() => {
    nodeVar({ target: undefined })
    selectedEdgeVar(undefined)
  }, [])

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

      const node = {
        id: uuid(),
        type: "custom",
        position,
        selected: true,
        data: { type, label: "" },
      }

      handleSelectNode(node)
    },
    [instance, reactFlowWrapper, handleSelectNode]
  )

  return {
    onConnect,
    onDragOver,
    onPaneClick,
    onDrop,
  }
}
