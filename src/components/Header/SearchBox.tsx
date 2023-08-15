import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

// Controlled components = forma de criar formulários = aqui observa os valores enquanto são digitados
// Uncontrolled components = forma de criar formulários = aqui tbm dá mas dá mto mais trabalho.
// o diego acha melhor usar o Controlled.

// Imperativo Vs Declarativo

export function SearchBox () {
    //const [ search, setSearch ] = useState('') // no input é necessário ter um 'Value' e um 'onchange'. Isso se chama de controled components.
   
    const searchInputRef = useRef<HTMLInputElement>(null) //<> se chama genéric e ele armazena algo dentor. o que nos armazenamos foi o HtmlElement.

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
            ref={searchInputRef}
            // Value e onChange só usarei se for no useState, pois são obrigatórios //value={search}
            //onChange={ event => setSearch(event.target.value)}
        />

        <Icon as={RiSearchLine} //isso é uma instrução do chakra lib
            fontSize="20"
        /> 
        
        </Flex>
    );
};

