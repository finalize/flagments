import {
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react"
import { FC, ReactNode } from "react"

import { PickedUseDisclosureReturn } from "@/types"

type Props = PickedUseDisclosureReturn & {
  placement?: "right" | "left"
  children?: ReactNode
}

export const Drawer: FC<Props> = ({
  isOpen,
  onClose,
  placement = "left",
  children,
}) => {
  return (
    <ChakraDrawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      size="xs"
    >
      <DrawerOverlay bg="trasparent" />
      <DrawerContent pt={12} w={0}>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>{children}</DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </ChakraDrawer>
  )
}
