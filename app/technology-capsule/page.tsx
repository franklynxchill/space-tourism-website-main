"use client"
import data from "@/data.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

const techLinks = [
  { id: 1, href: "/technology-vehicle", label: "1" },
  { id: 2, href: "/technology-capsule", label: "2" },
  { id: 3, href: "/technology-spaceport", label: "3" },
];

const { technologies } = data;

export default function Page() {
  const pathname = usePathname();
  const spaceport = technologies.find(
    (technology) => technology.name === "Spaceport"
  );

  if (!spaceport) return null;

  return (
    <main
      className="
        min-h-screen
        bg-[url('@/public/assets/technology/background-technology-mobile.jpg')]
        bg-cover bg-center bg-no-repeat

        md:bg-[url('@/public/assets/technology/background-technology-tablet.jpg')]
        lg:bg-[url('@/public/assets/technology/background-technology-desktop.jpg')]
        lg:h-[160vh]
      "
    >
      <div className="container mx-auto pt-20 md:pt-36 lg:pt-52 lg:pl-24">
        <h5 className="mb-8 md:mb-20 lg:mb-0 text-accent text-center md:text-left">
          <span className="text-secondary pr-6">03</span> Space launch 101
        </h5>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center">
        <div
          className="
            w-full h-42.5 md:h-77.5
            lg:w-[50vw] lg:h-131.75   /* widened to allow right alignment */
            bg-center                /* center on mobile & tablet */
            lg:bg-position-[100%_50%]              /* right-center on large screens */
            bg-cover bg-no-repeat lg:bg-contain
            bg-[url('/assets/technology/image-spaceport-landscape.jpg')]
            lg:bg-[url('/assets/technology/image-spaceport-portrait.jpg')]
          "
        ></div>

        <div className="flex flex-col lg:flex-row pb-20 lg:pb-0 px-5 md:px-0 mt-11 lg:mt-0 container mx-auto lg:pl-28">
          <div>
            <div className="flex flex-col lg:flex-row gap-y-9 gap-x-20 items-center lg:items-start justify-center">
              <div className="flex flex-row lg:flex-col gap-4">
                {techLinks.map((tech) => {
                  const isActive = pathname === tech.href;

                  return (
                    <Link
                      key={tech.id}
                      href={tech.href}
                      className={`
                        text-accent text-base md:text-2xl lg:text-3xl
                        font-bellefair border border-accent
                        w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20
                        flex items-center justify-center rounded-full
                        transition-colors

                        ${
                          isActive
                            ? "bg-accent text-primary"
                            : "hover:border-accent/60"
                        }
                      `}
                    >
                      {tech.label}
                    </Link>
                  );
                })}
              </div>

              <div className="text-center lg:text-left">
                <span className="font-barlow text-base text-secondary uppercase mb-1.5">
                  The terminology...
                </span>
                <h3 className="mb-6">{spaceport.name}</h3>
                <p className="md:w-140.5 lg:w-111">
                  {spaceport.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
