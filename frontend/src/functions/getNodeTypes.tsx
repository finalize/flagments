import { HandleType, Position } from "react-flow-renderer"

type Handle = {
  id: string
  type: HandleType
  position: Position
}

export const getHandle = (value: string) => {
  if (value === "") return undefined

  return value.split("_").map((t) => {
    if (t === "top")
      return {
        id: "top",
        type: "source" as HandleType,
        position: Position.Top,
      }
    if (t === "bottom")
      return {
        id: "bottom",
        type: "source" as HandleType,
        position: Position.Bottom,
      }
    if (t === "right")
      return {
        id: "right",
        type: "source" as HandleType,
        position: Position.Right,
      }
    if (t === "left")
      return {
        id: "left",
        type: "source" as HandleType,
        position: Position.Left,
      }
  }) as Handle[]
}
