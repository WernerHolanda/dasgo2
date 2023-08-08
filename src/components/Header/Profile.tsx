import { Flex, Avatar, Box, Text} from "@chakra-ui/react";


export function Profile() {
    return(
        <Flex >
                <Box mr="4" textAlign="right">
                    <Text>Werner Holanda</Text>
                    <Text color="gray.300" fontSize="small">
                        werner.holanda.dev@gmail.com
                    </Text>
                </Box>

                <Avatar size="md" name="Werner Holanda" src="https://github.com/WernerHolanda.png" />
            

            </Flex>
    );
}