const img54409EmptyMeetingRoomInOffice20250405050250Utc =
  "http://localhost:3845/assets/3853150dca5f0783d032f7fc61741674c7723f8e.png";
const img20180504154934867IOs =
  "http://localhost:3845/assets/e9c784c7e2d84dd9d2bd4bf9ce67fee9ef848a37.png";
const imgAHallwayInAHospitalCorridorOfAnEmptyModer20250107071054Utc =
  "http://localhost:3845/assets/51d3f87a82cdf6e2be5f69e3b6500c052a359337.png";

export default function Section3() {
  return (
    <div className="bg-[#fbfbfb] relative w-full min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-[1440px] px-[27px]">
        {/* EXPERTISE Section */}
        <div className="bg-[rgba(230,106,30,0.1)] h-[300px] overflow-hidden relative">
          <p className="absolute left-6 top-[55px] text-[61px] text-[#e66a1e] leading-[1.2] whitespace-pre">
            EXPERTISE
          </p>
          <div className="absolute h-[300px] w-[230px] left-[459px] top-0">
            <img
              alt="Empty meeting room in office"
              className="w-full h-full object-cover"
              src={img54409EmptyMeetingRoomInOffice20250405050250Utc}
            />
          </div>
          <p className="absolute left-[745px] top-[55px] w-[523px] text-[21px] text-black leading-[1.3] whitespace-pre-wrap">
            Wir verbinden technische Erfahrung mit einem klaren Verständnis für
            Akustik, Konstruktion und Gestaltung.
            {"\n"}
            Jede Lösung entsteht auf Basis eines strukturierten
            Planungsprozesses, der Architektur, Statik, Brandschutz und
            Ausführung frühzeitig verbindet.
            {"\n"}
            So entstehen Innenräume, die funktional abgestimmt und technisch
            nachvollziehbar sind.
          </p>
        </div>

        {/* PRÄZISION Section */}
        <div className="bg-[rgba(230,106,30,0.1)] border-y border-[rgba(18,8,2,0.1)] h-[300px] overflow-hidden relative">
          <p className="absolute left-6 top-[54px] text-[61px] text-[#e66a1e] leading-[1.2] whitespace-pre">
            PRÄZISION
          </p>
          <div className="absolute h-[300px] w-[230px] left-[460px] top-0">
            <img
              alt="Office interior with glass walls"
              className="w-full h-full object-cover"
              src={img20180504154934867IOs}
            />
          </div>
          <p className="absolute left-[745px] top-[54px] w-[523px] text-[21px] text-black leading-[1.3] whitespace-pre-wrap">
            Unsere Arbeitsweise folgt klar definierten Prozessen: dokumentiert,
            koordiniert und auf langfristige Stabilität ausgelegt.
            {"\n"}
            Schnittstellen sind abgestimmt, Details durchdacht.
            {"\n"}
            Das Ergebnis sind termingerechte Umsetzungen mit technisch geprüfter
            Ausführung und dauerhaft sauberem Bestand.
          </p>
        </div>

        {/* VERTRAUEN Section */}
        <div className="bg-[rgba(230,106,30,0.1)] h-[300px] overflow-hidden relative">
          <p className="absolute left-6 top-[69px] text-[61px] text-[#e66a1e] leading-[1.2] whitespace-pre">
            VERTRAUEN
          </p>
          <div className="absolute h-[300px] w-[230px] left-[460px] top-0">
            <img
              alt="Hospital corridor hallway"
              className="w-full h-full object-cover"
              src={
                imgAHallwayInAHospitalCorridorOfAnEmptyModer20250107071054Utc
              }
            />
          </div>
          <p className="absolute left-[745px] top-[69px] w-[523px] text-[21px] text-black leading-[1.3] whitespace-pre-wrap">
            Wir begleiten Projekte partnerschaftlich und verbindlich.
            {"\n"}
            Klare Kommunikation, realistische Zeitpläne und konsequent
            abgestimmte Entscheidungen prägen unseren Umgang mit Auftraggebern
            und Gewerken.
            {"\n"}
            So entstehen Lösungen, die wirtschaftlich sinnvoll, technisch solide
            und gestalterisch konsistent sind.
          </p>
        </div>
      </div>
    </div>
  );
}
