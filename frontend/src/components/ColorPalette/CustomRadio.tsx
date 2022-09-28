import { Box, FormLabel, RadioProps, useRadio } from "@chakra-ui/react"

type Props = RadioProps & {
  color: string
}

export const CustomRadio = ({ color, ...radioProps }: Props) => {
  const { state, getInputProps, getCheckboxProps, htmlProps } =
    useRadio(radioProps)

  return (
    <FormLabel {...htmlProps} cursor="pointer" m={0}>
      <input {...getInputProps({})} hidden />
      <Box
        {...getCheckboxProps()}
        borderColor={state.isChecked ? color : "transparent"}
        borderWidth={4}
        backgroundColor={state.isChecked ? "white" : color}
        w={6}
        h={6}
        rounded="full"
        mx="auto"
      />
    </FormLabel>
  )
}
