import { Icon, Link as ChrakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children:string;
    href: string;
}

export function NavLink ( {icon, children, href, ...rest}: NavLinkProps) {
    return (
        <Link href={href} passHref //passHref forca a passar o link lá embaixo do site
        >
            <ChrakraLink display="flex" align="center" {...rest}>
                            <Icon as={icon} fontSize="20" />
                            <Text ml="4" fontWeight="medium">{children}</Text> 
            </ChrakraLink>
    </Link>);
}