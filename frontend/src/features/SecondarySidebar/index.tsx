import { Box } from "@chakra-ui/react"
import { FC } from "react"

import { Tabs } from "./components/Tabs"

type Props = {
  isVisibleHeader: boolean
}

export const SecondarySidebar: FC<Props> = ({ isVisibleHeader }) => (
  <Box
    gridArea="rightSidebar"
    bg="white"
    zIndex={20}
    borderColor="gray.200"
    borderLeftWidth={1}
    overflowY="scroll"
    w="full"
    fontFamily="Noto Sans JP"
  >
    {!isVisibleHeader && (
      <Box h={12} borderColor="gray.200" borderBottomWidth={1} />
    )}
    <Tabs />
  </Box>
)
