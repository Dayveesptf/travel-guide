import React, { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import { NigeriaContext } from "../context/context";
import bgImg from "../assets/bg-nigeria.jpg"
import { GiNigeria } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import axios from "axios";
import flag from "../assets/flag.svg"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BiMap } from "react-icons/bi";
import "./state-info.css"


const StateInfo = () => {
  const sectionsRef = useRef([]);

    const addToRefs = el => {
      if (el && !sectionsRef.current.includes(el)) {
        sectionsRef.current.push(el);
      }
    };
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const { name } = useParams();
  const { states } = useContext(NigeriaContext);
  const state = states.find((s) => s.name.toLowerCase() === name.toLowerCase());
  const [temperature, setTemperature] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const selectedState = states.find((state) => state.name === name);

  const latitude = selectedState?.coordinates.lat ?? 9.0579; // Default to Abuja if lat is missing
  const longitude = selectedState?.coordinates.lng ?? 7.4951; // Default to Abuja if lng is missing
  const coordinates = [latitude, longitude];

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeather(selectedState.coordinates.lat, selectedState.coordinates.lng);
    }
  }, [latitude, longitude]);


  const WEATHER_API_KEY = "3b69875cf2e3676cf4ca64883e099514";

  const fetchWeather = async (lat, lng) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`
      );
      setTemperature(response.data.main.temp);
      setPressure(response.data.main.pressure);
      setHumidity(response.data.main.humidity);
      setSpeed(response.data.wind.speed);
      setError(null);
    } catch (err) {
      setError("Weather data not available.");
    } finally {
      setLoading(false);
    }
  };

  if (!selectedState) {
    return <div className="text-center">State not found.</div>;
  }

  if (!state) {
    return <h2>State not found</h2>;
  }



  return (
    <div className="p-0 m-0 w-[100%] bg-gradient-to-br from-green-50 to-gray-200">
      <div className="relative w-full py-24 md:py-32 flex justify-center items-center text-white">
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
      <img src={flag} alt="" className="w-[80px] h-[80px] ml-[3%] md:ml-[9%] lg:ml-[20%]" />
      <div className="md:w-5/6 lg:w-3/5 w-[94%] mx-[3%] md:mx-auto">
        <h1 className="md:text-4xl text-xl font-semibold tracking-wide mt-4 text-gray-800 flex items-center"> {state.name}: <span className="text-green-800 ml-2"> Destination guide</span></h1>
        <div ref={el => sectionsRef.current[0] = el} className="sections bg-gray-100 mt-6 md:mt-10 md:py-10 md:px-8 p-6 px-4 rounded-xl shadow-2xl">
          <p className="text-gray-600 tracking-wide text-sm md:text-base">{state.description}</p>
        </div>

        <div ref={addToRefs} className="sections py-36 md:w-5/6 lg:w-3/5 w-[94%] mx-[3%] md:mx-auto mt-10" style={{ background: `url(${state.image})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center" }}></div>

      <div ref={addToRefs} className="sections bg-gray-100 mt-6 md:mt-10 md:py-10 md:px-8 p-6 px-3 rounded-xl shadow-2xl">
        <h2 className="md:text-2xl text-base font-semibold flex items-center gap-2">Population <GiNigeria className="text-green-700"/></h2>
        <p className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.population}</p>
      </div>

      <div ref={addToRefs} className="sections bg-gray-100 mt-10 py-10 px-8 rounded-xl shadow-2xl">
        <h2 className="md:text-2xl text-base font-semibold flex items-center gap-2">Safety Information <AiOutlineSafety className="text-green-700"/> </h2>
        <p className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.safetydetails}</p>
      </div>

      <div ref={addToRefs} className="sections bg-gray-100 mt-10 py-10 px-4 md:px-8 rounded-xl shadow-2xl">
      <h2 className="md:text-2xl text-base font-semibold flex items-center gap-2">{state.culturetitle} <FaPeopleGroup className="text-green-700"/> </h2>
      <ul className="list-disc pl-1 pr-1 md:pl-5 md:pr-5">
        <li className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.culture1}</li>
        <li className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.culture2}</li>
        <li className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.culture3}</li>
      </ul>
      </div>

      <div ref={addToRefs} className="sections bg-gray-100 mt-10 py-10 px-3 md:px-8 rounded-xl shadow-2xl">
      <h2 className="md:text-2xl text-base font-semibold flex items-center gap-2 pl-1">Fun Facts</h2>
      <ul className="pl-1 pr-1 md:pl-5 md:pr-5">
        <li className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.funfact1}</li>
        <li className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.funfact2}</li>
        <li className="text-gray-600 tracking-wide mt-6 text-sm md:text-base">{state.funfact3}</li>
      </ul>
      </div>

      <h1 className="mt-20 text-2xl font-semibold flex items-center gap-2">Current Weather Info <TiWeatherPartlySunny className="text-green-700"/></h1>
      <div className="sections" ref={addToRefs}>
      {/* Weather Section */}
      {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 text-center mt-10 gap-4 md:gap-10">
            <div className="bg-yellow-100 py-6 rounded-lg">
              <h3 className="text-sm text-gray-600 underline underline-offset-4">Temperature</h3>
              <p className="text-xl font-semibold">{temperature}°C</p>
            </div>
            <div className="bg-blue-100 py-6 rounded-lg">
              <h3 className="text-sm text-gray-600 underline underline-offset-4">Pressure</h3>
              <p className="text-xl font-semibold">{pressure}hpa</p>
            </div>
            <div className="bg-gray-100 py-6 rounded-lg">
              <h3 className="text-sm underline underline-offset-4">Humidity</h3>
              <p className="text-xl font-semibold">{humidity}%</p>
            </div>
            <div className="bg-green-100 py-6 rounded-lg">
              <h3 className="text-sm text-gray-600 underline underline-offset-4">Wind Speed</h3>
              <p className="text-xl font-semibold">{speed}m/s</p>
            </div>
          </div>
        )}
        </div>

      <div>
      <h1 className="mt-20 text-2xl font-semibold mb-6 flex items-center gap-2">{selectedState?.name} - Map <BiMap className="text-green-700"/></h1>
        <MapContainer
          center={coordinates}
          zoomControl={false}
          scrollWheelZoom={false}
          zoom={12}
          className="w-full h-[200px] md:h-[300px] lg:h-[400px]"
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
          <Marker position={coordinates}>
            <Popup>{selectedState?.name}</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div>
        <MapContainer
          center={coordinates}
          scrollWheelZoom={false}
          zoom={12}
          className="w-full h-[200px] md:h-[300px] lg:h-[400px] mt-12"
        >
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          <Marker position={coordinates}>
            <Popup>{selectedState?.name}</Popup>
          </Marker>
        </MapContainer>
      </div>
      </div>
    </div>
  )
}

export default StateInfo