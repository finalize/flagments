import { Box, Button } from "@chakra-ui/react"
import { useCallback } from "react"

import {
  Color,
  Description,
  Handle,
  Label,
} from "@/features/SecondarySidebar/components/Properties"
import { useStore } from "@/hooks/flow/useStore"

export const NodeTab = () => {
  const { removeNode } = useStore((state) => state)

  const onClick = useCallback(() => {
    removeNode()
  }, [removeNode])

  return (
    <>
      <Label />
      <Description />
      <Handle />
      <Color />
      <Box p={4}>
        <Button variant="ghost" color="red.500" w="full" onClick={onClick}>
          削除
        </Button>
      </Box>
    </>
  )
}
