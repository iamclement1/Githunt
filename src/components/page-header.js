import React from "react";
import { Flex, Stack} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Brand } from "./brand";

export function PageHeader () {
    return (
        <Flex justifyContent="space-between" alignItems='center' pt='15px'>
                <Brand />
                <Stack isInline spacing='20px'>
                    <Button>View Source</Button>
                    <Button colorScheme='red'>Use Extension</Button>
                    <Button colorScheme='purple'>Tweet</Button>
                </Stack>
            </Flex>
    )
}