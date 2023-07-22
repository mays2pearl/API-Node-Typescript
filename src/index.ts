import { server  } from './server/Server'; 

server.listen(3333, () => console.log('App rodando!!!!!'));//aqui passamos como parametro a porta que roda a api e como callback colocamos um console.log