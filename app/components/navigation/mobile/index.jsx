'use client'

import { useState } from "react"
import { motion } from 'framer-motion';

import Cross from "../../ui/icons/cross";

export default function MobileNav() {

    let buttonStyle = "w-[85%] bg-black text-white font-medium text-3xl  pb-3 pt-3 grid grid-rows-animate-height-closed"

    const [closed, setOpen] = useState(true);

    function handleClick() {
        setOpen(!closed);
    }

    if (!closed) {
        buttonStyle = "w-[85%] bg-black text-white font-medium text-3xl  pb-2 pt-6 grid grid-rows-animate-height-open";
    }

    return (
        <motion.div
            className={buttonStyle}
            layout
            initial={{ borderRadius: 30 }}
            transition={{
                duration: 0.2
            }}

        >
            <div className=" overflow-hidden">
                <ul className="text-center space-y-4 pb-6 ">
                    <li><button onClick={() => {
                        const element = document.getElementById("head");
                        element?.scrollIntoView({
                            behavior: "smooth"
                        });
                        handleClick()
                    }}>Home</button></li>
                    <li><button onClick={() => {
                        const element = document.getElementById("about");
                        element?.scrollIntoView({
                            behavior: "smooth"
                        })
                        handleClick()
                    }}>About</button></li>
                    <li><button onClick={() => {
                        const element = document.getElementById("preise");
                        element?.scrollIntoView({
                            behavior: "smooth",
                        })
                        handleClick()
                    }}>Preise</button></li>
                    <li><button onClick={() => {
                        const element = document.getElementById("contact");
                        element?.scrollIntoView({
                            behavior: "smooth",
                        })
                        handleClick()
                    }}>Contact</button></li>
                </ul>
            </div>
            {closed ? (
                <motion.div className="flex justify-center" onClick={handleClick} layout>Menü</motion.div>
            ) : (
                <motion.div className=" fill-[#5b5b5b] flex justify-center" onClick={handleClick} layout><Cross width="40" /></motion.div>
            )
            }

        </motion.div>


    )
}


/*
<motion.ul className={closed ? 'hidden' : 'text-center space-y-5 pb-4'}
                variants={{
                    open: {
                        opacity: 1,
                        transition: {
                            type: "spring"
                        }
                    },
                    closed: {
                        opacity: 0,
                    }
                }}
            >
                <li><a href="/">Contact</a></li>
                <li><a href="/">Preise</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Home</a></li>
            </motion.ul>
*/