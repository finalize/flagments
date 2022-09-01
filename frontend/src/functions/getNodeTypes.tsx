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
        id: "b",
        type: "source" as HandleType,
        position: Position.Bottom,
      }
    if (t === "right")
      return {
        id: "c",
        type: "source" as HandleType,
        position: Position.Right,
      }
    if (t === "left")
      return {
        id: "d",
        type: "source" as HandleType,
        position: Position.Left,
      }
  }) as Handle[]
}
