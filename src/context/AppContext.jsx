import { useReducer } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

const AppReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_DEPENSE':
            return{
                ...state,
                depenses:[...state.depenses,action.payload],
            }
        case 'DELETE_DEPENSE':
            return{
                ...state,
                depenses: state.depenses.filter(
                    (depense)=>depense.id !==action.payload),
            }
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
    
        default:
            return state;
    }
}

const initialState={
    budget:4000,
    depenses:[
        {id:uuidv4(),name:'Transpore' ,prix:23,color:'rgb(255, 99, 132)'},
        {id:uuidv4(),name:'vacance'  ,prix:15, color:'rgb(17, 17, 202)'},
    ]

}

export const AppContext =createContext();

export const AppProvider=(props)=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    return <AppContext.Provider 
        value={{
            budget:state.budget,
            depenses:state.depenses,
            dispatch,
        }}
    >
        {props.children}
    </AppContext.Provider>
}