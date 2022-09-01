import { Box, Flex } from "@chakra-ui/react"

import { DefaultShape } from "@/components/Shapes/Default"
import { NODE_TYPES } from "@/constants"

export const DraggableNodeListBar = () => {
  return (
    <Box
      gridArea="leftSidebar"
      bg="white"
      zIndex={20}
      borderColor="gray.200"
      borderRightWidth={1}
      overflowY="scroll"
    >
      {NODE_TYPES.map((type) => (
        <Flex
          key={type}
          p={4}
          px={10}
          borderColor="gray.200"
          borderBottomWidth={1}
          justifyContent="center"
        >
          <DefaultShape type={type} />
        </Flex>
      ))}
    </Box>
  )
}
