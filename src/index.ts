import { server  } from './server/Server'; 

server.listen(process.env.PORT || 3333, () => {
  console.log(`App rodando na porta ${process.env.PORT || 3333}`);//aqui passamos como parametro a porta que roda a api e como callback colocamos um console.log
});