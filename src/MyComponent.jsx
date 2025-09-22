import React, {useState} from "react";

function MyComponent(){

    const [name, setName] =useState("Guest");
    const [age, setAge] =useState(0);
    const [isEmploid, setIsEmploid] =useState(false);

    const updateName = () =>{
        setName("Vamsi");
    }

    const incrementAge = () =>{
        setAge (age + 1);
    }

    const toggleEmploidStatus = () =>{
        setIsEmploid(!isEmploid);
    }

    return(<>
           <p>Name: {name}</p>
           <button onClick={updateName}>set name</button>

            <p>Age: {age}</p>
           <button onClick={incrementAge}>Incremant Age</button>

           <p>is Emploi :{isEmploid ? "Yes" : "No"}</p>
           <button onClick={toggleEmploidStatus}>Toggle Status</button>
    
    </>)

}
export default MyComponent;