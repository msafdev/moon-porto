// Assets
import "./AboutSection.css";

// Libraries
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function AboutSection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center justify-center h-full w-full gap-10"
    >
      {/* About Section */}
      <div className="flex flex-col justify-center">
        <h1 className="lg:text-[35px] text-[42px] cursor-default text-center text-[#eaeaea] w-full leading-tight">
          about{" "}
          <span className="font-semibold text-[60px] about-title">Moon</span>
          <span className="text-[100px] leading-none text-violet-400">.</span>
        </h1>
        <h2 className="text-center text-[#eaeaeadd] underline cursor-default underline-offset-4">
          a tidbit about me.
        </h2>
      </div>
      <div className="lg:w-[55%] w-full md:px-10 lg:px-0">
        {/* Accordion */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Who is "Moon"?</AccordionTrigger>
            <AccordionContent className="text-[14px] cursor-default">
              "Moon" is a derivative of my name,{" "}
              <span className="font-semibold">Salman</span>. A 3rd year Computer
              Engineering student who is passionate about{" "}
              <span className="font-semibold">web development</span>. I love
              simplistic layouts and designs, but still have a modern and fun
              looks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Where do you live?</AccordionTrigger>
            <AccordionContent className="text-[14px] cursor-default">
              I live in{" "}
              <span className="font-semibold">Jakarta, Indonesia</span>, but I
              am currently doing my study in{" "}
              <span className="font-semibold">
                University of Diponegoro, Semarang
              </span>
              .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What are you looking for?</AccordionTrigger>
            <AccordionContent className="text-[14px] cursor-default">
              I am looking for{" "}
              <span className="font-semibold">
                freelance
                <span className="font-normal">
                  ,{" "}
                  <span className="font-semibold">
                    collaboration<span className="font-normal">, </span>
                  </span>
                </span>{" "}
                <span className="font-normal">and</span> internship
              </span>{" "}
              opportunities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Are you open for remote jobs?</AccordionTrigger>
            <AccordionContent className="text-[14px] cursor-default">
              I am open for both <span className="font-semibold ">remote</span>{" "}
              and <span className="font-semibold ">in-office</span> jobs, but I
              prefer remote jobs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What are your expertise?</AccordionTrigger>
            <AccordionContent className="text-[14px] cursor-default">
              My current expertise is{" "}
              <span className="font-semibold ">
                front-end website development
              </span>{" "}
              and focusing on design and user experience. I am also familiar
              with{" "}
              <span className="label-be">
                back-end development <code className="skill-be">(laravel)</code>
              </span>
              ,{" "}
              <span className="label-algo">
                algorithm <code className="skill-algo">(leetcode)</code>
              </span>
              , and{" "}
              <span className="label-ml">
                mobile app development{" "}
                <code className="skill-ml">(react native)</code>
              </span>
              .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Where can I see your projects?</AccordionTrigger>
            <AccordionContent className="text-[14px] cursor-default">
              You can see all of my projects on my{" "}
              <a
                href="https://github.com/muhammadsalmanalfarisi"
                target="_blank"
                className="font-semibold  hover:underline cursor-pointer"
              >
                Github
              </a>
              , but I also have a few shown{" "}
              <a
                onClick={() => scrollTo("project")}
                className="font-semibold  hover:underline cursor-pointer"
              >
                here
              </a>
              .
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
export default AboutSection;
