import { useReactiveVar } from "@apollo/client"
import { Grid } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

import { Header } from "@/components/Header"
import { Menu } from "@/components/Menu"
import { DraggableNodeList } from "@/features/DraggableNode"
import { SettingsBar } from "@/features/SettingsBar"
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
        {leftSidebar.isVisible && <DraggableNodeList />}
        {children}
        {rightSidebar.isVisible && (
          <SettingsBar isVisibleHeader={header.isVisible} />
        )}
      </Grid>
      <Menu />
    </main>
  )
}
