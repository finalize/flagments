import { StarIcon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import ReactFlow, {
  Background,
  ConnectionMode,
  ControlButton,
  Controls,
  MiniMap,
} from "react-flow-renderer"

import { CustomEdge, CustomNode } from "@/components"
import { useEdges } from "@/hooks/flow/useEdges"
import { useNodes } from "@/hooks/flow/useNodes"

import { useEdge } from "./hooks"
import { useFlow } from "./hooks"

const nodeTypes = {
  custom: CustomNode,
}

const edgeTypes = {
  custom: CustomEdge,
}

export const Flow = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null)

  const { nodes, onNodesChange, setTarget, removeNode } = useNodes()
  const { edges, onEdgesChange, onConnect } = useEdges()
  const { onEdgeClick } = useEdge()
  const { onDrop, onDragOver, onPaneClick } = useFlow({
    reactFlowWrapper,
  })

  const [showMinimap, setShowMinimap] = useState(true)

  return (
    <Box className="reactflow-wrapper" gridArea="flow" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onNodesDelete={([node]) => removeNode(node.id)}
        onNodeClick={(_, { id }) => setTarget(id)}
        onNodeDragStop={(_, { id }) => setTarget(id)}
        edges={edges}
        edgeTypes={edgeTypes}
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
