import { UseDisclosureReturn } from "@chakra-ui/react"
import { Node, NodeProps, Position } from "react-flow-renderer"

export type NodeData = {
  label: string
  handles: Position[]
  color: string
  description?: string
}

export type CustomNode = Node<NodeData>

export type CustomNodeProps = NodeProps<NodeData>

export type PickedUseDisclosureReturn = Pick<
  UseDisclosureReturn,
  "isOpen" | "onClose"
>
