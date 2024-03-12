import React, {useEffect, useState} from "react";


const baseURL = "http://localhost:8000";
export default function CustomAPI() {
    const [injection, setInjection] = useState(); 
    const [post, setPost] = useState(); 

    const flag = -1;

    const apiGet = async () => {
        await fetch(`${baseURL}/injection`)
        .then((response) => response.json())
        .then((injectionOutput) => {
            console.log(injectionOutput)
            setInjection(injectionOutput)
            if (flag === 0) {
                fetch(`${baseURL}/query-posted`, {
                    method : 'POST',
                    body : JSON.stringify({
                        query : "something",
                        injection : injectionOutput
                    }),
                    headers : {
                        "Content-type": "application/json; charset-UTF-8"
                    },
                })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    setPost(json)
                })
            }
        })
    }

    useEffect(() => {
       apiGet();
        // const reformattedArray = injection.map(({ data, value }) => ({ data: value }));
    }, [])



    return (
        <>
            <div className="card">
                <h4>Custom fetch</h4>
            </div>
        </>
    )
}