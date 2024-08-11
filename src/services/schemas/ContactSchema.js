import { model, Schema } from 'mongoose';
const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    isFavourite: {
      type: Boolean,
      required: [true, 'IsFavorite is required'],
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: [true, 'ContactType is required'],
      default: 'personal',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Contact = model('contact', schema);
export default Contact;