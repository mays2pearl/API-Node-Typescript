/* eslint-disable linebreak-style */
import express from 'express'; //aqui importamos tudo que é disponivel no expresse, e fica salvo dentro de express

const server = express(); //criamos instacia basica do servidor
server.get('/', (req, res) => { //construimos a rota de get com uma função que recebe 2 parametros

	return res.send('Hello, world!');//aqui dentro temos o retorno do servidor
    
} );
export { server }; //aqui deixamos para ser exportado