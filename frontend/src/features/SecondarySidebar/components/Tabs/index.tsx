import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs as ChakraTabs,
} from "@chakra-ui/react"

import { useNodes } from "@/hooks/flow/useNodes"

import { EdgeTab } from "./Edge"
import { NodeTab } from "./Node"

export const Tabs = () => {
  const target = useNodes((state) => state.target)

  if (target === undefined) return null

  return (
    <ChakraTabs isFitted>
      <TabList>
        <Tab>ノード</Tab>
        <Tab>線</Tab>
      </TabList>
      <TabPanels>
        <TabPanel p={0}>
          <NodeTab />
        </TabPanel>
        <TabPanel p={0}>
          <EdgeTab />
        </TabPanel>
      </TabPanels>
    </ChakraTabs>
  )
}
