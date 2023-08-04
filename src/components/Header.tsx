import { Flex } from '@chakra-ui/react'
import React from 'react'

export function Header(){
    return(
        <Flex 
        as="header" 
        w="100%" 
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
        >
            <h1>DASHGO</h1>
        </Flex>

    )
}