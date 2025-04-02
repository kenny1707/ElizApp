const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Obtener todas las solicitudes de vacaciones
router.get('/', (req, res) => {
    db.query('SELECT * FROM solicitudes_vacaciones', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Obtener una solicitud por ID
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM solicitudes_vacaciones WHERE id = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results[0]);
    });
});

// Crear una nueva solicitud de vacaciones
router.post('/', (req, res) => {
    const { user_dni, fecha_inicio, fecha_fin, comentarios } = req.body;
    db.query(
        'INSERT INTO solicitudes_vacaciones SET ?',
        { user_dni, fecha_inicio, fecha_fin, comentarios },
        (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Solicitud creada con éxito', id: results.insertId });
        }
    );
});

// Actualizar una solicitud
router.put('/:id', (req, res) => {
    const { fecha_inicio, fecha_fin, estado, comentarios } = req.body;
    db.query(
        'UPDATE solicitudes_vacaciones SET fecha_inicio=?, fecha_fin=?, estado=?, comentarios=? WHERE id=?',
        [fecha_inicio, fecha_fin, estado, comentarios, req.params.id],
        (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Solicitud actualizada con éxito' });
        }
    );
});

// Eliminar una solicitud
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM solicitudes_vacaciones WHERE id = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Solicitud eliminada con éxito' });
    });
});

module.exports = router;
