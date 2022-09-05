import { Box, Button } from "@chakra-ui/react"
import { ChangeEventHandler, FC } from "react"
import { ReactFlowInstance } from "react-flow-renderer"

import { Handle, Label } from "@/features/SettingsBar/components/Properties"
import { selectedNodeVar } from "@/hooks/apollo"
import { CustomNode } from "@/types"

type Props = {
  instance: ReactFlowInstance
  selectedNode: CustomNode
}

export const NodeTab: FC<Props> = ({ instance, selectedNode }) => {
  const onChangeLabel: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value: label },
  }) => {
    selectedNodeVar({
      ...selectedNode,
      data: {
        ...selectedNode.data,
        label,
      },
    })
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
      <Label value={selectedNode?.data?.label} onChange={onChangeLabel} />
      <Handle selectedNode={selectedNode} />
      <Box p={4} px={4}>
        <Button variant="ghost" color="red.500" w="full" onClick={onDeleteNode}>
          削除
        </Button>
      </Box>
    </>
  )
}
