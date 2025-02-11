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
      image: img22,
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
        name: "Cross River",
        image: img7,
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
      }
  ]);

  return (
    <NigeriaContext.Provider value={{ states }}>
      {children}
    </NigeriaContext.Provider>
  );
};
