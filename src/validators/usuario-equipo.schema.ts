import Joi from "joi";

export const insertarUsuarioEquipoSchema = Joi.object({
usuario: Joi.object({
            idUsuario: Joi.number().integer().required()})
            .required(),
equipo: Joi.object({
            idEquipo: Joi.number().integer().required()})
            .required()
});

export const actualizarUsuarioEquipoSchema = Joi.object({
usuario: Joi.object({
            idUsuario: Joi.number().integer().required()})
            .optional(),
equipo: Joi.object({
            idEquipo: Joi.number().integer().required()})
            .optional()
});