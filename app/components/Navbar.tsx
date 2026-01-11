"use client"
import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/assets/shared/logo.svg"
import { IoClose, IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation" 
import { useState } from "react"

const navLinks = [
  {id:1, href:"/", number: "00", label:"Home"},
  {id:2, href:"/destination-moon", number: "01", label:"Destination"},
  {id:3, href:"/crew-commander", number: "02", label:"Crew"},
  {id:4, href:"/technology-vehicle", number: "03", label:"Technology"},
]


function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="">
      <div className=" flex items-center justify-between px-4 md:px-0 py-3 absolute w-full top-5.25 md:-top-3 lg:top-10 overflow-hidden">
        <div className=" md:pl-10 lg:pl-12">
          {/* Logo */}
          <Link href="/">
            <Image 
              src={Logo}
              alt="logo"
              className=" w-10 md:w-12"
            />
          </Link>
        </div>
        <div className=" hidden lg:block absolute z-10 left-32">
          <hr className=" bg-[#979797] shadow w-110  border-b-2 " />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-6 bg-[#979797]/5 backdrop-blur-xl px-24">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.id}
                href={link.href}
                className={`py-10 uppercase flex items-center gap-x-3 font-barlow tracking-widest
                  ${
                    isActive
                      ? "border-b-4 border-accent"
                      : "hover:border-b-4 hover:border-transparent"
                  }
                `}
              >
                <span className="hidden lg:block font-bold">
                  {link.number}
                </span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button (Icon-based) */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden text-white float-right cursor-pointer"
        >
          {/* {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} /> } */}
          <IoMenu size={28} />
        </button>

        {/* Mobile Menu Panel */}
        <aside className={`fixed top-0 right-0 z-40 h-full w-2/3 bg-[#979797]/5 backdrop-blur-xl p-8 md:hidden
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}>

          {/* Close Icon */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-10 right-4 cursor-pointer"
            aria-label="Close menu"
          >
            <IoClose size={28} />
          </button>

          <nav className="space-y-5 mt-32 ">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2 uppercase flex flex-row gap-x-3 font-barlow tracking-widest
                    ${
                      isActive
                        ? "border-b-4 border-accent"
                        : "hover:border-b-4 hover:border-transparent"
                    }
                  `}
                >
                  <span className="font-bold">
                    {link.number}
                  </span>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </aside>
      </div>
    </div>
  )
}

export default Navbar