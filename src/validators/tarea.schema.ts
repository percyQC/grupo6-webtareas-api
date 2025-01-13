import Joi from "joi";

export const insertarTareaSchema = Joi.object({
    nombre: Joi.string()
                    .min(3)
                    .max(200)
                    .required(),
    descripcion: Joi.string()
                    .min(3)
                    .max(500)
                    .required(),
    tipotarea: Joi.object({
                    idTipoTarea: Joi.number().integer().required()})                    
                    .required(),
    fechaCreacion: Joi.date()
                    .min('now')
                    .required(),
    fechaLimite: Joi.date()
                    .min('now')                    
                    .required(),
    fechaTerminacion: Joi.date()
                .min('now')
                .optional(),
    comentario: Joi.string()
                .min(3)
                .max(500)
                .optional(),
    prioridad: Joi.string()                
                .valid('Alta','Media','Baja')
                .required(),
    estado: Joi.string()
                .valid('Atrasado','En Progreso','Pendiente','Completado')
                .optional(),
    usuario: Joi.object({
                idUsuario: Joi.number().integer().required()})
                .required(),
    equipo: Joi.object({
                idEquipo: Joi.number().integer().required()})
                .optional(),
    mensajeNotificacion: Joi.string()
                .min(3)
                .max(500)
                .optional(),
    estadoNotificacion: Joi.string()
                .min(3)
                .valid('Enviado','Leido')
                .optional(),
    fechaNotificacion: Joi.date()
                .min('now')
                .optional(),                   

});

export const actualizarTareaSchema = Joi.object({
    nombre: Joi.string()
                    .min(3)
                    .max(200)
                    .optional(),
    descripcion: Joi.string()
                    .min(3)
                    .max(500)
                    .optional(),
    tipotarea: Joi.object({
                    idTipoTarea: Joi.number().integer().required()})                    
                    .optional(),
    fechaCreacion: Joi.date()
                    .min('now')
                    .optional(),
    fechaLimite: Joi.date()
                    .min('now')                    
                    .optional(),
    fechaTerminacion: Joi.date()
                .min('now')
                .optional(),
    comentario: Joi.string()
                .min(3)
                .max(500)
                .optional(),
    prioridad: Joi.string()                
                .valid('Alta','Media','Baja')
                .optional(),
    estado: Joi.string()
                .valid('Atrasado','En Progreso','Pendiente','Completado')
                .optional(),
    usuario: Joi.object({
                idUsuario: Joi.number()
                                .integer()
                                .required()})
                .optional(),
    equipo: Joi.object({
                idEquipo: Joi.number()
                            .integer()
                            .required()})
                .optional(),
    mensajeNotificacion: Joi.string()
                .min(3)
                .max(500)
                .optional(),
    estadoNotificacion: Joi.string()
                .min(3)
                .valid('Enviado','Leido')
                .optional(),
    fechaNotificacion: Joi.date()
                .min('now')
                .optional(),                   

});