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
    {
      name:"Lagos",
      description:"Lagos is the largest city in Nigeria and one of the fastest-growing cities in the world. Located along the Atlantic Ocean in the southwestern part of the country, it serves as Nigeria's economic and financial hub. Although Abuja is the official capital of Nigeria, Lagos remains the country's most prominent commercial and cultural cente",
      population:"Lagos is one of the most populous cities in Africa, with an estimated population of over 20 million people. It is a melting pot of cultures, ethnicities, and languages, attracting people from across Nigeria and beyond",
      safetydetails:"Visiting Lagos, Nigeria, can be an exciting and rewarding experience, but like any major city, it requires awareness and precautions to ensure safety. Here are some key safety tips and details to consider when visiting Lagos;Dress modestly and avoid wearing flashy jewelry or displaying expensive gadgets like cameras, phones, or laptops in public. This helps you avoid drawing unnecessary attention,Opt for registered taxi services or ride-hailing apps like Uber or Bolt. Avoid unmarked taxis or public buses (danfos), especially at night,and not to forget Lagos is notorious for heavy traffic. Plan your trips with extra time and avoid rush hours if possible.",
      funfact1:"Lagos is the heart of Nollywood, Nigeria's booming film industry, which produces thousands of movies annually. In fact, Nollywood is the second-largest film industry in the world by volume, surpassing Hollywood and only trailing behind India's Bollywood. Many of these films are shot on low budgets but have a massive following across Africa and the diaspora.",
      funfact2:`Lagos is often called the "Venice of Africa" because much of the city is built on a network of islands, lagoons, and waterways. The city's name, "Lagos," actually means "lakes" in Portuguese, reflecting its aquatic geography. Areas like Victoria Island, Ikoyi, and Lekki are surrounded by water, and ferries are a popular mode of transportation.`,
      funfact3:`Badagry in Lagos   is home to the "Point of No Return," a symbolic spot where enslaved Africans were forced onto ships bound for the Americas. Today, it serves as a powerful reminder of the dark history of the slave trade and a place for reflection and education.`,
      culturetitle:"Lagos is a microcosm of Nigeria's rich ethnic diversity. With over 250 ethnic groups in Nigeria, Lagos serves as a melting pot where Yoruba, Igbo, Hausa, and other cultures coexist. This diversity is reflected in the city's languages, food, festivals, and daily interactions.",
      culture1:"Lagos is the global hub of Afrobeats, a genre that has taken the world by storm. Artists like Rema, Burna Boy,Wizkid, and Davido have roots in Lagos, and the city's nightlife thrives with live performances, clubs, and concerts.Venues like The New Afrika Shrine (founded by Fela Kuti, the pioneer of Afrobeat) and festivals like Felabration celebrate the city's rich musical heritage. Afrobeats is not just music; it's a lifestyle that embodies the energy and creativity of Lagos.",
      culture2:"Lagos is famous for its street food culture, which is a blend of tradition and innovation. From suya (spiced grilled meat) to jollof rice, puff-puff (fried dough), and akara (bean cakes), the city's food scene is a reflection of its multicultural identity.",
      culture3:"Lagos is the heart of Nollywood, Nigeria's film industry, which is the second-largest in the world by volume. Nollywood movies are known for their dramatic storytelling, cultural themes, and relatable narratives."
    },
    {
      name:"Delta",
      description:`give me a description of delta in nigeria
      Delta State, located in the southern region of Nigeria, is one of the country's most prominent states due to its rich cultural heritage, natural resources, and economic significance.`,
      population:" Delta State is one of the more populous states in Nigeria,As of the most recent estimates, the population of Delta State, Nigeria, is approximately 5.6 million people",
      safetydetails:" Delta State, Nigeria is considered a safe state  However, like any travel destination, it’s important to take certain safety precautions to ensure a smooth and enjoyable trip Stay in Secure AccommodationsChoose reputable hotels or guesthouses with good security measures, such as gated compounds, security personnel, and CCTV cameras.Popular cities like Asaba and Warri have a range of safe lodging options,Use registered taxi services or ride-hailing apps like Uber or Bolt. Avoid unmarked taxis or public transportation (buses or motorcycles) unless absolutely necessary,Delta State is home to diverse ethnic groups, each with its own traditions and customs. Dress modestly, especially when visiting rural areas or religious sites.Always ask for permission before taking photos of people or cultural events." ,
      funfact1:`Delta State is nicknamed "The Big Heart" because of its generous and welcoming people. The state is home to a diverse mix of ethnic groups, including the Urhobo, Isoko, Ijaw, Itsekiri, and Anioma (Igbo), who coexist harmoniously and celebrate their cultural diversity through festivals, food, and traditions.`,
      funfact2:`Delta State is one of Nigeria's largest producers of crude oil and natural gas, making it a key player in the country's economy. The state is part of the Niger Delta region, often referred to as the "oil-rich Niger Delta," and hosts numerous oil wells, flow stations, and multinational oil companies. This has earned Delta State the nickname "The Treasure Base of the Nation."`,
      funfact3:"Delta State is home to the Araya Bible Site, located in the Isoko region. This site is historically significant as it is believed to be where the first Bible in the Niger Delta was preached. It is a popular destination for religious tourism and cultural exploration.",
      culturetitle:"Delta State is a melting pot of ethnic groups, including the Urhobo, Isoko, Ijaw, Itsekiri, and Anioma (Igbo). Each group has its unique language, traditions, and festivals, creating a colorful blend of cultures that coexist harmoniously.",
      culture1:"Urhobo Okere Juju Festival: A cultural celebration featuring music, dance, and rituals that honor the Urhobo people's heritage.",
      culture2:"Isoko Owahwa Festival: A harvest festival celebrated by the Isoko people, showcasing traditional dances, music, and agricultural displays." ,
      culture3:"Delta State's culinary culture is a reflection of its ethnic diversity, with each group contributing unique dishes and flavors. Some popular foods include:Banga Soup: A palm nut-based soup, often served with starch or pounded yam, and a staple of Urhobo and Isoko cuisine.,Starch and Owo Soup: A traditional Urhobo dish made with starch (similar to fufu) and a rich, flavorful soup."
    },
    {
      name:"Edo",
      description:"Edo State, located in the southern region of Nigeria, is a culturally rich and historically significant state known for its ancient traditions, vibrant festivals, and contributions to Nigeria's art and history,Capital: Benin City",
      population:" Edo State is one of the more populous states in Nigeria, with a significant portion of its population concentrated in urban areas like Benin City,As of the most recent estimates, the population of Edo State, Nigeria, is approximately 5 million people",
      safetydetails:"Visiting Edo State, Nigeria, can be a rewarding experience due to its rich cultural heritage, historical sites, and natural beauty. However, like any travel destination, it’s important to take certain safety precautions to ensure a smooth and enjoyable trip. Here are some safety tips and details to keep in mind when visiting Edo State: 1)Choose reputable hotels or guesthouses with good security measures, such as gated compounds, security personnel, and CCTV cameras.Benin City, the state capital, has a range of safe lodging options.,2)Opt for registered taxi services or ride-hailing apps like Uber or Bolt. Avoid unmarked taxis or public buses (danfos), especially at night.",
      funfact1:"Edo State is the heart of the ancient Benin Kingdom, one of the oldest and most revered monarchies in Africa, dating back to the 11th century. The kingdom is famous for its Benin Bronzes, intricate brass and bronze sculptures and plaques that depict the history and culture of the Benin people. These artifacts are considered some of the finest examples of African art and are displayed in museums worldwide.",
      funfact2:"The Benin Moat, also known as the Walls of Benin, is one of the largest man-made earthworks in the world. Built as a defensive fortification around the ancient Benin City, it stretches over 16,000 kilometers and is even longer than the Great Wall of China. In 1995, it was designated a UNESCO World Heritage Site.",
      funfact3:"Edo State is home to the Igue Festival, one of the most colorful and significant cultural festivals in Nigeria. Celebrated annually by the Benin people, the festival honors the Oba of Benin (the traditional ruler) and includes rituals, dances, and ceremonies to usher in blessings for the kingdom. It is a vibrant display of Edo culture and tradition.",
      culturetitle:"This title reflects Edo State's rich cultural heritage, which is deeply rooted in the history of the Benin Kingdom, its world-renowned artistic achievements (like the Benin Bronzes), and its vibrant traditions, festivals, and customs. Edo State is a cultural treasure trove that showcases Nigeria's historical depth and artistic excellence.",
      culture1:"The Benin Bronzes are world-famous brass and bronze sculptures, plaques, and artifacts created by the artisans of the Benin Kingdom. These intricate artworks depict the history, culture, and spirituality of the Benin people and are considered some of the finest examples of African art.Many of these artifacts were looted during the British Punitive Expedition of 1897 and are now displayed in museums worldwide, sparking ongoing calls for their repatriation.",
      culture2:"The Oba's Palace, also known as the Royal Palace of the Oba of Benin, is a historic and cultural landmark in Benin City. It serves as the residence of the Oba, the traditional ruler of the Benin Kingdom, and is a symbol of the kingdom's enduring legacy.The palace is adorned with traditional artifacts, sculptures, and historical relics, making it a must-visit for anyone interested in Benin's history and culture.",
      culture3:"The Igue Festival is one of the most important cultural festivals in Benin City. It is an annual celebration by the Benin people to honor the Oba of Benin (the traditional ruler) and seek blessings for the kingdom. The festival features traditional dances, rituals, and ceremonies, showcasing the rich cultural heritage of the Benin Kingdom."
    },
    {
      name:"Ondo",
      description:`Ondo State, located in the southwestern region of Nigeria, is a vibrant hub of cultural heritage, natural beauty, and agricultural wealth. Known as "The Sunshine State," Ondo State is home to a diverse mix of ethnic groups, primarily the Yoruba people, with subgroups such as the Akoko, Ikale, Ilaje, and Ondo`,
      population:". Ondo State is one of the more populous states in Nigeria, with a significant portion of its population concentrated in urban areas like Akure As of the most recent estimates, the population of Ondo State, Nigeria, is approximately 4.7 million people.",
      safetydetails:"Visiting Ondo State, Nigeria, can be a delightful experience due to its rich cultural heritage, natural attractions, and warm hospitality. However, like any travel destination, it’s important to take certain safety precautions to ensure a smooth and enjoyable trip  Here are some safety tips and details to keep in mind when visiting Ondo State:1)Choose reputable hotels or guesthouses with good security measures, such as gated compounds, security personnel, and CCTV cameras Akure, the state capital, has a range of safe lodging options. 2)Limit movement after dark, as crime rates tend to increase at night. If you must travel at night, use trusted drivers and stay in well-lit, populated areas.",
      funfact1:"Ondo state is Home to the Idanre Hills: A UNESCO World Heritage Site,The Idanre Hills are one of the most iconic landmarks in Ondo State. This stunning natural attraction features 660 steps leading to the top, where you can find ancient settlements, historical artifacts, and breathtaking views. The hills are a UNESCO World Heritage Site and a popular destination for hiking and sightseeing.",
      funfact2:`Ondo State is one of the largest producers of cocoa in Nigeria, earning it the nickname "The Cocoa State." The state's fertile soil and favorable climate make it an ideal location for cocoa farming, which plays a significant role in its economy.`,
      funfact3:"Ondo State is home to the ancient Owo Kingdom, renowned for its rich cultural heritage and artistic achievements. The Owo Museum of Antiquities houses a collection of artifacts, including traditional art, sculptures, and historical relics from the kingdom. Owo is also known for its unique Yoruba dialect and vibrant festivals.",
      culturetitle:"Ondo State is a melting pot of traditions, languages, and customs. The state's cultural heritage is deeply rooted in the Yoruba culture, with each subgroup contributing unique elements to the state's identity",
      culture1:"The Ogun Festival, the Ogun festival is Celebrated to honor the god of iron, Ogun, this festival features traditional dances, music, and rituals. It is a time for the community to come together and seek blessings for prosperity and protection.",
      culture2:"Ondo State has a rich tradition of arts and crafts, particularly in the Owo Kingdom, which is renowned for its artistic achievements. Key aspects include wood carving ,Bead work and Pottery",
      culture3:"Music and dance are integral to Ondo State's culture, with each ethnic group having its unique styles and rhythms. Popular traditional music and dance forms include 1) Bata and Dundun Drums: These traditional drums are used in performances and ceremonies, providing rhythmic accompaniment to dances and songs.2)Egungun Dance: A masquerade dance performed during festivals and cultural events, representing ancestral spirits and their connection to the living."
    },
    {
      name:"Oyo",
      description:`Oyo State, located in the southwestern region of Nigeria, is a cultural powerhouse known for its deep-rooted history, traditions, and contributions to the Yoruba civilization. Often referred to as the "Pace Setter State," Oyo State is home to the ancient Oyo Empire, one of the most influential kingdoms in West Africa`,
      population:"Oyo State is one of the most populous states in Nigeria, with a significant portion of its population concentrated in urban areas like Ibadan, the state capital and the largest city in West Africa by landmass,As of the most recent estimates, the population of Oyo State, Nigeria, is approximately 7.8 million people.",
      safetydetails:"Visiting Oyo State, Nigeria, can be a rewarding experience due to its rich cultural heritage, historical sites, and natural attractions. However, like any travel destination, it’s important to take certain safety precautions to ensure a smooth and enjoyable trip. Here are some safety tips and details to keep in mind when visiting Oyo State: Stay in Secure Accommodations:Choose reputable hotels or guesthouses with good security measures, such as gated compounds, security personnel, and CCTV cameras.Ibadan, the state capital, has a range of safe lodging options,Opt for registered taxi services or ride-hailing apps like Uber or Bolt. Avoid unmarked taxis or public buses (danfos), especially at night.If driving, be cautious of poorly maintained roads and erratic drivers.",
      funfact1:"Oyo State was the heart of the Oyo Empire, one of the most powerful and influential kingdoms in West Africa from the 15th to the 19th century. The empire was known for its strong military, sophisticated governance, and extensive trade networks. The ruins of the ancient capital, Oyo-Ile (Old Oyo), can still be visited today.",
      funfact2:"Ibadan, the capital of Oyo State, is the largest city in West Africa by landmass and the third-most populous city in Nigeria. It is known for its rich history, cultural landmarks, and educational institutions, including the University of Ibadan, the first university in Nigeria.",
      funfact3:"Oyo State is home to the Ado-Awaye Suspended Lake, one of only two suspended lakes in the world. Located on a hill in Ado-Awaye, this natural wonder is a popular destination for hiking and sightseeing, offering breathtaking views and a unique geological phenomenon.",
      culturetitle:"Oyo is a cultural powerhouse known for its deep-rooted history, traditions, and contributions to the Yoruba civilization",
      culture1:"Oke’badan Festival: Celebrated in Ibadan to honor the city's founding and its ancestral spirits. The festival features traditional dances, music, and rituals.",
      culture2:"Pottery and Beadwork: The state is known for its traditional pottery and bead-making, with artisans creating functional and decorative items.",
      culture3:"Music and dance are integral to Oyo State's culture, with each ethnic group having its unique styles and rhythms. Popular traditional music and dance forms include:Bata and Dundun Drums: These traditional drums are used in performances and ceremonies, providing rhythmic accompaniment to dances and songs.Sango Dance: A traditional dance performed to honor Sango, the Yoruba god of thunder and lightning. The dance features energetic movements and drumming.Egungun Dance: A masquerade dance performed during festivals and cultural events, representing ancestral spirits and their connection to the living."
    },
    {
      name:"Imo",
      description:"Imo State is one of the 36 states in southeastern Nigeria, known for its rich Igbo culture, economic activities, and vibrant history. It was created on February 3, 1976, from the former East Central State and is named after the Imo River, which runs through the region.",
      population:"As of 2022, Imo State in southeastern Nigeria has an estimated population of over 5.4 million people.",
      safetydetails:"Imo State has experienced security challenges in recent years, including political unrest, occasional kidnappings, and clashes between security forces and armed groups,The capital, Owerri, is relatively safe during the day but may have isolated security concerns at night,Rural areas and isolated roads may be riskier due to banditry or local conflicts .Always take safety measures when out",
      funfact1:`Home to Nigeria’s Second Largest Freshwater Lake Oguta Lake, located in Imo State, is Nigeria’s second-largest freshwater lake (after Lake Chad). It is famous for its "Meeting Point"—where the blue and muddy waters of the lake meet but do not mix!`,
      funfact2:`The capital, Owerri, is often called "Nigeria’s Entertainment Hub" due to its numerous hotels, nightclubs, and cultural festivals. It is also known for its lively music and comedy scene.`,
      funfact3:"Imo State is famous for Mbari Houses, traditional Igbo art galleries filled with beautiful sculptures and paintings that depict Igbo gods, folklore, and history. These structures are built as a form of worship and celebration of life.",
      culturetitle:"The cultural title of Imo State, Nigeria, is often associated with its rich Igbo heritage",
      culture1:" New Yam Festival (Iri Ji Ohuru) Celebrated annually across Igbo communities in Imo State, the New Yam Festival marks the beginning of the harvest season.It involves cultural dances, masquerade displays, and feasting on roasted yams as a sign of gratitude to the gods for a bountiful harvest.",
      culture2:"In Imo State, traditional marriage(Igba Nkwu) ceremonies are a big deal.The groom presents gifts, including palm wine, kola nuts, and money, to the bride's family.A highlight of the ceremony is when the bride finds her groom in the crowd and gives him a cup of palm wine to signify acceptance.",
      culture3:" Masquerade Festival (Mmanwu Festival)This festival features colorful masquerades representing ancestral spirits and deities.The masquerades dance, entertain, and sometimes perform spiritual roles.The Ekpe and Izaga masquerades are among the most famous in Imo State."
    },
    {
      name:"Kaduna",
      description:`Kaduna State, located in the northwestern region of Nigeria, is a culturally diverse and historically significant state known for its rich traditions, vibrant festivals, and strategic importance. Often referred to as "The Centre of Learning," Kaduna State is home to a mix of ethnic groups, including the Hausa, Gbagyi, Adara, Atyap, and Kajuru people`,
      population:" Kaduna State is one of the most populous states in Nigeria, with a significant portion of its population concentrated in urban areas like Kaduna City,As of the most recent estimates, the population of Kaduna State, Nigeria, is approximately 8.3 million people",
      safetydetails:"Kaduna State, located in northwestern Nigeria, is an important commercial and cultural hub. However, it has experienced security challenges, including communal conflicts, kidnappings, and occasional terrorist activity.Kaduna has areas that are relatively safe, especially in urban centers like Kaduna city, but rural and outskirts areas can be riskier Military and police presence is strong in key locations, but travelers should remain cautious. Emergency Contacts📞 Nigeria Police Force (Kaduna Command): 112 or 08075391105📞 Kaduna State Emergency Line: 07039675856 📞 Your Country’s Embassy: Always keep your embassy’s contact details handy.",
      funfact1:`The name "Kaduna" is derived from the Hausa word "Kadduna," meaning "crocodiles" because the Kaduna River was once home to many crocodiles.`,
      funfact2:"The Nigerian Defence Academy (NDA) in Kaduna is Nigeria’s premier military training institution, where officers of the Nigerian Army, Navy, and Air Force receive their training.",
      funfact3:"Kaduna Junction Railway Station, built during British colonial rule, was a key hub in Nigeria’s railway system, linking the north and south for trade and travel.",
      culturetitle:`Kaduna State is often referred to as "The Centre of Learning"  because of its historical significance in education, military training, and intellectual development in northern Nigeria.`,
      culture1:"The Hausa and Fulani people form the majority in Kaduna, especially in the northern part.They celebrate Islamic festivals like Eid-el-Fitr and Eid-el-Kabir with grand durbars, horse riding, and traditional dances.The Hausa are known for their beautiful embroidery (Babban Riga), turbans, and modest dressing.",
      culture2:`The Gbagyi (Gwari) people, found in southern Kaduna, are famous for their unique tradition of carrying heavy loads on their heads without using their hands.They practice traditional festivals like "Zhibaje," which celebrates their ancestry, music, and dances.Gbagyi women are known for their beautiful beadwork and traditional tattoos.`,
      culture3:`The Bajju people (also called Kaje) are known for their vibrant cultural music and dances, especially during weddings and harvest festivals.They celebrate "Afan Festival", an annual event showcasing their heritage.Traditional Bajju attire includes colorful woven fabrics, beads, and symbolic tribal marks`
    },
    {
      name:"Bayelsa",
      description:"Bayelsa State is located in the Niger Delta region of Nigeria, known for its rich culture, natural beauty, and oil wealth. It was created in 1996 from the larger Rivers State and is one of the smallest states in Nigeria by land area, but it is significant in terms of natural resources and ecological importance.",
      population:"Bayelsa State, located in Nigeria's Niger Delta region, has experienced significant population growth in recent years. As of 2022, the estimated population was approximately 2.53 million",
      safetydetails:"Bayelsa State, with its lush landscapes, rich culture, and oil wealth, is a fascinating place to visit. However, like many other parts of Nigeria, it has its own set of safety considerations due to security challenges,Bayelsa, like other parts of the Niger Delta, has faced security challenges, including militant activities, kidnappings, and banditry related to the region's oil industry,However, major urban centers such as Yenagoa, the state capital, are relatively safe for travelers during the day, though visitors should still exercise caution,Some rural and remote areas of the state can be riskier due to the presence of militants or local conflicts.Bayelsa State Emergency Number: 0705 246 9688 📞 Nigeria Police (Bayelsa Command): 112 or 0803 256 5501",
      funfact1:"Bayelsa is part of the Niger Delta, home to Nigeria's vast oil reserves. It is one of the largest oil-producing regions in Africa and contributes significantly to the nation's economy.",
      funfact2:"Bayelsa boasts some of Nigeria's most beautiful wetlands, with rich biodiversity. It is a bird-watching paradise, home to numerous species of birds, especially along the Niger Delta mangroves and coastal areas.",
      funfact3:"Goodluck Jonathan, the former president of Nigeria, hails from Otuoke, a town in Bayelsa. His rise to the presidency made Bayelsa a focal point of national attention.",
      culturetitle:"Bayelsa State is often referred to as the “Glory of all Lands” or “The Land of Peace” due to its rich cultural heritage, natural beauty, and strategic importance within the Niger Delta region. It is a place of great historical significance and natural resources, particularly in the oil sector",
      culture1:"The Ijaw people are the largest ethnic group in Bayelsa and have a rich cultural heritage.Known for their fishing and boat-building traditions, the Ijaw people have a deep connection to the waterways of the Niger Delta.Their cultural expressions include masquerades, traditional dances, and the Ijaw festival, which celebrates their history, spirituality, and way of life.",
      culture2:"The Ogbia people, another significant ethnic group in Bayelsa, have a strong cultural presence in the southern part of the state.Their festivals often involve traditional songs, dances, and ceremonies to honor ancestral spirits and celebrate the harvest season.Ogbia are also known for their unique art, such as traditional crafts and carvings.",
      culture3:"The Nembe people, part of the larger Ijaw ethnic group, have distinct cultural practices.Their traditional festivals include drumming and music, with flutes, drums, and other instruments used in both religious and cultural events.The Nembe people are also well-known for their beautiful traditional clothing, including beaded necklaces and hand-woven textiles."
    },
    {
      name:"Anambra",
      description:"Anambra State is located in the southeastern region of Nigeria and is known for its rich cultural heritage, economic importance, and historical significance. It was created in 1991 from the old Anambra Region and has since grown to become a key state in the southeastern region.The predominant language spoken in Anambra is Igbo, though English is also widely spoken, especially in urban areas.",
      population:" Anambra has experienced significant population growth in recent years. As of 2025, the estimated population is approximately 6,358,311",
      safetydetails:"Anambra is a dynamic state known for its rich cultural heritage, vibrant markets, and historical significance. However, as with most places, there are safety considerations when visiting , Anambra is generally safe for travelers, especially in urban areas like Awka, Onitsha, and Nnewi. However, like any large state, petty crime, such as pickpocketing and snatching of phones or bags, can occur in busy markets and public areas ,Traffic congestion is common in Onitsha due to its bustling commercial nature, so expect delays, especially during market days or rush hours ,If traveling between rural and urban areas, it's advisable to travel during daylight hours to avoid any potential security risks.Be cautious when traveling on motorcycles, as accidents are common in both rural and urban areas.",
      funfact1:"Onitsha, one of the largest cities in Anambra, is known for having one of the largest markets in Africa. The Onitsha Main Market is a major hub for local and international trade, attracting buyers and sellers from all over the world. It's a place where you can find almost anything, from electronics to traditional crafts!",
      funfact2:`Anambra is the birthplace of Chinua Achebe, Nigeria’s legendary author and one of the greatest writers of the 20th century. His novel, "Things Fall Apart," has been translated into more than 50 languages and remains a cornerstone of African literature. The state has produced many other notable literary figures as well!`,
      funfact3:"Anambra is famous for its celebration of the New Yam Festival, one of the most important cultural events in Igbo land. The festival marks the beginning of the harvest season and is filled with traditional dances, rituals, and a grand feast where yams, considered the king of crops, are served in abundance. It’s a colorful and exciting celebration of the Igbo people's agrarian roots!",
      culturetitle:"Anambra is often referred to as the “Light of the Nation” due to its historical importance, educational achievements, and cultural influence within Nigeria. This title highlights the state’s contributions to the nation’s progress, especially in education, commerce, and culture.",
      culture1:"The New Yam Festival is one of the most significant cultural celebrations in Anambra and the entire Igbo-speaking region. It marks the beginning of the harvest season, where yam, considered the king of crops, is ceremoniously harvested and presented.The festival is filled with traditional dances, rituals, and offerings to ancestors. Elders bless the yam before it is eaten, symbolizing a healthy harvest and respect for the earth.",
      culture2:"Mmanwu refers to traditional masquerades, which are an important part of Anambra’s culture, especially among the Igbo people.These masquerades are seen as spiritual beings representing ancestral spirits and are an integral part of festivals, such as the New Yam Festival and other ceremonies.Masquerade performances are marked by colorful costumes, drumming, and dancing, with each mask symbolizing a particular deity or spirit.",
      culture3:"The Igba Nkwu is the traditional wedding ceremony in Anambra and other Igbo states. It is a formal and colorful event where the groom presents the bride to the bride's family and pays the dowry.The ceremony is celebrated with dances, songs, and feasting, with both families coming together to honor the union. It is a significant cultural practice that celebrates the importance of marriage in Igbo culture."
    },
    {
      name:"Ogun",
      description:"Ogun State is located in the southwestern region of Nigeria and is known for its rich history, culture, and significant economic role. It is one of the pioneer states created during the state creation exercise of 1976. Ogun State is often referred to as the Gateway State because of its strategic location, linking Lagos (Nigeria's commercial capital) to the rest of the country.",
      population:`As of 2023, Ogun State's population is estimated to be approximately 8.2 million people`,
      safetydetails:" Ogun State, known as the Gateway State, is generally safe for travelers and residents, especially in urban areas. However, there are a few safety tips to keep in mind to ensure a smooth and enjoyable visit.Ogun State is relatively peaceful compared to other parts of Nigeria, but like any major urban area, petty crimes like pickpocketing or snatching of personal belongings can occur in crowded areas or markets, especially in Abeokuta or Ijebu-Ode.Police Emergency Number: Dial 112 for emergency police services in Ogun State.",
      funfact1:" Olumo Rock, located in Abeokuta, Ogun State, is a famous tourist attraction and a historical site. It was used by the Egba people as a place of refuge during wars in the 19th century. Visitors can climb the rock and enjoy breathtaking views of Abeokuta and its surroundings. It’s not just a rock, but a symbol of Ogun State’s rich history and culture.",
      funfact2:"Ogun State is the birthplace of Wole Soyinka, Nigeria’s first Nobel Laureate in Literature! He won the Nobel Prize in 1986 for his work in literature, and his legacy continues to inspire people worldwide. The state takes great pride in his achievements, and Abeokuta (his hometown) even celebrates his contributions to culture with various cultural programs.",
      funfact3:"Ogun State is an industrial powerhouse in Nigeria. It has become a key destination for both local and foreign investments, particularly in manufacturing. The state is home to major factories and industries, producing everything from cement to textiles and automobiles. It is often called the industrial gateway to Lagos and has become a crucial player in Nigeria’s economic growth.",
      culturetitle:"The cultural title of Ogun State is the “Gateway State”. This title reflects Ogun’s strategic geographical location, as it serves as a gateway linking Lagos to other parts of Nigeria and even to the Republic of Benin. It symbolizes the state’s historical significance and economic importance as a major route for trade and commerce.",
      culture1:"The Eyo Festival is celebrated in Abeokuta by the Egba people and is one of the most significant cultural events in Ogun State. It is a prelude to the Lagos Durbar Festival and celebrates the traditional heritage of the Egba Kingdom.The festival features colorful masquerades, royal processions, and traditional drumming. The Eyo masqueraders are dressed in elaborate costumes, with beautiful feathers, beads, and traditional robes.This festival symbolizes unity and respect for the ancestors and is a spectacle for both locals and visitors alike.",
      culture2:"The New Yam Festival is widely celebrated in Ogun State and marks the beginning of the harvest season. It is celebrated by both the Yoruba and Egba people, and it is a time to honor the gods and give thanks for a good harvest.The festival includes rituals, dances, traditional music, and the blessing of yams before they are eaten. The yams are the main dish of the festival, and this is followed by a grand feast.",
      culture3:"A popular dish in Ogun State, especially among the Yoruba people, Amala is made from yam flour and is typically served with Gbegiri soup (a bean-based soup). It’s often accompanied by Ewedu soup (made from jute leaves) and served with stew or goat meat."
    }
  ]);

  return (
    <NigeriaContext.Provider value={{ states }}>
      {children}
    </NigeriaContext.Provider>
  );
};
