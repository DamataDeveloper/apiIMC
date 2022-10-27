import query from '../dataBase/queriesInfra.js';

class UsuarioRepositorio{
    static cadastra(usuario){
        const sql = `INSERT INTO usuarios SET ?`;
        return query(sql, usuario);
    }
    static lista(){        
        const sql = `SELECT * FROM usuarios`;
        return query(sql);
    }
    static verificaEmail(email){
        const sql = `SELECT * FROM usuarios WHERE email=?`;
        return query(sql, email);
    }   
}

export default UsuarioRepositorio;