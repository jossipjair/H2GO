import express from 'express'
import clienteRoutes from './routes/clienteRoutes.js'

const app = express();

app.use(express.json());
app.use('/api/clientes', clienteRoutes)

export default app;