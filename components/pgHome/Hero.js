export default function Hero() {
  return (
    <div>
      <div
        style={{ height: "33.33vh" }}
        className="relative border-y border-gray-200"
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
      <div className="bottom-part"></div>
    </div>
  );
}
