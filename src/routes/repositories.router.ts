import { Router } from "express";
import repositoriesController from "../controllers/repositories.controller";

const repositoriesRouter = Router();

repositoriesRouter.get("/", repositoriesController.getAll);
repositoriesRouter.get("/challenge", repositoriesController.getByLanguage);

export default repositoriesRouter;