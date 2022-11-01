import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

export default function Labels() {
    const { depenses } =useContext(AppContext);
    const data = depenses.map(item=> {return {type:item.name , percent: item.prix }})
    const obj= data
  return (
    <>
       {obj.map((v,i)=><LabelComponent key={i} data={v}/>)}
    </>
    
  )
}

function LabelComponent({data}){
    
    if(!data) return <> </>;
    return(
        <div className='labels flex justify-between '>
            <div className='flex gap-2'>
                <h3 className='text-md'>{data.type??''}</h3>
            </div>
            <h3 className='font-bold'>{data.percent??0} dh </h3>
        </div>
    )

}