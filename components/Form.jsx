"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

//--------------------
const Form = () => {
  const [urls, setUrls] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit({ url }) {
    const newObj = { orig: url, short: "bla bla bla" };

    const new_list_urls = [newObj, ...urls];

    if (new_list_urls.length > 5) {
      new_list_urls.pop();
    }

    setUrls(new_list_urls);
  }

  return (
    <section className="flex flex-col justify-center bg-gray-100 relative mt-10 md:mt-24">
      <div className="w-2/3 mx-auto p-6 space-y-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-bg_mbl lg:bg-bg_dsk rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        >
          <input
            type="url"
            {...register("url", { required: true })}
            className="flex-1 p-3 border-2 rounded-lg placeholder-orange-500 focus:outline-none"
            placeholder="Shorten a link here"
          />

          <button
            type="submit"
            className="px-11 py-4 md:py-3 text-white font-bold bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none "
          >
            Shorten It!
          </button>
          {errors.url && (
            <span className="absolute top-24 left-10 font-bold text-gray-400">
              This field is required
            </span>
          )}
        </form>
      </div>

      {/* links */}
      <div className="mx-auto flex flex-col items-center justify-between w-1/2 p-6 bg-gray-500 rounded-lg ">
        {urls?.map((url, index) => (
          <div
            key={index}
            className="flex w-full flex-col md:flex-row items-center justify-between py-5 px-2 bg-white my-5 rounded-lg"
          >
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              {url.orig}
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">{url.short}</div>
              <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Form;
