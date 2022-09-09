import { useReactiveVar } from "@apollo/client"
import { useEffect } from "react"

import { selectedEdgeVar } from "@/hooks/apollo"
import { Colors } from "@/styles/theme"

export const useEdge = () => {
  const selectedEdge = useReactiveVar(selectedEdgeVar)

  // useEffect(() => {
  //   if (edges.length === 0) return

  //   if (selectedEdge) {
  //     setEdges((edgs) =>
  //       edgs.map((edg) =>
  //         edg.id === selectedEdge.id
  //           ? {
  //               ...edg,
  //               selected: true,
  //               animated: true,
  //               zIndex: edg.zIndex ? edg.zIndex + 1 : 1,
  //               style: { stroke: Colors.blue[400] },
  //             }
  //           : { ...edg, selected: false, animated: false, style: undefined }
  //       )
  //     )
  //   } else {
  //     setEdges((edgs) =>
  //       edgs.map((edg) => ({
  //         ...edg,
  //         selected: false,
  //         animated: false,
  //         style: undefined,
  //       }))
  //     )
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedEdge])

  return {}
}
