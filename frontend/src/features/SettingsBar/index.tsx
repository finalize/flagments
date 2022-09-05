import { Box } from "@chakra-ui/react"
import { FC } from "react"

import { Tabs } from "./components/Tabs"

type Props = {
  isVisibleHeader: boolean
}

export const SettingsBar: FC<Props> = ({ isVisibleHeader }) => (
  <Box
    gridArea="rightSidebar"
    bg="white"
    zIndex={20}
    borderColor="gray.200"
    borderLeftWidth={1}
    overflowY="scroll"
    w="full"
    pt={isVisibleHeader ? 0 : 12}
  >
    <Tabs />
  </Box>
)
