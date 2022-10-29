import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart,ArcElement} from 'chart.js';
import Labels from './Labels';

Chart.register(ArcElement);


const config={
    data :{
        datasets: [{
            data: [11, 16, 1, 3, 14],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(17, 17, 202)'
              ],
              hoverOffset:4,
              borderRadius:30,
              spacing:10
          }]
    },
    options:{

    }
}

export default function Graph() {
  return (
    <div className='flex justify-content max-w-xs mx-auto'>
        <div className='item'>
            <div className='chart relative'>
                <Doughnut {...config}></Doughnut>
                <h3 className='mb-4 font-bold title'>Totale<br></br>
                    <span className='block text-3xl text-emerald-400'>${0}</span>
                </h3>
            </div>

            <div className='flex flex-col py-10 gap-4'>
                <Labels/>
            </div>
        </div>
    </div>
  )
}
