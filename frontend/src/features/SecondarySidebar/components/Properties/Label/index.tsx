import { Textarea } from "@chakra-ui/react"
import { ChangeEventHandler, useEffect, useState } from "react"

import { useNodes } from "@/hooks/flow/useNodes"

import { Container } from "../Container"

export const Label = () => {
  const { onChangeLabel, getNode,target } = useNodes((state) => state)
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

  useEffect(()=>{
    setValue(node?.data.label ?? "")
  },[target,node])

  return (
    <Container title="ラベル">
      <Textarea value={value} placeholder="ラベルを入力" onChange={onChange} />
    </Container>
  )
}
