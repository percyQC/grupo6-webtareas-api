import Joi from "joi";

export const insertarAsignacionSchema = Joi.object({
tarea: Joi.object({
            idTarea: Joi.number().integer().required()})
            .required(),
usuario: Joi.object({
            idUsuario: Joi.number().integer().required()})
            .required(), 
});

export const actualizarAsignacionSchema = Joi.object({
tarea: Joi.object({
            idTarea: Joi.number().integer().required()})
            .optional(),
usuario: Joi.object({
            idUsuario: Joi.number().integer().required()})
            .optional(), 
});