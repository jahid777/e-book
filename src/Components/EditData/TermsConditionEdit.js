import React, { useEffect, useRef, useState } from "react";

const TermsConditionEdit = () => {
  const termsRef = useRef();
  const [termsData, setTermsData] = useState(termsRef);

  const handleTermsSubmit = () => {
    const data = {
      termsdata: termsData?.current?.value,
    };
    // // INSERT A terms and conditon AT THE DATABASE
    // fetch("http://localhost:5000/addTermsCondition", {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     if (result) {
    //     }
    //   });
    console.log(data);
  };

  const handletermsChange = (e) => {
    setTermsData(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleTermsSubmit}>
        <textarea onClick={handletermsChange} />
      </form>
      <button type="submit">SUBMIT</button>
    </div>
  );
};

export default TermsConditionEdit;
