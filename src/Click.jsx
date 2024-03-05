function Click() {

    function handleClick(){
        console.log("clicked");
    }
    
    function handleClick2(name) {
        console.log(`${name} Stop clikcing me`)
    }
    
    let count = 0; 

    const handleClickCount = (name) => {
        if (count < 3){
            count++; 
            console.log(`${name} you clicked me ${count} times`); 
        }
        else {
            console.log(`${name} stop clicking me`)
        }
    }

    const buttonClick = (e) => e.target.textContent = "Ouch!";

    return (
        // if we write like this then we will invoke it right away handleClick2("name")
        // to handle that we use () => 
        <>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClick2("name")}>Click Me</button>
            <button onClick={() => handleClickCount("name")}>Click Me</button>
            <button onClick={(e) => buttonClick(e)}>Click Me</button>
            <button onDoubleClick={(e) => buttonClick(e)}>Click Me</button>
        </>
    );
}

export default Click;