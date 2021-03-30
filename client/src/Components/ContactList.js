import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../JS/actions/contact";
import ContactCard from "./ContactCard";
const ContactList = () => {
  const contacts = useSelector((state) => state.contactReducer.contactList);
  const loadContacts = useSelector((state) => state.contactReducer.load);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div>
      {loadContacts ? (
        <h2>spinner</h2>
      ) : (
        contacts?.map((el) => <ContactCard contact={el} key={el._id} />)
      )}
    </div>
  );
};

export default ContactList;
