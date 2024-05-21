
import Test from "./index"

import fetchGraphQL from "../../../api/fetcher"


export default async function TestPage() {
    return (
        <div className=" h-[100vh] sm:h-[120vh] flex flex-col sm:flex-row justify-start space-y-6 px-12 sm:space-y-0 sm:space-x-20 pt-48" id="about">
            <h1 className="sm:hidden text-5xl font-semibold">Meinungen</h1>
            <div>
                <img src="/Meinungen_Image.webp" className="w-[514px] object-scale-down" />
            </div>
            <div className="sm:w-[40%]">
                <h1 className="hidden sm:block text-6xl font-semibold text-black">Meinungen</h1>
                <Test meinungen={meinungArray} namen={nameArray} />
            </div>
        </div >

    )

}

const data = await fetchGraphQL(
    `query{
        meinungCollection {
          items {
            inhalt {
              json
            }
            name
          }
        }
      }`
)

const meinungArray = [];
const nameArray = [];

function arraybuilder() {
    data.data.meinungCollection.items.map((item) => {
        meinungArray.push(item.inhalt.json.content[0].content[0].value)
        nameArray.push(item.name);
    })
    return (
        meinungArray,
        nameArray
    )
}

arraybuilder()
