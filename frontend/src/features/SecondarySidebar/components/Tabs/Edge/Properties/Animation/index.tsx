import { Flex, Switch, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../../Container"

export const Animation = () => {
  const { onChangeEdgeAnimation, getEdge, targetEdge } = useStore(
    (state) => state
  )
  const edge = getEdge()
  const [animated, setAnimated] = useState(edge?.animated ?? false)

  const onSetAnimated = (checked: boolean) => {
    setAnimated(checked)
  }

  useEffect(() => {
    onChangeEdgeAnimation(animated)
  }, [animated, onChangeEdgeAnimation])

  useEffect(() => {
    setAnimated(edge?.animated ?? false)
  }, [targetEdge, edge])

  return (
    <Container title="エフェクト">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="sm">アニメーション</Text>
        <Switch
          isChecked={animated}
          onChange={(e) => onSetAnimated(e.target.checked)}
        />
      </Flex>
    </Container>
  )
}
