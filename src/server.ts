
import express, { type Express, type Request, type Response } from 'express';
import router from './routes/routes.ts';

const app: Express = express();

app.use(router);

app.listen(3000);

