const authSchemas = {

    // Request Schemas
    RespostaLogin: {
        type: "object",
        properties: {
            token: {
                type: "string",
                description: "Token JWT para autenticação",
                example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTYzMjIwOTg4NWQ4ZTgzNzhlZTU5MCIsIm5vbWUiOiJKb8OjbyBkYSBTaWx2YSIsImVtYWlsIjoiam9hb0BlbWFpbC5jb20iLCJpYXQiOjE2ODg3NzQwMjMsImV4cCI6MTY4ODc4MTIyM30.iZvQN6NiGQ9GE1W2UpdUTv5YbDHH8ULsOyLtEockkqc"
            },
            usuario: {
                $ref: "#/components/schemas/UsuarioDetalhes"
            }
        }
    },
    RespostaRecuperaSenha: {
        type: "object",
        properties: {
            message: {
                type: "string",
                description: "Mensagem indicando o status da solicitação de recuperação de senha",
                example: "Um email de recuperação de senha foi enviado para seu endereço de email."
            }
        },
    },
    RequisicaoRecuperaSenha: {
        type: "object",
        properties: {
            email: {
                type: "string",
                format: "email",
                description: "Endereço de email do usuário para recuperação de senha",
                example: "usuario@exemplo.com"
            }
        },
        required: ["email"]
    },
    loginPost: {
        type: "object",
        required: ["email", "senha"],
        properties: {
            email: {
                type: "string",
                description: "Email do usuário",
                example: "usuario@example.com",
            },
            senha: {
                type: "string",
                description: "Senha do usuário",
                example: "123456",
            },
        },
    },

};

export default authSchemas;
