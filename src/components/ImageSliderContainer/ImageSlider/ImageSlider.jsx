import * as React from "react";
import { useState } from "react";

export const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // TODO: Move css to sass file
  const sliderStyles = { height: "100%", position: "relative" };
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "-32px",
    fontSize: "45px",
    color: "#11141a",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "-32px",
    fontSize: "45px",
    color: "#11141a",
    zIndex: 1,
    cursor: "pointer",
  };
  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "30px",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} role="button" onClick={goToPrevious}>
        &#10096;
      </div>
      <div style={slideStyles}>
        <div style={rightArrowStyles} role="button" onClick={goToNext}>
          &#10097;
        </div>
      </div>
      <div>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} style={dotsContainerStyle}>
            <div style={dotStyles}>●</div>
          </div>
        ))}
      </div>
    </div>
  );
};
