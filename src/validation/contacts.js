/*
import Joi from 'joi';

export const createContactsSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().pattern(/^\+?[0-9]{10,15}$/).messages({'string.pattern.base':'Phone number must be in the format: +1234567890'}).required(),
  email: Joi.string().email().optional(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()

    .valid('work', 'home', 'personal')
    .required(),
});

export const updateContactsSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]{10,15}$/)
    .required(),
  email: Joi.string().email().required(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()

    .valid('work', 'home', 'personal')
    .required(),
}); */


import Joi from 'joi';

// Общая часть для всех схем
const baseContactSchema = {
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().pattern(/^\+?[0-9]{10,15}$/).messages({
    'string.pattern.base': 'Phone number must be in the format: +1234567890',
  }),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
};

// Схема для создания контакта (POST-запрос)
export const createContactsSchema = Joi.object({
  ...baseContactSchema,
  name: baseContactSchema.name.required(),
  phoneNumber: baseContactSchema.phoneNumber.required(),
  contactType: baseContactSchema.contactType.required(),
});

// Схема для обновления контакта (PATCH-запрос)
export const updateContactsSchema = Joi.object({
  ...baseContactSchema,
}).or('name', 'phoneNumber', 'email', 'isFavourite', 'contactType'); 
