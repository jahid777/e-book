import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BookDisplay.css";

const BookDisplay = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [bookCat, setBookCat] = useState("");
  const [topBannerImg, setTopBannerImg] = useState([]);

  //for searching book
  const handleSearch = (e) => {
    setSearch(e.target.value);
    // search butoon a click na korei jokhn change korbo tokhni data dekhabe
    // handeSearchSubmit(e);
  };

  //gatting the radio button value and set inte state
  const filterbookCat = (bookType) => {
    setBookCat(bookType);
  };

  //ata conditionally search kore value onujay
  const handeSearchSubmit = (e) => {
    e.preventDefault();
    if (bookCat === "bookName") {
      const filterResult = books.filter((product) =>
        product?.bookName
          .toLowerCase()
          .includes(search.toString().toLowerCase())
      );

      setFilteredBooks(filterResult);
    }
    if (bookCat === "authorName") {
      const filterResult = books.filter((product) =>
        product?.authorName
          .toLowerCase()
          .includes(search.toString().toLowerCase())
      );
      setFilteredBooks(filterResult);
    }
    if (bookCat === "isbn") {
      const filterResult = books.filter((product) =>
        product?.isbn.toLowerCase().includes(search.toString().toLowerCase())
      );
      setFilteredBooks(filterResult);
    }
  };

  //getting books data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/getBookData");
        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data);
      } catch (error) {
        console.log("err", error);
      }
      setLoading(false);
    };
    fetchProduct();
  }, []);

  //getting the top banner img
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:5000/DisplayBookTopImage"
        );
        const data = await response.json();
        setTopBannerImg(data);
      } catch (error) {
        console.log("err", error);
      }
      setLoading(false);
    };
    fetchProduct();
  }, []);

  return (
    <main className="book_display">
      <section className="book_display_header">
        {topBannerImg.map((tpBanner) => (
          <img
            key={tpBanner._id}
            src={tpBanner?.topdisplayBookBanner}
            alt="Neourology Library"
            className="img-fluid bannerImg"
          />
        ))}
      </section>
      <section className="container-fluid book_display_body my-3">
        <form className="search__filter">
          <div className="srarch_section d-flex justify-content-center">
            <input
              type="text"
              className="searchbar"
              placeholder="Search book name, authoe name, isbm....."
              onChange={handleSearch}
            />
            <button
              type="submit"
              className="btn search_btn"
              onClick={handeSearchSubmit}
            >
              Search
            </button>
          </div>
          <div className="sideFilter my-4">
            <span className="radioSearch">
              <input
                type="radio"
                id="book_name"
                name="search"
                value="bookName"
                onClick={() => filterbookCat("bookName")}
              />
              <label htmlFor="book_name">Book Name</label>
            </span>
            <span className="radioSearch">
              <input
                type="radio"
                id="author_name"
                name="search"
                value="authorName"
                onClick={() => filterbookCat("authorName")}
              />
              <label htmlFor="author_name">Author Name</label>
            </span>
            <span className="radioSearch">
              <input
                type="radio"
                id="isbn"
                name="search"
                value="isbm"
                onClick={() => filterbookCat("isbm")}
              />
              <label htmlFor="isbn">ISBN Number</label>
            </span>
          </div>
        </form>
        <div className="book_display_main my-3">
          <div className="row bookRow">
            {/* card */}
            {filteredBooks.map((bookData, index) => (
              <div
                className="col-12 col-md-4 book_card mb-2"
                key={bookData?._id}
              >
                <img src={bookData?.bookImg} alt="" className="bookImage" />
                <span className="b_no">
                  <p>{index + 1}</p>
                </span>
                <div className="bookFoot">
                  <p className="b-name pt-2">{bookData?.bookName}</p>
                  <aside className="d-flex justify-content-between actionbtn">
                    <Link to={`/viewPdf/${bookData?._id}`} className="viewBtn">
                      <button className="btn">View</button>
                    </Link>
                    <button className="btn downloadBtn">Download</button>
                  </aside>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookDisplay;
