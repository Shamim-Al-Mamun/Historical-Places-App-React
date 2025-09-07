import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Place = {
  id: string;
  name: string;
  description: string;
  visited: boolean;
  image: string;
};

const initialPlaces: Place[] = [
  {
    id: "1",
    name: "Great Wall of China",
    description: "The Great Wall of China is one of the most iconic and enduring symbols of Chinese civilization. Stretching over 13,000 miles across northern China, this monumental structure was built over several dynasties, primarily to protect Chinese states from invading nomadic tribes. Construction began as early as the 7th century BCE, but most of the existing wall was built during the Ming Dynasty (1368–1644). The wall is not a single continuous line but a series of walls, watchtowers, and fortifications interlinked to form a defensive barrier. The Great Wall traverses deserts, mountains, and plains, showcasing the ingenuity and resilience of ancient Chinese engineering. Beyond its military purpose, the wall also facilitated trade, communication, and cultural exchange along its route, playing a critical role in the development of Chinese civilization. Today, it stands as a UNESCO World Heritage Site and a global tourist attraction, drawing millions of visitors every year who walk its ancient pathways, climb its watchtowers, and admire breathtaking views of the surrounding landscapes. The Great Wall is not only a marvel of human engineering but also a symbol of the enduring strength, perseverance, and creativity of the Chinese people.",
    visited: false,
    image: "https://www.travelandleisure.com/thmb/b2-ee45Q1DEjuzOa51XLhJ7Rfmc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/great-wall-china-tourists-GWOC0417-10bddbf0783644c386178f62117b2132.jpg",
  },
  {
    id: "2",
    name: "Taj Mahal",
    description: "The Taj Mahal, located in Agra, India, is one of the most celebrated architectural masterpieces in the world. Commissioned in 1632 by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this majestic mausoleum exemplifies the pinnacle of Mughal architecture. Constructed primarily from white marble inlaid with precious and semi-precious stones, the Taj Mahal showcases intricate artistry, symmetry, and elegance that have captivated millions of visitors for centuries. Its expansive gardens, reflecting pools, and grand gateways complement the serene beauty of the central structure, creating an atmosphere of timeless romance and tranquility. Beyond its architectural grandeur, the Taj Mahal embodies the profound love and devotion of Shah Jahan for Mumtaz Mahal, making it an enduring symbol of eternal love. The monument also reflects the rich cultural heritage of India during the Mughal era, blending Persian, Islamic, and Indian artistic traditions. Recognized as a UNESCO World Heritage Site in 1983, the Taj Mahal continues to attract scholars, historians, and tourists worldwide who admire its historical significance, exquisite craftsmanship, and breathtaking aesthetics. Visiting the Taj Mahal offers a rare opportunity to experience one of the most iconic and romantic landmarks in human history.",
    visited: true,
    image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "3",
    name: "Pyramids of Giza",
    description: "The Pyramids of Giza, located on the outskirts of Cairo, Egypt, are some of the most remarkable and enduring monuments of the ancient world. Built over 4,500 years ago during the Old Kingdom period, these pyramids served as monumental tombs for pharaohs, including the Great Pyramid of Khufu, one of the Seven Wonders of the Ancient World. The construction of the pyramids required extraordinary ingenuity, organization, and labor, with massive limestone and granite blocks precisely cut and assembled to create structures of astonishing size and durability. The pyramids are accompanied by the iconic Sphinx, a colossal limestone statue with the body of a lion and the head of a pharaoh, symbolizing strength and wisdom. Beyond their role as burial sites, the pyramids reflect the religious beliefs, social organization, and advanced engineering skills of ancient Egyptian civilization. They were designed to ensure the pharaoh’s safe passage to the afterlife and to demonstrate the power and authority of Egypt’s rulers. Today, the Pyramids of Giza continue to fascinate historians, archaeologists, and tourists from around the globe. They stand as timeless testaments to human creativity, ambition, and the enduring legacy of one of history’s most remarkable civilizations.",
    visited: true,
    image: "https://www.historyhit.com/app/uploads/bis-images/5149974/Giza-788x537.jpg?x9647",
  },
  {
    id: "4",
    name: "Machu Picchu",
    description: "Machu Picchu is an ancient Incan citadel located high in the Andes Mountains of Peru, renowned for its breathtaking landscapes, architectural ingenuity, and historical significance. Built in the 15th century under the reign of Emperor Pachacuti, this extraordinary site was constructed using finely cut stone blocks that fit together without mortar, demonstrating the advanced engineering skills of the Inca civilization. Often referred to as the 'Lost City of the Incas,' Machu Picchu remained hidden from the outside world for centuries, rediscovered in 1911 by American historian Hiram Bingham. The site features a complex network of temples, plazas, agricultural terraces, and residential areas, reflecting both the spiritual and practical aspects of Incan society. Its strategic location atop a mountain ridge offers stunning panoramic views of the surrounding valleys and peaks, contributing to its mystical and awe-inspiring atmosphere. Machu Picchu also illustrates the Inca's deep understanding of astronomy, agriculture, and water management, evident in its precise layout and ingenious irrigation systems. Recognized as a UNESCO World Heritage Site and one of the New Seven Wonders of the World, Machu Picchu attracts millions of visitors annually who explore its terraces, stone structures, and ceremonial spaces. Beyond its historical and architectural significance, Machu Picchu serves as a symbol of Peru’s rich cultural heritage, resilience, and the enduring legacy of the Incan civilization, captivating travelers, historians, and adventurers worldwide.",
    visited: false,
    image: "https://www.machupicchu.org/wp-content/uploads/machu-picchu-facts-travel-information.jpg",
  },
  {
    id: "5",
    name: "Eiffel Tower",
    description: "The Eiffel Tower, located on the Champ de Mars in Paris, France, is one of the most recognizable landmarks in the world and a symbol of French culture and innovation. Designed by engineer Gustave Eiffel and completed in 1889 as the centerpiece of the Exposition Universelle (World's Fair), the tower was initially met with criticism from many prominent artists and intellectuals. However, it quickly became an architectural marvel admired for its iron lattice structure and elegant design. Standing at 1,083 feet tall, the Eiffel Tower was the tallest man-made structure in the world until the completion of New York's Chrysler Building in 1930. Today, it attracts millions of visitors annually who ascend its observation decks to enjoy panoramic views of Paris, the Seine River, and surrounding landmarks such as Notre-Dame Cathedral and the Louvre Museum. Beyond its visual appeal, the Eiffel Tower represents France’s industrial ingenuity and artistic sensibilities, combining functionality, durability, and aesthetic elegance. It has played a role in historical events, scientific experiments, and cultural moments, becoming an enduring icon of romance, creativity, and innovation. As a UNESCO World Heritage Site and one of the most photographed monuments globally, the Eiffel Tower continues to captivate tourists, photographers, and historians, offering a timeless experience of Parisian charm and architectural brilliance.",
    visited: false,
    image: "https://planetrail.co.uk/wp-content/uploads/Eiffel-Tower-Paris-resized.jpg"
  },
  {
    id: "6",
    name: "Statue of Liberty",
    description: "The Statue of Liberty, located on Liberty Island in New York Harbor, USA, is a global symbol of freedom, democracy, and hope. Designed by French sculptor Frédéric Auguste Bartholdi and gifted to the United States by France in 1886, the statue commemorates the enduring friendship between the two nations and celebrates the ideals of liberty and human rights. Standing at 305 feet from the base to the tip of the torch, the statue depicts a robed female figure representing Libertas, the Roman goddess of freedom, holding a torch aloft in her right hand and a tablet inscribed with the date of the American Declaration of Independence in her left hand. The statue’s crown features seven rays, symbolizing the seven continents and seas, while the broken chains at her feet signify liberation from oppression. The Statue of Liberty has welcomed millions of immigrants arriving by sea, serving as a beacon of hope and opportunity. Beyond its historical and symbolic significance, it is an architectural and engineering marvel, constructed with a wrought-iron framework designed by Gustave Eiffel, the same engineer behind the Eiffel Tower. Recognized as a UNESCO World Heritage Site, the statue continues to inspire visitors, historians, and activists worldwide, representing the universal quest for freedom, equality, and human dignity.",
    visited: false,
    image: "https://www.historyhit.com/app/uploads/bis-images/5150130/Statue-of-Liberty-e1632495792514-788x537.jpg?x96477"
  },
  {
    id: "7",
    name: "Colosseum",
    description: "The Colosseum, located in the heart of Rome, Italy, is one of the greatest architectural and engineering achievements of the ancient world. Commissioned by Emperor Vespasian around 70-72 AD and completed in 80 AD under Emperor Titus, this enormous amphitheater was used for gladiatorial contests, public spectacles, and other forms of entertainment for Roman citizens. Capable of seating around 50,000 spectators, the Colosseum features a sophisticated system of vaults, arches, and corridors designed for crowd management, as well as complex mechanisms for stage effects and trap doors. Beyond its role as a center of entertainment, the Colosseum also reflected the political power and social organization of the Roman Empire, serving as a tool for emperors to display wealth and authority. Over the centuries, the structure endured natural disasters, stone robbing, and neglect, yet its grandeur remains largely intact, symbolizing the ingenuity, resilience, and cultural sophistication of ancient Rome. Today, the Colosseum attracts millions of tourists from across the globe, serving as a UNESCO World Heritage Site and a testament to Roman history, architecture, and the enduring fascination with ancient civilizations. Visitors explore its corridors, arches, and underground chambers, gaining insight into a remarkable era of human achievement, spectacle, and societal complexity.",
    visited: false,
    image: "https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg"
  },
  {
    id: "8",
    name: "Christ the Redeemer",
    description: "Christ the Redeemer, located atop the Corcovado Mountain in Rio de Janeiro, Brazil, is one of the most iconic statues in the world, symbolizing Christianity, peace, and hospitality. Standing 98 feet tall with an arm span of 92 feet, this colossal statue was designed by Brazilian engineer Heitor da Silva Costa and sculpted by French artist Paul Landowski. Completed in 1931, Christ the Redeemer was constructed using reinforced concrete and soapstone, materials chosen for their durability and aesthetic appeal. The statue overlooks the city of Rio, providing breathtaking panoramic views of mountains, beaches, and urban landscapes, while serving as a spiritual and cultural landmark for locals and tourists alike. Recognized as a UNESCO World Heritage Site, Christ the Redeemer has become a symbol of Brazilian identity and a beacon of hope and unity. Its construction involved remarkable engineering feats, including transporting massive blocks up the steep mountain and assembling them with precision. Beyond its architectural and artistic significance, the statue represents themes of love, redemption, and inclusivity, attracting millions of visitors annually who marvel at its grandeur and the inspiring vistas it offers. Christ the Redeemer continues to stand as a testament to human creativity, faith, and the enduring pursuit of beauty and meaning in public art.",
    visited: false,
    image: "https://images.goway.com/production/styles/hero_s1_2xl/s3/hero/iStock-458615673_1.jpg.webp?VersionId=sX9xiAiPRB0L9qeqZ14Fzc8bgvdY23qo&itok=uAPm151w"
  },
  {
    id: "9",
    name: "Stonehenge",
    description: "Stonehenge, located in Wiltshire, England, is one of the most famous prehistoric monuments in the world, shrouded in mystery and steeped in history. Constructed in several stages between 3000 and 2000 BCE, this iconic stone circle consists of massive standing stones, some weighing over 25 tons, arranged in a precise and enigmatic pattern. Archaeologists believe Stonehenge served as a ceremonial site, astronomical observatory, and place of burial, reflecting the spiritual and cultural practices of Neolithic and Bronze Age societies. The monument's alignment with the solstices suggests an advanced understanding of astronomy by its builders, while the effort required to transport and erect the stones demonstrates remarkable ingenuity, collaboration, and engineering skill. Over the centuries, Stonehenge has inspired countless myths, legends, and research efforts, capturing the imagination of historians, archaeologists, and tourists alike. Recognized as a UNESCO World Heritage Site, it continues to be a symbol of ancient human achievement and spiritual connection to nature. Visitors from around the world come to marvel at its massive stones, ponder its original purpose, and experience the awe-inspiring energy of this prehistoric landscape. Stonehenge remains a powerful testament to human ingenuity, perseverance, and the enduring mystery of our ancestors’ relationship with the cosmos, culture, and community.",
    visited: false,
    image: "https://images.immediate.co.uk/production/volatile/sites/7/2020/04/GettyImages-105955888-f1865bb.jpg"
  },
  {
    id: "10",
    name: "Angkor Wat",
    description: "Angkor Wat, located near Siem Reap in Cambodia, is the largest religious monument in the world and a masterpiece of Khmer architecture. Built in the early 12th century under King Suryavarman II, it was originally dedicated to the Hindu god Vishnu before gradually transforming into a Buddhist temple complex. Angkor Wat showcases the ingenuity, artistry, and spiritual devotion of the Khmer Empire, featuring a central sanctuary surrounded by intricately carved galleries, towers, and courtyards. The temple is renowned for its extensive bas-reliefs depicting historical events, mythological stories, and daily life, reflecting the rich cultural heritage of the time. Its unique design combines elements of symbolic cosmology with practical engineering, incorporating moats, reservoirs, and precise alignments to represent the universe. As a UNESCO World Heritage Site, Angkor Wat attracts millions of visitors annually, offering insight into the grandeur, sophistication, and spirituality of one of Southeast Asia’s greatest civilizations. The temple’s enduring beauty, historical significance, and architectural brilliance make it not only a religious sanctuary but also a cultural icon that continues to inspire scholars, travelers, and artists worldwide.",
    visited: false,
    image: "https://images.openai.com/thumbnails/url/5PyxVXicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw42qEx2D6kwDinwS42IKKgqdTfPzTRySy30C3P1CPAtj_DzLinUdSrVLfUxyHNJd0z1dI3y9sszMQw0dlQrBgAf_ClT"
  },
  {
    id: "11",
    name: "Petra",
    description: "Petra, often called the 'Rose City' due to the color of its rock formations, is an ancient archaeological wonder located in southern Jordan. Carved directly into vibrant red, pink, and sandstone cliffs, Petra served as the capital of the Nabataean Kingdom from as early as the 4th century BCE. The city thrived as a strategic trading hub, linking Arabia, Egypt, and the Mediterranean, and became renowned for its sophisticated water management systems, including dams, cisterns, and aqueducts. Its most iconic monument, Al-Khazneh (the Treasury), exemplifies a stunning fusion of Hellenistic and Middle Eastern architectural styles, featuring elaborate columns, friezes, and sculptures. Petra also boasts a vast array of tombs, temples, and monumental facades, all carved into the rock with remarkable precision and artistry. Rediscovered in 1812 by Swiss explorer Johann Ludwig Burckhardt, Petra has since become a UNESCO World Heritage Site and one of the New Seven Wonders of the World. The site provides insight into the ingenuity, culture, and spiritual life of the Nabataeans, who mastered construction, trade, and survival in a harsh desert environment. Visitors today are captivated by the dramatic landscape, the intricacy of its rock-carved monuments, and the city’s mysterious aura, walking through the narrow gorge of the Siq to emerge into the breathtaking view of the Treasury. Petra remains a symbol of human creativity, endurance, and architectural genius, reflecting a civilization that skillfully harmonized urban development with nature’s dramatic landscapes.",
    visited: false,
    image: "https://images.openai.com/thumbnails/url/I4b4MXicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4MqKywKA6JdA2z9Ky0zI3ILXMLcDfLNo6vMndPcg40yohIzDLILQ0LTE3xSnU3KEjziSwySjeLKAhQKwYAx_UpJw"
  },
  {
      id: "12",
      name: "Sagrada Familia",
      description: "The Sagrada Familia, located in Barcelona, Spain, is a monumental Roman Catholic basilica designed by the visionary architect Antoni Gaudí. Construction began in 1882 and continues to this day, making it one of the longest-running architectural projects in history. Gaudí’s design integrates Gothic and Art Nouveau styles, resulting in an intricate and organic structure inspired by nature, with towering spires, elaborate facades, and breathtaking interior spaces filled with light and color. Each element of the basilica reflects symbolic and religious significance, from the Nativity and Passion facades to the ornate columns that resemble trees branching towards the ceiling. Despite Gaudí’s death in 1926, his innovative plans and models continue to guide construction, preserving his extraordinary vision. Recognized as a UNESCO World Heritage Site, the Sagrada Familia attracts millions of visitors annually, offering a spiritual, cultural, and architectural experience like no other. Beyond its religious importance, the basilica represents human creativity, perseverance, and dedication to craftsmanship. Visitors are captivated by the harmony between structure, light, and symbolism, marveling at the precision, artistry, and innovation evident throughout the church. The Sagrada Familia remains a testament to Gaudí’s genius and an enduring symbol of Barcelona’s cultural and artistic identity, inspiring architects, historians, and travelers from around the world.",
      visited: false,
      image: "https://images.openai.com/thumbnails/url/7N25oXicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw6KNC1N9gkwz_c0qgh1LsiMdK_wSvYL9_fN8nItSfT39tENSjfz9dD1D0tKi8qLd_TPcylIyvB2zbNUKwYAuq4ozA"
  },
  {
      id: "13",
      name: "Mount Fuji",
      description: "Mount Fuji, Japan’s highest mountain at 3,776 meters, is an iconic stratovolcano renowned for its near-perfect symmetrical cone and cultural significance. Situated on Honshu Island, it has been a sacred site for centuries, deeply ingrained in Japanese art, literature, religion, and folklore. Mount Fuji is considered a spiritual symbol of endurance, beauty, and harmony with nature, attracting pilgrims, artists, and tourists alike. Its snow-capped peak, especially during winter, has inspired countless paintings, woodblock prints, and poems, making it a central motif in Japanese culture. The surrounding Fuji Five Lakes region and the nearby Chureito Pagoda offer panoramic views that enhance the mountain’s majesty. During the climbing season, thousands ascend the mountain to witness the sunrise from the summit, an experience known as 'Goraiko.' Designated a UNESCO World Heritage Site, Mount Fuji is recognized both for its natural splendor and cultural importance. The mountain’s volcanic history, biodiversity, and role in shaping Japan’s spiritual and artistic identity make it an enduring symbol worldwide. Visitors to Mount Fuji can explore hiking trails, serene lakes, traditional villages, and sacred shrines, immersing themselves in the harmonious blend of nature, culture, and history. Its imposing yet serene presence continues to inspire awe, reflection, and reverence for generations past, present, and future.",
      visited: false,
      image: "https://www.japan-guide.com/g18/6901_01.jpg"
  },
  {
      id: "14",
      name: "Sydney Opera House",
      description: "The Sydney Opera House, located in Sydney, Australia, is one of the most recognizable performing arts centers in the world and an architectural masterpiece of the 20th century. Designed by Danish architect Jørn Utzon and completed in 1973, the building features a series of large, sail-like shells that create its distinctive roofline, set against the backdrop of Sydney Harbour. The Opera House hosts more than 1,500 performances annually, ranging from opera, ballet, and theatre to concerts and contemporary arts, making it a vibrant cultural hub. Beyond its functional significance, the structure is celebrated for its innovative engineering, acoustics, and integration with the natural surroundings. Recognized as a UNESCO World Heritage Site, the Sydney Opera House has become a symbol of Australia’s creativity, cultural identity, and international prestige. Visitors are drawn to its dramatic silhouette, elegant interior spaces, waterfront promenade, and the unique experience of attending world-class performances in an iconic setting. The Opera House exemplifies the fusion of art, architecture, and engineering, demonstrating human ingenuity, vision, and the power of imagination. Its cultural impact, aesthetic appeal, and global recognition make it not only a landmark but also a source of inspiration for artists, architects, and travelers worldwide.",
      visited: false,
      image: "https://i0.wp.com/dancemagazine.com.au/wp-content/uploads/2018/06/Sydney-Opera-House.jpg?fit=800%2C533&ssl=1"
  },
  {
      id: "15",
      name: "Big Ben",
      description: "Big Ben, the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London, United Kingdom, is one of the most iconic symbols of Britain. Completed in 1859, the clock tower, now officially called Elizabeth Tower, stands over 96 meters tall and houses the 13.5-ton bell known as Big Ben. Its Gothic Revival architecture, designed by Augustus Pugin, combines functionality with elegance, serving both as a timekeeping marvel and a symbol of British resilience, history, and governance. The clock mechanism was groundbreaking for its accuracy at the time, with four enormous clock faces visible from miles around. Big Ben has witnessed historical events, survived wartime bombings, and become a central feature in British cultural identity, featured in films, literature, and celebrations such as New Year’s Eve and Remembrance Day. Tourists and locals alike are drawn to its striking presence, historic significance, and the resonant chimes that have become synonymous with London. As part of the UNESCO World Heritage Site that includes the Palace of Westminster, Big Ben continues to inspire awe, connecting contemporary society to Britain’s rich architectural, political, and cultural heritage.",
      visited: false,
      image: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/this-day-in-history-05-31-1859-big-ben-in-london"
  },
  {
      id: "16",
      name: "Mount Rushmore",
      description: "Mount Rushmore National Memorial, located in the Black Hills of South Dakota, USA, is a monumental sculpture carved into granite, depicting the faces of four American presidents: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln. Created by sculptor Gutzon Borglum between 1927 and 1941, the memorial honors the ideals of freedom, democracy, and leadership that shaped the nation. Each presidential face is over 60 feet tall, showcasing the remarkable skill, precision, and engineering expertise required for such a massive project. Mount Rushmore serves not only as a tribute to American history and values but also as a cultural and educational landmark, attracting millions of visitors annually who explore its scenic surroundings, hiking trails, and interpretive centers. The site reflects the vision, ambition, and creativity of early 20th-century America, illustrating the power of art and architecture to inspire national pride and unity. Beyond its monumental scale, Mount Rushmore embodies the challenges and achievements of carving a lasting symbol into solid rock, symbolizing human determination, innovation, and artistic accomplishment. The memorial remains a celebrated icon of American heritage and a testament to the enduring legacy of the nation’s founding principles.",
      visited: false,
      image: "https://cdn.britannica.com/18/76118-050-DAE6E651/Morning-light-Mount-Rushmore-National-Memorial-South.jpg"
  },
  {
      id: "17",
      name: "Acropolis of Athens",
      description: "The Acropolis of Athens, situated on a rocky hill above the city of Athens, Greece, is one of the most significant ancient monuments in the world, reflecting the artistic and architectural achievements of classical Greece. Dominated by the Parthenon, a temple dedicated to the goddess Athena, the Acropolis also features the Erechtheion, the Propylaea, and the Temple of Athena Nike. Built primarily in the 5th century BCE under the leadership of Pericles, these structures showcase the principles of harmony, proportion, and precision that define Greek architecture. The Acropolis served both religious and political functions, symbolizing the power, culture, and intellectual achievements of the Athenian city-state. Over the centuries, it endured invasions, wars, and natural disasters, yet its monuments remain remarkably preserved, offering insight into ancient Greek civilization, art, and society. Recognized as a UNESCO World Heritage Site, the Acropolis attracts scholars, historians, and tourists worldwide who admire its enduring beauty, historical significance, and cultural impact. Visitors can explore the ancient structures, learn about classical architecture and mythology, and experience breathtaking views of Athens from the elevated site. The Acropolis stands as a testament to human creativity, innovation, and the timeless legacy of ancient Greece, inspiring generations with its elegance, artistry, and enduring symbolism.",
      visited: false,
      image: "https://www.athenstours365.com/wp-content/themes/yootheme/cache/49/acropolis-49ad124b.jpeg"
  },
  {
      id: "18",
      name: "Neuschwanstein Castle",
      description: "Neuschwanstein Castle, located in Bavaria, Germany, is a 19th-century Romanesque Revival palace built by King Ludwig II. Perched on a rugged hill above the village of Hohenschwangau, it was intended as a personal refuge for the king and as a tribute to composer Richard Wagner. The castle’s picturesque architecture, featuring soaring towers, turrets, and ornate interiors adorned with murals depicting Germanic legends, has inspired countless works of art, literature, and film, including Disney’s Sleeping Beauty Castle. Construction began in 1869, but the castle was never fully completed. Neuschwanstein combines medieval-inspired romantic architecture with modern innovations of the time, including central heating and running water. Recognized as a UNESCO World Heritage Site, the castle attracts millions of visitors annually who explore its elaborate rooms, grand halls, and breathtaking alpine surroundings. Neuschwanstein Castle is a symbol of idealism, fantasy, and human creativity, reflecting King Ludwig II’s artistic vision and romantic sensibilities. Its enduring appeal lies in the harmonious blend of architectural splendor, historical intrigue, and natural beauty, making it one of Europe’s most visited and photographed landmarks.",
      visited: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GWMP5gK0FwjlybX3u9O2I-A67rs3VLIPiQ&s"
  },
  {
      id: "19",
      name: "Golden Gate Bridge",
      description: "The Golden Gate Bridge, spanning the Golden Gate Strait in San Francisco, California, USA, is an engineering marvel and an internationally recognized symbol of the city. Completed in 1937, it was the longest and tallest suspension bridge of its time, stretching 2.7 kilometers with towers rising 227 meters above the water. Designed by engineer Joseph Strauss, the bridge features Art Deco elements, a striking International Orange color, and innovative suspension techniques that allow it to withstand strong winds, earthquakes, and ocean currents. Beyond its functional role in connecting San Francisco to Marin County, the Golden Gate Bridge has become an iconic landmark, celebrated for its aesthetic elegance and dramatic setting against the Pacific Ocean and surrounding hills. Millions of tourists, photographers, and locals are drawn to its panoramic views, walking paths, and observation points. As a symbol of human ingenuity, determination, and architectural beauty, the Golden Gate Bridge continues to inspire awe, representing the spirit of innovation and resilience. Recognized as an engineering landmark, it also reflects the historical, cultural, and economic growth of the San Francisco Bay Area, serving as a testament to 20th-century design and American ambition.",
      visited: false,
      image: "https://cdn.britannica.com/95/94195-050-FCBF777E/Golden-Gate-Bridge-San-Francisco.jpg"
  },
  {
    id: "20",
    name: "Blue Mosque",
    description: "The Blue Mosque, officially known as Sultan Ahmed Mosque, is a historic and architectural masterpiece located in Istanbul, Turkey. Built between 1609 and 1616 during the rule of Sultan Ahmed I, it is renowned for its striking blue İznik tile interior, six minarets, and grand domes that create an awe-inspiring silhouette against the Istanbul skyline. Serving as an active place of worship as well as a popular tourist attraction, the mosque blends Ottoman and Byzantine architectural elements, harmonizing intricate calligraphy, stained glass, and detailed tile work. Its spacious courtyard, cascading domes, and elegant interior designs reflect both artistic excellence and spiritual significance. Recognized as a symbol of Istanbul’s cultural and religious heritage, the Blue Mosque attracts millions of visitors annually, who admire its symmetry, grandeur, and serenity. The mosque exemplifies the pinnacle of Ottoman architecture and engineering, standing as a testament to the skill, devotion, and creativity of the artisans and architects of the period. Visitors are enchanted by the peaceful ambiance, beautiful light filtering through windows, and the harmonious blend of art and faith, making it one of the most visited and photographed landmarks in the world.",
    visited: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3Go3XTZiLOw-BNejycNe7BNEPXf5ZVBmAA&s"
  },
  {
      id: "21",
      name: "Burj Khalifa",
      description: "The Burj Khalifa in Dubai, United Arab Emirates, is the tallest building in the world, standing at 828 meters (2,717 feet). Completed in 2010, this iconic skyscraper represents a fusion of modern engineering, innovative design, and architectural ambition. Designed by Adrian Smith of Skidmore, Owings & Merrill, Burj Khalifa features a sleek, tapering design inspired by Islamic architecture, with a reinforced concrete structure and cladding of reflective glass. It houses residential spaces, corporate offices, luxury hotels, and observation decks offering panoramic views of Dubai and the Persian Gulf. Burj Khalifa symbolizes Dubai’s rapid growth, technological advancement, and global prominence, attracting millions of visitors and serving as a benchmark for skyscraper engineering worldwide. Beyond its impressive height, the building incorporates sustainable design elements, advanced elevators, and sophisticated lighting systems. Visitors are captivated by the breathtaking views, luxurious interiors, and architectural elegance, making the Burj Khalifa not only a landmark but also a testament to human ingenuity, ambition, and the limitless possibilities of modern construction.",
      visited: false,
      image: "https://spidubai.ae/wp-content/uploads/2024/05/shutterstock_2344349907-scaled.jpg"
  },
  {
      id: "22",
      name: "Niagara Falls",
      description: "Niagara Falls, straddling the border between the United States and Canada, is one of the world’s most famous and awe-inspiring natural wonders. Comprising three waterfalls—the Horseshoe Falls, the American Falls, and the Bridal Veil Falls—Niagara Falls collectively has a vertical drop of over 50 meters, with a combined flow rate exceeding 2,800 cubic meters per second. The falls have been formed over thousands of years through glacial and river erosion, creating a breathtaking spectacle of water, mist, and thunderous sound. Niagara Falls is renowned for its natural beauty, recreational opportunities, and hydroelectric power generation. Millions of tourists visit each year to experience boat tours like the Maid of the Mist, observation decks, and surrounding parks. Beyond its scenic allure, the falls have historical and cultural significance, inspiring artists, writers, and explorers. Niagara Falls symbolizes the raw power and majesty of nature while offering a unique blend of adventure, tourism, and natural preservation. Visitors can explore hiking trails, lookout points, and the vibrant surrounding towns, immersing themselves in one of the planet’s most iconic and picturesque landscapes.",
      visited: false,
      image: "https://aarp-content.brightspotcdn.com/dims4/default/7bb2bba/2147483647/strip/true/crop/2000x1100+0+116/resize/876x482!/quality/90/?url=http%3A%2F%2Faarp-brightspot.s3.amazonaws.com%2Fcontent%2Fe3%2Fc1%2F7076b96e4ceba385bb362f2f8ed3%2Freza-hoque-hka-x8pr8nc-unsplash-2000px.jpg"
  },
  {
      id: "23",
      name: "Banff National Park",
      description: "Banff National Park, located in Alberta, Canada, is the country’s oldest national park and a UNESCO World Heritage Site renowned for its stunning natural landscapes. Established in 1885, the park encompasses towering Rocky Mountains, turquoise glacial lakes, dense forests, and diverse wildlife, including bears, elk, and eagles. Iconic locations such as Lake Louise, Moraine Lake, and the Banff townsite attract visitors for hiking, skiing, and camping experiences. The park offers breathtaking scenery year-round, with vibrant autumn colors, snowy winter landscapes, and pristine summer vistas. Banff National Park represents conservation, outdoor recreation, and the preservation of Canada’s natural heritage. Its scenic drives, hiking trails, and recreational activities provide a perfect blend of adventure, tranquility, and education, making it one of the world’s premier destinations for nature enthusiasts, photographers, and travelers seeking both relaxation and exploration in a pristine environment.",
      visited: false,
      image: "https://inspiredroutes.com/wp-content/uploads/2023/08/banff-in-summer-728x546.jpg.webp"
  },
  {
      id: "24",
      name: "Table Mountain",
      description: "Table Mountain, located in Cape Town, South Africa, is an iconic flat-topped mountain overlooking the city and the Atlantic Ocean. With its unique plateau shape, rising 1,086 meters above sea level, Table Mountain is a defining natural landmark and a symbol of Cape Town. The mountain hosts a rich biodiversity, including the unique fynbos vegetation, endemic plant species, and diverse wildlife. Visitors can explore hiking trails, the popular Table Mountain Aerial Cableway, and viewpoints offering panoramic vistas of the city, coastline, and surrounding mountains. Table Mountain is part of the Cape Floristic Region UNESCO World Heritage Site and plays a significant role in tourism, ecology, and cultural identity. Its dramatic landscapes, geological formations, and natural beauty attract photographers, hikers, and nature enthusiasts worldwide. The mountain represents both a recreational destination and a symbol of South Africa’s diverse natural heritage, blending adventure, conservation, and awe-inspiring scenery.",
      visited: false,
      image: "https://cdn.britannica.com/41/75841-050-FAAE44F0/Table-Mountain-Cape-Town-Western-Bay-South.jpg"
  },
  {
      id: "25",
      name: "Galápagos Islands",
      description: "The Galápagos Islands, an archipelago of volcanic islands in Ecuador, are renowned for their unique biodiversity, endemic species, and significance in the study of evolution. Located in the Pacific Ocean, the islands were made famous by Charles Darwin, whose observations of finches, tortoises, and marine life contributed to his theory of natural selection. The archipelago hosts diverse ecosystems, including pristine beaches, rocky cliffs, and coral reefs, supporting species such as giant tortoises, marine iguanas, blue-footed boobies, and penguins. Galápagos Islands are a UNESCO World Heritage Site, protected to preserve their fragile ecosystems and wildlife. Visitors can explore the islands through guided tours, snorkeling, diving, and wildlife observation, experiencing nature in a largely untouched environment. The islands represent a living laboratory of evolution, ecological conservation, and natural wonder, inspiring scientists, environmentalists, and travelers with their beauty, rarity, and ecological significance.",
      visited: false,
      image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Galapagos-islands.jpg"
  },
  {
      id: "26",
      name: "Moai Statues of Easter Island",
      description: "The Moai Statues of Easter Island, known as Rapa Nui, are monumental monolithic sculptures created by the indigenous Polynesian people between 1250 and 1500 CE. Located in the southeastern Pacific Ocean, the statues are carved from volcanic tuff and depict oversized human heads, with some figures standing over 10 meters tall. The Moai were constructed to honor ancestors and serve as symbols of authority, spiritual power, and societal organization. Easter Island’s remote location and unique cultural heritage make the Moai an archaeological and anthropological treasure, reflecting human ingenuity, craftsmanship, and the complex social structures of the Rapa Nui civilization. Today, the statues are protected as UNESCO World Heritage Sites, attracting researchers, historians, and tourists worldwide. Visitors are captivated by the scale, artistry, and mystery of the Moai, exploring the ceremonial platforms (ahu), quarry sites, and the surrounding landscapes. The Moai Statues of Easter Island stand as enduring symbols of human creativity, cultural identity, and the remarkable achievements of a small island society.",
      visited: false,
      image: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/easter-island-gettyimages-89175284?_a=BAVAZGDX0"
  },
  {
      id: "27",
      name: "Louvre Museum",
      description: "The Louvre Museum in Paris, France, is the world’s largest and most visited art museum, housing over 380,000 objects spanning prehistory to the 21st century. Established in 1793, the Louvre features iconic masterpieces such as the Mona Lisa, Venus de Milo, and Liberty Leading the People. The museum’s historic architecture, including the glass pyramid entrance designed by I. M. Pei, harmonizes with the former royal palace, blending history and modernity. Visitors can explore extensive collections of paintings, sculptures, decorative arts, and antiquities, experiencing centuries of human creativity, culture, and innovation. The Louvre serves as a global cultural hub, promoting art education, preservation, and inspiration. Its vast galleries, historical significance, and world-class exhibitions attract millions annually, making it a symbol of human artistic achievement and a must-visit destination for art enthusiasts, historians, and tourists from around the world.",
      visited: false,
      image: "https://acis.com/wp-content/uploads/2013/12/120613_blog_featured.jpg"
  },
  {
      id: "28",
      name: "Hagia Sophia",
      description: "Hagia Sophia, located in Istanbul, Turkey, is a historic architectural marvel that has served as a cathedral, mosque, and museum over its 1,500-year history. Built in 537 CE by Byzantine Emperor Justinian I, it is renowned for its massive dome, exquisite mosaics, and fusion of Christian and Islamic architectural elements. The structure reflects advanced engineering, artistic innovation, and religious significance, symbolizing the cultural and spiritual heritage of both the Byzantine and Ottoman empires. As a UNESCO World Heritage Site, Hagia Sophia attracts millions of visitors annually, who admire its grandeur, intricate decoration, and historical importance. The monument embodies a convergence of civilizations, artistic styles, and religious traditions, offering insights into history, architecture, and human creativity. Hagia Sophia continues to inspire architects, historians, and travelers with its monumental scale, aesthetic elegance, and enduring cultural impact.",
      visited: false,
      image: "https://smarthistory.org/wp-content/uploads/2021/10/HagiaSophia-1.jpg"
  }
];

const placesSlice = createSlice({
  name: "places",
  initialState: initialPlaces,
  reducers: {
    toggleVisited: (state, action: PayloadAction<string>) => {
      const place = state.find((p) => p.id === action.payload);
      if (place) place.visited = !place.visited;
    },
  },
});

export const { toggleVisited } = placesSlice.actions;

export const store = configureStore({
  reducer: {
    places: placesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
