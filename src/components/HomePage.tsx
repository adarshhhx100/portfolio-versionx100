import React from "react";
import Avatar from "../assets/avatar.png";
import ContImg from "../assets/frontend.jpg";
import Skills from "./Skills";
import { FaCommentDots } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center container mx-auto my-14 p-8 text-center"
    >
      <h1 className="text-5xl font-mono font-black tracking-tighter mt-12 mb-8">
        Software Engineer, Frontend Developer & AI Enthusiast
      </h1>
      <p className="text-2xl sm:text-2xl font-normal leading-relaxed max-w-2xl mx-auto mb-6">
        I code beautiful interfaces in simple way.
      </p>

      <img
        src={Avatar}
        alt="Profile"
        className="w-42 h-42 rounded-full shadow-2xl mt-7 mb-7 transition-transform transform hover:scale-105 hover:shadow-2xl"
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
          <a className="mt-4 text-4xl leading-tight font-medium text-white no-underline">
            Hi, I'm Adarsh. Nice to meet you.
          </a>
          <p className="mt-2 font-sans text-lg text-white text-opacity-90">
            Excited by the future of AI, I'm a Software Engineer and Frontend
            Developer with a passion for building user interfaces for AI-powered
            applications. Whether it's designing chatbots that understand
            natural language or crafting interfaces for virtual assistants, I'm
            focused on making AI accessible and user-friendly for everyone.
          </p>
        </div>
      </div>

      <Skills />

      <div className="container text-center mt-10">
        <h3 className="text-4xl font-mono font-semibold leading-tight">
          Interested in collaborating with me?
        </h3>
        <p className="text-xl font-sans font-medium mt-4 mb-10">
          I’m always open to discussing product design work or partnership
          opportunities.
        </p>

        <div className="flex items-center justify-center mt-4 mb-16">
          <button className="flex items-center bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-900 text-white text-lg py-2 px-6 rounded-lg shadow-md">
            <FaCommentDots className="w-6 h-6 mr-2" />
            Start a conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
