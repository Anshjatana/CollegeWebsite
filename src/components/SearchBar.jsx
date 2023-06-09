import React from "react";

export default function SearchBar(props) {
  const inputCheck = () => {
    props.onCheck();
  };

  const inputChange = (event) => {
    props.filterText(event.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <input
        className="p-4 rounded-xl  text-xl bg-[#0c193289]  ml-2 mr-4 "
        value={props.filterValue}
        onChange={inputChange}
        type="text"
        placeholder="Search by Name"
      />
      <label className="mt-4 mb-4">
        <input type="checkbox" onChange={inputCheck} />
        Only Pass Student List
      </label>
    </div>
  );
}
