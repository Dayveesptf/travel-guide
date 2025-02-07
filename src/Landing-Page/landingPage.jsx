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
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold">Explore Nigeria Like Never Before!</h1>
          <p className="text-lg mt-2">Find hidden gems, rich culture, and exciting adventures.</p>
          <input
            type="text"
            placeholder="Search for a state..."
            value={searchTerm}
            onChange={handleSearch}
            className="mt-4 p-3 w-full max-w-md rounded-md text-black"
          />
          {filteredStates.length > 0 && (
            <div className="mt-2 bg-white text-black p-2 rounded-md">
              {filteredStates.map((state) => (
                <div key={state.name} className="p-2 hover:bg-gray-200">
                  {state.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Top Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
          {states.slice(0, 3).map((state) => (
            <div key={state.name} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{state.name}</h3>
              <p className="text-gray-600">{state.description.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore by Category */}
      <section className="py-12 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-6">Explore by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6">
          {["Adventure & Nature", "Culture & History", "Food & Nightlife", "Beaches & Resorts"].map((category) => (
            <div key={category} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-4">Sign up for travel tips and destination updates.</p>
        <input type="email" placeholder="Enter your email"
          className="p-3 rounded-md text-black w-1/2 max-w-sm"/>
        <button className="ml-2 p-3 bg-red-500 rounded-md">Subscribe</button>
      </section>
    </div>
  );
};

export default LandingPage;
