import { CSSProperties, memo, useLayoutEffect, useRef, useState } from "react"
import { EdgeProps, getBezierPath, getEdgeCenter } from "react-flow-renderer"

type Props = EdgeProps & {
  labelBgStyle?: CSSProperties
  labelTextStyle?: CSSProperties
}

const Component = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  labelBgStyle = {},
  labelTextStyle = {},
  label,
  selected,
  markerEnd,
}: Props) => {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  })
  const textRef = useRef<SVGTextElement>(null)

  const [box, setBox] = useState<DOMRect>()

  const w = box?.width ?? 0
  const h = box?.height ?? 0
  const x = box?.x ?? 0
  const y = box?.y ?? 0

  useLayoutEffect(() => {
    if (textRef?.current == null) return

    setBox(textRef.current.getBBox())
  }, [setBox, label])

  return (
    <>
      <path
        id={id}
        // style={{ ...style, stroke: "blue", strokeWidth: selected ? 1.5 : 1 }}
        style={{ ...style, strokeWidth: selected ? 1.5 : 1 }}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      {/* {label && (
        <g
          transform={`translate(${edgeCenterX - w / 2} ${edgeCenterY + h / 3})`}
        >
          <rect
            x={x - 4}
            y={y - 4}
            width={w + 8}
            height={h + 8}
            style={{ ...labelBgStyle, fill: "red", fillOpacity: 0.9 }}
            ry={4}
          ></rect>
          <text
            // x={edgeCenterX - w}
            // y={edgeCenterY}
            ref={textRef}
            style={{ ...labelTextStyle }}
          >
            {label}
          </text>
        </g>
      )} */}
    </>
  )
}

const CustomEdge = memo(Component)

export { CustomEdge }
