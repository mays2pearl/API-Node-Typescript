import express from 'express'; //aqui importamos tudo que é disponivel no express, e fica salvo dentro de express
import 'dotenv/config';
import { router } from './routes';

const server = express(); //criamos instacia basica do servidor

server.use(express.json()); //isso ajuda nosso server a trabalhar com o body/json
server.use(router); //aqui o servidor faz uso da rota

export { server }; //aqui deixamos para ser exportado