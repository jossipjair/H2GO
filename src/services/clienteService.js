import db from '../db/connection.js';

const getAllClientes = async () => {
    const [rows] = await db.query('SELECT * FROM cliente');
    return rows;
}

const postCliente = async (cliente) => {
    const [result] = await db.query('INSERT INTO cliente SET ?', cliente);
    return result.insertId;
}


export default {getAllClientes}

    