import React, { useContext } from "react";
import { useParams } from "react-router";
import { NigeriaContext } from "../context/context";
import { FaUser } from "react-icons/fa";
import bgImg from "../assets/bg-nigeria.jpg"
import { GiNigeria } from "react-icons/gi";
import { MdSafetyCheck } from "react-icons/md";
import { BsPeopleFill, BsSafe2 } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";
import { SiCultura } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";

const StateInfo = () => {
  const { name } = useParams();
  const { states } = useContext(NigeriaContext);
  const state = states.find((s) => s.name.toLowerCase() === name.toLowerCase());

  if (!state) {
    return <h2>State not found</h2>;
  }

  return (
    <div className="p-0 m-0 w-[100%]">
      <div className="relative w-full py-36 flex justify-center items-center text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <h1 className="text-center md:text-5xl font-semibold relative tracking-wider text-2xl">STATE <span className="text-green-300">INFORMATION</span></h1>
      </div>
      <div className="md:w-5/6 lg:w-3/6 w-[94%] mx-[3%] md:mx-auto">
        <h1 className="md:text-4xl text-2xl font-semibold tracking-wide mt-10 text-gray-800 flex items-center"> {state.name}: <span className="text-green-800">Destination guide</span></h1>
        <div className="bg-gray-100 mt-6 md:mt-10 md:py-10 md:px-8 p-6 px-4 rounded-xl shadow-2xl">
          <p className="text-gray-600 tracking-wide text-sm md:text-base">{state.description}</p>
        </div>

        <div className="py-36 w-4/6 mx-auto mt-10" style={{ background: `url(${state.image})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center" }}></div>

      <div className="bg-gray-100 mt-6 md:mt-10 md:py-10 md:px-8 p-6 px-4 rounded-xl shadow-2xl">
        <h2 className="md:text-2xl text-lg font-semibold flex items-center gap-2">Population <GiNigeria className="text-green-700"/></h2>
        <p className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.population}</p>
      </div>

      <div className="bg-gray-100 mt-10 py-10 px-8 rounded-xl shadow-2xl">
        <h2 className="md:text-2xl text-lg font-semibold flex items-center gap-2">Safety Information <AiOutlineSafety className="text-green-700"/> </h2>
        <p className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.safetydetails}</p>
      </div>

      <div className="bg-gray-100 mt-10 py-10 px-8 rounded-xl shadow-2xl">
      <h2 className="md:text-2xl text-lg font-semibold flex items-center gap-2">{state.culturetitle} <FaPeopleGroup className="text-green-700"/> </h2>
      <ul className="list-disc pl-5">
        <li className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.culture1}</li>
        <li className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.culture2}</li>
        <li className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.culture3}</li>
      </ul>
      </div>

      <div className="bg-gray-100 mt-10 py-10 px-8 rounded-xl shadow-2xl">
      <h2 className="md:text-2xl text-lg font-semibold flex items-center gap-2 pl-5">Fun Facts</h2>
      <ul className="pl-5 pr-5">
        <li className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.funfact1}</li>
        <li className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.funfact2}</li>
        <li className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.funfact3}</li>
      </ul>
      </div>
      </div>
    </div>
  )
}

export default StateInfo