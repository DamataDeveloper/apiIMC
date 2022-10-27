import usuarioRouter from './usuarioRouter.js';
import imcRouter from './imcRouter.js';


const routers = (app)=>{
    
    app.get('/', (req,res)=>res.status(200).send({resposta:"pagina principal"}));

    app.use(
        usuarioRouter,
        imcRouter
    );

}
export default routers;