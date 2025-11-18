// components/BannerSection.tsx
import { Link } from "@inertiajs/react";

export function BannerSection({ title }) {
  return (
    <section
      className="relative w-full h-[200px] lg:h-96 bg-cover bg-center text-[#3c4c24] "
      style={{ backgroundImage: "url('/assets/images/banner.jpg')" }}
    >
      {/* Overlay for text readability */}
      {/* <div className="absolute w-full h-full top-0 left-0  bg-olive-green-900  z-50"></div> */}

      <div className="relative z-20 flex flex-col items-center justify-end lg:justify-center h-full text-center px-4 pb-10 lg:pb-0">
        {/* Title */}
        <h1 className="text-3xl head md:text-5xl font-[500] text-olive-green-200 lg:mb-2">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="text-xs lg:text-sm text-olive-green-100">
          <Link href="/" className="hover:text-olive-green-300">
            Home
          </Link>{" "}
          <span className="mx-1">›</span>{" "}
          {location.pathname === "/gallery" ? (
            <span>Gallery Grid</span>
          ) : (
            <span>{location.pathname.replace("/", "").charAt(0).toUpperCase() + location.pathname.slice(2)}</span>
          )}
        </nav>

        
      </div>
    </section>
  ); 
}