import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import PopupEditBookList from "./PopupEditBookList";

const BooklistEdit = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [singleBook, setSingleBook] = useState([]);

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

  //delete the book
  const handleBookDelete = (id) => {
    fetch(`http://localhost:5000/bookDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted successfully");
      });
    window.location.reload();
  };

  //getting the single book and send the id to the opoupEditBookList component
  const fetchSingleBook = async (singleBookId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/singleBook/${singleBookId}`
      );
      const data = await response.json();
      setSingleBook(data);
    } catch (error) {
      console.log("err", error);
    }
    setLoading(false);
  };

  return (
    <main className="container my-3">
      <Link to="/dashboard" className="back">
        {" "}
        <i className="bi bi-skip-backward-fill"></i> Back{" "}
      </Link>
      <section className="bookList">
        <span className="bookListHeader">Your Book List</span>
        <div className="table-responsive mt-3">
          <table className="table mt-3">
            <thead className="thead-dark">
              <tr>
                <th scope="col">NO</th>
                <th scope="col">BOOK NAME</th>
                <th scope="col">EDIT</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>

            <tbody>
              {books?.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data?.bookName}</td>

                  {/* edit button */}
                  <td>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdropBook"
                      onClick={() => fetchSingleBook(data?._id)}
                    >
                      Edit
                    </button>
                    <PopupEditBookList singleBook={singleBook} />
                  </td>

                  {/* delete button */}
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleBookDelete(data?._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default BooklistEdit;
