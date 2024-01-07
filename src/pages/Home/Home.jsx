import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/images/image/banner.png";
import project1 from "../../assets/images/image/project1.png";
import project2 from "../../assets/images/image/project2.png";
import project3 from "../../assets/images/image/project3.png";
import { ROUTES } from "../../routes/RouterConfig";

const Home = () => {
  const navigate = useNavigate();

  const changeDir = (dir) => {
    navigate(dir);
  };

  return (
    <div className="bg-[#0D0D0D] min-h-[100vh]">
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center custom-tracking text-[200px] text-[#fff] opacity-[10%] leading-[240px] font-normal mt-[-6%]">
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
        <div className="text-center custom-tracking text-[200px] text-[#fff] opacity-[10%] leading-[240px] font-normal mb-[-6%]">
          MANWANI
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mx-[420px] py-[440px] font-normal">
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
      <div className="pb-[440px]">
        <div className="flex text-[#fff] items-center justify-center gap-[450px] custom-fonts">
          <div className="text-center">
            <div className="text-[20px] font-semibold">Autumn</div>
            <div className="text-[14px] font-normal leading-normal">
              Jan 2015 - July 2018
            </div>
          </div>
          <div className="text-center">
            <div className="text-[20px] font-semibold">Google Inc.</div>
            <div className="text-[14px] font-normal leading-normal">
              March 2015 - Dec 2018
            </div>
          </div>
          <div className="text-center">
            <div className="text-[20px] font-semibold">Zluri</div>
            <div className="text-[14px] font-normal leading-normal">
              March 2015 - Dec 2018
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="h-px bg-white w-[600px]"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="h-px bg-white w-[600px]"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center justify-center cursor-pointer">
        <div className="relative group">
          <img src={project1} alt="" className="w-full h-full object-cover" />
            <div className="text-[120px] font-normal custom-spacing absolute inset-0 bg-black opacity-50 text-[#fff] flex items-center justify-center">
              onesta
            </div>
            <div className="opacity-0 group-hover:opacity-100 absolute text-white text-center px-4 bottom-72 left-24">
              <ul className="list-disc">
                <li>Description item 1</li>
                <li>Description item 2</li>
                <li>Description item 3</li>
              </ul>
            </div>
        </div>
        <div className="relative group">
          <img src={project2} alt="" className="w-full h-full object-cover" />
          <div className="text-[120px] font-normal custom-spacing absolute inset-0 bg-black opacity-50 text-[#fff] flex items-center justify-center">
            nexus
          </div>
          <div className="opacity-0 group-hover:opacity-100 absolute text-white text-center px-4 bottom-72 left-24">
            <ul className="list-disc">
              <li>Description item 1</li>
              <li>Description item 2</li>
              <li>Description item 3</li>
            </ul>
          </div>
        </div>
        <div className="relative group">
          <img src={project3} alt="" className="w-full h-full object-cover" />
          <div className="text-[120px] font-normal custom-spacing absolute inset-0 bg-black opacity-50 text-[#fff] flex items-center justify-center">
            Toquiri
          </div>
          <div className="opacity-0 group-hover:opacity-100 absolute text-white text-center px-4 bottom-72 left-24">
            <ul className="list-disc">
              <li>Description item 1</li>
              <li>Description item 2</li>
              <li>Description item 3</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-[252px] text-center">
        <h3 className="text-[128px] custom-spacing text-[#fff]">
          let’s connect?
        </h3>
      </div>
    </div>
  );
};

export default Home;
