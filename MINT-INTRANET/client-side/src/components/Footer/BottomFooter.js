import React from "react";

function BottomFooter() {
  let year = new Date();
  year = year.getFullYear();
  return (
    <div className="w-[100%] my-2 mx-auto text-[#262963]  flex justify-center items-center font-bold">
      <p>{year} የቅጂ መብት Mint.gov.et</p>
    </div>
  );
}

export default BottomFooter;
