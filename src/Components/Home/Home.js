import React, { useState, useRef } from "react";
import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./home.css";

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
  if (scanResultWebCam || finalInputData == data) {
    sessionStorage.setItem("token", data);
    history.push("/termsCondition");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinalInputData(inputData);
    if (finalInputData != data) {
      setErrorMessage(true);
    }
  };

  return (
    <div>
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
      <div className="scen-button">
        <button
          className="btn btn-primary mt-5"
          onClick={() => setDisply(!display)}
        >
          SCEN BY QR CODE{" "}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div class="input-group container mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) => setInputData(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      {errorMessage && <h1>INVALID PASSWORD</h1>}
    </div>
  );
};

export default Home;

// <input
//           type="text"
//           className="form-control container mt-5"
//           onChange={(e) => setInputData(e.target.value)}
//         />
//         <button className="btn btn-primary" type="submit">
//           Submit
//         </button>
