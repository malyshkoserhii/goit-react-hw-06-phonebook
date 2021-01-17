import { v4 as uuidv4 } from 'uuid';
import * as types from './types';

export const addContact = (name, number) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: types.DELETE_CONTACT,
  payload: contactId,
});
