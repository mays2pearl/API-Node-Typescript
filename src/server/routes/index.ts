import { Router } from 'express';
import { StatusCodes} from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => { //construimos a rota de get com uma função que recebe 2 parametros

  return res.send('Hello, world!');//aqui dentro temos o retorno do servidor
      
  } );

  router.post('/teste', (req, res) => { //construimos a rota de get com uma função que recebe 2 parametros

    console.log(req.body);
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);//aqui dentro temos o retorno do servidor, que envia um status code
        
    } );

export { router}; 