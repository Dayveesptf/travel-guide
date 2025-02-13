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
import img25 from "../assets/lagos-main.jpg";
import img26 from "../assets/delta-main.jpg";
import img27 from "../assets/edo-main.jpg";
import img28 from "../assets/ondo-main.jpg";
import img30 from "../assets/oyo-main.jpg";
import img31 from "../assets/imo-main.jpg";
import img32 from "../assets/kaduna-main.jpg";
import img33 from "../assets/bayelsa-main.jpg";
import img34 from "../assets/anambra-main.jpg";
import img35 from "../assets/ogun-main.jpg";
import img36 from "../assets/benue-main.jpg";

export const NigeriaContext = createContext();

export const NigeriaProvider = ({ children }) => {
  const [states, setStates] = useState([
    {
      name: "Abia",
      image: img1,
      coordinates: { lat: 5.5320, lng: 7.4860 },
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
      coordinates: { lat: 9.0579, lng: 7.4951 },
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
      coordinates: { lat: 12.0022, lng: 8.5919 },
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
      image: img22,
      coordinates: { lat: 4.77742, lng: 7.0134 },
      description: "Rivers State, created in 1967, is located in the Niger Delta region and is one of Nigeria’s most economically significant states due to its oil and gas resources. The capital, Port Harcourt, is a bustling metropolis known as the heart of Nigeria’s petroleum industry, hosting major oil companies and refineries. Apart from oil, Rivers State has a rich cultural heritage, with diverse ethnic groups such as the Ikwerre, Ogoni, and Ijaw. The state’s riverine communities, dense mangrove forests, and beautiful creeks make it a scenic destination. Port Harcourt is famous for its vibrant nightlife, seafood delicacies, and educational institutions, including the University of Port Harcourt. Despite being heavily industrialized, the state maintains its cultural traditions, expressed through festivals, music, and indigenous crafts. Rivers State’s blend of commerce, culture, and natural beauty makes it a vital region in Nigeria’s economy and tourism sector.",
      population: "Rivers State has an estimated population of over 7 million people, making it one of the most populated states in southern Nigeria. The population is diverse, comprising various ethnic groups, with the Ikwerre being the dominant group in Port Harcourt. The state’s population growth has been fueled by industrialization, attracting workers, expatriates, and business professionals. Port Harcourt, as the state's commercial center, experiences high migration rates due to job opportunities in the oil and gas sector. The city has an urban feel, with modern infrastructure, bustling markets, and growing real estate developments. Other major towns, such as Bonny, Omoku, and Eleme, contribute to the state’s economy through fishing, agriculture, and manufacturing. The rapid expansion of urban areas has led to an increasing demand for housing and public services. Rivers State's population continues to grow, driven by economic opportunities and the presence of multinational companies.",
      safetydetails: "Rivers State, particularly Port Harcourt, is relatively safe, but like any major city, it has areas where travelers should exercise caution. Due to its status as an oil-rich region, Port Harcourt experiences occasional protests and labor strikes. Traffic congestion is common, so travelers should plan ahead and use reliable transport. The waterfront areas and crowded markets require vigilance against petty crime. It is advisable to avoid isolated areas at night and stay updated on security advisories. The presence of security forces in strategic locations helps maintain order. For those visiting riverine areas or taking boat rides, it’s essential to follow safety protocols and use trusted guides. Travelers should also be mindful of the weather, as heavy rains can affect transportation. Despite these concerns, Port Harcourt remains an exciting destination for business, culture, and tourism when safety measures are observed.",
      funfact1: "⭐ Rivers State is home to Bonny Island, a major center for Nigeria’s liquefied natural gas (LNG) production.",
      funfact2: "⭐ The state has one of Nigeria’s highest GDPs, driven by its oil and gas industry.",
      funfact3: "⭐ Rivers State hosts the famous Garden City Literary Festival, celebrating literature and the arts.",
      culturetitle: "Rivers State has a rich cultural mix, expressed through its festivals, cuisine, and artistic traditions.",
      culture1: "Owu Festival – A major celebration among the Ijaw people, featuring boat regattas, music, and traditional performances.",
      culture2: "Seafood Cuisine – The state is famous for fresh seafood dishes such as periwinkle soup, catfish pepper soup, and banga soup.",
      culture3: "Nollywood Influence – Port Harcourt has contributed to Nigeria’s film and entertainment industry, producing talented actors and filmmakers."
    },
    {
      name: "Adamawa",
      image: img3,
      coordinates: { lat: 9.3265, lng: 12.3984 },
      description: "Adamawa State, located in northeastern Nigeria, was created in 1991 from the former Gongola State. It shares a border with Cameroon, making it a strategic region for cross-border trade and cultural exchange. The state is known for its diverse ethnic composition, stunning landscapes, and agricultural significance. Adamawa features scenic highlands, waterfalls, and lush green fields, making it an attractive destination for nature lovers. The capital, Yola, is both an administrative and economic hub, home to universities, government offices, and markets. Farming, cattle rearing, and fishing dominate the economy, with crops like maize, millet, and groundnuts widely cultivated. Despite its rural setting, Adamawa has a growing urban population, with increased infrastructural development in Yola and other towns. The state’s unique blend of Fulani, Hausa, and other indigenous cultures contributes to its rich traditions, festivals, and craftsmanship. Adamawa remains a vibrant and historically significant region in Nigeria’s northeast.",
      population: "Adamawa State has an estimated population of around 4.2 million people, spread across urban and rural areas. The state is home to multiple ethnic groups, including the Fulani, Hausa, Bachama, Kilba, and Margi, each contributing to its cultural diversity. Many residents engage in subsistence farming, cattle herding, and fishing, making agriculture the backbone of the state’s economy. The Fulani, known for their nomadic lifestyle, play a crucial role in the region’s cattle trade, supplying livestock to markets across Nigeria. Yola, the state capital, has a growing population due to increased educational and business opportunities, with institutions like Modibbo Adama University attracting students from different parts of the country. The state’s population is spread across major towns like Mubi, Numan, and Ganye, each known for specific trades such as farming, textile weaving, and pottery. Despite economic challenges, Adamawa’s population remains resilient and deeply connected to its traditions.",
      safetydetails: "Adamawa has faced security challenges in recent years, particularly in remote and rural areas. However, Yola and other major towns remain relatively safe with a stable security presence. Travelers visiting the state should take precautions such as avoiding high-risk areas, staying updated on security advisories, and using trusted local guides. It is advisable to stay in secure accommodations, especially when visiting less populated regions. The state government and security forces continue efforts to maintain peace and stability, particularly in economic and educational centers. Public areas like markets, transport hubs, and cultural sites are generally safe, but visitors should remain cautious of petty crimes such as pickpocketing. Traveling during the daytime and using verified transport services are recommended for a safer experience. Despite security concerns in certain areas, Adamawa offers a unique cultural and natural experience, and visitors who take necessary precautions can enjoy its scenic landscapes and traditions.",
      funfact1: "⭐ Adamawa has beautiful highlands and waterfalls, making it a great destination for nature lovers.",
      funfact2: "⭐ The state is home to Modibbo Adama University, a leading educational institution in northeastern Nigeria.",
      funfact3: "⭐ Adamawa’s cattle trade is one of the biggest in Nigeria, attracting buyers from across the country.",
      culturetitle: "Adamawa’s culture is a mix of Fulani, Hausa, and other indigenous traditions, reflected in its festivals, music, and crafts.",
      culture1: "Fulani Festivals – Adamawa hosts traditional Fulani celebrations such as the Durbar festival, showcasing horse riding, drumming, and cultural performances.",
      culture2: "Traditional Music – The state’s cultural heritage includes the use of drums, flutes, and folk singing during festivals and ceremonies.",
      culture3: "Cuisine – Adamawa is known for local delicacies such as Kilishi (spicy dried meat) and Fura da Nono (a millet and milk-based drink)."
    },
    {
      name: "Akwa-Ibom",
      image: img4,
      coordinates: { lat: 5.0389, lng: 7.9095 },
      description: "Akwa Ibom, located in southern Nigeria, was created in 1987 from Cross River State. It is known for its rich oil and gas resources, beautiful beaches, and vibrant cultural heritage. The state capital, Uyo, is one of the fastest-growing cities in Nigeria, boasting modern infrastructure, quality education institutions, and a thriving hospitality industry. The state is home to several tourist attractions, including Ibeno Beach, the longest sand beach in Nigeria, and the Ibom Plaza, a central meeting spot in Uyo. Akwa Ibom’s economy is primarily driven by oil exploration, agriculture, and tourism, with the state being one of Nigeria’s top oil-producing regions. The people of Akwa Ibom are known for their warmth and hospitality, making it an attractive destination for visitors. With its lush landscapes, historical sites, and rich traditions, Akwa Ibom remains one of Nigeria’s most culturally and economically significant states.",
      population: "Akwa Ibom has a population of approximately 5.5 million people, comprising mainly the Ibibio, Annang, and Oron ethnic groups. The state is known for its strong community values, vibrant traditions, and rapidly urbanizing cities. Uyo, the capital, has seen significant population growth due to increased industrialization and infrastructural development. Other key towns, such as Ikot Ekpene and Eket, also contribute to the state's economic and cultural landscape. The population is primarily engaged in fishing, farming, oil-related jobs, and commerce. As a coastal state, Akwa Ibom has a strong maritime culture, with fishing being an essential occupation in riverine communities. Despite urbanization, many residents maintain traditional village lifestyles, preserving their ancestral customs and dialects. With a growing middle class and increasing investment in education and technology, Akwa Ibom’s population continues to play a crucial role in Nigeria’s economic and cultural advancement.",
      safetydetails: "Akwa Ibom is considered one of the safest states in Nigeria, with Uyo being one of the most peaceful state capitals. The state has a relatively low crime rate, and the government actively promotes tourism and economic development. However, travelers should still take precautions when exploring rural areas, especially at night. It is advisable to use only verified transportation services and avoid isolated locations. The state’s coastal areas are generally safe, but visitors should exercise caution when engaging in water activities. Petty crimes such as pickpocketing can occur in crowded markets, so keeping valuables secure is recommended. The hospitality industry is well-regulated, with most hotels and resorts providing good security. With a well-organized local security network and a proactive government, Akwa Ibom continues to be an attractive and safe destination for business and tourism.",
      funfact1: "⭐ Home to Ibom Air, Nigeria’s first state-owned airline, providing efficient domestic flights.",
      funfact2: "⭐ Features the longest bridge in southern Nigeria, the Ikot Abasi Bridge, an engineering marvel.",
      funfact3: "⭐ Akwa Ibom has some of the best seafood dishes in Nigeria, thanks to its coastal location.",
      culturetitle: "Akwa Ibom’s culture is deeply tied to its Ibibio roots, reflected in its traditions, food, and festivals.",
      culture1: "Ekpe Masquerade – A secret society tradition where masked performers showcase cultural and spiritual significance.",
      culture2: "Traditional Cuisine – Local delicacies such as Afang soup and Editan soup are widely enjoyed across Nigeria.",
      culture3: "Music & Dance – Traditional dances such as Ekombi, performed by young women, are a symbol of Ibibio heritage."
    },
      {
        name: "Bauchi",
        image: img5,
        coordinates: { lat: 10.3158, lng: 9.8442 },
        description: "Bauchi State, created in 1976 from the former North-Eastern State, is located in northeastern Nigeria. It is a state rich in history, culture, and natural beauty. Bauchi is home to the famous Yankari National Park, one of Nigeria’s most important wildlife reserves, attracting tourists with its diverse animal species and warm springs. The state capital, Bauchi City, serves as an economic and political center, with bustling markets, historical sites, and growing industries. Agriculture is a dominant sector, with farming communities producing grains, vegetables, and livestock. The people of Bauchi are known for their traditional crafts, including weaving, pottery, and leatherwork. The state’s diverse ethnic composition, including Hausa, Fulani, and minority groups, contributes to its vibrant cultural identity. Despite modern developments, Bauchi retains its traditional values, making it a unique and historically significant state in Nigeria.",
        population: "Bauchi State has an estimated population of around 6.5 million people, consisting of various ethnic groups, including Hausa, Fulani, Tangale, and Sayawa. The state’s economy is largely driven by agriculture, trade, and livestock rearing. Many residents are engaged in farming activities, cultivating crops such as maize, millet, and groundnuts, while cattle rearing is also a major occupation. Bauchi City, the state capital, is a growing urban hub, attracting businesses and investments. Other major towns, including Azare, Misau, and Ningi, serve as trade centers for local industries. The state's population is known for its resilience and deep cultural ties, with traditional festivals and religious practices playing a significant role in daily life. Despite economic challenges, Bauchi’s people continue to uphold their customs while embracing modernization in education and infrastructure development.",
        safetydetails: "Bauchi is generally safe, particularly in major cities and tourist areas. However, some rural parts of the state may experience occasional security concerns, and travelers should remain cautious. It is advisable to avoid isolated areas, especially at night, and stay updated on local security advisories. Visitors are encouraged to use reliable transportation services and be aware of their surroundings when exploring marketplaces and public spaces. The government continues to invest in security measures to maintain stability, particularly in urban centers and tourist attractions like Yankari National Park. Travelers who take standard precautions can enjoy Bauchi’s rich cultural heritage and natural beauty safely.",
        funfact1: "⭐ Yankari National Park is home to elephants, lions, and the famous Wikki Warm Springs.",
        funfact2: "⭐ Bauchi is named after a legendary hunter, highlighting the state’s deep connection to its heritage.",
        funfact3: "⭐ Bauchi State has a long history of Islamic scholarship and traditional leadership.",
        culturetitle: "Bauchi’s culture is influenced by Hausa and Fulani traditions, with a strong emphasis on history and craftsmanship.",
        culture1: "Durbar Festival – A grand celebration featuring horse riding, traditional music, and cultural performances.",
        culture2: "Traditional Weaving – Bauchi is known for its intricate handwoven fabrics and leather crafts.",
        culture3: "Cuisine – Bauchi’s famous dishes include Masa (rice cake) and Tuwo Shinkafa (mashed rice meal)."
      },      
      {
        name: "Borno",
        image: img6,
        coordinates: { lat: 11.8469, lng: 13.1571 },
        description: "Borno State, located in northeastern Nigeria, is the largest state by landmass and is historically significant as the center of the Kanem-Bornu Empire. The empire, which dates back over a thousand years, was a major hub for trade, Islamic scholarship, and military strength. The state capital, Maiduguri, serves as a major commercial and administrative center in northern Nigeria. Despite past security challenges, Borno remains an important part of Nigeria’s economic and cultural landscape. The state's economy is largely based on agriculture, livestock rearing, and cross-border trade, with crops such as millet, maize, and sorghum widely cultivated. Maiduguri is also known for its bustling markets, vibrant food scene, and strong traditional leadership under the Shehu of Borno. The state's cultural heritage is deeply rooted in Kanuri traditions, reflected in its architecture, clothing, and festivals.",
        population: "Borno has an estimated population of around 5.8 million people, with the Kanuri being the dominant ethnic group. Other ethnic groups include Shuwa Arabs, Hausa, and various smaller indigenous communities. The people of Borno have a long history of resilience and adaptability, maintaining their traditions while embracing modern advancements. Agriculture and trade remain the backbone of the economy, with many people engaged in farming, fishing, and livestock rearing. Despite urbanization in Maiduguri and other major towns, rural communities still practice traditional lifestyles centered around family and community values.",
        safetydetails: "Borno has experienced security challenges in recent years, particularly in rural areas. However, Maiduguri, the state capital, has remained relatively stable and continues to serve as a commercial hub. Travelers are advised to follow official travel advisories, avoid rural and conflict-prone areas, and use trusted local guides if necessary. The government, in collaboration with security agencies, has made significant efforts to improve safety, especially in urban areas. Visitors should stay updated on security reports and exercise caution when traveling through less populated regions.",
        funfact1: "⭐ Borno was the center of the Kanem-Bornu Empire, one of Africa’s oldest and most influential kingdoms.",
        funfact2: "⭐ The Shehu of Borno is one of Nigeria’s most respected traditional rulers, maintaining a lineage of leadership that dates back centuries.",
        funfact3: "⭐ Maiduguri is famous for its delicious Kilishi (spiced dried meat) and other traditional delicacies.",
        culturetitle: "Borno’s culture is deeply influenced by Kanuri traditions and Islamic heritage.",
        culture1: "Shehu’s Palace – A historic site symbolizing the Kanuri dynasty and its long-standing leadership.",
        culture2: "Traditional Music – Unique drum and string instruments are used in local celebrations and festivals.",       
        culture3: "Local Crafts – Borno is known for its intricate embroidery, leatherwork, and handwoven textiles."
      },
      {
        name: "Cross-river",
        image: img7,
        coordinates: { lat: 5.9631, lng: 8.3347 },
        description: "Cross River State, created in 1976, is located in southern Nigeria. It is known for its lush rainforest, ecotourism, and vibrant culture. The state capital, Calabar, is a major tourist destination famous for its annual carnival and historical sites.",
        population: "Cross River has an estimated population of around 4 million people. The Efik, Ejagham, and Bekwarra are the dominant ethnic groups. Fishing, agriculture, and tourism drive the state’s economy.",
        safetydetails: "Cross River is one of the safest states in Nigeria, particularly in Calabar. Travelers should: Be cautious in rural areas, Use registered transport services, Stay updated on local events.",
        funfact1: "⭐ Calabar Carnival is Africa’s biggest street party, attracting tourists worldwide.",
        funfact2: "⭐ Cross River National Park is home to rare gorillas and diverse wildlife.",
        funfact3: "Calabar is known for its historic slave trade museums and colonial architecture.",
        culturetitle: "Cross River’s culture is colorful and deeply rooted in Efik traditions.",
        culture1: "Ekpe Masquerade – A significant cultural and spiritual event.",
        culture2: "Delicious Cuisine – Afang Soup and Edikang Ikong are popular dishes.",
        culture3: "Traditional Dance – The Efik people perform elaborate dances at festivals."
      },
      {
        name: "Ebonyi",
        image: img8,
        coordinates: { lat: 6.2649, lng: 8.0137 },
        description: "Ebonyi State, created in 1996, is located in southeastern Nigeria. It was formed from parts of Enugu and Abia states. The state is known for its rich agricultural base, with rice, yam, and cassava being major crops. Abakaliki, the capital, is famous for its rice mills and salt lakes. Ebonyi is home to various tourist attractions, including the Abakaliki Green Lake and the Unwana Beach. The people are predominantly Igbo, with a deep-rooted cultural heritage and strong entrepreneurial spirit.",
        population: "Ebonyi State has an estimated population of around 3 million people. The population is mostly rural, with farming as the predominant occupation. Urban centers like Abakaliki are experiencing growth due to increased investment in infrastructure, commerce, and education.",
        safetydetails: "Ebonyi is relatively safe, but travelers should be cautious in remote areas. Stick to major cities and use reliable transportation services.",
        funfact1: "⭐ Abakaliki Rice – One of Nigeria’s most renowned rice-producing areas.",
        funfact2: "⭐ Ebonyi has large deposits of salt, leading to its nickname ‘Salt of the Nation’.",
        funfact3: "The state is known for its beautiful tourist attractions, such as the Unwana Beach and Okposi Salt Lake.",
        culturetitle: "Ebonyi’s culture is rich in Igbo traditions and vibrant festivals.",
        culture1: "New Yam Festival – Celebrated yearly to mark the harvest season.",
        culture2: "Masquerade Festivals – Colorful displays of cultural heritage and traditional beliefs.",
        culture3: "Igbo Traditional Wrestling – A significant part of social life and entertainment."
      },
      {
        name: "Ekiti",
        image: img9,
        coordinates: { lat: 7.7180, lng: 5.3100 },
        description: "Ekiti State, created in 1996, is located in southwestern Nigeria. The state is known for its hilly terrain, which gives it the name ‘Land of Honour and Integrity.’ Agriculture is the backbone of Ekiti’s economy, with cocoa, yam, and rice being major crops. Ado-Ekiti, the capital, is a growing hub for education and commerce. Ekiti is rich in cultural heritage, hosting traditional festivals and showcasing Yoruba customs, making it one of the most historically significant states in Nigeria.",
        population: "Ekiti State has an estimated population of around 3.3 million people. The majority are Yoruba, with a high literacy rate due to the presence of many educational institutions. Farming remains a primary occupation.",
        safetydetails: "Ekiti is generally peaceful, but visitors should remain cautious and follow local guidelines when traveling in remote areas.",
        funfact1: "⭐ Known as the ‘Fountain of Knowledge’ due to its emphasis on education.",
        funfact2: "⭐ Home to Ikogosi Warm Springs, a rare natural phenomenon where warm and cold springs meet.",
        funfact3: "The state has one of the highest literacy rates in Nigeria.",
        culturetitle: "Ekiti’s culture is deeply rooted in Yoruba traditions.",
        culture1: "Ekiti Parapo War Festival – Celebrating historical alliances and bravery.",
        culture2: "Ewi Festival – A festival honoring traditional rulers and unity.",
        culture3: "Traditional Yoruba Pottery – A well-known craft in the state."
      },
      {
        name: "Enugu",
        image: img10,
        coordinates: { lat: 6.5244, lng: 7.5174 },
        description: "Enugu State, created in 1991, is located in southeastern Nigeria. It was carved out of the old Anambra State and is known for its coal mining heritage, which earned it the nickname ‘Coal City State.’ The capital, Enugu, is a major cultural and commercial center in the region. The state has a strong literary and artistic tradition, producing notable Nigerian writers and musicians. Enugu also boasts natural attractions like the Awhum Waterfalls and the Ngwo Pine Forest.",
        population: "Enugu has an estimated population of around 4.4 million people. The state is predominantly Igbo, with commerce, agriculture, and education playing key roles in its economy.",
        safetydetails: "Enugu is one of the safest states in Nigeria. However, travelers should take standard precautions when exploring remote areas.",
        funfact1: "⭐ The first coal mine in Nigeria was established in Enugu in 1909.",
        funfact2: "⭐ Enugu is home to Nollywood, Nigeria’s booming film industry.",
        funfact3: "The state has many stunning waterfalls and nature reserves.",
        culturetitle: "Enugu has a strong Igbo cultural identity.",
        culture1: "Mmanwu Festival – A colorful masquerade festival celebrated by locals.",
        culture2: "Igbo Highlife Music – Popularized by musicians from Enugu.",
        culture3: "Traditional Attire – Igbo cultural dressing remains prominent."
      },
      {
        name: "Gombe",
        image: img11,
        coordinates: { lat: 10.2897, lng: 11.1716 },
        description: "Gombe State, located in northeastern Nigeria, was created in 1996 from Bauchi State. It is known as the 'Jewel in the Savannah' and has a mix of savannah and semi-arid climate. The state's economy is primarily driven by agriculture, with crops like maize, millet, and groundnuts being dominant.",
        population: "Gombe has an estimated population of about 3.2 million people, with major ethnic groups including the Fulani, Hausa, Tangale, and Tera. The capital, Gombe city, serves as a commercial and administrative hub.",
        safetydetails: "Gombe is relatively safe but has occasional security concerns, especially in rural areas. Travelers are advised to stay within city centers and use verified transport services.",
        funfact1: "⭐ Home to the famous Gombe Stream National Park, a conservation area for wildlife.",
        funfact2: "⭐ Known for its annual hunting festival, which showcases local hunting traditions.",
        funfact3: "⭐ One of the fastest-growing states in the northeast due to infrastructural development.",
        culturetitle: "Gombe has a rich cultural heritage, influenced by its diverse ethnic composition.",
        culture1: "Tangale Dance Festival – A cultural event that features traditional dances and music.",
        culture2: "Durbar Festival – A horse-riding festival showcasing the Fulani and Hausa heritage.",
        culture3: "Handwoven Fabrics – Locally made fabrics and crafts are a significant part of Gombe’s culture.",
      },
      {
        name: "Jigawa",
        image: img12,
        coordinates: { lat: 12.2280, lng: 9.5616 },
        description: "Jigawa State, created in 1991 from Kano State, is located in northwestern Nigeria. It is predominantly an agricultural state, producing crops like rice, sorghum, and millet. The state has a vast expanse of arid land, with seasonal rivers and wetlands.",
        population: "Jigawa has an estimated population of around 5.8 million people, with the Hausa and Fulani ethnic groups being predominant. Dutse, the state capital, is a fast-developing city with growing commercial activities.",
        safetydetails: "Jigawa is generally peaceful, but travelers should be cautious in border towns due to potential security risks.",
        funfact1: "⭐ Home to the Hadejia-Nguru Wetlands, an important biodiversity zone.",
        funfact2: "⭐ Known for its historical connection to the Trans-Saharan trade routes.",
        funfact3: "⭐ Jigawa produces some of the best rice in Nigeria.",
        culturetitle: "Jigawa has a rich Islamic and Hausa-Fulani cultural heritage.",
        culture1: "Argungu Fishing Festival – A popular festival featuring traditional fishing competitions.",
        culture2: "Hausa Architecture – The state boasts unique traditional architectural designs.",
        culture3: "Farming Festivals – Celebrations of harvest and communal farming activities.",
      },
      {
        name: "Katsina",
        image: img14,
        coordinates: { lat: 12.9908, lng: 7.6018 },
        description: "Katsina State, created in 1987, is located in northwestern Nigeria and shares a border with Niger Republic. The state has a strong historical significance, being a center of Islamic learning and Hausa civilization.",
        population: "Katsina has an estimated population of over 7.8 million people, with the Hausa and Fulani being the major ethnic groups. The capital, Katsina city, is a key economic and cultural center in northern Nigeria.",
        safetydetails: "Katsina has experienced some security challenges, particularly in rural areas. Travelers should remain vigilant and follow security advisories.",
        funfact1: "⭐ Home to the famous Gobarau Minaret, a centuries-old Islamic tower.",
        funfact2: "⭐ Katsina is known as the ‘Home of Hospitality.’",
        funfact3: "⭐ The first university in Northern Nigeria, Umaru Musa Yar’adua University, is located here.",
        culturetitle: "Katsina is deeply rooted in Islamic and Hausa traditions.",
        culture1: "Durbar Festival – A grand equestrian display held during Eid celebrations.",
        culture2: "Traditional Leatherworks – Katsina is famous for its high-quality leather products.",
        culture3: "Islamic Scholarship – The state has numerous Quranic and Islamic learning centers.",
      },
      {
        name: "Kogi",
        image: img16,
        coordinates: { lat: 7.7337, lng: 6.6906 },
        description: "Kogi State, created in 1991, is located in central Nigeria and is home to the confluence of the Niger and Benue rivers. The state is rich in natural resources and serves as a major transit route between northern and southern Nigeria. Lokoja, the state capital, was historically the first administrative capital of Nigeria during colonial rule. Kogi is home to several ethnic groups, including Igala, Ebira, and Okun, making it one of Nigeria’s most culturally diverse states.",
        population: "Kogi State has a population of approximately 4.5 million people, with a mix of rural and urban settlements. Lokoja, the capital, is a key trading hub.",
        safetydetails: "Kogi is generally safe, but travelers should be cautious in remote areas due to occasional security concerns. Urban centers like Lokoja are more secure, but petty crime can occur.",
        funfact1: "⭐ Lokoja was the first administrative capital of Nigeria.",
        funfact2: "⭐ The state is home to Mount Patti, where Lord Lugard named Nigeria.",
        funfact3: "⭐ The Confluence of Rivers Niger and Benue is a major geographical landmark in Kogi.",
        culturetitle: "Kogi’s culture is shaped by its multi-ethnic population.",
        culture1: "Ibegwu Festival – A significant Igala festival honoring ancestors.",
        culture2: "Ebira Masquerade Festival – A colorful and vibrant event with rich traditions.",
        culture3: "Traditional Weaving – Handwoven fabrics are a key cultural heritage."
      },
      {
        name: "Kwara",
        image: img17,
        coordinates: { lat: 8.9669, lng: 4.5624 },
        description: "Kwara State, established in 1967, is in western Nigeria and shares a border with Benin Republic. The state’s economy thrives on agriculture, trade, and education, with Ilorin, the state capital, serving as a major educational hub. Kwara is known for its cultural blend of Yoruba, Nupe, and Bariba ethnic groups. The state hosts several tourist attractions, including the Esie Museum, home to ancient stone carvings, and Owu Waterfalls, one of Nigeria’s tallest waterfalls.",
        population: "Kwara has a population of about 3.2 million people, with Ilorin being the most populous city.",
        safetydetails: "Kwara is relatively peaceful, but travelers should be mindful of local safety advisories in remote areas.",
        funfact1: "⭐ Kwara is home to Nigeria’s first museum, the Esie Museum.",
        funfact2: "⭐ Owu Waterfalls, the highest waterfall in West Africa, is in Kwara.",
        funfact3: "⭐ Ilorin has one of the oldest Islamic schools in Nigeria.",
        culturetitle: "Kwara's culture is a mix of Yoruba and northern influences.",
        culture1: "Durbar Festival – A colorful equestrian parade during Islamic celebrations.",
        culture2: "Ilorin Pottery – Traditional pottery making is a key heritage.",
        culture3: "Local Cuisine – Popular dishes include Amala and Ilorin’s signature soups."
      },
      {
        name: "Kebbi",
        image: img15,
        coordinates: { lat: 11.5569, lng: 4.2040 },
        description: "Kebbi State, created in 1991, is located in northwestern Nigeria and is known for its rich history and agricultural economy. The state is a leading producer of rice in Nigeria, contributing significantly to food security. Birnin Kebbi, the capital, is an important trade center with strong ties to neighboring Niger. Kebbi hosts the Argungu Fishing Festival, a famous cultural event that attracts visitors from across the country and beyond, celebrating fishing traditions and local heritage.",
        population: "Kebbi State has a population of about 4.4 million people, with agriculture being the main occupation.",
        safetydetails: "Kebbi is generally safe, but travelers should remain cautious in border areas.",
        funfact1: "⭐ Kebbi is Nigeria’s top rice-producing state.",
        funfact2: "⭐ The Argungu Fishing Festival is one of the oldest festivals in Nigeria.",
        funfact3: "⭐ The state shares a border with the Republic of Niger.",
        culturetitle: "Kebbi’s culture reflects its strong Hausa-Fulani traditions.",
        culture1: "Argungu Fishing Festival – A globally recognized cultural event.",
        culture2: "Hausa Architecture – The state has unique traditional buildings.",
        culture3: "Traditional Wrestling – A popular sport in Kebbi’s rural communities."
      },
      {
        name: "Nasarawa",
        image: img18,
        coordinates: { lat: 8.4998, lng: 8.5470 },
        description: "Nasarawa State, created in 1996, is located in central Nigeria and is known for its solid mineral deposits. The state has a blend of cultural and ethnic groups, including the Eggon, Tiv, and Gwandara. Lafia, the capital, is a growing urban center with a mix of traditional and modern lifestyles. Nasarawa is also home to Farin Ruwa Waterfalls, one of Nigeria’s most beautiful natural attractions.",
        population: "Nasarawa has a population of around 2.5 million people, with agriculture and mining as dominant industries.",
        safetydetails: "The state is generally peaceful, but some rural areas may have security concerns. Travelers should stay informed about local advisories.",
        funfact1: "⭐ Nasarawa is known as the 'Home of Solid Minerals.'",
        funfact2: "⭐ Farin Ruwa Waterfalls is one of the tallest waterfalls in Nigeria.",
        funfact3: "⭐ The state is a major producer of sesame seeds and yams.",
        culturetitle: "Nasarawa's culture is influenced by its diverse ethnic communities.",
        culture1: "Emir of Lafia’s Palace – A historic and cultural landmark.",
        culture2: "Traditional Wrestling – A popular sporting event in rural areas.",
        culture3: "Gwandara Festival – A celebration of the Gwandara people's heritage."
      },
      {
        name: "Niger",
        image: img19,
        coordinates: { lat: 9.6000, lng: 6.5500 },
        description: "Niger State, the largest state in Nigeria by landmass, is located in the North-Central region. It is home to the famous Gurara Waterfalls and the Kainji Dam, Nigeria’s major hydroelectric power source. Minna, the state capital, is a center for agriculture and trade. The state is predominantly occupied by the Nupe, Gwari, and Hausa ethnic groups, with a strong history of traditional leadership.",
        population: "Niger State has a population of approximately 5.5 million people, with Minna being the most urbanized city.",
        safetydetails: "Niger is relatively safe, but travelers should be cautious in remote areas due to sporadic security issues.",
        funfact1: "⭐ Niger is home to Nigeria’s largest hydroelectric power dam, Kainji Dam.",
        funfact2: "⭐ The Zuma Rock, a massive monolith, is located in Niger State.",
        funfact3: "⭐ Minna was once home to famous Nigerian leaders such as Ibrahim Babangida and Abdulsalami Abubakar.",
        culturetitle: "Niger’s culture is rich with Nupe and Gwari traditions.",
        culture1: "Nupe Day Festival – A celebration of the Nupe people’s history.",
        culture2: "Gurara Waterfalls – A site of cultural and religious significance.",
        culture3: "Traditional Pottery – The state is famous for its unique pottery designs."
      },
      {
        name: "Osun",
        image: img20,
        coordinates: { lat: 7.5629, lng: 4.5200 },
        description: "Osun State, created in 1991, is in southwestern Nigeria and is famous for its rich Yoruba heritage. Osogbo, the state capital, is home to the UNESCO-listed Osun-Osogbo Sacred Grove, a major cultural and spiritual site. The state is also known for its vibrant festivals, including the Osun Festival, which attracts tourists worldwide. Agriculture and small-scale industries drive the state's economy.",
        population: "Osun State has a population of about 4.7 million people, with a predominantly Yoruba-speaking population.",
        safetydetails: "Osun is generally peaceful, with occasional political tensions. Visitors should stay aware of local developments.",
        funfact1: "⭐ The Osun-Osogbo Sacred Grove is a UNESCO World Heritage Site.",
        funfact2: "⭐ Osun State is named after the Osun River, which is believed to have spiritual significance.",
        funfact3: "⭐ The state is known for its traditional textile industry, including Adire fabric.",
        culturetitle: "Osun’s culture is deeply rooted in Yoruba traditions.",
        culture1: "Osun Festival – A grand annual festival dedicated to the river goddess.",
        culture2: "Egungun Festival – A traditional masquerade festival celebrating Yoruba ancestors.",
        culture3: "Adire Textile – A famous indigo-dyed fabric handcrafted in Osogbo."
      },
      {
        name: "Plateau",
        image: img21,
        coordinates: { lat: 9.9281, lng: 8.8922 },
        description: "Plateau State, located in central Nigeria, is known for its scenic landscapes, temperate climate, and rich cultural heritage. The capital, Jos, was a colonial administrative hub and remains a center of tourism and education. The state is home to many ethnic groups, including the Berom, Afizere, and Anaguta, each contributing to its cultural diversity.",
        population: "Plateau State has an estimated population of about 4.2 million people.",
        safetydetails: "While Jos has seen periods of interethnic tension, the city remains relatively peaceful with security measures in place. Visitors should remain cautious in certain areas.",
        funfact1: "⭐ Plateau is known as the ‘Home of Peace and Tourism.’",
        funfact2: "⭐ Jos has one of the coolest climates in Nigeria due to its high altitude.",
        funfact3: "⭐ The state is a leading producer of potatoes and vegetables in Nigeria.",
        culturetitle: "Plateau’s culture is a blend of indigenous traditions and colonial influences.",
        culture1: "Nzem Berom Festival – Celebrates Berom heritage and traditions.",
        culture2: "Jos Museum – A historical site showcasing Nigeria’s cultural artifacts.",
        culture3: "Traditional Weaving – The state is known for its handcrafted fabrics."
      },
      {
        name: "Sokoto",
        image: "https://tse4.mm.bing.net/th?id=OIP.5MW1Qp9eG7-7NStWCLZ6MQHaEK&pid=Api&P=0&h=220",
        coordinates: { lat: 13.0535, lng: 5.3223 },
        description: "Sokoto State, located in northwestern Nigeria, is the historical seat of the Sokoto Caliphate, an important Islamic empire in West Africa. The capital, Sokoto, is a center for Islamic learning and culture. The state is largely populated by the Hausa and Fulani ethnic groups and is known for its rich history and agricultural activities.",
        population: "Sokoto State has a population of approximately 5.3 million people.",
        safetydetails: "The state is generally peaceful but travelers should stay informed about local security updates, especially in rural areas.",
        funfact1: "⭐ Sokoto is known as the ‘Seat of the Caliphate.’",
        funfact2: "⭐ The state experiences some of the hottest temperatures in Nigeria.",
        funfact3: "⭐ Sokoto is famous for its high-quality leather products.",
        culturetitle: "Sokoto’s culture is deeply rooted in Islamic and Fulani traditions.",
        culture1: "Durbar Festival – A grand equestrian display marking Islamic celebrations.",
        culture2: "Sokoto Caliphate Palace – A historic and cultural landmark.",
        culture3: "Tie and Dye Textiles – A traditional craft passed down through generations."
      },
      {
        name: "Taraba",
        image: img23,
        coordinates: { lat: 7.9984, lng: 10.4961 },
        description: "Taraba State, located in northeastern Nigeria, is known for its diverse ethnic groups, beautiful landscapes, and natural attractions. The capital, Jalingo, is a growing city with a mix of traditional and modern influences. Taraba is home to the Mambilla Plateau, which boasts Nigeria’s highest altitude and cool weather.",
        population: "Taraba has an estimated population of about 3 million people.",
        safetydetails: "The state is largely peaceful, but some remote areas may have security concerns. Travelers should stay informed about local advisories.",
        funfact1: "⭐ Taraba is known as ‘Nature’s Gift to the Nation.’",
        funfact2: "⭐ The Mambilla Plateau has the highest altitude in Nigeria.",
        funfact3: "⭐ Taraba is a major producer of tea and coffee in Nigeria.",
        culturetitle: "Taraba’s culture is influenced by its over 30 ethnic groups.",
        culture1: "Kambari Festival – Celebrates the culture of the Kambari people.",
        culture2: "Mambilla Plateau – A site of cultural and historical significance.",
        culture3: "Traditional Horse Riding – A popular activity among the Fulani people."
      },
      {
        name: "Yobe",
        image: img24,
        coordinates: { lat: 12.0000, lng: 11.5000 },
        description: "Yobe State, located in northeastern Nigeria, is known for its rich history, desert landscape, and agricultural activities. The capital, Damaturu, is a developing city that serves as an administrative and commercial hub. The state is predominantly populated by the Kanuri and Fulani ethnic groups, and it shares a border with Niger Republic.",
        population: "Yobe has an estimated population of about 3.4 million people.",
        safetydetails: "Yobe has experienced security challenges in the past but has seen improvements in stability. Travelers should stay informed and follow local security advisories.",
        funfact1: "⭐ Yobe is home to Nigeria’s portion of the Sahara Desert.",
        funfact2: "⭐ The state has some of the largest livestock markets in Nigeria.",
        funfact3: "⭐ Yobe is known for its date palm plantations and fish farming industry.",
        culturetitle: "Yobe’s culture is deeply rooted in Kanuri and Fulani traditions.",
        culture1: "Durbar Festival – A colorful equestrian parade during major celebrations.",
        culture2: "Pottery and Leatherwork – Handcrafted items made using traditional techniques.",
        culture3: "Traditional Wrestling – A popular sporting and cultural activity."
      },
      {
        name: "Zamfara",
        image: "https://tse1.mm.bing.net/th?id=OIP.heyjRnl_Oo49HqXc4wb1LwHaEw&pid=Api&P=0&h=220",
        coordinates: { lat: 12.1700, lng: 6.6590 },
        description: "Zamfara State, located in northwestern Nigeria, is known for its vast agricultural land and rich cultural heritage. The capital, Gusau, is a commercial and administrative center. The state is largely populated by the Hausa and Fulani ethnic groups, with Islam being the predominant religion.",
        population: "Zamfara has an estimated population of about 4.5 million people.",
        safetydetails: "The state has faced security concerns in rural areas. Travelers should be cautious and stay updated on local security reports.",
        funfact1: "⭐ Zamfara is one of Nigeria’s leading producers of gold and other minerals.",
        funfact2: "⭐ The state has a strong tradition of Islamic scholarship and learning.",
        funfact3: "⭐ Zamfara’s economy is largely driven by agriculture and cattle rearing.",
        culturetitle: "Zamfara’s culture is influenced by Hausa traditions and Islamic heritage.",
        culture1: "Hawan Sallah – A grand horse-riding festival during Islamic celebrations.",
        culture2: "Zamfara Leatherworks – The state is famous for high-quality leather products.",
        culture3: "Gidan Sarki Palace – A historic landmark representing Hausa architecture."
      },
      {
        name:"Lagos",
        image: img25,
        coordinates: { lat: 6.45407, lng: 3.39467 },
        description:"Lagos is the largest city in Nigeria and one of the fastest-growing cities in the world. Located along the Atlantic Ocean in the southwestern part of the country, it serves as Nigeria's economic and financial hub. Although Abuja is the official capital of Nigeria, Lagos remains the country's most prominent commercial and cultural cente",
        population:"Lagos is one of the most populous cities in Africa, with an estimated population of over 20 million people. It is a melting pot of cultures, ethnicities, and languages, attracting people from across Nigeria and beyond",
        safetydetails:"Visiting Lagos, Nigeria, can be an exciting and rewarding experience, but like any major city, it requires awareness and precautions to ensure safety. Here are some key safety tips and details to consider when visiting Lagos;Dress modestly and avoid wearing flashy jewelry or displaying expensive gadgets like cameras, phones, or laptops in public. This helps you avoid drawing unnecessary attention,Opt for registered taxi services or ride-hailing apps like Uber or Bolt. Avoid unmarked taxis or public buses (danfos), especially at night,and not to forget Lagos is notorious for heavy traffic. Plan your trips with extra time and avoid rush hours if possible.",
        funfact1:"⭐ Lagos is the heart of Nollywood, Nigeria's booming film industry, which produces thousands of movies annually. In fact, Nollywood is the second-largest film industry in the world by volume, surpassing Hollywood and only trailing behind India's Bollywood. Many of these films are shot on low budgets but have a massive following across Africa and the diaspora.",
        funfact2:`⭐ Lagos is often called the "Venice of Africa" because much of the city is built on a network of islands, lagoons, and waterways. The city's name, "Lagos," actually means "lakes" in Portuguese, reflecting its aquatic geography. Areas like Victoria Island, Ikoyi, and Lekki are surrounded by water, and ferries are a popular mode of transportation.`,
        funfact3:`⭐ Badagry in Lagos   is home to the "Point of No Return," a symbolic spot where enslaved Africans were forced onto ships bound for the Americas. Today, it serves as a powerful reminder of the dark history of the slave trade and a place for reflection and education.`,
        culturetitle:"Lagos is a microcosm of Nigeria's rich ethnic diversity. With over 250 ethnic groups in Nigeria, Lagos serves as a melting pot where Yoruba, Igbo, Hausa, and other cultures coexist. This diversity is reflected in the city's languages, food, festivals, and daily interactions.",
        culture1:"Lagos is the global hub of Afrobeats, a genre that has taken the world by storm. Artists like Rema, Burna Boy,Wizkid, and Davido have roots in Lagos, and the city's nightlife thrives with live performances, clubs, and concerts.Venues like The New Afrika Shrine (founded by Fela Kuti, the pioneer of Afrobeat) and festivals like Felabration celebrate the city's rich musical heritage. Afrobeats is not just music; it's a lifestyle that embodies the energy and creativity of Lagos.",
        culture2:"Lagos is famous for its street food culture, which is a blend of tradition and innovation. From suya (spiced grilled meat) to jollof rice, puff-puff (fried dough), and akara (bean cakes), the city's food scene is a reflection of its multicultural identity.",
        culture3:"Lagos is the heart of Nollywood, Nigeria's film industry, which is the second-largest in the world by volume. Nollywood movies are known for their dramatic storytelling, cultural themes, and relatable narratives."
      },
      {
        name:"Delta",
        image: img26,
        coordinates: { lat: 5.8904, lng: 5.6800 },
        description: "Delta State, located in the southern region of Nigeria, is one of the country's most prominent states due to its rich cultural heritage, natural resources, and economic significance.",
        population:" Delta State is one of the more populous states in Nigeria,As of the most recent estimates, the population of Delta State, Nigeria, is approximately 5.6 million people",
        safetydetails:" Delta State, Nigeria is considered a safe state  However, like any travel destination, it’s important to take certain safety precautions to ensure a smooth and enjoyable trip Stay in Secure AccommodationsChoose reputable hotels or guesthouses with good security measures, such as gated compounds, security personnel, and CCTV cameras.Popular cities like Asaba and Warri have a range of safe lodging options,Use registered taxi services or ride-hailing apps like Uber or Bolt. Avoid unmarked taxis or public transportation (buses or motorcycles) unless absolutely necessary,Delta State is home to diverse ethnic groups, each with its own traditions and customs. Dress modestly, especially when visiting rural areas or religious sites.Always ask for permission before taking photos of people or cultural events." ,
        funfact1:`⭐ Delta State is nicknamed "The Big Heart" because of its generous and welcoming people. The state is home to a diverse mix of ethnic groups, including the Urhobo, Isoko, Ijaw, Itsekiri, and Anioma (Igbo), who coexist harmoniously and celebrate their cultural diversity through festivals, food, and traditions.`,
        funfact2:`⭐ Delta State is one of Nigeria's largest producers of crude oil and natural gas, making it a key player in the country's economy. The state is part of the Niger Delta region, often referred to as the "oil-rich Niger Delta," and hosts numerous oil wells, flow stations, and multinational oil companies. This has earned Delta State the nickname "The Treasure Base of the Nation."`,
        funfact3:"⭐ Delta State is home to the Araya Bible Site, located in the Isoko region. This site is historically significant as it is believed to be where the first Bible in the Niger Delta was preached. It is a popular destination for religious tourism and cultural exploration.",
        culturetitle:"Delta State is a melting pot of ethnic groups, including the Urhobo, Isoko, Ijaw, Itsekiri, and Anioma (Igbo). Each group has its unique language, traditions, and festivals, creating a colorful blend of cultures that coexist harmoniously.",
        culture1:"Urhobo Okere Juju Festival: A cultural celebration featuring music, dance, and rituals that honor the Urhobo people's heritage.",
        culture2:"Isoko Owahwa Festival: A harvest festival celebrated by the Isoko people, showcasing traditional dances, music, and agricultural displays." ,
        culture3:"Delta State's culinary culture is a reflection of its ethnic diversity, with each group contributing unique dishes and flavors. Some popular foods include:Banga Soup: A palm nut-based soup, often served with starch or pounded yam, and a staple of Urhobo and Isoko cuisine.,Starch and Owo Soup: A traditional Urhobo dish made with starch (similar to fufu) and a rich, flavorful soup."
      },
      {
        name:"Edo",
        image: img27,
        coordinates: { lat: 6.5244, lng: 5.0353 },
        description:"Edo State, located in the southern region of Nigeria, is a culturally rich and historically significant state known for its ancient traditions, vibrant festivals, and contributions to Nigeria's art and history,Capital: Benin City",
        population:" Edo State is one of the more populous states in Nigeria, with a significant portion of its population concentrated in urban areas like Benin City,As of the most recent estimates, the population of Edo State, Nigeria, is approximately 5 million people",
        safetydetails:"Visiting Edo State, Nigeria, can be a rewarding experience due to its rich cultural heritage, historical sites, and natural beauty. However, like any travel destination, it’s important to take certain safety precautions to ensure a smooth and enjoyable trip. Here are some safety tips and details to keep in mind when visiting Edo State: 1)Choose reputable hotels or guesthouses with good security measures, such as gated compounds, security personnel, and CCTV cameras.Benin City, the state capital, has a range of safe lodging options.,2)Opt for registered taxi services or ride-hailing apps like Uber or Bolt. Avoid unmarked taxis or public buses (danfos), especially at night.",
        funfact1:"⭐ Edo State is the heart of the ancient Benin Kingdom, one of the oldest and most revered monarchies in Africa, dating back to the 11th century. The kingdom is famous for its Benin Bronzes, intricate brass and bronze sculptures and plaques that depict the history and culture of the Benin people. These artifacts are considered some of the finest examples of African art and are displayed in museums worldwide.",
        funfact2:"⭐ The Benin Moat, also known as the Walls of Benin, is one of the largest man-made earthworks in the world. Built as a defensive fortification around the ancient Benin City, it stretches over 16,000 kilometers and is even longer than the Great Wall of China. In 1995, it was designated a UNESCO World Heritage Site.",
        funfact3:"⭐ Edo State is home to the Igue Festival, one of the most colorful and significant cultural festivals in Nigeria. Celebrated annually by the Benin people, the festival honors the Oba of Benin (the traditional ruler) and includes rituals, dances, and ceremonies to usher in blessings for the kingdom. It is a vibrant display of Edo culture and tradition.",
        culturetitle:"Edo State has a rich cultural heritage, which is deeply rooted in the history of the Benin Kingdom, its world-renowned artistic achievements (like the Benin Bronzes), and its vibrant traditions, festivals, and customs. Edo State is a cultural treasure trove that showcases Nigeria's historical depth and artistic excellence.",
        culture1:"The Benin Bronzes are world-famous brass and bronze sculptures, plaques, and artifacts created by the artisans of the Benin Kingdom. These intricate artworks depict the history, culture, and spirituality of the Benin people and are considered some of the finest examples of African art.Many of these artifacts were looted during the British Punitive Expedition of 1897 and are now displayed in museums worldwide, sparking ongoing calls for their repatriation.",
        culture2:"The Oba's Palace, also known as the Royal Palace of the Oba of Benin, is a historic and cultural landmark in Benin City. It serves as the residence of the Oba, the traditional ruler of the Benin Kingdom, and is a symbol of the kingdom's enduring legacy.The palace is adorned with traditional artifacts, sculptures, and historical relics, making it a must-visit for anyone interested in Benin's history and culture.",
        culture3:"The Igue Festival is one of the most important cultural festivals in Benin City. It is an annual celebration by the Benin people to honor the Oba of Benin (the traditional ruler) and seek blessings for the kingdom. The festival features traditional dances, rituals, and ceremonies, showcasing the rich cultural heritage of the Benin Kingdom."
      },
      {
        name:"Ondo",
        image: img28,
        coordinates: { lat: 7.2508, lng: 5.2103 },
        description:`Ondo State, located in the southwestern region of Nigeria, is a vibrant hub of cultural heritage, natural beauty, and agricultural wealth. Known as "The Sunshine State," Ondo State is home to a diverse mix of ethnic groups, primarily the Yoruba people, with subgroups such as the Akoko, Ikale, Ilaje, and Ondo`,
        population:". Ondo State is one of the more populous states in Nigeria, with a significant portion of its population concentrated in urban areas like Akure As of the most recent estimates, the population of Ondo State, Nigeria, is approximately 4.7 million people.",
        safetydetails:"Visiting Ondo State, Nigeria, can be a delightful experience due to its rich cultural heritage, natural attractions, and warm hospitality. However, like any travel destination, it’s important to take certain safety precautions to ensure a smooth and enjoyable trip  Here are some safety tips and details to keep in mind when visiting Ondo State:1)Choose reputable hotels or guesthouses with good security measures, such as gated compounds, security personnel, and CCTV cameras Akure, the state capital, has a range of safe lodging options. 2)Limit movement after dark, as crime rates tend to increase at night. If you must travel at night, use trusted drivers and stay in well-lit, populated areas.",
        funfact1:"⭐ Ondo state is Home to the Idanre Hills: A UNESCO World Heritage Site,The Idanre Hills are one of the most iconic landmarks in Ondo State. This stunning natural attraction features 660 steps leading to the top, where you can find ancient settlements, historical artifacts, and breathtaking views. The hills are a UNESCO World Heritage Site and a popular destination for hiking and sightseeing.",
        funfact2:`⭐ Ondo State is one of the largest producers of cocoa in Nigeria, earning it the nickname "The Cocoa State." The state's fertile soil and favorable climate make it an ideal location for cocoa farming, which plays a significant role in its economy.`,
        funfact3:"⭐ Ondo State is home to the ancient Owo Kingdom, renowned for its rich cultural heritage and artistic achievements. The Owo Museum of Antiquities houses a collection of artifacts, including traditional art, sculptures, and historical relics from the kingdom. Owo is also known for its unique Yoruba dialect and vibrant festivals.",
        culturetitle:"Ondo State is a melting pot of traditions, languages, and customs. The state's cultural heritage is deeply rooted in the Yoruba culture, with each subgroup contributing unique elements to the state's identity",
        culture1:"The Ogun Festival, the Ogun festival is Celebrated to honor the god of iron, Ogun, this festival features traditional dances, music, and rituals. It is a time for the community to come together and seek blessings for prosperity and protection.",
        culture2:"Ondo State has a rich tradition of arts and crafts, particularly in the Owo Kingdom, which is renowned for its artistic achievements. Key aspects include wood carving ,Bead work and Pottery",
        culture3:"Music and dance are integral to Ondo State's culture, with each ethnic group having its unique styles and rhythms. Popular traditional music and dance forms include 1) Bata and Dundun Drums: These traditional drums are used in performances and ceremonies, providing rhythmic accompaniment to dances and songs.2)Egungun Dance: A masquerade dance performed during festivals and cultural events, representing ancestral spirits and their connection to the living."
      },
      {
        name:"Oyo",
        image: img30,
        coordinates: { lat: 7.7820, lng: 3.9202 },
        description:`Oyo State, located in the southwestern region of Nigeria, is a cultural powerhouse known for its deep-rooted history, traditions, and contributions to the Yoruba civilization. Often referred to as the "Pace Setter State," Oyo State is home to the ancient Oyo Empire, one of the most influential kingdoms in West Africa`,
        population:"Oyo State is one of the most populous states in Nigeria, with a significant portion of its population concentrated in urban areas like Ibadan, the state capital and the largest city in West Africa by landmass,As of the most recent estimates, the population of Oyo State, Nigeria, is approximately 7.8 million people.",
        safetydetails:"Visiting Oyo State, Nigeria, can be a rewarding experience due to its rich cultural heritage, historical sites, and natural attractions. However, like any travel destination, it’s important to take certain safety precautions to ensure a smooth and enjoyable trip. Here are some safety tips and details to keep in mind when visiting Oyo State: Stay in Secure Accommodations:Choose reputable hotels or guesthouses with good security measures, such as gated compounds, security personnel, and CCTV cameras.Ibadan, the state capital, has a range of safe lodging options,Opt for registered taxi services or ride-hailing apps like Uber or Bolt. Avoid unmarked taxis or public buses (danfos), especially at night.If driving, be cautious of poorly maintained roads and erratic drivers.",
        funfact1:"⭐ Oyo State was the heart of the Oyo Empire, one of the most powerful and influential kingdoms in West Africa from the 15th to the 19th century. The empire was known for its strong military, sophisticated governance, and extensive trade networks. The ruins of the ancient capital, Oyo-Ile (Old Oyo), can still be visited today.",
        funfact2:"⭐ Ibadan, the capital of Oyo State, is the largest city in West Africa by landmass and the third-most populous city in Nigeria. It is known for its rich history, cultural landmarks, and educational institutions, including the University of Ibadan, the first university in Nigeria.",
        funfact3:"⭐ Oyo State is home to the Ado-Awaye Suspended Lake, one of only two suspended lakes in the world. Located on a hill in Ado-Awaye, this natural wonder is a popular destination for hiking and sightseeing, offering breathtaking views and a unique geological phenomenon.",
        culturetitle:"Oyo is a cultural powerhouse known for its deep-rooted history, traditions, and contributions to the Yoruba civilization",
        culture1:"Oke’badan Festival: Celebrated in Ibadan to honor the city's founding and its ancestral spirits. The festival features traditional dances, music, and rituals.",
        culture2:"Pottery and Beadwork: The state is known for its traditional pottery and bead-making, with artisans creating functional and decorative items.",
        culture3:"Music and dance are integral to Oyo State's culture, with each ethnic group having its unique styles and rhythms. Popular traditional music and dance forms include:Bata and Dundun Drums: These traditional drums are used in performances and ceremonies, providing rhythmic accompaniment to dances and songs.Sango Dance: A traditional dance performed to honor Sango, the Yoruba god of thunder and lightning. The dance features energetic movements and drumming.Egungun Dance: A masquerade dance performed during festivals and cultural events, representing ancestral spirits and their connection to the living."
      },
      {
        name:"Imo",
        image: img31,
        coordinates: { lat: 5.5720, lng: 7.0588 },
        description:"Imo State is one of the 36 states in southeastern Nigeria, known for its rich Igbo culture, economic activities, and vibrant history. It was created on February 3, 1976, from the former East Central State and is named after the Imo River, which runs through the region.",
        population:"As of 2022, Imo State in southeastern Nigeria has an estimated population of over 5.4 million people.",
        safetydetails:"Imo State has experienced security challenges in recent years, including political unrest, occasional kidnappings, and clashes between security forces and armed groups,The capital, Owerri, is relatively safe during the day but may have isolated security concerns at night,Rural areas and isolated roads may be riskier due to banditry or local conflicts .Always take safety measures when out",
        funfact1:`⭐ Home to Nigeria’s Second Largest Freshwater Lake Oguta Lake, located in Imo State, is Nigeria’s second-largest freshwater lake (after Lake Chad). It is famous for its "Meeting Point"—where the blue and muddy waters of the lake meet but do not mix!`,
        funfact2:`⭐ The capital, Owerri, is often called "Nigeria’s Entertainment Hub" due to its numerous hotels, nightclubs, and cultural festivals. It is also known for its lively music and comedy scene.`,
        funfact3:"⭐ Imo State is famous for Mbari Houses, traditional Igbo art galleries filled with beautiful sculptures and paintings that depict Igbo gods, folklore, and history. These structures are built as a form of worship and celebration of life.",
        culturetitle:"The cultural title of Imo State, Nigeria, is often associated with its rich Igbo heritage",
        culture1:" New Yam Festival (Iri Ji Ohuru) Celebrated annually across Igbo communities in Imo State, the New Yam Festival marks the beginning of the harvest season.It involves cultural dances, masquerade displays, and feasting on roasted yams as a sign of gratitude to the gods for a bountiful harvest.",
        culture2:"In Imo State, traditional marriage(Igba Nkwu) ceremonies are a big deal.The groom presents gifts, including palm wine, kola nuts, and money, to the bride's family.A highlight of the ceremony is when the bride finds her groom in the crowd and gives him a cup of palm wine to signify acceptance.",
        culture3:" Masquerade Festival (Mmanwu Festival)This festival features colorful masquerades representing ancestral spirits and deities.The masquerades dance, entertain, and sometimes perform spiritual roles.The Ekpe and Izaga masquerades are among the most famous in Imo State."
      },
      {
        name:"Kaduna",
        image: img32,
        coordinates: { lat: 10.5105, lng: 7.4165 },
        description:`Kaduna State, located in the northwestern region of Nigeria, is a culturally diverse and historically significant state known for its rich traditions, vibrant festivals, and strategic importance. Often referred to as "The Centre of Learning," Kaduna State is home to a mix of ethnic groups, including the Hausa, Gbagyi, Adara, Atyap, and Kajuru people`,
        population:" Kaduna State is one of the most populous states in Nigeria, with a significant portion of its population concentrated in urban areas like Kaduna City,As of the most recent estimates, the population of Kaduna State, Nigeria, is approximately 8.3 million people",
        safetydetails:"Kaduna State, located in northwestern Nigeria, is an important commercial and cultural hub. However, it has experienced security challenges, including communal conflicts, kidnappings, and occasional terrorist activity.Kaduna has areas that are relatively safe, especially in urban centers like Kaduna city, but rural and outskirts areas can be riskier Military and police presence is strong in key locations, but travelers should remain cautious. Emergency Contacts📞 Nigeria Police Force (Kaduna Command): 112 or 08075391105📞 Kaduna State Emergency Line: 07039675856 📞 Your Country’s Embassy: Always keep your embassy’s contact details handy.",
        funfact1:`⭐ The name "Kaduna" is derived from the Hausa word "Kadduna," meaning "crocodiles" because the Kaduna River was once home to many crocodiles.`,
        funfact2:"⭐ The Nigerian Defence Academy (NDA) in Kaduna is Nigeria’s premier military training institution, where officers of the Nigerian Army, Navy, and Air Force receive their training.",
        funfact3:"⭐ Kaduna Junction Railway Station, built during British colonial rule, was a key hub in Nigeria’s railway system, linking the north and south for trade and travel.",
        culturetitle:`Kaduna State is often referred to as "The Centre of Learning"  because of its historical significance in education, military training, and intellectual development in northern Nigeria.`,
        culture1:"The Hausa and Fulani people form the majority in Kaduna, especially in the northern part.They celebrate Islamic festivals like Eid-el-Fitr and Eid-el-Kabir with grand durbars, horse riding, and traditional dances.The Hausa are known for their beautiful embroidery (Babban Riga), turbans, and modest dressing.",
        culture2:`The Gbagyi (Gwari) people, found in southern Kaduna, are famous for their unique tradition of carrying heavy loads on their heads without using their hands.They practice traditional festivals like "Zhibaje," which celebrates their ancestry, music, and dances.Gbagyi women are known for their beautiful beadwork and traditional tattoos.`,
        culture3:`The Bajju people (also called Kaje) are known for their vibrant cultural music and dances, especially during weddings and harvest festivals.They celebrate "Afan Festival", an annual event showcasing their heritage.Traditional Bajju attire includes colorful woven fabrics, beads, and symbolic tribal marks`
      },
      {
        name:"Bayelsa",
        image: img33,
        coordinates: { lat: 4.9267, lng: 6.2676 },
        description:"Bayelsa State is located in the Niger Delta region of Nigeria, known for its rich culture, natural beauty, and oil wealth. It was created in 1996 from the larger Rivers State and is one of the smallest states in Nigeria by land area, but it is significant in terms of natural resources and ecological importance.",
        population:"Bayelsa State, located in Nigeria's Niger Delta region, has experienced significant population growth in recent years. As of 2022, the estimated population was approximately 2.53 million",
        safetydetails:"Bayelsa State, with its lush landscapes, rich culture, and oil wealth, is a fascinating place to visit. However, like many other parts of Nigeria, it has its own set of safety considerations due to security challenges,Bayelsa, like other parts of the Niger Delta, has faced security challenges, including militant activities, kidnappings, and banditry related to the region's oil industry,However, major urban centers such as Yenagoa, the state capital, are relatively safe for travelers during the day, though visitors should still exercise caution,Some rural and remote areas of the state can be riskier due to the presence of militants or local conflicts.Bayelsa State Emergency Number: 0705 246 9688 📞 Nigeria Police (Bayelsa Command): 112 or 0803 256 5501",
        funfact1:"⭐ Bayelsa is part of the Niger Delta, home to Nigeria's vast oil reserves. It is one of the largest oil-producing regions in Africa and contributes significantly to the nation's economy.",
        funfact2:"⭐ Bayelsa boasts some of Nigeria's most beautiful wetlands, with rich biodiversity. It is a bird-watching paradise, home to numerous species of birds, especially along the Niger Delta mangroves and coastal areas.",
        funfact3:"⭐ Goodluck Jonathan, the former president of Nigeria, hails from Otuoke, a town in Bayelsa. His rise to the presidency made Bayelsa a focal point of national attention.",
        culturetitle:"Bayelsa State is often referred to as the “Glory of all Lands” or “The Land of Peace” due to its rich cultural heritage, natural beauty, and strategic importance within the Niger Delta region. It is a place of great historical significance and natural resources, particularly in the oil sector",
        culture1:"The Ijaw people are the largest ethnic group in Bayelsa and have a rich cultural heritage.Known for their fishing and boat-building traditions, the Ijaw people have a deep connection to the waterways of the Niger Delta.Their cultural expressions include masquerades, traditional dances, and the Ijaw festival, which celebrates their history, spirituality, and way of life.",
        culture2:"The Ogbia people, another significant ethnic group in Bayelsa, have a strong cultural presence in the southern part of the state.Their festivals often involve traditional songs, dances, and ceremonies to honor ancestral spirits and celebrate the harvest season.Ogbia are also known for their unique art, such as traditional crafts and carvings.",
        culture3:"The Nembe people, part of the larger Ijaw ethnic group, have distinct cultural practices.Their traditional festivals include drumming and music, with flutes, drums, and other instruments used in both religious and cultural events.The Nembe people are also well-known for their beautiful traditional clothing, including beaded necklaces and hand-woven textiles."
      },
      {
        name:"Anambra",
        image: img34,
        coordinates: { lat: 6.2209, lng: 7.1056 },
        description:"Anambra State is located in the southeastern region of Nigeria and is known for its rich cultural heritage, economic importance, and historical significance. It was created in 1991 from the old Anambra Region and has since grown to become a key state in the southeastern region.The predominant language spoken in Anambra is Igbo, though English is also widely spoken, especially in urban areas.",
        population:" Anambra has experienced significant population growth in recent years. As of 2025, the estimated population is approximately 6,358,311",
        safetydetails:"Anambra is a dynamic state known for its rich cultural heritage, vibrant markets, and historical significance. However, as with most places, there are safety considerations when visiting , Anambra is generally safe for travelers, especially in urban areas like Awka, Onitsha, and Nnewi. However, like any large state, petty crime, such as pickpocketing and snatching of phones or bags, can occur in busy markets and public areas ,Traffic congestion is common in Onitsha due to its bustling commercial nature, so expect delays, especially during market days or rush hours ,If traveling between rural and urban areas, it's advisable to travel during daylight hours to avoid any potential security risks.Be cautious when traveling on motorcycles, as accidents are common in both rural and urban areas.",
        funfact1:"⭐ Onitsha, one of the largest cities in Anambra, is known for having one of the largest markets in Africa. The Onitsha Main Market is a major hub for local and international trade, attracting buyers and sellers from all over the world. It's a place where you can find almost anything, from electronics to traditional crafts!",
        funfact2:`⭐ Anambra is the birthplace of Chinua Achebe, Nigeria’s legendary author and one of the greatest writers of the 20th century. His novel, "Things Fall Apart," has been translated into more than 50 languages and remains a cornerstone of African literature. The state has produced many other notable literary figures as well!`,
        funfact3:"⭐ Anambra is famous for its celebration of the New Yam Festival, one of the most important cultural events in Igbo land. The festival marks the beginning of the harvest season and is filled with traditional dances, rituals, and a grand feast where yams, considered the king of crops, are served in abundance. It’s a colorful and exciting celebration of the Igbo people's agrarian roots!",
        culturetitle:"Anambra is often referred to as the “Light of the Nation” due to its historical importance, educational achievements, and cultural influence within Nigeria. This title highlights the state’s contributions to the nation’s progress, especially in education, commerce, and culture.",
        culture1:"The New Yam Festival is one of the most significant cultural celebrations in Anambra and the entire Igbo-speaking region. It marks the beginning of the harvest season, where yam, considered the king of crops, is ceremoniously harvested and presented.The festival is filled with traditional dances, rituals, and offerings to ancestors. Elders bless the yam before it is eaten, symbolizing a healthy harvest and respect for the earth.",
        culture2:"Mmanwu refers to traditional masquerades, which are an important part of Anambra’s culture, especially among the Igbo people.These masquerades are seen as spiritual beings representing ancestral spirits and are an integral part of festivals, such as the New Yam Festival and other ceremonies.Masquerade performances are marked by colorful costumes, drumming, and dancing, with each mask symbolizing a particular deity or spirit.",
        culture3:"The Igba Nkwu is the traditional wedding ceremony in Anambra and other Igbo states. It is a formal and colorful event where the groom presents the bride to the bride's family and pays the dowry.The ceremony is celebrated with dances, songs, and feasting, with both families coming together to honor the union. It is a significant cultural practice that celebrates the importance of marriage in Igbo culture."
      },
      {
        name:"Ogun",
        image: img35,
        coordinates: { lat: 6.9075, lng: 3.5812 },
        description:"Ogun State is located in the southwestern region of Nigeria and is known for its rich history, culture, and significant economic role. It is one of the pioneer states created during the state creation exercise of 1976. Ogun State is often referred to as the Gateway State because of its strategic location, linking Lagos (Nigeria's commercial capital) to the rest of the country.",
        population:`As of 2023, Ogun State's population is estimated to be approximately 8.2 million people`,
        safetydetails:" Ogun State, known as the Gateway State, is generally safe for travelers and residents, especially in urban areas. However, there are a few safety tips to keep in mind to ensure a smooth and enjoyable visit.Ogun State is relatively peaceful compared to other parts of Nigeria, but like any major urban area, petty crimes like pickpocketing or snatching of personal belongings can occur in crowded areas or markets, especially in Abeokuta or Ijebu-Ode.Police Emergency Number: Dial 112 for emergency police services in Ogun State.",
        funfact1:"⭐ Olumo Rock, located in Abeokuta, Ogun State, is a famous tourist attraction and a historical site. It was used by the Egba people as a place of refuge during wars in the 19th century. Visitors can climb the rock and enjoy breathtaking views of Abeokuta and its surroundings. It’s not just a rock, but a symbol of Ogun State’s rich history and culture.",
        funfact2:"⭐ Ogun State is the birthplace of Wole Soyinka, Nigeria’s first Nobel Laureate in Literature! He won the Nobel Prize in 1986 for his work in literature, and his legacy continues to inspire people worldwide. The state takes great pride in his achievements, and Abeokuta (his hometown) even celebrates his contributions to culture with various cultural programs.",
        funfact3:"⭐ Ogun State is an industrial powerhouse in Nigeria. It has become a key destination for both local and foreign investments, particularly in manufacturing. The state is home to major factories and industries, producing everything from cement to textiles and automobiles. It is often called the industrial gateway to Lagos and has become a crucial player in Nigeria’s economic growth.",
        culturetitle:"The “Gateway State”. This title reflects Ogun’s strategic geographical location, as it serves as a gateway linking Lagos to other parts of Nigeria and even to the Republic of Benin. It symbolizes the state’s historical significance and economic importance as a major route for trade and commerce.",
        culture1:"The Eyo Festival is celebrated in Abeokuta by the Egba people and is one of the most significant cultural events in Ogun State. It is a prelude to the Lagos Durbar Festival and celebrates the traditional heritage of the Egba Kingdom.The festival features colorful masquerades, royal processions, and traditional drumming. The Eyo masqueraders are dressed in elaborate costumes, with beautiful feathers, beads, and traditional robes.This festival symbolizes unity and respect for the ancestors and is a spectacle for both locals and visitors alike.",
        culture2:"The New Yam Festival is widely celebrated in Ogun State and marks the beginning of the harvest season. It is celebrated by both the Yoruba and Egba people, and it is a time to honor the gods and give thanks for a good harvest.The festival includes rituals, dances, traditional music, and the blessing of yams before they are eaten. The yams are the main dish of the festival, and this is followed by a grand feast.",
        culture3:"A popular dish in Ogun State, especially among the Yoruba people, Amala is made from yam flour and is typically served with Gbegiri soup (a bean-based soup). It’s often accompanied by Ewedu soup (made from jute leaves) and served with stew or goat meat."
      },
      {
        name: "Benue",
        image: img36,
        coordinates: { lat: 7.1907, lng: 8.1296 },
        description: "Benue State, located in the North-Central region of Nigeria, is known as the 'Food Basket of the Nation' due to its vast agricultural resources and fertile land. The state is famous for its rich cultural heritage, diverse ethnic groups, and vibrant festivals. Capital: Makurdi",
        population: "Benue State has a significant population, with many people engaged in farming and trade. As of the most recent estimates, the population of Benue State, Nigeria, is approximately 5 million people, with Makurdi being the most densely populated city.",
        safetydetails: "Visiting Benue State can be an enriching experience, especially for those interested in agriculture and culture. However, it is essential to take necessary safety precautions to ensure a smooth trip. Here are some safety tips and details to keep in mind: 1) Stay in reputable hotels with good security, preferably in Makurdi, as it offers the best lodging options., 2) Use registered taxi services or ride-hailing apps where available. Avoid traveling alone at night and stay updated on local security conditions.",
        funfact1: "⭐ Benue State is home to the Tiv and Idoma ethnic groups, both known for their rich cultural traditions, including the famous Swange and Ogirinya dances, which are performed during festivals and celebrations.",
        funfact2: "⭐ Benue is the leading producer of yams in Nigeria and hosts the annual Yam Festival, a grand celebration marking the beginning of the new yam harvest season with traditional rites, dances, and feasting.",
        funfact3: "⭐ The River Benue, one of the longest rivers in West Africa, flows through the state, providing a natural resource for fishing, irrigation, and tourism. The scenic riverbanks are a popular attraction.",
        culturetitle: "Benue State is a cultural melting pot with deep-rooted traditions, colorful festivals, and a strong agricultural heritage. The state’s diverse ethnic groups contribute to its unique cultural landscape, making it an important part of Nigeria’s cultural identity.",
        culture1: "The Swange Dance is a traditional Tiv dance performed during ceremonies, festivals, and social gatherings. It is characterized by rhythmic movements, vibrant attire, and the use of traditional musical instruments such as drums and flutes.",
        culture2: "The Och’Idoma’s Palace in Otukpo serves as the royal residence of the Idoma people’s traditional ruler. The palace is a significant cultural landmark and a center for traditional governance and celebrations.",
        culture3: "The New Yam Festival is one of the most important annual celebrations in Benue State. It is a time for thanksgiving, marked by cultural displays, feasting, and performances to honor the land’s agricultural abundance and traditions."
      }
  ]);

  return (
    <NigeriaContext.Provider value={{ states }}>
      {children}
    </NigeriaContext.Provider>
  );
};
