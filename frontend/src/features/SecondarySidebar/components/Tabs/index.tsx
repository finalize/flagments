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

  const defaultIndex = targetEdge ? 1 : targetNode ? 0 : undefined

  return (
    <ChakraTabs isFitted index={defaultIndex}>
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
