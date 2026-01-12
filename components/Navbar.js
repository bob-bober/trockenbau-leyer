import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 px-12">
      <Link href="/">
        <Image src="/images/logo.svg" alt="Logo" width={180} height={180} />
      </Link>
      <div>
        <ul className="flex justify-between gap-20">
          <li className="nav-link">
            <div className="org-box"></div>
            <Link href="/ueber-uns">Über Uns</Link>
          </li>
          <li className="nav-link">
            <div className="org-box"></div>
            <Link href="/leistungen">Leistungen</Link>
          </li>
          <li className="nav-link">
            <div className="org-box"></div>
            <Link href="/gewerbe">Gewerbe</Link>
          </li>
          <li className="nav-link">
            <div className="org-box"></div>
            <Link href="/privat">Privat</Link>
          </li>
        </ul>
      </div>
      <div className="nav-link">
        <div className="org-box"></div>
        <Link href="/kontakt">Kontakt</Link>
      </div>
    </nav>
  );
}
