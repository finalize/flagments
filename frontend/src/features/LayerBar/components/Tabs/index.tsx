import { useReactiveVar } from "@apollo/client"
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs as ChakraTabs,
} from "@chakra-ui/react"
import { useReactFlow } from "react-flow-renderer"

import { selectedNodeVar } from "@/hooks/apollo"

import { LayerTab } from "./Layer"
import { ShapeTab } from "./Shape"

export const Tabs = () => {
  const selectedNode = useReactiveVar(selectedNodeVar)
  const instance = useReactFlow()

  return (
    <ChakraTabs isFitted>
      <TabList>
        <Tab>レイヤー</Tab>
        <Tab>形</Tab>
      </TabList>
      <TabPanels>
        <TabPanel p={0}>
          <LayerTab instance={instance} selectedNode={selectedNode} />
        </TabPanel>
        <TabPanel p={0}>
          <ShapeTab />
        </TabPanel>
      </TabPanels>
    </ChakraTabs>
  )
}
