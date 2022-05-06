import React, { useState, useRef, useEffect } from "react";
import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./home.css";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

const Home = () => {
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const [display, setDisply] = useState(false);
  const [inputData, setInputData] = useState("");
  const [finalInputData, setFinalInputData] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useHistory();
  const [topImg, setTopImg] = useState([""]);
  const [midImg, setMidImg] = useState([""]);
  const [disclaimer, setDisclaimer] = useState([""]);
  const [loading, setLoading] = useState(false);

  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };

  const data = "FvjfsmsvVsbHsbJsban";
  //for login system
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

  //getting top img form server
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:5000/getFrontPageTopImage"
        );
        const data = await response.json();
        setTopImg(data);
      } catch (error) {
        console.log("err", error);
      }
      setLoading(false);
    };
    fetchProduct();
  }, []);

  //getting mid img form server
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:5000/getFrontPageMiddleImage"
        );
        const data = await response.json();
        setMidImg(data);
      } catch (error) {
        console.log("err", error);
      }
      setLoading(false);
    };
    fetchProduct();
  }, []);

  //getting disclaimer img form server
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:5000/getFrontPageDisclaimer"
        );
        const data = await response.json();
        setDisclaimer(data);
      } catch (error) {
        console.log("err", error);
      }
      setLoading(false);
    };
    fetchProduct();
  }, []);

  return (
    <section>
      <div className="homeHead">
        {topImg?.map((dt, index) => (
          <span key={index}>
            <img src={dt.topImage} alt="loading" className="headImg" />
          </span>
        ))}
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
          SCAN YOUR LOGIN CODE
        </button>
      </div>
      {/* Login input */}
      <form onSubmit={handleSubmit} className="loginForm my-5">
        <div className="input-group">
          <input
            required
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
      {errorMessage && <h1 className="errorMessage">INVALID PASSWORD!</h1>}

      <div className="homeMiddleImg">
        {midImg?.map((dt, index) => (
          <span key={index}>
            <img src={dt?.middleImage} alt="loading" className="midImg" />
          </span>
        ))}
      </div>

      <div className="mt-5">
        <h2 className="text-center mb-5">Disclaimer</h2>
        <div className="container mt-3">
          <div>
            {disclaimer?.map((dsData, index) => (
              <span key={index} style={{ textAlign: "justify" }}>
                {ReactHtmlParser(dsData?.description)}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="text-center mt-5 pb-5">
        <Link to="/" className="disclaimer_seeMore">
          See More......
        </Link>
      </div> */}
    </section>
  );
};

export default Home;
