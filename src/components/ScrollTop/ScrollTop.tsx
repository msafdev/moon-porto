// Assets
import "./ScrollTop.css";

// Libraries
import { useState, useEffect } from "react";
import { TbArrowBigUpLines } from "react-icons/tb";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
      <div className={`w-[80px] z-[100] h-[80px] bg-[#101010] fixed bottom-[40px] left-[40px] rounded-full border-[5px] border-[#eaeaeadd] ${
        isVisible ? "fade-up" : "fade-down"
      }`}>
        <button className="scroll-button h-full w-full p-3" onClick={goToTop}>
          <TbArrowBigUpLines className="scroll-icon h-full w-full text-[#eaeaea]" />
        </button>
      </div>
  );
}
export default ScrollTop;
