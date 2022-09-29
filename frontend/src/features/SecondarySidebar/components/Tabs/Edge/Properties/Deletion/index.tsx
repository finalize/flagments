import { Box, Button } from "@chakra-ui/react"
import { memo, useCallback } from "react"

import { useStore } from "@/hooks/flow/useStore"

const Component = () => {
  const removeEdge = useStore(({ removeEdge }) => removeEdge)

  const onClick = useCallback(() => {
    removeEdge()
  }, [removeEdge])

  return (
    <Box p={4}>
      <Button variant="outline" colorScheme="red" w="full" onClick={onClick}>
        削除
      </Button>
    </Box>
  )
}

export const Deletion = memo(Component)
