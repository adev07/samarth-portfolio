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
  const voulenteerSectionRef = useRef(null);

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

  const handleVoulenteerClick = () => {
    voulenteerSectionRef.current.scrollIntoView({
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
    <div className="bg-[#0D0D0D] scroll-smooth relative px-[28px] sm:px-[0px]">
      <div className="sticky top-0 z-[100]">
        <div className="sm:text-end z-[100] text-center pt-8 mr-8 absolute sm:top-1 sm:right-1 ">
          <Dropdown
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
                <button
                  onClick={handleVoulenteerClick}
                  className="py-[2px] custom-fonts"
                >
                  Voulenteer
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
          </Dropdown>
        </div>
      </div>
      <div className="flex flex-col items-center min-h-[100vh] justify-center sm:overflow-hidden w-[100%] top-0 left-0">
        <div className="text-center sm:tracking-[79px] tracking-[25.67px] sm:text-[200px] text-[64px] text-[#fff] opacity-[10%] sm:leading-[240px] font-normal mt-[-5%]">
          SAMARTH
        </div>
        <div className="flex flex-col items-center justify-center my-[64px]">
          <div>
            <img
              src={banner}
              alt=""
              className="sm:h-[100%] sm:w-[100%] h-[232px] w-[341.176px] object-cover"
            />
          </div>
          <div className="text-white text-[16px] leading-[19.36px] custom-fonts mt-[30px]">
            Backend | Dev ops
          </div>
        </div>
        <div className="text-center sm:tracking-[79px] tracking-[25.67px] sm:text-[200px] text-[64px] text-[#fff] opacity-[10%] sm:leading-[240px] font-normal mb-[-5%]">
          MANWANI
        </div>
      </div>
      <div
        id="aboutSection"
        ref={aboutSectionRef}
        className="font-normal min-h-[100vh] sm:my-[120px]"
      >
        <div className="sm:mx-[64px]">
          <h3 className="text-[#fff] text-[24px] custom-spacing-title">
            About me
          </h3>
          <div class="border-t-4  border-[#FF4C00] w-[20px] p-2"></div>
        </div>
        <div className="flex flex-col sm:justify-center sm:items-center sm:mt-[150px] sm:w-[778px] mx-auto">
          <div className="text-[#fff] sm:text-[128px] text-[44px] sm:tracking-[24.50px] tracking-[4.4px] sm:leading-[153.6px]">
            I’m samarth
          </div>
          <div className="custom-fonts text-[#fff] sm:leading-[19.36px] sm:text-[16px] text-[14px] text-justify">
            Greetings, I am Samarth Desai, an imaginative individual based in
            the vibrant city of Mumbai, where the fusion of culture and
            technology ignites my passion for design and development. With a
            journey spanning over three enriching years, I've cultivated a deep
            understanding of the intricacies involved in creating captivating
            mobile and web experiences. Armed with my proficiency in a versatile
            set of tools and technologies, including React Native, Java, and
            Vue.js, I embark on a quest to shape digital landscapes that
            seamlessly blend functionality with aesthetics.
          </div>
          <div className="mt-2 custom-fonts text-[#fff] sm:leading-[19.36px] sm:text-[16px] text-[14px] text-justify">
            Currently navigating the exciting challenges at InnovateTech, I find
            joy in the continuous learning journey. If you're passionate about
            tech or design, let's connect and explore the possibilities
            together. Don't hesitate to book a slot on my calendar—I'm always up
            for inspiring conversations! And just make ars, I've cultivated a
            deep understanding of the intricacies involved in creating
            captivating mobile and s
          </div>
        </div>
        <div className="flex gap-4 mt-[20px] items-center justify-center">
          <div className="bg-[#111111] sm:p-[15px] p-[12px] rounded-[4px]">
            <img src={github} alt="" />
          </div>
          <div className="bg-[#111111] sm:p-[15px] p-[12px] rounded-[4px]">
            <img src={insta} alt="" />
          </div>
          <div className="bg-[#111111] sm:p-[15px] p-[12px] rounded-[4px]">
            <img src={linkdein} alt="" />
          </div>
        </div>
      </div>

      <div
        id="journeySection"
        ref={journeySectionRef}
        className="min-h-[100vh] sm:my-[120px]"
      >
        <div className="sm:mx-[64px]">
          <h3 className="text-[#fff] text-[24px] custom-spacing-title">
            MY EXPERIENCE
          </h3>
          <div class="border-t-4 border-[#FF4C00] w-[20px] p-2"></div>
        </div>
        <div className="sm:mt-[260px] mt-[120px]">
          <div className="flex sm:flex-row flex-col text-[#fff] items-center justify-center gap-[260px] custom-fonts">
            <div className="text-center hidden sm:block">
              <div className="text-[16px] font-semibold">Packet Fanatic</div>
              <div className="text-[14px] font-normal leading-normal">
                Jan 2021 - Jun 2021
              </div>
            </div>
            <div className="text-center hidden sm:block">
              <div className="text-[16px] font-semibold">Samsung R&D</div>
              <div className="text-[14px] font-normal leading-normal">
                June 2021 - June 2022
              </div>
            </div>
            <div className="text-center hidden sm:block">
              <div className="text-[16px] font-semibold">Zluri</div>
              <div className="text-[14px] font-normal leading-normal">
                Jul 2021 - Present
              </div>
            </div>
            <div className="text-center hidden sm:block">
              <div className="text-[16px] font-semibold">Codeclock</div>
              <div className="text-[14px] font-normal leading-normal">
                Aug 2023 - Present
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-2">
            <div className="hidden sm:block w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
            <div className="hidden sm:block h-[4px] bg-white w-[380px]"></div>
            <div className="hidden sm:block w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
            <div className="hidden sm:block h-[4px] bg-white w-[380px]"></div>
            <div className="hidden sm:block w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
            <div className="hidden sm:block h-[4px] bg-white w-[380px]"></div>
            <div className="hidden sm:block w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
            {/* <!-- Vertical lines for mobile screens --> */}
            <div className="flex flex-col gap-40 absolute">
              <div className="sm:hidden w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
              <div className="sm:hidden w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
            </div>
            <div className="flex flex-col gap-20 sm:hidden">
              <div className="text-center text-[#ffff] custom-fonts">
                <div className="text-[16px] font-semibold">Packet Fanatic</div>
                <div className="text-[14px] font-normal leading-normal">
                  Jan 2021 - Jun 2021
                </div>
              </div>
              <div className="text-center text-[#ffff] custom-fonts">
                <div className="text-[16px] font-semibold">Packet Fanatic</div>
                <div className="text-[14px] font-normal leading-normal">
                  Jan 2021 - Jun 2021
                </div>
              </div>
            </div>
            <div className="block sm:hidden w-[4px] h-[380px] bg-white"></div>
            <div className="flex flex-col gap-96 absolute">
              <div className="sm:hidden w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
              <div className="sm:hidden w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
            </div>
            <div className="flex flex-col gap-80 sm:hidden">
              <div className="text-center text-[#ffff] custom-fonts">
                <div className="text-[16px] font-semibold">Packet Fanatic</div>
                <div className="text-[14px] font-normal leading-normal">
                  Jan 2021 - Jun 2021
                </div>
              </div>
              <div className="text-center text-[#ffff] custom-fonts">
                <div className="text-[16px] font-semibold">Packet Fanatic</div>
                <div className="text-[14px] font-normal leading-normal">
                  Jan 2021 - Jun 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Section Start */}
      <div
        className="min-h-[100vh] sm:my-[120px]"
        id="projectsSection"
        ref={projectsSectionRef}
      >
        <div className="sm:mx-[64px]">
          <h3 className="text-[#fff] text-[24px] custom-spacing-title">
            MY PROJECTS
          </h3>
          <div class="border-t-4 border-[#FF4C00] w-[20px] p-2"></div>
        </div>
        <div className="sm:mt-[150px]">
          <div className="grid-cols-1 grid sm:grid-cols-5 gap-[28px]">
            <div></div>
            {projects.map((project, index) => (
              <div key={index}>
                <div
                  style={{ backgroundColor: project.color }}
                  className="flex rounded-[8px] items-center justify-center h-[190px]"
                >
                  <div>
                    <img className="object-fill" src={project.image} alt="" />
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
          </div>
          <div></div>
        </div>
      </div>
      {/* Project Section End */}

      {/* Voulenteer Section Start */}
      {/* <div
        className="min-h-[100vh] sm:my-[120px]"
        id="voulenteerSection"
        ref={voulenteerSectionRef}
      >
        <div className="sm:mx-[64px]">
          <h3 className="text-[#fff] text-[24px] custom-spacing-title">
            volunteering
          </h3>
          <div class="border-t-4 border-[#FF4C00] w-[20px] p-2"></div>
        </div>
        <div className="mt-[150px]">
          <div className="grid grid-cols-2 justify-center items-center gap-[24px] mx-[180px]">
            <div className="group cursor-pointer col-span-1 rounded-[8px] text-[#fff] relative flex flex-col justify-center items-center text-center">
              <img
                className="rounded-[8px] grayscale transition-transform transform group-hover:blur-[4px] group-hover:grayscale-0"
                src={voulenteer}
                alt=""
              />
              <div className="absolute top-4 left-6 custom-fonts text-start group-hover:hidden">
                <h3 className="text-[18px] font-bold">
                  GDSC / HUBLI, KARNATAKA
                </h3>
                <p className="text-[16px]">2023, JUN - 2024, AUG</p>
              </div>
              <div className="absolute top-0 bottom-0 flex justify-center items-center mx-[42px] custom-fonts text-[15px] opacity-0 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                qui excepturi cupiditate eos veritatis, magni maxime fugit
                facilis est in possimus velit iste temporibus praesentium
                accusantium quos dolores delectus animi.
              </div>
            </div>

            <div className="group cursor-pointer col-span-1 rounded-[8px] text-[#fff] relative flex flex-col justify-center items-center text-center">
              <img
                className="rounded-[8px] grayscale transition-transform transform group-hover:blur-[4px] group-hover:grayscale-0"
                src={voulenteer}
                alt=""
              />
              <div className="absolute top-4 left-6 custom-fonts text-start group-hover:hidden">
                <h3 className="text-[18px] font-bold">
                  GDSC / HUBLI, KARNATAKA
                </h3>
                <p className="text-[16px]">2023, JUN - 2024, AUG</p>
              </div>
              <div className="absolute top-0 bottom-0 flex justify-center items-center mx-[42px] custom-fonts text-[15px] opacity-0 group-hover:opacity-100">
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
                className="rounded-[8px] grayscale transition-transform transform group-hover:blur-[4px] group-hover:grayscale-0"
                src={voulenteer}
                alt=""
              />
              <div className="absolute top-4 left-6 custom-fonts text-start group-hover:hidden">
                <h3 className="text-[18px] font-bold">
                  GDSC / HUBLI, KARNATAKA
                </h3>
                <p className="text-[16px]">2023, JUN - 2024, AUG</p>
              </div>
              <div className="absolute top-0 bottom-0 flex justify-center items-center mx-[42px] custom-fonts text-[15px] opacity-0 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                qui excepturi cupiditate eos veritatis, magni maxime fugit
                facilis est in possimus velit iste temporibus praesentium
                accusantium quos dolores delectus animi.
              </div>
            </div>
            <div className="group cursor-pointer col-span-1 rounded-[8px] text-[#fff] relative flex flex-col justify-center items-center text-center">
              <img
                className="rounded-[8px] grayscale transition-transform transform group-hover:blur-[4px] group-hover:grayscale-0"
                src={voulenteer}
                alt=""
              />
              <div className="absolute top-4 left-6 custom-fonts text-start group-hover:hidden">
                <h3 className="text-[18px] font-bold">
                  GDSC / HUBLI, KARNATAKA
                </h3>
                <p className="text-[16px]">2023, JUN - 2024, AUG</p>
              </div>
              <div className="absolute top-0 bottom-0 flex justify-center items-center mx-[42px] custom-fonts text-[15px] opacity-0 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                qui excepturi cupiditate eos veritatis, magni maxime fugit
                facilis est in possimus velit iste temporibus praesentium
                accusantium quos dolores delectus animi.
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-[#292929] py-[20px]">
        <div className="flex justify-between mx-[28px] text-[#fff] footer-font footer-spacing text-[22px]">
          <h3>© {currentYear} All rights reserved </h3>
          <h3>designed by naman anand</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
