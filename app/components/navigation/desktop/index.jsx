'use client'

import { useRef } from "react"

export default function NavElement() {



    return (
        <div className="flex flex-row space-x-16 font-medium text-2xl rounded-full py-3 px-7 w-fit border-2 border-black bg-white">
            <button onClick={() => {
                const element = document.getElementById("head");
                element?.scrollIntoView({
                    behavior: "smooth"
                })
            }}>Home</button>
            <button onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({
                    behavior: "smooth"
                })
            }}>About</button>
            <button onClick={() => {
                const element = document.getElementById("preise");
                element?.scrollIntoView({
                    behavior: "smooth"
                })
            }}>Preise</button>
            <button onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({
                    behavior: "smooth"
                })
            }}>Contact</button>
        </div>
    )
}