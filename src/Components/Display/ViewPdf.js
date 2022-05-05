import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Viewer } from "@react-pdf-viewer/core"; // install this library
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library

const ViewPdf = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
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

  return (
    <div>
      {selectedBook.length > 0 &&
        selectedBook.map((bookDt) => (
          <span key={bookDt._id}>
            <a href={bookDt?.bookLink} target="_blank">
              view book
            </a>
          </span>
        ))}
    </div>
  );
};

export default ViewPdf;
