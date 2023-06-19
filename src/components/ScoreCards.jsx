import React from "react";

export default function ScoreCards(props) {
  return (
    <div className="flex flex-col items-center justify-center pt-6  bg-[#010a1c]">
      <h1 className="text-3xl text-white font-bold pt-4">
        SCORECARD OF: {props.studentName}
      </h1>
      <div
        id="cardDiv"
        className="flex items-center justify-center flex-col bg-[#ececec] h-[350px] w-[400px] m-6 p-10 rounded-xl"
      >
        <img
          src={props.imgURL}
          alt="img"
          className="w-[100px] border-2 rounded-full  "
        ></img>
        <h1 className="text-2xl font-bold mt-4 text-red-900">
          Student's Name: {props.studentName}
        </h1>
        <h2 className="text-2xl font-bold mt-2 mb-6 text-green-800      ">
          Position Obtained:{props.position}
        </h2>
        <p className="text-xl font-bold">Total marks obtained: {props.marks}</p>
        <p className="text-xl font-bold mb-6">Prize won: {props.prize}</p>
      </div>
    </div>
  );
}
