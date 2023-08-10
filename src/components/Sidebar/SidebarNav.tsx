import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav (){
    return(
        <Stack spacing="12" align="flex-start">
                <NavSection title="GERAL" //o nome "Dashboard" e "Usuários" abaixo são os childrens 
                >
                    <NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
                    <NavLink href="/users" icon={RiContactsLine}>Usuários</NavLink>
                </NavSection>    
                
                <NavSection title="AUTOMAÇÃO">    
                    <NavLink href="/forms" icon={RiInputMethodLine}>Formulários</NavLink>
                    <NavLink href="/automation" icon={RiGitMergeLine}>Automação</NavLink>   
                </NavSection>
            </Stack>
    );
}