import React from "react";
import "./BookDisplay.css";

const BookDisplay = () => {
  return (
    <main className="book_display">
      <section className="book_display_header">
        <img
          src="https://icms-image.slatic.net/images/ims-web/b7e9d05d-9118-47ae-942a-9fdbfe0dbbe6.jpg"
          alt="Neourology Library"
          className="img-fluid bannerImg"
        />
      </section>
      <section className="container-fluid book_display_body my-3">
        <form className="search__filter">
          <div className="srarch_section d-flex justify-content-center">
            <input
              type="text"
              className="searchbar"
              placeholder="Search book name, authoe name, isbm....."
            />
            <button type="submit" className="btn search_btn">
              Search
            </button>
          </div>
          <div className="sideFilter my-4">
            <span className="radioSearch">              
              <input type="radio" id="book_name" name="search" value="Book Name" />
              <label for="book_name">Book Name</label>
            </span>
            <span className="radioSearch">
              <input type="radio" id="author_name" name="search" value="Author Name" />
              <label for="author_name">Author Name</label>
            </span>
            <span className="radioSearch">
              <input type="radio" id="isbn" name="search" value="ISBN Number" />
              <label for="isbn">ISBN Number</label>
            </span>       
          </div>
        </form>
        <div className="book_display_main my-3">
          
            <div className="row bookRow">
              <div className="col-12 col-md-4 book_card mb-2">
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.anilaggrawal.com%2Fij%2Fvol_013_no_001%2Freviews%2Ftb%2Fbook002%2Fcover.jpg&f=1&nofb=1" alt="" className="bookImage" />
                <span className="b_no">
                  <p>1</p>
                </span>
                <div className="bookFoot">
                  <p className="b-name">
                    Being Mortal: Medicine and What Matters in the End
                  </p>
                  <aside className="d-flex justify-content-between actionbtn">
                    <button className="btn viewBtn">View</button>
                    <button className="btn downloadBtn">Download</button>
                  </aside>
                </div>
              </div>
              <div className="col-12 col-md-4 book_card mb-2">
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.anilaggrawal.com%2Fij%2Fvol_013_no_001%2Freviews%2Ftb%2Fbook002%2Fcover.jpg&f=1&nofb=1" alt="" className="bookImage" />
                <span className="b_no">
                  <p>1</p>
                </span>
                <div className="bookFoot">
                  <p className="b-name">
                    Being Mortal: Medicine and What Matters in the End
                  </p>
                  <aside className="d-flex justify-content-between actionbtn">
                    <button className="btn viewBtn">View</button>
                    <button className="btn downloadBtn">Download</button>
                  </aside>
                </div>
              </div>
              <div className="col-12 col-md-4 book_card mb-2">
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.anilaggrawal.com%2Fij%2Fvol_013_no_001%2Freviews%2Ftb%2Fbook002%2Fcover.jpg&f=1&nofb=1" alt="" className="bookImage" />
                <span className="b_no">
                  <p>1</p>
                </span>
                <div className="bookFoot">
                  <p className="b-name">
                    Being Mortal: Medicine and What Matters in the End
                  </p>
                  <aside className="d-flex justify-content-between actionbtn">
                    <button className="btn viewBtn">View</button>
                    <button className="btn downloadBtn">Download</button>
                  </aside>
                </div>
              </div>
            </div>          
        </div>
      </section>
    </main>
  );
};

export default BookDisplay;
