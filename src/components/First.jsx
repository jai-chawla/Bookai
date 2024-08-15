import React from "react";

const First = () => {
  return (
    <div className="overflow-x-hidden text-white relative z-20 flex flex-col space-y-8 justify-center w-[1100px] mx-auto my-11 p-7  sm:w-screen ">
      <button className="flex flex-col items-start fixed right-[20px] bottom-[20px] bg-black border-2 w-[230px] h-[54px] text-left px-2 py-2">
        <p className="text-[11px]">Find Us On</p>
        <p className="text-[18px] font-bold">Product Hunt</p>
      </button>
      <div className="text-5xl sm:text-5xl font-bold text-center">
        <span>Explore the Possibilities of</span>{" "}
        <span className="text-purple-700 underline leading-loose">AI Book Writing</span>{" "}
        <span>with BookAI</span>
      </div>

      <div className="text-center mx-auto text-lg my-4 text-gray-400 w-screen px-5">
        Unleash the power of AI to create captivating books in minutes.
        Download, Distribute wherever you want. Generate unlimited free books
      </div>

      <div className="flex space-x-2 mx-auto my-6">
        <button className="w-[170px] h-[46px] rounded-full no-underline bg-gradient-to-r from-[rgb(110,119,255)] to-[rgb(91,171,254)] flex justify-center items-center">Get Started</button>
        <button className="w-[170px] h-[46px] rounded-full no-underline bg-gradient-to-r from-[rgb(110,119,255)] to-[rgb(91,171,254)] flex justify-center items-center">Get API Access</button>
      </div>

      <div className="text-yellow-300 text-center">
      Attention:TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation
      </div>
    </div>
    

  );
};

export default First;
