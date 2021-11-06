import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export function Brand () {
    return (
        <Flex alignItems='center'>
                    <Image src='/logo.svg' />
                    <Box ml='10px'>
                        <Heading fontSize='24px'>GitHunt</Heading>
                        <Text color='gray.700'>Most starred projects on GitHub</Text>
                    </Box>
                </Flex>
    )
}