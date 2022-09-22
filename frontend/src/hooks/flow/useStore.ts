import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  Position,
} from "react-flow-renderer"
import create from "zustand"

import { CustomNode } from "@/types"

type State = {
  nodes: CustomNode[]
  edges: Edge[]
  onConnect: OnConnect
  onNodesChange: OnNodesChange
  onEdgesChange: OnEdgesChange
  setTargetNode: (id: string) => void
  setTargetEdge: (id: string) => void
  resetTargetNode: () => void
  resetTargetEdge: () => void
  // nodes
  addNode: (node: CustomNode) => void
  removeNode: (id?: string) => void
  onChangeLabel: (value: string) => void
  onChangeHandle: (handles: Position[]) => void
  getNode: () => CustomNode | undefined
  // optional
  targetNode?: {
    id: string
  }
  targetEdge?: {
    id: string
  }
}

export const useStore = create<State>((set, get) => ({
  nodes: [],
  edges: [],
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    })
  },
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    })
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    })
  },
  setTargetNode: (id) => {
    const nodes = get().nodes.map((n) => {
      if (n.id === id) {
        return { ...n, selected: true }
      }
      return { ...n, selected: false }
    })
    set({
      nodes,
      targetNode: {
        id,
      },
    })
  },
  setTargetEdge: (id) => {
    set({ targetEdge: { id } })
  },
  resetTargetNode: () => {
    set({ targetNode: undefined })
  },
  resetTargetEdge: () => {
    set({ targetEdge: undefined })
  },
  addNode: (node) => {
    const nds = get().nodes.map((n) => ({ ...n, selected: false }))
    set({
      nodes: [...nds, node],
      targetNode: {
        id: node.id,
      },
    })
  },
  removeNode: (nodeId) => {
    const id = nodeId ?? get().targetNode?.id
    if (id === undefined) return
    set({
      nodes: applyNodeChanges([{ id, type: "remove" }], get().nodes),
      targetNode: undefined,
    })
  },
  onChangeLabel: (value) => {
    const id = get().targetNode?.id
    if (id === undefined) return

    set({
      nodes: get().nodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: { ...node.data, label: value },
          }
        }

        return node
      }),
    })
  },
  onChangeHandle: (handles) => {
    const id = get().targetNode?.id
    if (id === undefined) return

    set({
      nodes: get().nodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: { ...node.data, handles },
          }
        }

        return node
      }),
    })
  },
  getNode: () => {
    const id = get().targetNode?.id
    if (id === undefined) return

    return get().nodes.find((node) => node.id === id)
  },
  targetNode: undefined,
  targetEdge: undefined,
}))
