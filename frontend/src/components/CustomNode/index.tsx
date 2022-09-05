import { Box, Text } from "@chakra-ui/react"
import { memo, useEffect } from "react"
import { Handle, useUpdateNodeInternals } from "react-flow-renderer"

import { getHandle } from "@/functions/getNodeTypes"
import { selectedNodeVar } from "@/hooks/apollo"
import { CustomNodeProps } from "@/types"

const Component = (props: CustomNodeProps) => {
  const {
    data: { label, type },
    xPos,
    yPos,
    selected,
    id,
  } = props

  const handle = getHandle(type)

  const updateNodeInternals = useUpdateNodeInternals()

  useEffect(() => {
    updateNodeInternals(id)
  }, [updateNodeInternals, handle, id])

  useEffect(() => {
    if (props.selected) {
      selectedNodeVar({ ...props, position: { x: xPos, y: yPos } })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selected])

  return (
    <Box
      alignItems="center"
      bg="white"
      color={selected ? "blue.400" : "black"}
      borderColor={selected ? "blue.400" : "black"}
      borderWidth={1}
      justifyContent="center"
      position="relative"
      px={8}
      py={2}
      rounded="md"
      w={200}
    >
      <Text fontSize="xs" textAlign="center">
        {label === "" ? "ラベルなし" : label}
      </Text>

      {handle?.map(({ id, type, position }) => (
        <Handle
          key={position}
          id={id}
          type={type}
          position={position}
          style={{ background: "#555", width: "8px", height: "8px" }}
          isConnectable
        />
      ))}
    </Box>
  )
}

const CustomNode = memo(Component)

export { CustomNode }
