import Linkbutton from "../components/Linkbutton";
import laptopPH from "../assets/laptopph.png";
import bildSchirm from "../assets/bildschirm.png";
import laptop from "../assets/laptop.png";
import firmas from "../assets/firmas.png";
import sunlight from "../assets/sunlight.png";
import hands from "../assets/hands.png";
import Gridlist from "../components/Gridlist";

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
            <div className="bg-secondarybutton rounded h-20  mb-4"></div>
            <div className="mb-4">
              <img src={laptopPH} alt="Laptop PH" className="w-full" />
            </div>
            <div className="mb-4">
              <img src={bildSchirm} alt="Bildschirm" className="w-full" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="mb-4">
            <img src={laptop} alt="Laptop" className="w-full" />
          </div>
          <div className="bg-customYellow rounded h-20 mb-4"></div>
        </div>
      </div>
      <div className="m-4">
        <h1 className="md:text-3xl text-lg font-semibold text-gray-800">
          Gefördert dursch
        </h1>
        <img src={firmas} alt="Firmas" className="w-full" />
      </div>
      {/*  */}
      <div className="flex-col spa">
        <div className="pt-14 p-4">
          <h2 className="md:text-3xl text-lg font-semibold text-gray-800">
            So funktioniert we.together
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-center lg:pt-8">
          <div className="mb-4 lg:w-1/2">
            <img src={sunlight} alt="Sunlight PH" className="w-full" />
          </div>

          <div className="flex-col m-2 md:m-10 md:pl-10 lg:w-1/2">
            {" "}
            {/* Use lg:w-1/2 here */}
            <h1 className="text-xl md:text-3xl text-gray-800 font-light">
              Finde deine Gruppe
            </h1>
            <p className="pt-4 mb-4">
              Finde aus zahlreichen Gruppen, die passende(n) für Dich und
              tausche Dich online, in regelmäßigen Terminen, mit anderen
              Betroffene aus, die in der gleichen Situation sind wie Du.
            </p>
            <div className="py-4">
              <Linkbutton
                title="Gruppe finden"
                route="/"
                bgColor="bg-secondarybutton"
                textColor="text-white"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center lg:pt-8">
          <div className="flex-col m-2 md:m-10 md:p-10 lg:w-1/2">
            <h1 className="text-xl md:text-3xl text-gray-800 font-light">
              Starte neue Gruppen{" "}
            </h1>
            <p className="pt-4">
              Zu jedem beliebigen Thema hast du die Möglichkeit eine Gruppe zu
              eröffnen und Menschen zusammenzubringen. Erstelle mit unserer
              Hilfe in nur vier Schritten deine Selbsthilfegruppe. We.together
              ist für Gruppen ModeratorInnen komplett kostenlos.
            </p>
            <div className="py-6">
              <Linkbutton
                title="Gruppe starten"
                route="/"
                bgColor="bg-secondarybutton"
                textColor="text-white"
              />
            </div>
          </div>
          <div className="mb-4 lg:w-1/2">
            <img src={hands} alt="Sunlight PH" className="w-full" />
          </div>
        </div>
        <div className="px-4">
          <h2 className="md:text-3xl text-lg font-semibold text-gray-800 mb-8">
            Deine Vorteile mit we.together
          </h2>
          <Gridlist />
        </div>
        <div className="bg-customYellow rounded my-4">
          <div className="p-40 text-center">Placeholder Payment Wall</div>
        </div>
        <div className="px-4">
          <h2 className="md:text-3xl text-lg font-semibold text-gray-800 mb-8">
            Finde Die richtige Gruppe für Dich
          </h2>
        </div>
        <div className="px-4">
          <h2 className="md:text-3xl text-lg font-semibold text-gray-800 mb-8">
            Gemeinsam Selbsthilfe ermöglichen{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}
