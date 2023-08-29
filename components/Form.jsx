"use client";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

//--------------------
const Form = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const readUrls = JSON.parse(localStorage.getItem("urls"));
    if (readUrls) {
      setUrls(readUrls);
    }
  }, []);

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  watch("url");

  async function onSubmit({ url }) {
    var urlNoProtocol = url.replace(/^https?\:\/\//i, "");

    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${urlNoProtocol}`
    );
    const data = await response.json();

    const newObj = {
      orig: url,
      short: data.result.full_short_link2,
      copyed: false,
    };

    const new_list_urls = [newObj, ...urls];

    if (new_list_urls.length > 5) {
      new_list_urls.pop();
    }

    setUrls(new_list_urls);
    localStorage.setItem("urls", JSON.stringify(new_list_urls));
    setValue("url", "");
  }

  function copyUrl(url, indClick) {
    navigator.clipboard.writeText(`${url}`);
    const newUrls = urls.map((url, index) =>
      index === indClick ? { ...url, copyed: true } : { ...url, copyed: false }
    );
    setUrls(newUrls);
  }

  return (
    <section className="container w-full mx-auto flex flex-col justify-center  relative mt-10 lg:-mt-48">
      <div className="w-[85%] lg:w-[80%] mx-auto lg:p-6 space-y-6">
        <div className="bg-veryDarkViolet rounded-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative flex flex-col w-full p-5 lg:p-12  space-y-4 bg-bg_mbl lg:bg-bg_dsk bg-cover bg-no-repeat rounded-xl lg:flex-row lg:space-y-0 lg:space-x-3 "
          >
            <input
              type="url"
              {...register("url", { required: true })}
              className={`flex-1 py-4 text-lg  rounded-lg placeholder-red focus:outline-none ${
                errors.url ? "border-4 border-orange-700" : ""
              }`}
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shorten a link here"
            />

            <button
              type="submit"
              className="px-11 py-4 h-16 text-sm md:text-base md:py-0 text-white font-bold bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none "
            >
              Shorten It!
            </button>
            {errors.url && (
              <span className="absolute top-[70px] left-6 md:top-20 md:left -8 lg:top-32 lg:left-10 font-bold text-red">
                Please, add a link.
              </span>
            )}
          </form>
        </div>
      </div>

      {/* links */}
      <div className="mx-auto w-[85%] lg:w-[77%] flex flex-col items-center justify-between bg-gray-500 rounded-lg ">
        {urls?.map((url, index) => (
          <div
            key={index}
            className="flex w-full flex-col md:flex-row items-center justify-between py-4 px-10 bg-white my-2 rounded-lg"
          >
            <p className="whitespace-nowrap overflow-hidden w-[90%] md:w-2/3 text-xl text-center text-darkViolet md:text-left mr-5">
              <span>{url.orig}</span>
            </p>
            <div className="flex flex-col items-center justify-center md:justify-end  w-full my-3 lg:my-0 lg:w-1/3 md:flex-row md:space-y-0 border-t-2 border-slate-300 lg:border-t-0">
              <div className="font-bold text-cyan mr-6 my-3 lg:my-0 ">
                {url.short}
              </div>
              <button
                onClick={() => {
                  copyUrl(url.short, index);
                }}
                className={`p-2 w-full lg:w-28 text-white
                ${url.copyed ? "bg-veryDarkViolet" : "bg-cyan"}  
                rounded-lg hover:opacity-70 focus:outline-none`}
              >
                {url.copyed ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Form;
