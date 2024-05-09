

export default function About() {

    return (
        <div className="flex flex-col sm:flex-row justify-start space-y-6 px-12 sm:space-y-0 sm:space-x-20 pt-48" id="about">
            <h1 className="sm:hidden text-5xl font-semibold">About me</h1>
            <img src="/PlaceHolder.png" alt="" />
            <div className="flex flex-col space-y-8 sm:w-[40%]">
                <h1 className="hidden sm:block text-6xl font-semibold">About me</h1>
                <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Asperiores ab dolor consequuntur natus sed quisquam aliquid
                    sint quibusdam recusandae ad rem nemo architecto aspernatur
                    explicabo quod ratione, optio necessitatibus reiciendis?
                </p>
            </div>
        </div>
    )
}   