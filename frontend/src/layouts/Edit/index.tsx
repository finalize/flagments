import { useReactiveVar } from "@apollo/client"
import { Grid } from "@chakra-ui/react"

import { Header } from "@/components/Header"
import { Menu } from "@/components/Menu"
import { LeftSidebar, RightSidebar } from "@/components/Sidebar"
import { Flow } from "@/features/Playground/components/Flow"
import { templateVar } from "@/hooks/apollo/useTemplateVar"

export const Edit = () => {
  const template = useReactiveVar(templateVar)

  const {
    components: { header, leftSidebar, rightSidebar },
    ...rest
  } = template

  return (
    <>
      <Grid h="100vh" {...rest}>
        {header.isVisible && <Header />}
        {leftSidebar.isVisible && <LeftSidebar />}
        <Flow />
        {rightSidebar.isVisible && (
          <RightSidebar isVisibleHeader={header.isVisible} />
        )}
      </Grid>
      <Menu />
    </>
  )
}
