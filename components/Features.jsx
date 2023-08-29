import Image from "next/image";

const Features = () => {
  return (
    <section className="w-full flex flex-col items-center justify-between mx-auto bg-[#F1F4F9] ">
      <div className="container w-[90%] lg:w-[80%] flex flex-col items-center justify-between mx-auto">
        <div className="w-full py-24 bg-gray-100">
          <div className="container mx-auto px-3">
            <h2 className="text-[2.5rem] text-veryDarkBlue mb-4 mt-3 font-bold text-center">
              Advanced Statistics
            </h2>
            <p className="max-w-xs mx-auto text-center text-grayishViolet md:max-w-lg">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
        </div>

        <div className="w-full pb-32 bg-gray-100 ">
          <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
            <div className="hidden absolute top-40 w-10/12 left-16 h-2 bg-cyan md:block"></div>

            <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

            <div className="relative flex flex-col px-4 pt-5 pb-10 space-y-6 bg-white rounded-lg md:w-1/3">
              <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                <div className="flex items-center justify-center w-[87px] h-[87px] rounded-full bg-veryDarkBlue">
                  <Image
                    src="/icon-brand-recognition.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <h5 className="pt-10 text-xl font-bold text-center capitalize md:text-left">
                Brand Recognition
              </h5>
              <p className="text-center text-grayishViolet md:text-left">
                Boost your brand recognition with each click. Generic links
                don&apos;t mean a thing. Branded links help instil confidence in
                your content.
              </p>
            </div>

            <div className="relative flex flex-col px-4 pt-5 pb-10 mt-24 space-y-6 bg-white rounded-lg md:mt-9 md:w-1/3">
              <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                <div className="flex items-center justify-center w-[87px] h-[87px] rounded-full bg-veryDarkBlue">
                  <Image
                    src="/icon-detailed-records.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <h5 className="pt-12 text-xl font-bold text-center capitalize md:text-left">
                Detailed records
              </h5>
              <p className="text-center text-grayishViolet md:text-left">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>

            <div className="relative flex flex-col px-4 pt-5 pb-10 mt-24 space-y-6 bg-white rounded-lg md:mt-20 md:w-1/3">
              <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                <div className="flex items-center justify-center w-[87px] h-[87px] rounded-full bg-veryDarkBlue">
                  <Image
                    src="/icon-fully-customizable.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <h5 className="pt-12 text-xl font-bold text-center capitalize md:text-left">
                Fully customizable
              </h5>
              <p className="text-center text-grayishViolet md:text-left">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
