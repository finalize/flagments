import { Flex, Switch, Text } from "@chakra-ui/react"
import { FC } from "react"

import { useNode } from "@/hooks/flow"
import { CustomNode } from "@/types"

import { Container } from "../Container"

type Props = {
  targetNode: CustomNode
}
type Args = {
  checked: boolean
  position: string
}
type HandleSwitchPosition = (args: Args) => void

export const Handle: FC<Props> = ({ targetNode }) => {
  const { onChangeHandlePosition } = useNode()

  const positions = targetNode.data.type?.split("_") ?? []

  const handleSwitchPosition: HandleSwitchPosition = ({
    checked,
    position,
  }) => {
    onChangeHandlePosition({ checked, position, positions })
  }

  return (
    <Container title="ハンドル">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="sm">上ハンドル</Text>
        <Switch
          isChecked={positions.some((p) => p === "top")}
          onChange={(e) =>
            handleSwitchPosition({ checked: e.target.checked, position: "top" })
          }
        />
      </Flex>
      <Flex mt={4} alignItems="center" justifyContent="space-between">
        <Text fontSize="sm">下ハンドル</Text>
        <Switch
          isChecked={positions.some((p) => p === "bottom")}
          onChange={(e) =>
            handleSwitchPosition({
              checked: e.target.checked,
              position: "bottom",
            })
          }
        />
      </Flex>
      <Flex mt={4} alignItems="center" justifyContent="space-between">
        <Text fontSize="sm">左ハンドル</Text>
        <Switch
          isChecked={positions.some((p) => p === "left")}
          onChange={(e) =>
            handleSwitchPosition({
              checked: e.target.checked,
              position: "left",
            })
          }
        />
      </Flex>
      <Flex mt={4} alignItems="center" justifyContent="space-between">
        <Text fontSize="sm">右ハンドル</Text>
        <Switch
          isChecked={positions.some((p) => p === "right")}
          onChange={(e) =>
            handleSwitchPosition({
              checked: e.target.checked,
              position: "right",
            })
          }
        />
      </Flex>
    </Container>
  )
}
