Table usuarios {
  id_usuario int [pk, increment]
  nombre varchar(50) [not null]
  apellido_paterno varchar(100) [not null]
  apellido_materno varchar(100) [not null]
  correo varchar(100) [not null, unique]
  clave varchar(100) [not null]
  id_rol int [ref: > roles.id_rol] // Ejemplo: Administrador, Colaborador
  estado_auditoria char(1) [not null]
  fecha_creacion_auditoria timestamp [not null]
}

Table roles {
  id_rol int [pk, increment]
  nombre varchar(100) [not null]
  estado_auditoria char(1) [not null]
  fecha_creacion_auditoria timestamp [not null]
}

Table equipos {
  id_equipo int [pk, increment]
  nombre_equipo varchar(100) [not null]
  descripcion varchar(500) [not null]
  estado_auditoria char(1) [not null]
  fecha_creacion_auditoria timestamp [not null]
}

Table usuario_equipo {
  id_usuario_equipo int [pk, increment]
  id_usuario int [ref: > usuarios.id_usuario]
  id_equipo int [ref: > equipos.id_equipo]
  estado_auditoria char(1) [not null]
  fecha_creacion_auditoria timestamp [not null]
}

Table tareas {
  id_tarea int [pk, increment]
  nombre varchar(255) [not null]
  descripcion varchar(500) [not null]
  id_tipo_tarea int [ref: > tipo_tareas.id_tipo_tarea]
  fecha_creacion timestamp [not null]
  fecha_limite timestamp [not null]
  fecha_terminacion timestamp
  comentario varchar(500)
  prioridad varchar(50) [not null] // Alta, Media, Baja
  estado varchar(50)  // Pendiente, En progreso, Completada
  id_usuario_creador int [ref: > usuarios.id_usuario, not null] 
  id_equipo int [ref: > equipos.id_equipo] // Opcional
  mensaje_notificacion varchar(255) // Mensaje para notificaciones, opcional
  estado_notificacion varchar(50) // Ejemplo: Enviada, Leída
  fecha_envio_notificacion timestamp
  estado_auditoria char(1) [not null]
  fecha_creacion_auditoria timestamp [not null]
}

Table subtareas {
  id_subtarea int [pk, increment]
  nombre varchar(255) [not null]
  descripcion varchar(500) [not null]
  fecha_creacion timestamp [not null]
  fecha_limite timestamp [not null]
  fecha_terminacion timestamp
  estado varchar(50) // Pendiente, En progreso, Completada
  id_tarea int [ref: > tareas.id_tarea] // Relación con tarea principal
  id_usuario_asignado int [ref: > usuarios.id_usuario, not null] // Usuario asignado a la subtarea
  estado_auditoria char(1) [not null]
  fecha_creacion_auditoria timestamp [not null]
}

Table tipo_tareas {
  id_tipo_tarea int [pk, increment]
  nombre varchar(100) [not null]
  estado_auditoria char(1) [not null]
  fecha_creacion_auditoria timestamp [not null]
}

Table asignaciones {
  id_asignacion int [pk, increment]
  id_tarea int [ref: > tareas.id_tarea, not null]
  id_usuario int [ref: > usuarios.id_usuario, not null]
  estado_auditoria char(1) [not null]
  fecha_creacion_auditoria timestamp [not null]
}