import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/form/Input'
import { SubmitHandler, useForm  } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
    email: string;
    password: string; 
};

const signInFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('SEnha Obrigatória'),
})

export default function SignIn() {
           
    
    const { register, 
        handleSubmit, 
        formState,
        formState:{errors} 
        //errors,  
     } = useForm({
        resolver: yupResolver(signInFormSchema)
        //console.log(errors)
    })

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        
        
    };

    return (
        <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        >
            <Flex
            as="form"
            width="100%"
            maxWidth={360}
            bg="gray.800"
            p="8"
            borderRadius={8}
            flexDir="column"
            onSubmit={handleSubmit(handleSignIn)}//significa o que se quer q seja feito quando for dado submit no formulário.
            >
                <Stack spacing="4">
                    
                    <Input 
                    //name="email" 
                    type="email" 
                    label="E-mail"
                    //error={errors.email} 
                    //ref={register}
                    {...register("email", {
                        required: "required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Entered value does not match email format",
                        },
                      })}
                    />

                    

                    <Input 
                     
                    type="password" 
                    label="Password"
                    {...register("password", {
                        required: "required",
                        minLength: {
                          value: 5,
                          message: "min length is 5",
                        },
                      })}
                    //ref={register}
                      />
                </Stack>    
                    

            <Button 
                type="submit" 
                mt="6" 
                colorScheme="pink" 
                size="lg"
                isLoading={formState.isSubmitting}
                >Entrar
            </Button>
            </Flex>
        </Flex>
    )
}

//export const getServerSideProps
 