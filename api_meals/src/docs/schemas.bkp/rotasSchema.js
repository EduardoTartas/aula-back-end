const rotasSchemas = {
    RotaFiltro: {
        type: "object",
        properties: {
            rota: {
                type: "string",
                description: "Nome da rota"
            },
            decricao: {
                type: "string",
                description: "Descrição da rota"
            },
            ativo: {
                type: "boolean",
                description: "Ativo"
            },
        }
    },
    RotaListagem: {
        type: "object",
        properties: {
            id: { type: "integer", description: "ID da rota" },
            rota: { type: "string", description: "Nome da rota" },
            dominio: { type: "string", description: "Domínio da rota" },
            ativo: { type: "boolean", description: "Rota ativa" },
            buscar: { type: "boolean", description: "Permite GET" },
            enviar: { type: "boolean", description: "Permite POST" },
            substituir: { type: "boolean", description: "Permite PUT" },
            modificar: { type: "boolean", description: "Permite PATCH" },
            excluir: { type: "boolean", description: "Permite DELETE" },
        },
        example: {
            id: 1,
            rota: "/usuarios",
            dominio: "http://localhost:3000",
            ativo: true,
            buscar: true,
            enviar: true,
            substituir: true,
            modificar: true,
            excluir: true,
        }
    },
    RotaDetalhes: {
        type: "object",
        properties: {
            id: { type: "integer", description: "ID da rota" },
            rota: { type: "string", description: "Nome da rota" },
            dominio: { type: "string", description: "Domínio da rota" },
            ativo: { type: "boolean", description: "Rota ativa" },
            buscar: { type: "boolean", description: "Permite GET" },
            enviar: { type: "boolean", description: "Permite POST" },
            substituir: { type: "boolean", description: "Permite PUT" },
            modificar: { type: "boolean", description: "Permite PATCH" },
            excluir: { type: "boolean", description: "Permite DELETE" },
        },
        example: {
            id: 1,
            rota: "/usuarios",
            dominio: "http://localhost:3000",
            ativo: true,
            buscar: true,
            enviar: true,
            substituir: true,
            modificar: true,
            excluir: true,
        }
    },
    RotaPost: {
        type: "object",
        required: ["rotas", "dominio", "ativo", "buscar", "enviar", "substituir", "modificar", "excluir"], // Define quais campos são obrigatórios
        properties: {
            rotas: { type: "string", description: "Nome da rota" },
            dominio: { type: "string", description: "Domínio da rota" },
            ativo: { type: "boolean", description: "Rota ativa" },
            buscar: { type: "boolean", description: "Permite GET" },
            enviar: { type: "boolean", description: "Permite POST" },
            substituir: { type: "boolean", description: "Permite PUT" },
            modificar: { type: "boolean", description: "Permite PATCH" },
            excluir: { type: "boolean", description: "Permite DELETE" },
        },
        example: {
            rota: "/usuarios",
            dominio: "http://localhost:3000",
            ativo: true,
            buscar: true,
            enviar: true,
            substituir: true,
            modificar: true,
            excluir: true,
        }
    },
    RotaPostResposta: {
        type: "object",
        properties: {
            _id: { type: "string", description: "ID da rota" },
            rotas: { type: "string", description: "Nome da rota" },
            dominio: { type: "string", description: "Domínio da rota" },
            ativo: { type: "boolean", description: "Rota ativa" },
            buscar: { type: "boolean", description: "Permite GET" },
            enviar: { type: "boolean", description: "Permite POST" },
            substituir: { type: "boolean", description: "Permite PUT" },
            modificar: { type: "boolean", description: "Permite PATCH" },
            excluir: { type: "boolean", description: "Permite DELETE" },
        },
        example: {
            _id: "5f7c5d3b1c9d440000f3c2a1",
            rota: "/usuarios",
            dominio: "http://localhost:3000",
            ativo: true,
            buscar: true,
            enviar: true,
            substituir: true,
            modificar: true,
            excluir: true,
        }
    },
    RotaPutPatch: {
        type: "object",
        required: ["name", "description"], // Define quais campos são obrigatórios
        properties: {
            rotas: { type: "string", description: "Nome da rota" },
            dominio: { type: "string", description: "Domínio da rota" },
            ativo: { type: "boolean", description: "Rota ativa" },
            buscar: { type: "boolean", description: "Permite GET" },
            enviar: { type: "boolean", description: "Permite POST" },
            substituir: { type: "boolean", description: "Permite PUT" },
            modificar: { type: "boolean", description: "Permite PATCH" },
            excluir: { type: "boolean", description: "Permite DELETE" },
        },
        example: {
            rota: "/usuarios",
            dominio: "http://localhost:3000",
            ativo: true,
            buscar: true,
            enviar: true,
            substituir: true,
            modificar: true,
            excluir: true,
        }
    },
};

export default rotasSchemas;
