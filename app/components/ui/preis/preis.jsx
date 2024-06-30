export default function Preis({ content, preis, name, image, altImage }) {
  return (
    <div className="flex flex-col justify-between space-y-4 sm:flex-row">
      <img src={image} alt={altImage} className=" w-[480px] sm:hidden" />
      <div className="flex flex-col sm:space-y-4">
        <div className=" flex flex-row justify-between">
          <h2 className="text-2xl font-semibold uppercase sm:hidden">{name}</h2>
          <p className="text-end text-lg font-medium sm:hidden">{preis}</p>
        </div>
        <h2 className="hidden text-2xl font-semibold uppercase sm:block">
          {name}
        </h2>
        <ul>
          {content?.map((data, index) => {
            return (
              <li
                key={index}
                className=" text-base uppercase leading-4 sm:text-xl"
              >
                {data}
              </li>
            );
          })}
        </ul>
        <p className="hidden text-2xl font-medium sm:block">{preis}</p>
      </div>
      <img src={image} alt={altImage} className="hidden w-[480px] sm:block" />
    </div>
  );
}
