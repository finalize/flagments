import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs as ChakraTabs,
} from "@chakra-ui/react"

import { LayerTab } from "./Layer"
import { ShapeTab } from "./Shape"

export const Tabs = () => {
  return (
    <ChakraTabs isFitted>
      <TabList>
        <Tab>レイヤー</Tab>
        <Tab>形</Tab>
      </TabList>
      <TabPanels>
        <TabPanel p={0}>
          <LayerTab />
        </TabPanel>
        <TabPanel p={0}>
          <ShapeTab />
        </TabPanel>
      </TabPanels>
    </ChakraTabs>
  )
}
