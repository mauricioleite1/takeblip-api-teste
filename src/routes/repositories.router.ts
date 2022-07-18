import { Router } from "express";
import repositoriesController from "../controllers/repositories.controller";

const repositoriesRouter = Router();

repositoriesRouter.get('/', repositoriesController.getAll);

export default repositoriesRouter;

