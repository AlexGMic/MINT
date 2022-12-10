import React from "react";

function SingleService({ img, title, desc }) {
  return (
    <div className="w-[30%] bg-white shadow-xl rounded-[5px] p-4 hover:scale-110 transition duration-[500ms] flex flex-col items-center justify-center max-[940px]:w-[40%] max-[700px]:w-[80%]">
      <div className="w-[50%] flex justify-center">
        <img src={img} alt="" className="pointer-events-none" />
      </div>
      <div>
        <p className="text-center text-[#262963] text-[18px] font-bold py-2">
          {title}
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default SingleService;
