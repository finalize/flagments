import { makeVar } from "@apollo/client"
import { Edge } from "react-flow-renderer"

type SelectedEdge = Edge | undefined

const initialValue = undefined
export const selectedEdgeVar = makeVar<SelectedEdge>(initialValue)
