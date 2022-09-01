import { useReactiveVar } from "@apollo/client"
import { StarIcon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/react"
import React, {
  DragEventHandler,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import ReactFlow, {
  addEdge,
  Background,
  ConnectionMode,
  ControlButton,
  Controls,
  MiniMap,
  NodeDragHandler,
  OnConnect,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "react-flow-renderer"
import { v4 as uuidV4 } from "uuid"

import { CustomNode } from "@/components/CustomNode"
import { selectedNodeVar } from "@/hooks/apollo"
import { CustomNodeProps, NodeData } from "@/types"

const nodeTypes = {
  custom: (props: CustomNodeProps) => <CustomNode {...props} />,
}

export const FlowEdit: FC = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null)

  const instance = useReactFlow()
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const selectedNode = useReactiveVar(selectedNodeVar)

  const [showMinimap, setShowMinimap] = useState(true)

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params }, eds)),
    [setEdges]
  )

  const onDragOver: DragEventHandler = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onDragStart: NodeDragHandler = useCallback((_, target) => {
    selectedNodeVar(target)
  }, [])

  const onDragStop: NodeDragHandler = useCallback((_, target) => {
    selectedNodeVar(target)
  }, [])

  const onPaneClick = useCallback(() => {
    if (selectedNode === undefined) return

    setEdges((eds) =>
      eds.map((v) => {
        if (v.source === selectedNode.id || v.target === selectedNode.id) {
          return {
            id: v.id,
            source: v.source,
            sourceHandle: v.sourceHandle,
            target: v.target,
            targetHandle: v.targetHandle,
            type: v.type,
            animated: v.animated,
          }
        }

        return v
      })
    )
    selectedNodeVar(undefined)
  }, [selectedNode, setEdges])

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

      const newNode = {
        id: uuidV4(),
        type: "custom",
        position,
        data: { type, label: "" },
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [setNodes, instance]
  )

  useEffect(() => {
    if (selectedNode) {
      setNodes((nds) =>
        nds.map((n) => (n.id === selectedNode.id ? selectedNode : n))
      )
    }
  }, [selectedNode, setNodes])

  return (
    <Box className="reactflow-wrapper" gridArea="flow" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeDragStart={onDragStart}
        onNodeDragStop={onDragStop}
        nodeTypes={nodeTypes}
        onPaneClick={onPaneClick}
        connectionMode={ConnectionMode.Loose}
        fitView
      >
        <Controls>
          <ControlButton onClick={() => setShowMinimap(!showMinimap)}>
            <StarIcon />
          </ControlButton>
        </Controls>
        <Background />
        {showMinimap && <MiniMap />}
      </ReactFlow>
    </Box>
  )
}
