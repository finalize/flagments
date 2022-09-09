import { Textarea } from "@chakra-ui/react"
import { ChangeEventHandler, FC } from "react"

import { Container } from "../Container"

type Props = {
  value: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
}

export const Label: FC<Props> = ({ value, onChange }) => {
  return (
    <Container title="ラベル">
      <Textarea value={value} placeholder="ラベルを入力" onChange={onChange} />
    </Container>
  )
}
