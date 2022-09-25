import { useEffect, useState } from "react"

import { ColorPalette } from "@/components/ColorPalette"
import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../../Container"

export const StrokeColor = () => {
  const { onChangeEdgeStrokeColor, getEdge, targetEdge } = useStore(
    (state) => state
  )
  const edge = getEdge()

  const [color, setColor] = useState(edge?.style?.stroke ?? "")

  const onChange = (value: string) => {
    onChangeEdgeStrokeColor(value)
  }

  useEffect(() => {
    setColor(edge?.style?.stroke ?? "")
  }, [targetEdge, edge])

  return (
    <Container title="ベクターの色">
      <ColorPalette value={color} onChange={onChange} />
    </Container>
  )
}
