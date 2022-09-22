import { Box } from "@chakra-ui/react"
import { DragEvent, FC } from "react"

type Props = {
  shape: string
}

export const Default: FC<Props> = ({ shape }) => {
  const onDragStart = (event: DragEvent, shape: string) => {
    event.dataTransfer.setData("application/reactflow", shape)
    event.dataTransfer.effectAllowed = "move"
  }

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
      onDragStart={(event) => onDragStart(event, shape)}
      draggable
    />
  )
}
