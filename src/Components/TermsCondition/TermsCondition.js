import React from "react";
import { useHistory } from "react-router-dom";

const TermsCondition = () => {
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.setItem("token", "");
    history.push("/");
  };

  //redirect add book page
  const handleAgreBtn = () => {
    setTimeout(() => {
      history.push("/addBook");
    }, 150);
  };

  return (
    <div>
      <h1 className="text-center mt-5">WELCOME TO OUR BOOK LIST</h1>
      <button onClick={() => handleLogout()} className="btn btn-primary">
        Disagree
      </button>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onClick={() => handleAgreBtn()}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          I Agree
        </label>
      </div>
    </div>
  );
};

export default TermsCondition;
