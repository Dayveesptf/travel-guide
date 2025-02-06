import React, { useState, useContext } from "react";
import { NigeriaContext } from "../context/context";

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStates, setFilteredStates] = useState([]);

  const { states } = useContext(NigeriaContext);

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

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a state..."
        value={searchTerm}
        onChange={handleSearch}
        className=""
      />
      {filteredStates.length > 0 && (
        <div style={{ backgroundColor: 'red' }}>
          {filteredStates.map((state) => (
            <div key={state.name}>
              {state.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
