'use client'

import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {

    const [open, setOpen] = useState(false);

    const buttonContent = [
        "mehr...",
        "weniger"
    ]

    return (
        <div className="flex flex-col sm:flex-row justify-start space-y-6 px-12 sm:space-y-0 sm:space-x-20 sm:pt-48 pt-36" id="about">
            <h1 className="sm:hidden text-5xl font-semibold">About me</h1>
            <img src="/merlinka_v1/about.jpg" className="w-[514px] object-scale-down" />
            <motion.div
                className="flex flex-col space-y-4 sm:space-y-8 sm:w-[40%]"
                layout
            >
                <h1 className="hidden sm:block text-6xl font-semibold">About me</h1>
                <motion.p
                    className={`text-lg ${open ? 'h-fit' : 'h-[20vh]'} sm:h-fit overflow-hidden`}
                    layout
                >Hallo ihr Lieben! Ich bin Merle. <br /><br />
                    Ich stehe so gern hinter der Kamera und fange die besonderen, kleinen und feinen Momente des
                    Lebens ein.<br />
                    Ich liebe das Licht, wenn es Morgens die ersten Staubkörner des Tages sichtbar tanzen lässt. Ich
                    liebe die kleinen Details in einer Situation, wie Gesten, Blicke und Berührungen, die scheinbar
                    beiläufig passieren. Für mich werden sie sichtbar und ich möchte sie für euch konservieren. Eure
                    ganz kleinen, einzigartigen Zeitmomente. Und wenn ich Glück habe, gelingt es mir, dass ihr durch
                    meine Fotos genau diesen Zeitmoment noch einmal Jahre später riechen und fühlen könnt.<br />
                    Das wär’s!<br />
                    Ich freue mich sehr auf euch und kann es kaum erwarten, eure Zeitmomente festzuhalten, für
                    immer.
                </motion.p>
                <p className="sm:hidden" onClick={() => {
                    if (open) {
                        const element = document.getElementById("about");
                        element?.scrollIntoView({
                            behavior: "smooth",
                        })
                        setOpen(!open)
                    } else {
                        setOpen(!open);
                    }

                }}>{open ? buttonContent[1] : buttonContent[0]}</p>
            </motion.div>
        </div>

    )
}

