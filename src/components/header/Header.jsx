import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import ThemeToggler from "../theme/ThemeToggler";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import Search from "./Search";

export default function Header() {
  return (
    <header className="flex justify-center py-3 border-b sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="mark-header flex justify-between items-center">
        <Link href="/">
          <Image
            className="w-[150px] lg:w-[180px] h-auto"
            src={Logo}
            alt="logo"
            width={180}
            height={100}
          />
        </Link>
        <div>
          <Navigation />
        </div>
        <div className="group">
          <ThemeToggler />
          <Search />
          {/* mobile navigation */}
          <MobileNavigation />
        </div>
      </nav>
    </header>
  );
}
