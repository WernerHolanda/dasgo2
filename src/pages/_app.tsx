//aqui no _app.tsx lembrando q é o componente que fica em volta de tudo
import { AppProps } from 'next/app'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react' //o nome Provider signific q é um contexto q fica sempre em volta 
import { theme } from '../styles/theme'

function MyApp ({ Component, pageProps }: AppProps) {
    return (
    <ChakraProvider //justamente o provider aqui é o fundo no nosso app 
    theme={theme}
    >
    <Component {...pageProps} />
    </ChakraProvider>
    )
}

export default MyApp