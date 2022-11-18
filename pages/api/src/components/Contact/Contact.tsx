import React from "react";
import HeroImg from "../../../../../public/assets/userProfile.svg";
import Image from "next/image";
import Title from "../Title";

const Contact = () => {
  return (
    <div className="px-2 w-full lg:h-screen">
      <Title>Contact me</Title>
      <h2 className="text-xl text-blue-500">Get in touch</h2>
      <div className="grid lg:grid-cols-span-5 gap-8">
        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 p-4">
          <div>
            <Image
              className="roundex-xl hover:scale-100 ease-in duration-300"
              src={HeroImg}
              width={400}
              height={300}
              alt="hero"
            />
          </div>
        </div>

        <div className="w-full col-span-3 shadow-xl shadow-gray-400 rounded-xl h-auto">
          <div className="p-4">
            <form>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 border-gray-300 flex"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Phone number</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 border-gray-300 flex"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea className="border-2 rounded-lg rows-10"></textarea>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 border-gray-300 flex"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
