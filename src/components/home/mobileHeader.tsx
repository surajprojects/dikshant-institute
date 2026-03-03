"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LinksTypeList } from "@/utils/types/linksType";

export default function MobileHeader({ navLinks }: { navLinks: LinksTypeList }) {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  return (
    <>
      <button
        onClick={() => setShowMenu((prevData) => !prevData)}
        className="block md:hidden transition-effect btn hover:bg-gray-200/75 p-1 rounded-md"
      >
        {showMenu ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {/* Nav Links */}
      {showMenu && (
        <div className="absolute top-12 right-8 bg-white transition-effect glass border border-gray-200 shadow-sm hover:shadow-md rounded-lg py-2.5 px-4 grid grid-cols-1 md:hidden text-muted text-sm gap-1.5">
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
            href="#admissionenquiry"
            className="my-1.5 flex justify-center items-center text-white bg-primary px-3 py-2 rounded-lg btn hover:bg-primary/90"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </>
  );
}
