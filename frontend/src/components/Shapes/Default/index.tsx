import { Box } from "@chakra-ui/react"
import { DragEvent, FC } from "react"
import { Handle, Position } from "react-flow-renderer"

import { Colors } from "@/styles/theme"

type Props = {
  type: string
}

export const DefaultShape: FC<Props> = ({ type }) => {
  const onDragStart = (event: DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType)
    event.dataTransfer.effectAllowed = "move"
  }

  const positions = type.split("_").map((t) => {
    if (t === "top") return Position.Top
    if (t === "bottom") return Position.Bottom
    if (t === "right") return Position.Right
    return Position.Left
  })

  return (
    <Box
      position="relative"
      bg="white"
      alignItems="center"
      justifyContent="center"
      rounded="md"
      borderColor="black"
      borderWidth={1}
      px={8}
      py={2}
      w={200}
      h={9}
      opacity={0.999}
      onDragStart={(event) => onDragStart(event, type)}
      draggable
    >
      {positions.map((p) => (
        <Handle
          key={p}
          type="target"
          position={p}
          style={{
            background: Colors.flow.handle.backgounrd,
            width: "8px",
            height: "8px",
          }}
        />
      ))}
    </Box>
  )
}
