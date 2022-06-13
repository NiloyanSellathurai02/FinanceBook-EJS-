const Joi = require("joi");

const transactionSchema = Joi.object({
  companyName: Joi.string()
    .pattern(/^[a-zA-Z0-9\s_-]+$/, { name: "string" })
    .max(200)
    .required(),
  transactionAmount: Joi.number().required(),
  transactionDate: Joi.date().required(),
  transactionNumber: Joi.string()
    .pattern(/^[a-zA-Z0-9\s_-]+$/, { name: "string" })
    .required(),
  transactionType: Joi.string().valid("Income", "Purchase").required(),
});

module.exports = { transactionSchema };
