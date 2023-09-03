import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full justify-center items-center flex-col flex">
      <nav className="w-full mb-10 pt-3  flex justify-between items-center ">
        <img src={logo} alt="Logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/");
          }}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
