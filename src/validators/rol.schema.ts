import Joi from "joi";

export const insertarRolSchema = Joi.object({
    nombre: Joi.string()
                .min(3)
                .max(50)
                .required(),
});

export const actualizarRolSchema = Joi.object({
    nombre: Joi.string()
                .min(3)
                .max(50)
                .optional(),
});