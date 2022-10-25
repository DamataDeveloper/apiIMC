import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const conexao = mysql.createConnection({
    host:process.env.HOST,
    port:process.env.PORTA,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});

export default conexao;