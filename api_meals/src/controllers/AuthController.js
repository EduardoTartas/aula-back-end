// /src/controllers/AuthController.js

import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { CommonResponse, CustomError, HttpStatusCodes, errorHandler, messages, StatusService, asyncWrapper } from '../utils/helpers/index.js';
import { LoginSchema } from '../utils/validators/schemas/zod/LoginSchema.js';
import { UsuarioSchema, UsuarioUpdateSchema } from '../utils/validators/schemas/zod/UsuarioSchema.js';
import { UsuarioIdSchema } from '../utils/validators/schemas/zod/querys/UsuarioQuerySchema.js';
import { RequestAuthorizationSchema } from '../utils/validators/schemas/zod/querys/RequestAuthorizationSchema.js';

import AuthService from '../services/AuthService.js';

/**
   * Validação nesta aplicação segue o segue este artigo:
   * https://docs.google.com/document/d/1m2Ns1rIxpUzG5kRsgkbaQFdm7od0e7HSHfaSrrwegmM/edit?usp=sharing
*/
class AuthController {
  constructor() {
    this.service = new AuthService();
  }
  /**
   * Método para fazer o login do usuário
   */
  login = async (req, res) => {
      // 1º validação estrutural - validar os campos passados por body
      const body = req.body || {};
      const validatedBody = LoginSchema.parse(body);
      const data = await this.service.login(validatedBody);
      return CommonResponse.success(res, data);
  }

  /**
   * Método para fazer o refresh do token 
   */
  revoke = async (req, res) => {
    // Extrai ID do usuario a ter o token revogado do body
    const id = req.body.id;
    // remove o token do banco de dados e retorna uma resposta de sucesso
    const data = await this.service.revoke(id);
    return CommonResponse.success(res);

  }

  /**
   * Método para fazer o refresh do token 
   */
  refresh = async (req, res) => {
    // Extrai do body o token
    const token = req.body.refreshtoken;

    console.log('RF' + token);

    // Verifica se o cabeçalho Authorization está presente
    if (!token || token === 'null' || token === 'undefined') {
      console.log('Cabeçalho Authorization ausente.');
      throw new CustomError({
        statusCode: HttpStatusCodes.BAD_REQUEST.code,
        errorType: 'invalidRefresh',
        field: 'Refresh',
        details: [],
        customMessage: 'Refresh token is missing.'
      });
    }

    // Verifica e decodifica o token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // encaminha o token para o serviço
    const data = await this.service.refresh(decoded.id, token);
    return CommonResponse.success(res, data);
  }


  /**
   *  Metodo para recuperar a senha do usuário
   */
  recuperaSenha = async (req, res) => {
    console.log('Estou no logar em RecuperaSenhaController, enviando req para RecuperaSenhaService');

    // 1º validação estrutural - validar os campos passados por body
    const body = req.body || {};

    // Validar apenas o email
    const validatedBody = UsuarioUpdateSchema.parse(req.body);
    const data = await this.service.recuperaSenha(validatedBody);
    return CommonResponse.success(res, data);
  }

  /**
   * Método para fazer o logout do usuário
   */
  logout = async (req, res) => {
    // Extrai o cabeçalho Authorization
    const auth = req.headers.authorization;

    // Verifica se o cabeçalho Authorization está presente
    if (!auth) {
      console.log('Cabeçalho Authorization ausente.');
      throw new CustomError({
        statusCode: HttpStatusCodes.BAD_REQUEST.code,
        errorType: 'invalidLogout',
        field: 'Logout',
        details: [],
        customMessage: 'Authorization header is missing.'
      });
    }

    // Extrai o token do cabeçalho Authorization
    const token = auth.split(' ')[1];

    // Verifica se o token está presente e não é uma string inválida
    if (!token || token === 'null' || token === 'undefined') {
      console.log('Token recebido:', token);
      throw new CustomError({
        statusCode: HttpStatusCodes.BAD_REQUEST.code,
        errorType: 'invalidLogout',
        field: 'Logout',
        details: [],
        customMessage: HttpStatusCodes.BAD_REQUEST.message
      });
    }

    // Verifica e decodifica o token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Verifica se o token decodificado contém o ID do usuário
    if (!decoded || !decoded.id) {
      console.log('Token decodificado inválido:', decoded);
      throw new CustomError({
        statusCode: HttpStatusCodes.INVALID_TOKEN.code,
        errorType: 'notAuthorized',
        field: 'NotAuthorized',
        details: [],
        customMessage: HttpStatusCodes.INVALID_TOKEN.message
      });
    }

    // Encaminha o token para o serviço de logout
    const data = await this.service.logout(decoded.id, token);

    // Retorna uma resposta de sucesso
    return CommonResponse.success(res, HttpStatusCodes.OK.code, messages.success.logout);
  }

  /**
   * Método para validar o token
   */
  pass = async (req, res) => {
    /** Body esperado para a requisição de autorização
      {
        "accesstoken": "string", // Obrigatório
        "refreshtoken": "string", // Opicional
        "domain": "string", // Obrigatório
        "path": "string", // Obrigatório
        "metodo": "string", // Obrigatório
        "query": "string", // Opcional
        "params": {}, // Opcional
        "body": {} // Opcional
      }
    */

    // Validação estrutural - validar os campos passados por body usando o schema RequestAuthorizationSchema
    const bodyrequest = req.body || {};
    console.log('Body recebido:', bodyrequest);

    const validatedBody = RequestAuthorizationSchema.parse(bodyrequest);

    // const { accesstoken, domain, path, metodo, query, params, body } = validatedBody;

    // Verifica e decodifica o accesstoken
    const decoded = await promisify(jwt.verify)(validatedBody.accesstoken, process.env.JWT_SECRET);

    // Verifica se o accesstoken decodificado contém o ID do usuário ao mesmo tempo que valida o ID
    const validaId = UsuarioIdSchema.parse(decoded.id);

    // Retorna uma resposta de sucesso
    return CommonResponse.success(res, validatedBody, HttpStatusCodes.OK.code, messages.authorized.default);
  }

}

export default AuthController;
