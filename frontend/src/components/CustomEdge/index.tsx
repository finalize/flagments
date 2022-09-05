import { memo } from "react"
import { EdgeProps, getBezierPath } from "react-flow-renderer"

import { Colors } from "@/styles/theme"

const Component = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
}: EdgeProps) => {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <text>
        <textPath
          href={`#${id}`}
          style={{
            fill: Colors.blue[400],
            fontWeight: 700,
            background: "black",
          }}
          startOffset="50%"
          textAnchor="middle"
        >
          {data?.text ?? "選択中"}
        </textPath>
      </text>
    </>
  )
}

const CustomEdge = memo(Component)

export { CustomEdge }
