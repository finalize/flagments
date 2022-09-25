import { Flex, Switch, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Position } from "react-flow-renderer"

import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../../Container"

export const Handle = () => {
  const { onChangeHandle, getNode, targetNode } = useStore((state) => state)
  const node = getNode()
  const [handles, setHandles] = useState(node?.data.handles ?? [])

  const onSetHandle = (position: Position) => {
    const exists = handles.includes(position)

    if (exists) {
      setHandles(
        handles.filter((handle) => {
          return handle !== position
        })
      )
    } else {
      setHandles(handles.concat(position))
    }
  }

  useEffect(() => {
    onChangeHandle(handles)
  }, [handles, onChangeHandle])

  useEffect(() => {
    setHandles(node?.data.handles ?? [])
  }, [targetNode, node])

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
