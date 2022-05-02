import React, { useRef, useState } from "react";
import "./AddBook.css";
import { Link } from "react-router-dom";

const AddBook = () => {
  const [suceesMsg, setSuccessMsg] = useState(false);
  const bookImgRef = useRef();
  const bookNameRef = useRef();
  const authorNameRef = useRef();
  const isbmRef = useRef();
  const bookNumberRef = useRef();
  const bookLinkRef = useRef();

  const handleSubmit = () => {
    const bookData = {
      bookImg: bookImgRef?.current?.value,
      bookName: bookNameRef?.current?.value,
      authorName: authorNameRef?.current?.value,
      bookNumber: bookNumberRef?.current?.value,
      bookLink: bookLinkRef?.current?.value,
    };

    // INSERT top image ADMIN AT THE DATABASE
    fetch("http://localhost:5000/addBookData", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bookData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setSuccessMsg(true);
        }
      });
  };
  return (
    <main className="bookupload">
      <section className="container">
        <Link to="/dashboard" className="back">
          {" "}
          <i className="bi bi-skip-backward-fill"></i> Back{" "}
        </Link>
        <div className="row">
          <h2 className="text-center text-bold">Upload Your Book</h2>
          <div className="col-12 col-md-2"></div>
          <form
            className="col-12 col-md-8 bookInputForm"
            onSubmit={handleSubmit}
          >
            <div className="mb-3 bookImgInput">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.anilaggrawal.com%2Fij%2Fvol_013_no_001%2Freviews%2Ftb%2Fbook002%2Fcover.jpg&f=1&nofb=1"
                className="img-fluid bookImg"
                alt="..."
              />
            </div>

            <div className="mb-3">
              <label htmlFor="InputBookImage" className="form-label">
                Book Image Link:
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="InputBookImage"
                placeholder="Image Link"
                ref={bookImgRef}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="InputBookName" className="form-label">
                Book Name:
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="InputBookName"
                placeholder="Book Name"
                ref={bookNameRef}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="InputAuthorName" className="form-label">
                Author Name:
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="InputAuthorName"
                placeholder="Author Name"
                ref={authorNameRef}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="InputISBM" className="form-label">
                ISBM:
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="InputISBM"
                placeholder="Isbm"
                ref={isbmRef}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="InputBookNo." className="form-label">
                Book No:
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="InputBookNo."
                placeholder="Book Number"
                ref={bookNumberRef}
              />
            </div>
            <aside className="files">
              <div className="mb-3">
                <label className="form-label">Book File:</label>
                <input type="file" className="form-control" />
              </div>
              <span className="orHr">OR</span>
              <div className="mb-3">
                <label className="form-label">Book Link:</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="InputBookLink"
                  placeholder="Book Link"
                  ref={bookLinkRef}
                />
              </div>
            </aside>
            <button type="submit" className="btn bookSubmit">
              Submit
            </button>
          </form>
          <div className="col-12 col-md-2"></div>
        </div>
      </section>
    </main>
  );
};

export default AddBook;
