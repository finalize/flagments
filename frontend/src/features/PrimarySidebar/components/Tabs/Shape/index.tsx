import { Flex } from "@chakra-ui/react"
import { FC } from "react"

import { Default } from "@/components/Shapes/Default"
import { SHAPES } from "@/constants"

const renderShape = (shape: string) => {
  switch (shape) {
    default:
      return <Default shape={shape} />
  }
}

export const ShapeTab: FC = () => {
  return (
    <>
      {SHAPES.map((shape) => (
        <Flex
          key={shape}
          p={4}
          px={10}
          borderColor="gray.200"
          borderBottomWidth={1}
          justifyContent="center"
        >
          {renderShape(shape)}
        </Flex>
      ))}
    </>
  )
}
