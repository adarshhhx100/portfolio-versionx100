import React from "react";
import Avatar from "../assets/avatar.png";
import ContImg from "../assets/frontend.jpg";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center container mx-auto my-14 p-8 text-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-mono font-extrabold tracking-tight mb-4 leading-tight whitespace-normal">
        Software Engineer, Frontend Developer & AI Enthusiast
      </h2>
      <p className="text-xl sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-6">
        I code beautiful interfaces in simple way.
      </p>
      <img
        src={Avatar}
        alt="Profile"
        className="w-44 h-44 rounded-full shadow-2xl mt-7 mb-7"
      />

      <div className="w-full bg-gradient-to-r from-blue-700 to-blue-950 rounded-2xl shadow-xl overflow-hidden md:flex md:items-center mt-10 mb-10">
        <div className="relative w-full md:w-1/2 ">
          <img
            src={ContImg}
            alt="Frontend Development"
            className="object-cover w-full h-[50vh] md:h-full"
          />
        </div>
        <div className="p-6 md:p-8 text-center md:text-center bg-blue-900 bg-opacity-70 md:bg-transparent flex flex-col justify-center md:w-1/2">
          <a className="block mt-4 text-lg leading-tight font-medium text-white">
            Hi, I'm Adarsh. Nice to meet you.
          </a>
          <p className="mt-2 text-white text-opacity-110">
            Excited by the future of AI, I'm a Software Engineer and Frontend
            Developer with a passion for building user interfaces for AI-powered
            applications. Whether it's designing chatbots that understand
            natural language or crafting interfaces for virtual assistants, I'm
            focused on making AI accessible and user-friendly for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
