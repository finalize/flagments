import { memo, useEffect, useState } from "react"

import { ColorPalette } from "@/components/ColorPalette"
import { useStore } from "@/hooks/flow/useStore"

import { Container } from "../../Container"

const Component = () => {
  const onChangeColor = useStore(({ onChangeColor }) => onChangeColor)
  const targetNode = useStore(({ targetNode }) => targetNode)

  const [color, setColor] = useState(targetNode?.data.color ?? "")

  const onChange = (value: string) => {
    setColor(value)
    onChangeColor(value)
  }

  useEffect(() => {
    setColor(targetNode?.data.color ?? "")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetNode])

  return (
    <Container title="色">
      <ColorPalette value={color} onChange={onChange} />
    </Container>
  )
}

export const Color = memo(Component)
