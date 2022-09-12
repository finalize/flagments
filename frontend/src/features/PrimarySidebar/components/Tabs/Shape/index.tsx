import { Flex } from "@chakra-ui/react"
import { FC } from "react"

import { DefaultShape } from "@/components/Shapes/Default"
import { NODE_TYPES } from "@/constants"

export const ShapeTab: FC = () => {
  return (
    <>
      {NODE_TYPES.map((type) => (
        <Flex
          key={type}
          p={4}
          px={10}
          borderColor="gray.200"
          borderBottomWidth={1}
          justifyContent="center"
        >
          <DefaultShape type={type} />
        </Flex>
      ))}
    </>
  )
}