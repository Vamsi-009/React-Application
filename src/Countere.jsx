/* Updater function =  A function passed as an argument to setState() usually
                       Ex: setYear ( arrow function )
                       allow for safe updates based on the previous state 
                       used with multiple state updates and asynchronous functions  
*/ 


import React,{useState} from "react";

function Countere(){

    const [count, setCount] = useState(0);
    
    const increment = () =>{
        setCount(count => count+1);
    }
    const decrement = () =>{
        setCount(count => count-1);
    }

       const reset = () =>{
        setCount(0);
    }

    return( <div className="counter-container">
        <p className="counter-display">{count}</p>
        <button className="counter-button" onClick={decrement}>-</button>
         <button className="counter-button" onClick={reset}>Reset</button>
          <button className="counter-button" onClick={increment}>+</button>

    </div>)

}
export default Countere;