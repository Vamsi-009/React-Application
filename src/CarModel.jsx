import { useState } from "react";

function CarModel(){

    const[car, setCar] = useState({year: 2024,
                                   make: "Ford",
                                   model: "Mustang"});

    function handleYearChange(event){
        setCar( c=> ({...c, year: event.target.value}));
    }

    function handleMakeChange(event){
        setCar( c =>({...c, make: event.target.value}));
    }
    
    function handleModedlChange(event){
        setCar( c => ({...car, model: event.target.value}));
    }


    return(<>

    <div>
        <p>You'r Favorate car is: {car.make} {car.model} -{car.year}</p>
        <br />
        <input type="number" value={car.year} onChange={handleYearChange} />
        <input type="text" value={car.model} onChange={handleModedlChange} />
        <input type="text" value={car.make} onChange={handleMakeChange}/>
        <br />
        <br />
    </div>
    </>)
}
export default CarModel;