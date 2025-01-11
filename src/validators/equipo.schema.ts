import Joi from "joi";

export const insertarEquipoSchema = Joi.object({
    nombre: Joi.string()
                    .min(3)
                    .max(200)
                    .required(),
    descripcion: Joi.string()
                    .min(3)
                    .max(500)
                    .required(),

})

export const actualizarEquipoSchema = Joi.object({
    nombre: Joi.string()
                    .min(3)
                    .max(200)
                    .optional(),
    descripcion: Joi.string()
                    .min(3)
                    .max(500)
                    .optional(),

})