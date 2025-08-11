import express from 'express'
import clienteController from '../controllers/clienteController.js'

const router = express.Router();

router.get('/', clienteController.getClientes)


export default router;