import { navItems } from "@/data/nav-data";
import Link from "next/link";

export default function Navigation() {
  return (
    <ul className="hidden lg:flex gap-5 text-sm font-medium text-muted-foreground">
      {navItems.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className="hover:text-primary transition-colors duration-300"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
