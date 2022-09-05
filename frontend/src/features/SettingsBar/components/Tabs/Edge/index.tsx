import { useReactiveVar } from "@apollo/client"
import { Box, Button, Flex, Select, Text } from "@chakra-ui/react"
import { ChangeEventHandler, FC, useCallback, useEffect, useMemo } from "react"
import { ReactFlowInstance } from "react-flow-renderer"

import { selectedEdgeVar } from "@/hooks/apollo"
import { Colors } from "@/styles/theme"
import { CustomNode } from "@/types"
type Props = {
  instance: ReactFlowInstance
  selectedNode: CustomNode
}

export const EdgeTab: FC<Props> = ({ instance, selectedNode }) => {
  const selectedEdge = useReactiveVar(selectedEdgeVar)

  const edges = useMemo(
    () =>
      instance
        .getEdges()
        .filter(
          (v) => v.source === selectedNode?.id || v.target === selectedNode?.id
        ),
    [instance, selectedNode]
  )

  const onChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      const id = e.target.value

      instance.setEdges((eds) =>
        eds.map((v) => {
          if (v.id === id) {
            return {
              ...v,
              selected: true,
              style: { stroke: Colors.red[500] },
              animated: true,
            }
          }
          return {
            id: v.id,
            source: v.source,
            sourceHandle: v.sourceHandle,
            target: v.target,
            targetHandle: v.targetHandle,
            animated: v.animated ?? false,
          }
        })
      )

      selectedEdgeVar(edges.find((v) => v.id === id))
    },
    [instance, edges]
  )

  const onChangeType: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      const type = e.target.value

      instance.setEdges((eds) =>
        eds.map((v) => {
          if (v.id === selectedEdge?.id) {
            return {
              ...v,
              type,
              selected: true,
              style: { stroke: Colors.blue[400] },
              label: "選択中",
              labelStyle: {
                fill: Colors.blue[400],
                fontWeight: 700,
                background: "black",
              },
            }
          }
          return v
        })
      )
    },
    [instance, selectedEdge]
  )
  const onClick = () => null

  useEffect(() => {
    if (selectedNode === undefined) return
    instance.setEdges((eds) =>
      eds.map((v) => {
        return {
          id: v.id,
          source: v.source,
          sourceHandle: v.sourceHandle,
          target: v.target,
          targetHandle: v.targetHandle,
          type: v.type,
          animated: v.animated ?? false,
        }
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode])

  return (
    <>
      <Box p={4} borderColor="gray.200" borderBottomWidth={1}>
        <Flex alignItems="center">
          <Text fontSize="xs" w={16}>
            ターゲット
          </Text>
          <Select
            placeholder="線を選択してください"
            value={selectedEdge?.id}
            onChange={onChange}
            size="sm"
            rounded="md"
            flex={1}
          >
            {edges.map((v) => (
              <option key={v.id} value={v.id}>
                {`${v.sourceHandle} - ${v.targetHandle}`}
              </option>
            ))}
          </Select>
        </Flex>
        {selectedEdge?.id && (
          <Flex alignItems="center" mt={4}>
            <Text fontSize="xs" w={16}>
              タイプ
            </Text>
            <Select
              onChange={onChangeType}
              value={selectedEdge?.type}
              size="sm"
              rounded="md"
              flex={1}
            >
              <option value={undefined}>デフォルト</option>
              <option value="step">ステップ</option>
              <option value="smoothstep">スムースステップ</option>
              <option value="straight">ストレート</option>
            </Select>
          </Flex>
        )}
      </Box>
      <Box p={4} px={4}>
        <Button variant="outline" color="blue.400" w="full" onClick={onClick}>
          Update
        </Button>
      </Box>
    </>
  )
}
