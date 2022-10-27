import UsuarioModel from '../model/UsuarioModel.js';
import UsuarioRepositorio from '../repositorio/UsuarioRepositorio.js';
import geraTokenScript from '../scripts/geraTokeScripts.js';
import bcrypt from "bcrypt";
import dotenv from 'dotenv';


dotenv.config();

class UsuarioController{
    
    static cadastra = async (req, res)=>{
        try {
            
            let usuario = req.body;
            let senha = usuario.senha;
            usuario.status = 2;
            
            //senha tem que ser string
            const hash = bcrypt.hashSync(senha, 10);
            usuario.senha = hash;            

            const cadastro = await UsuarioModel.cadastra(usuario);
            const login =  await UsuarioRepositorio.verificaEmail(usuario.email);

            const token = geraTokenScript(login);
            
            
            res.status(201).json({
                usuario: login,
                resp: "cadastro realizado com sucesso",
                token
            });
            
        } catch (error) {
            return {mensagem: error}
        }
    }
    static login = async (req, res)=>{
        const usuario = req.body;
        console.log(usuario.email)
        console.log(usuario.senha)
        
        try {
            const login = await UsuarioRepositorio.verificaEmail(usuario.email);
            
            console.log(login)

            if(login.length > 0){
                const senha = login[0].senha

               
                const verificaSenha = bcrypt.compareSync(usuario.senha, senha);
                  
                console.log(verificaSenha);

                if(verificaSenha){
                    const token = geraTokenScript(login)
                    
                    res.status(200).json({
                        status: verificaSenha,
                        token
                    });
                }else{
                    res.status(401).json({resp: 'usuario nao autorizado'})
                }
                
            }else{
                res.status(401).json({resp: 'usuario nao autorizado'})
            }       
        } catch (error) {
            res.status(400).json({resp: error})
        }
    }
    static lista = async (req, res)=>{       
        try {             
            let status = req.user.status;            
            if( status === 2){
                const usuarios = await UsuarioModel.lista();            
                res.status(200).json({lista:usuarios});
            }else{
                res.status(403).json({res: "nao permitido"});
            }          
        } catch (error) {
            return {mensagem: error}            
        }        
    }    
}
export default UsuarioController;