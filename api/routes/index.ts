import { Router } from 'express';
import repositoriesRouter from './repositories.router';

const router = Router();

router.use('/api/', repositoriesRouter);

export default router;