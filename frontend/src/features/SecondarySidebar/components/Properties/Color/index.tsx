import { useEffect, useState } from "react"

import { ColorPalette } from "@/components/ColorPalette"
import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../Container"

export const Color = () => {
  const { onChangeColor, getNode, targetNode } = useStore((state) => state)
  const node = getNode()

  const [color, setColor] = useState(node?.data.color ?? "")

  const onChange = (value: string) => {
    onChangeColor(value)
  }

  useEffect(() => {
    setColor(node?.data.color ?? "")
  }, [targetNode, node])

  return (
    <Container title="色">
      <ColorPalette value={color} onChange={onChange} />
    </Container>
  )
}
