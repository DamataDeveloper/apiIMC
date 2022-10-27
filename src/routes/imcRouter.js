import express from 'express';
import ImcController from '../controller/ImcController.js';
import {auth} from '../middleware/authUsuario.js';
//import {auth} from '../middleware/authUsuario.js';

const router = express.Router();

router
    .get('/imc', auth.private ,ImcController.lista)       
    .post('/imc', auth.private ,ImcController.cadastra)
    .delete('/imc/:id', ImcController.deleta)
    
    
    
export default router;