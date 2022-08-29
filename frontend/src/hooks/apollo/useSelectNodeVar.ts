import { makeVar } from "@apollo/client"

import { CustomNode } from "@/types"

type InitialValue = CustomNode | undefined

const initialValue = undefined
export const selectedNodeVar = makeVar<InitialValue>(initialValue)
