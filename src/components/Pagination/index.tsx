import { PaginationItem } from "./PaginationItems";
import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination() {
    return (
    <Stack //por padrão o stack é vertical então por isso eu coloco o 'direction'
    direction="row"
    spacing="6"
    mt="8"
    justify="space=between"
    align="center"
    
    >
        <Box>
            <strong>0</strong> - <strong>3</strong> de <strong>3</strong>
        </Box>
        <Stack direction="row" spacing="2">
            <PaginationItem number={1} isCurrent />
            <PaginationItem number={2} isCurrent />
            <PaginationItem number={3} isCurrent />
            <PaginationItem number={4} isCurrent />
            </Stack>
    </Stack>
    );
}
    