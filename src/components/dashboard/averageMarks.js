import React,{Component,useState} from 'react';
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts';

const AverageMarks = () => {
  const [options,setOptions] = useState(
    {
      chart: {
        type: 'donut',
      },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 500
              },
              legend: {
                position: 'center',
                offsetY: 0,
              }
            }
          }],
          labels: ['Maths', 'Physics', 'Chemistry', 'Bio'],

    }
  )
  const [series,setSeries] = useState(
    [44, 55, 13,22]
  )
  


    return (
      <ReactApexChart options={options} series={series} type="donut"  height={500} width={400}/>
    )
}
export default AverageMarks;