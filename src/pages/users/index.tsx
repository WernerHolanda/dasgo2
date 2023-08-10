import { Pagination } from "@/components/Pagination";
import { Header } from "../../components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Button, Heading, Icon, Flex, Box, Checkbox, Table, Th, Thead, Tr, Tbody, Td, Text, useBreakpointValue, useBreakpoint } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";


export default function UserList() {
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
                        <Button 
                            as="a" 
                            size="sm" 
                            fontSize="sm"// =sm=small
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} />}
                            >
                                Criar Novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr> 
                                <Th px={ //1~ é mobile, 2º é para tablet, 3º em ambientes large
                                    ["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuários</Th>
                                { isWideVersion && <Th>Data de Cadastro</Th> }
                                <Td width="8"></Td>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]} >
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text></Text>
                                        <Text fontWeight="bold">Werner Holanda</Text>
                                        <Text fontSize="sm" color="gray.300">werner.holanda.dev@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>04,Agosto,2023</Td> }
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm"// =sm=small
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine}  fontSize="16"/>}
                                        >{ isWideVersion ? 'Editar' : '' }
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={["4", "4", "6"]} >
                                    <Checkbox  colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text></Text>
                                        <Text fontWeight="bold">Werner Holanda</Text>
                                        <Text fontSize="sm" color="gray.300">werner.holanda.dev@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>04,Agosto,2023</Td> }
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm"// =sm=small
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine}  fontSize="16"/>}
                                        >{ isWideVersion ? 'Editar' : '' }
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={["4", "4", "6"]} >
                                    <Checkbox  colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text></Text>
                                        <Text fontWeight="bold">Werner Holanda</Text>
                                        <Text fontSize="sm" color="gray.300">werner.holanda.dev@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>04,Agosto,2023</Td> }
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm"// =sm=small
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine}  fontSize="16"/>}
                                        >{ isWideVersion ? 'Editar' : '' }
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}