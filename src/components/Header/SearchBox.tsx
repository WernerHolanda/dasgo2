import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox () {
    return(
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

        <Icon as={RiSearchLine} //isso é uma instrução do chakra lib
            fontSize="20"
        /> 
        
        </Flex>
    );
};

