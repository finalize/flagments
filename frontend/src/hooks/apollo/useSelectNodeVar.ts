import { makeVar } from "@apollo/client"

import { CustomNode } from "@/types"

type SelectedNode = CustomNode | undefined

const initialValue = undefined
export const selectedNodeVar = makeVar<SelectedNode>(initialValue)
