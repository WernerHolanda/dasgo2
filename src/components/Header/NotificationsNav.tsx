import { HStack, Icon } from "@chakra-ui/react";
import { RiSearchLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav () {
    return (
        <HStack
        spacing={["6", "8"]} // o 6 é o tamanho que ficaŕa pa usuários mobile, enquanto o normal é 8
        mx={["6", "8"]}
        pr={["6", "8"]} //poadding right
        py="1" //padding vertical
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
        //border="2px"
        //align="right"
    >
        <Icon as={RiSearchLine} //isso é uma instrução do chakra lib
            fontSize="20"
        /> 

        <Icon as={RiUserAddLine} //isso é uma instrução do chakra lib
            fontSize="20"
        /> 
    </HStack>

    );
}