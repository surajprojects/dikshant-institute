import Link from "next/link";

export default function Header() {
  //   const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <header className="w-full font-sans font-medium fixed top-0 left-0 z-50 bg-white/30 backdrop-blur-sm border-b border-white/10 shadow-sm">
        <nav className="flex justify-between items-center px-4 md:px-8 py-3.5 md:py-3 mx-auto w-full xl:max-w-7xl">
          {/* Title */}
          <div className="text-xl font-bold whitespace-nowrap shrink">
            <Link href={"/"}>Dikshant Institute</Link>
          </div>
          {/* Nav Links */}
          <ul className="hidden md:flex text-[#7c706a] text-sm">
            <li className="mx-2.5 hover:text-[#1d66b9] transition duration-300 ease-out py-2">
              <Link href={"/"}>About</Link>
            </li>
            <li className="mx-2.5 hover:text-[#1d66b9] transition duration-300 ease-out py-2">
              <Link href={"/"}>Courses</Link>
            </li>
            <li className="mx-2.5 hover:text-[#1d66b9] transition duration-300 ease-out py-2">
              <Link href={"/"}>Timings</Link>
            </li>
            <li className="mx-2.5 hover:text-[#1d66b9] transition duration-300 ease-out py-2">
              <Link href={"/"}>Faculty</Link>
            </li>
            <li className="mx-2.5 hover:text-[#1d66b9] transition duration-300 ease-out py-2">
              <Link href={"/"}>Testimonials</Link>
            </li>
            <li className="text-[#7c706a] hover:text-white hover:bg-orange-400 px-3 py-2 rounded-md mx-1 duration-300 ease-out hover:cursor-pointer">
              <Link href={"/"}>Contact</Link>
            </li>
            <li className="text-white bg-orange-500 px-3 py-2 rounded-md mx-2 duration-300 ease-out hover:cursor-pointer hover:bg-orange-400">
              <Link href={"/blogs/new"} className="flex justify-center items-center">
                {/* <PencilIcon className="w-4 h-4" /> */}
                <span className="ml-1">Enroll Now</span>
              </Link>
            </li>
          </ul>
          {/* Mobile Header */}
          {/* {showMenu && <MobileHeader setShowMenu={setShowMenu} />} */}
        </nav>
      </header>
    </>
  );
}
