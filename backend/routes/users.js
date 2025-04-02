const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Obtener todos los usuarios
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
    const { dni, nombre, apellido_paterno, apellido_materno, email, password, fecha_inicio_trabajo, perfil_id } = req.body;
    db.query(
        'INSERT INTO users SET ?',
        { dni, nombre, apellido_paterno, apellido_materno, email, password, fecha_inicio_trabajo, perfil_id },
        (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Usuario creado con éxito', id: results.insertId });
        }
    );
});

// Actualizar usuario
router.put('/:dni', (req, res) => {
    const { nombre, apellido_paterno, apellido_materno, email, password, fecha_inicio_trabajo, perfil_id } = req.body;
    db.query(
        'UPDATE users SET nombre=?, apellido_paterno=?, apellido_materno=?, email=?, password=?, fecha_inicio_trabajo=?, perfil_id=? WHERE dni=?',
        [nombre, apellido_paterno, apellido_materno, email, password, fecha_inicio_trabajo, perfil_id, req.params.dni],
        (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Usuario actualizado con éxito' });
        }
    );
});

// Eliminar usuario
router.delete('/:dni', (req, res) => {
    db.query('DELETE FROM users WHERE dni = ?', [req.params.dni], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Usuario eliminado con éxito' });
    });
});

module.exports = router;
