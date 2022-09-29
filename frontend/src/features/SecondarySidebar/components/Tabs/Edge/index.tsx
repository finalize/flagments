import {
  Animation,
  Deletion,
  Label,
  LabelBgColor,
  LabelColor,
  StrokeColor,
  Type,
} from "./Properties"

export const EdgeTab = () => {
  return (
    <>
      <Label />
      <LabelColor />
      <LabelBgColor />
      <Type />
      <Animation />
      <StrokeColor />
      <Deletion />
    </>
  )
}
