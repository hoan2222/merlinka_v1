'use client'
import { useEffect, useState } from "react"


export default function Test({ meinungen, namen }) {

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const intervall = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % meinungen?.length);
            console.log(index);
        }, 2000);
        return () => clearInterval(intervall);
    }, [])

    return (
        <div className=" flex flex-col space-y-2">
            <p className=" font-light text-base leading-4 sm:leading-none sm:text-xl sm:pt-24">
                {meinungen[index]}
            </p>
            <h1 className="font-normal" layout >{namen[index]}</h1>
        </div>
    )
}




