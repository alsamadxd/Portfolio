import React from 'react'
import logo from "../../assets/images/logo-3.png";

const Work = () => {
  return (
    <div id="work" className="min-h-[35vh] ">
      <div className="ml-5 mx-auto">
        <h1 className="text-3xl font-semibold my-15 ml-5 sm:ml-0 ">My Work</h1>
        <div className="bg-black rounded-3xl hover:bg-[#262626] duration-500">
          <a href="https://zenavo.vercel.app">
            <div className="p-5 w-full flex gap-5 justify-center items-center rounded-3xl ">
              <div
                className=" flex justify-center rounded-2xl"
                style={{
                  background: "linear-gradient(rgba(0, 0, 0, 1), #ff004f)",
                }}
              >
                <img src={logo} className="w-3/5" alt="" />
              </div>

              <p className="text-white">
                A fitness Web App in which you can track your fitness progress
                with ease using our app! Log your workouts, sets, reps, and
                weights to stay organized and motivated.
              </p>
            </div>
          </a>
        </div>
      </div>
      <a
        href="#"
        className="block mx-auto my-5 w-fit border px-15 py-3 rounded-xl transition-bg duration-500 border-[#ff004f] hover:bg-[#ff004f]"
      >
        See more
      </a>
    </div>
  );
}

export default Work