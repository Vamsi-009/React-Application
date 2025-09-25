import React, { useState } from "react";
function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }
    return (<>
    <div className="color-picker-container">
        <h1 className="h1-tag">Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected Color : {color}</p>
        </div>
        <label className="labeled" htmlFor="#">Select a color:</label>
        <input className="inputty" type="color" value={color} onChange={handleColorChange} />
    </div>
    </>);
}
export default ColorPicker;