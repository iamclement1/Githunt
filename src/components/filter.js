import { Stack } from "@chakra-ui/layout";
import languages from '../data/languages.json'
import React from "react";
import { Select } from "@chakra-ui/select";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { HamburgerIcon, DragHandleIcon } from "@chakra-ui/icons";

export function Filter () {
    return (
        <Stack isInline>
            <Select>
                {languages.map(languages => (
                    <option value={languages.value}>{languages.label} </option>
                ))}
            </Select>

            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='white' borderWidth={1} px='30' fontWeight={400}>
                    Action
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
            <Stack isInline spacing={0} ml='10px' borderWidth={1} rounded='5px' alignItems='center'>
                <Button h='100%' fontWeight={400} roundedRight={0} bg='white'> <DragHandleIcon/> Grid</Button>
                <Button h='100%' fontWeight={400} roundedLeft={0} bg='white'> <HamburgerIcon /> List</Button>
            </Stack>
        </Stack>
    )
}