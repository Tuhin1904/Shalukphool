"use client";
import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const images = ["Untitled_47.jpg", "Untitled_17.jpg", "Untitled_31.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={image}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              style={{ height: "100vh", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          )
        }
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
