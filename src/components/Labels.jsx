import React from 'react'

const obj=[
    {
        type:'Economies',
        color:'#f9c74f',
        percent:45
    },
    {
        type:'Investissement',
        color:'rgb(75, 192, 192)',
        percent:20
    },
    {
        type:'Vetements',
        color:'rgb(255, 99, 132)',
        percent:10
    },
    {
        type:'Sante',
        color:'rgb(201, 203, 207)',
        percent:24
    },
    {
        type:'aliments',
        color:'rgb(17, 17, 202)',
        percent:12
    }
]

export default function Labels() {
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
                <div className='w-2 h-2 rounded py-3' style={{background:data.color??'#f9c74f'}}></div>
                <h3 className='text-md'>{data.type??''}</h3>
            </div>
            <h3 className='font-bold'>{data.percent??0}%</h3>
        </div>
    )

}