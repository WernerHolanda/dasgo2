import { Flex, Avatar, Box, Text} from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return(
        <Flex align="center">{showProfileData && ( //significa q se o profileData estiver como true, então eu vou mostrar todo o conteudo do box.
            <Box mr="4" textAlign="right">
            <Text>Werner Holanda</Text>
            <Text color="gray.300" fontSize="small">
                werner.holanda.dev@gmail.com
            </Text>
        </Box>
        )}

            <Avatar size="md" name="Werner Holanda" src="https://github.com/WernerHolanda.png" />
            

            </Flex>
    );
}