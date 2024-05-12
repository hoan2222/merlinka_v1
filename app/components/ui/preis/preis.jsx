

export default function Preis({ content, preis, name, image, altImage }) {


    return (

        <div className="flex flex-col space-y-4 sm:flex-row justify-between">
            <img src={image} alt={altImage} className=" sm:hidden" />
            <div className="flex flex-col sm:space-y-4">
                <div className=" flex flex-row justify-between">
                    <h2 className="sm:hidden text-2xl font-semibold">{name}</h2>
                    <p className="sm:hidden text-lg font-medium text-end">{preis}</p>
                </div>
                <h2 className="hidden sm:block text-2xl font-semibold">{name}</h2>
                <ul>{content?.map((data, index) => {
                    return (
                        <li key={index} className=" uppercase text-base leading-4 sm:text-xl">{data}</li>
                    )
                })}</ul>
                <p className="hidden sm:block text-2xl font-medium">{preis}</p>
            </div>
            <img src={image} alt={altImage} className="hidden sm:block" />
        </div>
    )
}