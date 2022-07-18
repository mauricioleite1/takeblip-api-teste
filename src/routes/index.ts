import { Router } from 'express';
import repositoriesRouter from './repositories.router';

const router = Router();

router.use('/', repositoriesRouter);

export default router;