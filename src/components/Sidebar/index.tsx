import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

import { SidebarNav } from './SidebarNav'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'
 
export  function Sidebar () {
    const { isOpen, onClose } = useSidebarDrawer()
    
    const isDrawerSidebar = useBreakpointValue({
        base: true, //por padrão é true, logo só vai comprimir em uma lista de itens visivel os dados direto na pagina se estiver na versão apertada para mobile. Isso é uma solução para que quando estiver no dispositivo mobile as informações não fiquem muito apertadas. Basta apenas a imagem da logo da pessoa, não precisa de todos os dados. 
        lg:false, // mas caso não seja o padrão então ele ficará large=lg ai então ele mostrará os dados do lado da logo da pessoa. 
    })

if (isDrawerSidebar){
    return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
            <DrawerContent bg="gray.800" p="4">
                <DrawerCloseButton mt="6" />
                <DrawerHeader>Navegação</DrawerHeader>

                <DrawerBody>
                    <SidebarNav />
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>

    </Drawer>
)}

    return(
        <Box as="aside" w="64" mr="8">
            <SidebarNav />
        </Box>
    )
} 