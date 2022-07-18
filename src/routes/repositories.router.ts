import { Router } from "express";

const repositoriesRouter = Router();

repositoriesRouter.get('/', (_, res) => {
  res.send("TakeBlip Repositories");
})

export default repositoriesRouter;

