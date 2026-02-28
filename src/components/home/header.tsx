import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { LinksTypeList } from "@/utils/types/linksType";

export default function Header() {
  const navLinks: LinksTypeList = [
    {
      name: "about",
      path: "#",
    },
    {
      name: "courses",
      path: "#",
    },
    {
      name: "timings",
      path: "#",
    },
    {
      name: "faculty",
      path: "#",
    },
    {
      name: "testimonials",
      path: "#",
    },
    {
      name: "contact",
      path: "#",
    },
  ];
  return (
    <>
      <header className="w-full font-sans font-medium fixed top-0 left-0 z-50 glass">
        <nav className="flex justify-between items-center px-4 md:px-8 py-3.5 md:py-3 mx-auto w-full xl:max-w-7xl">
          {/* Logo & Title */}
          <div className="text-xl font-bold whitespace-nowrap shrink flex items-center">
            <div className="size-8 rounded-full shadow-sm mr-1.5">
              <Image src={logo} width={100} height={100} alt="logo" />
            </div>
            <Link href={"/"}>
              <span className="text-secondary">Dikshant</span>{" "}
              <span className="text-primary">Institute</span>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex text-muted text-sm items-center gap-x-4">
            {navLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className="hover:text-secondary transition-effect capitalize"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="#"
              className="flex justify-center items-center text-white bg-primary px-3 py-2 rounded-lg btn hover:bg-primary/90"
            >
              Enroll Now
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
