import { Box, Editable, EditableInput, EditablePreview } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box
      gridArea="header"
      zIndex={100}
      display="flex"
      px={1}
      alignItems="center"
      justifyContent="center"
      bg="white"
      borderColor="gray.200"
      borderBottomWidth={1}
    >
      <Editable defaultValue="クリックしてタイトルを編集">
        <EditablePreview fontSize="lg" maxW={960} noOfLines={1} />
        <EditableInput w={480} />
      </Editable>
    </Box>
  )
}
