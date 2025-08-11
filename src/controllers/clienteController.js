import clienteService  from '../services/clienteService.js';


const getClientes = async (req, res) => {
    try{
        const clientes = await clienteService.getAllClientes();
        res.json(clientes);
    }catch( err){
        res.status(500).json({error: 'Error al obtener clientes - ' + err})
    }
};

export default {getClientes};