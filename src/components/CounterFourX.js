import React,{useReducer} from 'react'


const initialState={
    firstCounter:0,
    secondCounter:10
};
const reducer = (state, action) => {//step 3////here the new state is asigned to "count"
    switch (action.type) {
        case 'increment':
            return { ...state,firstCounter: state.firstCounter + action.value }//...state is needed to merge state values otherwise other property values in state would be lost
        case 'decrement':
            return { ...state,firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state,secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state,secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }

}



export default function CounterFourX() {//EVOLUTION OF COUNTERTWO

   const[count,dispatch]= useReducer(reducer,initialState)//step 1//count is the state which useReducer return
    return (
        <div>
            <div>Count-{count.firstCounter}</div>
            <div>Count2-{count.secondCounter}</div>
            {/* here we have convert our simple string "action" to an object  */}
            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment',value:5})}>Increment by 5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement by 5</button>
            <button onClick={()=>dispatch({type:'increment2',value:5})}>Increment counter 2 by 5</button>
            <button onClick={()=>dispatch({type:'decrement2',value:5})}>Decrement counter 2 by 5</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            
        </div>
    )
}


//==============================NOTE===============================
//This is about how to use useReducer hook with objects instead of a simple value(for action,initialValue) and pasing two parmeters to dispatch


//THIS IS THE FIRST ILLUSTRATION OF USING OBJECTS AS STATE
///adding secondCounter in "initialState"

//here count=state

//======================REF=================================
//React Hooks Tutorial - 20 - useReducer (complex state & action) second  example -//This is about how to use useReducer hook with objects instead of a simple value(for action,initialValue) and pasing two parmeters to dispatch

//adding increment by 5 decrement by 5
