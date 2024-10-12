import React from 'react'

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100  text-white flex items-center px-32 gap-5">
      <div className="cardcontainer w-1/2 h-[50vh]  ">
        <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 border-[#CDEA68] rounded-full text-[#CDEA68]">
            &copy; 2023-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]  ">
        <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full ">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-5 bottom-10 px-5 py-1 border-2 rounded-full ">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards