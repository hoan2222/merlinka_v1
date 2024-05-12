import { getDocuments } from "outstatic/server";

import Test from "./index"



export default async function TestPage() {
    const data = await getData();

    return (
        <div className=" h-[100vh] sm:h-[60vh] flex flex-col sm:flex-row justify-start space-y-6 px-12 sm:space-y-0 sm:space-x-20 pt-48" id="about">
            <h1 className="sm:hidden text-5xl font-semibold">Meinungen</h1>
            <img src="/PlaceHolder_slim.png" alt="" style={{ width: "514px" }} />
            <div className="sm:w-[40%]">
                <h1 className="hidden sm:block text-6xl font-semibold text-black">Meinungen</h1>
                <Test array={data} />
            </div>
        </div >

    )

}



async function getData() {
    const reviews = getDocuments('Rezension', ['title', 'content'])

    return reviews;
}