import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

const token = (usuario)=>{
    const geraToken = JWT.sign(
       {
           id:usuario[0].id_usuario,
           nome:usuario[0].nome,
           email:usuario[0].email,
           status:usuario[0].status
       },
       process.env.JWT_SECRET_KEY,
       {
           expiresIn:'1h'
       }
    )
    return geraToken;
};


export default token;