import express from "express";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import authPermission from '../middlewares/AuthPermission.js';
import UnidadeController from '../controllers/UnidadeController.js';
import { asyncWrapper } from '../utils/helpers/index.js';

const router = express.Router();

const unidadeController = new UnidadeController(); // Instância da classe

router
  .get("/unidades", AuthMiddleware, authPermission, asyncWrapper(unidadeController.listar.bind(unidadeController)))
  .get("/unidades/:id", AuthMiddleware, authPermission, asyncWrapper(unidadeController.listar.bind(unidadeController)))
  .post("/unidades", AuthMiddleware, authPermission, asyncWrapper(unidadeController.criar.bind(unidadeController)))
  .patch("/unidades/:id", AuthMiddleware, authPermission, asyncWrapper(unidadeController.atualizar.bind(unidadeController)))
  .put("/unidades/:id", AuthMiddleware, authPermission, asyncWrapper(unidadeController.atualizar.bind(unidadeController)))
  .delete("/unidades/:id", AuthMiddleware, authPermission, asyncWrapper(unidadeController.deletar.bind(unidadeController)))

export default router;
