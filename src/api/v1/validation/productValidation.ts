import Joi, { ObjectSchema } from "joi";

// Product operation schemas organized by request part
export const productSchemas = {
    // POST /products - Create new product
    create: {
        body: Joi.object({
            name: Joi.string().required().min(2).max(80).messages({
                "any.required": "Name is required",
                "string.empty": "Name cannot be empty",
            }),
            sku: Joi.string().required().uppercase().min(4).max(4).messages({
                "any.required": "SKU is required",
                "string.empty": "SKU cannot be empty",
            }),
            quantity: Joi.number().integer().min(0).messages({
                "any.required": "Quantity is required",
                "number.empty": "Quantity cannot be empty"
            }),
            price: Joi.number().required().positive().precision(2).messages({
                "any.required": "Price is required",
                "number.empty": "Price cannot be empty",
            }),
            category: Joi.string().required()
        }),
    },

    // PUT /products/:id - Update product
    update: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Product ID is required",
                "string.empty": "Product ID cannot be empty",
            }),
        }),
        body: Joi.object({
            name: Joi.string().optional().min(2).max(80).messages({
                "string.empty": "Content cannot be empty",
            }),
            quantity: Joi.number().optional()
        }),
    },
};