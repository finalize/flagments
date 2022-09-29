import { Input } from "@chakra-ui/react"
import { ChangeEventHandler, memo, useEffect, useState } from "react"

import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../../Container"

const Component = () => {
  const onChangeLabel = useStore(({ onChangeLabel }) => onChangeLabel)
  const targetNode = useStore(({ targetNode }) => targetNode)

  const [value, setValue] = useState(targetNode?.data.label ?? "")

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setValue(value)
    onChangeLabel(value)
  }

  useEffect(() => {
    setValue(targetNode?.data.label ?? "")
  }, [targetNode])

  return (
    <Container title="ラベル">
      <Input value={value} placeholder="ラベルを入力" onChange={onChange} />
    </Container>
  )
}

export const Label = memo(Component)
