import Link from "next/link";

const Hero = () => {
  return (
    <header className="relative bg-header-1 w-full h-screen lg:h-full md:h-full mb-24 lg:mb-0 md:mb-0 sm:py-24 px-5 bg-no-repeat bg-cover bg-center mt-16 lg:mt-10 md:mt-10">
      {/* Main content */}
      <div className="relative z-10 container w-full h-auto mx-auto text-center text-white">
        {/* Subheading */}
        <p className="uppercase text-xs sm:text-sm md:text-lg mb-3 tracking-wide text-gray-200">
          We are certified engineers
        </p>

        {/* Main heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-3 text-white leading-tight drop-shadow-md w-full">
          Engineering Services
        </h1>

        {/* Highlighted heading */}
        <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase text-blue-400 drop-shadow-lg mb-6">
          Creative & Professional
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed md:leading-8 max-w-3xl lg:max-w-4xl mx-auto mb-8 px-3">
          AproMax Engineering is a multidisciplinary engineering and design firm
          that combines expertise in engineering, design, and technology to
          drive progress and innovation. Our team of passionate problem-solvers
          and engineers is dedicated to delivering cutting-edge solutions
          tailored to meet our client&apos;s unique needs.
        </p>

        {/* CTA buttons */}
        <div className="flex justify-center space-x-4">
          <Link href="/about">
            <span className="text-xs sm:text-sm md:text-md inline-block px-5 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4 text-white uppercase bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out rounded-full shadow-lg hover:shadow-xl">
              Know More
            </span>
          </Link>
          <Link href="/services">
            <span className="text-xs sm:text-sm md:text-md inline-block px-5 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4 text-white uppercase bg-transparent border border-white hover:bg-white hover:text-blue-500 transition duration-300 ease-in-out rounded-full shadow-lg hover:shadow-xl">
              Services
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
