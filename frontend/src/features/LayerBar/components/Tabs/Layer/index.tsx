import { Box, Flex, Text } from "@chakra-ui/react"
import { FC, useCallback, useMemo } from "react"
import { Edge, Node, ReactFlowInstance } from "react-flow-renderer"

import { selectedEdgeVar, selectedNodeVar } from "@/hooks/apollo"
import { Colors } from "@/styles/theme"
import { CustomNode } from "@/types"
type Props = {
  instance: ReactFlowInstance
  selectedNode?: CustomNode
}

export const LayerTab: FC<Props> = ({ instance, selectedNode }) => {
  const nodes = useMemo(() => instance.getNodes(), [instance])

  const edges = useMemo(() => instance.getEdges(), [instance])

  const onClickNode = useCallback((node: Node) => {
    selectedNodeVar(node)
  }, [])

  const onClickEdge = useCallback((edge: Edge) => {
    selectedEdgeVar(edge)
  }, [])

  return (
    <Flex flexDirection="column">
      {nodes.map((node) => (
        <Box key={node.id}>
          <Box
            pl={4}
            py={2}
            cursor="default"
            _hover={
              selectedNode?.id === node.id
                ? undefined
                : { background: "rgba(0, 0, 0, 0.1)" }
            }
            bg={selectedNode?.id === node.id ? Colors.blue[100] : undefined}
            boxSizing="border-box"
            onClick={() => onClickNode(node)}
          >
            <Text fontWeight={700}>
              {node.data.label === "" ? "ラベルなし" : node.data.label}
            </Text>
          </Box>

          {edges
            .filter((v) => v.source === node?.id)
            .map((edge) => (
              <Flex
                key={node.id}
                pl={8}
                py={1}
                cursor="default"
                _hover={{ background: "rgba(0, 0, 0, 0.1)" }}
                bg={selectedNode?.id === node.id ? Colors.blue[50] : undefined}
                onClick={() => onClickEdge(edge)}
              >
                {`${edge.sourceHandle} - ${edge.targetHandle}`}
              </Flex>
            ))}
        </Box>
      ))}
    </Flex>
  )
}
