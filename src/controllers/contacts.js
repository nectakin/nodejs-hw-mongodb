
// import createHttpError from 'http-errors';

// import contactService from '../services/contacts.js';
// import ctrlWrapper from '../utils/ctrlWrapper.js';

// const getAllContacts = async (req, res) => {
//   const contacts = await contactService.getAll();

//   res.status(200).json({
//     status: 200,
//     message: 'Successfully found contacts!',
//     data: contacts,
//   });
// };

// const getContact = async (req, res, next) => {
//   const contact = await contactService.getOneById(req.params.id);

//   if (!contact) return next(createHttpError(404, 'Contact not found'));

//   res.status(200).json({
//     status: 200,
//     message: `Successfully found contact with id ${req.params.id}!`,
//     data: contact,
//   });
// };

// const createContact = async (req, res) => {
//   const newContact = await contactService.createContact(req.body);

//   res.status(201).json({
//     status: 201,
//     message: 'Successfully created a contact!',
//     data: newContact,
//   });
// };

// const updateContact = async (req, res, next) => {
//   const newContact = await contactService.updateContact(req.params.id, req.body);

//   if (!newContact) return next(createHttpError(404, 'Contact not found'));

//   res.status(200).json({
//     status: 200,
//     message: 'Successfully patched a contact!',
//     data: newContact,
//   });
// };

// const removeContact = async (req, res, next) => {
//   const removedContact = await contactService.removeContact(req.params.id);
//   if (!removedContact) return next(createHttpError(404, 'Contact not found'));

//   res.status(204).send();
// };

// export default {
//   getAllContacts: ctrlWrapper(getAllContacts),
//   getContact: ctrlWrapper(getContact),
//   createContact: ctrlWrapper(createContact),
//   updateContact: ctrlWrapper(updateContact),
//   removeContact: ctrlWrapper(removeContact),
// };



import createHttpError from 'http-errors';
import {
  createContacts,
  deleteContact,
  getAllContacts,
  getContactByID,
  updateContact,
} from '../services/contacts.js';

// eslint-disable-next-line no-unused-vars
export const getContactsController = async (req, res, next) => {
  const contacts = await getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};
// eslint-disable-next-line no-unused-vars
export const getContactByIDController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactByID(contactId);
  if (!contact) {
    throw createHttpError(404, 'Contact no found');
  }
  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

export const createContactController = async (req, res) => {
  const contact = await createContacts(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
};

export const patchContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);
  if (!result) {
    next(createHttpError(404, 'Contacts not found'));
    return;
  }
  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result.contact,
  });
};
export const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await deleteContact(contactId);
  if (!contact) {
    next(createHttpError(404, 'Contacts not found'));
    return;
  }
  res.status(204).send();
};
