import Joi from "joi";

export const insertarSubTareaSchema = Joi.object({
    nombre: Joi.string()
                    .min(3)
                    .max(255)
                    .required(),
    descripcion: Joi.string()
                    .min(3)
                    .max(500)
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
    estado: Joi.string()
                .valid('Atrasado','En Progreso','Pendiente','Completado')
                .optional(),
    tarea: Joi.object({
                idTarea: Joi.number().integer().required()})
                .required(),
    usuario: Joi.object({
                idUsuario: Joi.number().integer().required()})
                .required(), 
});

export const actualizarSubTareaSchema = Joi.object({
    nombre: Joi.string()
                    .min(3)
                    .max(255)
                    .optional(),
    descripcion: Joi.string()
                    .min(3)
                    .max(500)
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
    estado: Joi.string()
                .valid('Atrasado','En Progreso','Pendiente','Completado')
                .optional(),
    tarea: Joi.object({
                idTarea: Joi.number().integer().required()})
                .optional(),
    usuario: Joi.object({
                idUsuario: Joi.number().integer().required()})
                .optional(), 
});