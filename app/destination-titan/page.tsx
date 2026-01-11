"use client";
import Image from "next/image";
import data from "@/data.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { destinations } = data

const destinationLinks = [
  {id:1, href:"/destination-moon", label:"Moon"},
  {id:2, href:"/destination-mars", label:"Mars"},
  {id:3, href:"/destination-europa", label:"Europa"},
  {id:4, href:"/destination-titan", label:"Titan"},
]

export default function Page() {
  const pathname = usePathname();
  const titan = destinations.find(
    (destination) => destination.name === "Titan"
  )

  if (!titan) return null

  return (
    <main className="
        min-h-screen
        px-5 md:px-0
        bg-[url('@/public/assets/destination/background-destination-mobile.jpg')]
        bg-cover bg-center bg-no-repeat

        md:bg-[url('@/public/assets/destination/background-destination-tablet.jpg')]
        lg:bg-[url('@/public/assets/destination/background-destination-desktop.jpg')]
        lg:h-[160vh]
      ">
        <section className=" container mx-auto lg:text-left flex  flex-col lg:flex-row items-center gap-y-20 md:gap-y-40">

          <div className=" flex flex-col lg:flex-row gap-x-36 gap-y-20 mt-20 md:mt-36 lg:mt-52 w-full">
            <div className="">
              <h5 
                className=" mb-8 md:mb-20 lg:mb-16 text-accent">
                <span className=" text-secondary pr-6">01</span> Pick your destination
              </h5>
              <div className="
                relative mx-auto
                w-42.5 h-42.5
                md:w-75 md:h-75
                lg:w-111.25 lg:h-111.25
              ">
                <Image
                  src={titan.images.png}
                  alt={titan.name}
                  fill
                  priority
                  sizes="
                    (max-width: 768px) 170px,
                    (max-width: 1024px) 300px,
                    445px
                  "
                />
              </div>
            </div>
            <div className=" flex flex-col items-center lg:items-start justify-center">
              <div className=" flex items-center gap-x-7 text-lg uppercase">
                {destinationLinks.map((destinationLink) =>  {
                  const isActive = pathname === destinationLink.href;
                  return(
                    <Link 
                      key={destinationLink.id}
                      href={destinationLink.href} 
                      className={`
                        ${
                          isActive
                            ? " border-b-4 border-b-accent"
                            : " hover:text-accent/40"
                        }
                      `}
                    >
                      {destinationLink.label}
                    </Link>
                  )
                })
                }
              </div>
              <h2>{titan.name}</h2>
              <p className=" md:w-140.5 lg:w-111 text-center lg:text-left">{titan.description}</p>

              <div className=" flex flex-col md:flex-row justify-center lg:justify-start items-center gap-y-9 gap-x-28 pt-5 mt-14 border-t-2 w-full">
                <div className=" text-center lg:text-left">
                  <span className=" text-sm uppercase font-barlow">Avg. distance</span>
                  <span className=" text-2xl block uppercase font-bellefair mt-1.5">{titan.distance}</span>
                </div>

                <div className=" text-center lg:text-left">
                  <span className=" text-sm uppercase font-barlow">Est. travel time</span>
                  <span className=" text-2xl block uppercase font-bellefair mt-1.5">{titan.travel}</span> 
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}
