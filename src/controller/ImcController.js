import ImcModel from "../model/ImcModel.js";

class ImcController{
    static lista = async (req, res)=>{
        
        try {
            const status = req.user.status;
            console.log(status)
            if(status === 2){
                console.log("to dentro ---------------------------------------------------")
                const resposta = await ImcModel.listaTodos();
                res.status(200).json({resp: resposta})
            }else{
                const id = req.user.id;
                console.log(id)
                const resposta = await ImcModel.lista(id);
                res.status(200).json({resp: resposta})
            }
            
            
        }catch (error) {
            res.status(400).json({resp:error});
            
        }
    }
    static cadastra = async (req, res)=>{
        console.log("estou no imc cadastra")
        try {
            const id = req.user.id;           
            const imc = req.body;           
            imc.fk_Usuarios = id
            
            // fazer ferificacao de cadastro preenchido
            const resposta = await ImcModel.cadastra(imc);
            res.status(200).json({resp: resposta})
            
        } catch (error) {
            res.status(400).json({resp:error});
            
        }
    }  
    static deleta = async (req, res)=>{        
        try {
            const {id} = req.params;
            console.log(id)
            const resposta = await ImcModel.deleta(id);
            
            if(resposta.affectedRows === 0){
                res.status(200).json({resp:resposta.affectedRows});                
            }else{
                res.status(200).json({resp:id})
            }        
        } catch (error) {
            res.status(400).json({resp:error});
        }
    }
    
}

export default ImcController;