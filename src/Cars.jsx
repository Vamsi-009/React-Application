import { useState } from "react";


function Cars(){
    const [car, setCar] = useState([{year: 2024,
                                   make: "Ford",
                                   model: "Mustang"}]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carModel, setCarModel] = useState("");
    const [carMake, setCarMake] = useState("");

    function handleAddCar(){
        const newCar = {year: carYear,
                        model: carModel,
                        make: carMake};

        setCar(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarModel("");
        setCarMake("");
    }

    function handleRemoveCar(index){
        setCar(c => c.filter((_,i) => i !== index));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    return(<>
      <h2>List of Car Objects</h2>
      <ul>
        {car.map((car, index) => <li key={index} onClick={() =>handleRemoveCar(index)}>{car.make} {car.model} -{car.year}</li>)}
      </ul>

      <input type="number" value={carYear} onChange={handleYearChange} /> <br />
      <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make" /> <br />
      <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car Model" /> <br />
      <button onClick={handleAddCar}>Add-Car</button>


    </>)
    
}
export default Cars;