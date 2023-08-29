import Link from "next/link";

const Call2Act = () => {
  return (
    <section className="bg-veryDarkViolet lg:-mt-3 ">
      <div className="py-14 bg-boost_mbl md:bg-boost_dsk bg-no-repeat bg-cover">
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-3xl py-10 lg:mb-2 lg:py-0 lg:text-4xl font-bold text-center text-white">
            Boost your links today
          </h5>
          <Link href="/getstarted">
            <div className="px-10 py-4 w-52 mx-auto text-center text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight md:text-lg focus:outline-none">
              Get Started
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Call2Act;
