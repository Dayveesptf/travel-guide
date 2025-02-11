import { createContext, useState } from "react";
import img1 from "../assets/abia-main.jpg";
import img2 from "../assets/abuja-main.jpg";
import img3 from "../assets/adamawa-main.jpg";
import img4 from "../assets/akwaibom-main.jpg";
import img5 from "../assets/bauchi-main.jpg";
import img6 from "../assets/borno-main.jpg";
import img7 from "../assets/crossriver-main.jpg";
import img8 from "../assets/ebonyi-main.jpg";
import img9 from "../assets/ekiti-main.jpg";
import img10 from "../assets/enugu-main.jpg";
import img11 from "../assets/gombe-main.jpg";
import img12 from "../assets/jigawa-main.jpg";
import img13 from "../assets/kano-main.jpg";
import img14 from "../assets/katsina-main.jpg";
import img15 from "../assets/kebbi-main.jpg";
import img16 from "../assets/kogi-main.jpg";
import img17 from "../assets/kwara-main.jpg";
import img18 from "../assets/nasarawa-main.jpg";
import img19 from "../assets/niger-main.jpg";
import img20 from "../assets/osun-main.jpg";
import img21 from "../assets/plateau-main.jpg";
import img22 from "../assets/rivers-main.jpg";
import img23 from "../assets/taraba-main.jpg";
import img24 from "../assets/yobe-main.jpg";

export const NigeriaContext = createContext();

export const NigeriaProvider = ({ children }) => {
  const [states, setStates] = useState([
    {
      name: "Abia",
      image: img1,
      description: "Abia State, created on August 27, 1991, was carved out of the old Imo State. It is located in southeastern Nigeria and predominantly inhabited by the Igbo ethnic group. The state is known for its rich history in trade, agriculture, and industry, with Aba serving as a major commercial hub since colonial times. The Aba Women’s Riot of 1929, a significant anti-colonial movement, remains a key historical event. Today, Abia is a center for industrial production, with its artisans excelling in leatherwork, textiles, and manufacturing. The state's economy thrives on trade, small-scale enterprises, and crude oil extraction, contributing to Nigeria’s GDP. Umuahia, the capital, is known for its administrative and agricultural significance. Abia is also home to prestigious institutions like Abia State University. With ongoing infrastructure developments, including improved roads and markets, the state continues to be a strong player in Nigeria’s economic and cultural landscape.",    
      population: "Abia State has an estimated population of around 3.7 million people, with major settlements in Aba, Umuahia, and Ohafia. The population is predominantly Igbo, known for their entrepreneurial spirit and industrious nature. Aba, the state’s largest city, attracts thousands of traders, artisans, and manufacturers who contribute to the bustling economy. The city is widely recognized for its locally made products, including shoes, bags, and textiles, which are exported across Nigeria and internationally. Umuahia, the state capital, serves as an administrative and agricultural hub, housing government institutions and educational centers. The state's rural communities engage mainly in farming, producing crops such as cassava, palm oil, and yams. Over the years, rapid urbanization has led to significant population growth, placing pressure on infrastructure but also boosting commerce, education, and real estate. Abia’s diverse and enterprising population continues to shape its economic and social development.",
      safetydetails: "Abia State is generally safe, particularly in cities like Umuahia and Aba. However, as with any urban area, there are security challenges such as petty theft, occasional civil disturbances, and traffic congestion. Aba, being a major commercial hub, experiences higher rates of pickpocketing and market-related scams, especially in crowded areas like Ariaria International Market. Travelers and residents are advised to remain cautious in public places and avoid secluded locations at night. Using secure transportation services, such as registered taxis or ride-hailing apps, is recommended for safety. Law enforcement agencies actively patrol key locations, ensuring a reasonable level of security. Visitors should stay updated with local news and advisories. The state government has implemented measures to improve security, including community policing initiatives and infrastructural developments aimed at reducing crime. Overall, exercising standard safety precautions will ensure a comfortable and secure experience while navigating Abia State.",
      funfact1: "⭐ Aba Women’s Riot (1929) – One of the first significant anti-colonial protests in Nigeria was led by women in Aba, advocating against British-imposed taxes.",
      funfact2: "⭐ Ariaria International Market – One of the largest markets in West Africa, famous for locally made goods, including shoes, textiles, and leather products.",
      funfact3: "⭐ Aba-made Products – The city's craftsmen produce high-quality shoes and clothing, many of which are exported internationally, gaining recognition for their durability and affordability.",
      culturetitle: "Abia’s culture is deeply rooted in Igbo traditions, with strong values of entrepreneurship, community, and hospitality. It is rich in festivals, language, and craftsmanship.",
      culture1: "New Yam Festival (Iri Ji) – A highly significant annual festival in Igbo land, celebrating the harvest season. It is marked by feasting, masquerade displays, and traditional dances, signifying gratitude to the gods for a bountiful harvest.",
      culture2: "Igbo Language & Proverbs – The Igbo language is widely spoken, with deep-rooted proverbs that convey wisdom and cultural values. Storytelling and folklore are integral parts of communication and heritage.",
      culture3: "Handcrafts & Arts – Abia’s artisans, particularly in Aba, are renowned for producing high-quality textiles, footwear, and leatherworks. The state's craftsmanship continues to flourish in local and international markets."
    },
    {
      name: "Abuja",
      image: img2,
      description: "Abuja, Nigeria's capital city, officially became the country’s seat of power in 1991, replacing Lagos. It was chosen due to its central location, accessibility, and neutrality among Nigeria’s major ethnic groups. Designed as a planned city, Abuja boasts wide, well-maintained roads, modern infrastructure, and impressive landmarks. Aso Rock, the city's most iconic natural feature, stands as a symbol of Abuja’s landscape. Government institutions, embassies, and multinational companies make Abuja a political and economic hub. The National Mosque and National Christian Centre highlight the city's religious inclusivity. Green spaces like Millennium Park provide relaxation for residents and tourists. Abuja has well-planned districts, with the Central Business District housing major offices, banks, and high-end hotels. The city's nightlife is vibrant, with upscale restaurants, lounges, and entertainment spots. As a growing metropolis, Abuja continues to attract investors, professionals, and expatriates, solidifying its status as one of Africa’s fastest-growing capital cities.",      
      population: "Abuja has an estimated population of over 3.6 million people, making it one of Nigeria’s most rapidly expanding cities. The city experiences constant migration, attracting professionals, expatriates, and government officials seeking opportunities. Abuja’s population is diverse, consisting of people from all parts of Nigeria and beyond, making it a melting pot of cultures. The indigenous Gwari people, known for their traditional practices, have resided in the region for centuries. With modern infrastructure, employment opportunities, and quality living conditions, Abuja continues to experience an influx of new residents. The city's districts vary in population density, with areas like Maitama and Asokoro housing diplomats and high-ranking officials, while Garki and Wuse are popular among business owners and middle-class residents. Rapid urbanization has led to increased housing demands, pushing expansion into satellite towns like Lugbe, Kubwa, and Nyanya. Abuja’s diverse and growing population contributes significantly to its vibrant economy and culture.",
      safetydetails: "Abuja is one of Nigeria’s safest cities due to its strong security presence, particularly in government zones, diplomatic areas, and high-end districts. The city’s well-planned road network and modern infrastructure contribute to an organized and relatively low-crime environment. However, petty crimes like phone snatching, pickpocketing, and minor scams can occur in busy locations such as Wuse Market and Jabi Park. Travelers are advised to stay alert in crowded areas, avoid displaying valuables, and use registered transportation services. Nighttime safety is generally good in secured districts, but visitors should avoid isolated roads and poorly lit areas. Security checkpoints and patrols by law enforcement agencies help maintain order. While Abuja remains stable politically, it is always advisable to stay updated on security advisories. Residents benefit from private security services, gated estates, and community policing efforts. Overall, exercising basic caution ensures a safe experience in Nigeria’s capital city.",
      funfact1: "⭐ Abuja is one of the fastest-growing cities in Africa, with rapid infrastructural development and urban expansion.",
      funfact2: "⭐ The city was designed by an international team of architects in the 1980s, ensuring a well-structured urban layout.",
      funfact3: "⭐ Aso Rock, a massive granite rock formation, serves as Abuja’s most famous natural landmark and a key government symbol.",
      culturetitle: "Abuja's culture is a blend of Nigerian traditions, influenced by its diverse population, international presence, and indigenous heritage.",
      culture1: "FCT Carnival – A colorful annual festival that showcases Nigeria’s cultural diversity through music, dance, and traditional performances. People from all states participate, making it one of Abuja’s most anticipated events.",
      culture2: "Gwari Pottery – The indigenous Gwari people of Abuja are famous for their traditional pottery-making. Their handcrafted clay pots and artistic designs are highly valued and continue to be part of Abuja’s cultural identity.",
      culture3: "International Cuisine – Due to its diverse population and diplomatic presence, Abuja boasts a wide variety of local and international restaurants, offering everything from Nigerian delicacies to continental and Asian cuisine."
    },
    {
      name: "Kano",
      image: img13,
      description: "Kano, founded over a thousand years ago, is one of Nigeria’s oldest cities and a major center for trade, industry, and Islamic culture. Historically, it was a key stop along the trans-Saharan trade route, connecting West Africa with North Africa and the Middle East. The city’s economy has long been driven by agriculture, textile production, and leatherworks. Kano is home to the ancient Kurmi Market, established in the 15th century, where traders still sell traditional crafts, spices, and fabrics. The city is also known for its historic walls, palaces, and Islamic scholarship, with many Quranic schools and mosques dotting the landscape. Kano is an important political and economic hub in northern Nigeria, boasting industries in leather tanning, dyeing, and textile manufacturing. Modern Kano is a blend of tradition and progress, with a bustling atmosphere, rich heritage, and a strong sense of community rooted in Hausa and Fulani customs.",   
      population: "Kano is Nigeria’s second-largest city, with a population of over 15 million people, making it one of the most densely populated urban centers in West Africa. The majority of residents are Hausa-Fulani, who have maintained strong Islamic and cultural traditions for centuries. Due to its economic significance, Kano attracts migrants from other parts of Nigeria and neighboring countries, contributing to its diverse population. Many residents are involved in trade, agriculture, and manufacturing, with a growing presence in modern businesses and education. The city's population is concentrated in areas like Kano Municipal, Fagge, and Nassarawa, which serve as commercial and residential hubs. Kano’s rapid urbanization has led to expansion into satellite towns such as Dawakin Kudu and Kumbotso. The city’s educational institutions, including Bayero University Kano (BUK), contribute to a youthful and dynamic population. With its rich history and vibrant economy, Kano remains an important cultural and economic stronghold.",
      safetydetails: "Kano is generally safe, but visitors should be mindful of cultural sensitivities and local security guidelines. The city has a strong police and security presence, especially in commercial areas, to ensure the safety of residents and tourists. However, travelers should exercise caution in crowded markets, where pickpocketing can occur. It is advisable to dress modestly, particularly for women, as Kano follows conservative Islamic traditions. Discussing politics or religion openly may be sensitive, so visitors should be respectful of local customs. Security checkpoints are common, and identification may be required in certain areas. While the main city remains stable, some rural areas may experience occasional security challenges. Travelers should stay informed about current security conditions, avoid protests or large gatherings, and use trusted transportation services. Kano offers a vibrant cultural experience, and by following basic safety precautions, visitors can enjoy the city's rich history, markets, and traditional architecture.",
      funfact1: "⭐ Kano is home to Kurmi Market, one of the oldest markets in West Africa, dating back to the 15th century.",
      funfact2: "⭐ Kano’s ancient city walls, built over 1,000 years ago, still stand as a historical landmark.",
      funfact3: "⭐ The city has one of Nigeria’s largest textile and leather industries, producing goods exported worldwide.",
      culturetitle: "Kano’s culture is deeply rooted in Islamic traditions and Hausa heritage, with strong influences in art, trade, and celebrations.",
      culture1: "Durbar Festival – A grand cultural event held during Eid celebrations, featuring elaborate horse parades, drummers, and displays of traditional Hausa royalty.",
      culture2: "Hausa Cuisine – Kano is famous for delicacies like suya (spiced grilled meat), kilishi (dried meat), and tuwo shinkafa (rice pudding served with soup).",
      culture3: "Traditional Dyeing Pits – Kano’s historic Kofar Mata dye pits, in use for centuries, produce beautifully dyed fabrics using ancient techniques."
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
