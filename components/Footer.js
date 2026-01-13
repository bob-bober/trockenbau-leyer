const imgGroup4 =
	"http://localhost:3845/assets/2753baf5b9563a282e647fec30551cbe489eabe1.svg";

export default function Footer() {
	const legalLinks = [
		{ label: "Impressum", href: "/impressum" },
		{ label: "AGB", href: "/agb" },
		{ label: "Datenschutzerklärung", href: "/datenschutz" },
	];

	return (
		<footer className="bg-[#fbfbfb] border-t border-[rgba(18,8,2,0.15)]">
			<div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-10 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-[46px] lg:py-[50px]">
				{/* Logo */}
				<div className="flex-shrink-0">
					<img
						src={imgGroup4}
						alt="Trockenbau Dirk Leyer Logo"
						className="h-[227px] w-[425px] max-w-full"
					/>
				</div>

				{/* Contact */}
				<div className="flex flex-col gap-2 text-[21px] leading-[1.3] text-black">
					<span className="text-[21px] leading-[1.3] text-black">Rufnummer:</span>
					<span className="text-[27px] leading-[1.2] text-[#262626]">02253 – 544 82 65</span>
					<span className="mt-2 text-[21px] leading-[1.3] text-black">E-Mail:</span>
					<span className="text-[27px] leading-[1.2] text-[#262626]">
						kontakt@trockenbau-leyer.de
					</span>
				</div>

				{/* Legal links */}
				<div className="flex flex-col gap-4 text-[16px] leading-[1.2] text-[#262626]">
					{legalLinks.map((link) => (
						<a key={link.href} href={link.href} className="hover:text-[#e66a1e]">
							{link.label}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}