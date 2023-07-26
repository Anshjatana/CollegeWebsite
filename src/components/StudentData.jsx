import React from "react";
import StudentTable from "./StudentTable";

export default function StudentData({ filterPass, filterValue }) {
  
  // Filtered the student data based on the filterPass and filterValue
  const filteredData = StudentTable.filter((stuData) => {
    if (
      (!filterPass || (filterPass && filterPass === stuData.Pass)) &&
      (!filterValue || stuData.Name.includes(filterValue))
    ) {
      return true;
    }
    return false;
  });

  return (
    <div className=" flex flex-col items-center justify-center ">
      {filteredData.length > 0 ? (
        <table className="w-auto  mt-5 text-center">
          <thead>
            <tr>
              <th className="pr-10 pb-2">Name</th>
              <th className="pr-10 pb-2">Marks</th>
              <th className="pr-10 pb-2">Subject</th>
              <th className="pr-8 pb-2">Result</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((stuData, index) => (
              <tr key={index}>
                <td className="pr-10 pb-2">{stuData.Name}</td>
                <td className="pr-10 pb-2">{stuData.Marks}</td>
                <td className="pr-10 pb-2">{stuData.Subject}</td>
                <td className="pr-10 pb-2">{stuData.Result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <h1 className="text-center text-white ">No Data Found</h1>
          <p className="text-lg text-center mt-2">Turn on the Caps lock</p>
        </div>
      )}
    </div>
  );
}
