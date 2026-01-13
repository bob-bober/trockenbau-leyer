const stats = [
  { value: "600+", label: "PROJEKTE REALISIERT" },
  { value: "100%", label: "TERMINTREUE" },
  { value: "> 100.000 m²", label: "VERBAUTE FLÄCHE" },
];

export default function Section5() {
  return (
    <section className="bg-[#fbfbfb] border-y border-[rgba(18,8,2,0.25)]">
      <div className="mx-auto flex max-w-[1440px] flex-col">
        <div className="grid grid-cols-1 border-b border-[rgba(18,8,2,0.25)] lg:grid-cols-[1.3fr_0.9fr_1fr]">
          <div className="px-6 py-14 lg:py-16">
            <p className="text-[80px] leading-[1.2] text-black">PLANEN &</p>
            <p className="text-[80px] leading-[1.2] text-[#e66a1e]">
              AUSFÜHREN
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 border-t border-[rgba(18,8,2,0.25)] px-6 py-10 text-center lg:border-t-0 lg:border-l">
            <p className="text-[80px] leading-[1.2] text-[#e66a1e]">25+</p>
            <p className="text-[21px] leading-[1.3] text-black">
              JAHRE ERFAHRUNG
            </p>
          </div>

          <div className="border-t border-[rgba(18,8,2,0.25)] px-6 py-10 text-[21px] leading-[1.3] text-black lg:border-t-0 lg:border-l">
            <p className="mb-4">
              Seit über zwei Jahrzehnten realisieren wir komplexe
              Innenausbauprojekte für Unternehmen, Architekten und öffentliche
              Auftraggeber.
            </p>
            <p>
              Unsere Erfahrung zeigt sich nicht in Worten, sondern in Zahlen –
              in Projekten, Quadratmetern und Jahren technischer Verantwortung.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 divide-y divide-[rgba(18,8,2,0.25)] lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center"
            >
              <p className="text-[80px] leading-[1.2] text-[#e66a1e]">
                {item.value}
              </p>
              <p className="text-[21px] leading-[1.3] text-black">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
