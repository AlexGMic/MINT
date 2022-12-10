import React from "react";

const styles = {
  sliderLinks:
    " hidden absolute w-[100%] opacity-1 py-[1em] px-0 bg-white translateY-[-140%] transition ease-in-out duration-[500] max-[700px]:block",
  sliderActive:
    "opacity-[1] z-[1]  translate-y-0 transition duration-[500] ease-in-out",
  atag: " p-[1em] text-[555555] font-[500] text-center no-underline transition duration-[300] ease-out  border-t-[1px] border-[#efefef]",
  link: " w-[40%] flex items-center justify-between max-[1060px]:w-[60%] max-[700px]:hidden",
  linkaTag: "p-[0.3em] text-[#555555] transition duration-[300] ease-in-out",
};

function SliderNav({ expanded }) {
  return (
    <div className={expanded ? `block p-2` : "hidden"}>
      <div className="w-[100%] flex flex-col items-center justify-center max-[300px]:text-[12px] ">
        <a
          className={
            expanded
              ? `w-[100%] text-black flex justify-center py-4 hover:bg-[#262963] hover:text-white transition duration-[500ms] `
              : `${styles.atag}`
          }
          href="/home"
        >
          Home
        </a>
        <a
          className={
            expanded
              ? `w-[100%] flex justify-center py-4 hover:bg-[#262963] hover:text-white transition duration-[500ms]`
              : `${styles.atag}`
          }
          href="/news"
        >
          News
        </a>
        <a
          className={
            expanded
              ? `w-[100%] flex justify-center py-4 hover:bg-[#262963] hover:text-white transition duration-[500ms]`
              : `${styles.atag}`
          }
          href="/dashboard"
        >
          Dashboard
        </a>
        <a
          className={
            expanded
              ? `w-[100%] flex justify-center py-4 hover:bg-[#262963] hover:text-white transition duration-[500ms]`
              : `${styles.atag}`
          }
          href="/home"
        >
          Office 365
        </a>
        <a
          href="/home"
          className={
            expanded
              ? `w-[100%] flex justify-center py-4 hover:bg-[#262963] hover:text-white transition duration-[500ms]`
              : `${styles.atag}`
          }
        >
          DMINT
        </a>
      </div>
    </div>
  );
}

export default SliderNav;
