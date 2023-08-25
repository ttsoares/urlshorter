import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container flex lg:flex-row mx-auto p-7 flex-col-reverse">
      {/* texts */}
      <div className="flex flex-col space-y-11 mb-43 lg:mt-16 lg:w-1/2  border-2 border-orange-600">
        <h1 className="text-5xl text-center font-bold lg:text-6xl lg:max-w-md lg:text-left">
          More then just shorter links
        </h1>
        <p className="text-center text-2xl text-gray-800 lg:max-w-md lg:text-left">
          Build your brand&apos;s recognition and get detailed insights on ow
          your links are performing.
        </p>
        <button className="text-center lg:text-left">
          <Link
            className="px-9 py-6 text-2xl font-bold text-white bg-cyan hover:bg-cyanLight rounded-full lg:py-4 "
            href="/getstarted"
          >
            Get Started
          </Link>
        </button>
      </div>
      {/* image */}
      <div className="mb-24 mx-auto md:w-170 lg:w-1/2 lg:mb-0 border-2 border-green-500">
        <Image
          src="/illustration-working.svg"
          alt="man working"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
