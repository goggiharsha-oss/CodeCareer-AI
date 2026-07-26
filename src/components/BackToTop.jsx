import { useState, useEffect } from "react";
import "./BackToTop.css";

function BackToTop() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <>
      {showButton && (
        <button 
          className="back-top"
          onClick={scrollTop}
        >
          ↑
        </button>
      )}
    </>
  );
}

export default BackToTop;