import Joi from "joi";

export const insertarTipoTareaSchema = Joi.object({
    nombre: Joi.string()
                .min(5)
                .max(100)
                .required(),
});

export const actualizarTipoTareaSchema = Joi.object({
    nombre: Joi.string()
                .min(5)
                .max(100)
                .optional(),
});