import { Box } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box
      gridArea="header"
      zIndex={100}
      display="flex"
      px={1}
      alignItems="center"
      justifyContent="flex-end"
      bg="white"
      borderColor="gray.200"
      borderBottomWidth={1}
    />
  )
}
