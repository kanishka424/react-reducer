import React,{useReducer} from 'react'


const initialValue=0;
const reducer=(state,action)=>{//step 3//here the new state is asigned to "count"
    switch(action){
    case 'increment' :
    return state +1
    case 'decrement':
    return state-1
    case 'reset':
    return initialValue;
    default:
    return state
    }

}



export default function CounterOne() {

   const[count,dispatch]= useReducer(reducer,initialValue)
   const[countTwo,dispatchTwo]= useReducer(reducer,initialValue)//adding another reducer
    return (
        <div>
            <div>Count-{count}</div>
            
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>



{/* use of multiple useReducer() */}
            <div>Count-{countTwo}</div>
            
            <button onClick={()=>dispatchTwo('increment')}>Increment</button>
            <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
            <button onClick={()=>dispatchTwo('reset')}>Reset</button>
            
        </div>
    )
}


//==============================NOTE===============================
//This is about how to use useReducer hook multiple times

//======================REF=================================
//React Hooks Tutorial - 21 - Multiple useReducers
