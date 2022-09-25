import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Text,
} from "@chakra-ui/react"

export const Header = () => {
  return (
    <Flex
      gridArea="header"
      zIndex={100}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="white"
      borderColor="gray.200"
      borderBottomWidth={1}
    >
      <Flex w={256} alignItems="center" justifyContent="center">
        <Text as="h1" fontFamily="Roboto" fontSize="2xl" letterSpacing={2}>
          Flagments
        </Text>
      </Flex>
      <Editable defaultValue="クリックしてタイトルを編集">
        <EditablePreview
          fontSize="lg"
          maxW={960}
          noOfLines={1}
          fontFamily="Noto Sans JP"
        />
        <EditableInput w={480} />
      </Editable>
      <Flex w={256} alignItems="center" justifyContent="center"></Flex>
    </Flex>
  )
}
