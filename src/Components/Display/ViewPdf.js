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

  //getting books data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/getBookData");
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

  //email sending
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pg023g8",
        "template_hpa5u8n",
        e.target,
        "-5cEZ1_2xnVcOEQhI"
      )
      .then(
        (result) => {
          if (result) {
            setMessage("your message successfully sent!");
            setTimeout(() => {
              setMessage("");
            }, 5000);
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      {selectedBook.length > 0 &&
        selectedBook.map((bookDt) => (
          <span key={bookDt._id}>
            <section className="viewPdf_main_section container-fluid mt-5">
              <div className="viewPdf_card">
                <div className="mb-3">
                  <img
                    className="viewPdf_page_img"
                    src={bookDt?.bookImg}
                    alt=""
                  />
                </div>
                <div>
                  <div className="d-flex">
                    <strong>Book Name: &nbsp; </strong>
                    <p>{bookDt?.bookName}</p>
                  </div>
                  <div className="d-flex">
                    <strong>Author Name: &nbsp;</strong>
                    <p>{bookDt?.authorName}</p>
                  </div>
                  <div className="d-flex">
                    <strong>Isbm: &nbsp;</strong>
                    <p>{bookDt?.isbm}</p>
                  </div>
                  <div className="d-flex">
                    <strong>Book Number: &nbsp;</strong>
                    <p>{bookDt?.bookNumber}</p>
                  </div>
                  <div className="d-flex justify-content-between mt-4">
                    <button
                      className="btn btn-success"
                      style={{ width: "120px" }}
                    >
                      <a
                        className="viewButton"
                        href={bookDt.bookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        view book
                      </a>
                    </button>{" "}
                    &nbsp;
                    <button
                      className="btn btn-success"
                      style={{ width: "120px" }}
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdropSoftCopy"
                    >
                      Soft copy
                    </button>
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
                            <h5
                              className="modal-title"
                              id="staticBackdropLabel"
                            >
                              Request for the soft copy
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
                            {/* this is modal body */}

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
                                className="bookInputForm"
                                ref={form}
                                onSubmit={sendEmail}
                              >
                                <div className="mb-3">
                                  <label
                                    htmlFor="InputEmail"
                                    className="form-label"
                                  >
                                    Your Email
                                  </label>
                                  <input
                                    required
                                    type="email"
                                    className="form-control"
                                    id="InputEmail"
                                    placeholder="email"
                                    // ref={bookNameRef}
                                  />
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="InputBookName"
                                    className="form-label"
                                  >
                                    Book Name:
                                  </label>
                                  <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="InputBookName"
                                    placeholder="Book Name"
                                    // ref={bookNameRef}
                                  />
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="InputISBM"
                                    className="form-label"
                                  >
                                    ISBM:
                                  </label>
                                  <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="InputISBM"
                                    placeholder="Isbm"
                                    // ref={isbmRef}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="InputBookNo."
                                    className="form-label"
                                  >
                                    Book No:
                                  </label>
                                  <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="InputBookNo."
                                    placeholder="Book Number"
                                    // ref={bookNumberRef}
                                  />
                                </div>

                                <button
                                  type="submit"
                                  className="btn bookSubmit"
                                >
                                  Submit
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </span>
        ))}
    </div>
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
