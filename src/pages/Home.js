import Linkbutton from "../components/Linkbutton";
import laptopPH from "../assets/laptopph.png";
import bildSchirm from "../assets/bildschirm.png";
import laptop from "../assets/laptop.png";
import firmas from "../assets/firmas.png";

export default function Home() {
  return (
    <div className="pt-36 p-8 md:pt-24 mx-2">
      <div className="flex flex-col md:flex-row md:items-center ">
        <div className="flex-col m-4 lg:w-1/2">
          <h1 className="text-4xl md:text-6xl text-gray-800 font-light mb-4">
            Online Selbsthilfegruppen
          </h1>
          <p className="pt-4 mb-4">
            Tausche Dich mit anderen Betroffenen aus oder starte eine neue
            Gruppe. Unabhängig von deinem Wohnort und passend zu deiner
            Lebenssituation.
          </p>
          <div className="pt-4">
            <Linkbutton
              title="Kostenlos Starten"
              route="/"
              bgColor="bg-primarybutton"
              textColor="text-white"
            />
          </div>
        </div>
        <div className="flex-row m-2">
          <div className="flex-col">
            <div className="bg-secondarybutton rounded h-16 m-1"></div>
            <div className="m-1">
              <img src={laptopPH} alt="Laptop PH" className="w-full" />
            </div>
            <div className="m-1">
              <img src={bildSchirm} alt="Bildschirm" className="w-full" />
            </div>
          </div>
        </div>
        <div className="m-1">
          <div className="m-1">
            <img src={laptop} alt="Laptop" className="w-full" />
          </div>
          <div className="bg-customYellow rounded h-16 m-1"></div>
        </div>
      </div>
      <div className="m-20"></div>
      <h1 className="text-4xl md:text-lg font-bold text-gray-800 ml-4">
        Gefördert dursch
      </h1>
      <img src={firmas} alt="Firmas" className="w-full" />
    </div>
  );
}
