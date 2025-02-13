import React, { useState, useContext } from "react";
import { NigeriaContext } from "../context/context";
import { useNavigate } from "react-router";


const LandingPage = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStates, setFilteredStates] = useState([]);
  const navigate = useNavigate();
  const { states } = useContext(NigeriaContext);
  

  const getTopPopulatedStates = () => {
    return [...states]
      .map((state) => ({
        ...state,
        population: parseFloat(state.population.replace(/[^0-9.]/g, "")) * (state.population.includes("million") ? 1_000_000 : 1),
      }))
      .sort((a, b) => b.population - a.population) // Sort in descending order
      .slice(0, 6);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length >= 1) {
      const results = states.filter((state) =>
        state.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredStates(results);
    } else {
      setFilteredStates([]);
    }
  };

  // Show top populated states when input is clicked
  const handleInputClick = () => {
    if (searchTerm.length === 0) {
      setFilteredStates(getTopPopulatedStates());
    }
  };


  const handleStateClick  = (stateName) => {
    navigate(`/state-info/${stateName}`);
  }

  return (
    <div>
    <input
      type="text"
      placeholder="Search for a state..."
      value={searchTerm}
      onChange={handleSearch}
      onClick={handleInputClick}
      className="mt-4 p-3 w-full max-w-md rounded-md text-black"
    />

      {filteredStates.length > 0 && (
        <div className="absolute w-full max-w-md bg-white shadow-lg mt-2 rounded-md">
          {filteredStates.map((state) => (
            <div
              key={state.name}
              onClick={() => handleStateClick(state.name)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {state.name}
            </div>
          ))}
        </div>
      )}
    </div>   
  );
};

export default LandingPage;
