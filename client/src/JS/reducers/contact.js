import {
  GET_CONTACTS,
  LOAD_CONTACTS,
  FAIL_CONTACTS,
  GET_CONTACT,
} from "../actionTypes/contact";

const initialState = {
  contactList: [],
  errors: null,
  load: false,
  contact: {},
};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACTS:
      return { ...state, load: true };
    case GET_CONTACTS:
      return { ...state, load: false, contactList: payload.listContacts };
    case FAIL_CONTACTS:
      return { ...state, load: false, errors: payload };
    case GET_CONTACT:
      return { ...state, contact: payload.contact };
    default:
      return state;
  }
};

export default contactReducer;
