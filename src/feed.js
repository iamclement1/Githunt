import React from 'react'
import { Box, SimpleGrid } from "@chakra-ui/layout";
import { PageHeader } from './components/page-header';
import { Button } from '@chakra-ui/button';
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

            <SimpleGrid columns={3} spacing='15px'>
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
            </SimpleGrid>

            <Flex alignItems='center' justifyContent='center' my='20px'>
                <Button colorScheme='blue'>Load next group</Button>
            </Flex>
        </Box>
    )
}