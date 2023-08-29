import { PaginationItem } from "./PaginationItems";
import { Box, Stack, Text } from "@chakra-ui/react";

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 1; // aqui é a quantidade de numeros de paginas mostradas pra cada lado no numero da pagina atual. 2 pra direita e 2 esquerda

function generatePagesArray(from: number, to: number) { // função ŕa gerar um array de paginas
    return [... new Array(to - from)]
    .map((_, index) => { // '.map' significa q após gerar o array, vai dps percorrer o array, e vai pegar apenas o indece desse aray e vaifazer o calculo descrito no return 
        return from + index + 1;
    })
    .filter(page => page > 0)
    }


export function Pagination({
    totalCountOfRegisters, 
    registersPerPage= 10, 
    currentPage = 1, 
    onPageChange,
    }: PaginationProps) {
    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage); //math.floor = arredondar o numero pra cima, pra nunca ter numero quebrado como resultado
        
    const previousPages = currentPage > 1 
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []
    
    const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [] 

    return (
        <Stack //por padrão o stack é vertical então por isso eu coloco o 'direction'
            direction={["column", "row"]}
            spacing="6"
            mt="8"
            justify="space=between"
            align="center"    
        >
        <Box>
            <strong>0</strong> - <strong>3</strong> de <strong>3</strong>
        </Box>
        <Stack direction="row" spacing="2">

            {currentPage > (1 + siblingsCount) && ( //aqui em diante significa o que deve ser mostrado. no caso é a pag 1.
                <>
                    <PaginationItem onPageChange={onPageChange} number={1} />
                    { currentPage > (2 + siblingsCount) && 
                    <Text color="gray.300" width="8" textAlign="center">...</Text>}
                </>
            ) // aqui é um esquema que varia conforme a pag. q eu estiver, se eu tiver perto do incio vai mostrar mais ou menos paginas a seguir ou antereiores.
            }

            {previousPages.length > 0 && previousPages.map(page => {
                return <PaginationItem onPageChange={onPageChange} key={page} number={page}/>

            })}

            <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
            
            {nextPages.length > 0 && nextPages.map(page => {
                return <PaginationItem onPageChange={onPageChange} key={page} number={page}/>
            })}
            
            {(currentPage + siblingsCount) < lastPage && (//aqui em diante significa o que deve ser mostrado. no caso é a pag 1.
                <>
                    <PaginationItem onPageChange={onPageChange} number={lastPage} // aqui é um esquema que varia conforme a pagina q eu estiver, se eu tiver perto do fim vai mostrar mais ou menos paginas a seguir ou antereiores. 
                    />
                        { (currentPage + 1 + siblingsCount) < lastPage && 
                        <Text color="gray.300" width="8" textAlign="center">...</Text>}
                    </>
            )
            }

            </Stack>
    </Stack>
    );
}
    