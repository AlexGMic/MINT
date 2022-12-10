import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SecondData } from "../secondData";

function About() {
  const [current, setCurrent] = useState(0);

  const prevBtn = () => {
    setCurrent(current === 0 ? SecondData.length - 1 : current - 1);
  };
  const nextBtn = () => {
    setCurrent(current === SecondData.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    let slideTime = setTimeout(() => {
      setCurrent(current === SecondData.length - 1 ? 0 : current + 1);
    }, 7000);
    return () => clearTimeout(slideTime);
  }, [current]);
  return (
    <div className="bg-[#262963] p-2 w-[100%] mb-[2rem]" id="About">
      <div className="text-center mt-10">
        <h1 className="text-white text-[30px] font-extrabold  tracking-[1px]">
          About Us
        </h1>
      </div>

      <div className="w-[100%] h-[500px] flex items-center justify-center relative">
        <div className="btns">
          <button
            className="outline-none absolute top-[50%] left-[5%] text-[#3576ae] translate-x-[-50%] translate-y-[50%] p-[1em] cursor-pointer z-[1] rounded-[50%] bg-transparent border border-[#3576ae]"
            onClick={prevBtn}
          >
            <FaChevronLeft />
          </button>
          <button
            className="outline-none absolute top-[50%] right-[1%] text-[#3576ae] translate-x-[-50%] translate-y-[50%] p-[1em] cursor-pointer z-[1] rounded-[50%] bg-transparent border border-[#3576ae]"
            onClick={nextBtn}
          >
            <FaChevronRight />
          </button>
        </div>
        {SecondData.map((item, index) => {
          return (
            <div
              className={
                index === current
                  ? "w-[100%] opacity-[1] transition duration-[1s]"
                  : "w-[100%] opacity-0 transition duration-[1s] ease-out"
              }
              key={item.id}
            >
              <div
                className="absolute top-0 left-[10%] w-[80%]  m-auto flex items-center justify-center max-[730px]:flex-col mt-[30px]"
                key={item.id}
              >
                {index === current && (
                  <div className="w-[50%] max-[730px]:w-[100%]">
                    <h1 className="text-white font-bold mb-[1em] capitalize max-[400px]:text-[16px]">
                      {item.title}
                    </h1>
                    <p className="text-white leading-[25px] text-[0.9rem] max-[400px]:text-[10px]">
                      {item.content}
                    </p>
                  </div>
                )}
                {index === current && (
                  <div className="w-[40%] overflow-hidden">
                    <img
                      className="w-[100%] object-cover pointer-events-none"
                      src={item.img}
                      alt="Job-Types"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
