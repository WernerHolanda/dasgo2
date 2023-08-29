import { useQuery } from "react-query";
import { api } from "../api";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

type GetUsersResponse = {
    totalCount: number;
    users: User[];
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
    const { data, headers } = await api.get('users', {
        params: {
          page,  
        }
    })

    const totalCount = Number(headers['x-total-count'])

    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                             })
                        };
                    });
         
    return {
    users,
    totalCount,
    };
}                        

export function useUsers (page: number) {
    return useQuery(['users', page], () => getUsers(page), {// o 1º parametro é a chave da informação que fica armazenada na memoria cache, o 2º param. seria o click na novas pagina, p armazenar em cache essas infos  
        staleTime: 1000 * 5, // 5 seconds
    })
}