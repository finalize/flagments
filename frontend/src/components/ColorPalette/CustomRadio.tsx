import { Box, FormLabel, RadioProps, useRadio } from "@chakra-ui/react"

type Props = RadioProps & {
  bgColor: string
  borderColor: string
}

export const CustomRadio = ({ bgColor, borderColor, ...radioProps }: Props) => {
  const { state, getInputProps, getCheckboxProps, htmlProps } =
    useRadio(radioProps)

  return (
    <FormLabel {...htmlProps} cursor="pointer" m={0}>
      <input {...getInputProps({})} hidden />
      <Box
        {...getCheckboxProps()}
        borderColor={state.isChecked ? borderColor : "transparent"}
        borderWidth={4}
        backgroundColor={bgColor}
        w={8}
        h={8}
        rounded="full"
      />
    </FormLabel>
  )
}
