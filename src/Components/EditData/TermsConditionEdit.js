import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TermsConditionEdit.css";

const TermsConditionEdit = () => {
  const termsRef = useRef();
  const [suceesMsg, setSuccessMsg] = useState("");
  const [showDescription, setShowDescription] = useState("");

  const handleTermsSubmit = () => {
    const termsConditionData = {
      description: showDescription,
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
    <div className="p-4">
      <h1 className="text-center">TERMS AND CONDITON</h1>
      {/* <form onSubmit={handleTermsSubmit}>
        <textarea ref={termsRef} />

        <button type="submit">SUBMIT</button>
      </form> */}
      <form onSubmit={handleTermsSubmit}>
        {/* product Full description */}
        {/* <div>
          <label htmlFor="description" className="form-label">
            Full Description
          </label>
        </div> */}

        <div>
          <ReactQuill
            className="fullDescription mt-5 mb-5"
            theme="snow"
            value={showDescription}
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ align: [] }],
                [{ color: [] }, { background: [] }],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["code-block"],
                ["clean"],
              ],
            }}
            formats={[
              "header",
              "font",
              "size",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "color",
              "background",
              "list",
              "bullet",
              "indent",
              "code-block",
              "align",
            ]}
            onChange={(val) => {
              setShowDescription(val);
            }}
          />
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn btn-success btn_terms_submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default TermsConditionEdit;
