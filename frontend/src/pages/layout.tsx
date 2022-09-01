import { Box } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

import { Header } from "@/components/Header"

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Box pt={12}>
      <Header />

      {children}
    </Box>
  )
}
