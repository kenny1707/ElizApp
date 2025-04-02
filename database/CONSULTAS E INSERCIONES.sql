-- Insertar roles
use gestion_vacaciones;

-- Insertar algunos perfiles por defecto
INSERT INTO perfiles (nombre) VALUES 
('Empleado'),
('Administrador');

select * from perfiles;

INSERT INTO users (dni, nombre, apellido_paterno, apellido_materno, email, password, fecha_inicio_trabajo, perfil_id) VALUES 
('12345678', 'Juan', 'Pérez', 'Gómez', 'juan.perez@email.com', 'clave123', '2020-05-10', 2),
('87654321', 'María', 'López', 'Martínez', 'maria.lopez@email.com', 'clave456', '2019-08-15', 1),
('11112222', 'Carlos', 'Ramírez', 'Torres', 'carlos.ramirez@email.com', 'clave789', '2018-03-22', 1);

INSERT INTO solicitudes_vacaciones (user_dni, fecha_inicio, fecha_fin, estado, comentarios) VALUES 
('12345678', '2024-07-10', '2024-07-20', 'pendiente', 'Vacaciones de verano'),
('87654321', '2024-08-01', '2024-08-10', 'aprobado', 'Descanso anual'),
('11112222', '2024-06-15', '2024-06-25', 'rechazado', 'Rechazado por falta de personal');

INSERT INTO aprobaciones (solicitud_id, aprobado_por, decision, comentarios) VALUES 
(1, '11112222', 'Aprobado', 'Todo en orden, aprobado.'),
(3, '11112222', 'Rechazado', 'No hay suficiente personal en esas fechas.');

ALTER TABLE users ADD COLUMN rol ENUM('admin', 'usuario') NOT NULL DEFAULT 'usuario';

SELECT * FROM users;


SELECT sv.id, u.dni, CONCAT(u.nombre, ' ', u.apellido_paterno, ' ', u.apellido_materno) AS empleado, 
       u.email, sv.fecha_inicio, sv.fecha_fin, sv.estado, sv.comentarios, sv.fecha_solicitud
FROM solicitudes_vacaciones sv
JOIN users u ON sv.user_dni = u.dni;

SELECT sv.id, u.dni, CONCAT(u.nombre, ' ', u.apellido_paterno, ' ', u.apellido_materno) AS empleado, 
       sv.fecha_inicio, sv.fecha_fin, sv.estado, sv.comentarios
FROM solicitudes_vacaciones sv
JOIN users u ON sv.user_dni = u.dni
WHERE sv.estado = 'pendiente';

SELECT sv.id, u.dni, CONCAT(u.nombre, ' ', u.apellido_paterno, ' ', u.apellido_materno) AS empleado, 
       sv.fecha_inicio, sv.fecha_fin, sv.estado, a.decision, a.comentarios AS razon_aprobacion, 
       CONCAT(ua.nombre, ' ', ua.apellido_paterno) AS aprobado_por, a.fecha_aprobacion
FROM solicitudes_vacaciones sv
JOIN users u ON sv.user_dni = u.dni
LEFT JOIN aprobaciones a ON sv.id = a.solicitud_id
LEFT JOIN users ua ON a.aprobado_por = ua.dni
WHERE sv.estado IN ('aprobado', 'rechazado');

SELECT a.id, sv.id AS solicitud_id, CONCAT(u.nombre, ' ', u.apellido_paterno) AS empleado, 
       a.decision, a.fecha_aprobacion, a.comentarios AS razon,
       CONCAT(ua.nombre, ' ', ua.apellido_paterno) AS aprobado_por
FROM aprobaciones a
JOIN solicitudes_vacaciones sv ON a.solicitud_id = sv.id
JOIN users u ON sv.user_dni = u.dni
JOIN users ua ON a.aprobado_por = ua.dni;

UPDATE solicitudes_vacaciones 
SET estado = 'aprobado' 
WHERE id = 1;

INSERT INTO aprobaciones (solicitud_id, aprobado_por, decision, comentarios) 
VALUES (1, '11112222', 'Aprobado', 'Se aprobó sin inconvenientes.');

UPDATE solicitudes_vacaciones 
SET estado = 'rechazado' 
WHERE id = 2;

INSERT INTO aprobaciones (solicitud_id, aprobado_por, decision, comentarios) 
VALUES (2, '11112222', 'Rechazado', 'No es posible aprobar por razones operativas.');

