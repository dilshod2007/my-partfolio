import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ConnectedDots from "./ConnectedDots.jsx";
import "../header/header.css";
import cv from "../../assets/cv.pdf";

const Header = () => {
  return (
    <>
      <ConnectedDots className="" />

      <div className="relative text-center z-10 flex items-center justify-center gap-[100px] max-w-[1550px] mx-auto mt-[0px]">
        
        <div className='max-w-7xl text-left'>
          <h1 className="text-5xl font-bold text-white">
            Hi There! <span className="mave" aria-labelledby="mave">👋</span>
          </h1>
          <h1 className="text-4xl text-white mt-6">
            I'M <span className="text-[#cd5ff8] text-5xl ml-2">DILSHOD UMBAROV</span>
          </h1>
          <h2 className="text-4xl text-[#cd5ff8] font-medium mt-10">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Developer",
                "Javascript Developer",
                "TypeScript Developer",
                "Next.js Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <div className="mt-[80px]">
            <a 
              href={cv} 
              download="Dilshod_Umbarov_CV.pdf" 
              className="bg-[#cd5ff8] text-white px-6 py-3 rounded-md hover:bg-[#9b3bcc] transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
        
        <div className=''>
        <img className='w-[450px] md:w-[500px] lg:w-[600px]' src="https://my-portfolio-umber-psi-41.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg" alt="Banner" />
        </div>
      </div>
    </>
  );
}

export default Header;
