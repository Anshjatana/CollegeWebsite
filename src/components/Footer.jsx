import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col bg-[#ececec]">
      <div className=" mb-5 mt-5 ml-10 ">
        <div className="flex flex-col  ">
          <div>
            <ul className="flex text-2xl">
              <li className=" font-small text-xl text-black ">Home</li>
              <li className="font-small text-xl ml-4 text-[#000000] ">
                Admissions
              </li>
              <li className=" font-small text-xl ml-4 text-[#000000]">
                Gallery
              </li>
              <li className="  font-small text-xl ml-4 text-[#000000]">
                Alumni
              </li>
              <li className=" font-small text-xl ml-4 text-[#000000]">
                Research
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className=" ml-[40px]  mr-[27px]  " />
      <div className="  flex flex-col-reverse justify-between mb-[20px]">
        <div className="mt-6  h-[10px] font-normal text-base text-[#0c0c0c]  ml-[40px]">
          © 2077 Fake Company. All rights reserved.
        </div>
        <div>
          <ul className="flex   ml-[40px] mt-6">
            <li className="w-[47px] h-[24px] text-base font-normal mr-4  text-[#000000]">
              Terms
            </li>
            <li className="w-[47px] h-[24px] text-base font-normal mr-4 text-[#000000]">
              Privacy
            </li>
            <li className="w-[47px] h-[24px] text-base font-normal mr-4 text-[#000000]">
              Cookies
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
