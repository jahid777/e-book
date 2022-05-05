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
            <a
              href="https://dropbox.com/s/owl76gfhrt43am8/Anthony%20S.%20Fauci%2C%20Eugene%20Braunwald%2C%20Dennis%20L.%20Kasper%2C%20Stephen%20L.%20Hauser%2C%20Dan%20L.%20Longo%2C%20J.%20Larry%20Jameson%2C%20Joseph%20Loscalzo%20-%20Harrison%27s%20Principles%20of%20Internal%20Medicine-McGraw-Hill%20Professional%20%282008%29.pdf?dl=0"
              // target="_blank"
            >
              view book
            </a>

            <br />
            <br />

            {/* dl for download */}
            <a
              href="https://dl.dropbox.com/s/owl76gfhrt43am8/Anthony%20S.%20Fauci%2C%20Eugene%20Braunwald%2C%20Dennis%20L.%20Kasper%2C%20Stephen%20L.%20Hauser%2C%20Dan%20L.%20Longo%2C%20J.%20Larry%20Jameson%2C%20Joseph%20Loscalzo%20-%20Harrison%27s%20Principles%20of%20Internal%20Medicine-McGraw-Hill%20Professional%20%282008%29.pdf?dl=0"
              // target="_blank"
            >
              download Book
            </a>

            {/* //small link */}

            <a
              href="https://drive.google.com/file/d/1S6jxbYy729zQNc7qf9aDVEzFPRGWQ4mN/view?usp=sharing"
              target="_blank"
            >
              small link view
            </a>

            {/* google drive link */}
            {/* preview */}
            {/* https://drive.google.com/file/d/1Iobh3MmwEiJG1KdkbwJ6lKydhWGoNMtp/view?usp=drivesdk */}
          </span>
        ))}
    </div>
  );
};

export default ViewPdf;
