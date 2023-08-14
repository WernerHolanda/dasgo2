import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";



interface ActiveLinkProps extends LinkProps {
    children: ReactElement; //ele precisa ser um elemento/componente react de fato. caso eu quisesse q em componente pudesse receber alem de componente mas tbm um texto ou um numero ai seria reactNode, mas como eu só quero receber componente ai é ReactElement.
    shouldMatchExactHref?: boolean;
}

export function ActiveLink({children, shouldMatchExactHref = false, ...rest}: ActiveLinkProps){
    const { asPath } = useRouter()
    
    let isActive = false;
    
    if (shouldMatchExactHref && (asPath == rest.href || asPath ==rest.as)){
        isActive = true;
    }
 
    if (!shouldMatchExactHref && 
        (asPath.startsWith(String(rest.href)) || 
        asPath.startsWith(String(rest.as)))){
        isActive = true;
        }
    return(
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}