import React, {useState} from "react";


// real time updates of written input 
export default function() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState(); 
    const [shipping, setShipping] = useState("pick up"); 

    const [car, setCar] = useState({
        name : "car", 
        make : 2023, 
        model : "s"
    })

    const handleShippingChange = (value) => {
        setShipping(value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const hangleCommentChange = (e) => {
        setComment(e.target.value);
    }

    const handleCarNameChange = (e) => {
        setCar(prevCar => ({...prevCar, name  :e.target.value}));
    }
    const handleMakeChange = (e) => {
        setCar(prevCar => ({...prevCar, make  :e.target.value}));
    }
    const handleModelChange = (e) => {
        setCar(prevCar => ({...prevCar, model : e.target.value}));
    }

    const [foods, setFoods] = useState(["Apple", "Orange", "banana"]);

    const handleAddFood = () => {
        const newFood = document.getElementById("foodInput").value; 
        document.getElementById("foodInput").value = "";

        setFoods(prevFoods => [...prevFoods, newFood])
        
    }

    const handleRemoveFood = (index) => {
        // parameter is not used so use _ 
        setFoods(foods.filter((_, i) => i !== index))
    }

    const [newCars, setNewCars] = useState([]);
    // get year
    const [newCarYear, setNewCarYear] = useState(new Date().getFullYear());
    const [newCarModel, setNewCarModel] = useState("");
    const [newCarMake, setNewCarMake] = useState("");

    const handleNewAddCar = () => {
        const newCar = {
            year : newCarYear, 
            model : newCarModel, 
            make : newCarMake
        }

        setNewCars([...newCars, newCar]);

        setNewCarModel(""); 
        setNewCarYear(new Date().getFullYear()); 
        setNewCarMake("");
    }
    const handleNewRemoveCar = (index) => {
        setNewCars(c => c.filter((_, i) => i !== index))
    }
    const handleNewYearChange = (event) => {
        setNewCarYear(event.target.value);
    }
    const handleNewMakeChange = (event) => {
        setNewCarMake(event.target.value);
    }
    const handleNewModelChange = (event) => {
        setNewCarModel(event.target.value);
    }

    return (
        <div className="container">
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name : {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity : {quantity}</p>

            {/* <input value={comment} onChange={hangleCommentChange} type="text" /> */}
            <textarea value={comment} onChange={hangleCommentChange} name="" id="" cols="30" rows="10" placeholder="Enter delivery instruction..."></textarea>
            <p>Comment : {comment}</p>

            <select name="" id="" value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="mastercard">mastercard</option>
                <option value="VISA">VISA</option>
            </select>
            <p>payment : {payment}</p>

            <label>
                pick up
                <input type="radio" name="" id="" value="pick up" checked={shipping === "pick up"} onchange={() => handleShippingChange("pick up")}/>
            </label>
            <br></br>
            <label>
                <input type="radio" name="" id="" value="delivery" checked={shipping === "delivery"} onchange={() => handleShippingChange("delivery")}/>
                delivery
            </label>
            <p>shipping : {shipping}</p>

            <div className="container">
                <p>My car specs : {car.name}, {car.make}, {car.model} </p>
                <input type="text" value={car.name} onChange={handleCarNameChange} />
                <input type="text" value={car.make} onChange={handleMakeChange} />
                <input type="text" value={car.model} onChange={handleModelChange} />
            </div>

            <div>
                <h2>List of food</h2>
                <ul>
                    {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
                </ul>
                <input type="text" id="foodInput" placeholder="enter food name"/>
                <button onClick={handleAddFood}>Add Food</button>
            </div>

            <div className="container">
                <h2>List of car objects</h2>
                <ul>
                    {newCars.map((car, index) => 
                    <li key={index} onClick={() => handleNewRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
                </ul>
                <input type="number" value={newCarYear} onChange={handleNewYearChange}/>
                <input type="text" value={newCarMake} onChange={handleNewMakeChange} placeholder="enter car make"/>
                <input type="text" value={newCarModel} onChange={handleNewModelChange} placeholder="enter car model"/>
                <button onClick={handleNewAddCar}>add car</button>
            </div>
        </div>
    )
}