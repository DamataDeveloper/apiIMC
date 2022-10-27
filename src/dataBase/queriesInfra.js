import conexao from './conexaoInfra.js';

const executaQuery = (sql, parametros = '')=>{
    return new Promise(
        (resolve, reject)=>{
            conexao.query(sql, parametros, (erros, resultados, campos)=>{
                if(erros){
                    reject(erros);
                }else{
                    resolve(resultados);
                }
            });
        }
    );
};

export default executaQuery;