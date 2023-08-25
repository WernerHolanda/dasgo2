//aqui no _app.tsx lembrando q é o componente que fica em volta de tudo
import { AppProps } from 'next/app'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react' //o nome Provider signific q é um contexto q fica sempre em volta 
import { theme } from '../styles/theme'

import { QueryClientProvider, QueryClient } from 'react-query'
import { SidebarDrawerProvider } from '@/components/contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'

if (process.env.NODE_ENV === 'development'){
    makeServer();
}

const queryClient = new QueryClient();

function MyApp ({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient} //The QueryClient can be used to interact with a cache:
        >    
        <ChakraProvider //justamente o provider aqui é o fundo no nosso app 
                theme={theme}
            >
                <SidebarDrawerProvider>
                    <Component {...pageProps} />
                </SidebarDrawerProvider>
            </ChakraProvider>
        </QueryClientProvider>    
            )
}

export default MyApp