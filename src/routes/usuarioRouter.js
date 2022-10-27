import express from 'express';
import UsuarioController from '../controller/UsuarioController.js';
import {auth} from '../middleware/authUsuario.js';

const router = express.Router();

router
    .get('/login', UsuarioController.login)
    .get('/usuarios', auth.private, UsuarioController.lista)
    .post('/cadastro', auth.email, UsuarioController.cadastra)
    
export default router;