import { applyNodeChanges, OnNodesChange, Position } from "react-flow-renderer"
import create from "zustand"

import { CustomNode } from "@/types"

type State = {
  nodes: CustomNode[]
  onNodesChange: OnNodesChange
  addNode: (node: CustomNode) => void
  removeNode: (id?: string) => void
  onChangeLabel: (value: string) => void
  onChangeHandle: (handles: Position[]) => void
  getNode: () => CustomNode | undefined
  setTarget: (id: string) => void
  resetTarget: () => void
  target?: {
    id: string
  }
}

export const useNodes = create<State>((set, get) => ({
  nodes: [],
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    })
  },
  addNode: (node) => {
    const nds = get().nodes.map((n) => ({ ...n, selected: false }))
    set({
      nodes: [...nds, node],
      target: {
        id: node.id,
      },
    })
  },
  removeNode: (nodeId) => {
    const id = nodeId ?? get().target?.id
    if (id === undefined) return
    set({
      nodes: applyNodeChanges([{ id, type: "remove" }], get().nodes),
      target: undefined,
    })
  },
  onChangeLabel: (value) => {
    const id = get().target?.id
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
    const id = get().target?.id
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
    const id = get().target?.id
    if (id === undefined) return

    return get().nodes.find((node) => node.id === id)
  },
  setTarget: (id) => {
    set({ target: { id } })
  },
  resetTarget: () => {
    set({ target: undefined })
  },
  target: undefined,
}))
