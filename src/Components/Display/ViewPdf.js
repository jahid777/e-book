import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./ViewPdf.css";
import emailjs from "@emailjs/browser";

const ViewPdf = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();
  const { bookId } = useParams();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tgfxmke",
        "template_l1dgzs5",
        form.current,
        "-5cEZ1_2xnVcOEQhI"
      )
      .then(
        (result) => {
          if (result) {
            setMessage("Your Email Send Successfully");
            setTimeout(() => {
              setMessage("");
            }, "5000");
            e.target.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //getting books data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://ebookserver.dmcabooks.com/getBookData"
        );
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.log("err", error);
      }
      setLoading(false);
    };
    fetchProduct();
  }, []);

  //selection the specefic book
  const selectedBook = books.filter((bk) => bk._id == bookId);

  return (
    <>
      {selectedBook.length > 0 &&
        selectedBook.map((bookDt) => (
          <div className="viewBtnCard">
            <div
              class="card mb-3 viewBtnCardBody"
              style={{ maxWidth: "540px" }}
              key={bookDt._id}
            >
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={bookDt?.bookImg}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-title">{bookDt?.bookName}</p>
                    <p class="card-text">{bookDt?.authorName}</p>
                    <p class="card-text">ISBN: {bookDt?.isbm}</p>
                    <span class="d-flex justify-content-between actionbtn">
                      <button className="btn readButton">
                        <a
                          className="readButton_txt"
                          href={bookDt.bookLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read Book
                        </a>
                      </button>
                      <button
                        className="btn hardCopyBtn"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdropSoftCopy"
                      >
                        Hard Copy
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="staticBackdropSoftCopy"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Request for the hard copy
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    className="modal-body"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="card"
                      style={{
                        width: "100%",
                        padding: "15px",
                        textAlign: "justify",
                      }}
                    >
                      {/* this is body */}
                      <form
                        onSubmit={sendEmail}
                        ref={form}
                        className="bookInputForm"
                      >
                        <div className="mb-3">
                          <label htmlFor="InputName" className="form-label">
                            Your Name
                          </label>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="InputName"
                            placeholder="Your Name"
                            name="Name"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="InputEmail" className="form-label">
                            Your Email
                          </label>
                          <input
                            required
                            type="email"
                            className="form-control"
                            id="InputEmail"
                            placeholder="Email"
                            name="Email"
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="InputPhoneNumber"
                            className="form-label"
                          >
                            Your Phone Number
                          </label>
                          <input
                            required
                            type="number"
                            className="form-control"
                            id="InputPhoneNumber"
                            placeholder="Your Phone Number"
                            name="Phone Number"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="InputBmdc" className="form-label">
                            BMDC Registration Number
                          </label>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="InputBmdc"
                            placeholder="Your BMDC Number"
                            name="Bmdc Reg Number"
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
                            name="Book Name"
                            defaultValue={bookDt?.bookName}
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="InputISBM" className="form-label">
                            ISBN:
                          </label>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="InputISBM"
                            placeholder="Isbn"
                            name="Isbn"
                            defaultValue={bookDt?.isbm}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="InputBookNo." className="form-label">
                            Book Number:
                          </label>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="InputBookNo."
                            placeholder="Book Number"
                            name="Book Number"
                            defaultValue={bookDt?.bookNumber}
                          />
                        </div>

                        <button type="submit" className="btn bookSubmit mb-3">
                          Submit
                        </button>

                        <strong
                          style={{
                            color: "green",
                          }}
                        >
                          {message}
                        </strong>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ViewPdf;

{
  /* dl for download */
}
{
  /* <a
href="https://dl.dropbox.com/s/owl76gfhrt43am8/Anthony%20S.%20Fauci%2C%20Eugene%20Braunwald%2C%20Dennis%20L.%20Kasper%2C%20Stephen%20L.%20Hauser%2C%20Dan%20L.%20Longo%2C%20J.%20Larry%20Jameson%2C%20Joseph%20Loscalzo%20-%20Harrison%27s%20Principles%20of%20Internal%20Medicine-McGraw-Hill%20Professional%20%282008%29.pdf?dl=0"
// target="_blank"
>
download Book
</a> */
}

{
  /* //small link */
}

{
  /* google drive link */
}
{
  /* preview */
}
{
  /* https://drive.google.com/file/d/1Iobh3MmwEiJG1KdkbwJ6lKydhWGoNMtp/view?usp=drivesdk */
}

{
  /* <a
  href="https://dropbox.com/s/owl76gfhrt43am8/Anthony%20S.%20Fauci%2C%20Eugene%20Braunwald%2C%20Dennis%20L.%20Kasper%2C%20Stephen%20L.%20Hauser%2C%20Dan%20L.%20Longo%2C%20J.%20Larry%20Jameson%2C%20Joseph%20Loscalzo%20-%20Harrison%27s%20Principles%20of%20Internal%20Medicine-McGraw-Hill%20Professional%20%282008%29.pdf?dl=0"
  // target="_blank"
>
  view book
</a>; */
}
