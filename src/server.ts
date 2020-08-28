import express, { Request, Response, NextFunction } from 'express';
import { usersRouter } from './routes';
import morgan from 'morgan';

const app = express();
const PORT = 3000;
const url = 'https://jsonplaceholder.typicode.com/users/1';

app.use(express.json());
app.use(morgan('dev'));
app.use('/', usersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
