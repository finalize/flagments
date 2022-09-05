import { DragEventHandler, useCallback } from "react"
import { addEdge, OnConnect, useReactFlow } from "react-flow-renderer"

import { uuid } from "@/functions/uuid"
import { selectedEdgeVar, selectedNodeVar } from "@/hooks/apollo"

import { useEdge } from "./useEdge"
import { useNode } from "./useNode"

type Args = {
  reactFlowWrapper: React.RefObject<HTMLDivElement>
  setNodes: ReturnType<typeof useNode>["setNodes"]
  setEdges: ReturnType<typeof useEdge>["setEdges"]
}

export const useFlow = ({ reactFlowWrapper, setNodes, setEdges }: Args) => {
  const instance = useReactFlow()

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const onDragOver: DragEventHandler = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onPaneClick = useCallback(() => {
    selectedNodeVar(undefined)
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

      setNodes((nds) => [...nds, node])
      selectedNodeVar(node)
    },
    [setNodes, instance, reactFlowWrapper]
  )

  return {
    onConnect,
    onDragOver,
    onPaneClick,
    onDrop,
  }
}
