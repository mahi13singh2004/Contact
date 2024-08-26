import React from "react";
import Image from "./Image";

const Content = () => {

  const click = (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    console.log(e.target[2].value)
  }

  return (
    <div className="mt-10 w-full md:w-3/4 mx-auto flex flex-col md:flex-row">
      <div className="left flex-1 p-2">
        <div className="top-buttons flex justify-center">
          <button className="px-3 rounded-md py-3 mr-2 text-xl font-bold bg-black text-white w-2/3">
            VIA SUPPORT CHAT
          </button>
          <button className="px-3 rounded-md py-3 text-xl font-bold bg-black text-white w-2/3">
            VIA CALL
          </button>
        </div>
        <div className="bottombutton">
          <button className="px-3 rounded-md py-3 mr-2 text-xl font-bold bg-white border-2 border-black text-black w-full mt-5">
            VIA EMAIL FORM
          </button>
        </div>

        <form onSubmit={click} className="w-full mt-7 flex-col justify-center">
          <div className="w-full first flex justify-center mt-2 mb-5">
            <input
              placeholder="Enter Your Name"
              className="border-2 border-gray-600 p-2 w-4/5"
              type="text"
              name="name"
            />
          </div>

          <div className="w-full first flex justify-center mt-2 mb-5">
            <input
              placeholder="Enter Your Email"
              className="border-2 border-gray-600 p-2 w-4/5"
              type="text"
              name="name"
            />
          </div>

          <div className="w-full first flex justify-center mt-2 mb-5">
            <textarea
              placeholder="Enter Your Email"
              className="border-2 border-gray-600 p-2 w-4/5 h-20"
              type="text"
              name="name"
            />
          </div>

          <div className="submit flex w-2/3 mx-auto justify-end">
            <button className="p-2 bg-black text-white font-xl px-7 py-3 font-bold">Submit</button>
          </div>
        </form>
      </div>

      <Image/>
    </div>
  );
};

export default Content;
