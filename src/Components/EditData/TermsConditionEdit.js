import React, { useEffect, useRef, useState } from "react";

const TermsConditionEdit = () => {
  const termsRef = useRef();
  const [suceesMsg, setSuccessMsg] = useState("");

  const handleTermsSubmit = () => {
    const termsConditionData = {
      description: termsRef?.current?.value,
    };
    // INSERT A ADMIN AT THE DATABASE
    fetch("http://localhost:5000/addTermsCondition", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(termsConditionData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setSuccessMsg(true);
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleTermsSubmit}>
        <textarea ref={termsRef} />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default TermsConditionEdit;
