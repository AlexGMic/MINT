import React from "react";
import SingleService from "./SingleService";
import { services } from "./service";
function Services() {
  return (
    <div className="w-[100%] p-6">
      <div className="w-[100%]">
        <p className="text-center font-bold uppercase text-[#262963] text-[25px]">
          Services
        </p>
      </div>
      <div className="w-[80%] my-[2em]  mx-auto flex justify-between max-[940px]:w-[95%] max-[940px]:gap-[40px] max-[700px]:flex-col max-[700px]:items-center">
        {services.map((service) => {
          return (
            <SingleService
              key={service.id}
              img={service.img}
              title={service.title}
              desc={service.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
