import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { LinksTypeList } from "@/utils/types/linksType";

export default function Footer() {
  const quickLinks: LinksTypeList = [
    {
      name: "about",
      path: "#about",
    },
    {
      name: "courses",
      path: "#courses",
    },
    {
      name: "timings",
      path: "#timings",
    },
    {
      name: "faculty",
      path: "#faculty",
    },
    {
      name: "testimonials",
      path: "#testimonials",
    },
    {
      name: "contact",
      path: "#contact",
    },
  ];

  const coursesLinks: LinksTypeList = [
    {
      name: "DCA",
      path: "#courses",
    },
    {
      name: "PGDCA",
      path: "#courses",
    },
    {
      name: "CPCT Prep",
      path: "#courses",
    },
    {
      name: "TALLY",
      path: "#courses",
    },
    {
      name: "CIT",
      path: "#courses",
    },
    {
      name: "CCA",
      path: "#courses",
    },
  ];

  const followHandles: LinksTypeList = [
    {
      name: "facebook",
      path: "#",
    },
    {
      name: "instagram",
      path: "https://www.instagram.com/dikshantinstitute",
    },
    {
      name: "x",
      path: "#",
    },
    {
      name: "youtube",
      path: "https://www.youtube.com/@dikshantinstitute",
    },
  ];
  return (
    <>
      <footer className="w-full border-t border-gray-300 bg-secondary">
        <div className="flex flex-col md:flex-row justify-between mx-auto py-12 px-4 md:px-8 border-b border-gray-300 w-full xl:max-w-7xl">
          {/* Title & Description */}
          <div className="max-w-xs lg:max-w-sm mb-5">
            <div className="flex items-center">
              <div className="size-8 mr-1">
                <Image src={logo} width={100} height={100} alt="logo" />
              </div>
              <h6 className="font-bold text-xl text-white">
                <span className="text-primary">Dikshant</span> Institute
              </h6>
            </div>
            <p className="text-gray-200 my-3 text-sm tracking-wide">
              Empowering students with quality computer education and academic coaching since
              establishment.
            </p>
          </div>

          {/* Links Wrapper */}
          <div className="flex flex-1 flex-col md:flex-row justify-around gap-y-12 md:gap-y-0 pl-0 md:pl-14">
            {/* Quick Links */}
            <div className="text-gray-200 w-fit text-xs flex flex-col justify-center gap-y-3">
              <p className="text-white font-bold text-sm mb-1">Quick Links</p>
              {quickLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.path}
                  className="transition-effect hover:text-gray-100 capitalize"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Courses */}
            <div className="text-gray-200 w-fit text-xs flex flex-col justify-center gap-y-3">
              <p className="text-white font-bold text-sm mb-1">Courses</p>
              {coursesLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.path}
                  className="transition-effect hover:text-gray-100 capitalize"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Follow Us */}
            <div className="text-gray-200 w-fit text-xs flex flex-col justify-center gap-y-3 self-start">
              <p className="text-white font-bold text-sm mb-1">Follow Us</p>
              {followHandles.map((item, idx) => (
                <a
                  key={idx}
                  href={item.path}
                  target="_blank"
                  className="transition-effect hover:text-gray-100 capitalize"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center items-center py-8 px-5">
          <div className="text-xs text-gray-100 font-normal tracking-wide text-center flex flex-col items-center">
            <span>&copy; 2026 Dikshant Institute. All rights reserved.</span>
            <span>Made with ❤️ by TigerxInsights</span>
          </div>
        </div>
      </footer>
    </>
  );
}
