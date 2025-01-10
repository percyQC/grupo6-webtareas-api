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
    fechaCreacion: Joi.string()
                    .pattern(new RegExp('^\\d{2}/\\d{2}/\\d{4}$'))
                    .required(),
    fechaLimite: Joi.string()
                .pattern(new RegExp('^\\d{2}/\\d{2}/\\d{4}$'))
                .required(),
    fechaTerminacion: Joi.string()
                .pattern(new RegExp('^\\d{2}/\\d{2}/\\d{4}$'))
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
                .max(50)
                .optional(),
    fechaNotificacion: Joi.string()
                .pattern(new RegExp('^\\d{2}/\\d{2}/\\d{4}$'))
                .optional(),                   

});