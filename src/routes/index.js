const routers = (app)=>{
    
    app.get('/', (req,res)=>{
        res.status(200).send({resposta:"pagina principal"});
    });
}
export default routers;