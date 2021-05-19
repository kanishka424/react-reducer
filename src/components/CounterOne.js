import React,{useReducer} from 'react'


const initialValue=0;
const reducer=(state,action)=>{//step 3//here the new state is asigned to "count"
    switch(action){
    case 'increment' :
    return state +1
    case 'decrement':
    return state+1
    case 'reset':
    return initialValue;
    default:
    return state
    }

}



export default function CounterOne() {

   const[count,dispatch]= useReducer(reducer,initialValue)//step 1
    return (
        <div>
            <div>Count-{count}</div>
            {/* in dispatch() we pass the action typr */}
            {/* step 2 */}
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            
        </div>
    )
}


//==============================NOTE===============================
//This is about how to use useReducer hook

//======================REF=================================
//React Hooks Tutorial - 19 - useReducer (simple state & action)