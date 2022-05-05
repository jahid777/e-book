import React, { useRef, useState } from "react";

const BannerEditDisplaybook = () => {
  const topImgRef = useRef();
  const [suceesMsg, setSuccessMsg] = useState(false);

  //top banner submission
  const handleTopBannerSubmit = () => {
    const displayBookBanner = {
      topdisplayBookBanner: topImgRef?.current?.value,
    };
    // INSERT top image ADMIN AT THE DATABASE
    fetch("http://localhost:5000/addDisplayBookTopImage", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(displayBookBanner),
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
            <h3>ADD YOUR DISPLAY BOOK IMAGE</h3>
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
    </div>
  );
};

export default BannerEditDisplaybook;
