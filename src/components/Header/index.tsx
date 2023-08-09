import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { Profile } from './Profile';
import { NotificationsNav } from './NotificationsNav';
import { SearchBox } from './SearchBox';
import { Logo } from './Logo';
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header(){
    const {onOpen} = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false, //por padrão é falso, logo não é visivel os dados e nomes do perfil da pessoa na pagina. Isso é uma solução para que quando estiver no dispositivo mobile as informações não fiquem muito apertadas. Basta apenas a imagem da logo da pessoa, não precisa de todos os dados. 
        lg:true, // mas caso não seja o padrão então ele ficará large=lg ai então ele mostrará os dados do lado da logo da pessoa. 
    })
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
                {!isWideVersion && (
                    <IconButton
                    aria-label="open Navigation" //é obrigatório pra dizer o que q ela faz
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2" 
                    >

                    </IconButton>)}
            <Logo />
        
            { isWideVersion && <SearchBox /> }

        <Flex align="center" ml="auto">    
            <NotificationsNav />

            <Profile showProfileData={isWideVersion} />
        </Flex>
        
         
        </Flex>
    );
}