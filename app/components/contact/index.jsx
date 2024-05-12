'use client'

import { motion } from "framer-motion";

import EmailButton from "../ui/buttons/emailButton"

export default function Contact() {

    return (
        <div className="flex flex-col sm:flex-row justify-start space-y-6 px-12 sm:space-y-0 sm:space-x-20 pt-48" id="contact">
            <h1 className="sm:hidden text-5xl font-semibold">Contact</h1>
            <img src="/about.jpg" alt="" className="w-[514px] h-[514px]" />
            <div className="flex flex-col space-y-4 sm:space-y-6 sm:w-[40%]">
                <h1 className="hidden sm:block text-6xl font-semibold">Contact</h1>
                <p className=" text-base leading-4 sm:leading-none sm:text-xl sm:pt-24">
                    Du hast noch Fragen oder möchtest einen Termin anfragen ?
                </p>
                <motion.a href="mailto:info@merlinkafoto.de"
                    whileHover={{
                        scale: 1.08,
                        transition: {
                            duration: 0.2
                        }
                    }}
                    className="w-fit"
                >
                    <EmailButton />
                </motion.a>
            </div>
        </div>
    )
}