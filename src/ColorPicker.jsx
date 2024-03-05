import React, {useState} from "react"

export default function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <div className="container color-picker p-4">
            <h1>Color Picker</h1>
            <div className="rounded shadow color-display w-50 m-2 p-4" style={{backgroundColor: color}}>
                <p className="lead">Selected Color : {color}</p>
            </div>
            <div>
            <label className="py-2">Select a color : </label> <br></br>
            <input type="color" name="" id="" value={color} onChange={handleColorChange}/>
            </div>
        </div>
    )
}