import { Box, Flex, Text } from "@chakra-ui/react"
import { useCallback } from "react"
import { Edge, Node } from "react-flow-renderer"

import { useStore } from "@/hooks/flow/useStore"
import { Colors } from "@/styles/theme"

export const LayerTab = () => {
  const { nodes, targetNode, setTargetNode, edges, targetEdge, setTargetEdge } =
    useStore((state) => state)

  const onClickNode = useCallback(
    (node: Node) => {
      setTargetNode(node.id)
    },
    [setTargetNode]
  )

  const onClickEdge = useCallback(
    (edge: Edge) => {
      setTargetEdge(edge.id)
    },
    [setTargetEdge]
  )

  return (
    <Flex flexDirection="column">
      <Box py={2} borderColor="gray.200" borderBottomWidth={1}>
        <Text fontWeight={700} fontSize="xs" ml={4} mb={1}>
          ノード
        </Text>
        {nodes.map((node, index) => (
          <Box key={node.id}>
            <Box
              pr={2}
              pl={4}
              py={2}
              cursor="default"
              _hover={
                targetNode?.id === node.id
                  ? undefined
                  : { background: "rgba(0, 0, 0, 0.1)" }
              }
              bg={targetNode?.id === node.id ? Colors.blue[100] : undefined}
              boxSizing="border-box"
              onClick={() => onClickNode(node)}
            >
              <Text>
                {node.data.label === ""
                  ? `ノード ${index + 1}`
                  : node.data.label}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
      <Box py={2} borderColor="gray.200" borderBottomWidth={1}>
        <Text fontWeight={700} fontSize="xs" ml={4} mb={1}>
          ベクター
        </Text>
        {edges.map((edge, index) => (
          <Flex
            key={edge.id}
            pl={4}
            py={1}
            cursor="default"
            _hover={{ background: "rgba(0, 0, 0, 0.1)" }}
            bg={targetEdge?.id === edge.id ? Colors.blue[100] : undefined}
            onClick={() => onClickEdge(edge)}
          >
            {edge.label ?? `ベクター ${index + 1}`}
          </Flex>
        ))}
      </Box>
    </Flex>
  )
}
