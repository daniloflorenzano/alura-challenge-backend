import express from 'express';
import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const route = Router();

app.use(bodyParser.json());

const { PORT } = process.env;

route.get('/teste', (req: Request, res: Response) => {
	res.status(200).send({
		mensagem: 'API Rodando!',
	});
});

app.use(route);

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
