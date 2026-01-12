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
        <div className="absolute">
          <h1 className="text-5xl font-bold text-center mt-12">
            Trockenbau Leyer
          </h1>
          <h1 className="text-center mt-4 text-lg">
            Ihr Partner für Trockenbau und Innenausbau
          </h1>
        </div>
      </div>
      <div className="bottom-part"></div>
    </div>
  );
}
