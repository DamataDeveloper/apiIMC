import ImcRepositorio from "../repositorio/ImcRepositorio.js";

class ImcModel{
    static listaTodos(){
        return ImcRepositorio.listaTodos(); 
    }
    static lista(id){
        return ImcRepositorio.lista(id); 
    }
    static cadastra(imc){
        let calcImc = imc;        
        const calculo = calcImc.peso/(calcImc.altura*calcImc.altura)
        calcImc.imc = calculo.toFixed(2)       
        return ImcRepositorio.cadastra(calcImc);
    }
    static deleta(id){
        return ImcRepositorio.deleta(id);

    }
}
export default ImcModel;