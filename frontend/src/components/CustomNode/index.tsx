import { Box, Text } from "@chakra-ui/react"
import { memo, useEffect } from "react"
import { Handle, useUpdateNodeInternals } from "react-flow-renderer"

import { Colors } from "@/styles/theme"
import { CustomNodeProps } from "@/types"

const Component = (props: CustomNodeProps) => {
  const {
    data: { label, handles },
    selected,
    id,
  } = props

  const updateNodeInternals = useUpdateNodeInternals()

  useEffect(() => {
    updateNodeInternals(id)
  }, [updateNodeInternals, id, handles])

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
      {handles?.map((position) => (
        <Handle
          key={position}
          id={position}
          type="source"
          position={position}
          style={{
            background: Colors.flow.handle.backgounrd,
            width: "8px",
            height: "8px",
          }}
          isConnectable
        />
      ))}
    </Box>
  )
}

export const CustomNode = memo(Component)
