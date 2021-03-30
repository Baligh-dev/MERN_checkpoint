import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact, getContact } from "../JS/actions/contact";
import { toggleEdit } from "../JS/actions/edit";
const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(toggleEdit());
    dispatch(getContact(contact._id));
  };
  return (
    <div>
      <h2>{contact.name}</h2>
      <h2>{contact.email}</h2>
      <h2>{contact.phone}</h2>
      <Link to="/edit">
        <button onClick={handleEdit}>EDIT</button>
      </Link>
      <button onClick={() => dispatch(deleteContact(contact._id))}>
        DELETE
      </button>
    </div>
  );
};

export default ContactCard;
