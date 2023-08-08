import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Profile } from './Profile';
import { NotificationsNav } from './NotificationsNav';
import { SearchBox } from './SearchBox';
import { Logo } from './Logo';

export function Header(){
    return(
        <Flex 
        as="header" 
        w="100%" 
        maxWidth={1480}
        h="20"
        mx="auto" //=marginhorizontal
        mt="4" //=margintop
        px="6" //=padding horizontal
        align="center"
        >
            <Logo />
        
            <SearchBox />

        <Flex align="center" ml="auto">    
            <NotificationsNav />

            <Profile />
        </Flex>
        
         
        </Flex>
    );
}