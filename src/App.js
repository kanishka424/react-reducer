import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import CounterThreeX from './components/CounterThreeX'
import CounterFourX from './components/CounterFourX'
import CounterThree from './components/CounterThree'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import React,{useReducer}from 'react';
import DataFetchingTwo from './components/DataFetchingTwo'



export const CountContext=React.createContext()//context,initialState,reducer are in app.js to create a counter accessible by other nested components using useContext() hook and useReducer() hook

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




function App() {
  const [count,dispatch]=useReducer(reducer, initialValue)
  return (
    <div className="App">
      <DataFetchingTwo/>
      {/* <CountContext.Provider value={{counterState:count,countDispatch:dispatch}}>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
      </CountContext.Provider>
     */}
    </div>
  );
}

export default App;
