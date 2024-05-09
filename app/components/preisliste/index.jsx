import Preise from "./preise"



export default async function Preisliste() {

    return (
        <div className="flex flex-col space-y-8 px-12 sm:px-32 pt-48" id="preise">
            <h1 className="text-5xl font-semibold pb-2">Preise</h1>
            <Preise />
            <p className="text-base leading-4 sm:text-xl sm:w-[45%] pt-2">SOLLTE FÜR EUCH KEINE VARIANTE DABEI SEIN, KÖNNEN WIR GERN GEMEINSAM EIN INDIVIDUELLES ANGEBOT ERSTELLEN</p>
        </div>

    )
}