import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div
        style={{ height: "33.33vh" }}
        className="relative border-y border-gray-200 mb-12"
      >
        <div className="flex w-full h-full absolute">
          <div className="w-1/4 h-full border-r border-gray-200"></div>
          <div className="w-1/4 h-full border-r border-gray-200"></div>
          <div className="w-1/4 h-full border-r border-gray-200"></div>
          <div className="w-1/4 h-full"></div>
        </div>
        <div className="absolute w-full h-full flex flex-col justify-center px-12 gap-1">
          <h1 className="text-7xl font-light text-right">
            Planung. Koordination. Umsetzung.
          </h1>
          <h1 className="text-7xl text-accent font-light text-right pr-[25%]">
            Innenräume aus einer Hand.
          </h1>
        </div>
      </div>
      <div className="px-12 relative">
        <Image
          src="/images/homeHero.jpg"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
        <div className="absolute -bottom-10 right-24 bg-background/82 max-w-114 py-6 px-4">
          <h2 className="text-3xl mb-4">
            Komplexe Projekte klar strukturiert.
          </h2>
          <p className="text-lg">
            Wir verbinden Planung, Koordination und Umsetzung im Innenausbau –
            für reibungslose Abläufe und saubere Ergebnisse.
          </p>
          <p className="mt-4">
            Trockenbau Leyer steht für durchdachte Raumkonzepte, die Funktion,
            Akustik und Ästhetik präzise vereinen. Als Fachbetrieb mit
            jahrzehntelanger Erfahrung übernehmen wir Verantwortung für jedes
            Detail – von der ersten Abstimmung bis zur finalen Montage.
          </p>
        </div>
      </div>
    </div>
  );
}
