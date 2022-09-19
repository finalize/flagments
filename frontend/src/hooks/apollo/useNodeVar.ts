import { makeVar } from "@apollo/client"

import { CustomNode } from "@/types"

export type Node = {
  target: CustomNode | undefined
  actionType?: "select" | "update" | "delete"
}

const initialValue = {
  target: undefined,
}
export const nodeVar = makeVar<Node>(initialValue)
