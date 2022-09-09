import { useReactiveVar } from "@apollo/client"
import { useCallback } from "react"
import { useReactFlow } from "react-flow-renderer"

import { selectedNodeVar } from "@/hooks/apollo"

export const useNode = () => {
  const selectedNode = useReactiveVar(selectedNodeVar)

  const { setNodes } = useReactFlow()

  return {}
}
