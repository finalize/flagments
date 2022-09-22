import { Box, Button } from "@chakra-ui/react"
import { useCallback } from "react"

import {
  Handle,
  Label,
} from "@/features/SecondarySidebar/components/Properties"
import { useNodes } from "@/hooks/flow/useNodes"

export const NodeTab = () => {
  const { removeNode } = useNodes((state) => state)

  const onClick = useCallback(()=> {
    removeNode()
  },[removeNode])

  return (
    <>
      <Label />
      <Handle />
      <Box p={4}>
        <Button variant="ghost" color="red.500" w="full" onClick={onClick}>
          削除
        </Button>
      </Box>
    </>
  )
}
