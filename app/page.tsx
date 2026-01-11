

export default function page() {
  return (
    <main   
      className="
        min-h-screen
        py-20
        md:py-44
        lg:pt-60
        lg:pb-0
        px-5 md:px-0
        bg-[url('@/public/assets/home/background-home-mobile.jpg')]
        bg-cover bg-center bg-no-repeat

        md:bg-[url('@/public/assets/home/background-home-tablet.jpg')]
        lg:bg-[url('@/public/assets/home/background-home-desktop.jpg')]
        lg:h-[150vh]
      ">
      <div className=" container mx-auto text-center lg:text-left flex  flex-col lg:flex-row items-center justify-between gap-y-20 md:gap-y-40 lg:pl-24">
        <div className=" flex-1">
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p className="md:w-140.5 lg:w-111">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className=" flex-1">
          <button className=" bg-accent text-primary uppercase w-37.5 h-37.5 md:w-68.5 md:h-68.5  hover:shadow-gray-900 hover:shadow-2xl rounded-full text-xl md:text-3xl cursor-pointer">Explore</button>
        </div>
      </div>
    </main>
  )
}
