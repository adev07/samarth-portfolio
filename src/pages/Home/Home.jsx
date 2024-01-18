import React, { useRef } from "react";
import { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/images/image/banner.png";
import project1 from "../../assets/images/image/HandsOn.png";
import project2 from "../../assets/images/image/Autumn.png";
import project3 from "../../assets/images/image/stan.png";
import voulenteer from "../../assets/images/image/voulenteer.jpeg";
import github from "../../assets/images/image/git.png";
import insta from "../../assets/images/image/insta.png";
import linkdein from "../../assets/images/image/linkedin.png";
import { ROUTES } from "../../routes/RouterConfig";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const aboutSectionRef = useRef(null);
  const journeySectionRef = useRef(null);
  const projectsSectionRef = useRef(null);

  const changeDir = (dir) => {
    navigate(dir);
  };

  const handleAboutClick = () => {
    aboutSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleJourneyClick = () => {
    journeySectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleProjectsClick = () => {
    projectsSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const projects = [
    {
      name: "Handson",
      color: "#F2C347",
      image: project1,
      description:
        "Experienced with various B2B products, Shopify, WP with awesome solutions for business clients.",
      technologies: "Flutter | Node.js | Firebase",
      border: "#F2C347",
    },
    {
      name: "Autumn",
      color: "#F25C54",
      image: project2,
      description:
        "Experienced with various B2B products, Shopify, WP with awesome solutions for business clients.",
      technologies: "Flutter | Node.js | Firebase",
      border: "#F25C54",
    },
    {
      name: "Stan",
      color: "#6355FF",
      image: project3,
      description:
        "Experienced with various B2B products, Shopify, WP with awesome solutions for business clients.",
      technologies: "Flutter | Node.js | Firebase",
      border: "#6355FF",
    },
  ];

  return (
    <div className="bg-[#0D0D0D] min-h-[100vh] scroll-smooth relative">
      <div className="sticky top-0 z-[100]">
        <div className="text-end z-[100] pt-8 mr-8 absolute top-1 right-1">
          {/* <Dropdown
            placement="bottomLeft"
            dropdownRender={() => (
              <div className="bg-[#0D0D0D] text-white flex flex-col items-start">
                <button
                  onClick={handleAboutClick}
                  className="py-[2px] custom-fonts"
                >
                  About
                </button>
                <button
                  onClick={handleJourneyClick}
                  className="py-[2px] custom-fonts"
                >
                  Journey
                </button>
                <button
                  onClick={handleProjectsClick}
                  className="py-[2px] custom-fonts"
                >
                  Projects
                </button>
              </div>
            )}
          >
            <div className="flex justify-center items-center text-[#fff] custom-fonts text-[14px] cursor-pointer">
              <p>Introduction</p>
              <div>
                <i className="bi bi-caret-down-fill p-2"></i>
              </div>
            </div>
          </Dropdown> */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center overflow-hidden w-[100%] top-0 left-0">
        <div className="text-center custom-tracking text-[200px] text-[#fff] opacity-[10%] leading-[240px] font-normal mt-[-5%]">
          SAMARTH
        </div>

        <div className="flex flex-col items-center justify-center my-[64px]">
          <div>
            <img src={banner} alt="" />
          </div>
          <div className="text-white text-[16px] leading-[19.36px] custom-fonts mt-[30px]">
            Backend | Dev ops
          </div>
        </div>
        <div className="text-center custom-tracking text-[200px] text-[#fff] opacity-[10%] leading-[240px] font-normal mb-[-5%]">
          MANWANI
        </div>
      </div>
      <div
        id="aboutSection"
        ref={aboutSectionRef}
        className="font-normal py-[320px]"
      >
        <div className="mx-[64px]">
          <h3 className="text-[#fff] text-[24px] custom-spacing-title">
            About me
          </h3>
          <div class="border-t-4  border-[#FF4C00] w-[20px] p-2"></div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[150px] mx-[365px]">
          <div className="text-[#fff] text-[128px] custom-spacing-top leading-[153.6px]">
            I’m samarth
          </div>
          <div className="custom-fonts text-[#fff] leading-[19.36px] text-[16px] text-justify">
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <div className="mt-2 custom-fonts text-[#fff] leading-[19.36px] text-justify">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.orem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.
          </div>
          <div className="flex gap-4 mt-[20px]">
            <div className="bg-[#111111] p-[15px] rounded-[4px]">
              <img src={github} alt="" />
            </div>
            <div className="bg-[#111111] p-[15px] rounded-[4px]">
              <img src={insta} alt="" />
            </div>
            <div className="bg-[#111111] p-[15px] rounded-[4px]">
              <img src={linkdein} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div id="journeySection" ref={journeySectionRef}>
        <div className="mx-[64px]">
          <h3 className="text-[#fff] text-[24px] custom-spacing-title">
            MY EXPERIENCE
          </h3>
          <div class="border-t-4 border-[#FF4C00] w-[20px] p-2"></div>
        </div>
        <div className="py-[320px]">
          <div className="flex text-[#fff] items-center justify-center gap-[260px] custom-fonts">
            <div className="text-center">
              <div className="text-[16px] font-semibold">Packet Fanatic</div>
              <div className="text-[14px] font-normal leading-normal">
                Jan 2021 - Jun 2021
              </div>
            </div>
            <div className="text-center">
              <div className="text-[16px] font-semibold">Samsung R&D</div>
              <div className="text-[14px] font-normal leading-normal">
                June 2021 - June 2022
              </div>
            </div>
            <div className="text-center">
              <div className="text-[16px] font-semibold">Zluri</div>
              <div className="text-[14px] font-normal leading-normal">
                Jul 2021 - Present
              </div>
            </div>
            <div className="text-center">
              <div className="text-[16px] font-semibold">Codeclock</div>
              <div className="text-[14px] font-normal leading-normal">
                Aug 2023 - Present
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="h-px bg-white w-[380px]"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="h-px bg-white w-[380px]"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="h-px bg-white w-[380px]"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Project Section Start */}

      <div className="py-[320px]" id="projectsSection" ref={projectsSectionRef}>
        <div className="mx-[64px]">
          <h3 className="text-[#fff] text-[24px] custom-spacing-title">
            MY PROJECTS
          </h3>
          <div class="border-t-4 border-[#FF4C00] w-[20px] p-2"></div>
        </div>
        <div className="mt-[150px]">
          <div className="grid grid-cols-5 gap-[24px]">
            <div className="col-span-1"></div>
            {projects.map((project, index) => (
              <div key={index} className="col-span-1">
                <div
                  style={{ backgroundColor: project.color }}
                  className="flex rounded-[8px] items-center justify-center h-[190px]"
                >
                  <div>
                    <img src={project.image} alt="" />
                  </div>
                </div>
                <div className="mx-2">
                  <div className="flex justify-between mt-2">
                    <h3 className="text-[#FFF] custom-fonts text-[20px]">
                      {project.name}
                    </h3>
                    <i className="text-[#FFF] bi bi-box-arrow-up-right"></i>
                  </div>
                  <div className="text-[#fff] text-[14px] custom-fonts">
                    {project.description}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <div className="text-[#ffff] custom-fonts text-[14px] whitespace-nowrap">
                      {project.technologies}
                    </div>
                    <div
                      style={{ borderColor: project.border }}
                      className="border-t-4 w-full p-2 mt-2"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
      {/* Project Section End */}

      {/* Voulenteer Section Start */}
      <div className="py-[320px]" id="voulenteerSection">
        <div className="mx-[64px]">
          <h3 className="text-[#fff] text-[24px] custom-spacing-title">
            volunteering
          </h3>
          <div class="border-t-4 border-[#FF4C00] w-[20px] p-2"></div>
        </div>
        <div className="mt-[150px]">
          <div className="grid grid-cols-2 justify-center items-center gap-[24px] mx-[180px]">
            <div className="group cursor-pointer col-span-1 rounded-[8px] text-[#fff] relative flex flex-col justify-center items-center text-center">
              <img
                className="rounded-[8px] grayscale transition-transform transform group-hover:blur-[2px] group-hover:grayscale-0"
                src={voulenteer}
                alt=""
              />
              <div className="absolute top-4 left-6 custom-fonts text-start">
                <h3 className="text-[18px] font-bold">
                  GDSC / HUBLI, KARNATAKA
                </h3>
                <p className="text-[16px]">2023, JUN - 2024, AUG</p>
              </div>
              <div className="absolute top-[130px]  bottom-0 flex justify-center items-center mx-[42px] custom-fonts text-[15px] opacity-0 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                qui excepturi cupiditate eos veritatis, magni maxime fugit
                facilis est in possimus velit iste temporibus praesentium
                accusantium quos dolores delectus animi.
              </div>
            </div>

            <div className="group cursor-pointer col-span-1 rounded-[8px] text-[#fff] relative flex flex-col justify-center items-center text-center">
              <img
                className="rounded-[8px] grayscale transition-transform transform group-hover:blur-[2px] group-hover:grayscale-0"
                src={voulenteer}
                alt=""
              />
              <div className="absolute top-4 left-6 custom-fonts text-start">
                <h3 className="text-[18px] font-bold">
                  GDSC / HUBLI, KARNATAKA
                </h3>
                <p className="text-[16px]">2023, JUN - 2024, AUG</p>
              </div>
              <div className="absolute top-[130px]  bottom-0 flex justify-center items-center mx-[42px] custom-fonts text-[15px] opacity-0 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                qui excepturi cupiditate eos veritatis, magni maxime fugit
                facilis est in possimus velit iste temporibus praesentium
                accusantium quos dolores delectus animi.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-center items-center gap-[24px] mx-[180px] mt-[24px]">
            <div className="group cursor-pointer col-span-1 rounded-[8px] text-[#fff] relative flex flex-col justify-center items-center text-center">
              <img
                className="rounded-[8px] grayscale transition-transform transform group-hover:blur-[2px] group-hover:grayscale-0"
                src={voulenteer}
                alt=""
              />
              <div className="absolute top-4 left-6 custom-fonts text-start">
                <h3 className="text-[18px] font-bold">
                  GDSC / HUBLI, KARNATAKA
                </h3>
                <p className="text-[16px]">2023, JUN - 2024, AUG</p>
              </div>
              <div className="absolute top-[130px]  bottom-0 flex justify-center items-center mx-[42px] custom-fonts text-[15px] opacity-0 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                qui excepturi cupiditate eos veritatis, magni maxime fugit
                facilis est in possimus velit iste temporibus praesentium
                accusantium quos dolores delectus animi.
              </div>
            </div>
            <div className="group cursor-pointer col-span-1 rounded-[8px] text-[#fff] relative flex flex-col justify-center items-center text-center">
              <img
                className="rounded-[8px] grayscale transition-transform transform group-hover:blur-[2px] group-hover:grayscale-0"
                src={voulenteer}
                alt=""
              />
              <div className="absolute top-4 left-6 custom-fonts text-start">
                <h3 className="text-[18px] font-bold">
                  GDSC / HUBLI, KARNATAKA
                </h3>
                <p className="text-[16px]">2023, JUN - 2024, AUG</p>
              </div>
              <div className="absolute top-[130px]  bottom-0 flex justify-center items-center mx-[42px] custom-fonts text-[15px] opacity-0 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                qui excepturi cupiditate eos veritatis, magni maxime fugit
                facilis est in possimus velit iste temporibus praesentium
                accusantium quos dolores delectus animi.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#292929] py-2">
        <div className="flex justify-between mx-[28px] text-[#fff] text-[18px]">
          <h3>© {currentYear} All rights reserved </h3>
          <h3>designed by naman anand</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
