import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const FrontPageEdit = () => {
  const topImgRef = useRef();
  const middleImgRef = useRef();
  const [disclaimer, setDisclaimer] = useState("");
  const [suceesMsg, setSuccessMsg] = useState("");

  //top banner submission
  const handleTopBannerSubmit = () => {
    const frontPageTopBanner = {
      topImage: topImgRef?.current?.value,
    };
    // INSERT top image ADMIN AT THE DATABASE
    fetch("http://localhost:5000/addFrontPageTopImage", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(frontPageTopBanner),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setSuccessMsg(true);
        }
      });
  };

  //middle banner submission
  const handleMiddleBannerSubmit = () => {
    const frontPageMiddleBanner = {
      middleImage: middleImgRef?.current?.value,
    };
    // INSERT A middle image AT THE DATABASE
    fetch("http://localhost:5000/addFrontPageMiddleImage", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(frontPageMiddleBanner),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setSuccessMsg(true);
        }
      });
  };

  //disclimer submission
  const handleDisclaimerSubmit = () => {
    const frontPageDisclaimer = {
      description: disclaimer,
    };

    // INSERT A disclaimer AT THE DATABASE
    fetch("http://localhost:5000/addFrontPageDisclaimer", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(frontPageDisclaimer),
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
      {/* top banner form */}
      <form onSubmit={handleTopBannerSubmit}>
        <div className="mb-3 mt-5 container">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Top image
          </label>
          <div className="input-group mb-3">
            <input
              required
              type="text"
              className="form-control"
              placeholder="pest your image link"
              aria-label="Recipient's username"
              id="exampleFormControlTextarea1"
              aria-describedby="button-addon2"
              ref={topImgRef}
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
      </form>

      {/* middle banner */}
      <form onSubmit={handleMiddleBannerSubmit}>
        <div className="mb-3 container">
          <label htmlFor="ControlTextarea2" className="form-label">
            Middle image
          </label>
          <div className="input-group mb-3">
            <input
              required
              type="text"
              className="form-control"
              placeholder="pest your middle image link"
              aria-label="Recipient's username"
              id="ControlTextarea2"
              aria-describedby="button-addon2"
              ref={middleImgRef}
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
      </form>

      {/* disclaimer */}
      <form onSubmit={handleDisclaimerSubmit}>
        <div className="container mt-5"></div>
        <div className="container">
          <ReactQuill
            className="fullDescription mt-5 mb-5"
            theme="snow"
            value={disclaimer}
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
              setDisclaimer(val);
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

export default FrontPageEdit;
