import React from "react";

// import { Button } from 'react-bootstrap';
// or less ideally

function TopNav() {
  return (
    <div className="w-[100%]  border-b-[1px] p-2">
      <div className="w-[90%] my-0 mx-auto flex justify-between items-center">
        <div className="w-[70%] flex justify-between items-center max-[300px]:w-[100%]">
          <div className="flex gap-[10px] w-[50%] max-[1060px]:w-[90%]  max-[500px]:w-[100%]">
            <img
              className="object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/800px-Flag_of_Ethiopia.svg.png"
              width={20}
              alt=""
            />
            <p className="text-[0.9rem] text-[#262963] max-[500px]:text-[0.5em]">
              Federal Democratic Republic of Ethiopia
            </p>
          </div>
          <div className="w-[55%] flex gap-[20px] justify-center max-[1060px]:hidden ">
            <div className="flex gap-[10px] items-center">
              <i className="fas fa-envelope"></i>
              <p className="text-[#262963]">+251-111-265737</p>
            </div>
            <div className="flex gap-[10px] items-center">
              <i className="fas fa-phone"></i>
              <p className="text-[#262963]">contact@mint.gov.et</p>
            </div>
          </div>
        </div>
        <div className="w-[5%] flex justify-between items-center max-[1060px]:w-[15%]  max-[500px]:w-[20%] max-[500px]:text-[16px] max-[300px]:hidden">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
