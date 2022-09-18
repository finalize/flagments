import { useReactiveVar } from "@apollo/client"
import { Grid } from "@chakra-ui/react"
import { FC } from "react"

import { Header } from "@/components/Header"
import { Menu } from "@/components/Menu"
import { Flow } from "@/features/Flow"
import { PrimarySidebar } from "@/features/PrimarySidebar"
import { SecondarySidebar } from "@/features/SecondarySidebar"
import { templateVar } from "@/hooks/apollo/useTemplateVar"
import { Content } from "@/styles/grid"

type Props = {
  components: Content["components"]
  gridProps: Omit<Content, "components">
}

export const Component: FC<Props> = ({ components, gridProps }) => (
  <main>
    <Grid h="100vh" {...gridProps}>
      {components.header.isVisible && <Header />}
      {components.leftSidebar.isVisible && <PrimarySidebar />}
      <Flow />
      {components.rightSidebar.isVisible && (
        <SecondarySidebar isVisibleHeader={components.header.isVisible} />
      )}
    </Grid>
    <Menu />
  </main>
)

export const Layout = () => {
  const { components, ...gridProps } = useReactiveVar(templateVar)

  return <Component components={components} gridProps={gridProps} />
}
