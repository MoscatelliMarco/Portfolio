import Joi from 'joi';

export const messageSchema = Joi.object({
    name: Joi.string().min(3).max(30).required()
        .messages({
            "string.min": "Name must be at least {#limit} characters long",
            "string.max": "Name must be at most {#limit} characters long",
            "string.empty": "Name is required",
            "any.required": "Name is required",
        }),
    email: Joi.string().min(5).max(80).email({ tlds: { allow: false } }).required()
        .messages({
            "string.min": "Email must be at least {#limit} characters long",
            "string.max": "Email must be at most {#limit} characters long",
            "string.email": "Invalid email format",
            "string.empty": "Email is required",
            "any.required": "Email is required"
        }),
    message: Joi.string().min(20).max(500).required()
        .messages({
            "string.min": "Message must be at least {#limit} characters long",
            "string.max": "Message must be at most {#limit} characters long",
            "string.empty": "Message is required",
            "any.required": "Message is required",
        }),
});