import { useRef } from "react";

// Assets
import MoonLogo from "../../assets/Logo.svg";
import "./NavigationBar.css";

// Components
import MenuButton from "../MenuButton/MenuButton";

// Libraries
import { atom, useAtom } from "jotai";

export const isMobileMenuOpenAtom = atom(false);

// Define the data structure for navigation links
interface NavLink {
  name: string;
  url: string;
}

// List of navigation links
const navLinks: NavLink[] = [
  { name: "About", url: "about" },
  { name: "Project", url: "project" },
];

// Function to scroll to certain id
const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const renderNavLinks = (links: NavLink[], isMobileMenuOpen: boolean) => {
  return links.map((link, index) => (
    <a
      onClick={() => scrollTo(link.url)}
      className={`links uppercase cursor-pointer lg:text-left text-center ${
        isMobileMenuOpen ? "slide-In" : "slide-Out"
      }`}
      key={index}
    >
      {link.name}
      <div className="line w-0 h-[2px] bg-[#eaeaea]" />
    </a>
  ));
};

function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useAtom(isMobileMenuOpenAtom);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prevValue) => !prevValue);
  };

  const closeMenu = () => {
    const menu = mobileMenuRef.current;
    if (menu) {
      menu.addEventListener(
        "animationend",
        () => {
          setIsMobileMenuOpen(false);
        },
        { once: true }
      );
      menu.classList.add("slide-Out");
    }
  };

  return (
    <div className={`flex flex-col lg:px-[10%] px-[5%] `}>
      <div
        className={`w-full py-[32px] z-50 flex items-center justify-between  h-fit`}
      >
        <a onClick={() => scrollTo("/")} className="cursor-pointer">
          <img src={MoonLogo} alt="" />
        </a>
        {/* Mobile Menu */}
        {!isMobileMenuOpen ? (
          <button className="w-[32px] h-[32px] lg:hidden" onClick={toggleMenu}>
            <MenuButton isOpen={isMobileMenuOpen} />
          </button>
        ) : (
          <button className="w-[32px] h-[32px] lg:hidden" onClick={closeMenu}>
            <MenuButton isOpen={isMobileMenuOpen} />
          </button>
        )}
        {/* Desktop Menu */}
        <div className="hidden md:hidden lg:block">
          <ul className="flex flex-row gap-8 text-[22px] lg:transform-none">
            {renderNavLinks(navLinks, isMobileMenuOpen)}
          </ul>
        </div>
      </div>
      {/* Mobile Menu Items */}
      <div
        className={`lg:hidden z-20 flex flex-row items-center justify-center ${
          isMobileMenuOpen ? "slide-In h-full" : "slide-Out"
        }`}
        ref={mobileMenuRef}
      >
        {isMobileMenuOpen && (
          <ul className={`flex flex-col gap-4 text-[22px] links-container`}>
            {renderNavLinks(navLinks, isMobileMenuOpen)}
          </ul>
        )}
      </div>
    </div>
  );
}
export default NavigationBar;
