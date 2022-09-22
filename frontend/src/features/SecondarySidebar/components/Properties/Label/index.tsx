import { Textarea } from "@chakra-ui/react"
import { ChangeEventHandler, useEffect, useState } from "react"

import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../Container"

export const Label = () => {
  const { onChangeLabel, getNode, targetNode } = useStore((state) => state)
  const node = getNode()

  const [value, setValue] = useState(node?.data.label ?? "")

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value },
  }) => {
    setValue(value)
  }

  useEffect(() => {
    onChangeLabel(value)
  }, [value, onChangeLabel])

  useEffect(() => {
    setValue(node?.data.label ?? "")
  }, [targetNode, node])

  return (
    <Container title="ラベル">
      <Textarea value={value} placeholder="ラベルを入力" onChange={onChange} />
    </Container>
  )
}
