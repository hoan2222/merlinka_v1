'use client'

import Preis from "../ui/preis/preis"

const content = [
    {
        "title": "Mini",
        "preis": "180€",
        "image": "/PlaceHolder_slim.png",
        "list": ["30 Minuten Shooting", "15 bearbeitete Fotos", "Onlinegalerie", "1 Foto als Print"]
    },
    {
        "title": "Midi",
        "preis": "220€",
        "image": "/PlaceHolder_slim.png",
        "list": ["1 Stunde Shooting", "45 bearbeitete Fotos", "Onlinegalerie", "2 Foto als Print"]
    },
    {
        "title": "Maxi",
        "preis": "280€",
        "image": "/PlaceHolder_slim.png",
        "list": ["1,5-2 Stunden Shooting", "80 bearbeitete Fotos", "Onlinegalerie", "3 Foto als Print"]
    }
]



export default function Preisliste() {

    return (
        <div className="flex flex-col space-y-8 px-12 sm:px-32 pt-48" id="preise">
            <h1 className="text-5xl font-semibold pb-2">Preise</h1>
            {content.map((data) => {
                return (
                    <Preis name={data.title} content={data.list} preis={data.preis} image={data.image} />
                )
            })}
            <p className="text-base leading-4 sm:text-xl sm:w-[45%] pt-2">SOLLTE FÜR EUCH KEINE VARIANTE DABEI SEIN, KÖNNEN WIR GERN GEMEINSAM EIN INDIVIDUELLES ANGEBOT ERSTELLEN</p>
        </div>

    )
}