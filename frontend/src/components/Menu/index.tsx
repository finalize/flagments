import { HamburgerIcon } from "@chakra-ui/icons"
import {
  IconButton,
  Menu as ChakraMenu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  UseMenuOptionGroupProps,
} from "@chakra-ui/react"
import isequal from "lodash.isequal"
import React from "react"

import { templateVar } from "@/hooks/apollo"
import { Template } from "@/styles/grid"

export const Menu = () => {
  const onChange: UseMenuOptionGroupProps["onChange"] = (v) => {
    if (typeof v === "string") return

    for (const [key, value] of Object.entries(Template)) {
      if (isequal(value.pattern.sort(), v.sort())) {
        templateVar(Template[key])
      }
    }
  }

  return (
    <ChakraMenu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="ghost"
        zIndex={110}
        position="fixed"
        top={1}
        right={1}
      />
      <MenuList zIndex={110}>
        <MenuOptionGroup
          title="UI"
          type="checkbox"
          defaultValue={["header", "leftSidebar", "rightSidebar"]}
          onChange={onChange}
        >
          <MenuItemOption value="header">Header</MenuItemOption>
          <MenuItemOption value="leftSidebar">Left Sidebar</MenuItemOption>
          <MenuItemOption value="rightSidebar">Right Sidebar</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </ChakraMenu>
  )
}
