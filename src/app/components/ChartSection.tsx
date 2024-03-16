'use client'
import React from "react";
import { Chart } from "chart.js";


export default function ChartSection() {
  React.useEffect(() => {
    var ctx = document.getElementById('myChart')?.getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133],
          label: "Uitgave",
          borderColor: "rgb(62,149,205)",
          backgroundColor: "rgb(62,149,205,0.1)",
        },
        {
          data: [10, 20, 106, 106, 30, 111, 133],
          label: "Inkomsten",
          borderColor: "rgb(20,30,205)",
          backgroundColor: "rgb(62,149,205,0.1)",
        },
        ]
      },
    });
  }, [])


  return (
    <>
      {/* Filled line chart */}
      <div className="w-full mt-3 flex mx-auto my-auto">
        <div className='border-2 border-black  pt-0 rounded-3xl  w-full h-fit my-auto  '>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}