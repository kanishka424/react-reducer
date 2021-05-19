import React,{useReducer} from 'react'


const initialState={
    firstCounter:0
};
const reducer=(state,action)=>{//step 3////here the new state is asigned to "count"
    switch(action.type){
    case 'increment' :
    return {firstCounter:state.firstCounter+1}//here we return a state object instead of a simple value
    case 'decrement':
    return {firstCounter:state.firstCounter-1}
    case 'reset':
    return initialState
    default:
    return state
    }

}



export default function CounterOne() {

   const[count,dispatch]= useReducer(reducer,initialState)//step 1//count is the state which useReducer return
    return (
        <div>
            <div>Count-{count.firstCounter}</div>
            {/* here we have convert our simple string "action" to an object  */}
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            
        </div>
    )
}


//==============================NOTE===============================
//This is about how to use useReducer hook with objects instead of a simple value(for action,initialValue)

//here count=state

//======================REF=================================
//React Hooks Tutorial - 20 - useReducer (complex state & action) first example -This is about how to use useReducer hook with objects instead of a simple value(for action,initialValue)
