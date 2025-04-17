const gruposSchemas = {
    GrupoFiltro: {
        type: "object",
        properties: {
            nome: {
                type: "string",
                description: "Nome do grupo"
            },
            decricao: {
                type: "string",
                description: "Descrição do grupo"
            },
            ativo: {
                type: "boolean",
                description: "Ativo"
            },
            unidades: {
                type: "string",
                description: "Nome da Unidade"
            }
        }
    },
    GrupoListagem: {
        type: "object",
        properties: {
            id: { type: "integer", description: "ID do grupo" },
            nome: { type: "string", description: "Nome do grupo" },
            descricao: { type: "string", description: "Descrição do grupo" },

        },
        example: {
            id: 1,
            nome: "Desenvolvedores",
            descricao: "Grupo de desenvolvimento",
        }
    },
    GrupoDetalhes: {
        type: "object",
        properties: {
            id: { type: "integer", description: "ID do grupo" },
            nome: { type: "string", description: "Nome do grupo" },
            descricao: { type: "string", description: "Descrição do grupo" },
        },
        example: {
            id: 1,
            nome: "Desenvolvedores",
            descricao: "Grupo de desenvolvimento",
        }
    },
    GrupoPost: {
        type: "object",
        required: ["nome", "description"], // Define quais campos são obrigatórios
        properties: {
            nome: { type: "string", description: "Nome do grupo" },
            descricao: { type: "string", description: "Descrição do grupo" },
        },
        example: {
            nome: "Desenvolvedores",
            descricao: "Grupo de desenvolvimento",
        }
    },
    GrupoPostResposta: {
        type: "object",
        properties: {
            nome: { type: "string", description: "Nome do grupo" },
            descricao: { type: "string", description: "Descrição do grupo" },
        },
        example: {
            id: 1,
            nome: "Desenvolvedores",
            descricao: "Grupo de desenvolvimento",
        }
    },
    GrupoPutPatch: {
        type: "object",
        properties: {
            nome: { type: "string", description: "Nome do grupo" },
            descricao: { type: "string", description: "Descrição do grupo" },
        },
        example: {
            nome: "Desenvolvedores",
            descricao: "Grupo de desenvolvimento",
        }
    },
};

export default gruposSchemas;
