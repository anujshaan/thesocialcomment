import React, { useState }from "react";
import { Doughnut } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [70,30],
      backgroundColor: [
          'rgba(255,0,255,0.6)',
          'rgba(0,0,0,0.1)'
      ],
      borderColor: [
          'rgba(0,0,0,0.1)',
          'rgba(255,0,255,0.6)'
      ],
      borderWidth: 0,
    },
  ],
};

export default function Box1(props){
    return(
    <div className='box1-header'>
      <div>
        <p className='box1-title'>{props.title}</p>
        <p>{props.dataValue}</p>
      </div>
      <div className="box1-graph">
        <Doughnut data={data} />
    </div>
    </div>
    )
};