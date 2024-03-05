import React, {useState, useEffect} from "react";

export default function DigitalClock() {
    const [time, setTime] = useState(new Date()); 

    useEffect(() => {
        // 1000ms = 1 sec 
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        // clean up after unmount 
        return () => {
            clearInterval(intervalId);
        }
    }, [])

    const padZero = (number) => {
        return (number < 10 ? "0" : "") + number; 
    }

    const formatTime = () => {
        let hours = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();

        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)} : ${padZero(mins)} : ${padZero(secs)} ${padZero(meridiem)}`
    }

    return (
        <>
            <div className="container card">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
    )
}