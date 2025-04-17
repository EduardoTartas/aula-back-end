import messages from "../../utils/helpers/HttpStatusCodes.js";

const swaggerCommonResponses = {
    200: (schemaRef = null, description = messages.OK.message) => ({
        description: description,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        data: schemaRef ? { $ref: schemaRef } : { type: "array", items: {}, example: [] },
                        error: { type: "boolean", example: false },
                        code: { type: "integer", example: messages.OK.code },
                        message: { type: "string", example: messages.OK.message },
                        errors: { type: "array", example: [] }
                    }
                }
            }
        }
    }),

    201: (schemaRef = null, description = messages.CREATED.message) => ({
        description: description,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        data: schemaRef ? { $ref: schemaRef } : { type: "array", items: {}, example: [] },
                        error: { type: "boolean", example: false },
                        code: { type: "integer", example: messages.CREATED.code },
                        message: { type: "string", example: messages.CREATED.message },
                        errors: { type: "array", example: [] }
                    }
                }
            }
        }
    }),
    400: (schemaRef = null, description = messages.BAD_REQUEST.message) => ({
        description: description,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        data: schemaRef ? { $ref: schemaRef } : { type: "array", items: {}, example: [] },
                        error: { type: "boolean", example: true },
                        code: { type: "integer", example: messages.BAD_REQUEST.code },
                        message: { type: "string", example: messages.BAD_REQUEST.message },
                        errors: {
                            type: "array", example: [{ message: messages.BAD_REQUEST.message }],
                        }
                    }
                }
            }
        }
    }),

    401: (schemaRef = null, description = messages.UNAUTHORIZED.message) => ({
        description: description,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        data: schemaRef ? { $ref: schemaRef } : { type: "array", items: {}, example: [] },
                        error: { type: "boolean", example: true },
                        code: { type: "integer", example: messages.UNAUTHORIZED.code },
                        message: { type: "string", example: messages.UNAUTHORIZED.message },
                        errors: { type: "array", example: [{ message: messages.UNAUTHORIZED.message }] }
                    }
                }
            }
        }
    }),

    404: (schemaRef = null, description = messages.NOT_FOUND.message) => ({
        description: description,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        data: schemaRef ? { $ref: schemaRef } : { type: "array", items: {}, example: [] },
                        error: { type: "boolean", example: true },
                        code: { type: "integer", example: messages.NOT_FOUND.code },
                        message: { type: "string", example: messages.NOT_FOUND.message },
                        errors: { type: "array", example: [{ message: messages.NOT_FOUND.message }] }
                    }
                }
            }
        }
    }),

    422: (schemaRef = null, description = messages.UNPROCESSABLE_ENTITY.message) => ({
        description: description,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        data: schemaRef ? { $ref: schemaRef } : { type: "array", items: {}, example: [] },
                        error: { type: "boolean", example: true },
                        code: { type: "integer", example: messages.UNPROCESSABLE_ENTITY.code },
                        message: { type: "string", example: messages.UNPROCESSABLE_ENTITY.message },
                        errors: { type: "array", example: [{ message: messages.UNPROCESSABLE_ENTITY.message }] }
                    }
                }
            }
        }
    }),

    498: (schemaRef = null, description = messages.INVALID_TOKEN.message) => ({
        description: description,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        data: schemaRef ? { $ref: schemaRef } : { type: "array", items: {}, example: [] },
                        error: { type: "boolean", example: true },
                        code: { type: "integer", example: messages.INVALID_TOKEN.code },
                        message: { type: "string", example: messages.INVALID_TOKEN.message },
                        errors: { type: "array", example: [{ message: messages.INVALID_TOKEN.message }] }
                    }
                }
            }
        }
    }),

    500: (schemaRef = null, description = messages.INTERNAL_SERVER_ERROR.message) => ({
        description: description,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        data: schemaRef ? { $ref: schemaRef } : { type: "array", items: {}, example: [] },
                        error: { type: "boolean", example: true },
                        code: { type: "integer", example: messages.INTERNAL_SERVER_ERROR.code },
                        message: { type: "string", example: messages.INTERNAL_SERVER_ERROR.message },
                        errors: { type: "array", example: [{ message: messages.INTERNAL_SERVER_ERROR.message }] }
                    }
                }
            }
        }
    })
};

export default swaggerCommonResponses;
