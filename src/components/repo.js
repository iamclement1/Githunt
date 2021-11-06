import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import React from "react";
import { Button } from "@chakra-ui/button";
import { InfoOutlineIcon, StarIcon } from "@chakra-ui/icons";


export function Repo (props) {
    return (
        <Box borderWidth={1} bg="white" p='15px' rounded='5px' mt='20px' alignItems='center'>
            <Flex flex={1} flexDir='row'>
                <Image src='../avatar.svg' w={'35px'} h={'35px'} rounded='5px' />
                <Box ml='10px'>
                    <Heading fontSize='16px'>iamclement</Heading>
                    <Text fontSize="13px">View Profile</Text>
                </Box>

            </Flex>
            
            <Box mb='15px'>
                <Box mb='10px'>
                    <Heading as='a' href='https://github.com/iamclement1/Githunt.git' target='_blank' color='purple.700' fontSize='19px'>GitHunt</Heading>
                    <Text color='gray.600' fontSize='14px'>Built by &middot; <Link href='https://github.com/iamclement1' target='_blank' fontWeight='bold'> Nnamdi Clement</Link> &middot; November 6, 2021 </Text>
                </Box>

                <Text fontSize="14px" color='gray.900'>Hunt the most starred projects on GitHub</Text>
            </Box>

            <Stack isInline spacing='10px'>
                <Button as='a' cursor='pointer' variant='link' fontSize='14px' iconSpacing='4px' 
                _hover={{textDecor: 'none'}}> <StarIcon /> 4503</Button>
                <Button as='a' cursor='pointer' variant='link' fontSize='14px' iconSpacing='4px' _hover={{textDecor: 'none'}}> <StarIcon /> 4503</Button>
                <Button as='a' cursor='pointer' variant='link' fontSize='14px' iconSpacing='4px' _hover={{textDecor: 'none'}}> <InfoOutlineIcon /> 4503</Button>
            </Stack>
        </Box>
    )
}