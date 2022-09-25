import { Box, Button } from "@chakra-ui/react"
import { useCallback } from "react"

import { useStore } from "@/hooks/flow/useStore"

import {
  Animation,
  Label,
  LabelBgColor,
  LabelColor,
  StrokeColor,
  Type,
} from "./Properties"

export const EdgeTab = () => {
  const { removeEdge } = useStore((state) => state)

  const onClick = useCallback(() => {
    removeEdge()
  }, [removeEdge])

  return (
    <>
      <Label />
      <LabelColor />
      <LabelBgColor />
      <Type />
      <Animation />
      <StrokeColor />
      <Box p={4}>
        <Button variant="ghost" color="red.500" w="full" onClick={onClick}>
          削除
        </Button>
      </Box>
    </>
  )
}
