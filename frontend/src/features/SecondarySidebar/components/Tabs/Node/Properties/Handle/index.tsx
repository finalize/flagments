import { Flex, Switch, Text } from "@chakra-ui/react"
import { memo, useEffect, useState } from "react"
import { Position } from "react-flow-renderer"

import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../../Container"

const Component = () => {
  const onChangeHandle = useStore(({ onChangeHandle }) => onChangeHandle)
  const targetNode = useStore(({ targetNode }) => targetNode)
  const [handles, setHandles] = useState(targetNode?.data.handles ?? [])

  const onSetHandle = (position: Position) => {
    const exists = handles.includes(position)

    let newHandles: Position[] = []
    if (exists) {
      newHandles = handles.filter((handle) => {
        return handle !== position
      })
    } else {
      newHandles = handles.concat(position)
    }

    setHandles(newHandles)
    onChangeHandle(newHandles)
  }

  useEffect(() => {
    setHandles(targetNode?.data.handles ?? [])
  }, [targetNode])

  return (
    <Container title="ハンドル">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="sm">上ハンドル</Text>
        <Switch
          isChecked={handles.includes(Position.Top)}
          onChange={() => onSetHandle(Position.Top)}
        />
      </Flex>
      <Flex mt={4} alignItems="center" justifyContent="space-between">
        <Text fontSize="sm">下ハンドル</Text>
        <Switch
          isChecked={handles.includes(Position.Bottom)}
          onChange={() => onSetHandle(Position.Bottom)}
        />
      </Flex>
      <Flex mt={4} alignItems="center" justifyContent="space-between">
        <Text fontSize="sm">左ハンドル</Text>
        <Switch
          isChecked={handles.includes(Position.Left)}
          onChange={() => onSetHandle(Position.Left)}
        />
      </Flex>
      <Flex mt={4} alignItems="center" justifyContent="space-between">
        <Text fontSize="sm">右ハンドル</Text>
        <Switch
          isChecked={handles.includes(Position.Right)}
          onChange={() => onSetHandle(Position.Right)}
        />
      </Flex>
    </Container>
  )
}

export const Handle = memo(Component)
