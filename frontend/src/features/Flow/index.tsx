import { StarIcon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import ReactFlow, {
  Background,
  ConnectionMode,
  ControlButton,
  Controls,
  EdgeMouseHandler,
  MiniMap,
  NodeMouseHandler,
} from "react-flow-renderer"

import { CustomNode } from "@/components"
import { useStore } from "@/hooks/flow/useStore"

import { useFlow } from "./hooks"

const nodeTypes = {
  custom: CustomNode,
}

export const Flow = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null)

  const {
    nodes,
    onNodesChange,
    removeNode,
    setTargetNode,
    resetTargetNode,
    edges,
    onEdgesChange,
    onConnect,
    setTargetEdge,
    resetTargetEdge,
  } = useStore()

  const { onDrop, onDragOver, onPaneClick } = useFlow({
    reactFlowWrapper,
  })

  const [showMinimap, setShowMinimap] = useState(true)

  const onNodeClick: NodeMouseHandler = (_, { id }) => {
    setTargetNode(id)
    resetTargetEdge()
  }

  const onEdgeClick: EdgeMouseHandler = (_, { id }) => {
    setTargetEdge(id)
    resetTargetNode()
  }

  return (
    <Box className="reactflow-wrapper" gridArea="flow" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onNodesDelete={([node]) => removeNode(node.id)}
        onNodeClick={onNodeClick}
        onNodeDragStop={(_, { id }) => setTargetNode(id)}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onEdgeClick={onEdgeClick}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
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
