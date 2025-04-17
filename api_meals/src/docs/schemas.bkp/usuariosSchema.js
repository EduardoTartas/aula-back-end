const usuariosSchemas = {
    UsuarioFiltro: {
        type: "object",
        properties: {
            nome: {
                type: "string",
                description: "Nome do usuário"
            },
            email: {
                type: "string",
                description: "Email do usuário"
            },
            ativo: {
                type: "boolean",
                description: "Status de atividade do usuário"
            },
            grupo: {
                type: "string",
                description: "Nome de um grupo que o usuário faça parte"
            },
            unidade: {
                type: "string",
                description: "Nome de uma unidade que o usuário faça parte"
            },
        }
    },
    UsuarioListagem: {
        type: "object",
        properties: {
            id: { type: "integer", description: "ID do usuário" },
            nome: { type: "string", description: "Nome do usuário" },
            email: { type: "string", description: "Email do usuário" },
            link_foto: { type: "string", description: "Caminho da foto do usuário" },
            ativo: { type: "string", description: "Status de atividade do usuário" },
            unidades: { type: "array", items: { type: "string" }, description: "Unidades do usuário" },
            grupos: { type: "array", items: { type: "string" }, description: "Grupos do usuário" },
            permissoes: { type: "array", items: { type: "object" }, description: "Permissões do usuário" },
        },
        example: {
            "_id": "674fa21d79969d2172e7876e",
            "nome": "Adnilson Macedo Saraiva",
            "email": "adnilson.saraiva4420773879+fake@yahoo.com",
            "ativo": true,
            "link_foto": "https://s3.amazonaws.com/uifaces/faces/twitter/jeremyworboys/128.jpg",
            "permissoes": [
                {
                    "_id": "674fa21c79969d2172e786fa",
                    "rota": "rotas",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fb",
                    "rota": "rotas:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fc",
                    "rota": "grupos",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fd",
                    "rota": "grupos:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fe",
                    "rota": "unidades",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786ff",
                    "rota": "unidades:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e78700",
                    "rota": "usuarios",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e78701",
                    "rota": "usuarios:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                }
            ],
            "grupos": [
                {
                    "_id": "674fa21c79969d2172e78708",
                    "nome": "Operador",
                    "descricao": "Impedit distinctio repellat ab quis laborum incidunt sed.",
                    "ativo": true,
                    "unidades": [
                        {
                            "_id": "674fa21c79969d2172e786f1",
                            "nome": "Matriz",
                            "localidade": "São Paulo - SP",
                            "ativo": true
                        }
                    ],
                    "permissoes": [
                        {
                            "_id": "674fa21c79969d2172e786fa",
                            "rota": "rotas",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fb",
                            "rota": "rotas:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fc",
                            "rota": "grupos",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fd",
                            "rota": "grupos:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fe",
                            "rota": "unidades",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786ff",
                            "rota": "unidades:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e78700",
                            "rota": "usuarios",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e78701",
                            "rota": "usuarios:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        }
                    ]
                }
            ],
            "unidades": [
                {
                    "_id": "674fa21c79969d2172e786ed",
                    "nome": "Filial 2",
                    "localidade": "Mariella do Sul - Mato Grosso",
                    "ativo": false
                }
            ]
        },
    },
    UsuarioDetalhes: {
        type: "object",
        properties: {
            id: { type: "integer", description: "ID do usuário" },
            nnme: { type: "string", description: "Nome do usuário" },
            email: { type: "string", description: "Email do usuário" },
            link_foto: { type: "string", description: "Caminho da foto do usuário" },
            ativo: { type: "string", description: "Status de atividade do usuário" },
            unidades: { type: "array", items: { type: "string" }, description: "Unidades do usuário" },
            grupos: { type: "array", items: { type: "string" }, description: "Grupos do usuário" },
            permissoes: { type: "array", items: { type: "object" }, description: "Permissões do usuário" },
        },
        example: {
            example: {
                "_id": "674fa21d79969d2172e7876e",
                "nome": "Adnilson Macedo Saraiva",
                "email": "adnilson.saraiva4420773879+fake@yahoo.com",
                "ativo": true,
                "link_foto": "https://s3.amazonaws.com/uifaces/faces/twitter/jeremyworboys/128.jpg",
                "permissoes": [
                    {
                        "_id": "674fa21c79969d2172e786fa",
                        "rota": "rotas",
                        "dominio": "localhost",
                        "ativo": true,
                        "buscar": true,
                        "enviar": true,
                        "substituir": true,
                        "modificar": true,
                        "excluir": true
                    },
                    {
                        "_id": "674fa21c79969d2172e786fb",
                        "rota": "rotas:id",
                        "dominio": "localhost",
                        "ativo": true,
                        "buscar": true,
                        "enviar": true,
                        "substituir": true,
                        "modificar": true,
                        "excluir": true
                    },
                    {
                        "_id": "674fa21c79969d2172e786fc",
                        "rota": "grupos",
                        "dominio": "localhost",
                        "ativo": true,
                        "buscar": true,
                        "enviar": true,
                        "substituir": true,
                        "modificar": true,
                        "excluir": true
                    },
                    {
                        "_id": "674fa21c79969d2172e786fd",
                        "rota": "grupos:id",
                        "dominio": "localhost",
                        "ativo": true,
                        "buscar": true,
                        "enviar": true,
                        "substituir": true,
                        "modificar": true,
                        "excluir": true
                    },
                    {
                        "_id": "674fa21c79969d2172e786fe",
                        "rota": "unidades",
                        "dominio": "localhost",
                        "ativo": true,
                        "buscar": true,
                        "enviar": true,
                        "substituir": true,
                        "modificar": true,
                        "excluir": true
                    },
                    {
                        "_id": "674fa21c79969d2172e786ff",
                        "rota": "unidades:id",
                        "dominio": "localhost",
                        "ativo": true,
                        "buscar": true,
                        "enviar": true,
                        "substituir": true,
                        "modificar": true,
                        "excluir": true
                    },
                    {
                        "_id": "674fa21c79969d2172e78700",
                        "rota": "usuarios",
                        "dominio": "localhost",
                        "ativo": true,
                        "buscar": true,
                        "enviar": true,
                        "substituir": true,
                        "modificar": true,
                        "excluir": true
                    },
                    {
                        "_id": "674fa21c79969d2172e78701",
                        "rota": "usuarios:id",
                        "dominio": "localhost",
                        "ativo": true,
                        "buscar": true,
                        "enviar": true,
                        "substituir": true,
                        "modificar": true,
                        "excluir": true
                    }
                ],
                "grupos": [
                    {
                        "_id": "674fa21c79969d2172e78708",
                        "nome": "Operador",
                        "descricao": "Impedit distinctio repellat ab quis laborum incidunt sed.",
                        "ativo": true,
                        "unidades": [
                            {
                                "_id": "674fa21c79969d2172e786f1",
                                "nome": "Matriz",
                                "localidade": "São Paulo - SP",
                                "ativo": true
                            }
                        ],
                        "permissoes": [
                            {
                                "_id": "674fa21c79969d2172e786fa",
                                "rota": "rotas",
                                "dominio": "localhost",
                                "ativo": true,
                                "buscar": true,
                                "enviar": true,
                                "substituir": true,
                                "modificar": true,
                                "excluir": true
                            },
                            {
                                "_id": "674fa21c79969d2172e786fb",
                                "rota": "rotas:id",
                                "dominio": "localhost",
                                "ativo": true,
                                "buscar": true,
                                "enviar": true,
                                "substituir": true,
                                "modificar": true,
                                "excluir": true
                            },
                            {
                                "_id": "674fa21c79969d2172e786fc",
                                "rota": "grupos",
                                "dominio": "localhost",
                                "ativo": true,
                                "buscar": true,
                                "enviar": true,
                                "substituir": true,
                                "modificar": true,
                                "excluir": true
                            },
                            {
                                "_id": "674fa21c79969d2172e786fd",
                                "rota": "grupos:id",
                                "dominio": "localhost",
                                "ativo": true,
                                "buscar": true,
                                "enviar": true,
                                "substituir": true,
                                "modificar": true,
                                "excluir": true
                            },
                            {
                                "_id": "674fa21c79969d2172e786fe",
                                "rota": "unidades",
                                "dominio": "localhost",
                                "ativo": true,
                                "buscar": true,
                                "enviar": true,
                                "substituir": true,
                                "modificar": true,
                                "excluir": true
                            },
                            {
                                "_id": "674fa21c79969d2172e786ff",
                                "rota": "unidades:id",
                                "dominio": "localhost",
                                "ativo": true,
                                "buscar": true,
                                "enviar": true,
                                "substituir": true,
                                "modificar": true,
                                "excluir": true
                            },
                            {
                                "_id": "674fa21c79969d2172e78700",
                                "rota": "usuarios",
                                "dominio": "localhost",
                                "ativo": true,
                                "buscar": true,
                                "enviar": true,
                                "substituir": true,
                                "modificar": true,
                                "excluir": true
                            },
                            {
                                "_id": "674fa21c79969d2172e78701",
                                "rota": "usuarios:id",
                                "dominio": "localhost",
                                "ativo": true,
                                "buscar": true,
                                "enviar": true,
                                "substituir": true,
                                "modificar": true,
                                "excluir": true
                            }
                        ]
                    }
                ],
                "unidades": [
                    {
                        "_id": "674fa21c79969d2172e786ed",
                        "nome": "Filial 2",
                        "localidade": "Mariella do Sul - Mato Grosso",
                        "ativo": false
                    }
                ]
            },
        }
    },
    UsuarioPost: {
        type: "object",
        required: ["nome", "email", "senha"],
        properties: {
            nome: { type: "string", description: "Nome do usuário" },
            email: { type: "string", description: "Email do usuário" },
            senha: { type: "string", description: "Senha do usuário" },
            ativo: { type: "boolean", description: "Status de atividade do usuário" },
            link_foto: { type: "string", description: "Caminho da foto do usuário" },
            permissoes: { type: "array", items: { type: "object" }, description: "Permissões do usuário" },
            grupos: { type: "array", items: { type: "string" }, description: "Grupos do usuário" },
            unidades: { type: "array", items: { type: "string" }, description: "Unidades do usuário" },
        },
        example: {
            "_id": "674fa21d79969d2172e7876e",
            "nome": "Adnilson Macedo Saraiva",
            "email": "adnilson.saraiva4420773879+fake@yahoo.com",
            "ativo": true,
            "link_foto": "https://s3.amazonaws.com/uifaces/faces/twitter/jeremyworboys/128.jpg",
            "permissoes": [
                {
                    "_id": "674fa21c79969d2172e786fa",
                    "rota": "rotas",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fb",
                    "rota": "rotas:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fc",
                    "rota": "grupos",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fd",
                    "rota": "grupos:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fe",
                    "rota": "unidades",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786ff",
                    "rota": "unidades:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e78700",
                    "rota": "usuarios",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e78701",
                    "rota": "usuarios:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                }
            ],
            "grupos": [
                {
                    "_id": "674fa21c79969d2172e78708",
                    "nome": "Operador",
                    "descricao": "Impedit distinctio repellat ab quis laborum incidunt sed.",
                    "ativo": true,
                    "unidades": [
                        {
                            "_id": "674fa21c79969d2172e786f1",
                            "nome": "Matriz",
                            "localidade": "São Paulo - SP",
                            "ativo": true
                        }
                    ],
                    "permissoes": [
                        {
                            "_id": "674fa21c79969d2172e786fa",
                            "rota": "rotas",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fb",
                            "rota": "rotas:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fc",
                            "rota": "grupos",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fd",
                            "rota": "grupos:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fe",
                            "rota": "unidades",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786ff",
                            "rota": "unidades:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e78700",
                            "rota": "usuarios",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e78701",
                            "rota": "usuarios:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        }
                    ]
                }
            ],
            "unidades": [
                {
                    "_id": "674fa21c79969d2172e786ed",
                    "nome": "Filial 2",
                    "localidade": "Mariella do Sul - Mato Grosso",
                    "ativo": false
                }
            ]
        },
    },
    UsuarioPostResposta: {
        type: "object",
        properties: {
            id: { type: "integer", description: "ID do usuário" },
            nome: { type: "string", description: "Nome do usuário" },
            email: { type: "string", description: "Email do usuário" },
            link_foto: { type: "string", description: "Caminho da foto do usuário" },
            ativo: { type: "string", description: "Status de atividade do usuário" },
            unidades: { type: "array", items: { type: "string" }, description: "Unidades do usuário" },
            grupos: { type: "array", items: { type: "string" }, description: "Grupos do usuário" },
            permissoes: { type: "array", items: { type: "object" }, description: "Permissões do usuário" },
        },
        example: {
            "nome": "Adnilson Macedo Saraiva",
            "email": "adnilson.saraiva4420773879+fake@yahoo.com",
            "ativo": true,
            "link_foto": "https://s3.amazonaws.com/uifaces/faces/twitter/jeremyworboys/128.jpg",
            "permissoes": [
                {
                    "_id": "674fa21c79969d2172e786fa",
                    "rota": "rotas",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fb",
                    "rota": "rotas:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fc",
                    "rota": "grupos",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fd",
                    "rota": "grupos:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fe",
                    "rota": "unidades",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786ff",
                    "rota": "unidades:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e78700",
                    "rota": "usuarios",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e78701",
                    "rota": "usuarios:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                }
            ],
            "grupos": [
                {
                    "_id": "674fa21c79969d2172e78708",
                    "nome": "Operador",
                    "descricao": "Impedit distinctio repellat ab quis laborum incidunt sed.",
                    "ativo": true,
                    "unidades": [
                        {
                            "_id": "674fa21c79969d2172e786f1",
                            "nome": "Matriz",
                            "localidade": "São Paulo - SP",
                            "ativo": true
                        }
                    ],
                    "permissoes": [
                        {
                            "_id": "674fa21c79969d2172e786fa",
                            "rota": "rotas",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fb",
                            "rota": "rotas:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fc",
                            "rota": "grupos",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fd",
                            "rota": "grupos:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fe",
                            "rota": "unidades",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786ff",
                            "rota": "unidades:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e78700",
                            "rota": "usuarios",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e78701",
                            "rota": "usuarios:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        }
                    ]
                }
            ],
            "unidades": [
                {
                    "_id": "674fa21c79969d2172e786ed",
                    "nome": "Filial 2",
                    "localidade": "Mariella do Sul - Mato Grosso",
                    "ativo": false
                }
            ]
        },
    },
    UsuarioPutPatch: {
        type: "object",
        properties: {
            nome: { type: "string", description: "Nome do usuário" },
            link_foto: { type: "string", description: "Caminho da foto do usuário" },
            ativo: { type: "string", description: "Status de atividade do usuário" },
            unidades: { type: "array", items: { type: "string" }, description: "Unidades do usuário" },
            grupos: { type: "array", items: { type: "string" }, description: "Grupos do usuário" },
            permissoes: { type: "array", items: { type: "object" }, description: "Permissões do usuário" },
        },
        example: {
            "nome": "Adnilson Macedo Saraiva",
            "ativo": true,
            "link_foto": "https://s3.amazonaws.com/uifaces/faces/twitter/jeremyworboys/128.jpg",
            "permissoes": [
                {
                    "_id": "674fa21c79969d2172e786fa",
                    "rota": "rotas",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fb",
                    "rota": "rotas:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fc",
                    "rota": "grupos",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fd",
                    "rota": "grupos:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786fe",
                    "rota": "unidades",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e786ff",
                    "rota": "unidades:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e78700",
                    "rota": "usuarios",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                },
                {
                    "_id": "674fa21c79969d2172e78701",
                    "rota": "usuarios:id",
                    "dominio": "localhost",
                    "ativo": true,
                    "buscar": true,
                    "enviar": true,
                    "substituir": true,
                    "modificar": true,
                    "excluir": true
                }
            ],
            "grupos": [
                {
                    "_id": "674fa21c79969d2172e78708",
                    "nome": "Operador",
                    "descricao": "Impedit distinctio repellat ab quis laborum incidunt sed.",
                    "ativo": true,
                    "unidades": [
                        {
                            "_id": "674fa21c79969d2172e786f1",
                            "nome": "Matriz",
                            "localidade": "São Paulo - SP",
                            "ativo": true
                        }
                    ],
                    "permissoes": [
                        {
                            "_id": "674fa21c79969d2172e786fa",
                            "rota": "rotas",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fb",
                            "rota": "rotas:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fc",
                            "rota": "grupos",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fd",
                            "rota": "grupos:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786fe",
                            "rota": "unidades",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e786ff",
                            "rota": "unidades:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e78700",
                            "rota": "usuarios",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        },
                        {
                            "_id": "674fa21c79969d2172e78701",
                            "rota": "usuarios:id",
                            "dominio": "localhost",
                            "ativo": true,
                            "buscar": true,
                            "enviar": true,
                            "substituir": true,
                            "modificar": true,
                            "excluir": true
                        }
                    ]
                }
            ],
            "unidades": [
                {
                    "_id": "674fa21c79969d2172e786ed",
                    "nome": "Filial 2",
                    "localidade": "Mariella do Sul - Mato Grosso",
                    "ativo": false
                }
            ]
        },
    }
};

export default usuariosSchemas;
