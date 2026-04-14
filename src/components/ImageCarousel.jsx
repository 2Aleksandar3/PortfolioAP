import React, { useEffect, useState } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images, size }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePreviousClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 4500);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "auto";
  }, [isFullscreen]);

  return (
    <section>
      <div className={`image-container ${size}`}>
        <div className="image-border">
          <button className="nav-button left" onClick={handlePreviousClick}>
            &lt;
          </button>

          {images.map((image, index) => (
            <img
              src={image}
              alt="project"
              className={currentImageIndex === index ? "block" : "hidden"}
              key={index}
              onClick={() => setIsFullscreen(true)}
            />
          ))}

          <button className="nav-button right" onClick={handleNextClick}>
            &gt;
          </button>
        </div>
      </div>
      {isFullscreen && (
        <div
          className="fullscreen-overlay"
          onClick={() => setIsFullscreen(false)}
        >
          <img
            src={images[currentImageIndex]}
            alt="fullscreen"
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking image
          />

          <button
            className="close-button"
            onClick={() => setIsFullscreen(false)}
          >
            ✕
          </button>

          <button
            className="nav-button left"
            onClick={(e) => {
              e.stopPropagation();
              handlePreviousClick();
            }}
          >
            &lt;
          </button>

          <button
            className="nav-button right"
            onClick={(e) => {
              e.stopPropagation();
              handleNextClick();
            }}
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
};
export default ImageCarousel;
