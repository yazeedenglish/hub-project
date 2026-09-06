/* =========================================================
   YAZEED ENGLISH — STEP MOCK TEST
   ========================================================= */


/* =========================================================
   LISTENING
   5 AUDIO FILES × 4 QUESTIONS = 20
   ========================================================= */

   const BUNNY_AUDIO_CDN = "https://vz-c82b2256-40f.b-cdn.net/";

function getAudioUrl(audio) {

    if (!audio) return "";

    // If it's already a complete URL
    if (audio.startsWith("http")) {
        return audio;
    }

    // If it's a local audio file
    if (audio.startsWith("audio/")) {
        return audio;
    }

    // Otherwise, treat it as a Bunny Audio ID
    return BUNNY_AUDIO_CDN + audio + "/play_720p.mp4";
}

 // ========================================================= */


const listeningData = [

    {
    title: "Listening Passage 1", // Daily Schedule // Beginner
    audio: "7057a30a-2caa-4cbb-85ac-de0621cb239b",

    questions: [

        {
            text: "What time does the man get up?",
            options: [
                "at 6:00 a.m",
                "at 5:00 a.m",
                "at 7:00 a.m",
                "at 8:00 a.m"
            ],
            answer: 1
        },

        {
            text: "What time does he get to work?",
            options: [
                "at 9:00 a.m",
                "at 8:00 a.m",
                "at 7:00 a.m",
                "at 6:00 a.m"
            ],
            answer: 1
        },

        {
            text: "What does he do with his family around 6:30 p.m?",
            options: [
                "They eat dinner",
                "They play games",
                "They read books together",
                "They play football"
            ],
            answer: 0
        },

        {
            text: "What do the man and his wife do after the kids go to bed?",
            options: [
                "They watch TV",
                "They play games",
                "They clean the house",
                "They work in the garden"
            ],
            answer: 0
        }

    ]
},


    {
    title: "Listening Passage 2",  // Washer and dryer // Intermediate // Delete last 2 seconds
    audio: "191f8b95-6a80-4449-a8c7-34047dcf7714",

    questions: [

        {
            text: "What thing caused a mess in the dryer?",
            options: [
                "colored paper",
                "a pen",
                "chewing gum",
                "a piece of clothing"
            ],
            answer: 1
        },

        {
            text: "What clothing did the woman have in the dryer?",
            options: [
                "sweaters",
                "jeans",
                "shorts",
                "jackets"
            ],
            answer: 2
        },

        {
            text: "Who does the man need to call?",
            options: [
                "his office",
                "his friends",
                "a repair company",
                "his wife"
            ],
            answer: 1
        },

        {
            text: "The man is going to get new clothes for his wife _____.",
            options: [
                "from his sister",
                "at a store",
                "at home",
                "from his friend"
            ],
            answer: 1
        }

    ]
},


    {
    title: "Listening Passage 3", // Detective Agency // Intermediate
    audio: "c0ddd846-751c-4b40-a629-f6139396395f",

    questions: [

        {
            text: "What is the name of the detective agency?",
            options: [
                "Jones Detective Agency",
                "Johnson Detective Agency",
                "Jordon Detective Agency",
                "Jackson Detective Agency"
            ],
            answer: 0
        },

        {
            text: "The man is having a problem with his _____.",
            options: [
                "boss",
                "girlfriend",
                "roommate",
                "neighbor"
            ],
            answer: 2
        },

        {
            text: "The man is complaining about missing _____.",
            options: [
                "clothing",
                "food",
                "money",
                "computer"
            ],
            answer: 1
        },

        {
            text: "What suggestion does the receptionist give the man regarding his problem?",
            options: [
                "He should seek out some counseling for advice",
                "He ought to contact the police to discuss the issues",
                "He could move to a new place",
                "He should talk to his parents about the problem"
            ],
            answer: 0
        }

    ]
},


    {
    title: "Listening Passage 4", // Drama Free Rental // Intermediate
    audio: "3ddd1686-bbd0-4987-abac-ad7bbb5777b7",

    questions: [

        {
            text: "What did James hear at 1 a.m.?",
            options: [
                "Loud music",
                "People arguing",
                "A car alarm",
                "Someone knocking on a door"
            ],
            answer: 0
        },

        {
            text: "Why did someone leave a note on James’s windshield?",
            options: [
                "His car lights were on",
                "He blocked a driveway",
                "He parked too far from the curb",
                "He had left the windows open"
            ],
            answer: 2
        },

        {
            text: "What does James want to improve outside his apartment?",
            options: [
                "Keeping his car clean",
                "Finding a parking space",
                "Parking his car",
                "Driving at night"
            ],
            answer: 2
        },

        {
            text: "Why didn’t James go downstairs to talk to the neighbors?",
            options: [
                "He didn’t know which apartment it was",
                "He didn’t want to create neighborhood drama",
                "He was too tired to talk to the neighbors",
                "He thought the neighbors were not at home"
            ],
            answer: 1
        }

    ]
},


    {
    title: "Listening Passage 5", // A Free Cell Phone // Difficult
    audio: "e2a23aea-a776-4126-85a7-b9b22a94cc0f",

    questions: [

        {
            text: "The girl needs a phone to _____.",
            options: [
                "call family in case of an emergency",
                "make cheaper calls with it",
                "use it to check her email",
                "stay in contact with her friends"
            ],
            answer: 0
        },

        {
            text: "When customers buy a smartphone, they receive _____.",
            options: [
                "other smartphone accessories",
                "a smartphone adapter for the car",
                "money back for buying the phone",
                "a discount on their monthly service"
            ],
            answer: 2
        },

        {
            text: "What is one major feature of the calling plan?",
            options: [
                "1000 free weekday minutes",
                "unlimited weekday minutes",
                "1000 anytime minutes",
                "unlimited calls to family members"
            ],
            answer: 0
        },

        {
            text: "What is the term of service for this plan?",
            options: [
                "3 months",
                "6 months",
                "9 months",
                "12 months"
            ],
            answer: 1
        }

    ]
}

];


/* =========================================================
   READING
   5 PASSAGES × 8 QUESTIONS = 40
   ========================================================= */

const readingData = [

    {
        title: "Fish", // 4 Questions

        text: `(1) Fish are cold-blooded vertebrates that live in water. They differ greatly in size, shape, color and habits. Some fish may look like worms, while others may resemble rocks. All the colors of the rainbow can be found in fish. Some fish are very brightly colored while others can be very dull.

(2) Fish can live in almost any conditions of water. They can live in the freezing waters of Antarctica, hot jungle streams, lakes and fast flowing mountain rivers. Nearly all fish get their oxygen from water. Although we cannot see it, water does contain oxygen. To get this oxygen, the fish forces water through its gills. The gills absorb oxygen and release carbon dioxide into the water which then passes out through the gills.

(3) Scientists have found over 21,000 different kinds of fish. They continue to find more species each year. Scientists who study fish are called ichthyologists. Fish are truly amazing animals to study and observe`,

        questions: [

            {
                text: "What is the main idea of the passage?",
                options: [
                    "the types of fish",
                    "the colors of fish",
                    "fish are fascinating animals",
                    "how fish live and play in water"
                ],
                answer: 2
            },

            {
                text: "The word resemble in Paragraph (1) is closest in meaning to ...............",
                options: [
                    "differ from",
                    "look like",
                    "live in",
                    "move"
                ],
                answer: 1
            },

            {
                text: "The word it in Paragraph (2) refers to ……….",
                options: [
                    "fish",
                    "water",
                    "a river",
                    "oxygen"
                ],
                answer: 1
            },

            {
                text: "According to Paragraph (3), it is expected that in the new Norma the scientists will find more …………",
                options: [
                    "fish",
                    "animals",
                    "kinds of animals",
                    "species of animals"
                ],
                answer: 3
            }

        ]
    },

    {
        title: "Swiss Canal", // 4 Questions

        text: `(1) In 1859, thanks to the efforts of a French diplomat and politician, Ferdinand de
Lesseps, work started on the Suez Canal. Though he was not an engineer, he had
been haunted by the idea of the canal since his youth. De Lesseps spent a decade
supervising the massive operation that involved the excavation of about 97 million
cubic yards of earth.

(2) De Lesseps first established an artificial harbor at Port Said as a base and had a
canal dug from the Nile to the Suez to provide fresh-water for the 20.000 laborers.

(3) The official opening was on November 17, 1869. Representatives of almost every
European royal family attended the inauguration celebration. Ships from France,
Russia, Austria, Italy ,Britain, and the United States sailed through the canal and
de Lesseps’ dream was finally a reality. The total cost of the project was an
estimated $ 105 million, which at the time was a lot of money. This was more than
twice the original estimate, but it was a tiny sum compared with the value of the
canal to world trade.`,

        questions: [

            {
                text: "According to Paragraph (1), De Lesseps was everything EXCEPT---",
                options: [
                    "an engineer",
                    "a diplomat",
                    "a politician",
                    "a Frenchman"
                ],
                answer: 0
            },

            {
                text: "According to paragraph (2), what was Port Said?",
                options: [
                    "a Mediterranean port",
                    "a useful natural harbor",
                    "a large new city",
                    "a man-made harbor"
                ],
                answer: 3
            },

            {
                text: "What does paragraph (3), say about building the Suez Canal compared to modern standards ?",
                options: [
                    "It was very important politically.",
                    "It was extremely inexpensive .",
                    "It was very time-consuming.",
                    "It was extremely inefficient"
                ],
                answer: 2
            },

            {
                text: "According to Paragraph (3), to whom was building the canal the most important ?",
                options: [
                    "the Arab world",
                    "the Europeans",
                    "the Egyptians",
                    "the royalty"
                ],
                answer: 1
            }

        ]
    },

    {
        title: "World War II", // 5 Questions

        text: `(1) Modern wars bring death and destruction wherever they occur. Sophisticated weapons have been developed that can wipe out a whole city. The most destructive war in history is World War II, fought from 1939 to 1945. World War II involved gigantic struggles not only in Europe but in Asia, Africa, and the Pacific as well. More than 25 million military personnel and 30 million civilians were killed in the war. Its conduct strained the economic capabilities of the major nations and left many countries on the edge of collapse. World War II cost more than any three previous wars combined.

(2) Disasters continued even after the war ended. Damage to communication networks disrupted the transport of raw materials and finished products. The irregularity of supplies to industry and the destruction inflicted on the production apparatus resulted in a considerable number of temporary layoffs. Even in the victorious countries. food rationing continued well after the end of the war. Crime and law-breaking increased. The simultaneous reconstruction of accommodation, industry and the transport infrastructure stifled national economies. Under these conditions, people were first and foremost preoccupied with the restrictions affecting everyday life and often had difficulty in thinking about their long-term future. The shortage of coal in the very hard winter of 1946-1947 led to widespread strikes and mass demonstrations.`,

        questions: [

            {
                text: "The word occur in Paragraph (1) is closest in meaning to …..",
                options: [
                    "go",
                    "fight",
                    "stand",
                    "happen"
                ],
                answer: 3
            },

            {
                text: "Why can some weapons destroy a whole city",
                options: [
                    "Because modern weapons are more advanced",
                    "Because nowadays cities are smaller",
                    "Because modern weapons are bigger",
                    "Because delivery systems are faster"
                ],
                answer: 0
            },

            {
                text: "According to Paragraph (1), World War II started in……….. .",
                options: [
                    "1936",
                    "1939",
                    "1945",
                    "1954"
                ],
                answer: 1
            },

            {
                text: "Compared to other wars, which of the following statements is true concerning World War ll ?",
                options: [
                    "Fewer cities were destroyed",
                    "More destruction happened",
                    "Less destruction happened",
                    "Fewer people died"
                ],
                answer: 1
            },

            {
                text: "When World War ll ended ………..",
                options: [
                    "life went back to normal",
                    "life became simpler",
                    "disasters remained",
                    "disasters stopped"
                ],
                answer: 2
            }

        ]
    },

    {
        title: "Device Driver", // 4 Questions

        text: `(1) A device driver is software that helps a peripheral device establish communication with a computer. This type of software is used by printers, monitors, graphics cards, sound cards, and modems. Once installed, a device driver usually runs in the background without opening a window on the screen. Suppose you connect a new printer to your computer. You might also have to install a printer driver or select a preinstalled driver. After the device driver is installed, it runs in the background to send data to the printer whenever you begin a print job.

(2) On a Mac, you can click the Apple icon, select About this Mac, and then select More Info to look at a list of devices connected to your computer. By selecting a device, you can view information about it, including the driver version number. It's always important to remain up- to-date, so check the manufacturer's website to make sure that your version is current. On a PC, if you need to update a device driver or change its settings. you can usually access the driver by using the Start menu's Control Panel option and opening the System icon. Then use the Device Manager option to view a list of your computer system hardware and corresponding device drivers.`,

        questions: [

            {
                text: "The main purpose of a device driver is to ………..",
                options: [
                    "begin a print job",
                    "run in the background",
                    "connect to the internet",
                    "connect hardware to the computer"
                ],
                answer: 3
            },

            {
                text: "The word current in Paragraph (2) is closest in meaning to .",
                options: [
                    "paid",
                    "legal",
                    "recent",
                    "registered"
                ],
                answer: 2
            },

            {
                text: "The main idea of the passage is to explain how .",
                options: [
                    "a printer is installed",
                    "a device driver works",
                    "to use a personal computer",
                    "important it is to update your device driver"
                ],
                answer: 1
            },

            {
                text: "A device driver is best described as a …..",
                options: [
                    "type of printer",
                    "type of modem",
                    "piece of software",
                    "peripheral device"
                ],
                answer: 2
            }

        ]
    },

    {
    title: "Radio in Saudi Arabia", // 4 Questions

    text: `(1) The history of radio in Saudi Arabia goes back to 1949 when the airwaves were filled with the recitation of the Holy Qur'an that won the hearts of millions across the Kingdom. In the early decades, expensive, large wooden box radios were confined to the elite. Later, more advanced transistor radios reached the rest of the people. Today, in Saudi Arabia radio has been completely transformed by the various private players that have entered the sector since the government opened up licenses to them, creating more variety to add to the public stations. With the introduction of social media, many broadcasters thought that the time for radio was over. However the reality is quite different. Many listeners tune in to online radio stations nowadays, and a large number of listeners tune in while driving.

(2) Though there is a wide range of choice available to Arabic listeners, English listeners have little choice in the Kingdom. Only a few stations offer broadcast services in English such as Radio Riyadh. Meanwhile, Jeddah Radio's Urdu service broadcasts in the afternoon and has a large following. These programs are particularly popular during Hajj season, as they contain a variety of topics supported by the Ministry of Islamic Affairs.`,

    questions: [

        {
            text: "Which of the following is TRUE?",
            options: [
                "All Saudi stations are privately owned",
                "A lot of people listen to the radio in their cars",
                "Urdu is the most common language on the radio",
                "Radio Riyadh is the only English language station available"
            ],
            answer: 1
        },

        {
            text: "The word them in Paragraph (1) refers to …..",
            options: [
                "radios",
                "government",
                "private players",
                "the rest of the people"
            ],
            answer: 2
        },

        {
            text: "You can understand from Paragraph (1) that ………..",
            options: [
                "radios are rarely used in Saudi Arabia",
                "radio broadcasters control media licensing",
                "the early use for radio was mainly to play music",
                "developments in technology made radios cheaper"
            ],
            answer: 3
        },

        {
            text: "At what time of day are you most likely to hear the Urdu language service?",
            options: [
                "5am",
                "9am",
                "3pm",
                "8pm"
            ],
            answer: 2
        }

    ]
},

{
    title: "GMO Bananas", // Questions 3

    text: `(1) Each year, thousands of children in East Africa go blind or die because they don't get enough vitamin A. Now, with the support of the Bill and Melinda Gates Foundation, Ugandan, American and Australian researchers are trying to develop a potential fix: a genetically modified banana that packs a significantly larger vitamin A punch.

(2) The bananas have already been successfully tested on gerbils. Researchers created the new bananas by slightly tweaking its genome so that the fruit contains more alpha and beta caroteno-plantsynthesized substances that animals convert into vitamin A. The new bananas have a slight orange shade but taste the same as nongenetically modified bananas. Human trials just began in Iowa, and if they're successful, farmers in Uganda will be growing the GMO bananas by 2020. About 70 percent of people there rely on bananas as a major staple of their diets, so delivering the extra vitamin boost through the fruit should be an effective means of helping to alleviate vitamin A deficiency. If the GM banana scheme helps reduce death and blindness rates in Uganda, it could be transferred to other countries or applied to other fruits, like plantains.

(3) Bananas are not the only food whose yield or nutritional profile could be improved with genetic engineering. With climate change threatening to disrupt existing crops and growing global populations demanding more of those supplies, genetic engineering could be a solution for making the most of limited space and resources. Quite a number of foods that fit this profile have already been created including virus resistant squash, and disease-resistant potatoes.`,

    questions: [

        {
            text: "What is the writer's main purpose?",
            options: [
                "to support Bill Gates",
                "to advertise",
                "to inform",
                "to warn"
            ],
            answer: 2
        },

        {
            text: "What is one important idea that the writer mentions?",
            options: [
                "That animals like to eat the orange bananas",
                "That a lack of vitamin A makes people go blind",
                "That children in Africa need better food",
                "That Uganda is a rich country in East Africa"
            ],
            answer: 1
        },

        {
            text: "What is one important idea that the writer mentions?",
            options: [
                "That Ugandans have grown bananas for centuries",
                "That the way we produce food is changing",
                "That climate change is a serious global problem",
                "That genetically modified bananas may save lives"
            ],
            answer: 3
        }

    ]
},

{
    title: "The Spinal Cord", // Questions 4

    text: `(1) The spinal cord is an information highway connecting the nervous system to the brain. Ascending neural areas send up sensory information, and descending areas send back motorcontrol information. A look at the neural pathways that control our reflexes, our automatic responses to stimuli, shows the spinal cords work. A simple spinal-reflex path is composed of a single sensory neuron and a single motor neuron, which often communicate through an interneuron.

(2) One such path makes up the pain reflex. When your fingers touch a hot stove, neural activity excited by the heat travels via sensory neurons to interneurons in your spinal cord. These interneurons respond by activating motor neurons to the muscles in your arm, causing you to jerk your hand away.

(3) Because the simple pain-reflex pathway runs through the spinal cord and out, you jerk your hand from a candle's flame before your brain receives and responds to the information that causes you to feel pain. Information travels to and from the brain by way of the spinal cord. Were the top of your spinal cord severed, you would not feel such pain. Or pleasure. Your brain would literally be out of touch with your body. Thus, you would lose all sensation and voluntary movement in body regions whose sensory and motor neurons connect with the spinal cord below its point of injury.`,

    questions: [

        {
            text: "What helps information travel up and down the spine?",
            options: [
                "the brain",
                "neural paths",
                "the air we breathe",
                "automatic responses"
            ],
            answer: 1
        },

        {
            text: "According to Paragraph (2), what finally makes you take your hand away from something hot?",
            options: [
                "Sensory neurons and interneurons",
                "Your fingers touching a hot stove",
                "Motor neurons in arm muscles",
                "Our natural fear of pain"
            ],
            answer: 2
        },

        {
            text: "When would your brain stop receiving information from the spinal cord?",
            options: [
                "When the pain-reflex pathway ran through the spinal cord and out",
                "If there were serious damage to the spinal cord",
                "If you stopped experiencing pleasure or pain",
                "When you were sleeping very heavily"
            ],
            answer: 1
        },

        {
            text: "The word connecting in Paragraph (1) is closest in meaning to…………",
            options: [
                "adding",
                "feeling",
                "joining",
                "moving"
            ],
            answer: 2
        }

    ]
},

{
    title: "Pioneers of Modern Medicine", // Questions 5

    text: `(1) Medieval physicians relied on the works of the ancient physician Galen. Galen, however, had made many errors, in part because he had limited knowledge of human anatomy. During the Renaissance, physicians made new efforts to study the human body. In 1543, Andreas Vesalius published "The Structure of the Human Body," the first accurate and detailed study of human anatomy. Vesalius used whatever means he could to increase his knowledge of anatomy. He used friendships with people of influence to get invitations to autopsies. He also autopsied bodies that he himself obtained - counting on friends in the local government to look the other way.

(2) In the early 1540s, French physician Ambroise Paré developed a new and more effective ointment for preventing infection. He also developed new surgical techniques, introduced the use of artificial limbs, and invented several scientific instruments. Then in the early 1600s, William Harvey, an English scholar, described the circulation of the blood for the first time. He showed how the heart serves as a pump to force blood through veins and arteries. Later in the century, the Dutch inventor Anton van Leeuwenhoek perfected the microscope and became the first human to see cells and microorganisms. These pioneering scientists opened the way for further discoveries.`,

    questions: [

        {
            text: "What was the main reason Galen made mistakes in his writing?",
            options: [
                "He only studied the anatomy of animals",
                "He copied the work of ancient physicians",
                "He made little effort to study human anatomy",
                "He had little information about human anatomy"
            ],
            answer: 3
        },

        {
            text: "How was Vesalius able to get dead bodies for his research?",
            options: [
                "He wrote a book about anatomy",
                "He paid doctors for dead bodies to study",
                "His friends in the local government allowed him",
                "He had a very good knowledge of anatomy"
            ],
            answer: 2
        },

        {
            text: "What is one reason new discoveries were possible after the 1600s?",
            options: [
                "Many scientists were friends and worked together",
                "Leeuwenhoek developed a better microscope",
                "Ambroise Pare opened a medical school",
                "William Harvey discovered the heart"
            ],
            answer: 1
        },

        {
            text: "The word accurate in Paragraph (1) is closest in meaning to ……",
            options: [
                "public",
                "healthy",
                "correct",
                "famous"
            ],
            answer: 2
        },

        {
            text: "The word introduced in Paragraph (2) is closest in meaning to ……",
            options: [
                "changed",
                "broke",
                "ended",
                "began"
            ],
            answer: 3
        }

    ]
},

{
    title: "Composition of Compounds", // Questions 3

    text: `(1) A chemical formula, in combination with the molar masses of its main elements, indicates the relative quantities of each element in a compound, which is extremely useful information. For example, about 30 years ago, scientists began to suspect that synthetic compounds known as chlorofluorocarbons (or CFCs) were destroying the ozone in Earth's upper atmosphere.

(2) Upper atmospheric ozone is important because it shields life on Earth from the sun's harmful ultraviolet light. CFCs are chemically inert compounds that were used primarily as refrigerants and industrial solvents. Over time, however, CFCs began to accumulate in the atmosphere. In the upper atmosphere, sunlight break bonds within CFCs, resulting in the release of chlorine atoms. The chlorine atoms then react with ozone, converting it into O2. Therefore, the harmful part of CFCs is the chlorine atoms that they carry.`,

    questions: [

        {
            text: "The word shields in Paragraph (2) is closest in meaning to …………………",
            options: [
                "cleans",
                "carries",
                "protects",
                "improves"
            ],
            answer: 2
        },

        {
            text: "The word accumulate in Paragraph (2) is closest in meaning to .………………",
            options: [
                "collect",
                "change",
                "arrive",
                "disappear"
            ],
            answer: 0
        },

        {
            text: "The word bonds in Paragraph (2) is closest in meaning to .………………………",
            options: [
                "options",
                "steps",
                "rules",
                "connections"
            ],
            answer: 3
        }

    ]
},

{
    title: "Ancient Birds", // Questions 4

    text: `(1) Giant birds of the past have names that speak for themselves. The Elephant bird, a native of Madagascar and the largest known giant bird, stood at over nine feet tall and weighed in at 1,000 pounds or more, until it went extinct about 1,000 years ago. Australia's Mthirung, nicknamed "Thunderbird," which disappeared nearly 50,000 years ago, is thought to have been nearly seven feet tall and weighed between 500 and 1,000 pounds. But until now, no one had ever found evidence of these towering avians in Europe.

(2) Today, researchers describe the first fossil of a giant bird found in Crimea. Dated at around 1.8 million years old, the specimen makes experts question previous assumptions that giant birds were not part of the region's fauna during that period.

(3) A team of paleontologists dug up the fossil, an unusually large femur bone, in Taurida Cave, located on the Crimean Peninsula in the northern Black Sea. The cave was only discovered last June when the construction of a new highway revealed its entrance.

(4) Based on the femur's dimensions, the team calculated that the bird would have weighed around 992 pounds as much as an adult polar bear-making it the third largest bird ever recorded. Daniel Field, a scientist at the University of Cambridge, says, “It raises exciting questions about the factors that gave rise to these giant birds, and the factors that drove them to extinction."`,

    questions: [

        {
            text: "What two phrases does the writer use to say that the birds were very large?",
            options: [
                "giant bird and towering avian",
                "elephant bird and native of Madagascar",
                "large femur bone and the region's fauna",
                "seven feet tall and nicknamed \"Thunderbird\""
            ],
            answer: 0
        },

        {
            text: "Which of the following does the writer say is a fact?",
            options: [
                "The Thunderbird lived in Australia and Europe",
                "The femur is the largest bone in the body",
                "The Elephant bird was over nine feet tall",
                "Researchers found a polar bear fossil"
            ],
            answer: 2
        },

        {
            text: "What can we understand about the giant bird of Crimea from Paragraph (3)?",
            options: [
                "Researchers found it at the bottom of the Black Sea",
                "Highway workers found it at a construction site",
                "Researchers did not find all the bones",
                "We can see it in the Crimea Museum"
            ],
            answer: 2
        },

        {
            text: "What can be understood about Daniel Field from Paragraph (4)?",
            options: [
                "He studies fossils",
                "He found the fossil",
                "He weighed the fossil",
                "He studies at Cambridge University"
            ],
            answer: 0
        }

    ]
}

];

/* =========================================================
   GRAMMAR
   40 QUESTIONS
   ========================================================= */

const grammarData = [

    ["The teacher told Muhammed to visit his office ...... the morning.",
        ["with", "in", "to", "on"], 1],

    ["........ the team did not play well, they managed to win the game.",
        ["Even", "In case", "Although", "In spite of"], 2],

    ["Nora thought she arrived on time for the train, ......... the train had already left the station.",
        ["so", "but", "and", "because"], 1],

    ["There were ....... students waiting outside the school building.",
        ["none", "a little", "plenty", "several"], 3],

    ["We have taught our children that .......... comes first.",
        ["education", "one education", "the education", "each education"], 0],

    ["Does Helen play ......... sport?",
        ["plenty", "much", "most", "loads"], 1],

    ["If the company does well this year, they ........... new offices.",
        ["were built", "have built", "would build", "will build"], 3],

    ["If Mark has some spare clothes, he ......... them with poor people.",
        ["would share", "shared", "shares", "had shared"], 2],

    ["Ashgan's son is very ill. She ........ look after him 24/7.",
        ["might", "must", "could", "has"], 1],

    ["Mrs. Smith, you're enjoying ........, aren't you?",
        ["you", "your", "yourself", "yourselves"], 2],

    ["Is this the person ........ laptop you broke?",
        ["whose", "which", "who", "that"], 0],

    ["Amy: Is Kate waiting for someone? Kate: What did Amy ask? Lucy: She asked.......... waiting for someone.",
        ["how you are", "are you", "were you", "if you were"], 3],

    ["Let's first .......... to Will's parents.",
        ["to talking", "talking", "to talk", "talk"], 3],

    ["Ali and Ahmed think this is the best chocolate they ..........",
        ["ever eat", "had ever eaten", "have ever eaten", "would ever have eaten"], 2],

    ["By the time I was born, my grandfather ........ dead for five years.",
        ["was", "has been", "had been", "used to be"], 2],

    ["Most fashionable clothing .......... in Italy.",
        ["is made", "make", "is making", "made"], 0],

    ["Mark was so hungry that he stopped ......... a sandwich.",
        ["to having", "to have", "having", "have"], 1],

    ["When we talked to the owners, we learnt that the car ...........",
        ["is already selling", "was already selling", "has already being sold", "had already been sold"], 3],

    ["If we had left immediately, a lot of time could ...........",
        ["be saving", "be saved", "have been saving", "have been saved"], 3],

    ["It is possible to visit the site .......... children are accompanied by their parents.",
        ["as long as", "as though", "whereas", "unless"], 0],

    ["This washing machine appears new. It .............",
        ["would have been replacing", "must have been replaced", "will have replaced", "has been replacing"], 1],

    ["Jenny's mom told her .......... rude again.",
        ["mustn't be", "not being", "don't be", "not to be"], 3],

    ["In which sentence is all PUNCTUATION correct?",
        ["What a beautiful day it is? Let's go outside to have a picnic.", "What a beautiful day it is, Let's go outside to have a picnic.", "What a beautiful day it is! Let's go outside to have a picnic.", "What a beautiful day it is. Let's go outside to have a picnic."], 2],

    ["I suggest using your car. ............ has broken down.",
        ["Ourselves", "Ourself", "Ours", "Our"], 2],

    ["Saudi Arabia has some wonderful places for pilgrims and tourists to visit. ........., Makkah, Madina, Alula and Alumluj.",
        ["For example", "In addition", "In contrast", "However"], 0],

    ["Choose the BEST WAY to make the following sentences in a paragraph: (1) Ahmed helped them through the early months at the school. (2) Five years on, they now think of Kuwait as home. (3) Emma and Jack were excited about their new job in Kuwait. (4) When they arrived, they met their new boss, Ahmed.",
        ["(3), (4), (1), (2).", "(1), (4), (3), (2).", "(3), (1), (2), (4).", "(1), (3), (2), (4)."], 0],

    ["Which sentence has the CORRECT WORD ORDER?",
        ["China overtook the USA to become in 2012 the biggest exporter of goods in the world.",
         "In 2012, China overtook the USA to become the biggest exporter of goods in the world.",
         "Overtook China the USA in 2012 to become the biggest exporter of goods in the world.",
         "In 2012, to become the biggest exporter of goods China overtook the USA in the world."], 1],

    ["Chris learned how to play tennis when he was young,............ his brother can't play at all.",
        ["but", "then", "since", "therefore"], 0],

    ["In which sentence is all CAPITALIZATION correct?",
        ["Yesterday, she bought four books to prepare for her teaching job at paris university.", "Yesterday, she bought four books to prepare for her teaching job at Paris University.", "Yesterday, she bought four books to prepare for her teaching job at Paris university", "Yesterday, She bought four books to prepare for her teaching job at Paris University."], 1],

    ["Last week, Adam writes three essays about biology and sent them to his teacher.",
        ["writes", "about", "them", "his teacher"], 0],

    ["Sara met her friend ………….. she went to her favorite restaurant to have lunch.",
        ["so", "when", "during", "although"], 1],

    ["Chris read many papers before he …………. his essay.",
        ["write", "is writing", "wrote", "has written"], 2],

    ["Where did I put my phone? I …………… for it since 2 o’clock.",
        ["look", "am looking", "have been looking", "had looked"], 2],

    ["The entire session was ruined because some people behaved …………..",
        ["disruptive", "disruptiveness", "disruptively", "disruption"], 2],

    ["Chris asked the man ……………… was sitting at the reception desk to help him.",
        ["whose", "who", "which", "where"], 1],

    ["If Steve wakes up before 6 a.m., he …………… for a jog.",
        ["going to go", "went", "had gone", "goes"], 3],

    ["Sameh crashed his car when he ……………. at his phone.",
        ["looks", "looked", "have looked", "had looked"], 1],

    ["The teacher wasn’t able to help, so Lisa and Mary finished the project by …………..",
        ["ourselves", "oneselves", "theirselves", "themselves"], 3],

    ["The meat is so soft, I cooked it ………….. 4 hours.",
        ["for", "from", "since", "during"], 0],

    ["Sam arrived late to the party. By the time he came, the cake ……………..",
        ["had been eaten", "being eaten", "is eaten", "ate"], 0]

].map(item => ({
    text: item[0],
    options: item[1],
    answer: item[2]
}));


/* =========================================================
   ELEMENTS
   ========================================================= */

const introPage =
    document.getElementById("introPage");

const testPage =
    document.getElementById("testPage");

const resultPage =
    document.getElementById("resultPage");

const startBtn =
    document.getElementById("startBtn");

const restartBtn =
    document.getElementById("restartBtn");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const finishBtn =
    document.getElementById("finishBtn");

const finishModal = document.getElementById("finishModal");

const finishModalMessage = document.getElementById("finishModalMessage");

const cancelFinishBtn = document.getElementById("cancelFinishBtn");

const confirmFinishBtn = document.getElementById("confirmFinishBtn");  
  

const testContent =
    document.getElementById("testContent");

const questionNavigator =
    document.getElementById("questionNavigator");    

const sectionTitle =
    document.getElementById("sectionTitle");

const timerValue =
    document.getElementById("timerValue");

const timerBox =
    document.getElementById("timerBox");

const progressText =
    document.getElementById("progressText");

const progressPercent =
    document.getElementById("progressPercent");

const progressBar =
    document.getElementById("progressBar");

const themeBtn =
    document.getElementById("themeBtn");

const courseCta =
    document.getElementById("courseCta");

const clapAudio =
    document.getElementById("clapAudio");


/* =========================================================
   EXAM STATE
   ========================================================= */

   // 10 seconds for test:  const TOTAL_TIME = 10;

const TOTAL_TIME =
    2 * 60 * 60;

// Test results messages easily :    

const TEST_MODE = false;

const TEST_SCORE = 81;    

let remainingSeconds =
    TOTAL_TIME;

let timerInterval =
    null;

let currentSection =
    0;

let currentItem =
    0;

let submitted =
    false;


/*
    0 = Listening
    1 = Reading
    2 = Grammar
*/


let listeningAnswers =
    Array(20).fill(null);

let readingAnswers =
    Array(40).fill(null);

let grammarAnswers =
    Array(40).fill(null); 

/* =========================================================
   TOTAL QUESTIONS
   ========================================================= */

const listeningTotal =
    listeningData.reduce(
        (sum, item) =>
            sum + item.questions.length,
        0
    );

const readingTotal =
    readingData.reduce(
        (sum, item) =>
            sum + item.questions.length,
        0
    );

const grammarTotal =
    grammarData.length;

const totalQuestions =
    listeningTotal +
    readingTotal +
    grammarTotal;


/* =========================================================
   PAGE CONTROL
   ========================================================= */

function showPage(page) {

    introPage.classList.add("hidden");
    testPage.classList.add("hidden");
    resultPage.classList.add("hidden");

    page.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================================
   START EXAM
   ========================================================= */

function startExam() {

    currentSection = 0;
    currentItem = 0;

    remainingSeconds =
        TOTAL_TIME;

    submitted = false;

    listeningAnswers.fill(null);
    readingAnswers.fill(null);
    grammarAnswers.fill(null);

    showPage(testPage);

    startTimer();

    renderCurrent();
}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

    clearInterval(timerInterval);

    updateTimer();

    timerInterval =
        setInterval(() => {

            remainingSeconds--;

            if (remainingSeconds <= 0) {

                remainingSeconds = 0;

                updateTimer();

                clearInterval(timerInterval);

                finishExam(true);

                return;
            }

            updateTimer();

        }, 1000);
}


function updateTimer() {

    const hours =
        Math.floor(
            remainingSeconds / 3600
        );

    const minutes =
        Math.floor(
            (remainingSeconds % 3600) / 60
        );

    const seconds =
        remainingSeconds % 60;


    timerValue.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;


    timerBox.classList.toggle(
        "warning",
        remainingSeconds <= 600
    );
}

/* =========================================================
   QUESTION NAVIGATOR
   ========================================================= */

function renderQuestionNavigator() {

    let html = "";


    for (
        let i = 0;
        i < totalQuestions;
        i++
    ) {

        let answered = false;

        /*
            Listening
            الأسئلة 1–20
        */

        if (i < listeningTotal) {

            answered =
                listeningAnswers[i] !== null;

        }


        /*
            Reading
            الأسئلة 21–60
        */

        else if (
            i < listeningTotal + readingTotal
        ) {

            const index =
                i - listeningTotal;

            answered =
                readingAnswers[index] !== null;

        }


        /*
            Grammar
            الأسئلة 61–100
        */

        else {

            const index =
                i -
                listeningTotal -
                readingTotal;

            answered =
                grammarAnswers[index] !== null;

        }


        const current = i + 1 === getQuestionNumber();

const group = getQuestionGroup(i);

const currentIndex = getQuestionNumber() - 1;

const groupClass =
    group.includes(currentIndex)
        ? "group-active"
        : "";

        html += `

            <button
                type="button"
                class="question-number-btn ${current ? "current" : ""} ${answered ? "answered" : ""} ${groupClass}"

                data-global-question="${i + 1}"
            >
                ${i + 1}
            </button>

        `;

    }


    questionNavigator.innerHTML =
        html;


    questionNavigator
        .querySelectorAll(
            ".question-number-btn"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const number =
                        Number(
                            button.dataset
                                .globalQuestion
                        );

                    goToQuestion(
                        number
                    );

                }
            );

        });


    scrollCurrentQuestionIntoView();

}

function getQuestionGroup(index) {

    /*
        LISTENING
        كل 4 أسئلة مرتبطة بنفس المقطع
    */

    if (index < listeningTotal) {

        const passageIndex =
            Math.floor(index / 4);

        const start =
            passageIndex * 4;

        return [
            start,
            start + 1,
            start + 2,
            start + 3
        ];

    }


    /*
        READING
        كل Passage يمثل مجموعة واحدة
    */

    if (
        index <
        listeningTotal + readingTotal
    ) {

        let remaining =
            index - listeningTotal;

        let start =
            listeningTotal;


        for (
            let i = 0;
            i < readingData.length;
            i++
        ) {

            const count =
                readingData[i].questions.length;


            if (
                remaining < count
            ) {

                return Array.from(
                    {
                        length: count
                    },
                    (_, questionIndex) =>
                        start + questionIndex
                );

            }


            remaining -= count;

            start += count;

        }

    }


    /*
        GRAMMAR
        كل سؤال مستقل
    */

    return [index];

}


/* =========================================================
   GO TO QUESTION
   ========================================================= */

function goToQuestion(number) {

    /*
        تحويل رقم السؤال إلى index
        يبدأ من صفر.
    */

    const index =
        number - 1;


    /*
        LISTENING
        الأسئلة 1–20
    */

    if (
        index < listeningTotal
    ) {

        currentSection =
            0;

        currentItem =
            Math.floor(
                index / 4
            );

    }


    /*
        READING
        الأسئلة 21–60
    */

    else if (
        index <
        listeningTotal + readingTotal
    ) {

        currentSection =
            1;


        let remaining =
            index - listeningTotal;


        currentItem =
            0;


        for (
            let i = 0;
            i < readingData.length;
            i++
        ) {

            const passageQuestions =
                readingData[i].questions.length;


            if (
                remaining <
                passageQuestions
            ) {

                currentItem =
                    i;

                break;

            }


            remaining -=
                passageQuestions;

        }

    }


    /*
        GRAMMAR
        الأسئلة 61–100
    */

    else {

        currentSection =
            2;

        currentItem =
            index -
            listeningTotal -
            readingTotal;

    }


    renderCurrent();

}


/* =========================================================
   SCROLL CURRENT QUESTION NUMBER
   ========================================================= */

function scrollCurrentQuestionIntoView() {

    const currentButton =
        questionNavigator.querySelector(
            ".question-number-btn.current"
        );


    if (!currentButton) {
        return;
    }


    currentButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
    });

}


/* =========================================================
   RENDER
   ========================================================= */

function renderCurrent() {

    if (currentSection === 0) {

        renderListening();

    } else if (currentSection === 1) {

        renderReading();

    } else {

        renderGrammar();

    }


    updateNavigation();

    updateProgress();

    renderQuestionNavigator();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   QUESTION CARD
   ========================================================= */

function createQuestionCard(question, number, selected) {
    const letters = ["A", "B", "C", "D"];

    return `
        <div class="question-card" data-question="${number}">

            <div class="question-top">
                <div class="question-number">${number + 1}</div>

                <p class="question-text">${question.text}</p>
            </div>

            <div class="answers">
                ${question.options.map((option, index) => `
                    <button
                        type="button"
                        class="answer-btn ${selected === index ? "selected" : ""}"
                        data-answer="${index}"
                        data-question-index="${number}"
                    >
                        <span class="answer-letter">${letters[index]}</span>
                        ${option}
                    </button>
                `).join("")}
            </div>

        </div>
    `;
}


/* =========================================================
   LISTENING
   ========================================================= */

function renderListening() {

    const passage =
        listeningData[currentItem];

    sectionTitle.textContent =
        "قسم الاستماع";


    let html = `

        <div class="section-intro">

            <h2>
                Listening
            </h2>

            <p>
                استمع إلى المقطع مرة واحدة فقط،
                ثم أجب عن الأسئلة الأربعة.
            </p>

        </div>


        <div class="audio-card">

            <div class="audio-card-header">

                <div class="audio-icon">
                    🎧
                </div>

                <div>

                    <h2>
                        ${passage.title}
                    </h2>

                    <p>
                        المقطع
                        ${currentItem + 1}
                        من
                        ${listeningData.length}
                    </p>

                </div>

            </div>


            <div class="custom-player">

                <button
                    id="playAudioBtn"
                    class="play-btn"
                    type="button"
                >
                    <span class="play-symbol"></span>
                </button>


                <div class="player-main">

                    <div class="time-row">

                        <span id="audioCurrentTime">
                            0:00
                        </span>

                        <span id="audioDuration">
                            0:00
                        </span>

                    </div>


                    <input
                        id="audioProgress"
                        class="audio-progress"
                        type="range"
                        min="0"
                        max="100"
                        value="0"
                        disabled
                    >

                </div>


                <span
                    id="audioStatus"
                    class="player-status"
                >
                    لم يتم التشغيل
                </span>

            </div>


            <div class="player-footer">

                بعد بدء المقطع لن تتمكن من تشغيله مرة أخرى.

            </div>


            <audio
                id="hiddenAudio"
                src="${getAudioUrl(passage.audio)}"
                preload="metadata"
            ></audio>


            <div class="audio-questions">

                ${passage.questions.map(
                    (q, i) =>
                        createQuestionCard(
                            q,
                            currentItem * 4 + i,
                            listeningAnswers[
                                currentItem * 4 + i
                            ]
                        )
                ).join("")}

            </div>

        </div>
    `;


    testContent.innerHTML =
        html;


    setupAudioPlayer();

    attachAnswerListeners(
        "listening"
    );
}


/* =========================================================
   AUDIO PLAYER
   ========================================================= */

function setupAudioPlayer() {

    const audio =
        document.getElementById(
            "hiddenAudio"
        );

    const playBtn =
        document.getElementById(
            "playAudioBtn"
        );

    const progress =
        document.getElementById(
            "audioProgress"
        );

    const currentTime =
        document.getElementById(
            "audioCurrentTime"
        );

    const duration =
        document.getElementById(
            "audioDuration"
        );

    const status =
        document.getElementById(
            "audioStatus"
        );


    let started =
        false;


    function formatTime(seconds) {

        if (
            !Number.isFinite(seconds)
        ) {
            return "0:00";
        }

        const minutes =
            Math.floor(
                seconds / 60
            );

        const secondsPart =
            Math.floor(
                seconds % 60
            );

        return (
            `${minutes}:` +
            `${String(secondsPart).padStart(2, "0")}`
        );
    }


    audio.addEventListener(
        "loadedmetadata",
        () => {

            duration.textContent =
                formatTime(
                    audio.duration
                );

        }
    );


    audio.addEventListener(
        "timeupdate",
        () => {

            currentTime.textContent =
                formatTime(
                    audio.currentTime
                );

            if (audio.duration) {

                progress.value =
                    (
                        audio.currentTime /
                        audio.duration
                    ) * 100;

            }

        }
    );


    audio.addEventListener(
        "play",
        () => {

            status.textContent =
                "يتم التشغيل...";

        }
    );


    audio.addEventListener(
        "ended",
        () => {

            status.textContent =
                "انتهى المقطع — لا يمكن إعادته";

            playBtn.disabled =
                true;

            started =
                true;

        }
    );


    playBtn.addEventListener(
        "click",
        async () => {

            if (started) {
                return;
            }

            started =
                true;

            playBtn.disabled =
                true;

            status.textContent =
                "يتم التشغيل...";


            try {

                await audio.play();

            } catch (error) {

                started =
                    false;

                playBtn.disabled =
                    false;

                status.textContent =
                    "تعذر التشغيل";

            }

        }
    );
}


/* =========================================================
   READING
   ========================================================= */

function renderReading() {

    const passage =
        readingData[currentItem];

    sectionTitle.textContent =
        "قسم القراءة";


    const offset =
        readingData
            .slice(0, currentItem)
            .reduce(
                (sum, item) =>
                    sum + item.questions.length,
                0
            );


    testContent.innerHTML = `

        <div class="section-intro">

            <h2>
                Reading
            </h2>

            <p>
                اقرأ القطعة كاملة ثم أجب عن
                جميع الأسئلة الخاصة بها.
            </p>

        </div>


        <article class="reading-passage">

            <div class="passage-label">
                READING PASSAGE
                ${currentItem + 1}
            </div>

            <h2>
                ${passage.title}
            </h2>

            <div class="passage-text">
                ${passage.text}
            </div>

        </article>


        <div class="reading-questions">

            ${passage.questions.map(
                (q, i) =>
                    createQuestionCard(
                        q,
                        offset + i,
                        readingAnswers[
                            offset + i
                        ]
                    )
            ).join("")}

        </div>

    `;


    attachAnswerListeners(
        "reading"
    );
}


/* =========================================================
   GRAMMAR
   ========================================================= */

function renderGrammar() {

    const question =
        grammarData[currentItem];

    sectionTitle.textContent =
        "قسم القواعد";


    testContent.innerHTML = `

        <div class="section-intro">

            <h2>
                Grammar
            </h2>

            <p>
                اختر الإجابة الأنسب.
                يظهر سؤال واحد في كل شاشة.
            </p>

        </div>


        <div class="grammar-single">

            ${createQuestionCard(
                question,
                currentItem,
                grammarAnswers[
                    currentItem
                ]
            )}

        </div>

    `;


    attachAnswerListeners(
        "grammar"
    );
}


/* =========================================================
   ANSWERS
   ========================================================= */

function attachAnswerListeners(type) {

    document.querySelectorAll(".answer-btn").forEach(button => {

        button.addEventListener("click", () => {

            const questionIndex =
                Number(button.dataset.questionIndex);

            const answer =
                Number(button.dataset.answer);

            if (type === "listening") {
                listeningAnswers[questionIndex] = answer;
            }

            if (type === "reading") {
                readingAnswers[questionIndex] = answer;
            }

            if (type === "grammar") {
                grammarAnswers[questionIndex] = answer;
            }

            const card =
                button.closest(".question-card");

            card.querySelectorAll(".answer-btn")
                .forEach(btn =>
                    btn.classList.remove("selected")
                );

            button.classList.add("selected");
        });

    });
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function updateNavigation() {

    const first =
        currentSection === 0 &&
        currentItem === 0;


    previousBtn.disabled =
        first;


    /*
        زر التالي يظل موجودًا في:

        - جميع صفحات الاستماع
        - جميع صفحات القراءة
        - جميع أسئلة القواعد ما عدا السؤال الأخير
    */


    const lastGrammar =
        currentSection === 2 &&
        currentItem ===
            grammarData.length - 1;


    /*
        زر إنهاء الاختبار يظهر فقط
        عند آخر سؤال في قسم القواعد.
    */

    nextBtn.classList.toggle(
        "hidden",
        lastGrammar
    );


    finishBtn.classList.toggle(
        "hidden",
        !lastGrammar
    );
}


/* =========================================================
   PROGRESS
   ========================================================= */

function getQuestionNumber() {

    if (currentSection === 0) {

        return (
            currentItem * 4 + 1
        );

    }


    if (currentSection === 1) {

        return (
            listeningTotal +

            readingData
                .slice(0, currentItem)
                .reduce(
                    (sum, item) =>
                        sum +
                        item.questions.length,
                    0
                ) +

            1
        );

    }


    return (
        listeningTotal +
        readingTotal +
        currentItem +
        1
    );
}


function updateProgress() {

    const number =
        getQuestionNumber();


    const percentage =
        Math.round(
            (
                number /
                totalQuestions
            ) * 100
        );


    if (currentSection === 0) {

        progressText.textContent =
            `الأسئلة ${
                currentItem * 4 + 1
            }–${
                currentItem * 4 + 4
            } من ${
                totalQuestions
            }`;

    } else {

        progressText.textContent =
            `السؤال ${
                number
            } من ${
                totalQuestions
            }`;

    }


    progressPercent.textContent =
        `${percentage}%`;


    progressBar.style.width =
        `${percentage}%`;
}


/* =========================================================
   NEXT
   ========================================================= */

function goNext() {

    if (
        currentSection === 0
    ) {

        if (
            currentItem <
            listeningData.length - 1
        ) {

            currentItem++;

        } else {

            currentSection =
                1;

            currentItem =
                0;

        }

    }

    else if (
        currentSection === 1
    ) {

        if (
            currentItem <
            readingData.length - 1
        ) {

            currentItem++;

        } else {

            currentSection =
                2;

            currentItem =
                0;

        }

    }

    else {

        if (
            currentItem <
            grammarData.length - 1
        ) {

            currentItem++;

        }

    }


    renderCurrent();
}


/* =========================================================
   PREVIOUS
   ========================================================= */

function goPrevious() {

    if (
        currentSection === 0
    ) {

        if (
            currentItem > 0
        ) {

            currentItem--;

        }

    }


    else if (
        currentSection === 1
    ) {

        if (
            currentItem > 0
        ) {

            currentItem--;

        } else {

            currentSection =
                0;

            currentItem =
                listeningData.length - 1;

        }

    }


    else {

        if (
            currentItem > 0
        ) {

            currentItem--;

        } else {

            currentSection =
                1;

            currentItem =
                readingData.length - 1;

        }

    }


    renderCurrent();
}


/* =========================================================
   SCORE
   ========================================================= */

function calculateScore() {

      if (TEST_MODE) {
        return {
            listeningScore: 18,
            readingScore: 36,
            grammarScore: 35,
            total: TEST_SCORE
        };
    }

    let listeningScore =
        0;


    listeningData.forEach(
        (passage, passageIndex) => {

            passage.questions.forEach(
                (question, questionIndex) => {

                    const answer =
                        listeningAnswers[
                            passageIndex * 4 +
                            questionIndex
                        ];


                    if (
                        answer ===
                        question.answer
                    ) {

                        listeningScore++;

                    }

                }
            );

        }
    );


    let readingScore =
        0;

    let readingOffset =
        0;


    readingData.forEach(
        passage => {

            passage.questions.forEach(
                (question, index) => {

                    if (
                        readingAnswers[
                            readingOffset + index
                        ] ===
                        question.answer
                    ) {

                        readingScore++;

                    }

                }
            );


            readingOffset +=
                passage.questions.length;

        }
    );


    let grammarScore =
        0;


    grammarData.forEach(
        (question, index) => {

            if (
                grammarAnswers[index] ===
                question.answer
            ) {

                grammarScore++;

            }

        }
    );


    return {

        listeningScore,

        readingScore,

        grammarScore,

        total:
            listeningScore +
            readingScore +
            grammarScore

    };
}


/* =========================================================
   LEVEL
   ========================================================= */

function getLevel(score) {

    if (score <= 20) {
        return {
            name: "تأسيسي",
            message:
                "تحتاج إلى بناء أساس قوي في اللغة الإنجليزية"
        };
    }

    if (score <= 40) {
        return {
            name: "مبتدئ",
            message:
                "لديك أساس جيد ولكن تحتاج إلى مزيد من التدريب"
        };
    }

    if (score <= 60) {
        return {
            name: "متوسط",
            message:
                "أداء جيد! يمكنك تحقيق تقدم أكبر مع التدريب المستمر"
        };
    }

    if (score <= 80) {
        return {
            name: "فوق المتوسط",
            message:
                "أداء جيد جدًا! واصل التطور أنت قريب من المستوى المتقدم"
        };
    }

    return {
        name: "متقدم",
        message:
            "أداء ممتاز! مستواك يؤهلك لخوض الاختبار الفعلي بثقة"
    };
}

function confirmFinishExam() {

    const unansweredListening =
        listeningAnswers.filter(answer => answer === null).length;

    const unansweredReading =
        readingAnswers.filter(answer => answer === null).length;

    const unansweredGrammar =
        grammarAnswers.filter(answer => answer === null).length;

    const unanswered =
        unansweredListening +
        unansweredReading +
        unansweredGrammar;

    const message =
    unanswered > 0
        ? `لديك <strong>${unanswered} سؤالًا غير مجاب</strong>`
        : `لقد أجبت على جميع الأسئلة.`;

finishModalMessage.innerHTML = message;

finishModal.classList.remove("hidden");
}

cancelFinishBtn.addEventListener(
    "click",
    () => {

        finishModal.classList.add("hidden");

    }
);

confirmFinishBtn.addEventListener(
    "click",
    () => {

        finishModal.classList.add("hidden");

        finishExam(false);

    }
);

/* =========================================================
   FINISH
   ========================================================= */

function finishExam(timeExpired = false) {

    if (submitted) {
        return;
    }


    submitted =
        true;


    clearInterval(
        timerInterval
    );


    const scores =
        calculateScore();


    const level =
        getLevel(
            scores.total
        );


    document.getElementById(
        "finalScore"
    ).textContent =
        scores.total;


    document.getElementById(
        "levelName"
    ).textContent =
        level.name;

// to change result messsage when the timer finishes
    document.getElementById(
        "resultMessage"
    ).textContent =
        timeExpired
            ? "" +
              level.message
            : level.message;


    document.getElementById(
        "listeningScore"
    ).textContent =
        `${scores.listeningScore} / ${listeningTotal}`;


    document.getElementById(
        "readingScore"
    ).textContent =
        `${scores.readingScore} / ${readingTotal}`;


    document.getElementById(
        "grammarScore"
    ).textContent =
        `${scores.grammarScore} / ${grammarTotal}`;


    /*
        التسويق حاليًا للدرجات 0–40.
        تستطيع تعديل هذا الشرط لاحقًا.
    */

    courseCta.classList.toggle(
        "hidden",
        scores.total > 80
    );


    showPage(
        resultPage
    );


    /*
        المتفوقون:
        81+
    */

    if (
        scores.total >= 81
    ) {

        setTimeout(
            () => {

                playClapping();

                startConfetti();

            },
            300
        );

    }
}


/* =========================================================
   CLAPPING
   ========================================================= */

function playClapping() {

    clapAudio.currentTime =
        0;

    clapAudio.play().catch(
        () => {
            /*
                بعض المتصفحات تمنع
                الصوت التلقائي.
            */
        }
    );
}


/* =========================================================
   CONFETTI
   ========================================================= */

function startConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");

    let animationId;
    const duration = 3000; // 10 seconds
    const startTime = performance.now();

    const colors = [
        "#00689B",
        "#16A34A",
        "#FBBF24",
        "#DC2626",
        "#7C3AED",
        "#F97316"
    ];

    const pieces = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    function createPiece(x = Math.random() * canvas.width, y = -20) {
        return {
            x,
            y,

            size:
                6 + Math.random() * 8,

            speed:
                2.5 + Math.random() * 3.5,

            drift:
                -0.8 + Math.random() * 1.6,

            sway:
                Math.random() * Math.PI * 2,

            swaySpeed:
                0.015 + Math.random() * 0.025,

            rotation:
                Math.random() * Math.PI * 2,

            rotationSpeed:
                -0.12 + Math.random() * 0.24,

            flip:
                Math.random() * Math.PI * 2,

            flipSpeed:
                0.05 + Math.random() * 0.08,

            opacity:
                0.8 + Math.random() * 0.2,

            color:
                colors[
                    Math.floor(
                        Math.random() * colors.length
                    )
                ],

            shape:
                Math.random() > 0.25
                    ? "rect"
                    : "circle"
        };
    }

    // Initial burst
    for (let i = 0; i < 220; i++) {
        const piece = createPiece();

        piece.y =
            -Math.random() * canvas.height * 0.8;

        piece.speed =
            2 + Math.random() * 4;

        pieces.push(piece);
    }

    function drawPiece(piece) {
        ctx.save();

        ctx.translate(
            piece.x,
            piece.y
        );

        ctx.rotate(
            piece.rotation
        );

        // Creates a subtle 3D flipping effect
        const scaleX =
            Math.cos(piece.flip);

        ctx.scale(
            scaleX,
            1
        );

        ctx.globalAlpha =
            piece.opacity;

        ctx.fillStyle =
            piece.color;

        if (piece.shape === "circle") {
            ctx.beginPath();

            ctx.arc(
                0,
                0,
                piece.size / 2,
                0,
                Math.PI * 2
            );

            ctx.fill();
        } else {
            ctx.fillRect(
                -piece.size / 2,
                -piece.size / 2,
                piece.size,
                piece.size * 0.65
            );
        }

        ctx.restore();
    }

    function draw(now) {
        const elapsed =
            now - startTime;

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        // Add new pieces while the animation is running
        if (elapsed < duration) {
            for (let i = 0; i < 4; i++) {
                pieces.push(
                    createPiece()
                );
            }
        }

        pieces.forEach(piece => {
            piece.y += piece.speed;

            piece.sway +=
                piece.swaySpeed;

            piece.x +=
                piece.drift +
                Math.sin(piece.sway) * 0.6;

            piece.rotation +=
                piece.rotationSpeed;

            piece.flip +=
                piece.flipSpeed;

            // Fade near the bottom
            if (
                piece.y >
                canvas.height * 0.75
            ) {
                const fadeProgress =
                    (piece.y -
                        canvas.height * 0.75) /
                    (canvas.height * 0.3);

                piece.opacity =
                    Math.max(
                        0,
                        1 - fadeProgress
                    );
            }

            drawPiece(piece);
        });

        // Remove pieces that are completely off-screen
        for (let i = pieces.length - 1; i >= 0; i--) {
            if (
                pieces[i].y >
                    canvas.height + 40 ||
                pieces[i].opacity <= 0
            ) {
                pieces.splice(i, 1);
            }
        }

        // Keep animating until the 10-second duration
        // has passed and all remaining confetti is gone
        if (
            elapsed < duration ||
            pieces.length > 0
        ) {
            animationId =
                requestAnimationFrame(draw);
        } else {
            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            window.removeEventListener(
                "resize",
                resizeCanvas
            );
        }
    }

    animationId =
        requestAnimationFrame(draw);
}


/* =========================================================
   RESTART
   ========================================================= */

function restartExam() {

    clearInterval(
        timerInterval
    );

    submitted =
        false;

    showPage(
        introPage
    );

}


/* =========================================================
   THEME
   ========================================================= */

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const dark =
            document.body.classList.contains(
                "dark"
            );


        themeBtn.textContent =
            dark
                ? "☀️"
                : "🌙";


        localStorage.setItem(
            "step-theme",
            dark
                ? "dark"
                : "light"
        );

    }
);


/* Restore theme */

if (
    localStorage.getItem(
        "step-theme"
    ) === "dark"
) {

    document.body.classList.add(
        "dark"
    );

    themeBtn.textContent =
        "☀️";
}


/* =========================================================
   BUTTON EVENTS
   ========================================================= */

startBtn.addEventListener(
    "click",
    startExam
);


restartBtn.addEventListener(
    "click",
    restartExam
);


previousBtn.addEventListener(
    "click",
    goPrevious
);


nextBtn.addEventListener(
    "click",
    goNext
);


finishBtn.addEventListener(
    "click",
    () => {

        confirmFinishExam();

    }
);


/* =========================================================
   REFRESH WARNING
   ========================================================= */

window.addEventListener(
    "beforeunload",
    event => {

        if (
            !submitted &&
            !testPage.classList.contains(
                "hidden"
            )
        ) {

            event.preventDefault();

            event.returnValue = "";

        }

    }
);