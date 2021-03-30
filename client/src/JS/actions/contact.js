import axios from "axios";
import {
  GET_CONTACTS,
  LOAD_CONTACTS,
  FAIL_CONTACTS,
  GET_CONTACT,
} from "../actionTypes/contact";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACTS });
  try {
    let result = await axios.get("/api/contacts/");
    dispatch({
      type: GET_CONTACTS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contacts/${id}`);
    dispatch(getContacts());
  } catch (error) {
    console.log(error);
  }
};

// add new contact
export const addContact = (newContact) => async (dispatch) => {
  try {
    await axios.post("/api/contacts/", newContact);
    dispatch(getContacts());
  } catch (error) {
    console.log(error);
  }
};

// edit a contact
export const editContact = (contactId, newContact) => async (dispatch) => {
  try {
    await axios.put(`/api/contacts/${contactId}`, newContact);
    dispatch(getContacts());
  } catch (error) {
    console.log(error);
  }
};

export const getContact = (id) => async (dispatch) => {
  try {
    let result = await axios.delete(`/api/contacts/${id}`);
    dispatch({ type: GET_CONTACT, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
