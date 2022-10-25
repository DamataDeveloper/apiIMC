import app from './src/app.js';
import dotenv from "dotenv";

import conexao from './src/dataBase/conexaoInfra.js';
import TabelaInfra from './src/dataBase/TabelaInfra.js';

dotenv.config();
const porta = process.env.PORT;

conexao.connect((erro)=>{
    if(erro){
        console.log("CONEXAO BANCO: " + erro);
    }else{
        console.log('Conectado com o banco de dados');
        TabelaInfra.init(conexao);
    }
    app.listen(porta, ()=>console.log(`porta rodando no endereco http://localhost:${porta}`));
});


