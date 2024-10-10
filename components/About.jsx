import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="md:flex mt-0 lg:mt-5">
      <div className="flex-1 flex flex-col justify-center py-10 px-5 md:px-20">
        <h1 className="font-bold text-2xl lg:text-4xl md:text-3xl text-blue-500 text-center lg:text-start">Who We Are</h1>
        <p className="md:text-xl py-5 text-center lg:text-start">
          AproMax Engineering is a multidisciplinary engineering and design firm
          that combines expertise in engineering, design, and technology to
          drive progress and innovation. Our team of passionate problem-solvers
          and engineers is dedicated to delivering innovative solutions that
          meet our client&pos;s unique needs.
        </p>
        <Link
          href="/about"
          className="border-blue-500 border-2 w-max px-7 py-2 mx-auto lg:mx-0 text-blue-500 mt-10 hover:bg-blue-500 hover:text-white"
        >
          Learn More
        </Link>
      </div>
      <div className="flex-1 px-20 md:px-0 hidden lg:block">
        <Image
          src="/assets/images/aboutUsHome.png"
          width={1000}
          height={1000}
          className="mx-auto w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
