import { UseDisclosureReturn } from "@chakra-ui/react"
import { Node, NodeProps, Position } from "react-flow-renderer"

export type NodeData = {
  type: string
  label: string
  targetHandle?: Position
}

export type CustomNode = Node<NodeData>

export type CustomNodeProps = NodeProps<NodeData>

export type PickedUseDisclosureReturn = Pick<
  UseDisclosureReturn,
  "isOpen" | "onClose"
>
