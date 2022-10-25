class TabelaInfra{
    static init(conexao){
        this.conexao = conexao;
        this.criaTabelaUsuario();

    }
    static criaTabelaUsuario(){
        const sql = 'CREATE TABLE IF NOT EXISTS usuario (id INT NOT NULL AUTO_INCREMENT, nome VARCHAR(55) NOT NULL, idade INT NOT NULL, imc FLOAT NOT NULL, data DATE NOT NULL, status INT NOT NULL, PRIMARY KEY (id) )'
        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro + "[Usuarios]");
            }else{
                console.log('Tabela [Usuarios] criada com sucesso');
            }
        })
    }
}

export default TabelaInfra