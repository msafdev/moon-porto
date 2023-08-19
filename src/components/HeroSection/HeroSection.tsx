// Assets
import SideBar from "../SideBar/SideBar";
import Spotify from "../../assets/Barcode.svg";
// import Line from "../../assets/Line.svg";
import "./HeroSection.css";

// Libraries
import { Button } from "../ui/button";
import {
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbPdf,
  TbBrandReact,
  TbBrandFigma,
  TbBrandGraphql,
  TbBrandTailwind,
  TbChessKing,
  TbBrandLaravel,
} from "react-icons/tb";
import { FiCopy } from "react-icons/fi";
import { useToast } from "../ui/use-toast";

function HeroSection() {
  // Shadcn/ui Toast
  const { toast } = useToast();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  function onToast() {
    toast({
      description: (
        <pre className="text-[#090909] font-[Poppins]">
          Copied to <span className="font-semibold">clipboard</span>!
        </pre>
      ),
    });
  }

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-[calc(100%-118px)] w-full"
    >
      <div className="flex md:flex-row flex-col items-center justify-center h-full w-full">
        <SideBar />
        {/* Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-2 h-full w-full lg:py-10 py-5">
          {/* Left */}
          <div className="flex flex-col lg:justify-end md:justify-center justify-start h-full">
            <div className="flex flex-col lg:justify-start items-end py-5 lg:hidden">
              <h1 className="text-[3rem] md:text-[4rem] cursor-default font-semibold text-[#eaeaea66] text-right md:leading-[42px] leading-[32px]">
                minimalist
              </h1>
              <h1 className="text-[3rem] md:text-[4rem] cursor-default font-semibold text-[#eaeaea99] text-right leading-[42px]">
                simply
              </h1>
              <h1 className="text-[3rem] md:text-[4rem] cursor-default font-semibold text-[#eaeaeacc] text-right leading-[42px]">
                neat
              </h1>
            </div>
            <div className="flex flex-row gap-4 md:hidden w-full justify-end">
              <a href="https://twitter.com/msafdev" target="_blank">
                <TbBrandTwitter className="w-[32px] h-[32px] hover:scale-110 cursor-pointer transition-all hover:text-[#00acee]" />
              </a>
              <a href="https://instagram.com/msalman_af" target="_blank">
                <TbBrandInstagram className="w-[32px] h-[32px] hover:scale-110 cursor-pointer transition-all hover:text-[#d62976]" />
              </a>
              <a href="https://linkedin.com/in/muhammadsalmoon" target="_blank">
                <TbBrandLinkedin className="w-[32px] h-[32px] hover:scale-110 cursor-pointer transition-all hover:text-[#0e76a8]" />
              </a>
              <a
                href="https://drive.google.com/file/d/1F8JYq7PKLtQajm4SxDNQgXEKJkCQOzlJ/view?usp=drive_link"
                target="_blank"
              >
                <TbPdf className="w-[32px] h-[32px] hover:scale-110 cursor-pointer transition-all hover:text-[#f40f02]" />
              </a>
            </div>
            <div className="flex items-end gap-1">
              <div className="w-[59px] h-[5px] bg-[#eaeaea] rounded-full my-1" />
              <h1 className="text-[48px] font-bold text-yellow-400 leading-[42px]">
                .
              </h1>
            </div>
            <h1 className="text-[48px] font-bold text-[#eaeaea] leading-[42px] cursor-default">
              Salman
            </h1>
            <code className="text-[14px] text-gray-400 cursor-default">
              front-end / user-interface / mobile-dev
            </code>
            <h1 className="text-[20px] lg:hidden md:block block text-[#eaeaeacc] leading-tight cursor-default text-left pb-4">
              a junior developer{" "}
              <span className="font-semibold text-[#eaeaea] hover:underline cursor-pointer">
                proficient
              </span>{" "}
              in front-end and design tools, crafting{" "}
              <span className="font-semibold text-[#eaeaea] hover:underline cursor-pointer">
                high quality websites
              </span>{" "}
              and web applications that deliver exceptional{" "}
              <span className="font-semibold text-[#eaeaea] hover:underline cursor-pointer">
                results
              </span>
              <span className="font-semibold text-cyan-400 hover:underline cursor-pointer">
                .
              </span>
            </h1>
            <div className="row-start-3 md:row-span-3 row-span-2 flex lg:flex-row md:flex-row flex-col w-full gap-2 md:h-[200px] h-fit">
              <div className="border-2 lg:w-1/2 w-full flex flex-col items-center justify-center p-5 gap-2 h-[180px] md:h-full">
                <div className="flex flex-row gap-2">
                  <div className="flex flex-col items-center justify-center">
                    <TbBrandLaravel className="stack-icon w-[42px] h-[42px] peer" />
                    <p className="stack-label scale-0 absolute cursor-default -translate-y-8 peer-hover:scale-100 transition-all duration-[.5s]">
                      Laravel
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <TbBrandGraphql className="stack-icon w-[42px] h-[42px] peer" />
                    <p className="stack-label scale-0 absolute cursor-default -translate-y-8 peer-hover:scale-100 transition-all duration-[.5s]">
                      GraphQL
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <TbChessKing className="stack-icon w-[42px] h-[42px] peer" />
                    <p className="stack-label scale-0 absolute cursor-default -translate-y-8 peer-hover:scale-100 transition-all duration-[.5s]">
                      Chess
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="flex flex-col items-center justify-center">
                    <TbBrandFigma className="stack-icon w-[42px] h-[42px] peer" />
                    <p className="stack-label scale-0 absolute cursor-default translate-y-8 peer-hover:scale-100 transition-all duration-[.5s]">
                      Figma
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <TbBrandReact className="stack-icon w-[42px] h-[42px] peer" />
                    <p className="stack-label scale-0 absolute cursor-default translate-y-8 peer-hover:scale-100 transition-all duration-[.5s]">
                      ReactJS
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <TbBrandTailwind className="stack-icon w-[42px] h-[42px] peer" />
                    <p className="stack-label scale-0 absolute cursor-default translate-y-8 peer-hover:scale-100 transition-all duration-[.5s]">
                      TailwindCSS
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="/blog"
                className="blog-container border-2 lg:w-1/2 w-full bg-[#eaeaea] flex flex-col items-center justify-center"
              >
                <p className="blog-text text-[#101010] text-[64px] cursor-pointer">
                  blog
                </p>
              </a>
            </div>
            <Button
              onClick={onToast}
              variant="outline"
              className="button bg-transparent border-2 my-2 rounded-none border-[#eaeaeacc] text-[#eaeaeacc] hover:bg-[#eaeaea] hover:text-[#101010] transition-all"
            >
              <span className="md:text-[20px] text-[18px]">let's talk</span>
              <FiCopy className="email-icon" />
            </Button>
          </div>
          {/* Right */}
          <div className="lg:grid lg:grid-rows-4 lg:grid-cols-1 hidden h-full">
            {/* Row Start 1 */}
            <div className="row-start-1 flex flex-col lg:justify-end items-end">
              <h1 className="text-[64px] font-semibold cursor-default text-[#eaeaea66] text-right leading-[42px]">
                minimalist
              </h1>
              <h1 className="text-[64px] font-semibold cursor-default text-[#eaeaea99] text-right leading-[42px]">
                simply
              </h1>
              <h1 className="text-[64px] font-semibold cursor-default text-[#eaeaeacc] text-right leading-[42px]">
                neat
              </h1>
            </div>
            {/* Row Start 2 */}
            <div className="row-start-2 flex flex-row justify-end items-center">
              <a
                href="https://open.spotify.com/playlist/74clBi8Er3mAlibOQPRex1?si=LFqeWKSgRbGxHrklO84A4Q"
                target="_blank"
                className="barcode cursor-pointer"
              >
                <img src={Spotify} alt="Spotify Barcode" />
              </a>
            </div>
            {/* Row Start 3 */}
            <div className="row-start-3 md:row-span-2 lg:row-span-2 flex flex-col lg:justify-between items-end pl-10">
              <div className="flex flex-col items-end border-r-4 pr-4">
                <h1 className="text-[24px] text-[#eaeaeacc] leading-tight cursor-default text-right">
                  a junior developer{" "}
                  <span className="font-semibold text-[#eaeaea] hover:underline cursor-pointer">
                    proficient
                  </span>{" "}
                  in front-end and design tools, crafting{" "}
                  <span className="font-semibold text-[#eaeaea] hover:underline cursor-pointer">
                    high quality websites
                  </span>{" "}
                  and web applications that deliver exceptional{" "}
                  <span className="font-semibold text-[#eaeaea] hover:underline cursor-pointer">
                    results
                  </span>
                  <span className="font-semibold text-cyan-400 hover:underline cursor-pointer">
                    .
                  </span>
                </h1>
                {/* <Button
                  variant="outline"
                  className="button bg-transparent border-2 mt-4 border-[#eaeaeacc] text-[#eaeaeacc] hover:bg-[#eaeaea] hover:text-[#101010] transition-all"
                >
                  salmanalfarisi261002@gmail.com{" "}
                  <FiCopy className="email-icon" />
                </Button> */}
              </div>
              {/* Scroll Button */}
              <a
                onClick={() => {
                  scrollTo("about");
                }}
                className="h-[100px] w-[50px] rounded-full border-4 border-[#eaeaeacc] my-10 flex justify-center py-2 cursor-pointer pointer-container"
              >
                <div className="w-[25px] h-[25px] rounded-full bg-[#eaeaea] pointer-scroll"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
