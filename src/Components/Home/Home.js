import React, { useState, useRef, useEffect } from "react";
import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const [display, setDisply] = useState(false);
  const [inputData, setInputData] = useState("");
  const [finalInputData, setFinalInputData] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useHistory();

  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };

  const data = "FvjfsmsvVsbHsbJsban";
  useEffect(() => {
    if (scanResultWebCam || finalInputData == data) {
      sessionStorage.setItem("token", data);
      history.push("/termsCondition");
    }
  }, [finalInputData, history, scanResultWebCam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinalInputData(inputData);
    if (finalInputData != data) {
      setErrorMessage(true);
    }
  };

  return (
    <section>
      <div className="homeHead">
        <img
          src="https://i.ibb.co/P90bHQx/E-Book.webp"
          alt=""
          className="headImg"
        />
      </div>
      {/* Camera */}
      <div className="qr-main-section row container-fluid">
        {display && (
          <div className="col-md-3">
            <QrReader
              delay={300}
              style={{ width: "100%" }}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
            />
          </div>
        )}
      </div>
      {/* Button */}
      <div className="scan-button">
        <button className="btn btn-success" onClick={() => setDisply(!display)}>
          SCEN BY QR CODE{" "}
        </button>
      </div>
      {/* Login input */}
      <form onSubmit={handleSubmit} className="loginForm my-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control loginInput"
            placeholder="Enter Your Password"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) => setInputData(e.target.value)}
          />
          <button className="btn btn-success" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      {errorMessage && <h1>INVALID PASSWORD</h1>}

      <div className="homeMiddleImg">
        <img
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt=""
          className="midImg"
        />
      </div>
      <div className="disclaimer my-5">
        <span className="disclaimerHeader">Disclaimer</span>
        <span className="disclaimerBody">
          <ol>
            <li className="disclaimer_li">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </li>
            <li className="disclaimer_li">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </li>
            <li className="disclaimer_li">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </li>
            <li className="disclaimer_li">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </li>
            <li className="disclaimer_li">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </li>
            <Link to="/" className="disclaimer_seeMore">
              See More......
            </Link>
          </ol>
        </span>
      </div>
    </section>
  );
};

export default Home;
