import { Box, Text } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

type Props = {
  title: string
  children: ReactNode
}

export const Container: FC<Props> = ({ title, children }) => (
  <Box p={4} pt={0} borderColor="gray.200" borderBottomWidth={1}>
    <Text py={2} fontSize="sm" fontWeight="bold">
      {title}
    </Text>
    {children}
  </Box>
)
