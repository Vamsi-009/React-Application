/* useEffect() = React hook that tells rect Do some code when(pick one):
                 this component re-renders, mounts
                 the state of a value

useEffect(function, [dependencies])
1. useEffect(() => {})          //runs after every re-rendering
2. useEffect(() => {}, [])      //runs only on mount
3. useEffect(() => {}, [value]) //runns on mount + when value change

 -----uses-----
 #1.event listener
 #2.DOM manipulation
 #3.Supscription (real-time updates)
 #4.fetching date from an API
 #5.clean up when a component unmounts
*/

import React, {useEffect, useState} from "react";

function UseEffect(){
    const [count, setCount] = useState(0);

    useEffect(() =>{
        document.title = `count: ${count}`
    })
    function addCount(){
        setCount(c => c + 1);
    }

    return(<div>
        <p>{count}</p>
        <button onClick={addCount}>add</button>
    </div>)
}
export default UseEffect;