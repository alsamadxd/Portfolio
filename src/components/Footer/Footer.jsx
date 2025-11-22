import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"; 

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xvgdpkge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponse("Form submitted successfully!");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponse("Error submitting form!");
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact">
      <div className=" mx-auto my-18 sm:my-10 px-4">
        <div className="flex flex-wrap mx-5">
          {/* Contact Left */}
          <div className=" flex-1 basis-[35%]">
            <h1 className="text-3xl font-semibold mb-6 ">Contact Me</h1>
            <p className="flex items-center mt-8 gap-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="text-[#ff004f] "
              />
              alsamad0005@gmail.com
            </p>
            <p className="flex items-center mt-4 gap-3">
              <FontAwesomeIcon
                icon={faPhone}
                size="2x"
                className="text-[#ff004f]"
              />
              8707026673
            </p>
            <div className="mt-8 flex gap-2 items-center">
              <a
                href="https://github.com/alsamadxd"
                className="text-gray-400 hover:text-[#ff004f] transition transform hover:-translate-y-2"
              >
                <FontAwesomeIcon icon={faSquareGithub} size="2x" />
              </a>
              <a
                href="#"
                className="text-[#ababab] text-3xl transition-transform transform hover:text-[#ff004f] hover:-translate-y-2"
              >
                <FontAwesomeIcon icon={faFacebook} size="x" className="" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-[#ff004f] transition transform hover:-translate-y-2"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>

              <a
                href="https://twitter.com"
                className="text-gray-400  hover:text-[#ff004f] transition transform hover:-translate-y-2"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            <a
              href="my-cv.pdf"
              download
              className="inline-block bg-[#262626] hover:bg-[#ff004f] text-white my-3 py-3 px-12 mt-6 rounded-md text-lg duration-200"
            >
              Download CV
            </a>
          </div>

          {/* Contact Right */}
          <div className="flex-1 basis-[60%]">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#262626] text-white px-4 py-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff004f]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#262626] text-white px-4 py-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff004f]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                maxLength="150"
                className="w-full bg-[#262626] text-white px-4 py-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff004f]"
              ></textarea>
              <button
                type="submit"
                className="btn2 px-12 mx-auto font-bold border rounded-xl transition-bg duration-500 border-[#ff004f] hover:bg-[#ff004f] py-2  cursor-pointer "
              >
                Submit
              </button>
            </form>
            {response && (
              <p
                className={`mt-4 text-center ${
                  response.includes("success")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {response}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-6 bg-[#262626] text-sm font-light mt-8">
        <p>Copyright &copy; by Al Samad. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
