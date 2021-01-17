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

export const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export const getExsistedContact = name => ({
  type: types.GET_EXISTED_CONTACT,
  payload: name,
});
