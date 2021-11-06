import { Text } from "@chakra-ui/layout";
import React from "react";

export function GroupTitle () {
    return (
        <Text fontSize='24px' fontWeight={700} pt='12px'>
            This week <Text fontSize='15px' fontWeight={500} color='gray.500' ml='5px' as='span'>October 18, 2021 - November 18, 2021</Text>
        </Text>
    )
}