class TabelaInfra{
    static init(conexao){
        this.conexao = conexao;
        this.criaTabelaUsuario();
        this.criaTabelaIMC();

    }
    static criaTabelaUsuario(){
        const sql = 'CREATE TABLE IF NOT EXISTS usuarios (id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(55) NOT NULL, idade INT NOT NULL,data DATE NOT NULL, status INT NOT NULL)'
        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro + "[Usuarios]");
            }else{
                console.log('Tabela [Usuarios] criada com sucesso');
            }
        })
    }
    static criaTabelaIMC(){
        const sql = 'CREATE TABLE IF NOT EXISTS imc (id_imc INT NOT NULL AUTO_INCREMENT  PRIMARY KEY, imc FLOAT NOT NULL, altura FLOAT NOT NULL, peso FLOAT NOT NULL, data DATE NOT NULL, fk_Usuarios INT NOT NULL,FOREIGN KEY(fk_Usuarios) REFERENCES usuarios(id_usuario))'
        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro + "[IMC]");
            }else{
                console.log('Tabela [IMC] criada com sucesso');
            }
        })
    }
}

export default TabelaInfra