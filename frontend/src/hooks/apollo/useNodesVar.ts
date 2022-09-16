import { makeVar } from "@apollo/client"
import { Node } from "react-flow-renderer"

type Nodes = Node[]

const initialValue: Nodes = []
export const nodesVar = makeVar<Nodes>(initialValue)
