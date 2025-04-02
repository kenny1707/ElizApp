const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Obtener todas las aprobaciones
router.get('/', (req, res) => {
    db.query('SELECT * FROM aprobaciones', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Obtener una aprobación por ID
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM aprobaciones WHERE id = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results[0]);
    });
});

// Aprobar o rechazar una solicitud
router.post('/', (req, res) => {
    const { solicitud_id, aprobado_por, decision, comentarios } = req.body;

    // Insertar en la tabla de aprobaciones
    db.query(
        'INSERT INTO aprobaciones SET ?',
        { solicitud_id, aprobado_por, decision, comentarios },
        (err, results) => {
            if (err) return res.status(500).json(err);

            // Actualizar el estado de la solicitud en solicitudes_vacaciones
            db.query(
                'UPDATE solicitudes_vacaciones SET estado=? WHERE id=?',
                [decision.toLowerCase(), solicitud_id],
                (err) => {
                    if (err) return res.status(500).json(err);
                    res.json({ message: 'Solicitud procesada con éxito', id: results.insertId });
                }
            );
        }
    );
});

// Eliminar una aprobación
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM aprobaciones WHERE id = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Aprobación eliminada con éxito' });
    });
});

module.exports = router;
