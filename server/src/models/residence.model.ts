import { Schema, model } from 'mongoose';
import { AvailableCountries, AvailableStates, Countries, States } from '../constants';

const residenceSchema = new Schema({
  country: {
    type: String,
    enum: AvailableCountries,
    default: Countries.INDIA,
  },
  state: {
    type: String,
    enum: AvailableStates,
    default: States.RCB,
  },
  city: {
    type: String,
    required: true,
  },
  street1: {
    type: String,
    required: true,
  },
  street2: String,
  zipcode: String,

}, {timestamps: true})

export const Residece = model('Residece', residenceSchema);