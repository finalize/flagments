import { Textarea } from "@chakra-ui/react"
import { ChangeEventHandler, memo, useEffect, useState } from "react"

import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../../Container"

const Component = () => {
  const onChangeDescription = useStore(
    ({ onChangeDescription }) => onChangeDescription
  )
  const targetNode = useStore(({ targetNode }) => targetNode)

  const [value, setValue] = useState(targetNode?.data.description ?? "")

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value },
  }) => {
    setValue(value)
  }

  useEffect(() => {
    onChangeDescription(value)
  }, [value, onChangeDescription])

  return (
    <Container title="説明">
      <Textarea value={value} placeholder="説明を入力" onChange={onChange} />
    </Container>
  )
}

export const Description = memo(Component)
