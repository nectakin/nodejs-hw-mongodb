
import Joi from 'joi';

export const createContactsSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]{10,15}$/)

    .required(),
  email: Joi.string().email(),
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
});
