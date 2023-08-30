//aqui no _app.tsx lembrando q é o componente que fica em volta de tudo
import { AppProps } from 'next/app'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react' //o nome Provider signific q é um contexto q fica sempre em volta 
import { ReactQueryDevtools } from 'react-query/devtools'
import { theme } from '../styles/theme'

import { QueryClientProvider, QueryClient } from 'react-query'
import { SidebarDrawerProvider } from '@/components/contexts/SidebarDrawerContext'
import { makeServer } from '../services/Mirage/index'
import { queryClient } from '../services/queryClient'

if (process.env.NODE_ENV === 'development'){
    makeServer();
}

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

            <ReactQueryDevtools />
        </QueryClientProvider>    
            )
}

export default MyApp