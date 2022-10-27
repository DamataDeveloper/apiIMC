import query from '../dataBase/queriesInfra.js';
class ImcRepositorio{
    static listaTodos(){
        const sql = `SELECT * FROM imc`;
        return query(sql);       
    }
    static lista(id){
        const sql = `SELECT * FROM imc WHERE fk_Usuarios=?`;
        return query(sql,id);       
    }
    static cadastra(imc){
        const sql = `INSERT INTO imc SET ?`;
        return query(sql, imc);

    }
    static deleta(id){
        const sql = `DELETE FROM imc WHERE id_imc=?`;
        return query(sql,id);
    }    
}
export default ImcRepositorio;