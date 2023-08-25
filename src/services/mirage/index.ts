import { Factory, Model, createServer } from 'miragejs'
import { faker } from '@faker-js/faker';

type User = {
    name: string;
    email: string;
    created_at: string;
}


export function makeServer(){
    const server = createServer ({
        models: {
            users:Model.extend<Partial<User>>({}),
        },

        factories: { //éuma forma de criar cada caracteristicas dos usuários q eu pretendo criar, caso não fosse asism eu teria que copiar e colar programações já feitas. melhor eu msm criar.
            user: Factory.extend({
                name(i: number) { //i= um indice de qjal usuraio esta dendo criado no momento
                    return `User ${i+1}` //i é um numero e ele iria começar com 0, por isso add + 1, pra ele n começar no 0.
                },
                email() {
                    return faker.internet.email().toLowerCase(); //pra gerar um email aleatório - email() é um metódo, e colocar todo email em caixa baixa
                },
                createdAt() {
                    return faker.date.recent(10);// quer q o usuário tenha sido cradido nos ultimos 10 dias
                },
            })
        },

        seeds(server)
            {
             server.createList('user', 200) //significa qtos usuários eu quero criar.'. 200.    
            },

        routes() { // tudo dentro dessa pasta decorre da documentação do mirage
            this.namespace = 'api';
            this.timing = 750; //milisegundos

            this.get('/users');
            this.post('/users'); //ideia aqui é para criar toda a estrutura de criação POST no Bdados do MIRAGE
        
            this.namespace = ''; //aqui siginifica q o namespace retornará para vazio para não conflitar com as rotas do nosso codigo
            this.passthrough()
        }
    })

    return server;
}
// lembrando que o arquivo que inicializa o mirage é o 'app.tsx' dentro de pages.