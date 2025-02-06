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
      description: "Abuja, Nigeria's capital, officially became the country’s seat of power in 1991, replacing Lagos. Designed as a planned city, Abuja was chosen for its central location and neutrality among ethnic groups. It is home to Nigeria’s government institutions, foreign embassies, and many multinational corporations. The city is known for its well-structured roads, modern architecture, and iconic landmarks like Aso Rock and the National Mosque.",
      population: "Abuja has an estimated population of over 3.6 million people and continues to grow due to migration. The city attracts professionals, expatriates, and government officials, making it one of Nigeria’s most diverse regions. With a mix of indigenous Gwari people and settlers from all parts of Nigeria, Abuja serves as a melting pot of cultures.",
      safetydetails: "Abuja is one of Nigeria’s safest cities due to strong security presence, especially in government areas. However, petty crimes such as phone snatching and scams occur in busy locations. Travelers should avoid isolated areas at night and stay cautious around markets and public parks.",
      funfact1: "⭐ Abuja is one of the fastest-growing cities in Africa.",
      funfact2: "⭐ The city was designed by an international team of architects in the 1980s.",
      funfact3: "⭐ Aso Rock, a massive rock formation, is one of the city's most famous landmarks.",
      culturetitle: "Abuja's culture is a blend of Nigerian traditions, influenced by its diverse population.",
      culture1: "FCT Carnival – An annual festival showcasing Nigeria’s rich cultural diversity.",
      culture2: "Gwari Pottery – Traditional pottery-making is a historic craft of Abuja’s indigenous people.",
      culture3: "International Cuisine – Due to its diverse population, Abuja has a variety of local and international restaurants."
    },
    {
      name: "Kano",
      description: "Kano, founded over a thousand years ago, is one of Nigeria’s oldest cities and a major hub for trade and Islamic culture. As the commercial center of northern Nigeria, Kano has a rich history of trans-Saharan trade, textile production, and traditional crafts. The city is famous for its ancient walls, historical markets, and strong Islamic influence.",
      population: "With a population of over 15 million, Kano is the second-largest city in Nigeria. The majority of its people are Hausa-Fulani, and the city remains a stronghold of northern traditions, Islam, and trade activities. Kano’s large population drives its vibrant markets, industries, and educational institutions.",
      safetydetails: "Kano is generally safe, but visitors should be mindful of cultural sensitivities. It is advisable to dress modestly, avoid discussing politics or religion openly, and stay aware of local security updates. Markets can be crowded, making pickpocketing a concern.",
      funfact1: "⭐ Kano is home to Kurmi Market, one of the oldest markets in West Africa.",
      funfact2: "⭐ Kano’s ancient walls date back over 1,000 years.",
      funfact3: "⭐ The city has one of Nigeria’s largest textile and leather industries.",
      culturetitle: "Kano’s culture is deeply rooted in Islamic traditions and Hausa heritage.",
      culture1: "Durbar Festival – A grand celebration featuring horse parades and traditional displays.",
      culture2: "Hausa Cuisine – Specialties like suya, kilishi, and tuwo shinkafa are widely enjoyed.",
      culture3: "Traditional Dyeing Pits – Kano’s Kofar Mata dye pits are among the oldest in Africa."
    },
    {
      name: "Rivers",
      description: "Rivers State, created in 1967, is located in the Niger Delta region and is known for its oil production and rich cultural heritage. The capital, Port Harcourt, serves as Nigeria’s oil hub, attracting both local and international companies. The state is also known for its vibrant riverine communities and beautiful landscapes.",
      population: "Rivers State has a population of over 7 million people, comprising a mix of ethnic groups, including the Ikwerre, Ogoni, and Ijaw. The oil industry has led to rapid urbanization, with many people migrating to Port Harcourt for job opportunities.",
      safetydetails: "While Rivers State, especially Port Harcourt, is relatively safe, some areas experience challenges like traffic congestion, protests, and occasional security concerns. Visitors should stay updated on local news, avoid isolated areas, and use reliable transportation services.",
      funfact1: "⭐ Rivers State is home to Bonny Island, a key location for Nigeria’s oil and gas industry.",
      funfact2: "⭐ The state has one of the highest GDPs in Nigeria due to oil revenue.",
      funfact3: "⭐ It hosts the famous Garden City Literary Festival.",
      culturetitle: "Rivers State has a rich cultural mix of traditions, music, and festivals.",
      culture1: "Owu Festival – A major event among the Ijaw people, featuring boat regattas and cultural displays.",
      culture2: "Seafood Cuisine – Rivers is famous for its fresh seafood, including periwinkles and catfish pepper soup.",
      culture3: "Nollywood Influence – Port Harcourt has contributed to Nigeria’s film and entertainment industry."
    },
    {
        name: "Adamawa",
        description: "Adamawa State, located in northeastern Nigeria, was created in 1991 from the former Gongola State. It shares a border with Cameroon and is known for its rich cultural diversity, scenic landscapes, and agricultural activities. The state is home to several ethnic groups, including the Fulani, Hausa, and Bachama.",
        population: "Adamawa has an estimated population of around 4.2 million people. The majority of the population engages in farming and cattle rearing, with Yola, the state capital, serving as a key administrative and economic center.",
        safetydetails: "Adamawa has faced security challenges in recent years, particularly in rural areas. However, Yola and other major towns remain relatively safe. Travelers should: Avoid remote areas prone to security risks, Stay in secure accommodations, Follow local security advisories and travel warnings.",
        funfact1: "⭐ Adamawa has beautiful highlands and waterfalls, making it a great destination for nature lovers.",
        funfact2: "⭐ The state is home to Modibbo Adama University, a leading educational institution.",
        funfact3: "Adamawa’s cattle trade is one of the biggest in Nigeria, attracting buyers from across the country.",
        culturetitle: "Adamawa’s culture is a mix of Fulani, Hausa, and other indigenous traditions.",
        culture1: "Fulani Festivals – Celebrations such as the Durbar festival showcase horse riding and traditional displays.",
        culture2: "Traditional Music – The use of drums, flutes, and folk singing is common in local celebrations.",
        culture3: "Cuisine – Popular dishes include Kilishi (dried meat) and Fura da Nono (millet and milk drink)."
      },
      {
        name: "Akwa-Ibom",
        description: "Akwa Ibom, located in southern Nigeria, was created in 1987 from Cross River State. It is known for its rich oil and gas resources, beautiful beaches, and cultural heritage. The state capital, Uyo, is one of the fastest-growing cities in Nigeria.",
        population: "Akwa Ibom has a population of approximately 5.5 million people. The Ibibio, Annang, and Oron ethnic groups dominate the state. Urbanization and industrialization are on the rise, contributing to rapid economic growth.",
        safetydetails: "Akwa Ibom is generally safe, with Uyo being one of the most peaceful state capitals. However, travelers should: Be cautious in rural areas, Use only trusted transport services, Avoid walking alone at night.",
        funfact1: "⭐ Home to Ibom Air, Nigeria’s first state-owned airline.",
        funfact2: "⭐ Features the longest bridge in southern Nigeria, the Ikot Abasi Bridge.",
        funfact3: "Akwa Ibom has some of the best seafood dishes in Nigeria.",
        culturetitle: "Akwa Ibom’s culture is deeply tied to its Ibibio roots.",
        culture1: "Ekpe Masquerade – A traditional performance seen during festivals.",
        culture2: "Traditional Cuisine – Afang soup and Editan soup are popular dishes.",
        culture3: "Music & Dance – Traditional dances such as Ekombi are widely performed."
      },
      {
        name: "Bauchi",
        description: "Bauchi State, created in 1976 from the former North-Eastern State, is located in northeastern Nigeria. It is known for its rich cultural heritage, historical sites, and diverse ethnic groups. The state is home to the Yankari National Park, a popular tourist attraction featuring wildlife and natural warm springs.",
        population: "Bauchi State has an estimated population of around 6.5 million people. The majority of the inhabitants are Hausa, Fulani, and other minority ethnic groups. Agriculture and trade are the main economic activities, with Bauchi city serving as the commercial and administrative center.",
        safetydetails: "Bauchi is generally safe, especially within major towns and cities. However, rural areas may experience security challenges. Travelers should: Avoid isolated areas, Use verified transportation services, Stay informed about local security updates.",
        funfact1: "⭐ Yankari National Park – Home to elephants, lions, and the famous Wikki Warm Springs.",
        funfact2: "⭐ Bauchi is named after a hunter, a tribute to the state's early hunting tradition.",
        funfact3: "Bauchi State has a rich history of Islamic scholarship and traditional leadership.",
        culturetitle: "Bauchi’s culture is influenced by the Hausa and Fulani traditions.",
        culture1: "Durbar Festival – A colorful horse-riding event during celebrations.",
        culture2: "Traditional Weaving – The state is known for handwoven fabrics and crafts.",
        culture3: "Cuisine – Bauchi is famous for dishes like Masa (rice cake) and Tuwo Shinkafa."
      },
      {
        name: "Borno",
        description: "Borno State, created in 1976, is located in northeastern Nigeria. It is the largest state by landmass and historically significant as the center of the Kanem-Bornu Empire. The state capital, Maiduguri, is a major commercial and cultural hub in the region.",
        population: "Borno has an estimated population of around 5.8 million people. The Kanuri people form the dominant ethnic group, with Shuwa Arabs, Hausa, and other minorities also present. The economy is driven by agriculture, livestock rearing, and trade.",
        safetydetails: "Borno has experienced security challenges in recent years, especially in rural areas. However, Maiduguri is relatively stable. Travelers should: Follow official travel advisories, Avoid rural and conflict-prone areas, Use trusted local guides if necessary.",
        funfact1: "⭐ Borno was the heart of the Kanem-Bornu Empire, one of Africa’s oldest kingdoms.",
        funfact2: "⭐ The Shehu of Borno is one of Nigeria’s most respected traditional rulers.",
        funfact3: "Maiduguri is famous for its delicious Kilishi (spiced dried meat).",
        culturetitle: "Borno has a deep-rooted Kanuri and Islamic cultural influence.",
        culture1: "Shehu’s Palace – A historic site symbolizing the Kanuri dynasty.",
        culture2: "Traditional Music – Unique drums and instruments used in celebrations.",
        culture3: "Local Crafts – Intricate embroidery and leatherworks are popular."
      },
      {
        name: "Cross River",
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
      }
  ]);

  return (
    <NigeriaContext.Provider value={{ states }}>
      {children}
    </NigeriaContext.Provider>
  );
};
