CREATE DATABASE gestion_vacaciones;
use gestion_vacaciones;

-- Tabla de roles
create table roles (
	id int auto_increment primary key,
    nombre varchar(50) unique not null
); 

-- Tabla de usuarios con DNI como clave primaria
create table users (
	dni varchar(15) primary key,
    nombre varchar(100) not null,
    apellido_paterno varchar(100) not null,
    apellido_materno varchar(100) not null,
    email varchar(100) unique not null,
    password varchar(255) not null,
    fecha_inicio_trabajo date not null,
    rol_id int not null,
    foreign key (rol_id) references roles(id) on delete cascade
);

-- Tabla de vacaciones con referencias a DNI
create table vacations (
	id int auto_increment primary key,
    user_dni varchar(15) not null,
    fecha_inicio date not null,
    fecha_fin date not null,
    estado enum('pendiente','aprobado','rechazado') default 'pendiente',
    foreign key (user_dni) references users(dni) on delete cascade
);