import React from 'react'
import { Box } from "@chakra-ui/layout";
import { PageHeader } from './components/page-header';
import { Flex } from '@chakra-ui/react';
import { GroupTitle } from './components/group-title';
import { Filter } from './components/filter';
import { Repo } from './components/repo';



export function Feed () {
    return (
        <Box maxWidth='1200px' mx='auto'>
            <PageHeader />

            <Flex alignItems='center' justifyContent='space-between'>
                <GroupTitle />
                <Filter />
            </Flex>

            <Box>
                <Repo />
            </Box>
        </Box>
    )
}