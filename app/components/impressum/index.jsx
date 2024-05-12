'use client'

import { motion } from "framer-motion"

export default function Impressum() {

    return (

        <div className=" flex flex-col space-y-10 px-12 sm:px-32 pt-48">
            <h1 className="text-5xl font-semibold">Impressum</h1>
            <ul className=" space-y-1">
                <li>Merle Puntke</li>
                <li>Kleine Straße 2</li>
                <li>14482 Potsdam</li>
                <li>info@merlinkafoto.de</li>
                { /*
                <li>Umsatzsteuer-ID:
                    Umsatzsteuer-Identifikationsnummer
                    <br />gemäß § 27 a Umsatzsteuergesetz: DE123456789
    </li> */}
                <li className="pt-5">
                    Foto "About" by Manuela Clemens
                </li>
                <li className="pt-10">
                    <a href="https://www.instagram.com/merlinka.foto?igsh=ZzE3NTB3Y3VneWZ3">
                        <motion.img src="/Instagram_Glyph_Black.svg" alt="Hier gehts zu Instagram" width={30}
                            whileHover={{
                                scale: 1.2,
                                transition: {
                                    duration: 0.2
                                }
                            }}
                        />
                    </a>
                </li>

            </ul>
        </div>
    )
}