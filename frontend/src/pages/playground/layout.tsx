import { useReactiveVar } from "@apollo/client"
import { Grid } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

import { Header } from "@/components/Header"
import { Menu } from "@/components/Menu"
import { PrimarySidebar } from "@/features/PrimarySidebar"
import { SecondarySidebar } from "@/features/SecondarySidebar"
import { templateVar } from "@/hooks/apollo/useTemplateVar"

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const template = useReactiveVar(templateVar)

  const {
    components: { header, leftSidebar, rightSidebar },
    ...rest
  } = template

  return (
    <main>
      <Grid h="100vh" {...rest}>
        {header.isVisible && <Header />}
        {leftSidebar.isVisible && <PrimarySidebar />}
        {children}
        {rightSidebar.isVisible && (
          <SecondarySidebar isVisibleHeader={header.isVisible} />
        )}
      </Grid>
      <Menu />
    </main>
  )
}
