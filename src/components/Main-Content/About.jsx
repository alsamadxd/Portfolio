import React, { useState } from 'react'

const About = () => {
    const [activeTab, setActiveTab] = useState("skills");

     const handleTabChange = (tab) => {
       setActiveTab(tab);
     };
  return (
    <div id="about" className="py-10 sm:py-20 text-gray-400 ">
      <div className=" mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="md:w-2/5"></div>

          <div className="w-full md:w-3/5 ml-10 sm:ml-0">
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-8">About Me</h1>
            <p>An enthusiast Front End developer</p>

            <div className="flex mt-5 space-x-12">
              <p
                className={`cursor-pointer text-lg font-medium relative ${
                  activeTab === "skills" ? "text-[#ff004f]" : ""
                }`}
                onClick={() => handleTabChange("skills")}
              >
                Skills
                {activeTab === "skills" && (
                  <span className="block h-1 w-1/2 bg-[#ff004f] absolute -bottom-2 left-0 transition-all "></span>
                )}
              </p>

              <p
                className={`cursor-pointer text-lg font-medium relative ${
                  activeTab === "education" ? "text-[#ff004f]" : ""
                }`}
                onClick={() => handleTabChange("education")}
              >
                Education
                {activeTab === "education" && (
                  <span className="block h-1 w-1/2 bg-[#ff004f] absolute -bottom-2 left-0 transition-all"></span>
                )}
              </p>
            </div>

            {/* Tab Contents */}
            <div
              className={`mt-8 min-h-[25vh] ${
                activeTab === "skills" ? "block" : "hidden"
              }`}
            >
              <ul>
                <li>
                  <span className="text-[#ff004f] text-sm">UI/UX</span>
                  <br />
                  Designing Web App Interfaces
                </li>
                <li>
                  <span className="text-[#ff004f] text-sm">
                    Web Development
                  </span>
                  <br />
                  Web App Development
                </li>
                <li>
                  <span className="text-[#ff004f] text-sm">Languages</span>
                  <br />
                  <ul className="list-none">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Tailwind CSS</li>
                    <li>React</li>
                    <li>C</li>
                    <li>C++</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div
              className={`mt-8 min-h-[25vh] ${
                activeTab === "education" ? "block" : "hidden"
              }`}
            >
              <ul>
                <li>
                  <span className="text-[#ff004f] text-sm">2023</span>
                  <br />
                  BCA from Allahabad University
                </li>
                <li>
                  <span className="text-[#ff004f] text-sm">2022</span>
                  <br />
                  Website Development Training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About