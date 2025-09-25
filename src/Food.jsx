import { element } from "prop-types";
import React,{ useState } from "react";


function Food(){
    const [food, setFood] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodinput").value;
        setFood(f => [...f, newFood]);
    }

    function handleRemoveFood(index){
        setFood(food.filter((_, i) => i !== index));//"_" will be ignored as a parameter.it work as element.
    }

    return(<>

    <h2>List of foods:</h2>
    <ol>
        {food.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
    </ol>
    <input type="text" id="foodinput" placeholder="enter u'r fav food" />
    <button onClick={handleAddFood}>submit</button>
    </>)
}
export default Food;