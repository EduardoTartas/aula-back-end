import express from "express";
import AuthController from '../controllers/AuthController.js';
import authPermission from '../middlewares/AuthPermission.js';
import { asyncWrapper } from '../utils/helpers/index.js';

const router = express.Router();

const authController = new AuthController();

router  
  .post("/login", asyncWrapper(authController.login.bind(authController)))
  .post("/recuperasenha", asyncWrapper(authController.recuperaSenha.bind(authController)))
  .post("/logout", asyncWrapper(authController.logout.bind(authController)))
  .post("/token/revoke", asyncWrapper(authController.revoke.bind(authController)))
  .post("/token", asyncWrapper(authController.refresh.bind(authController)))
  .post("/pass", asyncWrapper(authController.pass.bind(authController)))

export default router;
