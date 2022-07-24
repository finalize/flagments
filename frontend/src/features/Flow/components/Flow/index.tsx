import ReactFlow, { Background, Controls } from "react-flow-renderer"
import { useGetAllNodesQuery } from "./query.generated"

export const Flow = () => {
  const { data, loading, error } = useGetAllNodesQuery()

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    console.error(error)
    return null
  }

  const defaultNodes = data?.allNodes ?? []

  return (
    <ReactFlow
      defaultNodes={defaultNodes}
      fitView
      fitViewOptions={{ padding: 1 }}
    >
      <Background color="#555" gap={16} />
      <Controls fitViewOptions={{ padding: 1 }} />
    </ReactFlow>
  )
}
