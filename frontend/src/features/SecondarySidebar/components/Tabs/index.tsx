import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs as ChakraTabs,
} from "@chakra-ui/react"

import { useStore } from "@/hooks/flow/useStore"

import { EdgeTab } from "./Edge"
import { NodeTab } from "./Node"

export const Tabs = () => {
  const { targetEdge, targetNode } = useStore((state) => state)

  if (targetEdge === undefined && targetNode === undefined) return null

  return (
    <ChakraTabs isFitted>
      <TabList>
        <Tab>ノード</Tab>
        <Tab>ベクター</Tab>
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
