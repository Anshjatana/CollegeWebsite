import React from "react";

export default function Header() {
  return (
    <div>
      <div className="bg-[#010a1c] p-4 ">
        <div className="max-w-[1240px] flex items-center justify-between ">
          <div className="flex">
            <div id="Logo" className=" bg-white">
              <img
                src="https://seeklogo.com/images/A/arsd-college-logo-35C65FCD3D-seeklogo.com.png"
                alt="logo"
                className="w-auto"
              />
            </div>
            <ul
              className="flex text-white gap-6  text-lg px-16  mt-1.5"
              id="navbar-items"
            >
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Gallery</li>
              <li className="cursor-pointer">Admissions</li>
              <li className="cursor-pointer">Alumni</li>
              <li className="cursor-pointer">Research</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
