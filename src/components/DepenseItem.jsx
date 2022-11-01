import React, {useContext} from "react";
import 'boxicons';
import { AppContext } from "../context/AppContext";
import swal from 'sweetalert';

const DepenseItem =(props)=>{
    const {dispatch}=useContext(AppContext);

    const handleDeletDepense= () =>{
       
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
              dispatch({
                type:'DELETE_DEPENSE',
                payload:props.id,
            });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    };
    

    return(
        <div className='item flex justify-center bg-gray-50 py-2 rounded-r' style={{borderRight:`8px solid ${props.color ?? "#f9c74f"}`}}>
            <button className='px-3'><box-icon color={props.color ?? "#f9c74f"} size="20px" name='trash' onClick={handleDeletDepense}></box-icon></button>
            <span className='block w-full'>{props.name}</span>
            <span>{props.prix}DH</span>

        </div>

    )
}


export default DepenseItem;