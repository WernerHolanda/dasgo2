import { Header } from "@/components/Header";
import dynamic from 'next/dynamic';
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "@/components/Sidebar";
 
const Chart = dynamic(()=> import ('react-apexcharts'),{
    ssr: false, //aqui é pra fazer a importaç do apexchart sem que ele fique quebrando. Então aqui é pra tornar dinamico o carregamento de forma que apenas carrega o componente quando o usuário clicar.
} )

const options = { //aqui é p personalizar o grafico chart
    chart: {
        toolbar: {
            show: false, //signf retirar o toolbar com as opções de cima do grafgico
        },
        zoom: {
            enable: false, //signf retirar o zoom que vem por padrão dos grafs
        },
        foreColor: theme.colors.gray[500],
            },
    grid: {
        show: false, //signf retirar as linhas que há por trás do grafic.
    },
    dataLabels: {
        enabled: false, //signf retirar os labels
    },
    tooltip: {
        enabled : false, //signf retirar o hover do mause que mostra info sobre os dados 
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600] //signf a bordar da cor q tá embaixo
        },
        axisTicks: {
            color: theme.colors.gray[600] //signf a cor dos pontos que estão embaixo marcam o eixo x
        },
        categories: [ //signf q eu tenho que passar 7 tipos de dados, isso pois tenho 7 numeros de dados 
            '2021-03-18T00:00:00.000Z',
            '2021-03-19T00:00:00.000Z',
            '2021-03-20T00:00:00.000Z',
            '2021-03-21T00:00:00.000Z',
            '2021-03-22T00:00:00.000Z',
            '2021-03-23T00:00:00.000Z',
            '2021-03-24T00:00:00.000Z',
                    ],
            },
    fill: {
        opacity: 0.3, //signf uma opacidade abaixo da linha do grafico
        type: 'gradient', //signf gradiente de sombra dark
        gradient: {
        shade: 'dark', //signf sombra dark
        opacityFrom: 0.7, //signf opactidade que começa
        opacityTo: 0.3, //signf a opacidade q termina
    },
    }
    };


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
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4" //signf padding border
                    >
                        <Text 
                            fontSize="lg"
                            mb="4"
                        >Inscritos da Semana
                        </Text>

                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>

                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"       
                    >
                        <Text 
                            fontSize="lg"
                            mb="4"
                        >Taxa de Abertura

                        </Text>
                        <Chart options={options} series={series} type="area" height={160} />

                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
        )
}