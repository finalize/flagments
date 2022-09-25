import { Input } from "@chakra-ui/react"
import { ChangeEventHandler, useEffect, useState } from "react"

import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../../../Edge/Container"

export const Label = () => {
  const { onChangeEdgeLabel, getEdge, targetEdge } = useStore((state) => state)
  const edge = getEdge()

  const [value, setValue] = useState(
    typeof edge?.label === "string" ? edge?.label : undefined
  )

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setValue(value)
  }

  useEffect(() => {
    onChangeEdgeLabel(value)
  }, [value, onChangeEdgeLabel])

  useEffect(() => {
    setValue(typeof edge?.label === "string" ? edge?.label : undefined)
  }, [targetEdge, edge])

  return (
    <Container title="ラベル">
      <Input value={value} placeholder="ラベルを入力" onChange={onChange} />
    </Container>
  )
}
