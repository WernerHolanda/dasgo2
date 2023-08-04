import { Header } from "@/components/Header";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import Chart from 'react-apexcharts';


const options = {};

const series = [
    { name: 'series1', data: [31,120,10,28,61, 18, 109]}
]

export default function Dashboard(){
    return(
        <Flex direction="column" h="100vh" > 
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid // do chakra, é um grid com funcionamento mto simples
                    flex="1"
                    gap="4"
                    minChildWidth="320px"// qdo o grid ficar menor que 320px de largura ele vai quebrar e mandar p baixo
                >
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text 
                            fontSize="lg"
                            mb="4"
                        >Iscritos da Semana
                        </Text>

                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>

                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}       
                    >
                        <Text 
                            fontSize="lg"
                            mb="4"
                        >Taxa de Abertura

                        </Text>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
        )
}