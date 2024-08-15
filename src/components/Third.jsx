import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagic,
  faCogs,
  faPencil,
  faCheck,
  faLanguage,
  faDownload,
  faBook,
  faRobot,
  faMagicWandSparkles,
} from "@fortawesome/free-solid-svg-icons";

const Third = () => {
  return (
    <>
      <div className="w-screen h-[200px]  text-white flex justify-center space-x-5 mt-20">
        <div className="w-[270px]  h-[161px] flex flex-col items-center transition-transform transform hover:translate-y-[-14px] duration-300">
          <div className="flex items-center justify-center p-6 h-14 w-14 rounded-full mt-5  bg-[rgb(100,17,169)]">
            <FontAwesomeIcon icon={faRobot} className="w-8 h-8" color="white" />
          </div>
          <p className="text-center flex flex-col">
            <span className="font-bold text-lg">AI-Powered Writing</span>
            <span>
              Generate high-quality content with advanced AI technology.
            </span>
          </p>
        </div>

        <div className="w-[270px]  h-[161px] p-5 flex flex-col items-center transition-transform transform hover:translate-y-[-14px] duration-300">
          <div className="flex items-center justify-center p-6 h-14 w-14 rounded-full bg-[rgb(100,17,169)]">
            <FontAwesomeIcon
              icon={faBook}
              color="white"
              className=" w-8 h-8 "
            />
          </div>
          <p className="text-center flex flex-col">
            <span className="font-bold text-lg">AI-Powered Writing</span>
            <span>
              Generate high-quality content with advanced AI technology.
            </span>
          </p>
        </div>

        <div className="w-[270px]  h-[161px] p-5 flex flex-col items-center transition-transform transform hover:translate-y-[-14px] duration-300">
          <div className="flex items-center justify-center p-6 h-14 w-14 rounded-full bg-[rgb(100,17,169)]">
            <FontAwesomeIcon
              icon={faDownload}
              color="white"
              className=" w-8 h-8 "
            />
          </div>
          <p className="text-center flex flex-col">
            <span className="font-bold text-lg">AI-Powered Writing</span>
            <span>
              Generate high-quality content with advanced AI technology.
            </span>
          </p>
        </div>

        <div className="w-[270px]  h-[161px] p-5 flex flex-col items-center transition-transform transform hover:translate-y-[-14px] duration-300">
          <div className="flex items-center justify-center p-6 h-14 w-14 rounded-full bg-[rgb(100,17,169)]">
            <FontAwesomeIcon
              icon={faLanguage}
              color="white"
              className=" w-8 h-8 "
            />
          </div>
          <p className="text-center flex flex-col">
            <span className="font-bold text-lg">AI-Powered Writing</span>
            <span>
              Generate high-quality content with advanced AI technology.
            </span>
          </p>
        </div>
      </div>

      <div className="w-[80%] h-[650px] sm:h-[600px] lg:h-[400px] bg-white bg-opacity-10 mx-auto mt-32 text-white py-10 px-10">
        <h1 className="font-bold text-center text-2xl">How It Works</h1>

        <div className="flex space-x-10">
          <div className=" w-[49%] flex space-x-4 py-3 px-3 mt-10">
            <div className=" w-12 h-[48px] rounded-full bg-gradient-to-r from-[rgb(108,122,254)] to-[rgb(81,140,214)] flex items-center justify-center">
              <FontAwesomeIcon icon={faMagicWandSparkles} className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xl font-bold">Choose Your Genre</p>
              <p>
                Select from a wide range of genres or create a custom blend.
              </p>
            </div>
          </div>
          <div className=" w-[49%] flex space-x-4 py-3 px-3 mt-10">
            <div className=" w-12 h-[48px] rounded-full bg-gradient-to-r from-[rgb(108,122,254)] to-[rgb(81,140,214)] flex items-center justify-center">
              <FontAwesomeIcon icon={faPencil} className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xl font-bold">Provide Key Details</p>
              <p>
                Input main characters, plot points, or themes to guide the AI.
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-10">
          <div className=" w-[49%] flex space-x-4 py-3 px-3 mt-10">
            <div className=" w-12 h-[48px] rounded-full bg-gradient-to-r from-[rgb(108,122,254)] to-[rgb(81,140,214)] flex items-center justify-center">
              <FontAwesomeIcon icon={faCogs} className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xl font-bold">AI Generation</p>
              <p>Our advanced AI creates your book based on your inputs.</p>
            </div>
          </div>
          <div className=" w-[49%] flex space-x-4 py-3 px-3 mt-10">
            <div className=" w-12 h-[48px] rounded-full bg-gradient-to-r from-[rgb(108,122,254)] to-[rgb(81,140,214)] flex items-center justify-center">
              <FontAwesomeIcon icon={faMagicWandSparkles} className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xl font-bold">Review and Download</p>
              <p>
                Review your generated book and download in your preferred
                format.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[120vh] text-white ">
        <h1 className="text-center text-[25px] font-bold text-white py-5">Sample Books Generated by BookAI</h1>
        <h2 className="text-white text-center text-[17px]">Explore some of the captivating books created using our AI technology.</h2>
        <div className="w-full  flex space-x-6 sm:w-[80%] h-[500px] sm:mx-[160px] ml-0 justify-center my-10 sm:p-5 p-0">

          <div className="bg-white bg-opacity-5 w-[30%] h-[540px] rounded-lg flex flex-col items-center transition-transform transform hover:translate-y-[-14px] duration-300 py-4 space-y-2 p-0 sm:px-4">
            <img src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/paradox.png" alt="" className="w-full h-[70%] object-contain rounded-md"/>
            <p>
              <h1 className="text-center font-bold text-lg">Science Fiction</h1>
              <p className="text-center text-gray-300 italic">"As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands..."</p>
              </p>
            <a href="" className="outline-none text-purple-500">Read More</a>
          </div>

          <div className="bg-white bg-opacity-5 w-[30%] h-[540px] rounded-lg flex flex-col items-center transition-transform transform hover:translate-y-[-14px] duration-300 py-4 space-y-2 px-4">
            <img src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/mist.png" alt="" className="w-full h-[70%] object-contain"/>
            <p>
              <h1 className="text-center font-bold text-lg">Mystery</h1>
              <p className="text-center text-gray-300 italic">"The old lighthouse stood silent, its beacon long extinguished. But on foggy nights, some swore they could still see its ghostly light..."</p>
              </p>
            <a href="" className="outline-none text-purple-500">Read More</a>
          </div>

          <div className="bg-white bg-opacity-5 w-[30%] h-[540px] rounded-lg flex flex-col items-center transition-transform transform hover:translate-y-[-14px] duration-300 py-4 space-y-2 px-4">
            <img src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/ecos.png" alt="" className="w-full h-[70%] object-contain"/>
            <p>
              <h1 className="text-center font-bold text-lg">Fantasy</h1>
              <p className="text-center text-gray-300 italic">"The ancient prophecy spoke of a child born with starlight in their eyes. As the comet blazed overhead, the kingdom held its breath..."</p>
              </p>
            <a href="" className="outline-none text-purple-500">Read More</a>
          </div>

          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Third;
