import React,{useContext} from 'react'
import {CountContext} from '../App'

export default function ComponentA() {
    const countContext=useContext(CountContext)//how to consume a passed context
    return (
        <div>
            <h1>
            ComponentA-{countContext.counterState}
            </h1>
           
             <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}




//=========================NOTE================================
// <button onClick={()=>countContext.dispatch('increment')}>Increment</button> here insted of using "dispatch" we use "countContext.countDispatch" becaue we use 
//useContext() hook since locally in this component there is no dispatch()