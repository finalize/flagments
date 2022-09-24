import { Textarea } from "@chakra-ui/react"
import { ChangeEventHandler, useEffect, useState } from "react"

import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../Container"

export const Description = () => {
  const { onChangeDescription, getNode, targetNode } = useStore(
    (state) => state
  )
  const node = getNode()

  const [value, setValue] = useState(node?.data.description ?? "")

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value },
  }) => {
    setValue(value)
  }

  useEffect(() => {
    onChangeDescription(value)
  }, [value, onChangeDescription])

  useEffect(() => {
    setValue(node?.data.description ?? "")
  }, [targetNode, node])

  return (
    <Container title="説明">
      <Textarea value={value} placeholder="説明を入力" onChange={onChange} />
    </Container>
  )
}
