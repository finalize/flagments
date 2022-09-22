import { Box, Flex, Select, Text } from "@chakra-ui/react"

export const EdgeTab = () => {
  return (
    <>
      <Box p={4} borderColor="gray.200" borderBottomWidth={1}>
        <Flex alignItems="center" mt={4}>
          <Text fontSize="xs" w={16}>
            タイプ
          </Text>
          <Select size="sm" rounded="md" flex={1}>
            <option value={undefined}>デフォルト</option>
            <option value="step">ステップ</option>
            <option value="smoothstep">スムースステップ</option>
            <option value="straight">ストレート</option>
          </Select>
        </Flex>
      </Box>
    </>
  )
}
