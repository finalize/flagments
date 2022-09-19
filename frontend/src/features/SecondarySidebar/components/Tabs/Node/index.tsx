import { Box, Button } from "@chakra-ui/react"
import { ChangeEventHandler, FC } from "react"
import { ReactFlowInstance } from "react-flow-renderer"

import {
  Handle,
  Label,
} from "@/features/SecondarySidebar/components/Properties"
import { nodeVar } from "@/hooks/apollo"
import { useNode } from "@/hooks/flow"
import { CustomNode } from "@/types"

type Props = {
  instance: ReactFlowInstance
  targetNode: CustomNode
}

export const NodeTab: FC<Props> = ({ instance, targetNode }) => {
  const { onChangeLabel } = useNode()

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value: label },
  }) => {
    onChangeLabel(label)
  }

  const onDeleteNode = () => {
    instance.setNodes((nds) => nds.filter((n) => n.id !== targetNode.id))
    instance.setEdges((nds) =>
      nds.filter(
        (n) => n.source !== targetNode.id && n.target !== targetNode.id
      )
    )

    nodeVar({ target: targetNode, actionType: "delete" })
  }

  return (
    <>
      <Label value={targetNode?.data?.label} onChange={onChange} />
      <Handle targetNode={targetNode} />
      <Box p={4} px={4}>
        <Button variant="ghost" color="red.500" w="full" onClick={onDeleteNode}>
          削除
        </Button>
      </Box>
    </>
  )
}
