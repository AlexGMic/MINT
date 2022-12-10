import React from "react";

function MainFooter() {
  return (
    <div className="w-[100%] py-6">
      <div className="w-[60%] mx-auto flex justify-between flex-wrap gap-[10px] max-[800px]:w-[95%] max-[900px]:gap-[20px] max-[500px]:flex-col">
        <div className="w-[30%] flex flex-col gap-[10px] max-[900px]:w-[35%] max-[500px]:w-[90%] ">
          <p className="font-bold text-[20px]">ስለ እኛ</p>
          <p className="text-gray-700">
            የኢኖቬሽንና ቴክኖሎጂ ሚኒስቴር በ2011 ዓ.ም በወጣው አዋጅ ቁጥር 1097/2011 ተደራጅቷል።
          </p>
        </div>
        <div className="w-[30%] flex flex-col gap-[10px] max-[900px]:w-[50%] max-[500px]:w-[90%]">
          <p className="font-bold text-[20px]">ጠቃሚ አድራሻዎች</p>
          <div className="flex flex-col  leading-[30px]">
            <a className="hover:underline text-gray-700" href="/">
              የጠቅላይ ሚኒስቴር ቢሮ
            </a>
            <a className="hover:underline text-gray-700" href="/">
              የኢንፎርሜሽን መረብ ደህንነት ኤጀንሲ
            </a>
            <a className="hover:underline text-gray-700" href="/">
              የኢትዮጵያ ባዮቴክኖሎጂ ኢንስቲትዩት
            </a>
            <a className="hover:underline text-gray-700" href="/">
              የቴክኖሎጂ እና ኢኖቬሽን ኢንስቲትዩት
            </a>
            <a className="hover:underline text-gray-700" href="/">
              የኢትዮጵያ ስፔስ ሳይንስ እና ቴክኖሎጂ ኢንስቲትዩት
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] max-[500px]:w-[90%]">
          <p className="font-bold text-[20px]">አድራሻችን</p>
          <p className="text-gray-700">አዲስ አበባ ፣ ኢትዮጵያ</p>
          <p className="text-gray-700">ስልክ: +25111265737</p>
          <p className="text-gray-700">ኢሜይል: contact@mint.gov.et</p>
        </div>
      </div>
    </div>
  );
}

export default MainFooter;
