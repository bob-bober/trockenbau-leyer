const imgOpenModernGlassDoors20250210075206Utc =
  "http://localhost:3845/assets/26e8144081da5f75679881829ca24151eeafbad9.png";

export default function Section4() {
  return (
    <section className="bg-[#fbfbfb]">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="relative h-[918px] w-full">
          <img
            src={imgOpenModernGlassDoors20250210075206Utc}
            alt="Innenausbau Raum"
            className="absolute left-1/2 top-[57px] h-[861px] w-[1049px] -translate-x-1/2 object-cover"
          />

          <div className="absolute left-1/2 top-0 flex w-[916px] -translate-x-1/2 flex-col items-center text-center leading-[1.2]">
            <p className="text-[80px] text-black">PROJEKTE REALISIEREN</p>
            <p className="text-[80px] text-[#e66a1e]">SEIT 1996.</p>
          </div>

          <div className="absolute right-[70px] bottom-[50px] flex flex-col items-end text-[#e66a1e] leading-[1.2]">
            <p className="text-[70px]">Kontakt</p>
            <p className="text-[61px]">Über Uns</p>
            <p className="text-[47px]">Unsere Leistungen</p>
          </div>
        </div>
      </div>
    </section>
  );
}