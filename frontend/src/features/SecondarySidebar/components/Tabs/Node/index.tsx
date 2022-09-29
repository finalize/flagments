import { memo } from "react"

import { Color, Deletion, Description, Handle, Label } from "./Properties"

const Component = () => {
  return (
    <>
      <Label />
      <Description />
      <Handle />
      <Color />
      <Deletion />
    </>
  )
}

export const NodeTab = memo(Component)
