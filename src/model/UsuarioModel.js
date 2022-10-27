import UsuarioRepositorio from '../repositorio/UsuarioRepositorio.js';

class UsuarioMode{
    static cadastra(usuario){
        return UsuarioRepositorio.cadastra(usuario);
    }
    static lista(){
        return UsuarioRepositorio.lista();
    }    
}

export default UsuarioMode;