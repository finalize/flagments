import { Box, Button } from "@chakra-ui/react"
import { useCallback } from "react"

import { useStore } from "@/hooks/flow/useStore"

import { Color, Description, Handle, Label } from "./Properties"

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
