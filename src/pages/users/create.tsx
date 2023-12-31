
import { Flex, Box, Divider, Heading, VStack, SimpleGrid, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";

import { Input } from '../../components/form/Input'
import { Header } from "../../components/Header";
import { Sidebar } from "@/components/Sidebar";

import { SubmitHandler, useForm  } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;

};

const createUserFormSchema = yup.object().shape({
    name: yup.string(). required('Nome obrigatorio'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha Obrigatória').min(6, 'Mínimo de 6 caracteres'),
    password_confirmations: yup.string().oneOf([
        //null
        , yup.ref('password')
    ], 'As senhas precisam ser iguais')
})


export default function CreateUser() {
    const { register, handleSubmit, formState, 
        //errors
    } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(values);
    }

    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box 
                    as="form" //essa propriedade faz esse box ser um formulário 'form'
                    borderRadius={8} 
                    bg="gray.800" 
                    p={["6", "8"]}
                    //onSubmit={handleSubmit(handleCreateUser)}
                    >
                    
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input 
                                name="name" 
                                label="Nome completo"
                                //error={errors.name} 
                                //ref={register} 
                            />
                            <Input 
                                name="email" 
                                type="email" 
                                label="E-mail"
                                //error={errors.email}  
                                //ref={register} 
                            />
                            
                         </SimpleGrid>

                         <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input 
                                name="password" 
                                type="password" 
                                label="Senha"
                                //error={errors.password}  
                                //ref={register} 
                            />
                            <Input 
                                name="password_confirmation" 
                                type="password" 
                                label="Confirmação de Senhar" 
                                //error={errors.password_confirmation} 
                                //ref={register} 
                            />
                            
                         </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users/create" passHref>
                                <Button as="a" //as ="a" significa q é reconhecer esse botão como uma ancora
                                 colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>        
                            <Button 
                            type="submit" 
                            colorScheme="pink"
                            isLoading={formState.isSubmitting}
                            >Salvar</Button>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}