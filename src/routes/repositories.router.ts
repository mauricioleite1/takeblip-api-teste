import { Router } from "express";
import repositoriesController from "../controllers/repositories.controller";
import { listAllRepositoriesEndpoint } from "../../challenge/Api";

const repositoriesRouter = Router();

repositoriesRouter.get(
  '/',
  repositoriesController.getAll
);

export default repositoriesRouter;

