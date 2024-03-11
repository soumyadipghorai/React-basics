import React, {useEffect, useState} from "react"

export default function FetchAPI() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState({});

    const apiGet = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => { 
            setData(json)
        }) 
    }

    const apiPost = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', 
            body: JSON.stringify({
                title : input.title, 
                body: input.body, 
                userId : parseInt(input.userid)
            }), 
            headers : {
                "Content-type": "application/json; charset-UTF-8"
            },
        })
        .then((response) => response.json())
        .then((json) => { 
            console.log(json)
        }) 
    }

    const handleInputChange = (event) => {
        setInput((input) => ({
            ...input, [event.target.name]:event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        apiPost();
        console.log(input);
    }

    // useEffect(() => {
    //     apiGet();
    // }, [])

    // <p>{JSON.stringify(data, null, 2)}</p>
    return (
        <>
            <div className="card p-4">
                <h2>Fetch API</h2>
                <ol>
                    {data.map((item) => (
                        <div className="border m-2 p-2 rounded">
                            <li key={item.id}>{item.title}, {item.userId}</li>
                        </div>
                    ))}
                </ol>
                <button className="btn btn-sm btn-primary" onClick={apiGet}>Fetch</button>
            </div>
            <div className="card form">
                <form action="" onSubmit={handleSubmit}>
                    <input onChange={handleInputChange} className="p-2 m-2" type="text" name="title" placeholder="enter title..."/>
                    <input onChange={handleInputChange} className="p-2 m-2" type="text" name="body" placeholder="enter body..."/>
                    <input onChange={handleInputChange} className="p-2 m-2" type="text" name="userid" placeholder="enter userId..."/>
                    <input onChange={handleInputChange} className="btn btn-primary" type="submit" value="submit"/>
                </form>
            </div>
        </>
    )
}