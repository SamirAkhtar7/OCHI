import { motion } from "framer-motion";

 

import React from "react";
function About() {
 
  return (
    <div
      data-scroll
      data-section
      data-scroll-speed=".2"
      className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className="font-['Neue_Montreal'] text-[3vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>

      <div className="expect mt-[10vh] font-['Neue_Montreal'] py-[8vh] border-t-[1px] border-[#a1b562]  w-full h-[50vh] flex gap-10">
        <div className="first font-['Neue_Montreal']  w-1/3 h-full  p-2 ">
          <p>What you can expect:</p>
        </div>
        <div className="second w-1/4 h-full font-['Neue_Montreal'] p-2">
          <div className="top font-['Neue_Montreal']">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
          </div>
          <div className="buttom font-['Neue_Montreal'] pt-10 ">
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
        </div>
        <div className="third w-1/3 h-full px-[10vw] p-2 font-['Neue_Montreal'] ">
          <p className="pt-20  ">S:</p>
          <div className="link flex flex-col">
            <a className="text-black  " href="#">
              Instagram
            </a>
            <a className="text-black  " href="#">
              Facebook
            </a>
            <a className="text-black  " href="#">
              Linkedin
            </a>
          </div>
        </div>
      </div>

      <div className="W-full flex gap-5  border-t-[1px] pt-5 mt-20 border-[#a1b562] ">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl pl-20 ">
          <img className="rounded-3xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default About;
