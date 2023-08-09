//aqui no _app.tsx lembrando q é o componente que fica em volta de tudo
import { AppProps } from 'next/app'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react' //o nome Provider signific q é um contexto q fica sempre em volta 
import { theme } from '../styles/theme'

import { SidebarDrawerProvider } from '@/components/contexts/SidebarDrawerContext'

function MyApp ({ Component, pageProps }: AppProps) {
    return (
    <ChakraProvider //justamente o provider aqui é o fundo no nosso app 
        theme={theme}
    >
        <SidebarDrawerProvider>
            <Component {...pageProps} />
        </SidebarDrawerProvider>
    </ChakraProvider>
    )
}

export default MyApp