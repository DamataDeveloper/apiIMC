import UsuarioRepositorio from "../repositorio/UsuarioRepositorio.js";
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()
export const auth = {
    email: async (req, res, next)=>{
        const {email} = req.body;
        const emailExiste = await UsuarioRepositorio.verificaEmail(email);
        if(emailExiste.length > 0){
            res.status(400).json({acesso: "Usuario Existente"})
        }else{
            next();
        }        
    },
    private: async (req, res, next)=>{
        let success = false;
        if(req.headers.authorization){
            const [authType, token] = req.headers.authorization.split(' ');
            if(authType === 'Bearer'){
                try {
                    JWT.verify(
                        token,
                        process.env.JWT_SECRET_KEY,
                        (err, user) =>{
                            if(err){ 
                                return res.status(403).json({res: err})
                            }; 
                            req.user = user                            
                            next();

                        }  
                    );
                    success = true;
                } catch (error) {
                    console.log('algo deu errado: ' + error);
                    
                }
            }
        }else{
            res.status(403).json({acesso: "nao autorizado"});
        }
        // if(success){
        //     next();
        // }else{
        //     res.status(403).json({acesso: "nao autorizado"});
        // }

    } 
}
