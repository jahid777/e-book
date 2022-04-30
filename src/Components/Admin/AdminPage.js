import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";


const AdminPage = () => {
    return (
    <section className="adminPage">
    <h2 className="adminPageHeader">Your Dashboard</h2>
        <Link to="/" className="edit__Pages">Book List</Link>
        <Link to="/" className="edit__Pages">Book Add</Link>
        <Link to="/" className="edit__Pages">Front-Page Edit</Link>
        <Link to="/" className="edit__Pages">Terms and Condition Edit</Link>
        <Link to="/" className="edit__Pages">Library Top Pic Edit</Link>
    </section>)
}
export default AdminPage;