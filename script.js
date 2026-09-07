/**
 * Typing Master PRO — Core Engine
 * Professional word-by-word typing test supporting English and Hindi practice passages.
 */

// ==========================================
// 22 Curated English & 22 Curated Hindi Passages
// ==========================================

const PASSAGES = PASSAGES_DATA.passages;

// const PASSAGES = {
//   en: [
//     {
//       id: 1,
//       title: "1. The Wonder of the Night Sky",
//       text: "Looking up at the clear night sky, one is filled with deep awe and curiosity. Countless stars glitter across the vast cosmos, reminding us of our tiny place in this grand universe. For thousands of years, ancient navigators relied on the constellations to travel across uncharted oceans. Today, modern telescopes allow astronomers to study distant galaxies, nebulae, and exoplanets. As space science advances, our understanding of the origins of life and matter continues to expand.",
//     },
//     {
//       id: 2,
//       title: "2. The Evolution of the Internet",
//       text: "The internet has transformed modern human civilization more rapidly than almost any other invention in history. What began as a modest research network between universities has now grown into a global communications infrastructure. Billions of people connect across continents in a fraction of a second to share ideas, conduct business, and access knowledge. Digital connectivity enables rapid medical advancements, remote collaboration, and international trade, shaping a truly interconnected world.",
//     },
//     {
//       id: 3,
//       title: "3. The Power of Small Habits",
//       text: "True success rarely happens overnight through a single dramatic event. Instead, remarkable achievements are usually the result of small, consistent daily habits practiced diligently over time. When an individual commits to reading ten pages a day, exercising for twenty minutes, or learning new vocabulary, the cumulative benefits compound remarkably over months and years. Discipline and patience are far more reliable than fleeting bursts of motivation.",
//     },
//     {
//       id: 4,
//       title: "4. Deep Oceans and Marine Wonders",
//       text: "Earth is fundamentally an oceanic planet, with water covering more than seventy percent of its surface. The deep abyss remains one of the least explored environments in our solar system, home to mysterious bioluminescent creatures that thrive under crushing pressure and total darkness. Hydrothermal vents support entire food webs powered by chemical synthesis rather than sunlight. Protecting fragile coral reefs and marine ecosystems is essential for sustaining atmospheric balance and global biodiversity.",
//     },
//     {
//       id: 5,
//       title: "5. The Philosophy of Mindful Living",
//       text: "In a modern world saturated with constant noise, rapid notifications, and endless distractions, finding inner calm has become an essential life skill. Practicing mindfulness teaches us to direct conscious attention to the present moment without hasty judgment. By pausing to observe our thoughts, emotions, and breath, we develop mental clarity and emotional resilience. Simple quiet walks in nature and uninterrupted moments of reflection help restore peace to a weary mind.",
//     },
//     {
//       id: 6,
//       title: "6. The Joy of Lifelong Reading",
//       text: "Books are quiet companions that hold the distilled wisdom of countless generations. When we open a well-written book, we embark on an intellectual journey through history, philosophy, and imagination. Reading stimulates cognitive vitality, sharpens analytical reasoning, and cultivates deep empathy by allowing us to experience life through another person's eyes. Cultivating a regular reading routine is one of the finest investments an individual can make in personal growth.",
//     },
//     {
//       id: 7,
//       title: "7. Renewable Energy and the Green Future",
//       text: "Transitioning to clean, renewable sources of power is the paramount environmental challenge of our era. Solar panels capture clean photons from our sun, while modern wind turbines generate immense clean electricity across breezy plains and offshore coasts. Geothermal and green hydrogen technologies offer promising pathways for industrial decarbonization. By investing boldly in smart electrical grids, humanity can build a resilient, prosperous, and sustainable planet for future generations.",
//     },
//     {
//       id: 8,
//       title: "8. The Architecture of Ancient Wonders",
//       text: "Ancient builders accomplished astonishing engineering triumphs long before the invention of modern machinery. The Great Pyramid of Giza, the Roman Colosseum, and the majestic temples of Asia stand as enduring monuments to human determination, mathematical precision, and artistic vision. These ancient structures tell timeless stories of civilization, trade networks, religious reverence, and civic pride that continue to inspire architects and historians today.",
//     },
//     {
//       id: 9,
//       title: "9. Artificial Intelligence and Creativity",
//       text: "The rapid development of artificial intelligence marks a historic turning point in computation and human ingenuity. Intelligent algorithms can analyze massive datasets, discover novel pharmaceuticals, predict weather patterns, and automate routine tasks. However, genuine creativity, moral empathy, and emotional warmth remain distinctively human attributes. The future belongs to thoughtful collaborations between human creativity and computational intelligence.",
//     },
//     {
//       id: 10,
//       title: "10. The Healing Power of Forests",
//       text: "Forests are the living green lungs of our planet, absorbing carbon dioxide and breathing vital oxygen into the atmosphere. The intricate fungal networks beneath the forest floor allow trees to communicate, share essential nutrients, and warn neighboring plants of pests. Spending mindful time among old trees lowers human stress hormones, strengthens immune health, and restores tranquility, demonstrating the profound biological bond between humanity and nature.",
//     },
//     {
//       id: 11,
//       title: "11. The History of Written Communication",
//       text: "The invention of writing represents one of humanity's greatest cultural milestones. From ancient cuneiform clay tablets and Egyptian hieroglyphs to parchment manuscripts and Gutenberg's revolutionary printing press, written words allowed knowledge to survive across centuries. Today, instant digital text connects distant cultures instantly. Writing preserves legal agreements, sacred poetry, scientific breakthroughs, and the rich narrative tapestry of human existence.",
//     },
//     {
//       id: 12,
//       title: "12. Mountain Climbing and Human Courage",
//       text: "Scaling towering mountain peaks requires rigorous physical endurance, mental discipline, and absolute respect for natural elements. High-altitude mountaineers brave freezing blizzards, thin oxygen, and treacherous icy crevasses in pursuit of high summits. The climb teaches humility, focus, and comradeship among team members. Reaching a windswept mountain peak reveals magnificent vistas that remind climbers that the journey itself is the true reward.",
//     },
//     {
//       id: 13,
//       title: "13. The Science of Healthy Sleep",
//       text: "Restful sleep is not a passive luxury, but a biological necessity vital for mental and physical health. During deep sleep cycles, the human brain consolidates memories, clears toxic cellular debris, and restores energy reserves. Chronic sleep deprivation weakens the immune defense, degrades emotional stability, and impairs cognitive reaction times. Maintaining consistent sleep hours and a calm evening routine enhances overall vigor, memory retention, and daily productivity.",
//     },
//     {
//       id: 14,
//       title: "14. Culinary Traditions and Culture",
//       text: "Food is far more than mere biological nourishment; it is a delicious expression of cultural history and communal love. Traditional culinary recipes passed down through generations carry the aromas, regional spices, and heartwarming stories of ancestral kitchens. Gathering around a warm dinner table fosters meaningful bonds, celebration, and hospitality among family and neighbors, transcending linguistic barriers across the globe.",
//     },
//     {
//       id: 15,
//       title: "15. The Journey to the Red Planet",
//       text: "Exploring planet Mars stands as the next great frontier for human space exploration. Robotic rovers equipped with advanced scientific instruments traverse rocky red craters in search of ancient water signatures and microbial life. Establishing human settlements on Mars will demand breakthrough advances in closed-loop life support, radiation shielding, and sustainable food production, inspiring humanity to dream far beyond our home planet.",
//     },
//     {
//       id: 16,
//       title: "16. The Universal Language of Music",
//       text: "Music possesses a unique emotional power to transcend cultural boundaries and unite human hearts across the world. An evocative melody, a rhythmic drumbeat, or a stirring orchestral harmony can evoke joy, nostalgia, courage, or contemplative sadness without uttering a single spoken word. Throughout human history, music has accompanied ceremonies, inspired revolutions, celebrated love, and comforted troubled souls.",
//     },
//     {
//       id: 17,
//       title: "17. Sustainable Agriculture and Soil Health",
//       text: "Feeding a growing global population while protecting delicate topsoil and freshwater reserves demands innovative agricultural practices. Regenerative farming techniques, crop rotation, organic composting, and precision drip irrigation restore fertility to exhausted soil. By reducing chemical pesticides and minimizing food waste across supply chains, communities can achieve equitable food security and protect our fragile biosphere.",
//     },
//     {
//       id: 18,
//       title: "18. The Dynamics of Modern Cities",
//       text: "Contemporary metropolitan cities are vibrant hubs of economic innovation, architectural splendor, and diverse cultures. Well-planned urban environments prioritize accessible public transit, pedestrian-friendly streets, green public parks, and affordable energy-efficient housing. When urban centers cultivate inclusive communities and resilient infrastructure, they become dynamic engines of intellectual, artistic, and social progress.",
//     },
//     {
//       id: 19,
//       title: "19. The Psychology of Emotional Resilience",
//       text: "Life inevitably brings unforeseen difficulties, sudden losses, and demanding setbacks. Resilience is not the complete absence of emotional pain, but the inner capacity to adapt, recover, and grow stronger in the face of adversity. By cultivating optimistic problem-solving skills, practicing self-compassion, and seeking encouragement from trusted mentors, people develop the emotional fortitude needed to triumph over life's trials.",
//     },
//     {
//       id: 20,
//       title: "20. Wildlife Conservation and Biodiversity",
//       text: "Every living species, from the smallest pollinating bee to the majestic blue whale, plays an irreplaceable role in maintaining healthy ecological balance. Habitat loss, poaching, and climate disruption threaten thousands of vulnerable plant and animal species worldwide. Establishing wildlife corridors, preserving native habitats, and enforcing conservation laws are vital moral responsibilities for preserving the wonderful diversity of earthly life.",
//     },
//     {
//       id: 21,
//       title: "21. The Craft of Storytelling",
//       text: "Since the dawn of human civilization, people have gathered around glowing campfires to share captivating stories of heroic quests, moral dilemmas, and cosmic mysteries. Storytelling preserves oral traditions, educates the young, and deepens emotional understanding among listeners. A compelling narrative sparks imagination, challenges prejudice, and reminds us that our shared human hopes and vulnerabilities unite us all.",
//     },
//     {
//       id: 22,
//       title: "22. The Value of Honest Friendships",
//       text: "Genuine friendship is one of the sweetest blessings that enrich the journey of human life. A true friend celebrates your triumphs with authentic joy and stands steadfastly beside you during challenging storms of hardship. Built upon mutual trust, honest communication, and unselfish kindness, deep friendships provide a comforting sanctuary where one can be entirely vulnerable, understood, and cherished.",
//     },
//   ],

//   hi: [
//     {
//       id: 1,
//       title: "१. समय का सदुपयोग और सफलता",
//       text: "समय संसार का सबसे मूल्यवान धन है क्योंकि बीता हुआ पल कभी वापस नहीं आता। जो व्यक्ति समय का सम्मान करता है और अपने दैनिक कार्यों को योजनाबद्ध तरीके से पूरा करता है, उसे जीवन में सफलता अवश्य प्राप्त होती है। आलस्य मनुष्य का सबसे बड़ा शत्रु है जो सुनहरे अवसरों को नष्ट कर देता है। हमें समय के प्रत्येक क्षण का सदुपयोग करते हुए ज्ञानार्जन, कौशल विकास और समाज के कल्याण के लिए निरंतर समर्पित रहना चाहिए।",
//     },
//     {
//       id: 2,
//       title: "२. प्रकृति का सौंदर्य और पर्यावरण संरक्षण",
//       text: "प्रकृति ईश्वर की सबसे सुंदर और अनुपम रचना है। हरे-भरे वन, कलकल बहती नदियाँ, ऊंचे पर्वत और चहकते पक्षी हमारी धरती को प्राणवान बनाते हैं। परंतु आधुनिक युग में अनियंत्रित औद्योगीकरण और प्रदूषण के कारण हमारा पर्यावरण संकट में पड़ गया है। यदि हमने वनों की कटाई रोकी और अधिक से अधिक पौधे लगाए, तो हम अपनी आने वाली पीढ़ियों को एक स्वस्थ, स्वच्छ और सुंदर ग्रह उपहार में दे सकेंगे।",
//     },
//     {
//       id: 3,
//       title: "३. भारतीय संस्कृति और विविधता में एकता",
//       text: "भारत एक प्राचीन और महान राष्ट्र है जहाँ अनेक भाषाएँ, धर्म, रीति-रिवाज और परंपराएँ एक साथ मिलकर फलती-फूलती हैं। हमारी संस्कृति 'वसुधैव कुटुम्बकम्' अर्थात समस्त पृथ्वी को एक परिवार मानने के दिव्य संदेश पर आधारित है। विभिन्नताओं के बावजूद हम सभी भारतवासी एक अटूट राष्ट्रीय भावना से जुड़े हैं। यही सांस्कृतिक विविधता और आपसी सद्भाव हमारे देश की वास्तविक शक्ति और वैश्विक पहचान है।",
//     },
//     {
//       id: 4,
//       title: "४. शिक्षा का वास्तविक उद्देश्य",
//       text: "शिक्षा का मूल उद्देश्य केवल डिग्री प्राप्त करना या आजीविका कमाना नहीं है, बल्कि व्यक्ति के चरित्र का निर्माण और उसके दृष्टिकोण को व्यापक बनाना है। सच्ची शिक्षा मनुष्य में विनम्रता, करुणा, सत्यनिष्ठा और कर्तव्यबोध का संचार करती है। जब एक शिक्षित नागरिक समाज के निर्बल वर्गों के उत्थान और देश की प्रगति के लिए विचार करता है, तभी शिक्षा की सार्थकता सिद्ध होती है।",
//     },
//     {
//       id: 5,
//       title: "५. परिश्रम और आत्म-विश्वास की शक्ति",
//       text: "परिश्रम ही सफलता की सुनहरी कुंजी है। बिना कठोर साधना और लगन के कोई भी महान लक्ष्य सिद्ध नहीं हो सकता। इतिहास गवाह है कि जिन महापुरुषों ने दुनिया को नई दिशा दी, उन्होंने निरंतर संघर्ष और अदम्य साहस से अपनी राह बनाई। जब व्यक्ति के मन में अटूट आत्मविश्वास और कर्म के प्रति निष्ठा होती है, तो बड़ी से बड़ी कठिनाई भी उसके कदमों में झुक जाती है।",
//     },
//     {
//       id: 6,
//       title: "६. विज्ञान और आधुनिक तकनीक का सदुपयोग",
//       text: "विज्ञान और प्रौद्योगिकी ने इक्कीसवीं सदी में मानव जीवन को पूरी तरह से बदल दिया है। कंप्यूटर, इंटरनेट और मोबाइल के माध्यम से ज्ञान और संचार का विस्तार असीमित हो गया है। चिकित्सा, कृषि और अंतरिक्ष के क्षेत्र में नए आविष्कारों ने असंभव को संभव बना दिया है। हमें यह स्मरण रखना चाहिए कि तकनीक केवल एक साधन है, और उसका उपयोग मानवता की भलाई और शांति के लिए होना चाहिए।",
//     },
//     {
//       id: 7,
//       title: "७. पुस्तकों का महत्व और स्वाध्याय",
//       text: "पुस्तकें ज्ञान का अक्षय भंडार और सच्ची मार्गदर्शक होती हैं। जब हम एक अच्छी पुस्तक पढ़ते हैं, तो हमें महान विचारकों, वैज्ञानिकों और दार्शनिकों के जीवन के अनुभव सहज ही प्राप्त हो जाते हैं। स्वाध्याय से हमारी कल्पनाशक्ति, भाषा शैली और सोचने की क्षमता में अद्वितीय सुधार होता है। नियमित रूप से स्वाध्याय करने वाला व्यक्ति कभी अकेलापन महसूस नहीं करता।",
//     },
//     {
//       id: 8,
//       title: "८. हिमालय: भारत का मुकुट",
//       text: "हिमालय केवल बर्फ से ढके पर्वतों की एक श्रृंखला नहीं है, बल्कि भारत का गौरवशाली मुकुट और संस्कृति का अभिन्न अंग है। यहाँ से निकलने वाली गंगा, यमुना और ब्रह्मपुत्र जैसी पवित्र नदियाँ हमारे खेतों को सींचती हैं और करोड़ों लोगों को जीवन प्रदान करती हैं। हिमालय की पर्वतमालाएँ उत्तर दिशा से आने वाली ठंडी हवाओं से देश की रक्षा करती हैं और प्राकृतिक संपदा से परिपूर्ण हैं।",
//     },
//     {
//       id: 9,
//       title: "९. स्वास्थ्य ही वास्तविक धन है",
//       text: "स्वास्थ्य के बिना जीवन का कोई भी आनंद सच्चा नहीं हो सकता। स्वस्थ शरीर में ही स्वस्थ मस्तिष्क का निवास होता है। संतुलित आहार, नियमित व्यायाम, प्राणायाम और सकारात्मक सोच उत्तम स्वास्थ्य के चार प्रमुख स्तंभ हैं। जंक फूड और अनियमित दिनचर्या से दूर रहकर यदि हम प्राकृतिक जीवनशैली अपनाएँ, तो हम दीर्घायु और ऊर्जावान बने रह सकते हैं।",
//     },
//     {
//       id: 10,
//       title: "१०. मित्रता का अनमोल संबंध",
//       text: "सच्ची मित्रता जीवन का एक अत्यंत सुंदर और दुर्लभ उपहार है। एक सच्चा मित्र सुख में हमारे साथ हँसता है और दुःख के समय बिना किसी स्वार्थ के सहारा बनकर खड़ा रहता है। मित्रता पद, धन और सामाजिक स्थिति से परे हृदय की आत्मीयता पर टिकी होती है। जिस व्यक्ति के पास एक भी निष्कपट मित्र है, वह वास्तव में संसार का अत्यंत भाग्यशाली व्यक्ति है।",
//     },
//     {
//       id: 11,
//       title: "११. जल संरक्षण: आज की आवश्यकता",
//       text: "जल ही जीवन का मूल आधार है और इसके बिना पृथ्वी पर जीवन की कल्पना भी असंभव है। लगातार गिरता भूजल स्तर और नदियों का प्रदूषण भविष्य के लिए एक गंभीर चेतावनी है। हमें वर्षा जल संचयन की पद्धतियाँ अपनानी होंगी और दैनिक जीवन में पानी की एक-एक बूँद को व्यर्थ बहने से बचाना होगा। जल बचेगा तभी हमारा कल सुरक्षित और समृद्ध रहेगा।",
//     },
//     {
//       id: 12,
//       title: "१२. ग्रामीण जीवन और किसानों का परिश्रम",
//       text: "भारत की आत्मा उसके गाँवों में बसती है। हमारे अन्नदाता किसान कड़ी धूप, कड़ाके की ठंड और मूसलाधार बारिश में भी खेतों में पसीना बहाकर पूरे देश के लिए अनाज पैदा करते हैं। ग्रामीण जीवन की सादगी, शुद्ध वायु, हरियाली और आपसी भाईचारा मन को अपार शांति प्रदान करता है। गाँवों का समग्र विकास ही संपूर्ण राष्ट्र की आत्मनिर्भरता का सच्चा आधार है।",
//     },
//     {
//       id: 13,
//       title: "१३. योग, ध्यान और मानसिक शांति",
//       text: "योग भारतीय ऋषि परंपरा की एक अमूल्य देन है जो शरीर, मन और आत्मा को एक सूत्र में बांधता है। आधुनिक भागदौड़ भरी जिंदगी में तनाव, अवसाद और मानसिक अशांति को दूर करने के लिए योगासन और ध्यान रामबाण उपाय हैं। प्रतिदिन कुछ समय ध्यान करने से एकाग्रता बढ़ती है, सकारात्मक ऊर्जा का संचार होता है और आत्मिक शांति की अनुभूति होती है।",
//     },
//     {
//       id: 14,
//       title: "१४. ऋतुओं का चक्र और भारतीय त्योहार",
//       text: "भारत में वसंत, ग्रीष्म, वर्षा, शरद, हेमंत और शिशिर जैसी छह मनमोहक ऋतुएँ आती हैं। प्रत्येक ऋतु अपने साथ नए रंग, सुहावना मौसम और उमंग लेकर आती है। होली, दिवाली, रक्षाबंधन और मकर संक्रांति जैसे पावन पर्व समाज में परस्पर प्रेम, उल्लास और सद्भाव का संदेश फैलाते हैं। ये त्योहार हमारी प्राचीन परंपराओं को जीवित रखने में महत्वपूर्ण भूमिका निभाते हैं।",
//     },
//     {
//       id: 15,
//       title: "१५. अनुशासन और चरित्र निर्माण",
//       text: "अनुशासन के बिना किसी भी परिवार, संस्था अथवा राष्ट्र की उन्नति संभव नहीं है। प्रकृति का प्रत्येक तत्व जैसे सूर्य का समय पर उदय होना और ऋतुओं का बदलना अनुशासन का सर्वोत्तम उदाहरण है। विद्यार्थी जीवन में जो छात्र समयबद्धता और नियमों का पालन करते हैं, वे भविष्य में उच्च पदों और समाज में आदरणीय स्थान को प्राप्त करते हैं।",
//     },
//     {
//       id: 16,
//       title: "१६. कला, संगीत और मानवीय संवेदनाएँ",
//       text: "कला और संगीत मनुष्य की आंतरिक भावनाओं और सौंदर्यबोध की सर्वोच्च अभिव्यक्ति हैं। जब कोई गायक राग गाता है या चित्रकार कैनवास पर रंग भरता है, तो वह समस्त सांसारिक चिंताओं को भुलाकर एक अलौकिक आनंद में डूब जाता है। संगीत में वह जादुई शक्ति है जो निराश हृदयों में भी नई आशा, साहस और जीवन की उमंग जगा देती है।",
//     },
//     {
//       id: 17,
//       title: "१७. युवाओं की शक्ति और राष्ट्र निर्माण",
//       text: "युवा किसी भी देश की सबसे बड़ी पूंजी और प्रगति के वास्तविक संवाहक होते हैं। उनके भीतर असीम ऊर्जा, नवीन विचार और बड़े परिवर्तन लाने का साहस होता है। यदि हमारी युवा शक्ति को सही मार्गदर्शन, गुणवत्तापूर्ण शिक्षा और रोजगार के अवसर मिलें, तो भारत विश्व स्तर पर एक सशक्त ज्ञान महाशक्ति के रूप में उभर सकता है।",
//     },
//     {
//       id: 18,
//       title: "१८. सौर ऊर्जा और स्वच्छ भविष्य",
//       text: "जीवाश्म ईंधनों की सीमितता और वायु प्रदूषण की समस्या से निपटने के लिए सौर ऊर्जा सबसे प्रभावी विकल्प बनकर उभरी है। भारत में वर्ष भर प्रचुर मात्रा में सूर्य का प्रकाश उपलब्ध रहता है। छतों पर सोलर पैनल लगाने और सौर संयंत्रों को बढ़ावा देने से न केवल बिजली की बचत होती है, बल्कि कार्बन उत्सर्जन में भी भारी कमी आती है।",
//     },
//     {
//       id: 19,
//       title: "१९. सत्य और अहिंसा का अमर संदेश",
//       text: "महात्मा गांधी द्वारा प्रतिपादित सत्य और अहिंसा के सिद्धांत आज भी पूरे विश्व के लिए प्रासंगिक हैं। हिंसा से केवल विनाश और वैमनस्य फैलता है, जबकि सत्य और करुणा के मार्ग पर चलकर सबसे बड़े विरोधियों का दिल भी जीता जा सकता है। ईमानदारी, धैर्य और दूसरों के प्रति सम्मान की भावना ही मानवीय समाज को सुदृढ़ बनाती है।",
//     },
//     {
//       id: 20,
//       title: "२०. परिवार का महत्व और सामाजिक समरसता",
//       text: "परिवार समाज की मूलभूत इकाई है जहाँ एक बालक प्रेम, त्याग, संस्कार और सहयोग का पहला पाठ सीखता है। बड़ों का आदर करना और छोटों को स्नेह देना हमारे पारिवारिक मूल्यों की रीढ़ है। जब परिवार में संवाद, विश्वास और एकता होती है, तो व्यक्ति जीवन की हर चुनौती का सामना मुस्कुराते हुए कर सकता है।",
//     },
//     {
//       id: 21,
//       title: "२१. भाषा और साहित्य का सांस्कृतिक गौरव",
//       text: "भाषा केवल अभिव्यक्ति का माध्यम नहीं है, बल्कि हमारी अस्मिता और संस्कृति का प्रतिबिंब है। हिंदी भाषा अपनी सरलता, सहजता और समृद्ध शब्दावली के कारण जन-जन के हृदय में बसी है। महान कवियों और लेखकों की कालजयी रचनाएँ हमें जीवन के गूढ़ रहस्यों, देशभक्ति और मानवीय मूल्यों से जोड़ती हैं।",
//     },
//     {
//       id: 22,
//       title: "२२. साहस और आत्मविश्वास से विजय",
//       text: "जीवन में सफलता पाने के लिए सबसे पहली आवश्यकता अपने आप पर अटूट भरोसा रखना है। जो व्यक्ति असफलताओं से घबराकर पीछे नहीं हटता और निरंतर प्रयास जारी रखता है, उसकी विजय निश्चित होती है। कठिनाइयाँ हमें मजबूत बनाने और हमारे छिपे हुए सामर्थ्य को जगाने के लिए आती हैं।",
//     },
//   ],
// };

// ==========================================
// Application State
// ==========================================

const state = {
  lang: "en",
  durationMinutes: 5,
  durationSeconds: 300,

  selectedPassageIndex: 0,
  currentPassageTitle: "",
  basePassageWords: [],
  words: [],
  currentWordIndex: 0,

  started: false,
  finished: false,
  startTime: null,
  timerInterval: null,

  correctWords: 0,
  wrongWords: 0,
  correctChars: 0,
  wrongChars: 0,
  totalKeystrokes: 0,
  errors: 0,

  soundEnabled: true,
  audioCtx: null,
};

// ==========================================
// DOM Element References
// ==========================================
const DOM = {
  languageSelect: document.getElementById("languageSelect"),
  durationSelect: document.getElementById("durationSelect"),
  passageSelect: document.getElementById("passageSelect"),
  soundToggle: document.getElementById("soundToggle"),
  soundIcon: document.getElementById("soundIcon"),
  restartBtn: document.getElementById("restartBtn"),
  quickResetBtn: document.getElementById("quickResetBtn"),
  fullscreenToggle: document.getElementById("fullscreenToggle"),
  fullscreenIcon: document.getElementById("fullscreenIcon"),
  fullscreenLabel: document.getElementById("fullscreenLabel"),

  timeLeftDisplay: document.getElementById("timeLeftDisplay"),
  timerProgressBar: document.getElementById("timerProgressBar"),
  wpmDisplay: document.getElementById("wpmDisplay"),
  accuracyDisplay: document.getElementById("accuracyDisplay"),
  correctWordsDisplay: document.getElementById("correctWordsDisplay"),
  wrongWordsDisplay: document.getElementById("wrongWordsDisplay"),
  errorsDisplay: document.getElementById("errorsDisplay"),
  timeTakenDisplay: document.getElementById("timeTakenDisplay"),

  currentLangTag: document.getElementById("currentLangTag"),
  statusTip: document.getElementById("statusTip"),
  wordsWrapper: document.getElementById("wordsWrapper"),
  wordsContainer: document.getElementById("wordsContainer"),
  wordInput: document.getElementById("wordInput"),
  inputStatusIndicator: document.getElementById("inputStatusIndicator"),
  inputContainer: document.querySelector(".input-container"),

  resultModal: document.getElementById("resultModal"),
  modalSubtitle: document.getElementById("modalSubtitle"),
  modalNetWpm: document.getElementById("modalNetWpm"),
  modalAccuracy: document.getElementById("modalAccuracy"),
  modalGrossWpm: document.getElementById("modalGrossWpm"),
  modalCorrectWords: document.getElementById("modalCorrectWords"),
  modalWrongWords: document.getElementById("modalWrongWords"),
  modalKeystrokes: document.getElementById("modalKeystrokes"),
  modalKeystrokeDetails: document.getElementById("modalKeystrokeDetails"),
  modalErrors: document.getElementById("modalErrors"),
  modalTimeTaken: document.getElementById("modalTimeTaken"),
  modalRestartBtn: document.getElementById("modalRestartBtn"),
  modalViewHistoryBtn: document.getElementById("modalViewHistoryBtn"),
  modalCloseBtn: document.getElementById("modalCloseBtn"),
  pbBanner: document.getElementById("pbBanner"),
  pbBannerText: document.getElementById("pbBannerText"),

  historyToggleBtn: document.getElementById("historyToggleBtn"),
  historyModal: document.getElementById("historyModal"),
  historyCloseBtn: document.getElementById("historyCloseBtn"),
  historyBestWpm: document.getElementById("historyBestWpm"),
  historyBestWpmSub: document.getElementById("historyBestWpmSub"),
  historyAvgWpm: document.getElementById("historyAvgWpm"),
  historyAvgAccuracy: document.getElementById("historyAvgAccuracy"),
  historyTotalTime: document.getElementById("historyTotalTime"),
  historyTotalTests: document.getElementById("historyTotalTests"),
  historyFilterLang: document.getElementById("historyFilterLang"),
  exportHistoryBtn: document.getElementById("exportHistoryBtn"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),
  historyTable: document.getElementById("historyTable"),
  historyTableBody: document.getElementById("historyTableBody"),
  historyEmptyState: document.getElementById("historyEmptyState"),

  // User Auth & Profile
  authOpenBtn: document.getElementById("authOpenBtn"),
  userChip: document.getElementById("userChip"),
  userAvatar: document.getElementById("userAvatar"),
  userChipName: document.getElementById("userChipName"),
  userDropdown: document.getElementById("userDropdown"),
  dropdownFullName: document.getElementById("dropdownFullName"),
  dropdownUsername: document.getElementById("dropdownUsername"),
  dropdownHistoryBtn: document.getElementById("dropdownHistoryBtn"),
  dropdownLogoutBtn: document.getElementById("dropdownLogoutBtn"),

  // Auth Modal
  authModal: document.getElementById("authModal"),
  authCloseBtn: document.getElementById("authCloseBtn"),
  authModalTitle: document.getElementById("authModalTitle"),
  authModalSubtitle: document.getElementById("authModalSubtitle"),
  tabLoginBtn: document.getElementById("tabLoginBtn"),
  tabSignupBtn: document.getElementById("tabSignupBtn"),
  loginForm: document.getElementById("loginForm"),
  loginAlert: document.getElementById("loginAlert"),
  loginUsername: document.getElementById("loginUsername"),
  loginPassword: document.getElementById("loginPassword"),
  loginSubmitBtn: document.getElementById("loginSubmitBtn"),
  switchToSignupLink: document.getElementById("switchToSignupLink"),
  signupForm: document.getElementById("signupForm"),
  signupAlert: document.getElementById("signupAlert"),
  signupFullName: document.getElementById("signupFullName"),
  signupUsername: document.getElementById("signupUsername"),
  signupPassword: document.getElementById("signupPassword"),
  signupConfirmPassword: document.getElementById("signupConfirmPassword"),
  signupSubmitBtn: document.getElementById("signupSubmitBtn"),
  switchToLoginLink: document.getElementById("switchToLoginLink"),
};

// ==========================================
// Audio Feedback (Web Audio API Synthesizer)
// ==========================================
function initAudio() {
  if (
    !state.audioCtx &&
    typeof (window.AudioContext || window.webkitAudioContext) !== "undefined"
  ) {
    const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
    state.audioCtx = new AudioCtxClass();
  }
}

function playSound(type) {
  if (!state.soundEnabled) return;
  try {
    initAudio();
    if (!state.audioCtx) return;
    if (state.audioCtx.state === "suspended") {
      state.audioCtx.resume();
    }

    const now = state.audioCtx.currentTime;
    const osc = state.audioCtx.createOscillator();
    const gain = state.audioCtx.createGain();
    osc.connect(gain);
    gain.connect(state.audioCtx.destination);

    if (type === "keypress") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.03);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.start(now);
      osc.stop(now + 0.03);
    } else if (type === "space") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, now);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "error") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.linearRampToValueAtTime(120, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "complete") {
      const freqs = [523.25, 659.25, 783.99, 1046.5];
      freqs.forEach((freq, idx) => {
        const noteOsc = state.audioCtx.createOscillator();
        const noteGain = state.audioCtx.createGain();
        noteOsc.connect(noteGain);
        noteGain.connect(state.audioCtx.destination);
        noteOsc.type = "sine";
        noteOsc.frequency.setValueAtTime(freq, now + idx * 0.09);
        noteGain.gain.setValueAtTime(0.08, now + idx * 0.09);
        noteGain.gain.exponentialRampToValueAtTime(
          0.001,
          now + idx * 0.09 + 0.25,
        );
        noteOsc.start(now + idx * 0.09);
        noteOsc.stop(now + idx * 0.09 + 0.25);
      });
    }
  } catch (err) {
    // Gracefully handle browser restrictions
  }
}

// ==========================================
// Unicode Grapheme Segmentation (For Hindi)
// ==========================================
function splitChars(str) {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter(undefined, {
      granularity: "grapheme",
    });
    return Array.from(segmenter.segment(str), (s) => s.segment);
  }
  return Array.from(str);
}

// ==========================================
// Text Formatting & Word Generation
// ==========================================
function formatTime(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function escapeHtml(str) {
  return str.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[c],
  );
}

// ==========================================
// Passage Dropdown Population
// ==========================================
function populatePassageDropdown() {
  const list = PASSAGES[state.lang] || PASSAGES.en;
  DOM.passageSelect.innerHTML = "";

  list.forEach((item, idx) => {
    const option = document.createElement("option");
    option.value = idx;

    let badge = "";

    if (item.difficulty === "easy") {
      badge = "🟢"; // Green circle
    } else if (item.difficulty === "medium") {
      badge = "🟡"; // Yellow circle
    } else if (item.difficulty === "hard") {
      badge = "🔴"; // Red circle
    }

    option.textContent = `${idx + 1}. ${item.title} ${badge}`;
    DOM.passageSelect.appendChild(option);
  });

  const randomOption = document.createElement("option");
  randomOption.value = "random";
  randomOption.textContent =
    state.lang === "hi" ? "🎲 कोई भी गद्यांश (Random)" : "🎲 Random Passage";
  DOM.passageSelect.appendChild(randomOption);

  DOM.passageSelect.value = 0;
}

// ==========================================
// Word Arena DOM Rendering
// ==========================================
function createWordElement(word, index) {
  const wordDiv = document.createElement("div");
  wordDiv.className = "word";
  wordDiv.dataset.index = index;

  const chars = splitChars(word);
  wordDiv.innerHTML = chars
    .map((ch) => `<span class="char">${escapeHtml(ch)}</span>`)
    .join("");
  return wordDiv;
}

function renderInitialWords() {
  DOM.wordsContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  state.words.forEach((word, index) => {
    const el = createWordElement(word, index);
    if (index === 0) el.classList.add("active");
    fragment.appendChild(el);
  });

  DOM.wordsContainer.appendChild(fragment);
  DOM.wordsWrapper.scrollTop = 0;

  // Set language styling class
  if (state.lang === "hi") {
    DOM.wordsContainer.classList.add("lang-hi");
    DOM.wordInput.classList.add("lang-hi");
    DOM.currentLangTag.textContent = "हिन्दी (Hindi)";
  } else {
    DOM.wordsContainer.classList.remove("lang-hi");
    DOM.wordInput.classList.remove("lang-hi");
    DOM.currentLangTag.textContent = "English";
  }

  updateActiveWordDisplay("");
}

function appendMoreWords(count = 100) {
  const base = state.basePassageWords;
  if (!base || base.length === 0) return;

  const newWords = [];
  while (newWords.length < count) {
    newWords.push(...base);
  }
  const slice = newWords.slice(0, count);
  const startIndex = state.words.length;

  const fragment = document.createDocumentFragment();
  slice.forEach((w, i) => {
    const actualIndex = startIndex + i;
    state.words.push(w);
    fragment.appendChild(createWordElement(w, actualIndex));
  });
  DOM.wordsContainer.appendChild(fragment);
}

// ==========================================
// Live Active Word Display & Highlighting
// ==========================================
function updateActiveWordDisplay(typed) {
  const activeWordEl = DOM.wordsContainer.querySelector(
    `.word[data-index="${state.currentWordIndex}"]`,
  );
  if (!activeWordEl) return;

  const targetWord = state.words[state.currentWordIndex];
  const targetChars = splitChars(targetWord);
  const typedChars = splitChars(typed);
  let hasTypo = false;
  let html = "";
  const maxLen = Math.max(targetChars.length, typedChars.length);

  for (let i = 0; i < maxLen; i++) {
    if (i < targetChars.length) {
      const targetChar = targetChars[i];
      if (i < typedChars.length) {
        const typedChar = typedChars[i];
        if (typedChar === targetChar) {
          html += `<span class="char correct">${escapeHtml(targetChar)}</span>`;
        } else {
          html += `<span class="char wrong">${escapeHtml(targetChar)}</span>`;
          hasTypo = true;
        }
      } else {
        html += `<span class="char">${escapeHtml(targetChar)}</span>`;
      }
    } else {
      const extraChar = typedChars[i];
      html += `<span class="char extra">${escapeHtml(extraChar)}</span>`;
      hasTypo = true;
    }
  }

  // Caret cursor is placed strictly inside the active word
  html += '<span class="caret-cursor"></span>';
  activeWordEl.innerHTML = html;

  // Position the caret cursor dynamically
  const charSpans = activeWordEl.querySelectorAll(".char");
  const caretEl = activeWordEl.querySelector(".caret-cursor");
  if (caretEl) {
    if (typedChars.length === 0) {
      caretEl.style.left = "2px";
    } else {
      const targetSpanIndex = Math.min(
        typedChars.length - 1,
        charSpans.length - 1,
      );
      const span = charSpans[targetSpanIndex];
      if (span) {
        caretEl.style.left = `${span.offsetLeft + span.offsetWidth}px`;
      }
    }
  }

  // Visual feedback on input container for live error
  if (hasTypo) {
    DOM.inputContainer.classList.add("input-has-error");
    DOM.inputStatusIndicator.textContent = "❌";
  } else {
    DOM.inputContainer.classList.remove("input-has-error");
    DOM.inputStatusIndicator.textContent = typed.length > 0 ? "✓" : "✍";
  }
}

// ==========================================
// Smooth Auto-Scrolling
// ==========================================
function keepActiveWordInView(activeWordEl) {
  if (!activeWordEl) return;
  const wrapperRect = DOM.wordsWrapper.getBoundingClientRect();
  const wordRect = activeWordEl.getBoundingClientRect();

  const relativeTop = wordRect.top - wrapperRect.top;
  const scrollThreshold = Math.max(80, wrapperRect.height * 0.55);
  if (relativeTop > scrollThreshold) {
    const scrollAdjustment = relativeTop - wrapperRect.height * 0.35;
    DOM.wordsWrapper.scrollBy({ top: scrollAdjustment, behavior: "smooth" });
  }
}

// ==========================================
// Live Metrics Calculation
// ==========================================
function calculateMetrics() {
  const elapsedSeconds = state.startTime
    ? Math.max(0.5, (Date.now() - state.startTime) / 1000)
    : 0;
  const elapsedMinutes = elapsedSeconds / 60;

  const netWpm =
    elapsedMinutes > 0
      ? Math.round(state.correctChars / 5 / elapsedMinutes)
      : 0;
  const grossWpm =
    elapsedMinutes > 0
      ? Math.round(state.totalKeystrokes / 5 / elapsedMinutes)
      : 0;

  const totalSubmittedWords = state.correctWords + state.wrongWords;
  const accuracy =
    totalSubmittedWords > 0
      ? Math.max(
          0,
          Math.min(
            100,
            Math.round((state.correctWords / totalSubmittedWords) * 100),
          ),
        )
      : 100;

  return {
    netWpm,
    grossWpm,
    accuracy,
    elapsedSeconds,
    correctWords: state.correctWords,
    wrongWords: state.wrongWords,
    errors: state.errors,
  };
}

function updateLiveStats() {
  const m = calculateMetrics();

  DOM.wpmDisplay.textContent = m.netWpm;
  DOM.accuracyDisplay.textContent = `${m.accuracy}%`;
  DOM.correctWordsDisplay.textContent = m.correctWords;
  DOM.wrongWordsDisplay.textContent = m.wrongWords;
  DOM.errorsDisplay.textContent = m.errors;
  DOM.timeTakenDisplay.textContent = formatTime(m.elapsedSeconds);

  if (state.started && !state.finished) {
    const remaining = Math.max(0, state.durationSeconds - m.elapsedSeconds);
    DOM.timeLeftDisplay.textContent = formatTime(remaining);

    const progressPercent = Math.max(
      0,
      Math.min(100, (remaining / state.durationSeconds) * 100),
    );
    DOM.timerProgressBar.style.width = `${progressPercent}%`;
  }
}

// ==========================================
// Timer & Test Lifecycle
// ==========================================
function startTest() {
  if (state.started) return;
  state.started = true;
  state.finished = false;
  state.startTime = Date.now();

  initAudio();
  DOM.statusTip.textContent =
    "Test in progress... Focus on accuracy and rhythm!";

  state.timerInterval = setInterval(() => {
    const elapsed = (Date.now() - state.startTime) / 1000;
    const remaining = state.durationSeconds - elapsed;

    updateLiveStats();

    if (remaining <= 0) {
      finishTest();
    }
  }, 100);
}

function finishTest() {
  if (state.finished) return;
  state.finished = true;
  clearInterval(state.timerInterval);

  DOM.wordInput.disabled = true;
  DOM.inputContainer.classList.remove("input-has-error");
  DOM.statusTip.textContent = "Test finished! Review your results below.";

  const m = calculateMetrics();

  DOM.modalNetWpm.textContent = m.netWpm;
  DOM.modalAccuracy.textContent = `${m.accuracy}%`;
  DOM.modalGrossWpm.textContent = m.grossWpm;
  DOM.modalCorrectWords.textContent = m.correctWords;
  DOM.modalWrongWords.textContent = m.wrongWords;
  DOM.modalKeystrokes.textContent = state.totalKeystrokes;
  DOM.modalKeystrokeDetails.textContent = `${state.correctChars} correct / ${state.wrongChars} typo`;
  DOM.modalErrors.textContent = m.errors;
  DOM.modalTimeTaken.textContent = formatTime(m.elapsedSeconds);

  const langName = state.lang === "hi" ? "हिन्दी" : "English";
  DOM.modalSubtitle.textContent = `Completed ${state.durationMinutes} min ${langName} passage practice.`;

  // Detect Personal Best & Log to History
  const prevPb = getPersonalBestWpm(state.lang);
  const isNewPb = m.netWpm > 0 && m.netWpm > prevPb;

  const sessionRecord = {
    id: Date.now().toString(),
    timestamp: Date.now(),
    dateFormatted: new Date().toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    lang: state.lang,
    langLabel: state.lang === "hi" ? "हिन्दी" : "English",
    passageTitle: state.currentPassageTitle || "Practice Passage",
    durationMinutes: state.durationMinutes,
    timeTaken: formatTime(m.elapsedSeconds),
    elapsedSeconds: Math.round(m.elapsedSeconds),
    netWpm: m.netWpm,
    grossWpm: m.grossWpm,
    accuracy: m.accuracy,
    correctWords: m.correctWords,
    wrongWords: m.wrongWords,
    errors: m.errors,
    keystrokes: state.totalKeystrokes,
    isPb: isNewPb,
  };

  saveHistoryRecord(sessionRecord);

  if (isNewPb && prevPb > 0) {
    DOM.pbBanner.classList.remove("hidden");
    DOM.pbBannerText.textContent = `You broke your previous ${state.lang === "hi" ? "Hindi" : "English"} speed record of ${prevPb} WPM with ${m.netWpm} WPM!`;
  } else if (isNewPb && prevPb === 0) {
    DOM.pbBanner.classList.remove("hidden");
    DOM.pbBannerText.textContent = `New personal benchmark established: ${m.netWpm} WPM!`;
  } else {
    DOM.pbBanner.classList.add("hidden");
  }

  playSound("complete");
  DOM.resultModal.classList.remove("hidden");
}

function resetTest() {
  clearInterval(state.timerInterval);

  state.lang = DOM.languageSelect.value;
  state.durationMinutes = Number(DOM.durationSelect.value);
  state.durationSeconds = state.durationMinutes * 60;

  // Select passage
  const list = PASSAGES[state.lang] || PASSAGES.en;
  let selectedIndex = DOM.passageSelect.value;
  if (selectedIndex === "random") {
    selectedIndex = Math.floor(Math.random() * list.length);
  } else {
    selectedIndex = Number(selectedIndex) || 0;
  }

  const passage = list[selectedIndex] || list[0];
  state.currentPassageTitle = passage.title || "Practice Passage";
  state.basePassageWords = passage.text.trim().split(/\s+/);

  // Populate words pool (loop passage if needed for long 5, 10, 15, 30 min tests)
  const targetWordsCount = Math.max(150, state.durationMinutes * 70);
  state.words = [];
  while (state.words.length < targetWordsCount) {
    state.words.push(...state.basePassageWords);
  }

  state.currentWordIndex = 0;
  state.started = false;
  state.finished = false;
  state.startTime = null;

  state.correctWords = 0;
  state.wrongWords = 0;
  state.correctChars = 0;
  state.wrongChars = 0;
  state.totalKeystrokes = 0;
  state.errors = 0;

  DOM.wordInput.disabled = false;
  DOM.wordInput.value = "";
  DOM.inputContainer.classList.remove("input-has-error");
  DOM.inputStatusIndicator.textContent = "✍";
  DOM.resultModal.classList.add("hidden");

  DOM.timeLeftDisplay.textContent = formatTime(state.durationSeconds);
  DOM.timerProgressBar.style.width = "100%";
  DOM.wpmDisplay.textContent = "0";
  DOM.accuracyDisplay.textContent = "100%";
  DOM.correctWordsDisplay.textContent = "0";
  DOM.wrongWordsDisplay.textContent = "0";
  DOM.errorsDisplay.textContent = "0";
  DOM.timeTakenDisplay.textContent = "00:00";
  DOM.statusTip.innerHTML = `Practicing: <strong>${escapeHtml(passage.title)}</strong>. Press <kbd>Space</kbd> to submit each word.`;

  renderInitialWords();
  DOM.wordInput.focus();
}

// ==========================================
// Word Submission Handler (Space Key)
// ==========================================
function submitCurrentWord() {
  if (state.finished) return;

  const typedWord = DOM.wordInput.value.trim();

  // Ignore empty space press (prevent accidentally skipping words)
  if (!typedWord) {
    DOM.wordInput.value = "";
    return;
  }

  const targetWord = state.words[state.currentWordIndex];
  const activeWordEl = DOM.wordsContainer.querySelector(
    `.word[data-index="${state.currentWordIndex}"]`,
  );

  const isMatch = typedWord === targetWord;

  // Count keystroke for typed characters plus space
  state.totalKeystrokes += typedWord.length + 1;

  if (activeWordEl) {
    // 1. Remove active state immediately
    activeWordEl.classList.remove("active");

    // 2. Remove any leftover caret element
    const oldCaret = activeWordEl.querySelector(".caret-cursor");
    if (oldCaret) oldCaret.remove();

    // 3. Re-render word cleanly WITHOUT any caret or extra spans
    const targetChars = splitChars(targetWord);

    if (isMatch) {
      activeWordEl.classList.remove("wrong");
      activeWordEl.classList.add("correct");
      activeWordEl.innerHTML = targetChars
        .map((ch) => `<span class="char correct">${escapeHtml(ch)}</span>`)
        .join("");

      state.correctWords++;
      state.correctChars += targetWord.length + 1;
      playSound("space");
    } else {
      activeWordEl.classList.remove("correct");
      activeWordEl.classList.add("wrong");

      const typedChars = splitChars(typedWord);
      let matchCount = 0;
      const maxLen = Math.max(targetChars.length, typedChars.length);
      let wordHtml = "";

      for (let i = 0; i < maxLen; i++) {
        if (i < targetChars.length) {
          const targetCh = targetChars[i];
          if (i < typedChars.length) {
            const typedCh = typedChars[i];
            if (typedCh === targetCh) {
              matchCount++;
              // Correct character in this position stays green
              wordHtml += `<span class="char correct">${escapeHtml(targetCh)}</span>`;
            } else {
              // Mistyped character turns red
              wordHtml += `<span class="char wrong">${escapeHtml(targetCh)}</span>`;
            }
          } else {
            // Missing/omitted character turns red
            wordHtml += `<span class="char missed">${escapeHtml(targetCh)}</span>`;
          }
        } else {
          // Extra character typed past target word length turns red
          const extraCh = typedChars[i];
          wordHtml += `<span class="char extra">${escapeHtml(extraCh)}</span>`;
        }
      }

      // Render with only the wrong characters colored red
      activeWordEl.innerHTML = wordHtml;

      state.wrongWords++;
      state.errors++;

      for (
        let i = 0;
        i < Math.min(targetChars.length, typedChars.length);
        i++
      ) {
        // matchCount already calculated above
      }
      state.correctChars += matchCount;
      state.wrongChars +=
        Math.max(targetChars.length, typedChars.length) - matchCount + 1;

      playSound("error");
    }
  }

  // Clear input field for next word
  DOM.wordInput.value = "";
  state.currentWordIndex++;

  // Append more words dynamically if nearing the end of pool
  if (state.currentWordIndex >= state.words.length - 20) {
    appendMoreWords(100);
  }

  // Move active state to next word
  const nextWordEl = DOM.wordsContainer.querySelector(
    `.word[data-index="${state.currentWordIndex}"]`,
  );
  if (nextWordEl) {
    nextWordEl.classList.add("active");
    updateActiveWordDisplay("");
    keepActiveWordInView(nextWordEl);
  }

  updateLiveStats();
}

// ==========================================
// Event Listeners
// ==========================================

// Keydown: Handles Space submission and Backspace locking
DOM.wordInput.addEventListener("keydown", (e) => {
  if (state.finished) return;

  // Start test on first character keystroke
  if (!state.started && e.key.length === 1) {
    startTest();
  }

  // Space Key: Submits the current word
  if (e.key === " " || e.code === "Space") {
    e.preventDefault();
    submitCurrentWord();
    return;
  }

  // Backspace Key: Work strictly within current word
  if (e.key === "Backspace") {
    if (DOM.wordInput.value.length === 0) {
      // Prevent deleting into previous word!
      e.preventDefault();
      return;
    }
  }
});

// Input: Live character checking within active word
DOM.wordInput.addEventListener("input", (e) => {
  if (state.finished) return;

  if (!state.started && DOM.wordInput.value.length > 0) {
    startTest();
  }

  // Handle space typed through IME / composition
  if (DOM.wordInput.value.endsWith(" ")) {
    submitCurrentWord();
    return;
  }

  const currentVal = DOM.wordInput.value;
  updateActiveWordDisplay(currentVal);

  if (e.inputType && e.inputType.startsWith("insert")) {
    playSound("keypress");
  }
});

// Global Keyboard Shortcuts (Esc to restart)
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    resetTest();
  }
});

// Click on Words Wrapper focuses the input box
DOM.wordsWrapper.addEventListener("click", () => {
  DOM.wordInput.focus();
});

// Sound Toggle
DOM.soundToggle.addEventListener("click", () => {
  state.soundEnabled = !state.soundEnabled;
  DOM.soundIcon.textContent = state.soundEnabled ? "🔊" : "🔇";
  DOM.soundToggle.style.opacity = state.soundEnabled ? "1" : "0.6";
  if (state.soundEnabled) {
    initAudio();
    playSound("space");
  }
});

// Fullscreen Toggle
function toggleFullscreen() {
  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function updateFullscreenUI() {
  const isFs = !!(
    document.fullscreenElement || document.webkitFullscreenElement
  );
  if (isFs) {
    if (DOM.fullscreenIcon) DOM.fullscreenIcon.textContent = "🗗";
    if (DOM.fullscreenLabel)
      DOM.fullscreenLabel.textContent = "Exit Fullscreen";
    document.body.classList.add("fullscreen-mode");
  } else {
    if (DOM.fullscreenIcon) DOM.fullscreenIcon.textContent = "⛶";
    if (DOM.fullscreenLabel) DOM.fullscreenLabel.textContent = "Fullscreen";
    document.body.classList.remove("fullscreen-mode");
  }
}

if (DOM.fullscreenToggle) {
  DOM.fullscreenToggle.addEventListener("click", toggleFullscreen);
}
document.addEventListener("fullscreenchange", updateFullscreenUI);
document.addEventListener("webkitfullscreenchange", updateFullscreenUI);

// Controls & Modal buttons
DOM.languageSelect.addEventListener("change", () => {
  state.lang = DOM.languageSelect.value;
  populatePassageDropdown();
  resetTest();
});

DOM.durationSelect.addEventListener("change", resetTest);
DOM.passageSelect.addEventListener("change", resetTest);
DOM.restartBtn.addEventListener("click", resetTest);
DOM.quickResetBtn.addEventListener("click", resetTest);
DOM.modalRestartBtn.addEventListener("click", resetTest);
DOM.modalCloseBtn.addEventListener("click", () => {
  DOM.resultModal.classList.add("hidden");
});

// Close modal when clicking on overlay backdrop
DOM.resultModal.addEventListener("click", (e) => {
  if (e.target === DOM.resultModal) {
    DOM.resultModal.classList.add("hidden");
  }
});

// ==========================================
// Authentication & Multi-User History System
// ==========================================
const ACCOUNTS_KEY = "typing_master_accounts_v1";
const SESSION_KEY = "typing_master_active_session_v1";
const GUEST_KEY = "typing_master_history_records_v1";

async function hashPassword(password) {
  try {
    if (window.crypto && window.crypto.subtle) {
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    }
  } catch (err) {
    console.warn("crypto.subtle unavailable, using fallback hash", err);
  }
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return "h_" + Math.abs(hash).toString(16);
}

function getStoredAccounts() {
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.error("Failed to read accounts from localStorage:", err);
    return {};
  }
}

function saveStoredAccounts(accounts) {
  try {
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
  } catch (err) {
    console.error("Failed to save accounts to localStorage:", err);
  }
}

function getActiveSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}

function setActiveSession(user) {
  try {
    if (user) {
      localStorage.setItem(
        SESSION_KEY,
        JSON.stringify({
          username: user.username,
          fullName: user.fullName || user.username,
        }),
      );
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  } catch (err) {
    console.error("Failed to update active session:", err);
  }
  updateAuthUI();
}

function updateAuthUI() {
  const session = getActiveSession();

  if (session && session.username) {
    // Logged In
    if (DOM.authOpenBtn) DOM.authOpenBtn.classList.add("hidden");
    if (DOM.userChip) {
      DOM.userChip.classList.remove("hidden");
      const initial = (session.fullName || session.username)
        .charAt(0)
        .toUpperCase();
      if (DOM.userAvatar) DOM.userAvatar.textContent = initial;
      if (DOM.userChipName)
        DOM.userChipName.textContent = session.fullName || session.username;
    }
    if (DOM.dropdownFullName)
      DOM.dropdownFullName.textContent = session.fullName;
    if (DOM.dropdownUsername)
      DOM.dropdownUsername.textContent = "@" + session.username;
  } else {
    // Guest (Logged Out)
    if (DOM.authOpenBtn) DOM.authOpenBtn.classList.remove("hidden");
    if (DOM.userChip) DOM.userChip.classList.add("hidden");
    if (DOM.userDropdown) DOM.userDropdown.classList.add("hidden");
  }
}

// User-Specific History Storage
function getStoredHistory() {
  const session = getActiveSession();
  if (session && session.username) {
    const accounts = getStoredAccounts();
    const user = accounts[session.username.toLowerCase()];
    return user && Array.isArray(user.history) ? user.history : [];
  }
  // Fallback to guest records
  try {
    const raw = localStorage.getItem(GUEST_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

function saveHistoryRecord(record) {
  const session = getActiveSession();
  if (session && session.username) {
    const accounts = getStoredAccounts();
    const username = session.username.toLowerCase();
    if (!accounts[username]) {
      accounts[username] = {
        username: session.username,
        fullName: session.fullName,
        history: [],
      };
    }
    if (!Array.isArray(accounts[username].history)) {
      accounts[username].history = [];
    }
    accounts[username].history.unshift(record);
    if (accounts[username].history.length > 250) {
      accounts[username].history.length = 250;
    }
    saveStoredAccounts(accounts);
  } else {
    // Guest storage
    try {
      const list = getStoredHistory();
      list.unshift(record);
      if (list.length > 200) list.length = 200;
      localStorage.setItem(GUEST_KEY, JSON.stringify(list));
    } catch (err) {
      console.error("Failed to save guest history:", err);
    }
  }
}

function getPersonalBestWpm(lang = null) {
  const list = getStoredHistory();
  const filtered = lang ? list.filter((item) => item.lang === lang) : list;
  if (!filtered || filtered.length === 0) return 0;
  return Math.max(...filtered.map((item) => item.netWpm || 0));
}

function clearStoredHistory() {
  const session = getActiveSession();
  const promptText = session
    ? `Are you sure you want to clear the typing history for @${session.username}? This cannot be undone.`
    : "Are you sure you want to clear your guest typing history? This cannot be undone.";

  if (confirm(promptText)) {
    if (session && session.username) {
      const accounts = getStoredAccounts();
      const username = session.username.toLowerCase();
      if (accounts[username]) {
        accounts[username].history = [];
        saveStoredAccounts(accounts);
      }
    } else {
      localStorage.removeItem(GUEST_KEY);
    }
    renderHistoryView(DOM.historyFilterLang.value);
  }
}

function exportHistoryToCSV() {
  const list = getStoredHistory();
  const session = getActiveSession();
  const userName = session ? session.username : "guest";

  if (list.length === 0) {
    alert("No typing history recorded yet to export.");
    return;
  }

  const headers = [
    "Date",
    "Language",
    "Passage",
    "Net WPM",
    "Gross WPM",
    "Accuracy (%)",
    "Correct Words",
    "Wrong Words",
    "Errors",
    "Total Keystrokes",
    "Time Taken",
    "User",
  ];

  const rows = list.map((item) => [
    `"${item.dateFormatted || ""}"`,
    `"${item.langLabel || item.lang}"`,
    `"${(item.passageTitle || "").replace(/"/g, '""')}"`,
    item.netWpm || 0,
    item.grossWpm || 0,
    item.accuracy || 0,
    item.correctWords || 0,
    item.wrongWords || 0,
    item.errors || 0,
    item.keystrokes || 0,
    `"${item.timeTaken || ""}"`,
    `"${userName}"`,
  ]);

  const csvContent =
    "data:text/csv;charset=utf-8,\uFEFF" +
    [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute(
    "download",
    `typing_history_${userName}_${new Date().toISOString().slice(0, 10)}.csv`,
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function renderHistoryView(filterLang = "all") {
  const allList = getStoredHistory();
  const session = getActiveSession();
  const filtered =
    filterLang === "all"
      ? allList
      : allList.filter((item) => item.lang === filterLang);

  if (DOM.historyBestWpmSub) {
    DOM.historyBestWpmSub.textContent = session
      ? `@${session.username}'s Best`
      : "Personal Record";
  }

  const count = filtered.length;
  if (count === 0) {
    DOM.historyTable.classList.add("hidden");
    DOM.historyEmptyState.classList.remove("hidden");
    DOM.historyBestWpm.innerHTML = `0 <span class="h-stat-unit">WPM</span>`;
    DOM.historyAvgWpm.innerHTML = `0 <span class="h-stat-unit">WPM</span>`;
    DOM.historyAvgAccuracy.textContent = `100%`;
    DOM.historyTotalTime.textContent = `0m`;
    DOM.historyTotalTests.textContent = `0`;
    return;
  }

  DOM.historyTable.classList.remove("hidden");
  DOM.historyEmptyState.classList.add("hidden");

  const bestWpm = Math.max(...filtered.map((i) => i.netWpm || 0));
  const totalWpm = filtered.reduce((acc, i) => acc + (i.netWpm || 0), 0);
  const avgWpm = Math.round(totalWpm / count);
  const totalAcc = filtered.reduce((acc, i) => acc + (i.accuracy || 0), 0);
  const avgAcc = Math.round(totalAcc / count);
  const totalSecs = filtered.reduce(
    (acc, i) => acc + (i.elapsedSeconds || i.durationMinutes * 60),
    0,
  );

  const totalMins = Math.round(totalSecs / 60);
  const timeFormatted =
    totalMins >= 60
      ? `${Math.floor(totalMins / 60)}h ${totalMins % 60}m`
      : `${totalMins}m`;

  DOM.historyBestWpm.innerHTML = `${bestWpm} <span class="h-stat-unit">WPM</span>`;
  DOM.historyAvgWpm.innerHTML = `${avgWpm} <span class="h-stat-unit">WPM</span>`;
  DOM.historyAvgAccuracy.textContent = `${avgAcc}%`;
  DOM.historyTotalTime.textContent = timeFormatted;
  DOM.historyTotalTests.textContent = count;

  DOM.historyTableBody.innerHTML = filtered
    .map((item) => {
      const isPb = item.netWpm === bestWpm && bestWpm > 0;
      const pbBadge = isPb ? `<span class="tag-pb">★ BEST</span>` : "";
      const langTag = `<span class="tag-lang ${item.lang}">${
        item.lang === "hi" ? "हिन्दी" : "EN"
      }</span>`;
      const accClass =
        item.accuracy >= 95
          ? "acc-high"
          : item.accuracy >= 85
            ? "acc-mid"
            : "acc-low";

      return `
        <tr class="${isPb ? "row-pb" : ""}">
          <td>${escapeHtml(item.dateFormatted || "")}</td>
          <td>${langTag}</td>
          <td title="${escapeHtml(item.passageTitle || "")}">${escapeHtml(
            item.passageTitle || "Practice",
          )}</td>
          <td class="speed-cell mono">${item.netWpm} ${pbBadge}</td>
          <td class="${accClass} mono">${item.accuracy}%</td>
          <td class="mono">${item.correctWords || 0} / <span class="text-danger">${
            item.wrongWords || 0
          }</span></td>
          <td class="mono text-danger">${item.errors || 0}</td>
          <td class="mono">${item.timeTaken || item.durationMinutes + "m"}</td>
        </tr>
      `;
    })
    .join("");
}

// User Profile & Dropdown
if (DOM.userChip) {
  DOM.userChip.addEventListener("click", (e) => {
    e.stopPropagation();
    if (DOM.userDropdown) {
      DOM.userDropdown.classList.toggle("hidden");
    }
  });
}

document.addEventListener("click", (e) => {
  if (
    DOM.userDropdown &&
    !DOM.userDropdown.contains(e.target) &&
    !DOM.userChip.contains(e.target)
  ) {
    DOM.userDropdown.classList.add("hidden");
  }
});

if (DOM.dropdownHistoryBtn) {
  DOM.dropdownHistoryBtn.addEventListener("click", () => {
    if (DOM.userDropdown) DOM.userDropdown.classList.add("hidden");
    renderHistoryView(DOM.historyFilterLang.value);
    DOM.historyModal.classList.remove("hidden");
  });
}

if (DOM.dropdownLogoutBtn) {
  DOM.dropdownLogoutBtn.addEventListener("click", () => {
    if (DOM.userDropdown) DOM.userDropdown.classList.add("hidden");
    const session = getActiveSession();
    const name = session ? session.fullName || session.username : "User";
    setActiveSession(null);
    DOM.statusTip.textContent = `Logged out successfully. You are now practicing in Guest Mode.`;
    playSound("space");
  });
}

// Auth Modal Controls
function showAuthModal(defaultTab = "login") {
  if (!DOM.authModal) return;
  switchAuthTab(defaultTab);
  clearAuthAlerts();
  DOM.authModal.classList.remove("hidden");
  if (defaultTab === "login" && DOM.loginUsername) {
    DOM.loginUsername.focus();
  } else if (DOM.signupFullName) {
    DOM.signupFullName.focus();
  }
}

function hideAuthModal() {
  if (DOM.authModal) DOM.authModal.classList.add("hidden");
  clearAuthAlerts();
}

function switchAuthTab(tab) {
  clearAuthAlerts();
  if (tab === "login") {
    if (DOM.tabLoginBtn) DOM.tabLoginBtn.classList.add("active");
    if (DOM.tabSignupBtn) DOM.tabSignupBtn.classList.remove("active");
    if (DOM.loginForm) DOM.loginForm.classList.remove("hidden");
    if (DOM.signupForm) DOM.signupForm.classList.add("hidden");
    if (DOM.authModalTitle) DOM.authModalTitle.textContent = "Welcome Back";
    if (DOM.authModalSubtitle)
      DOM.authModalSubtitle.textContent =
        "Log in to continue tracking your typing speed and accuracy.";
    if (DOM.loginUsername) DOM.loginUsername.focus();
  } else {
    if (DOM.tabSignupBtn) DOM.tabSignupBtn.classList.add("active");
    if (DOM.tabLoginBtn) DOM.tabLoginBtn.classList.remove("active");
    if (DOM.signupForm) DOM.signupForm.classList.remove("hidden");
    if (DOM.loginForm) DOM.loginForm.classList.add("hidden");
    if (DOM.authModalTitle) DOM.authModalTitle.textContent = "Create Account";
    if (DOM.authModalSubtitle)
      DOM.authModalSubtitle.textContent =
        "Register to store personal bests, history, and practice analytics.";
    if (DOM.signupFullName) DOM.signupFullName.focus();
  }
}

function clearAuthAlerts() {
  if (DOM.loginAlert) {
    DOM.loginAlert.textContent = "";
    DOM.loginAlert.classList.add("hidden");
  }
  if (DOM.signupAlert) {
    DOM.signupAlert.textContent = "";
    DOM.signupAlert.classList.add("hidden");
  }
}

function showAuthAlert(type, message, isSuccess = false) {
  const alertEl = type === "login" ? DOM.loginAlert : DOM.signupAlert;
  if (!alertEl) return;
  alertEl.textContent = message;
  alertEl.className = "auth-alert" + (isSuccess ? " alert-success" : "");
  alertEl.classList.remove("hidden");
}

if (DOM.authOpenBtn) {
  DOM.authOpenBtn.addEventListener("click", () => showAuthModal("login"));
}

if (DOM.authCloseBtn) {
  DOM.authCloseBtn.addEventListener("click", hideAuthModal);
}

if (DOM.authModal) {
  DOM.authModal.addEventListener("click", (e) => {
    if (e.target === DOM.authModal) hideAuthModal();
  });
}

if (DOM.tabLoginBtn) {
  DOM.tabLoginBtn.addEventListener("click", () => switchAuthTab("login"));
}

if (DOM.tabSignupBtn) {
  DOM.tabSignupBtn.addEventListener("click", () => switchAuthTab("signup"));
}

if (DOM.switchToSignupLink) {
  DOM.switchToSignupLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchAuthTab("signup");
  });
}

if (DOM.switchToLoginLink) {
  DOM.switchToLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchAuthTab("login");
  });
}

// Handle Login Submission
if (DOM.loginForm) {
  DOM.loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearAuthAlerts();

    const username = DOM.loginUsername.value.trim().toLowerCase();
    const password = DOM.loginPassword.value;

    if (!username || !password) {
      showAuthAlert("login", "Please enter both username and password.");
      return;
    }

    const accounts = getStoredAccounts();
    const user = accounts[username];

    if (!user) {
      showAuthAlert("login", "Username not found. Please check or sign up.");
      return;
    }

    const passwordHash = await hashPassword(password);
    if (user.passwordHash !== passwordHash) {
      showAuthAlert("login", "Incorrect password. Please try again.");
      return;
    }

    // Success
    setActiveSession({
      username: user.username,
      fullName: user.fullName || user.username,
    });

    hideAuthModal();
    DOM.loginForm.reset();
    DOM.statusTip.textContent = `Welcome back, ${user.fullName || user.username}! Your personal history is loaded.`;
    playSound("complete");
  });
}

// Handle Sign Up Submission
if (DOM.signupForm) {
  DOM.signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearAuthAlerts();

    const fullName = DOM.signupFullName.value.trim();
    const username = DOM.signupUsername.value.trim().toLowerCase();
    const password = DOM.signupPassword.value;
    const confirmPassword = DOM.signupConfirmPassword.value;

    if (!fullName || !username || !password) {
      showAuthAlert("signup", "Please fill in all required fields.");
      return;
    }

    if (!/^[a-z0-9_]{3,20}$/.test(username)) {
      showAuthAlert(
        "signup",
        "Username must be 3-20 characters long and contain only letters, numbers, or underscores.",
      );
      return;
    }

    if (password.length < 4) {
      showAuthAlert("signup", "Password must be at least 4 characters.");
      return;
    }

    if (password !== confirmPassword) {
      showAuthAlert("signup", "Passwords do not match.");
      return;
    }

    const accounts = getStoredAccounts();
    if (accounts[username]) {
      showAuthAlert(
        "signup",
        "This username is already taken. Please choose another.",
      );
      return;
    }

    const passwordHash = await hashPassword(password);
    accounts[username] = {
      username: username,
      fullName: fullName,
      passwordHash: passwordHash,
      createdAt: Date.now(),
      history: [],
    };

    saveStoredAccounts(accounts);
    setActiveSession({
      username: username,
      fullName: fullName,
    });

    hideAuthModal();
    DOM.signupForm.reset();
    DOM.statusTip.textContent = `Account created! Welcome, ${fullName}. Happy typing!`;
    playSound("complete");
  });
}

// History Modal Events
if (DOM.historyToggleBtn) {
  DOM.historyToggleBtn.addEventListener("click", () => {
    renderHistoryView(DOM.historyFilterLang.value);
    DOM.historyModal.classList.remove("hidden");
  });
}

if (DOM.historyCloseBtn) {
  DOM.historyCloseBtn.addEventListener("click", () => {
    DOM.historyModal.classList.add("hidden");
  });
}

if (DOM.modalViewHistoryBtn) {
  DOM.modalViewHistoryBtn.addEventListener("click", () => {
    DOM.resultModal.classList.add("hidden");
    renderHistoryView(DOM.historyFilterLang.value);
    DOM.historyModal.classList.remove("hidden");
  });
}

if (DOM.historyModal) {
  DOM.historyModal.addEventListener("click", (e) => {
    if (e.target === DOM.historyModal) {
      DOM.historyModal.classList.add("hidden");
    }
  });
}

if (DOM.historyFilterLang) {
  DOM.historyFilterLang.addEventListener("change", (e) => {
    renderHistoryView(e.target.value);
  });
}

if (DOM.exportHistoryBtn) {
  DOM.exportHistoryBtn.addEventListener("click", exportHistoryToCSV);
}

if (DOM.clearHistoryBtn) {
  DOM.clearHistoryBtn.addEventListener("click", clearStoredHistory);
}

// ==========================================
// Initialization on Page Load
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
  updateAuthUI();
  populatePassageDropdown();
  resetTest();
});
