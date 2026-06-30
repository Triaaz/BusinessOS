const Joi = require("joi");

const registerSchema = Joi.object({
    business: Joi.object({
        name: Joi.string()
            .trim()
            .min(3)
            .max(50)
            .required(),

        businessType: Joi.string()
            .valid(
                "Retail",
                "Restaurant",
                "Pharmacy",
                "Supermarket",
                "Electronics",
                "Wholesale",
                "Manufacturing",
                "Service",
                "Fashion",
                "Healthcare",
                "Education",
                "Other"
            )
            .required(),

        email: Joi.string()
            .trim()
            .lowercase()
            .email()
            .required(),

        phone: Joi.string()
            .trim()
            .required(),

        address: Joi.object({
            country: Joi.string().trim().required(),
            state: Joi.string().trim().required(),
            city: Joi.string().trim().required(),
            street: Joi.string().trim().required(),
            zipCode: Joi.string().trim().required()
        }).required()
    }).required(),

    owner: Joi.object({
        firstName: Joi.string()
            .trim()
            .min(2)
            .max(50)
            .required(),

        middleName: Joi.string()
            .trim()
            .allow("")
            .optional(),

        lastName: Joi.string()
            .trim()
            .min(2)
            .max(50)
            .required(),

        email: Joi.string()
            .trim()
            .lowercase()
            .email()
            .required(),

        phone: Joi.string()
            .trim()
            .required(),

        password: Joi.string()
            .min(8)
            .pattern(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{8,}$/
            )
            .required()
            .messages({
                "string.pattern.base":
                    "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character."
            }),

        confirmPassword: Joi.string()
            .valid(Joi.ref("password"))
            .required()
            .messages({
                "any.only": "Passwords do not match."
            })
    }).required()
});

module.exports = {
    registerSchema
};