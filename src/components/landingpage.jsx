import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
function LandingPage() {
 
    return (
      <div data-scroll data-scroll-speed='-.3' className="w-full h-screen bg-white pt-1">
        <div className="textstructure mt-52 px-20">
          {["We Create", "Eye-Opening", "presentation"].map((item, index) => {
            return (
              <div className="masker ">
                <div className="w-fit flex overflow-hiddin">
                  {index === 1 && (
                    // <motion.div
                    //   // initial={{
                    //   //   width: 0,
                    //   // }}
                    //   // animate={{ width: "9vw" }}
                    //   // transition={{ ease: [0.12, 0, 0.39, 0], duration: 1 }}
                    //   // className=" mr-[1vw] w-[9vw] h-[5vw] rounded-md relative bg-red-500 -top-[1vw] "
                    // >
                      <motion.img
                        initial={{
                          width: 0,
                        }}
                        animate={{ width: "9vw" }}
                        transition={{ ease: [0.12, 0, 0.39, 0], duration: .9 }}
                        className=" mr-[1vw] w-[9vw] h-[5vw] rounded-md relative bg-red-500 -top-[1vw]"
                        src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                        alt=""
                      />
                    // </motion.div>
                  )}

                  <h1 className="text-[8vw] uppercase leading-[6vw] tracking-tighter font-['Founders_Grotesk'] font-medium">
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-20 flex js justify-between item-center py-5 px-20">
          {[
            "for public and private companies",
            "From the Fisrt piuch to IPO",
          ].map((item, index) => (
            <p className="text-md font-light tracking-tight capitalize leading-none">
              {item}
            </p>
          ))}
          <div className="start flex item-center gap-5">
            <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md uppercase">
              start the project
            </div>
            <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
              <span className="rotate-[45deg]">
                <FaLongArrowAltUp />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}
export default LandingPage;