
import { Button, Heading, Icon, Flex, Box, Checkbox, Table, Th, Thead, Tr, Tbody, Td, Text, useBreakpointValue, useBreakpoint, Spinner } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import Link from "next/link";
import { useQuery } from 'react-query'

import { Header } from "../../components/Header";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { useEffect } from "react";


export default function UserList() { //data = os dados // isloading = se esta carregando // error= mostrar os erros
    const { data, isLoading, error} = useQuery('users', async () => { //users é como eu irei chamar 
        const response = await fetch('https://localhost:3000/api/users')
        const data = await response.json()
    //*    
        const users = data.users.map(user => {
            return{
                id: user.id,
                name: user.name,
                email: user.email,
                createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                 })
            };
        });

        return users;
    }, {
        staleTime: 1000 * 5, //5 seconds
    }) 

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8 " justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        
                        <Link href="/users/create" passHref>
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm"// =sm=small
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} />}
                                >
                                    Criar Novo
                            </Button>
                        </Link>
                    </Flex>

              { isLoading ? (
                    <Flex justify="center">
                        <Spinner />
                    </Flex>
                ) : error ? (
                    <Flex justify="center">
                        <Text>Falha ao obter dados dos usuários.</Text>
                    </Flex>
                ) : (
                    <>
                        <Table colorScheme="whiteAlpha">
                    <Thead>
                        <Tr> 
                            <Th px={["4", "4", "6"]//1~ é mobile, 2º é para tablet, 3º em ambientes large
                                } color="gray.300" width="8">
                                <Checkbox colorScheme="pink" />
                            </Th>
                            <Th>Usuários</Th>
                            { isWideVersion && <Th>Data de Cadastro</Th> }
                            <Td width="8"></Td>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {data.user.map(user => {
                            return (
                                <Tr>
                                    <Td px={["4", "4", "6"]} >
                                        <Checkbox colorScheme="pink" />
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text></Text>
                                            <Text fontWeight="bold">{user.name}</Text>
                                            <Text fontSize="sm" color="gray.300">{user.email}.com</Text>
                                        </Box>
                                    </Td>
                                    { isWideVersion && <Td>{data.user.createdAt}</Td> }
                                </Tr> 
                            )
                        })}
                    </Tbody>
                        </Table>

                        <Pagination />
                    </>
              )}      
                </Box>
            </Flex>
        </Box>
    )
}