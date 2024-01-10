import React, { useRef } from "react";
import { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/images/image/banner.png";
import project1 from "../../assets/images/image/project1.png";
import project2 from "../../assets/images/image/project2.png";
import project3 from "../../assets/images/image/project3.png";
import gmail from "../../assets/images/icons/Icons Here.png";
import linkdein from "../../assets/images/icons/linkedin (1).png";
import { ROUTES } from "../../routes/RouterConfig";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
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

  return (
    <div className="bg-[#0D0D0D] min-h-[100vh] scroll-smooth relative">
      <div className="sticky top-0 z-[100]">
      <div className="text-end z-[100] pt-8 mr-8 absolute top-1 right-1">
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
        className="flex flex-col justify-center items-center mx-[420px] py-[400px] font-normal"
      >
        <div className="text-[#fff] text-[128px] custom-spacing leading-[153.6px]">
          I’m samarth
        </div>
        <div className="custom-fonts text-[#fff] leading-[19.36px]">
          lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <div className="mt-2 custom-fonts text-[#fff] leading-[19.36px]">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.orem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </div>
      </div>
      <div id="journeySection" ref={journeySectionRef} className="py-[400px]">
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
      <div
        id="projectsSection"
        ref={projectsSectionRef}
        className="flex items-center justify-center cursor-pointer"
      >
        <div className="relative group">
          <img
            src={project1}
            alt="Project 1"
            className="w-[620px] h-[975px] grayscale transition duration-300 ease-in-out group-hover:grayscale-0"
          />
          <div className="text-[120px] font-normal custom-spacing absolute inset-0 bg-black opacity-50 text-[#fff] flex items-center justify-center">
            Autumn
          </div>
        </div>
        <div className="relative group">
          <img
            src={project2}
            alt="Project 2"
            className="w-[620px] h-[975px] grayscale transition duration-300 ease-in-out group-hover:grayscale-0"
          />
          <div className="text-[120px] font-normal custom-spacing absolute inset-0 bg-black opacity-50 text-[#fff] flex items-center justify-center">
            HandsOn
          </div>
        </div>
        <div className="relative group">
          <img
            src={project1}
            alt="Project 2"
            className="w-[620px] h-[975px] grayscale transition duration-300 ease-in-out group-hover:grayscale-0"
          />
          <div className="text-[120px] font-normal custom-spacing absolute inset-0 bg-black opacity-50 text-[#fff] flex items-center justify-center">
            Autumn
          </div>
        </div>
      </div>
      <div>
        <div className="py-[90px] flex justify-between mx-[68px] items-center">
          <div className="text-[#fff]">
            <h3 className="text-[32px] custom-spacing-footer2">
              Samarth Manwani
            </h3>
            <p className="custom-fonts text-[13px] opacity-[50%] custom-spacing-footer">
              "Curiosity and consistency will always beat talent."
            </p>
          </div>
          <div>
            <div className="text-[#fff] pb-2 custom-fonts opacity-[50%] custom-spacing-footer">
              Let's Connect
            </div>
            <div className="flex gap-4 cursor-pointer">
              <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#fff] bg-opacity-[10%] rounded-full">
                <i className="text-[#fff] bi bi-google"></i>
              </div>
              <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#fff] bg-opacity-[10%] rounded-full">
                <i className="text-[#fff] bi bi-whatsapp"></i>
              </div>
              <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#fff] bg-opacity-[10%] rounded-full">
                <i class="text-[#fff] bi bi-linkedin"></i>
              </div>
              <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#fff] bg-opacity-[10%] rounded-full">
                <i class="text-[#fff] bi bi-github"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start pb-[34px] mx-[66px] gap-4">
          <div className="h-px bg-white w-full bg-opacity-[10%]"></div>
          <p className="custom-fonts text-[13px] opacity-[50%] text-[#fff] custom-spacing-footer">
            All right reversed, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
