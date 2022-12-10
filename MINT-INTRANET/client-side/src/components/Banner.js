import React from "react";

function Banner() {
  return (
    <div className="w-[100%] h-[600px]    bg-black relative  max-[730px]:h-[50%]">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black z-10 opacity-[0.5]"></div>
      <div className="w-[100%] h-[100%] max-[730px]:h-[50%] flex items-center justify-center">
        <div className="w-[100%] h-[100%]">
          <img
            className="w-[100%]  object-cover pointer-events-none h-[100%]"
            src="https://etssti.org/wp-content/uploads/2020/10/pexels-pixabay-33153-2.jpg"
            alt=""
          />
        </div>
        <div className="w-[40%] absolute  z-[10]  max-[1360px]:w-[60%] max-[750px]:w-[80%] ">
          <p className="w-[100%] text-center text-white text-[100px] font-extrabold max-[1360px]:text-[80px] max-[600px]:text-[40px] max-[300px]:text-[20px]">
            Welcome
          </p>
          <p className=" text-white text-center max-[600px]:text-[12px] max-[300px]:text-[9px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            repudiandae earum nostrum maxime. Ratione incidunt ut eveniet esse
            quasi nulla.
          </p>
          <div className="p-4 flex justify-center items-center gap-[10px] z-[20]">
            <a
              className="py-2 px-8 bg-white rounded-[50px] hover:bg-[#262963] hover:text-white max-[300px]:py-1 max-[300px]:px-4 max-[300px]:text-[10px]"
              href="#Latest-News"
            >
              Explore
            </a>
            <a
              className="py-2 px-8 bg-white rounded-[50px] hover:bg-[#262963] hover:text-white max-[300px]:py-1 max-[300px]:px-4  max-[300px]:text-[10px]"
              href="#About"
            >
              About us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
