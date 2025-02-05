import { createContext, useState } from "react";

// Create the context
export const NigeriaContext = createContext();

// Provider component
export const NigeriaProvider = ({ children }) => {
  const [states, setStates] = useState([
    {
      name: "Abia",
      description: "Abia State, created on August 27, 1991, was carved out of the old Imo State. The state is located in southeastern Nigeria and is predominantly occupied by the Igbo ethnic group. Historically, Abia has been a major center for trade, agriculture, and industry, with Aba serving as a commercial hub since the colonial era. The Aba Women’s Riot of 1929, a significant anti-colonial protest led by women, remains a key historical event. Today, Abia is known for its entrepreneurial spirit and industrial activities.",
      population: "Abia State has an estimated population of around 3.7 million people. The population is densely concentrated in cities like Aba and Umuahia, the state capital. Aba, often called the Japan of Africa, is famous for its manufacturing and trade, attracting thousands of businesspeople. The population is predominantly Igbo, with a strong presence of artisans, traders, and farmers. Over the years, rapid urbanization has led to growth in infrastructure, education, and commerce, making Abia a key economic player in Nigeria.",
      safetydetails: "Abia State is relatively safe, especially in cities like Umuahia (the capital) and major towns. However, in some areas, issues like petty theft, traffic congestion, and occasional civil disturbances can occur. Travelers should: Stick to well-populated areas and avoid late-night movements in unfamiliar locations, Use trusted transportation services, such as ride-hailing apps or private cabs, Be cautious in markets like Ariaria due to pickpocketing, Stay updated on local news for any security advisories.",
      funfact1: "⭐ Aba Women’s Riot (1929) – One of the first anti-colonial protests in Nigeria was led by women in Aba.",
      funfact2: "⭐ Ariaria International Market – One of the largest markets in West Africa, famous for locally made goods.",
      funfact3: "Home of Aba-made Products – Shoes, clothes, and leatherworks from Aba are exported internationally.",
      culturetitle: "Abia’s culture is deeply rooted in Igbo traditions, with strong values of entrepreneurship, community, and hospitality.",
      culture1: " New Yam Festival (Iri Ji) – A major annual event celebrating harvest, marked with dances, feasts, and masquerades.",
      culture2: "Igbo Language & Proverbs – The Igbo language is widely spoken, with proverbs often used in conversation.",
      culture3: "Handcrafts & Arts – Aba artisans are known for producing quality textiles, footwear, and leatherworks."
    },
    {
      name: "Abuja",
      description: "Abuja is the capital city of Nigeria, known for its modern infrastructure.",
      population: "3,000,000",
    },
    {
      name: "Kano",
      description: "Kano is an economic center in Northern Nigeria, famous for trade and agriculture.",
      population: "13,000,000",
    },
    {
      name: "Rivers",
      description: "Rivers State is known for its oil industry and the bustling city of Port Harcourt.",
      population: "7,000,000",
    },
  ]);

  return (
    <NigeriaContext.Provider value={{ states }}>
      {children}
    </NigeriaContext.Provider>
  );
};
