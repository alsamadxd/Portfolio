import React from 'react'

const Services = () => {
  return (
    <div id="services" className="pt-5 min-h-[25vh] ">
      <div className="ml-5 mx-auto ">
        <h1 className="text-3xl md:text-3xl font-semibold mb-15 ml-5 items-center sm:ml-0">
          My Services
        </h1>
        <div className=" sm:grid grid-cols-2 gap-10 rounded-3xl">
          <div className="p-5 hover:bg-[#262626] text-[#ff004f] bg-black duration-500 hover:text-white rounded-3xl">
            <h2 className="font-semibold  text-xl md:text-3xl text-center mb-5  ">
              Web Design
            </h2>
            <p className="text-white">
              You're in the right place to get your venture growing. Here you
              will get the iconic and latest design.
            </p>
          </div>

          <div className="p-5 bg-black text-[#ff004f] hover:bg-[#262626] duration-500 hover:text-white rounded-3xl">
            <h2 className="font-semibold  text-xl md:text-3xl text-center mb-5  ">
              Web App
            </h2>
            <p className="text-white ">
              You're in the right place to get your venture growing. Here you
              will get the iconic and latest design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services