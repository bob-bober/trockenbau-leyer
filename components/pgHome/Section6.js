const imgModernArchitectureInOfficeHallway20250403050930Utc =
  "http://localhost:3845/assets/51f50e083c9fba5aa0e70e765d8c57d5f1d77fdf.png";

const fields = [
  { id: "name", label: "Name:" },
  { id: "email", label: "E-Mail:" },
  { id: "message", label: "Nachricht:" },
];

export default function Section6() {
  return (
    <section className="bg-[#fbfbfb]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-10 lg:grid-cols-[551px_1fr] lg:gap-[125px] lg:px-[73px] lg:py-14">
        {/* Left image */}
        <div className="w-full max-w-[551px] overflow-hidden">
          <div className="relative aspect-[551/827]">
            <img
              src={imgModernArchitectureInOfficeHallway20250403050930Utc}
              alt="Moderner Büroflur"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-col">
          <div className="mb-10">
            <p className="text-[80px] leading-[1.2] text-black">KONTAKT</p>
            <p className="text-[80px] leading-[1.2] text-[#e66a1e] uppercase">AUFNEHMEN</p>
          </div>

          <form className="flex flex-col gap-10 text-[21px] leading-[1.3] text-[#120802]">
            {fields.map((field) => (
              <label key={field.id} className="flex flex-col gap-3">
                <span className="text-[21px] leading-[1.3] text-[rgba(18,8,2,0.5)]">
                  {field.label}
                </span>
                <input
                  id={field.id}
                  name={field.id}
                  className="border-b border-[rgba(18,8,2,1)] bg-transparent pb-3 pt-2 text-[21px] leading-[1.3] text-[#120802] focus:outline-none"
                  type={field.id === "email" ? "email" : "text"}
                />
              </label>
            ))}

            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="h-[72px] w-[239px] rounded-[10px] bg-[#e66a1e] text-[21px] leading-[1.3] text-black shadow-sm transition hover:brightness-95"
              >
                Nachricht senden
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
