import { Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import { Separator } from "../ui/separator";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="bg-card border-t border-border">
      <div className="mark-container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/">
                <Image src={Logo} alt="logo" />
              </Link>
            </div>
            <p className="text-muted-foreground text-sm mb-4 text-pretty">
              Whether it’s a dream home, a modern apartment, a commercial hub,
              or an innovative workspace, we transform your ideas into reality
              with precision and expertise.
            </p>
          </div>

          <div className="mx:0 md:mx-auto">
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Real Estate Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Engineering Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Cost Estimate
                </Link>
              </li>
            </ul>
          </div>

          <div className="mx:0 md:mx-auto">
            <h3 className="font-semibold text-foreground mb-4">Follow Us On</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/markdesignbd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-foreground cursor-pointer transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <Separator className="my-8" />
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mark Design & Engineering Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
