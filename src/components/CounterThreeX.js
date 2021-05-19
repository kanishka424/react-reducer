import React,{useReducer} from 'react'


const initialState={
    firstCounter:0
};
const reducer=(state,action)=>{//step 3////here the new state is asigned to "count"
    switch(action.type){
    case 'increment' :
    return {firstCounter:state.firstCounter+action.value}//here we return a state object instead of a simple value
    case 'decrement':
    return {firstCounter:state.firstCounter-action.value}
    case 'reset':
    return initialState
    default:
    return state
    }

}



export default function CounterThreeX() {//EVOLUTION OF COUNTERTWO

   const[count,dispatch]= useReducer(reducer,initialState)//step 1//count is the state which useReducer return
    return (
        <div>
            <div>Count-{count.firstCounter}</div>
            {/* here we have convert our simple string "action" to an object  */}
            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment',value:5})}>Increment by 5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement by 5</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            
        </div>
    )
}


//==============================NOTE===============================
//This is about how to use useReducer hook with objects instead of a simple value(for action,initialValue) and pasing two parmeters to dispatch


//THIS IS THE FIRST ILLUSTRATION OF USING OBJECTS AS ACTIONS AN STATE SO WE CAN PASS MORE PARMETERS AND ADD ADDITIONAL DATA WITH reducer()
///adding increment by 5 decrement by 5 for that we use value property in dispatch()

//here count=state

//this is actually about action as an object usefulness,though we have made state as an object the use of that is on Counterfour.js

//======================REF=================================
//React Hooks Tutorial - 20 - useReducer (complex state & action) second  example -//This is about how to use useReducer hook with objects instead of a simple value(for action,initialValue) and pasing two parmeters to dispatch

//adding increment by 5 decrement by 5
