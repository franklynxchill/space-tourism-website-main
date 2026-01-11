"use client"

import { useState } from "react"
import data from "@/data.json"
import Image from "next/image"

const { crew } = data

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCrew = crew[activeIndex]

  return (
    <main className="
      min-h-screen
      px-5 md:px-0
      bg-[url('/assets/crew/background-crew-mobile.jpg')]
      bg-cover bg-center bg-no-repeat
      md:bg-[url('/assets/crew/background-crew-tablet.jpg')]
      lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]
      lg:h-[140vh]
    ">
      <div className="container mx-auto pb-20 md:pb-0 lg:pl-32">
        {/* Heading */}
        <div className="pt-22 lg:pt-53 text-center md:text-left">
          <h5 className="text-accent">
            <span className="text-secondary pr-6">02</span> Meet your crew
          </h5>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-col-reverse lg:flex-row-reverse items-center gap-y-14">
          {/* Image */}
          <div className="w-full lg:w-2/5 border-b-2 border-b-gray-400 md:border-0">
            <div className="
              relative mx-auto
              w-42.5 h-42.5
              md:w-75 md:h-75
              lg:w-111.25 lg:h-111.25
            ">
              <Image
                src={activeCrew.images.png}
                alt={activeCrew.name}
                fill
                priority
                sizes="
                  (max-width: 768px) 170px,
                  (max-width: 1024px) 300px,
                  615.57px
                "
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-3/5 text-center lg:text-left lg:mb-28">
            <h4 className="opacity-50">{activeCrew.role}</h4>
            <h3>{activeCrew.name}</h3>
            <p className="md:w-140.5 lg:w-109.5  mx-auto lg:mx-0">
              {activeCrew.bio}
            </p>

            {/* Slider dots */}
            <div className="flex justify-center lg:justify-start gap-4 mt-10">
              {crew.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    activeIndex === index
                      ? "bg-white"
                      : "bg-white/30"
                  }`}
                  aria-label={`View ${crew[index].role}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
