import React,{useContext} from 'react'
import {CountContext} from '../App'

export default function ComponentF() {
    const countContext=useContext(CountContext)//how to consume a passed context
    return (
        <div>
            <h1>
            ComponentF-{countContext.counterState}
            </h1>
           
             <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}


//======NOTE===================
//example of sharing parent component with deep nested components with useContext+useReduce


//===============Ref================
//React Hooks Tutorial - 22 - useReducer with useContext
