import { Select } from "@chakra-ui/react"
import { ChangeEventHandler, useEffect, useState } from "react"

import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../../Container"

export const Type = () => {
  const { onChangeEdgeType, getEdge, targetEdge } = useStore((state) => state)
  const edge = getEdge()

  const [value, setValue] = useState(edge?.type ?? "default")

  const onChange: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    setValue(value)
  }

  useEffect(() => {
    onChangeEdgeType(value)
  }, [value, onChangeEdgeType])

  useEffect(() => {
    setValue(edge?.type ?? "default")
  }, [targetEdge, edge])

  return (
    <Container title="タイプ">
      <Select size="sm" rounded="md" flex={1} onChange={onChange} value={value}>
        <option value={undefined}>デフォルト</option>
        <option value="step">ステップ</option>
        <option value="smoothstep">スムースステップ</option>
        <option value="straight">ストレート</option>
      </Select>
    </Container>
  )
}
