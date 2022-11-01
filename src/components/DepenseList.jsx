import React,{useContext,useState,useEffect} from "react";
import DepenseItem from "./DepenseItem";
import { AppContext } from "../context/AppContext";

const DepenseList =()=> {
    const { depenses } =useContext(AppContext);
    const [filteredDepenses, setfilteredDepenses] = useState(depenses || []);

    useEffect(() => {
      setfilteredDepenses(depenses);
    }, [depenses]);

    
	  const handleChange = (event) => {
		    const searchResults = depenses.filter((filteredDepense) =>
            filteredDepense.name.toLowerCase().includes(event.target.value)
		    );
		    setfilteredDepenses(searchResults);
	};


  return (
      <>

        <div className='flex flex-col py-6 gap-3'>
            <h1 className='py-4 font-bold text-xl'>Depenses</h1>
            <input
            type='text'
            className='form-control mb-2 mr-sm-2'
            placeholder='Tapez pour rechercher...'
            onChange={handleChange}
          />

          {filteredDepenses.map((depense)=>
          < DepenseItem
              id={depense.id}
              name={depense.name}
              prix={depense.prix}
              color={depense.color}/>)}
        </div>
   </>
  )
}

export default DepenseList; 