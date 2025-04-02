require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importar rutas
const userRoutes = require('./routes/users');
const vacationRoutes = require('./routes/vacaciones');
const approvalRoutes = require('./routes/aprobaciones');

app.use('/users', userRoutes);
app.use('/vacaciones', vacationRoutes);
app.use('/aprobaciones', approvalRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
