
import { Box, Button, Checkbox, Flex, Heading, Icon, Link, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";


export default function UserList() { //data = os dados // isloading = se esta carregando // error= mostrar os erros
    const [page, setPage] = useState(1);    
    const { data, isLoading, error } = useUsers(page); //useQuery('users', async () => { //users é como eu irei chamar 
        
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
                        {data.users.map(user => {
                            return (
                                <Tr key={user.id}>
                                    <Td px={["4", "4", "6"]} >
                                        <Checkbox colorScheme="pink" />
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text color="purple.400" onMouseEnter= {() => handlePrefetchUser(user. id)}></Text>
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

                        <Pagination 
                        totalCountOfRegisters={data?.totalCount}
                        currentPage={page}
                        onPageChange={setPage}
                         />
                    </>
              )}      
                </Box>
            </Flex>
        </Box>
    )
}