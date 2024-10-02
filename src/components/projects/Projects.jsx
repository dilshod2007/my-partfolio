import { SiVercel } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import React from 'react'
import ebay from "../../assets/ebay.png"
import ConnectedDots from "../header/ConnectedDots.jsx";
import weather from "../../assets/weather.png"
import fabrx from "../../assets/fabrx.png" 
import medium from "../../assets/medium.png"
import cargo from "../../assets/cargo.png"

const Projects = () => {
  return (
    <>
      <ConnectedDots />
      <div className="mt-[100px] max-w-[1400px] mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">My projects </h1>
          <br />
          <p className=" text-2xl text-[#cd5ff8] ">Here are a few projects I've worked on recently.</p>
        </div>
        <br /><br />
        <div className="grid grid-cols-3 gap-[50px]">
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={ebay} alt="Ebay Project" className="w-[400px] object-cover " />

            <h1 className="text-xl font-semibold mt-4 text-center">Ebay</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/exam-ebay.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://exam-ebay-plum.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={weather} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Weather App </h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/Weather-App.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://weather-app-phi-liard-23.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={fabrx} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Fabrx</h1>

            <div className="flex justify-center  mt-8">
              <a href="#" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={medium} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Medium</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/main--medium.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://main-medium.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={cargo} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Cargo</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/pags.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://pags.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={ebay} alt="Ebay Project" className="w-[400px] object-cover " />

            <h1 className="text-xl font-semibold mt-4 text-center">Ebay</h1>

            <div className="flex justify-center  mt-8">
              <a href="#" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={ebay} alt="Ebay Project" className="w-[400px] object-cover " />

            <h1 className="text-xl font-semibold mt-4 text-center">Ebay</h1>

            <div className="flex justify-center  mt-8">
              <a href="#" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={ebay} alt="Ebay Project" className="w-[400px] object-cover " />

            <h1 className="text-xl font-semibold mt-4 text-center">Ebay</h1>

            <div className="flex justify-center  mt-8">
              <a href="#" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={ebay} alt="Ebay Project" className="w-[400px] object-cover " />

            <h1 className="text-xl font-semibold mt-4 text-center">Ebay</h1>

            <div className="flex justify-center  mt-8">
              <a href="#" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Projects