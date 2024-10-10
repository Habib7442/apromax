import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  const words =
    "AproMax Engineering is a multidisciplinary engineering and design firm that combines expertise in engineering, design, and technology to drive progress and innovation. Our team of passionate problem-solvers and engineers is dedicated to delivering cutting-edge solutions tailored to meet our client's unique needs.";

  return (
    <header className="relative bg-header-1 w-full min-h-screen bg-no-repeat bg-cover bg-center sm:mt-0 lg:mt-4">
      {/* Main content */}
      <div className="relative z-10 container mx-auto text-center text-white px-4 py-5 sm:py-24 flex flex-col min-h-screen">
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-3 text-white leading-tight drop-shadow-md">
          Engineering Services
        </h1>

        {/* Highlighted heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-blue-400 drop-shadow-lg mb-6">
          Creative & Professional
        </h2>

        <div className="mb-8">
          <TextGenerateEffect words={words} />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/about">
            <span className="text-sm md:text-base inline-block px-8 sm:px-10 py-3 text-white uppercase bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out rounded-full shadow-lg hover:shadow-xl w-full sm:w-auto">
              Know More
            </span>
          </Link>
          <Link href="/services">
            <span className="text-sm md:text-base inline-block px-8 sm:px-10 py-3 text-white uppercase bg-transparent border border-white hover:bg-white hover:text-blue-500 transition duration-300 ease-in-out rounded-full shadow-lg hover:shadow-xl w-full sm:w-auto">
              Services
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;