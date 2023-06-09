import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function Section1() {
  const [state] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2021, 2022, 2023],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 35, 41, 55, 59, 62, 69, 78],
      },
    ],
  });

  return (
    <div className="bg-[#010a1c] flex flex-col items-center justify-center text-white pb-10 w-full h-auto ">
      <div
        className="font-bold font-sans text-4xl  pb-12 pt-10"
        id="graphHeadline"
      >
        <h1>Result Analytics</h1>
      </div>
      <div className="flex h-auto" id="graphContainer">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="600"
        />
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          width="600"
        />
      </div>
      <h5 className="text-xl font-sans mb-10 ">
        Graph showing % of students scored above 8.5 CGPA
      </h5>
    </div>
  );
}
