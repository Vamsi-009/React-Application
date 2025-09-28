import { useEffect, useRef, useState } from "react";

function Component(){
    const inputRef = useRef(null);
    useEffect(() => {
        console.log("Component Render");
    });
    function handleClick(){
        inputRef.current.focus();
    }
    return (<div>
        <button onClick={handleClick}>Click Me</button>
        <input ref={inputRef} />
    </div>);
}
export default Component;