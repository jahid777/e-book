import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Booklist = () => {
    return (
        <main className="container my-3">
        <Link to="/dashboard" className="back"> <i className="bi bi-skip-backward-fill"></i> Back </Link>
        <section className="bookList">        
            <span className="bookListHeader">Your Book List</span>
            <div className="table-responsive mt-3">
                <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark-Psycho Book</td>
                        <td className="actionBtn"><button className="btn btn-success mx-2"><i className="bi bi-pen-fill"></i> Edit</button><button className="btn btn-danger"><i className="bi bi-trash-fill"></i> Delete</button></td>                       
                    </tr>                    
                </tbody>
                </table>
            </div>
            </section>
        </main>
    );
}

export default Booklist;
