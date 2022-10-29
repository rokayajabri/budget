import React,{useContext} from "react";
import { AppContext } from "../context/AppContext";
const ResteBudget = () => {
    const {depenses,budget}=useContext(AppContext);
	
    const totalDepenses=depenses.reduce((total,item)=>{
        return (total =total+item.prix);
    },0);

    const alertType= totalDepenses > budget ? 'alert-danger' :'alert-success';
    
    return (
        <div className={`alert ${alertType}`}>
            <span>Le reste :{budget - totalDepenses} DH</span>
        </div>
    );
};

export default ResteBudget;

