import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';

const DepenseTotal = () => {
	const {depenses}=useContext(AppContext);
    
    const totalDepenses=depenses.reduce((total,item)=>{
        return (total =total+item.prix);
    },0);

    return(
        <div className='alert alert-primary'>
            <span>dépensé jusqu'à présent:{totalDepenses} DH</span>
        </div>
    )
};

export default DepenseTotal;
