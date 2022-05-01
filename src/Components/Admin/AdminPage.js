import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Admin.css";

const AdminPage = () => {
  const history = useHistory();

  // logout and clear the session storage for admin
  const handleLogout = () => {
    sessionStorage.setItem("emailToken", "");
    sessionStorage.setItem("passToken", "");
    history.push("/adminLogin");
  };
  return (
    <section className="adminPage">
      <h2 className="adminPageHeader">Your Dashboard</h2>
      <Link to="/" className="edit__Pages">
        Book List
      </Link>
      <Link to="/addBook" className="edit__Pages">
        Book Add
      </Link>
      <Link to="/" className="edit__Pages">
        Front-Page Edit
      </Link>
      <Link to="/termsConditionEdit" className="edit__Pages">
        Terms and Condition Edit
      </Link>
      <Link to="/" className="edit__Pages">
        Library Top Pic Edit
      </Link>

      <button className="btn btn-success" onClick={() => handleLogout()}>
        Admin Logout
      </button>
    </section>
  );
};
export default AdminPage;
