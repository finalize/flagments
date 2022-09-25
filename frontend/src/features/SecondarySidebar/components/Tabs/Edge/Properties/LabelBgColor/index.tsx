import { useEffect, useState } from "react"

import { ColorPalette } from "@/components/ColorPalette"
import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../../Container"

export const LabelBgColor = () => {
  const { onChangeEdgeLabelBgColor, getEdge, targetEdge } = useStore(
    (state) => state
  )
  const edge = getEdge()

  const [color, setColor] = useState(edge?.labelBgStyle?.fill ?? "")

  const onChange = (value: string) => {
    onChangeEdgeLabelBgColor(value)
  }

  useEffect(() => {
    setColor(edge?.labelBgStyle?.fill ?? "")
  }, [targetEdge, edge])

  return (
    <Container title="ラベルの背景色">
      <ColorPalette value={color} onChange={onChange} />
    </Container>
  )
}
