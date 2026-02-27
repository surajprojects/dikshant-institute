import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full border-t border-gray-300 bg-[#1d66b9]">
        <div className="flex flex-col md:flex-row justify-between mx-auto py-12 px-4 md:px-8 border-b border-gray-300 w-full xl:max-w-7xl">
          <div className="max-w-xs lg:max-w-sm mb-5">
            <h6 className="font-bold text-xl text-white">
              <span className="text-orange-400">Dikshant</span> Institute
            </h6>
            <p className="text-gray-200 my-3 text-sm tracking-wide">
              Empowering students with quality computer education and academic coaching since
              establishment.
            </p>
          </div>
          <ul className="text-gray-200 w-fit text-xs">
            <li className="mx-0 md:mx-3 my-3 mb-4 text-white font-bold text-sm">Quick Links</li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>About</Link>
            </li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>Courses</Link>
            </li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>Timings</Link>
            </li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>Faculty</Link>
            </li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>Testimonials</Link>
            </li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>Contact</Link>
            </li>
          </ul>
          <ul className="text-gray-200 my-5 w-fit md:my-auto mr-12 md:mx-12 text-xs">
            <li className="mx-0 md:mx-3 my-3 mb-4 text-white font-bold text-sm">Courses</li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>DCA</Link>
            </li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>PGDCA</Link>
            </li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>CPCT Prep</Link>
            </li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>TALLY</Link>
            </li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>CIT</Link>
            </li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>CCA</Link>
            </li>
          </ul>
          <ul className="text-gray-200 w-fit mr-12 text-xs">
            <li className="mx-0 md:mx-3 my-3 mb-4 text-white font-bold text-sm">Follow Us</li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>Facebook</Link>
            </li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>Instagram</Link>
            </li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>Twitter</Link>
            </li>
            <li className="mx-0 md:mx-3 my-3 hover:text-gray-100 duration-300 ease-out">
              <Link href={"#"}>Youtube</Link>
            </li>
          </ul>
        </div>
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
