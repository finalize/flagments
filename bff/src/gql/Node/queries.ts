const nodes = [
  { id: "1", data: { label: "Milestone 1" }, position: { x: 300, y: 100 } },
  { id: "2", data: { label: "Milestone 2" }, position: { x: 300, y: 200 } },
  { id: "3", data: { label: "Milestone 3" }, position: { x: 300, y: 300 } },
  { id: "4", data: { label: "Milestone 4" }, position: { x: 300, y: 400 } },
  { id: "5", data: { label: "Milestone 5" }, position: { x: 300, y: 500 } },
]

export const queries = {
  allNodes: () => nodes,
}
