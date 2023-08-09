import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn //toda vez q tiver um type é pq o TS não sabe qual o tipo, logo eu tenho que dizer qual é o tipo exato.

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps) {
    const disclosured = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosured.onClose()
    }, [router.asPath])


    return(
        <SidebarDrawerContext.Provider value={disclosured}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)