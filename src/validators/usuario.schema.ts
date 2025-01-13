import Joi from "joi";

export const insertarUsuarioSchema = Joi.object({
    nombre: Joi.string()
                .min(3)
                .max(50)
                .required(),
    ApellidoPaterno: Joi.string()
                .min(3)
                .max(100)
                .required(),
    ApellidoMaterno: Joi.string()
                .min(3)
                .max(100)
                .required(),
    tipoDocumento: Joi.string()
                        .min(1)
                        .max(1)
                        .valid('R','D','C')
                        .required(),
    numeroDocumento: Joi.string()
                        .min(8)
                        .max(15)
                        .pattern(new RegExp('^[0-9]{8,15}$'))
                        .required(),
    correo: Joi.string()
                .email()                
                .min(3)
                .max(200)
                .required(),
    clave: Joi.string()
                .min(6)
                .max(50)
                .required(),
    rol: Joi.object({
                idRol: Joi.number().integer().required()})
                .required(),  

});

export const actualizarUsuarioSchema = Joi.object({
    nombre: Joi.string()
                .min(3)
                .max(50)
                .optional(),
    ApellidoPaterno: Joi.string()
                .min(3)
                .max(100)
                .optional(),
    ApellidoMaterno: Joi.string()
                .min(3)
                .max(100)
                .optional(),
    tipoDocumento: Joi.string()
                        .min(1)
                        .max(1)
                        .valid('R','D','C')
                        .optional(),
    numeroDocumento: Joi.string()
                        .min(8)
                        .max(15)
                        .pattern(new RegExp('^[0-9]{8,15}$'))
                        .optional(),
    correo: Joi.string()
                .email()
                .min(3)
                .max(200)
                .optional(),
    clave: Joi.string()
                .min(6)
                .max(50)
                .optional(),
    rol: Joi.object({
                idRol: Joi.number().integer().required()})
                .optional(),  

});