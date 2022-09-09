import { Box } from "@chakra-ui/react"

import { Tabs } from "./components/Tabs"

export const PrimarySidebar = () => {
  return (
    <Box
      gridArea="leftSidebar"
      bg="white"
      zIndex={20}
      borderColor="gray.200"
      borderRightWidth={1}
      overflowY="scroll"
    >
      <Tabs />
    </Box>
  )
}
