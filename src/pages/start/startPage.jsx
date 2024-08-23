import React, { useState } from "react";
import First from "./firstPage";
import Second from "./secondPage";
import Last from "./lastPage";
import "../start/startPage.css";

export default function StartPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const pages = [<First />, <Second />, <Last />];

  const moveSlide = () => {
    if (animating) return;

    setAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pages.length);
      setAnimating(false);
    }, 500); // 애니메이션 시간과 일치시킵니다.
  };

  return (
    <div className="MainWrapper" onClick={moveSlide}>
      <div className={`carousel ${animating ? "slide" : ""}`}>
        {pages[currentIndex]}
      </div>
    </div>
  );
}
