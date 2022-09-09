import { useReactiveVar } from "@apollo/client"
import { Box, Flex, Text } from "@chakra-ui/react"
import { FC, useCallback, useMemo } from "react"
import { Edge, Node, ReactFlowInstance } from "react-flow-renderer"

import { selectedEdgeVar, selectedNodeVar } from "@/hooks/apollo"
import { Colors } from "@/styles/theme"

type Props = {
  instance: ReactFlowInstance
}

export const LayerTab: FC<Props> = ({ instance }) => {
  const selectedNode = useReactiveVar(selectedNodeVar)
  const selectedEdge = useReactiveVar(selectedEdgeVar)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nodes = useMemo(() => instance.getNodes(), [instance, selectedNode])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const edges = useMemo(() => instance.getEdges(), [instance, selectedEdge])

  const onClickNode = useCallback((node: Node) => {
    selectedNodeVar(node)
    selectedEdgeVar(undefined)
  }, [])

  const onClickEdge = useCallback((edge: Edge) => {
    selectedEdgeVar(edge)
  }, [])

  return (
    <Flex flexDirection="column">
      <Box py={2} borderColor="gray.200" borderBottomWidth={1}>
        <Text fontWeight={700} ml={4}>
          ノード
        </Text>
        {nodes.map((node) => (
          <Box key={node.id}>
            <Box
              pl={8}
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
              <Text>
                {node.data.label === "" ? "ラベルなし" : node.data.label}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
      <Box py={2} borderColor="gray.200" borderBottomWidth={1}>
        <Text fontWeight={700} ml={4}>
          線
        </Text>
        {edges.map((edge) => (
          <Flex
            key={edge.id}
            pl={8}
            py={1}
            cursor="default"
            _hover={{ background: "rgba(0, 0, 0, 0.1)" }}
            bg={selectedEdge?.id === edge.id ? Colors.blue[50] : undefined}
            onClick={() => onClickEdge(edge)}
          >
            {edge.label ?? "ラベルなし"}
          </Flex>
        ))}
      </Box>
    </Flex>
  )
}
