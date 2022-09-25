import { useEffect, useState } from "react"

import { ColorPalette } from "@/components/ColorPalette"
import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../../Container"

export const LabelColor = () => {
  const { onChangeEdgeLabelColor, getEdge, targetEdge } = useStore(
    (state) => state
  )
  const edge = getEdge()

  const [color, setColor] = useState(edge?.labelStyle?.fill ?? "")

  const onChange = (value: string) => {
    onChangeEdgeLabelColor(value)
  }

  useEffect(() => {
    setColor(edge?.labelStyle?.fill ?? "")
  }, [targetEdge, edge])

  return (
    <Container title="ラベルの色">
      <ColorPalette value={color} onChange={onChange} />
    </Container>
  )
}
