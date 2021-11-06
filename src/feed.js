import React from 'react'
import { Box } from "@chakra-ui/layout";
import { PageHeader } from './components/page-header';
import { Flex } from '@chakra-ui/react';
import { GroupTitle } from './components/group-title';



export function Feed () {
    return (
        <Box maxWidth='1200px' mx='auto'>
            <PageHeader />

            <Flex alignItems='center' justifyContent='space-between'>
                <GroupTitle />
                <Box></Box>
            </Flex>
        </Box>
    )
}