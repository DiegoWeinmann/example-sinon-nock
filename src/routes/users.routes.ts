import { Router } from 'express';
import { getUsers } from '../controllers';

const usersRouter = Router();

usersRouter.get('/users', getUsers);

export { usersRouter };
