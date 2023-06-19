import React, { useState } from "react";
import SearchBar from "./SearchBar";
import StudentData from "./StudentData";

export default function StudentList() {
  const [pass, setPass] = useState(false);
  const [filterText, setFilterText] = useState("");

  const inputPass = () => {
    setPass(!pass);
  };

  const searchText = (searchValue) => {
    setFilterText(searchValue);
  };
  const divStyle = {
    background:
      "linear-gradient(270deg, rgba(74,74,75,1) 0%, rgba(238,238,242,1) 45%)",
  };
  const divStyle2 = {
    background:
      "linear-gradient(180deg, rgba(49,4,88,1) 0%, rgba(0,0,3,1) 100%)",
  };

  return (
    <div
      style={divStyle}
      className="bg-[#ececec] text-white pt-6 pb-5 text-lg flex flex-col  justify-center items-center   "
    >
      <h1 className="text-3xl font-bold mb-6  text-black">
        Student's Result List 2023 Batch
      </h1>
      <div
        style={divStyle2}
        id="ListDiv"
        className="bg-[#010a1c] rounded-2xl text-white p-10 pb-6 h-[570px] w-[600px]
      "
      >
        <SearchBar
          filterValue={filterText}
          onCheck={inputPass}
          filterText={searchText}
        />
        <StudentData filterPass={pass} filterValue={filterText} />
      </div>
    </div>
  );
}
