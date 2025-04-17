const unidadesSchemas = {
    UnidadeFiltro: {
        type: "object",
        properties: {
            nome: {
                type: "string",
                description: "Nome da unidade"
            },
            localidade: {
                type: "string",
                description: "Localidade da unidade"
            },
            ativo: {
                type: "boolean",
                description: "Ativo"
            }
        }
    },
    UnidadeListagem: {
        type: "object",
        properties: {
            _id: { type: "integer", description: "_id do unidade" },
            nome: { type: "string", description: "Nome do unidade" },
            localidade: { type: "string", description: "Localidade do unidade" },
            ativo: {
                type: "boolean", description: "Estado do unidade"
            },
        },
        example: [{
            _id: "674fa21d79969d2172e7876e",
            nome: "Matrix",
            localidade: "Vilhena",
            ativo: true
        },
        {
            _id: "674fa21d79969d2172e7876e",
            nome: "Matrix",
            localidade: "Vilhena",
            ativo: true
        }]
    },
    UnidadeDetalhes: {
        type: "object",
        properties: {
            _id: { type: "integer", description: "_id do unidade" },
            nome: { type: "string", description: "Nome do unidade" },
            localidade: { type: "string", description: "Localidade do unidade" },
            ativo: {
                type: "boolean", description: "Estado do unidade"
            },
        },
        example: {
            _id: "674fa21d79969d2172e7876e",
            nome: "Matrix",
            localidade: "Vilhena",
            ativo: true
        }
    },
    UnidadePost: {
        type: "object",
        required: ["nome", "localidade"], // Define quais campos são obrigatórios
        properties: {
            nome: { type: "string", description: "Nome do unidade" },
            localidade: { type: "string", description: "Localidade do unidade" },
            ativo: {
                type: "boolean", description: "Estado do unidade"
            },
        },
        example: {
            nome: "Matrix",
            localidade: "Vilhena",
            ativo: true
        }
    },
    UnidadePostResposta: {
        type: "object",
        properties: {
            nome: { type: "string", description: "Nome do unidade" },
            localidade: { type: "string", description: "Localidade do unidade" },
            ativo: {
                type: "boolean", description: "Estado do unidade"
            },
        },
        example: {
            _id: "674fa21d79969d2172e7876e",
            nome: "Matrix",
            localidade: "Vilhena",
            ativo: true
        }
    },
    UnidadePutPatch: {
        type: "object",
        properties: {
            nome: { type: "string", description: "Nome do unidade" },
            localidade: { type: "string", description: "Localidade do unidade" },
            ativo: {
                type: "boolean", description: "Estado do unidade"
            },
        },
        example: {
            nome: "Matrix",
            localidade: "Vilhena",
            ativo: true
        }
    },
};

export default unidadesSchemas;
