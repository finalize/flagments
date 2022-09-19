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

import { useEdge, useNode } from "./hooks"
import { useFlow } from "./hooks"

const nodeTypes = {
  custom: CustomNode,
}

const edgeTypes = {
  custom: CustomEdge,
}

export const Flow = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null)

  const { nodes, onNodesChange, onNodeDragStop, handleSelectNode } = useNode()
  const { edges, setEdges, onEdgesChange, onEdgeClick } = useEdge()
  const { onConnect, onDrop, onDragOver, onPaneClick } = useFlow({
    reactFlowWrapper,
    setEdges,
    handleSelectNode,
  })

  const [showMinimap, setShowMinimap] = useState(true)

  return (
    <Box className="reactflow-wrapper" gridArea="flow" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodesDelete={(nodes) => console.log({ nodes })}
        onEdgesChange={onEdgesChange}
        onNodeDragStop={onNodeDragStop}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onEdgeClick={onEdgeClick}
        onPaneClick={onPaneClick}
        connectionMode={ConnectionMode.Loose}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
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
