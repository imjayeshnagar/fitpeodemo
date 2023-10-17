import React,{Component,useState} from 'react';
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts';

const StudentSurvey = () => {
  const [options,setOptions] = useState(
    {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    }
  )
  const [series,setSeries] = useState(
    [{
      name: 'new student',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'old student',
      data: [11, 32, 45, 32, 34, 52, 41]
    }]
  )
  


    return (
      <ReactApexChart options={options} series={series} type="area"  height={350} width={580}/>
    )
}
export default StudentSurvey;