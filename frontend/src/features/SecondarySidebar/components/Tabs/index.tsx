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

import { EdgeTab } from "./Edge"
import { NodeTab } from "./Node"

export const Tabs = () => {
  const selectedNode = useReactiveVar(selectedNodeVar)
  const instance = useReactFlow()

  if (selectedNode === undefined) return null

  return (
    <ChakraTabs isFitted>
      <TabList>
        <Tab>ノード</Tab>
        <Tab>線</Tab>
      </TabList>
      <TabPanels>
        <TabPanel p={0}>
          <NodeTab instance={instance} selectedNode={selectedNode} />
        </TabPanel>
        <TabPanel p={0}>
          <EdgeTab instance={instance} selectedNode={selectedNode} />
        </TabPanel>
      </TabPanels>
    </ChakraTabs>
  )
}
