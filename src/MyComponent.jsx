import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";

function MyComponent() {
    const [name, setName] = useState("guest");     
    const [age, setAge] = useState(0);     
    const [isEmployed, setIsEmployed] = useState(false);     

    const updateName = () => {
        setName("hello");
    }

    const incrementAge = () => {
        setAge(age+1);
    }

    const updateEmployed = () =>{
        setIsEmployed(isEmployed ? false : true);
    }

    const [count, setCount] = useState(0); 
    const [color, setColor] = useState("green");
    // userEvent(function, [dependencies])
    // when the component is mounted only then it should execute 
    useEffect(() => {
        if (count !== 0){
            document.getElementById("use-effect-display").innerHTML = `Count ${count} ${color}`;
        }
    }, [count])
    // [count] ==> when count changes only then  
     
    const addCount = () => {
        setCount(count+1);
    }

    const substractCount = () => {
        setCount(count-1);
    }

    const handleColorChange = () => {
        setColor(c => c === "green" ? "red" : "green");
    }

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    
    const handleResize = () => {
        setWidth(window.innerWidth); 
        setHeight(window.innerHeight);
    }
    
    // window.addEventListener("resize", handleResize);
    // here if as long as you change the height and width it will be added 

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("event listner added")

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("event listner removed")
        }
    }, [])

    useEffect(() => {
        document.title = `${width} x ${height}`

    }, [width, height])

    return (
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>set name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>increment</button>

                <p>employed: {isEmployed ? "True" : "False"}</p>
                <button onClick={updateEmployed}>update</button>
            </div>
            <div className="card">
                <div className="container">
                    <p style={{color: color}}>Count : {count}</p>
                    <p id="use-effect-display"></p>
                    <button className="btn btn-success" onClick={addCount}>Add</button>
                    <button className="btn btn-danger" onClick={substractCount}>Substract</button>
                    <button className="btn btn-warning" onClick={handleColorChange}>Change Color</button>
                </div>
            </div>

            <div className="card">
                <div className="container">
                    <p>Window width : {width}</p>
                    <p>Window width : {height}</p>
                </div>
            </div>
        </>
    )
}

export default MyComponent;