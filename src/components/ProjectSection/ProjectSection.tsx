// Assets
import "./ProjectSection.css";
import Project1 from "../../assets/Moorbsday.png";
import Project2 from "../../assets/Magjin.png";
import Project3 from "../../assets/Msaf.png";

// Libraries
import { BsArrowUpRight } from "react-icons/bs";
import { TbArrowUpRight } from "react-icons/tb";
import { Badge } from "../../components/ui/badge";

function ProjectSection() {
  return (
    <section
      id="project"
      className="flex flex-col lg:flex-row items-center justify-center h-full w-full gap-10"
    >
      {/* Project Section */}
      <div className="lg:hidden flex flex-col justify-center">
        <h1 className="lg:text-[40px] text-[42px] cursor-default text-center text-[#eaeaea] w-full leading-tight">
          my{" "}
          <span className="font-semibold text-[60px] project-title">
            Projects
          </span>
          <span className="text-[100px] text-violet-400">.</span>
        </h1>
        <h2 className="text-center text-[#eaeaeadd] underline cursor-default underline-offset-4">
          things i have worked on.
        </h2>
      </div>
      <div className="lg:w-[55%] w-full md:px-10 lg:px-0 h-full flex flex-col items-center justify-center">
        <a href="https://moorbsday.fun" target="_blank">
          <div className="h-fit lg:w-[390px] md:w-[360px] w-[330px] project-container mb-3">
            <button className="project-button absolute z-50 m-3 bg-[#101010] w-[60px] h-[60px] flex flex-col items-center justify-center rounded-full shadow-md p-2">
              <BsArrowUpRight className="text-[30px]" />
            </button>
            <img
              src={Project1}
              alt="moorbday.fun"
              className="w-full h-full cursor-pointer"
            />
            <div className="absolute -translate-y-10 translate-x-3 h-[30px] flex flex-row gap-2 project-button-badge">
              <Badge className="h-full font-normal cursor-pointer">React</Badge>
              <Badge className="h-full font-normal cursor-pointer">
                Tailwind
              </Badge>
              <Badge className="h-full font-normal cursor-pointer">
                Framer
              </Badge>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/MuhammadSalmanAlfarisi/Japanese-CRUD"
          target="_blank"
        >
          <div className="h-fit lg:w-[390px] md:w-[360px] w-[330px] project-container mb-3">
            <button className="project-button absolute z-50 m-3 bg-[#101010] w-[60px] h-[60px] flex flex-col items-center justify-center rounded-full shadow-md p-2">
              <BsArrowUpRight className="text-[30px]" />
            </button>
            <img
              src={Project2}
              alt="magjin.test"
              className="w-full h-full cursor-pointer"
            />
            <div className="absolute -translate-y-10 translate-x-3 h-[30px] flex flex-row gap-2 project-button-badge">
              <Badge className="h-full font-normal cursor-pointer">
                Laravel
              </Badge>
              <Badge className="h-full font-normal cursor-pointer">
                Bootstrap
              </Badge>
            </div>
          </div>
        </a>
        <a href="https://msaf.vercel.app" target="_blank">
          <div className="h-fit lg:w-[390px] md:w-[360px] w-[330px] project-container lg:mb-4 mb-3">
            <button className="project-button absolute z-50 m-3 bg-[#101010] w-[60px] h-[60px] flex flex-col items-center justify-center rounded-full shadow-md p-2">
              <BsArrowUpRight className="text-[30px]" />
            </button>
            <img
              src={Project3}
              alt="msaf.vercel.app"
              className="w-full h-full cursor-pointer "
            />
            <div className="absolute -translate-y-10 translate-x-3 h-[30px] flex flex-row gap-2 project-button-badge">
              <Badge className="h-full font-normal cursor-pointer">React</Badge>
              <Badge className="h-full font-normal cursor-pointer">
                Tailwind
              </Badge>
            </div>
          </div>
        </a>
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <a href="https://github.com/muhammadsalmanalfarisi" target="_blank">
            <p className="hover:underline">see more</p>
          </a>
          <TbArrowUpRight className="w-[24px] h-[24px] cursor-default" />
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-center">
        <h1 className="lg:text-[35px] text-[42px] cursor-default text-center text-[#eaeaea] w-full leading-tight">
          my{" "}
          <span className="font-semibold text-[60px] project-title">
            Projects
          </span>
          <span className="text-[100px] text-violet-400">.</span>
        </h1>
        <h2 className="text-center text-[#eaeaeadd] underline cursor-default underline-offset-4">
          things i have worked on.
        </h2>
      </div>
    </section>
  );
}
export default ProjectSection;
