import React from "react";

export default function Header() {
  return (
    <div>
      <div className="bg-[#010a1c] p-4 ">
        <div className="max-w-[1240px] flex items-center justify-between ">
          <div className="flex">
            <div
              id="Logo"
              className="text-2xl font-bold mt-0.5 ml-6 text-white"
            >
              ARSD College
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

          <div className="flex items-center">
            <div className="flex items-center  text-white  ">
              <input
                type="text"
                id="searchBar"
                placeholder="Search"
                className="p-1.5 pl-3 rounded-md bg-white text-black"
              ></input>
            </div>
            <div
              className="ml-[15px] mr-6 pb-[3px] text-white bg-[#939393] border rounded-lg border-transparent px-[8px] py-[4px]"
              id="searchIcon"
            >
              <button>
                <img
                  className="w-5"
                  src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png"
                  alt="seach-icon"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
