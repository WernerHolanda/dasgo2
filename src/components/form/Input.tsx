import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps //1º qual o tipo dela, e o 2º qual a tipagem
>
     = ({name, label, error=null, ...rest }, ref) => {
    return(
        <FormControl isInvalid={!!error} >
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
                        
                <ChakraInput 
                name={name}
                id={name} 
                focusBorderColor="pink.500"
                bgColor="gray.900" 
                variant="filled"
                _hover={{
                    bg: 'gray.900'
                    }}
                size="lg"
                ref={ref} 
                {...rest}  />

                { !!error && (
                <FormErrorMessage>{error.message}</FormErrorMessage>
                )}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)//significa pegar a ref{register lá index.tsx do raiz do projeto}