import React from "react";
import { useHistory } from "react-router-dom";

const TermsCondition = () => {
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.setItem("token", "");
    history.push("/");
  };

  return (
    <div>
      <h1 className="text-center mt-5">WELCOME TO OUR BOOK LIST</h1>
      <button onClick={() => handleLogout()} className="btn btn-primary">
        Logout
      </button>
    </div>
  );
};

export default TermsCondition;
