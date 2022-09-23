import { Grid, useRadioGroup } from "@chakra-ui/react"

import { colors } from "./colors"
import { CustomRadio } from "./CustomRadio"

type Props = {
  value?: string
  onChange: (value: string) => void
}

export const ColorPalette = ({ value, onChange }: Props) => {
  const { getRadioProps, getRootProps } = useRadioGroup({
    value,
    onChange,
  })

  return (
    <Grid {...getRootProps()} templateColumns="repeat(5, 1fr)" gap={4}>
      {colors.map(({ name, bgColor, borderColor }) => {
        return (
          <CustomRadio
            key={name}
            bgColor={bgColor}
            borderColor={borderColor}
            {...getRadioProps({ value: name })}
          />
        )
      })}
    </Grid>
  )
}
