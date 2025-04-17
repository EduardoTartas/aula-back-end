import usuariosSchemas from "../schemas/usuariosSchema.js";
import authSchemas from "../schemas/authSchema.js";
import commonResponses from "../schemas/swaggerCommonResponses.js";
import { generateParameters } from "./utils/generateParameters.js"; // ajuste o caminho conforme necessário

const usuariosRoutes = {
    "/usuarios": {
        get: {
            tags: ["Usuários"],
            summary: "Lista todos os usuários",
            description: `
Este endpoint permite listar todos os usuários cadastrados no sistema. 
Utilize filtros (como nome, status, data, grupo e localidade) e paginação para refinar a consulta e evitar sobrecarga na resposta.
\n**Regras de negócio:**
- Validação dos filtros informados.
- Respeito às permissões do usuário autenticado.
- Retorno dos metadados de paginação, como total de páginas e total de registros.
            `,
            security: [{ bearerAuth: [] }],
            parameters: generateParameters(usuariosSchemas.UsuarioFiltro),
            responses: {
                200: commonResponses[200]("#/components/schemas/UsuarioListagem"),
                400: commonResponses[400](),
                401: commonResponses[401](),
                404: commonResponses[404](),
                498: commonResponses[498](),
                500: commonResponses[500]()
            }
        },
        post: {
            tags: ["Usuários"],
            summary: "Cria um novo usuário",
            description: `
Este endpoint cria um novo usuário no sistema.
**Regras de negócio:**
- Validação dos atributos obrigatórios (por exemplo, e-mail, nome e código interno).
- Verificação de exclusividade para campos únicos (como o e-mail).
- Definição do status inicial (ex.: ativo ou pendente) conforme o fluxo de cadastro.
Em caso de duplicidade ou erro na validação, um erro adequado é retornado.
            `,
            security: [{ bearerAuth: [] }],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/UsuarioPost"
                        }
                    }
                }
            },
            responses: {
                201: commonResponses[201]("#/components/schemas/UsuarioDetalhes"),
                400: commonResponses[400](),
                401: commonResponses[401](),
                498: commonResponses[498](),
                500: commonResponses[500]()
            }
        }
    },
    "/usuarios/{id}": {
        get: {
            tags: ["Usuários"],
            summary: "Obtém detalhes de um usuário",
            description: `
Este endpoint retorna os detalhes completos de um usuário específico.
**Regras de negócio:**
- Validação da existência do usuário e do seu status (ativo/inativo).
- Inclusão opcional de dados relacionados, como estatísticas ou vínculos com outros registros.
- Controle de acesso para assegurar que apenas usuários autorizados possam visualizar dados sensíveis.
            `,
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: {
                        type: "integer"
                    }
                }
            ],
            responses: {
                200: commonResponses[200]("#/components/schemas/UsuarioDetalhes"),
                400: commonResponses[400](),
                401: commonResponses[401](),
                404: commonResponses[404](),
                498: commonResponses[498](),
                500: commonResponses[500]()
            }
        },
        patch: {
            tags: ["Usuários"],
            summary: "Atualiza um usuário (PATCH)",
            description: `
Este endpoint atualiza parcialmente os dados de um usuário.
**Regras de negócio:**
- Garantia da unicidade de campos, como o e-mail.
- Ações imediatas em alterações críticas, como a inativação do usuário, limitando seu acesso.
- Validação para impedir alterações que violem regras estabelecidas após a criação.
            `,
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: {
                        type: "integer"
                    }
                }
            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/UsuarioPutPatch"
                        }
                    }
                }
            },
            responses: {
                200: commonResponses[200]("#/components/schemas/UsuarioDetalhes"),
                400: commonResponses[400](),
                401: commonResponses[401](),
                404: commonResponses[404](),
                498: commonResponses[498](),
                500: commonResponses[500]()
            }
        },
        put: {
            tags: ["Usuários"],
            summary: "Atualiza um usuário (PUT)",
            description: `
Este endpoint substitui os dados de um usuário por novos valores.
**Regras de negócio:**
- Manutenção da unicidade dos campos críticos.
- Validação completa do objeto de usuário, garantindo que todas as informações necessárias estejam presentes.
- Aplicação imediata de alterações críticas, como a alteração de status.
            `,
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: { type: "integer" }
                }
            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/UsuarioPutPatch"
                        }
                    }
                }
            },
            responses: {
                200: commonResponses[200]("#/components/schemas/UsuarioDetalhes"),
                400: commonResponses[400](),
                401: commonResponses[401](),
                404: commonResponses[404](),
                498: commonResponses[498](),
                500: commonResponses[500]()
            }
        },
        delete: {
            tags: ["Usuários"],
            summary: "Deleta um usuário",
            description: `
Este endpoint remove ou inativa um usuário do sistema.
**Regras de negócio:**
- Verificação de impedimentos, como regras de compliance ou auditoria, para decidir se o registro deve ser excluído ou apenas inativado.
- Registro de logs ou notificação de sistemas de auditoria para manter o histórico de alterações.
- Garantia de que a exclusão não afete vínculos críticos com outros registros.
            `,
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: {
                        type: "integer"
                    }
                }
            ],
            responses: {
                200: commonResponses[200](),
                400: commonResponses[400](),
                401: commonResponses[401](),
                404: commonResponses[404](),
                498: commonResponses[498](),
                500: commonResponses[500]()
            }
        }
    }
};

export default usuariosRoutes;
