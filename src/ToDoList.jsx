import React, {useState} from "react";

export default function ToDoList() {

    const [task, setTask] = useState(["hello"]); 
    const [newTask, setNewTask] = useState("");
    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    } 
    const addTask = () => {
        setTask(prevTask => [...prevTask, newTask])
        setNewTask("");
    } 
    const deleteTask = (index) => {
        setTask(task.filter((_, i) => i !== index))
    } 
    const moveTaskUp = (index) => {
        if (index > 0){
            const updatedTasks = [...task]; 
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]

            setTask(updatedTasks);
        } 
    } 
    const moveTaskDown = (index) => {
        if (index < task.length-1){
            const updatedTasks = [...task]; 
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]

            setTask(updatedTasks);
        } 
    } 

    return (
        <>
            <div className="card">
                <h2>To-Do List</h2>
                <div>
                    <input className="mx-2" type="text" placeholder="Enter a Task" value={newTask} onChange={handleInputChange}/>
                    <button className="btn btn-primary" onClick={addTask}>
                        Add
                    </button>
                </div>
                <ol>
                    {task.map((task, index) => 
                    <li key={index}>
                        <span className="">{task}</span>
                        <button className="btn btn-outline-danger" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="btn btn-outline-success" onClick={() => moveTaskUp(index)}>⬆️</button>
                        <button className="btn btn-outline-success" onClick={() => moveTaskDown(index)}>⬇️</button>
                    </li>)}
                </ol>
            </div>
        </>
    );
}