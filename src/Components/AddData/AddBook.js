import React from "react";
import "./AddBook.css";
import { Link } from "react-router-dom";
const AddBook = () => {
  return (
    <main className="bookupload">  
        <section className="container">
        <Link to="/dashboard" className="back"> <i className="bi bi-skip-backward-fill"></i> Back </Link>
            <div className="row">
                <h2 className="text-center text-bold">Upload Your Book</h2>
                <div className="col-12 col-md-2"></div>
                <form className="col-12 col-md-8 bookInputForm">
                    <div className="mb-3 bookImgInput">
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.anilaggrawal.com%2Fij%2Fvol_013_no_001%2Freviews%2Ftb%2Fbook002%2Fcover.jpg&f=1&nofb=1" className="img-fluid bookImg" alt="..." />
                        <input type="file" className="form-control bookImgInput" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputBookName" className="form-label">Book Name:</label>
                        <input type="text" className="form-control" id="InputBookName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputAuthorName" className="form-label">Author Name:</label>
                        <input type="text" className="form-control" id="InputAuthorName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputISBM" className="form-label">ISBM:</label>
                        <input type="text" className="form-control" id="InputISBM"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputBookNo." className="form-label">Book No:</label>
                        <input type="text" className="form-control" id="InputBookNo."/>
                    </div>
                    <aside className="files">
                        <div className="mb-3">
                            <label className="form-label">Book File:</label>
                            <input type="file" className="form-control" />
                        </div>
                        <span className="orHr">OR</span>
                        <div className="mb-3">
                            <label className="form-label">Book Link:</label>
                            <input type="text" className="form-control" id="InputBookLink"/>
                        </div>
                    </aside>
                    <button type="submit" className="btn bookSubmit">Submit</button>
                </form>
                <div className="col-12 col-md-2"></div>
            </div>
        </section>
      </main>
  );
};

export default AddBook;
