import { Box, Button } from "@chakra-ui/react"
import { ChangeEventHandler, FC } from "react"
import { ReactFlowInstance } from "react-flow-renderer"

import {
  Handle,
  Label,
} from "@/features/SecondarySidebar/components/Properties"
import { selectedNodeVar } from "@/hooks/apollo"
import { useNode } from "@/hooks/flow"
import { CustomNode } from "@/types"

type Props = {
  instance: ReactFlowInstance
  selectedNode: CustomNode
}

export const NodeTab: FC<Props> = ({ instance, selectedNode }) => {
  const { onChangeLabel } = useNode()

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value: label },
  }) => {
    onChangeLabel(label)
  }
  const onDeleteNode = () => {
    instance.setNodes((nds) => nds.filter((n) => n.id !== selectedNode.id))
    instance.setEdges((nds) =>
      nds.filter(
        (n) => n.source !== selectedNode.id && n.target !== selectedNode.id
      )
    )

    selectedNodeVar(undefined)
  }

  return (
    <>
      <Label value={selectedNode?.data?.label} onChange={onChange} />
      <Handle selectedNode={selectedNode} />
      <Box p={4} px={4}>
        <Button variant="ghost" color="red.500" w="full" onClick={onDeleteNode}>
          削除
        </Button>
      </Box>
    </>
  )
}
