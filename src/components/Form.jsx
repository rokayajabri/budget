import React,{useState,useSelector} from 'react'
import DepenseList from './DepenseList';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import {v4 as uuidv4} from 'uuid';
import swal from 'sweetalert';


export default function Form() {
    const { dispatch } =useContext(AppContext);
   const [name,setName]=useState('');
   const [prix,setPrix]=useState('');
   const [catId, setCatId] = useState('0');
   
  const category={type:['Investissement','Economies','Vetements','Sante','aliments']};



   const onSubmit =(event)=>{
        event.preventDefault();
        const depense ={
            id:uuidv4(),
            name : name,
            prix : parseInt(prix)
        };
        swal("Good job!", "You clicked the button!", "success");
        dispatch({
            type:'ADD_DEPENSE',
            payload:depense
        });

        setName('');
		setPrix('');
        

   }
    return (
    <div className='form max-w-sm mx-auto w-96'>
        <h1 className='font-bold pb-4 text-xl'>Ajouter une nouvelle transaction</h1>

        <form id='form' onSubmit={onSubmit} >
            <div className='grid gap-4'>
                <div className='input-group'>
                    <input type="text"  placeholder='salaire,maison,voiture' className='form-input' id='name'
                     value={name}
                     onChange={(event)=>setName(event.target.value)}/>
                </div>
                <select className='form-input' value={catId} onChange={(event)=>setCatId(parseInt(event.target.value))}>
                    {category.type.map((item, index) => (
                    <option key={index} value={index}>
                        {item}
                    </option>
                    ))}
                </select>
                <div className='input-group'>
                    <input type="number"  placeholder='Montant' className='form-input' id='prix'
                     value={prix}
                     onChange={(event)=>setPrix(event.target.value)}/>
                </div>
                <div className='submit-btn'>
                    <button className='border py-2 text-white bg-indigo-500 w-full'>Ajouter une transaction</button>
                </div>
            </div>
        </form>
        <DepenseList/>
    </div>
  )
}
