function NewButton(){

    // inline css 
    const styles = {
        backgroundColor: "aqua",
        padding: "4% 3%",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer"
    }

    return(
        <button style={styles}>Click Me</button>
    )
}

export default NewButton;