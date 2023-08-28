import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container relative w-[90%] flex lg:flex-row mx-auto flex-col-reverse mb-14 bg-white">
      {/* texts */}
      <div className="flex flex-col mb-43 lg:mt-16 lg:w-1/2 lg:ml-24">
        <div className="lg:hidden w-full h-[380px]"></div>
        <h1 className="text-4xl text-veryDarkBlue text-center font-extrabold lg:text-7xl lg:text-left lg:leading-[5rem] lg:mt-10">
          More then just shorter links
        </h1>
        <p className="text-center text-xl text-gray lg:max-w-[500px] lg:text-left">
          Build your brand&apos;s recognition and get detailed insights on ow
          your links are performing.
        </p>
        <div className="text-center lg:text-left mt-10">
          <Link
            className="px-8 py-5 text-xl text-white bg-cyan hover:bg-cyanLight rounded-full lg:py-3 "
            href="/getstarted"
          >
            Get Started
          </Link>
        </div>
      </div>
      {/* image */}
      <div className="w-[150%] mb-24 absolute top-4 left-2 lg:top-3 lg:w-[60%] lg:left-auto lg:-right-52 lg:mb-0">
        <Image
          src="/illustration-working.svg"
          alt="man working"
          width={800}
          height={800}
        />
      </div>
    </section>
  );
};

export default Hero;
