import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addContact, editContact } from "../JS/actions/contact";

const Add = ({ history }) => {
  const [contact, setContact] = useState({});
  const edit = useSelector((state) => state.editReducer.edit);
  const contactToEdit = useSelector((state) => state.contactReducer.contact);
  const dispatch = useDispatch();
  useEffect(() => {
    edit
      ? setContact(contactToEdit)
      : setContact({ name: "", email: "", phone: 0 });
  }, [contactToEdit, edit]);
  const handleData = () => {
    edit
      ? dispatch(editContact(contactToEdit._id, contact))
      : dispatch(addContact(contact));
  };
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <label>name</label>
      <input name="name" value={contact.name} onChange={handleChange} />
      <label>email</label>
      <input name="email" value={contact.email} onChange={handleChange} />
      <label>phone</label>
      <input name="phone" value={contact.phone} onChange={handleChange} />
      <button onClick={handleData}>
        <Link to="/">{edit ? "edit" : "add"}</Link>
      </button>
    </div>
  );
};
export default Add;
