'use client'
import { useEffect, useState } from "react"

import { motion } from "framer-motion";



export default function Test({ array }) {



    const [index, setIndex] = useState(0);

    useEffect(() => {

        const intervall = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % array?.length);
            console.log(index);
        }, 2000);
        return () => clearInterval(intervall);
    }, [])

    return (
        <div className=" flex flex-col space-y-2">
            <p className=" font-light text-base leading-4 sm:leading-none sm:text-xl sm:pt-24">
                {array[index].content}
            </p>
            <h1 className="font-normal" layout>{array[index].title}</h1>
        </div>
    )
}
