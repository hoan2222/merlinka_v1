
import Image from "next/image"

export default function About() {

    return (
        <div className="flex flex-col sm:flex-row justify-start space-y-6 px-12 sm:space-y-0 sm:space-x-20 sm:pt-48 pt-36" id="about">
            <h1 className="sm:hidden text-5xl font-semibold">About me</h1>
            <Image src="/about.jpg" width={514} height={514} />
            <div className="flex flex-col space-y-8 sm:w-[40%]">
                <h1 className="hidden sm:block text-6xl font-semibold">About me</h1>
                <p className="text-lg">Hallo ihr Lieben! Ich bin Merle. <br /><br />
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
                </p>
            </div>
        </div>

    )
}   