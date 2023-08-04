import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import React from 'react'
import { RiSearchLine, RiUserAddLine, RiNotificationLine } from 'react-icons/ri'

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
        <Text 
                fontSize="3x1"
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
                >
                dashgo
                <Text as="span" ml="1" color="pink.500">.</Text>
        </Text>
        
        <Flex 
            as="label"
            flex="1"
            py="4" //paddingvertical
            px="8"//padding horizontal
            ml="6"
            maxWidth={1000}
            alignSelf="center"//se alinhar ao centro
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius-="full"
            
        >
        <Input
            color="gray.50"
            variant="unstyled" // é para não ter a formatação original
            px="4"
            mr="4" //marginright
            placeholder="Buscar na plataforma"
            _placeholder={{ color: 'gray.400'}}
        />
        <Flex 
            align="center"
            ml="auto"
        >
            <HStack
                spacing="8"
                mx="8"
                pr="8" //poadding right
                py="1" //padding vertical
                color="gray.300"
                borderRightWidth={1}
                borderColor="gray.700"
                //border="2px"
                //align="right"
            >
                <Icon as={RiSearchLine} //isso é uma instrução do chakra lib
                    fontSize="20"
                /> 

                <Icon as={RiUserAddLine} //isso é uma instrução do chakra lib
                    fontSize="20"
                /> 
            </HStack>

            <Flex >
                <Box mr="4" textAlign="right">
                    <Text>Werner Holanda</Text>
                    <Text color="gray.300" fontSize="small">
                        werner.holanda.dev@gmail.com
                    </Text>
                </Box>

                <Avatar size="md" name="Werner Holanda" src="https://github.com/WernerHolanda.png" />
            

            </Flex>
        </Flex>
        </Flex>
         
        </Flex>
    );
}