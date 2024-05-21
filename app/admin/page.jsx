


export default function Admin() {
    return (
        <div className=" flex justify-center pt-20 ">
            <div className="flex flex-col space-y-20">
                <h1 className=" text-5xl font-bold">Merle bist du&apos;s ?</h1>
                <a href="/merlinka_v1">
                    <div className=" flex justify-center rounded-full border border-black py-8">
                        <p className=" hover:font-semibold">Ne, leider nicht...</p>
                    </div>
                </a>
                <a href="https://app.contentful.com/spaces/72vr5remawwr/home">
                    <div className=" flex justify-center rounded-full border border-black py-8">
                        <p className=" hover:font-semibold">Jap here I am</p>
                    </div>
                </a>

            </div>

        </div>
    )
}
