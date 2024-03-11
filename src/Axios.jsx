import axios from "./APIBase";
import React, {useEffect, useState} from "react";



export default function Axios() {

    const [data,  setData] = useState([]);
    const [isError, setIsError] = useState("")

    useEffect(() => {
        axios.get("/posts")
        .then((res) => {
            console.log('axios', res); 
            setData(res.data);
        })
        .catch((error) => {
            console.log(error)
            setIsError(error.message)
        })
    }, [])

    const getAPIData = async () => {
        try {
            const res = await axios.get("/posts");
            setData(res);
        } catch (error) {
            setIsError(error.message)
        }
    }

    // useEffect(() => {
    //     getAPIData();
    // }, [])

    return (
        <>
            <div className="">
                <h2>Axios</h2>
                {isError !== "" && <p>isError</p>}
                {data.slice(0, 12).map((post) => {
                    const {id, title, body} = post;
                    return <div className="card" key={id}>
                        <h5>{title.slice(0, 15).toUpperCase()}</h5>
                        <p>{body.slice(0, 100 )}</p>
                    </div>
                })}
            </div>
        </> 
    )
}