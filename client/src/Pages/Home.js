import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ContactList from "../Components/ContactList";
import { toggleAdd } from "../JS/actions/edit";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/add">
        {" "}
        <button
          onClick={() => {
            dispatch(toggleAdd());
          }}
        >
          Add Contact
        </button>
      </Link>

      <ContactList />
    </div>
  );
};

export default Home;
