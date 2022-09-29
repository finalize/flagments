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
  getNode: () => CustomNode | undefined
  getEdge: () => Edge | undefined
  removeNode: (id?: string) => void
  removeEdge: (id?: string) => void
  // node
  addNode: (node: CustomNode) => void
  onChangeLabel: (value: string) => void
  onChangeDescription: (value: string) => void
  onChangeHandle: (handles: Position[]) => void
  onChangeColor: (value: string) => void
  // edge
  onChangeEdgeLabel: (value?: string) => void
  onChangeEdgeType: (value: string) => void
  onChangeEdgeStrokeColor: (value: string) => void
  onChangeEdgeLabelColor: (value: string) => void
  onChangeEdgeLabelBgColor: (value: string) => void
  onChangeEdgeAnimation: (value: boolean) => void
  // optional
  targetNode?: CustomNode
  targetEdge?: {
    id: string
  }
}

export const useStore = create<State>((set, get) => ({
  nodes: [
    {
      id: "80786501365089620262",
      type: "custom",
      position: {
        x: 514.758529755277,
        y: 174.35445717990376,
      },
      selected: false,
      data: {
        label: "",
        handles: [Position.Bottom],
        color: "#444444",
        description: "",
      },
      width: 200,
      height: 37,
      positionAbsolute: {
        x: 514.758529755277,
        y: 174.35445717990376,
      },
      dragging: false,
    },
    {
      id: "42055810397018776869",
      type: "custom",
      position: {
        x: 584.758529755277,
        y: 339.35445717990376,
      },
      selected: false,
      data: {
        label: "",
        handles: [Position.Top],
        color: "#444444",
      },
      width: 200,
      height: 36,
    },
  ],
  edges: [
    {
      source: "80786501365089620262",
      sourceHandle: "bottom",
      target: "42055810397018776869",
      targetHandle: "top",
      selected: true,
      id: "reactflow__edge-80786501365089620262bottom-42055810397018776869top",
    },
  ],
  onConnect: (connection: Connection) => {
    const edges = addEdge({ ...connection, selected: true }, get().edges)
    const edge = edges.at(-1)
    if (edge) {
      get().setTargetEdge(edge.id)
    }
    set({
      edges,
    })
    console.log(get().edges, get().nodes)
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
    let targetNode: CustomNode | undefined
    const nodes = get().nodes.map((node) => {
      if (node.id === id) {
        targetNode = node
        return { ...node, selected: true }
      }
      return { ...node, selected: false }
    })
    const edges = get().edges.map((edge) => ({ ...edge, selected: false }))
    set({
      nodes,
      edges,
      targetNode,
      targetEdge: undefined,
    })
  },
  setTargetEdge: (id) => {
    const edges = get().edges.map((n) => {
      if (n.id === id) {
        return { ...n, selected: true }
      }
      return { ...n, selected: false }
    })
    const nodes = get().nodes.map((n) => ({ ...n, selected: false }))
    set({ edges, nodes, targetEdge: { id }, targetNode: undefined })
  },
  resetTargetNode: () => {
    set({ targetNode: undefined })
  },
  resetTargetEdge: () => {
    set({ targetEdge: undefined })
  },
  getNode: () => {
    const id = get().targetNode?.id
    if (id === undefined) return

    return get().nodes.find((node) => node.id === id)
  },
  getEdge: () => {
    const id = get().targetEdge?.id
    if (id === undefined) return

    return get().edges.find((edge) => edge.id === id)
  },
  removeNode: (nodeId) => {
    const id = nodeId ?? get().targetNode?.id
    if (id === undefined) return
    set({
      nodes: applyNodeChanges([{ id, type: "remove" }], get().nodes),
      targetNode: undefined,
    })
  },
  removeEdge: (edgeId) => {
    const id = edgeId ?? get().targetEdge?.id
    if (id === undefined) return
    set({
      edges: applyEdgeChanges([{ id, type: "remove" }], get().edges),
      targetEdge: undefined,
    })
  },
  addNode: (node) => {
    const nds = get().nodes.map((n) => ({ ...n, selected: false }))
    const newNode = {
      ...node,
      data: { ...node.data, label: "" },
    }
    set({
      nodes: [...nds, newNode],
      targetNode: newNode,
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
  onChangeDescription: (value) => {
    const id = get().targetNode?.id
    if (id === undefined) return

    set({
      nodes: get().nodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: { ...node.data, description: value },
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
  onChangeColor: (value) => {
    const id = get().targetNode?.id
    if (id === undefined) return

    set({
      nodes: get().nodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: { ...node.data, color: value },
          }
        }

        return node
      }),
    })
  },
  onChangeEdgeLabel: (value) => {
    const id = get().targetEdge?.id
    if (id === undefined) return

    set({
      edges: get().edges.map((edge) => {
        if (edge.id === id) {
          return {
            ...edge,
            label: value,
          }
        }

        return edge
      }),
    })
  },
  onChangeEdgeType: (value) => {
    const id = get().targetEdge?.id
    if (id === undefined) return

    set({
      edges: get().edges.map((edge) => {
        if (edge.id === id) {
          return {
            ...edge,
            type: value,
          }
        }

        return edge
      }),
    })
  },
  onChangeEdgeLabelColor: (value) => {
    const id = get().targetEdge?.id
    if (id === undefined) return

    set({
      edges: get().edges.map((edge) => {
        if (edge.id === id) {
          return {
            ...edge,
            labelStyle: { fill: value },
          }
        }

        return edge
      }),
    })
  },
  onChangeEdgeLabelBgColor: (value) => {
    const id = get().targetEdge?.id
    if (id === undefined) return

    set({
      edges: get().edges.map((edge) => {
        if (edge.id === id) {
          return {
            ...edge,
            labelBgStyle: { fill: value },
          }
        }

        return edge
      }),
    })
  },
  onChangeEdgeStrokeColor: (value) => {
    const id = get().targetEdge?.id
    if (id === undefined) return

    set({
      edges: get().edges.map((edge) => {
        if (edge.id === id) {
          return {
            ...edge,
            style: { stroke: value },
          }
        }

        return edge
      }),
    })
  },
  onChangeEdgeAnimation: (value) => {
    const id = get().targetEdge?.id
    if (id === undefined) return

    set({
      edges: get().edges.map((edge) => {
        if (edge.id === id) {
          return {
            ...edge,
            animated: value,
          }
        }

        return edge
      }),
    })
  },
  targetNode: undefined,
  targetEdge: undefined,
}))
