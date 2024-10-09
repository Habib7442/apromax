
import Image from "next/image";

export default function About() {
  return (
    <section className=" mt-10 text-white lg:py-20 py-5">
      <div className="container mx-auto px-4 animate-fadeIn">
        <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold text-blue-400 text-center mb-10">
          About AproMax Engineering LLP
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto text-center mb-20">
          AproMax Engineering is a forward-thinking, multidisciplinary
          engineering firm that embodies the spirit of approaching maximum
          potential in every project. With a relentless pursuit of excellence
          and innovation, our team of expert engineers and designers work
          collaboratively to provide comprehensive services that meet the unique
          needs of our clients.
        </p>
      </div>

      <div className="container mx-auto px-4 my-20">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-slideInLeft">
            <h2 className="text-2xl lg:text-4xl md:text-3xl font-bold mb-5 text-blue-400">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Our mission is to empower progress through engineering excellence.
              We strive to deliver high-quality solutions, foster a culture of
              innovation, build long-term relationships, and make a positive
              impact on the communities we serve.
            </p>
          </div>
          <Image
            src="/assets/Patterns/AboutUsFirst.png"
            alt="About Us One"
            width={1000}
            height={1000}
            className="w-full lg:w-2/5 h-auto rounded-lg shadow-lg animate-slideInRight"
          />
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <Image
            src="/assets/Patterns/AboutUsSecond.png"
            alt="About Us Two"
            width={1000}
            height={1000}
            className="w-full lg:w-2/5 h-auto rounded-lg shadow-lg mb-10 lg:mb-0 animate-slideInLeft"
          />
          <div className="lg:w-1/2 animate-slideInRight">
            <h2 className="text-2xl lg:text-4xl md:text-3xl font-bold mb-5 text-blue-400">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Our vision is to become a globally recognized leader in
              engineering excellence, driving innovation and sustainable
              progress that improves lives and shapes a better future.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20 animate-fadeIn">
        <h2 className="text-2xl lg:text-4xl md:text-3xl font-bold mb-10 text-blue-400 text-center">
          Our Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Integrity",
              description:
                "We operate with transparency, honesty, and ethics in all our interactions.",
            },
            {
              title: "Excellence",
              description:
                "We strive for exceptional quality and performance in everything we do.",
            },
            {
              title: "Collaboration",
              description:
                "We believe in the power of teamwork and collaboration to achieve outstanding results.",
            },
            {
              title: "Innovation",
              description:
                "We encourage creativity, experimentation, and learning to stay ahead of the curve.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl text-blue-400 mb-4">
                {value.title}
              </h3>
              <p className="text-base md:text-lg">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
