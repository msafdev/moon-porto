// Libraries
import { useEffect } from "react";
import { gsap } from "gsap";
import "./PreLoader.css";

function PreLoader() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".texts-container span", {
      duration: 0.5,
      y: 0,
      stagger: 0.4,
    }).to(".texts-container span", {
      duration: 1,
      y: "100px",
      stagger: 0.4,
      delay: 0.3,
    });

    tl.to(".preloader", {
      duration: 0.1,
      height: 1000,
      delay: 0,
    }).to(".preloader", {
      duration: 0.8,
      height: 0,
      display: "none",
    });
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container flex md:gap-5 gap-1 justify-center items-center text-center">
        <span className="">Design</span>
        <span className="">Develop</span>
        <span className="">Deploy</span>
      </div>
    </div>
  );
}
export default PreLoader;
