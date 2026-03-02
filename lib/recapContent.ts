export const recapContent = {
  1: [
    {
      id: "sc_day_1",
      title: "Introduction to Tech: Finding and Solving Problems with Technology",
      topics: [
        {
          id: "sc_day_1_t1",
          title: "What is Technology?",
          explanation:
            "• Technology is structured problem-solving using digital systems and tools.\n• It starts by identifying a real-world problem or pain point.\n• A solution is designed in the form of software or a system.\n• The system is built to handle many users efficiently.\n• Technology continuously improves using feedback and data."
        },
        {
          id: "sc_day_1_t2",
          title: "Thinking Like a Tech Builder",
          explanation:
            "• A tech builder analyzes how apps work internally.\n• They ask what problem the app is solving.\n• They observe how data moves between frontend and backend.\n• They think about where data is stored and processed.\n• They focus on scalability and performance."
        },
        {
          id: "sc_day_1_t3",
          title: "Food Delivery App – Problem Solving",
          explanation:
            "• Helps users discover nearby restaurants.\n• Displays menus, ratings, and delivery times.\n• Allows filtering by cuisine and preferences.\n• Enables quick and simple order placement.\n• Provides live tracking of delivery status."
        },
        {
          id: "sc_day_1_t4",
          title: "Food App Architecture – Frontend",
          explanation:
            "• Displays restaurant listings and food images.\n• Shows search, filters, and order interface.\n• Displays live tracking and notifications."
        },
        {
          id: "sc_day_1_t5",
          title: "Food App Architecture – Backend",
          explanation:
            "• Stores restaurant and menu data.\n• Handles user authentication and orders.\n• Processes payments securely.\n• Calculates delivery time using GPS data."
        },
        {
          id: "sc_day_1_t6",
          title: "Food App Architecture – AI / ML",
          explanation:
            "• Recommends restaurants based on past behavior.\n• Predicts delivery delays using traffic data.\n• Optimizes delivery routes.\n• Personalizes food suggestions."
        },
        {
          id: "sc_day_1_t7",
          title: "Key Takeaway",
          explanation:
            "• Technology is more than coding.\n• It combines Frontend, Backend, and AI layers.\n• It solves real-world problems efficiently.\n• It continuously improves using data and intelligence."
        }
      ]
    }
  ],
  2: [
    {
      id: "sc_day_2",
      title: "Intro to OS",
      topics: [
        {
          id: "cf_t1",
          title: "Hardware",
          explanation:
            "• Hardware refers to all the physical and tangible components of a computer system.\n• It includes processing devices like CPU, memory components like RAM, storage devices such as HDD or SSD, and input/output devices like keyboard, mouse, monitor, and printer.\n• Hardware performs actual computation and physical data processing based on software instructions.\n• Without hardware, software cannot execute because software requires physical resources to run.\n• Hardware components communicate with each other through buses and system architecture inside the computer.",
        },

        {
          id: "cf_t2",
          title: "Software",
          explanation:
            "• Software is a collection of programs and instructions that tell hardware how to perform specific tasks.\n• It is the logical and non-physical part of a computer system.\n• Software provides user-friendly interaction with hardware through graphical or command-based interfaces.\n• There are different types of software such as system software (Operating System), application software (Browser, MS Word), and utility software.\n• Software controls how hardware resources like CPU time and memory are allocated and used.",
        },

        {
          id: "cf_t3",
          title: "Operating System",
          explanation:
            "• The Operating System (OS) acts as a bridge between user applications and hardware components.\n• It manages CPU scheduling, memory allocation, storage management, and device control.\n• It provides a user interface, either graphical (GUI) or command-line (CLI).\n• It ensures multiple programs can run simultaneously using multitasking.\n• It handles security, user permissions, and system stability.\n• It manages file systems and organizes data into directories and files.\n• Examples of computer OS include Windows 11, Ubuntu, and macOS 15.5.\n• Examples of mobile OS include iOS and Android.",
        },

        {
          id: "cf_t4",
          title: "Network",
          explanation:
            "• A network allows computers and devices to exchange data using communication protocols.\n• Devices in a network can share files, printers, and internet connections.\n• Networks use wired (Ethernet) or wireless (Wi-Fi) communication.\n• Networks can be categorized as LAN (Local Area Network), MAN (Metropolitan Area Network), or WAN (Wide Area Network).\n• Communication in a network follows protocols such as TCP/IP.",
        },

        {
          id: "cf_t5",
          title: "Internet",
          explanation:
            "• The Internet connects billions of devices across the globe.\n• It allows users to access websites, send emails, stream videos, and use online services.\n• Data on the Internet is transferred in small packets.\n• Each device on the Internet has a unique IP address for identification.\n• The Internet relies on routers and servers to manage and direct data traffic.\n• The Internet can be compared to a road transportation system where data acts like cargo, routers function like traffic junctions, and network cables act like roads.",
        },

        {
          id: "cf_t6",
          title: "Client & Server Communication",
          explanation:
            "• A client is a device or software application that initiates a request.\n• Examples of clients include web browsers, mobile apps, and desktop applications.\n• Clients request resources such as web pages, images, or database data.\n• A server is a powerful system that listens for incoming client requests.\n• It processes the request using backend logic or database queries.\n• After processing, it sends the requested data back to the client.\n• Servers handle multiple client requests simultaneously.\n• The flow is: Client sends HTTP request → travels through routers → server processes → server sends response → client displays result.",
        },

        {
          id: "cf_t7",
          title: "Internet Browsers",
          explanation:
            "• Browsers act as clients in the client-server model.\n• They send HTTP or HTTPS requests to web servers.\n• They receive responses in the form of HTML, CSS, and JavaScript.\n• They render web pages visually using rendering engines.\n• Browsers manage cookies, cache, and local storage.\n• They provide security features such as sandboxing and HTTPS encryption.\n• Examples include Google Chrome, Microsoft Edge, Safari, and Mozilla Firefox.",
        },
      ],
    },
  ],

  3: [
    {
      id: "sc_day_3",
      title: "Intro to Frontend",
      topics: [
        {
          id: "adf_t1",
          title: "Introduction to Application Development",
          explanation:
            "• Application development is the process of designing, building, and maintaining software applications.\n• An application (app) is software built for a specific purpose.\n• Apps can run on web browsers, desktops, or mobile devices.\n• Examples include messaging apps like WhatsApp, browsers like Google Chrome, and social media platforms like Instagram.\n• Application development involves planning, coding, testing, deployment, and maintenance.\n• Modern applications focus on performance, security, and user experience.\n• The development lifecycle ensures that applications are reliable, scalable, and meet user needs.\n• Understanding the fundamentals of application development is essential before diving into specific technologies like HTML, CSS, or JavaScript.",
        },

        {
          id: "adf_t2",
          title: "Types of Application Developers",
          explanation:
            "• There are different roles involved in building modern applications.\n\n• A Frontend Developer is responsible for designing and implementing the user interface.\n• They focus on layout, design, animations, and responsiveness.\n• Frontend developers work with HTML, CSS, and JavaScript.\n• They ensure the application is visually appealing and user-friendly.\n\n• A Backend Developer works on server-side logic and data processing.\n• They handle database management and API development.\n• Backend developers implement authentication and security mechanisms.\n• They ensure data consistency and system performance.\n\n• A Fullstack Developer combines frontend and backend development skills.\n• They can build complete applications independently.\n• Fullstack developers understand both UI design and server architecture.\n• They act as a bridge between frontend and backend teams.\n\n• Understanding these roles helps in choosing the right career path and understanding how teams collaborate to build applications.",
        },

        {
          id: "adf_t3",
          title: "How Browsers Interpret Websites",
          explanation:
            "• Understanding how web content is processed and displayed is fundamental to web development.\n• Users see text, images, layout, and interactive elements on a webpage.\n• Behind the scenes, browsers read HTML, CSS, and JavaScript code.\n• Browser engines convert this code into a visual representation that users can interact with.\n• The process includes parsing the code and rendering the visual output.\n• Different browsers use different rendering engines, but the core process remains the same.\n• Chrome uses the Blink engine, Firefox uses Gecko, and Safari uses WebKit.\n• Knowing how browsers interpret websites helps developers write efficient and compatible code.",
        },

        {
          id: "adf_t4",
          title: "HTML5 - Structure of Web Pages",
          explanation:
            "• HTML stands for HyperText Markup Language.\n• It defines the structure of a webpage using tags.\n• HyperText refers to clickable links that connect different resources on the web.\n• Markup refers to the structured formatting of content using specific tags and elements.\n• HTML5 is the latest version and introduced semantic tags like header, footer, article, and section.\n• HTML5 also introduced modern APIs for multimedia, storage, and geolocation.\n• HTML provides the skeleton of any web page.\n• Without HTML, there would be no structure for CSS to style or JavaScript to manipulate.\n• Every web developer must have a strong foundation in HTML before moving to advanced technologies.",
        },

        {
          id: "adf_t5",
          title: "Parsing and Rendering",
          explanation:
            "• Parsing and rendering are the internal browser processes for displaying web content.\n• Parsing involves reading and understanding the HTML structure sent by the server.\n• During parsing, the browser creates the DOM (Document Object Model), which is a tree-like representation of the HTML elements.\n• Rendering converts the DOM into visual content that users can see on the screen.\n• CSS styles are applied during the rendering phase to determine how elements look.\n• The browser combines the DOM and CSSOM (CSS Object Model) to create the render tree.\n• JavaScript can modify the DOM dynamically even after the initial rendering is complete.\n• Understanding parsing and rendering helps developers optimize page load performance and avoid layout thrashing.",
        },

        {
          id: "adf_t6",
          title: "CSS3 - Styling Web Pages",
          explanation:
            "• CSS (Cascading Style Sheets) is used to design and style the layout of websites.\n• CSS controls fonts, colors, sizes, spacing, and positioning of elements.\n• It enables responsive layouts that adapt to different screen sizes.\n• CSS supports animations and transitions for dynamic visual effects.\n• One of the key principles of CSS is the separation of content from design.\n• This means HTML handles structure while CSS handles presentation.\n• CSS3 introduced features like flexbox, grid, media queries, and custom properties.\n• Using CSS effectively improves user experience through visual enhancement.\n• A well-styled application looks professional and increases user engagement.",
        },

        {
          id: "adf_t7",
          title: "JavaScript - Adding Interactivity",
          explanation:
            "• JavaScript is the programming language that makes websites dynamic and interactive.\n• It allows dynamic content updates without requiring a full page reload.\n• JavaScript handles form validation and user input processing in real time.\n• It supports interactive features like maps, animations, sliders, and modals.\n• JavaScript communicates with servers using APIs (Application Programming Interfaces) to fetch and send data.\n• It creates rich and responsive user experiences that go beyond static HTML and CSS.\n• JavaScript runs in the browser and can also run on the server using Node.js.\n• Modern frameworks like React, Angular, and Vue are built on JavaScript.\n• Mastering JavaScript is essential for any web developer.",
        },

        {
          id: "adf_t8",
          title: "Mobile App Development",
          explanation:
            "• Mobile app development involves creating applications specifically for mobile platforms.\n\n• Android Development focuses on building apps for Android devices.\n• Android apps are primarily developed using Java and Kotlin programming languages.\n• Apps are distributed through the Google Play Store.\n• Android Studio is the official IDE for Android development.\n\n• iOS Development focuses on building apps for Apple devices like iPhone and iPad.\n• iOS apps are developed using Swift and Objective-C languages.\n• Apps are distributed through the Apple App Store.\n• Xcode is the official IDE for iOS development.\n\n• Both platforms have their own design guidelines and development ecosystems.\n• Choosing between Android and iOS development depends on the target audience and business requirements.\n• Cross-platform solutions can also target both platforms simultaneously.",
        },

        {
          id: "adf_t9",
          title: "Responsive Web Design",
          explanation:
            "• Responsive web design ensures that websites adapt to different screen sizes and devices.\n• It uses flexible grid layouts that resize proportionally based on the viewport.\n• CSS media queries are applied to change styles at specific breakpoints.\n• Content is adjusted for mobile, tablet, and desktop screens to provide the best experience.\n• Responsive design improves accessibility and usability for all users.\n• It provides a consistent user experience across devices without needing separate codebases.\n• Mobile-first design is a common approach where the design starts with the smallest screen and scales up.\n• Google prioritizes mobile-friendly websites in search rankings, making responsive design important for SEO.",
        },

        {
          id: "adf_t10",
          title: "Cross-Platform Technologies",
          explanation:
            "• Cross-platform technologies allow building applications for multiple platforms using a single codebase.\n• This approach significantly reduces development time and cost compared to building separate native apps.\n• Cross-platform frameworks use shared logic across platforms while still providing near-native performance.\n• React Native is a popular cross-platform framework developed by Facebook.\n• It allows developers to write mobile apps using JavaScript and React.\n• Other cross-platform technologies include Flutter (by Google), Xamarin, and Ionic.\n• While cross-platform solutions offer convenience, native development may still be preferred for performance-critical applications.\n• Understanding cross-platform technologies helps developers make informed decisions about the right approach for their projects.",
        },
      ],
    },
  ],

  4: [
    {
      id: "sc_day_4",
      title: "Intro to Backend",
      topics: [
        {
          id: "bcc_t1",
          title: "Introduction to Backend",
          explanation:
            "• The backend is the hidden infrastructure that powers applications.\n• Backend handles data storage, processing, and business logic.\n• It works behind the scenes and is not visible to users.\n• It manages servers, databases, and APIs.\n• The backend processes user requests and sends appropriate responses.\n• It ensures security, authentication, and performance of applications.\n• Key responsibilities include data storage (text, images, audio, video), server request and response handling, API communication between systems, and authentication and authorization.\n• Without a backend, applications cannot store data, process logic, or communicate with other services.",
        },

        {
          id: "bcc_t2",
          title: "Data Management in Backend",
          explanation:
            "• Managing and storing application data efficiently is a core backend responsibility.\n• Data includes text, images, audio, video, and structured records.\n• All data occupies physical storage space on servers.\n• Data is measured in units such as Bytes, KB, MB, GB, and TB.\n• Efficient data storage improves performance and scalability of applications.\n• For example, a simple webpage text may use around 200 Bytes.\n• A single image may consume around 200 KB.\n• An e-commerce product page may consume around 1.5 MB due to multiple images and text.\n• Understanding data sizes helps developers make informed decisions about storage, bandwidth, and optimization strategies.",
        },

        {
          id: "bcc_t3",
          title: "Backend Architecture",
          explanation:
            "• Backend architecture consists of core components that make backend systems functional.\n\n• A Server is a remote computer that processes incoming requests.\n• It executes backend logic and business rules.\n• It sends processed responses back to users and can handle multiple users simultaneously.\n\n• A Database stores structured and unstructured data.\n• It organizes data into tables or collections.\n• Databases allow efficient retrieval and modification of data.\n• They ensure data consistency and integrity.\n\n• An API (Application Programming Interface) allows communication between frontend and backend.\n• It enables integration between different systems.\n• APIs transfer data in formats like JSON or XML.\n\n• These three components — Server, Database, and API — form the backbone of any backend system.",
        },

        {
          id: "bcc_t4",
          title: "Real-World Backend Example (E-commerce)",
          explanation:
            "• Understanding backend operations through an Amazon-like e-commerce system helps visualize how backend components work together.\n• When a user searches for a product, the backend checks stock availability in the database.\n• When a customer places an order, the backend processes the order and updates product inventory after purchase.\n• The backend handles price updates and product launches by modifying database records.\n• It generates invoices and order confirmations that are sent to customers.\n• Payment processing, shipping notifications, and recommendation engines all rely on backend logic.\n• This real-world example demonstrates how servers, databases, and APIs collaborate to deliver a seamless shopping experience.",
        },

        {
          id: "bcc_t5",
          title: "Frontend vs Backend",
          explanation:
            "• Understanding the difference between frontend and backend is essential for web development.\n• The frontend is the visual part that users interact with directly.\n• It includes buttons, text, images, animations, and layout.\n• The backend is the hidden infrastructure that powers the frontend.\n• Frontend sends requests to backend APIs when users perform actions.\n• The backend processes these requests, queries databases, and sends responses back.\n• Users cannot directly access servers or databases — they only interact with the frontend.\n• Frontend technologies include HTML, CSS, and JavaScript.\n• Backend technologies include Node.js, Python, Java, and databases like MongoDB or PostgreSQL.\n• Both frontend and backend must work together seamlessly to deliver a complete application.",
        },

        {
          id: "bcc_t6",
          title: "Cloud Computing",
          explanation:
            "• Cloud computing involves using remote servers over the internet instead of maintaining physical infrastructure.\n• The cloud provides on-demand computing resources such as servers, storage, and networking.\n• There is no need to purchase or maintain expensive hardware.\n• Cloud services offer scalability based on traffic needs — you can scale up during high demand and scale down during low demand.\n• Businesses pay only for the resources they actually use, following a pay-as-you-go model.\n• Cloud computing ensures high availability and disaster recovery.\n• For example, a company can rent 1000 servers for 2 hours during high traffic events and scale down during normal days to save cost.\n• Cloud computing has revolutionized how applications are deployed and managed.",
        },

        {
          id: "bcc_t7",
          title: "Cloud Service Providers",
          explanation:
            "• Cloud service providers are companies that provide cloud infrastructure and services to businesses and developers.\n• They provide security and maintenance for all hosted services.\n• They handle hardware procurement and replacement, eliminating the need for companies to manage physical servers.\n• Cloud providers ensure uninterrupted power supply and internet connectivity.\n• They offer automatic scaling solutions that adjust resources based on demand.\n• Major cloud service providers include Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).\n• Each provider offers a wide range of services including compute, storage, databases, AI/ML, and networking.\n• Choosing the right cloud provider depends on specific project requirements, pricing, and available services.",
        },

        {
          id: "bcc_t8",
          title: "Cloud Scaling",
          explanation:
            "• Cloud scaling is the process of adjusting server resources based on demand.\n• During high-traffic events like Prime Day or flash sales, applications need to scale up by adding more servers.\n• During regular traffic periods, resources can be scaled down to reduce costs.\n• This dynamic scaling optimizes performance and reduces operational cost significantly.\n• For example, renting 1000 servers for 2 hours may cost around Rs. 1600.\n• In contrast, maintaining 1000 servers for 1 year may cost around Rs. 72 lakhs.\n• Cloud scaling can be horizontal (adding more servers) or vertical (upgrading existing server capacity).\n• Auto-scaling features provided by cloud platforms automatically adjust resources based on predefined rules and metrics.\n• Proper scaling strategy ensures applications remain responsive without overspending on infrastructure.",
        },

        {
          id: "bcc_t9",
          title: "Core Backend Technologies",
          explanation:
            "• Core backend technologies are the fundamental building blocks that power backend systems.\n\n• The Server handles incoming user requests, processes business logic, and returns appropriate responses.\n• Popular server-side technologies include Node.js, Express.js, Django, Flask, and Spring Boot.\n\n• The Database stores and organizes application data.\n• It allows querying and updating data efficiently.\n• Databases can be relational (MySQL, PostgreSQL) or non-relational (MongoDB, Firebase).\n\n• The API facilitates communication between frontend and backend.\n• It ensures structured data exchange using standard protocols like REST or GraphQL.\n\n• Together, these technologies form the complete backend stack.\n• Understanding how servers, databases, and APIs work together is essential for building robust and scalable applications.",
        },
      ],
    },
  ],

  5: [
    {
      id: "sc_day_5",
      title: "Intro to GenAI",
      topics: [
        {
          id: "genai_t1",
          title: "What is Generative AI?",
          explanation:
            "• Generative AI is a subset of deep learning focused on generating new content.\n• It creates new content such as text, images, video, audio, and code.\n• Generative AI learns patterns from large training datasets.\n• It uses deep neural networks to understand structure and context.\n• Instead of copying stored data, it generates new outputs dynamically.\n• The generated responses are human-like and meaningful.\n• For example, ChatGPT generates human-like responses based on learned language patterns.\n• Generative AI has transformed industries including content creation, customer support, software development, and creative arts.\n• Understanding Generative AI is essential for leveraging modern AI tools effectively.",
        },

        {
          id: "genai_t2",
          title: "Generative AI Tools",
          explanation:
            "• There are many popular tools that generate new AI-driven content across different formats.\n• Text generation tools create articles, conversations, and written content.\n• Image generation tools create artwork, designs, and visual content from text prompts.\n• Video generation tools create AI-based videos from descriptions or scripts.\n• Voice AI tools generate realistic speech and audio content.\n• Examples of popular Generative AI tools include OpenAI ChatGPT for text generation, OpenAI DALL·E 3 for image generation, Rytr for AI writing assistance, Runway for video generation, and ElevenLabs for voice AI.\n• These tools are rapidly evolving and becoming more accessible to developers and creators.\n• Knowing the right tool for the right task improves productivity and creative output.",
        },

        {
          id: "genai_t3",
          title: "Large Language Models (LLMs)",
          explanation:
            "• Large Language Models are advanced AI systems trained to understand and generate human language.\n• They are built using deep neural networks with complex architectures.\n• LLMs are trained on massive datasets including books, websites, and various text sources.\n• They contain billions of parameters that help capture language patterns.\n• LLMs understand context, grammar, and intent behind text.\n• They generate coherent and meaningful text responses.\n• Examples of popular LLMs include ChatGPT by OpenAI, Google Gemini, and Anthropic Claude.\n• LLMs power a wide range of applications from chatbots and content generation to code assistance and research.\n• The quality of an LLM depends on its training data, architecture, and number of parameters.",
        },

        {
          id: "genai_t4",
          title: "Resources Required to Develop an LLM",
          explanation:
            "• Building a large-scale AI model requires massive infrastructure and resources.\n• Millions of CPUs, GPUs, or TPUs are needed for computation.\n• Terabytes of RAM are required for processing large datasets in memory.\n• Petabytes of storage are needed to hold the training data.\n• Developing an LLM requires massive financial investment, often hundreds of crores.\n• Training can take months of continuous computation.\n• A team of top AI researchers and engineers is essential for model design, training, and optimization.\n• Due to these requirements, only large organizations like OpenAI, Google, and Meta can build LLMs from scratch.\n• Smaller companies and developers typically use pre-trained models and fine-tune them for specific tasks.",
        },

        {
          id: "genai_t5",
          title: "Understanding the Term LLM",
          explanation:
            "• Breaking down the meaning of Large Language Model helps understand its core nature.\n\n• Large refers to the billions of parameters in the model.\n• More parameters improve the model's contextual understanding and ability to generate nuanced responses.\n• Large datasets increase the model's capability to handle diverse topics.\n\n• Language means the model works primarily with text-based data.\n• It processes documents, conversations, and written content.\n• The model understands linguistic patterns, grammar, and semantics.\n\n• Model refers to the final trained system.\n• It uses learned patterns to generate meaningful output based on input prompts.\n• The model is the result of extensive training on data using neural network architectures.\n\n• Together, LLM describes a large-scale trained system specialized in understanding and generating human language.",
        },

        {
          id: "genai_t6",
          title: "Capabilities of LLM",
          explanation:
            "• Large Language Models have several core abilities that make them powerful tools.\n• Reasoning and logical analysis allow LLMs to solve problems and draw conclusions.\n• Language understanding and contextual awareness help them interpret complex queries.\n• Text summarization enables condensing long documents into concise summaries.\n• Text generation allows creating articles, stories, emails, and other written content.\n• Language translation supports converting text between different languages accurately.\n• Code generation helps developers write, debug, and explain code.\n• These capabilities make LLMs versatile tools applicable across industries including education, healthcare, finance, and software development.",
        },

        {
          id: "genai_t7",
          title: "Multimodal LLM",
          explanation:
            "• Multimodal LLMs are AI systems capable of processing multiple data types simultaneously.\n• They understand text, images, videos, and code within a single model.\n• Multimodal models combine multiple input formats into a unified understanding.\n• They generate responses using cross-modal reasoning, connecting information across different data types.\n• For example, GPT-4o can analyze images and respond with natural language explanations.\n• This means you can upload a photo and ask questions about it, and the model will understand both the visual and textual context.\n• Multimodal capabilities represent the next evolution of AI, moving beyond text-only interactions.\n• They enable applications like visual question answering, document understanding, and creative content generation.",
        },

        {
          id: "genai_t8",
          title: "Fine-Tuning",
          explanation:
            "• Fine-tuning is the process of customizing a pre-trained AI model for specific tasks or domains.\n• It adapts an existing model to perform better in a particular area.\n• Fine-tuning significantly reduces cost compared to training a model from scratch.\n• It improves task-specific performance by training on domain-specific datasets.\n• For example, fine-tuning a model using company FAQs can create an effective customer support chatbot.\n• The fine-tuning process involves selecting a pre-trained base model, preparing domain-specific training data, and running additional training cycles.\n• Fine-tuned models retain the general knowledge of the base model while gaining specialized expertise.\n• This approach makes advanced AI accessible to smaller organizations without massive computational resources.",
        },

        {
          id: "genai_t9",
          title: "Hugging Face",
          explanation:
            "• Hugging Face is a platform and open-source community for AI model development and deployment.\n• It provides access to thousands of pre-trained AI models for various tasks.\n• The Transformers library by Hugging Face is widely used for NLP tasks like text classification, translation, and generation.\n• Hugging Face hosts datasets and model repositories that researchers and developers can use.\n• It acts as a hub for sharing AI models and collaboration within the AI community.\n• Developers can fine-tune and deploy models directly through the platform.\n• Examples include using Hugging Face Transformers to load BERT for text analysis and deploying GPT-based models in production applications.\n• Hugging Face has become one of the most important platforms in the AI ecosystem, democratizing access to advanced AI models.",
        },
      ],
    },
  ],

  6: [
    {
      id: "sc_day_6",
      title: "Introduction to GenAI in Web Development",
      topics: [
        {
          id: "sc_day_6_t1",
          title: "Concept Overview",
          explanation:
            '• AI is transforming the way websites are built and designed.\n• Generative AI helps developers generate HTML and CSS from prompts.\n• A website is the visual interface users see in a browser.\n• Basic websites are built using HTML and CSS.\n• In real-world development, developers work using design mockups as references.\n• Understanding frontend fundamentals is essential before using AI tools effectively.'
        },
        {
          id: "sc_day_6_t2",
          title: "Generative AI Models & GPT-4o",
          explanation:
            '• Multiple AI models are available such as GPT, Gemini, Claude, Meta, DeepSeek, and Grok.\n• These models can generate content and frontend code.\n• GPT-4o supports text, image, audio, and video inputs.\n• AI tools can convert design mockups into working HTML and CSS.\n• Clear prompts improve the quality and accuracy of generated websites.'
        },
        {
          id: "sc_day_6_t3",
          title: "Prompt Guidelines for Website Generation",
          explanation:
            '• Provide clear instructions to replicate the mockup exactly.\n• Match layout, colors, fonts, spacing, borders, and shadows.\n• Use valid image links from Unsplash.\n• Keep HTML and CSS code separate.\n• Include animations and transitions to enhance user experience.'
        },
      ]
    }
  ],
  7: [
    {
      id: "sc_day_7",
      title: "Getting started with Frontend",
      topics: [
        {
          id: "adfs_t1",
          title: "Application Development",
          explanation:
            "• Application development is the process of designing and building software applications to solve specific user problems.\n• An application is software created to perform a specific task.\n• Applications can run on mobile phones, computers, tablets, or web browsers.\n• Application development includes planning, designing, coding, testing, and deployment.\n• Applications help reduce manual effort and save time for users.\n• Examples include shopping apps like Amazon and Flipkart, food delivery apps like Swiggy and Zomato, banking apps, and social media apps.\n• There are different types of application development: Web Application Development, Mobile Application Development, and Desktop Application Development.\n• Each type targets different platforms and user needs.\n• Understanding the fundamentals of application development is the first step toward becoming a proficient developer.",
        },

        {
          id: "adfs_t2",
          title: "Full Stack Development",
          explanation:
            "• Full stack development is a development approach that combines both frontend and backend technologies.\n\n• The Frontend refers to everything visible to the user.\n• It includes UI design, screens, buttons, animations, and layouts.\n• The frontend handles user interactions directly.\n\n• The Backend handles data storage and business logic.\n• It processes user requests behind the scenes.\n• The backend manages authentication, payments, and database operations.\n\n• Full Stack combines both frontend and backend.\n• A full-stack developer works on both layers of the application.\n• Full-stack applications manage UI and server logic together.\n\n• For example, on Amazon, the frontend handles product listing and cart display, while the backend handles orders and payments.\n• On Swiggy, the frontend shows restaurants, while the backend processes orders and delivery tracking.\n• Full stack development provides a complete understanding of how applications work end to end.",
        },

        {
          id: "adfs_t3",
          title: "Frontend Development",
          explanation:
            "• Frontend development focuses on the visible and interactive part of an application.\n• It is centered on user interface (UI) and user experience (UX).\n• Frontend includes layout design, colors, fonts, and responsiveness.\n• It handles user interactions like clicks, form submissions, and navigation.\n• The goal is to ensure the application looks attractive and is user-friendly.\n\n• The core technologies used in frontend development are:\n• HTML defines the structure or layout of the application.\n• CSS adds styling such as colors, shapes, spacing, and positioning.\n• JavaScript adds logic and interactivity like button clicks and dynamic content updates.\n\n• These three technologies work together to create the complete frontend experience.\n• Modern frontend frameworks like React, Angular, and Vue build on top of these core technologies.",
        },

        {
          id: "adfs_t4",
          title: "Backend Development",
          explanation:
            "• Backend development is the hidden part of an application that manages data and logic.\n• It stores and manages application data in databases.\n• The backend processes user requests sent from the frontend.\n• It implements business logic and security rules.\n• Backend handles user authentication such as login and signup.\n• It processes payments and transactions securely.\n• Backend technologies include server-side languages like Node.js, Python, Java, and frameworks like Express, Django, and Spring Boot.\n• Databases like MySQL, PostgreSQL, and MongoDB are used to store data.\n• APIs (Application Programming Interfaces) connect the frontend to the backend.\n• A strong backend ensures the application is secure, fast, and reliable.",
        },

        {
          id: "adfs_t5",
          title: "Responsive Web Design",
          explanation:
            "• Responsive web design is the practice of designing websites to adapt automatically to different screen sizes.\n• It ensures websites work properly on mobile, tablet, laptop, and desktop screens.\n• The layout automatically adjusts based on the screen width of the device.\n• Responsive design improves user experience across all devices.\n• It eliminates the need to build separate mobile and desktop versions of a website.\n• For example, a mobile view shows content in a single column layout, while a desktop view spreads content across a wider screen.\n• CSS media queries are the primary tool used to implement responsive design.\n• Flexbox and CSS Grid are layout systems that help create flexible and responsive layouts.\n• Responsive design is a must-have skill for every frontend developer in modern web development.",
        },
      ],
    },
  ],

  8: [
    {
      id: "sc_day_8",
      title: "Introduction to HTML",
      topics: [
        {
          id: "sc_day_8_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Introduction to HTML". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_8_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Introduction to HTML" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_8_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Introduction to HTML". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  9: [
    {
      id: "sc_day_9",
      title: "Introduction to Programming & JavaScript Fundamentals",
      topics: [
        {
          id: "sc_day_9_t1",
          title: "Introduction to Programming",
          explanation:
            "• Software is a collection of instructions given to hardware.\n• It enables computers to perform specific tasks.\n• Examples include browsers, apps, and operating systems.\n\n• Programming is the process of writing instructions to create software.\n• It involves logic, problem-solving, and implementation.\n• Programmers use programming languages to communicate with computers.\n\n• The instructions written by programmers are called code.\n• Code follows specific syntax rules.\n• Code must be error-free to execute properly.\n\n• A programming language is used to give instructions to a computer.\n• There are approximately 700+ programming languages.\n• Examples include JavaScript, Java, Python, and C++.\n\n• Syntax refers to the rules of a programming language.\n• It is similar to grammar rules in spoken languages.\n• Incorrect syntax results in errors.",
        },

        {
          id: "sc_day_9_t2",
          title: "Why JavaScript?",
          explanation:
            '• JavaScript is one of the most popular programming languages worldwide.\n• It is used for both frontend and backend development.\n• All major browsers support JavaScript.\n• Approximately 62% of developers use JavaScript globally.\n• It is easy to learn compared to many other languages.\n• It requires minimal code for simple tasks.\n\n• For example, printing Hello World in Java requires an entire class definition:\n• class HelloWorld { public static void main(String[] args) { System.out.println("Hello World!"); }}\n• In JavaScript, it takes just one line:\n• console.log("Hello World!");\n\n• Major companies using JavaScript include Google, Facebook, Netflix, PayPal, Uber, eBay, and Groupon.\n\n• Career opportunities with JavaScript include Web Developer, JavaScript Developer, Frontend Engineer, Backend Developer, Mobile App Developer, UI/UX Developer, and Game Developer.',
        },

        {
          id: "sc_day_9_t3",
          title: "ECMAScript",
          explanation:
            "• ECMAScript is the official standard specification that defines how JavaScript works.\n• JavaScript follows ECMAScript rules.\n• It ensures consistency across different browsers.\n• New features are introduced in each ECMAScript version.\n\n• Key versions include:\n• ES5 – Earlier standard version.\n• ES6 – Introduced let, const, and arrow functions.\n• ES2020 and ES2022 – Latest improvements and features.\n\n• Understanding ECMAScript versions helps developers know which features are available in different environments.",
        },

        {
          id: "sc_day_9_t4",
          title: "Hello World in JavaScript",
          explanation:
            '• The simplest JavaScript program to display output is:\n• console.log("Hello World!");\n\n• This single line prints the message Hello World! to the browser console.\n\n• Common mistakes beginners make include:\n• Spelling mistake in console.log.\n• Using uppercase C in Console.log.\n• Missing quotation marks around the text.\n• Missing parentheses after log.\n• Missing semicolon at the end.\n\n• Avoid these errors to ensure your code executes correctly.',
          examples: [
            {
              language: "javascript",
              code: 'console.log("Hello World!");',
              explanation:
                "• console.log prints output to the browser console.\n• The text must be enclosed in quotation marks.\n• Semicolon marks the end of the statement.",
            },
          ],
        },

        {
          id: "sc_day_9_t5",
          title: "Printing Numbers vs Strings",
          explanation:
            '• Numbers do not require quotation marks in JavaScript.\n• Text (strings) must be enclosed in quotation marks.\n\n• console.log(2 + 5) evaluates the arithmetic and prints the result 7.\n• console.log("2 + 5") treats the content as text and prints 2 + 5 as a string.\n\n• Understanding this difference is important because it affects how JavaScript processes and displays data.',
          examples: [
            {
              language: "javascript",
              code: 'console.log(2 + 5);\nconsole.log("2 + 5");',
              explanation:
                "• First line prints 7 because JavaScript evaluates the arithmetic expression.\n• Second line prints 2 + 5 as text because it is enclosed in quotation marks.",
            },
          ],
        },

        {
          id: "sc_day_9_t6",
          title: "JavaScript as a Calculator",
          explanation:
            "• JavaScript can perform arithmetic operations directly.\n\n• Addition uses the + symbol. Example: console.log(2 + 5); prints 7.\n• Subtraction uses the - symbol. Example: console.log(5 - 2); prints 3.\n• Multiplication uses the * symbol. Example: console.log(2 * 5); prints 10.\n• Division uses the / symbol. Example: console.log(6 / 3); prints 2.\n\n• These basic arithmetic operations are fundamental to programming and data processing in JavaScript.",
          examples: [
            {
              language: "javascript",
              code: "console.log(2 + 5);\nconsole.log(5 - 2);\nconsole.log(2 * 5);\nconsole.log(6 / 3);",
              explanation:
                "• Addition: 2 + 5 prints 7.\n• Subtraction: 5 - 2 prints 3.\n• Multiplication: 2 * 5 prints 10.\n• Division: 6 / 3 prints 2.",
            },
          ],
        },

        {
          id: "sc_day_9_t7",
          title: "Frequently Asked Interview Questions",
          explanation:
            "• What is a programming language?\n• A programming language is a language used to give instructions to the computer in a way it understands.\n\n• What is JavaScript?\n• JavaScript is a programming language used to create software, especially web applications. It follows ECMAScript rules.\n\n• Where and why is JavaScript used?\n• JavaScript is used in frontend and backend development because it is supported by all major browsers and is easy to learn.\n\n• What is the main purpose of JavaScript?\n• The main purpose of JavaScript is to write code that creates interactive and dynamic web applications.",
        },
      ],
    },
  ],

  10: [
    {
      id: "sc_day_10",
      title: "Leveraging GenAI for Accelerated Learning",
      topics: [
        {
          id: "sc_day_10_t1",
          title: "Leveraging GenAI for Accelerated Learning in Web Development",
          explanation:
            "• Leveraging Generative AI for accelerated learning refers to using AI tools to make the learning process faster, clearer, and more effective, especially while learning web technologies like HTML and CSS.\n• Generative AI can assist learners by explaining concepts, answering questions instantly, and guiding them through difficult topics.\n\n• Gen AI has the potential to transform how learners approach web development.\n• Instead of struggling alone or relying only on static resources, learners can interact with AI to gain personalized explanations based on their current understanding level.\n• This interaction reduces confusion and speeds up concept clarity.\n\n• Generative AI does not replace learning; instead, it enhances learning by acting as a support system.\n• It helps learners grasp concepts more efficiently and encourages continuous exploration and improvement.\n\n• Example: When a learner is building a website using HTML and CSS and does not understand why a layout behaves a certain way, Gen AI can explain the concept clearly, allowing the learner to fix issues quickly and continue learning without long interruptions.",
        },

        {
          id: "sc_day_10_t2",
          title: "Role of GenAI in Learning HTML and CSS",
          explanation:
            "• Generative AI plays the role of a tutor in the learning journey of HTML and CSS.\n• It is available 24/7 and does not depend on class timings or instructor availability.\n• Learners can ask questions at any time and receive instant explanations.\n\n• Gen AI can break down tough concepts, explain them using simple language, and even quiz learners to reinforce understanding.\n• This makes learning HTML and CSS more interactive and less intimidating for beginners.\n\n• By providing explanations, clarifications, and practice opportunities, Gen AI ensures that learners can move forward with confidence and build strong foundations in web development.\n\n• Example: If a learner is confused about how HTML structure and CSS styling work together, Gen AI can explain both step by step, helping the learner understand how content and design interact on a webpage.",
        },

        {
          id: "sc_day_10_t3",
          title: "How GenAI Helps in Learning New HTML and CSS Concepts",
          explanation:
            "• Generative AI enhances learning by simplifying complex HTML and CSS concepts into easy-to-understand explanations.\n• It uses analogies, examples, and beginner-friendly language to make abstract ideas more relatable.\n\n• Instead of overwhelming learners with technical jargon, Gen AI adapts explanations to the learner's level.\n• This approach helps learners understand concepts deeply rather than memorizing rules.\n\n• By breaking down topics into smaller parts, Gen AI reduces learning gaps and makes the learning process smoother and more engaging.\n\n• Example: A learner struggling with CSS styling can ask Gen AI to explain it in simple terms.\n• The AI may compare HTML to the structure of a house and CSS to decoration, helping the learner visualize the concept clearly.",
        },

        {
          id: "sc_day_10_t4",
          title: "Clarifying Doubts Using Structured Prompts",
          explanation:
            "• Generative AI becomes more effective when learners use structured prompts.\n• Structured prompts ask AI to act as an experienced HTML and CSS developer and explain specific doubts in simple terms.\n\n• Structured prompts help learners focus on exactly what they do not understand.\n• Instead of receiving general explanations, learners get targeted clarifications broken down into smaller, easier parts.\n\n• This method ensures that confusion is resolved quickly and learning continues smoothly without frustration.\n\n• Example: If a learner is confused about a specific CSS property, they can ask Gen AI to explain only that part using real-world examples and child-friendly language, making the explanation clear and memorable.",
        },

        {
          id: "sc_day_10_t5",
          title: "Active Learning Using AI Questioning Techniques",
          explanation:
            "• Generative AI supports active learning by asking learners questions instead of only providing answers.\n• This approach encourages learners to think, reason, and reflect on what they know.\n\n• This approach is similar to the Feynman technique, where understanding is tested through explanation and questioning.\n• Gen AI asks questions, evaluates responses, and provides feedback to identify misconceptions.\n\n• This method strengthens foundational knowledge and ensures learners truly understand HTML and CSS concepts.\n\n• Example: While learning HTML, Gen AI may ask a learner why a particular tag is used.\n• If the learner struggles, AI provides feedback and guidance, helping the learner improve understanding step by step.",
        },

        {
          id: "sc_day_10_t6",
          title: "Testing Knowledge Through Quizzes and Coding Questions",
          explanation:
            "• Generative AI can generate quizzes and coding questions to test a learner's understanding of HTML and CSS.\n• These quizzes can be interactive, presenting one question at a time and waiting for the learner's response.\n\n• Gen AI can provide immediate feedback, track progress, and increase difficulty gradually without introducing new concepts.\n• This ensures structured and focused learning.\n\n• Testing knowledge regularly helps reinforce concepts and identify areas that need improvement.\n\n• Example: After completing a CSS topic, a learner can request a quiz.\n• Gen AI asks questions, explains correct and incorrect answers, and continues only when the learner demonstrates proper understanding.",
        },

        {
          id: "sc_day_10_t7",
          title: "Explaining HTML and CSS Code with GenAI",
          explanation:
            "• Generative AI helps learners understand difficult code by first explaining what the code does overall and then breaking it into individual steps.\n• This step-by-step explanation makes code easier to understand for beginners.\n\n• Prompts where AI acts like a teacher explaining code to a school student help remove fear and confusion around reading code.\n\n• By understanding code logic clearly, learners gain confidence and improve their coding skills.\n\n• Example: When a learner encounters an HTML file they do not understand, Gen AI can explain the purpose of the file, then describe each tag and style rule in simple language.",
        },

        {
          id: "sc_day_10_t8",
          title: "AI Tools for Accelerated Learning of HTML and CSS",
          explanation:
            "• Several AI tools are designed to support learning by organizing, summarizing, and exploring content efficiently.\n• These tools help learners manage study material and deepen understanding.\n\n• Tools such as NotebookLM, Perplexity AI, YouLearn, and StudyPal provide features like document summarization, mind maps, study guides, citations, and real-time answers.\n\n• These tools complement Generative AI by improving research, revision, and structured learning.\n\n• Example: A learner can upload HTML and CSS notes into NotebookLM to create summaries and mind maps, and use Perplexity AI to search for explanations with reliable sources and follow-up questions.",
        },
      ],
    },
  ],

  11: [
    {
      id: "sc_day_11",
      title: "Leveraging GenAI for Accelerated Learning",
      topics: [
        {
          id: "sc_day_11_t1",
          title: "AI-Powered Learning",
          explanation:
            "• AI-powered learning means using artificial intelligence as a support system to improve how we learn.\n• AI acts like a smart assistant that adjusts explanations based on the learner's current knowledge level.\n• It helps learners understand concepts step by step instead of forcing them to memorize information.\n\n• AI is not meant to replace learning but to enhance it.\n• When used correctly, AI helps learners explore ideas, ask better questions, and strengthen understanding over time.\n\n• Example: Imagine a student learning JavaScript for the first time who does not understand what console.log() does.\n• Instead of searching multiple websites, the student asks an AI tool to explain it in simple terms.\n• The AI explains what the statement does, why it is used, and how it behaves when executed.\n• The student can then ask follow-up questions until the concept becomes clear.\n• This shows how AI supports learning rather than replacing it.",
        },

        {
          id: "sc_day_11_t2",
          title: "Maintaining Balance While Using AI",
          explanation:
            "• Maintaining balance is important when using AI tools for learning.\n• Real learning happens when the learner understands the logic behind the solution, not just the solution itself.\n\n• If learners depend fully on AI, they may complete tasks faster but fail to develop problem-solving skills.\n• Therefore, building a strong foundation that AI cannot replace is essential.\n\n• The key is to use AI for guidance while still thinking independently.\n\n• Example: Suppose a learner asks AI to write a JavaScript program.\n• The AI provides the code instantly.\n• If the learner copies it without understanding, they may not be able to solve a similar problem later.\n• Instead, the learner should ask the AI to explain how each line works and why it is written that way.\n• This balanced approach ensures learning is not compromised.",
        },

        {
          id: "sc_day_11_t3",
          title: "AI Tools for Accelerated Learning",
          explanation:
            "• Several AI tools developed by different organizations can be used for learning.\n• Each tool has unique features and supports learning in its own way.\n\n• Some commonly used tools include ChatGPT, Meta AI, Gemini, and Claude.\n\n• These tools help learners understand concepts, generate explanations, create quizzes, and guide coding practice.\n\n• Example: A learner studying JavaScript can use ChatGPT to ask beginner-level questions, Gemini for structured explanations, or Claude to break down complex code into simple steps.\n• By switching between tools, learners can compare explanations and strengthen their understanding.",
        },

        {
          id: "sc_day_11_t4",
          title: "Three-Step Approach for Leveraging GenAI",
          explanation:
            "• A structured three-step approach helps use Generative AI effectively for accelerated learning.\n\n• Step 1 focuses on using AI tools such as ChatGPT or Gemini.\n• Step 2 emphasizes structured prompting to guide AI responses correctly.\n• Step 3 involves enhancing learning by practicing and applying concepts independently.\n\n• This approach ensures AI is used thoughtfully and not randomly.\n\n• Example: A learner first asks AI to explain a JavaScript concept (Step 1).\n• Then they refine the question to ask for step-by-step logic or examples (Step 2).\n• Finally, they try writing code themselves and use AI only to verify or improve it (Step 3).\n• This method strengthens understanding and builds real skills.",
        },

        {
          id: "sc_day_11_t5",
          title: "AI as a Learning Partner, Not a Code Generator",
          explanation:
            "• AI should be treated as a tutor or learning partner rather than as a shortcut for generating ready-made code.\n• A tutor's role is to help learners understand concepts, think logically, and reason through problems.\n\n• When AI is used as a learning partner, it supports curiosity and analytical thinking.\n• Learners are encouraged to ask why something works, explore different ideas, and understand the logic behind code.\n• This approach helps build strong foundations and reduces dependency on AI-generated solutions.\n\n• By guiding learners step by step and explaining concepts clearly, AI helps learners gain confidence and develop problem-solving skills.\n\n• Example: Instead of asking 'Write a JavaScript program for me,' a learner asks 'Explain how this JavaScript program works and why each step is needed.'\n• The AI then walks through the logic and reasoning behind the code, helping the learner understand rather than just use the solution.",
        },

        {
          id: "sc_day_11_t6",
          title: "Writing Better Prompts for Learning",
          explanation:
            "• Prompt quality plays a crucial role in determining the quality of AI responses.\n• When a learner provides a vague or unclear prompt, the AI is likely to return a broad or less useful answer.\n• In contrast, clear and specific prompts help the AI understand exactly what the learner wants, resulting in more detailed and meaningful explanations.\n\n• Learning how to write better prompts is therefore an important skill for accelerated learning.\n• Well-structured prompts guide the AI to focus on the learner's doubts, explain concepts in the required depth, and present information in a way that matches the learner's level.\n\n• Example: If a learner asks 'Explain JavaScript,' the AI may give a general overview.\n• However, when the learner asks 'Explain how a JavaScript loop works with a simple example and a real-life analogy,' the AI provides a focused, clearer, and deeper explanation.\n• This targeted approach makes learning more effective and easier to understand.",
        },

        {
          id: "sc_day_11_t7",
          title: "Coding Practice, Quizzes, and Problem Generation with GenAI",
          explanation:
            "• GenAI can support learning by generating code, explaining it step by step, creating quizzes, and producing coding problems.\n• It can adjust difficulty levels based on learner performance and include edge cases for deeper understanding.\n• This makes learning more interactive and personalized.\n\n• Example: After learning loops in JavaScript, a learner asks AI to generate a quiz.\n• The AI creates questions, waits for answers, explains mistakes, and increases difficulty when the learner performs well.\n• Later, the learner asks AI to generate a coding problem with sample inputs and outputs.\n• This reinforces learning through active practice and immediate feedback.",
        },
      ],
    },
  ],

  12: [
    {
      id: "sc_day_12",
      title: "Variables & Datatypes in JavaScript",
      topics: [
        {
          id: "sc_day_12_t1",
          title: "What is a Variable? Variable Declaration in JavaScript",
          explanation:
            "• A variable in JavaScript is like a container used to store data values.\n• These values can represent numbers, text, or other data types that a program needs to work with.\n• The value stored in a variable can change during program execution, depending on how the variable is declared.\n\n• Every value stored inside a variable is called data.\n• Variables help programmers store data once and reuse or update it multiple times without rewriting the value again and again.\n\n• JavaScript allows variable declaration using let, const, and var.\n\n• Example: Imagine a program that stores a user's age. Initially, the age is 10.\n• Later, when the user grows older, the value needs to be updated.\n• Instead of changing the value everywhere in the program, the programmer changes it in one place by updating the variable.\n• This shows how variables act as containers whose values can change.",
        },

        {
          id: "sc_day_12_t2",
          title: "let, const, and var — Differences and Examples",
          explanation:
            "• JavaScript provides three keywords to declare variables, each with different behavior.\n\n• let allows variable declaration without assigning a value initially.\n• Variables declared using let can be reassigned later, making them useful when values change during execution.\n\n• const requires initialization at the time of declaration.\n• Once a value is assigned, it cannot be changed.\n• Attempting to reassign a const variable results in an error.\n\n• var is an older way of declaring variables.\n• Variables declared with var can be reassigned and redeclared, which can cause unexpected issues.\n• Because of this, let and const are recommended over var.\n\n• Example:\n• Using let, a variable can first store 10 and later be updated to store 15.\n• Using const, once a value like 7 is stored, it remains fixed throughout the program.\n• Using var, the same variable name can be declared again and assigned a new value, which may confuse the program flow.",
          examples: [
            {
              language: "javascript",
              code: 'let age = 10;\nage = 15;\nconsole.log(age);\n\nconst pi = 7;\nconsole.log(pi);\n\nvar name = "Alice";\nvar name = "Bob";\nconsole.log(name);',
              explanation:
                "• let allows reassignment — age changes from 10 to 15.\n• const value is fixed — pi stays 7 and cannot be changed.\n• var allows redeclaration — name is declared twice without error.",
            },
          ],
        },

        {
          id: "sc_day_12_t3",
          title: "JavaScript Variable Naming Rules",
          explanation:
            "• JavaScript follows strict rules for naming variables to ensure programs run correctly and are easy to understand.\n\n• A variable name must start with a letter, underscore (_), or dollar sign ($).\n• It can include letters, numbers, underscores, and dollar signs after the first character.\n\n• Variable names cannot start with numbers.\n• Variable names cannot contain spaces.\n• Variable names cannot use reserved keywords — words already used by JavaScript for its own functionality.\n\n• Using meaningful variable names improves readability and reduces errors.\n\n• Example:\n• userName clearly indicates it stores a user's name — valid.\n• _totalAmount suggests a stored total value — valid.\n• 2name starts with a number — invalid and causes an error.\n• user name contains a space — invalid.\n• Using let as a variable name is also not allowed because JavaScript already uses it as a keyword.",
        },

        {
          id: "sc_day_12_t4",
          title: "JavaScript Data Types and Their Categories",
          explanation:
            "• In JavaScript, every value belongs to a data type.\n• Data types define what kind of data a variable can store.\n• JavaScript data types are divided into two main categories: Primitive and Non-Primitive (Reference) types.\n\n• Primitive data types store a single value.\n• Examples include Number, Boolean, String, and Undefined.\n• These types are simple and store direct values.\n\n• Non-Primitive data types store multiple values or complex data.\n• Examples include Arrays, Objects, and Functions.\n• These types are used to store collections of data or logic.\n\n• Example:\n• A number like 10 is a primitive value because it stores a single number.\n• A string like Hello stores a sequence of characters.\n• An array, on the other hand, can store multiple values together, such as a list of numbers or names.",
        },

        {
          id: "sc_day_12_t5",
          title: "Primitive Data Types and the typeof Operator",
          explanation:
            "• Primitive data types include Number, Boolean, String, and Undefined.\n\n• The Number type includes both integers and floating-point values.\n• Boolean values can only be true or false (written in lowercase).\n• Strings represent text and must be written inside single quotes, double quotes, or backticks.\n• Undefined means a variable has been declared but no value has been assigned to it.\n\n• The typeof() operator is used to check the type of a value stored in a variable.\n\n• Example:\n• If a variable stores 900, it is treated as a Number.\n• If it stores 9.2, it is still a Number.\n• A variable storing false is a Boolean.\n• A variable declared but not assigned any value automatically becomes undefined.\n• Using typeof, JavaScript confirms each of these types during execution.",
          examples: [
            {
              language: "javascript",
              code: "let a = 900;\nconsole.log(typeof(a));\n\nlet b = 9.2;\nconsole.log(typeof(b));\n\nlet c = false;\nconsole.log(typeof(c));\n\nlet d;\nconsole.log(typeof(d));",
              explanation:
                "• typeof(900) returns 'number'.\n• typeof(9.2) returns 'number' — both integers and floats are Number type.\n• typeof(false) returns 'boolean'.\n• typeof(undefined variable) returns 'undefined'.",
            },
          ],
        },

        {
          id: "sc_day_12_t6",
          title: "Importance of Semicolons in JavaScript",
          explanation:
            "• Semicolons are used to mark the end of statements in JavaScript.\n• They help the JavaScript engine understand where one instruction ends and the next begins.\n\n• JavaScript has a feature called Automatic Semicolon Insertion (ASI), which automatically inserts semicolons when they are missing.\n• However, relying on ASI can lead to unexpected bugs and confusing behavior.\n\n• Therefore, using semicolons consistently is considered a best practice for clarity, error prevention, and maintainability.\n\n• Example:\n• When multiple statements are written on the same line without semicolons, JavaScript may misinterpret them.\n• This can cause incorrect results or errors.\n• By always adding semicolons, developers clearly separate instructions, making the code easier to read and less error-prone.",
          examples: [
            {
              language: "javascript",
              code: "let x = 10;\nlet y = 20;\nconsole.log(x + y);",
              explanation:
                "• Each statement ends with a semicolon.\n• This clearly separates variable declarations from the console.log call.\n• The output is 30 — clean and predictable.",
            },
          ],
        },
      ],
    },
  ],

  13: [
    {
      id: "sc_day_13",
      title: "Introduction to CSS | Part 1",
      topics: [
        {
          id: "sc_day_13_t1",
          title: "Container Element — The div Tag",
          explanation:
            "• The HTML div element defines a container.\n• A container is used to group other HTML elements together.\n• It helps in organizing content and applying styles efficiently.\n• The div tag is the most commonly used container in HTML.\n• It is a block-level element, meaning it takes up the full width of its parent by default.\n\n• Containers make it easy to apply a single style to a group of elements at once.\n• They are essential for building layouts and structuring page content.",
          examples: [
            {
              language: "html",
              code: "<div>\n  <h1>Tourism</h1>\n  <p>Plan your trip wherever you want to go</p>\n  <button>Get Started</button>\n</div>",
              explanation:
                "• The div wraps the h1, p, and button elements into one group.\n• Any style applied to the div will affect all elements inside it.\n• This makes layout and styling much easier to manage.",
            },
          ],
        },

        {
          id: "sc_day_13_t2",
          title: "CSS Syntax",
          explanation:
            "• CSS (Cascading Style Sheets) is used to style HTML elements.\n• It controls colors, fonts, spacing, layout, and alignment, making webpages visually appealing and well-structured.\n\n• CSS follows a specific syntax structure:\n• A selector targets the HTML element to style.\n• A property defines what aspect to style (such as color or font-size).\n• A value defines how to style it (such as red or 16px).\n\n• Multiple property-value pairs can be written inside a single rule block.\n• CSS rules apply styles based on priority and cascading order.",
          examples: [
            {
              language: "css",
              code: "selector {\n  property1: value1;\n  property2: value2;\n}",
              explanation:
                "• selector — targets the HTML element to style.\n• property — defines what to style (e.g., color, font-size).\n• value — defines how to style it (e.g., red, 16px).\n• Multiple properties can be listed inside one rule block.",
            },
          ],
        },

        {
          id: "sc_day_13_t3",
          title: "Text Align Property and Class Selectors",
          explanation:
            "• The CSS text-align property specifies the horizontal alignment of the text in an HTML element.\n\n• Possible values for text-align:\n• center — Aligns the text to the center.\n• left — Aligns the text to the left.\n• right — Aligns the text to the right.\n\n• Class selectors are used to apply styles to multiple HTML elements.\n• They are defined using a dot (.) followed by the class name.\n• All HTML elements that have that class name will receive the same styles.\n\n• For example, a class named h-center with text-align: center will center the text of every element that uses this class.",
          examples: [
            {
              language: "css",
              code: ".h-center {\n  text-align: center;\n}",
              explanation:
                "• The dot before h-center defines a class selector.\n• Any HTML element with class='h-center' will have its text centered.\n• Class selectors can be reused on multiple elements across the page.",
            },
            {
              language: "html",
              code: '<!DOCTYPE html>\n<html>\n  <head></head>\n  <body>\n    <div class="h-center">\n      <h1>Tourism</h1>\n      <p>Plan your trip wherever you want to go</p>\n      <button>Get Started</button>\n    </div>\n  </body>\n</html>',
              explanation:
                "• The div has class h-center applied to it.\n• This centers all text inside the div — the heading, paragraph, and button.\n• The CSS class selector targets the div and applies text-align: center.",
            },
          ],
        },

        {
          id: "sc_day_13_t4",
          title: "Frequently Asked Interview Questions",
          explanation:
            "• What is CSS?\n• CSS (Cascading Style Sheets) is used to style HTML elements.\n• It controls colors, fonts, spacing, layout, and alignment, making webpages visually appealing and well-structured.\n\n• What are the fundamentals of CSS?\n• The fundamentals of CSS are:\n• Selector — selects the HTML element to style.\n• Property — defines what to style.\n• Value — defines how to style.\n• CSS rules follow specific syntax and apply styles based on priority and cascading order.\n\n• What is a container in HTML?\n• A container is an HTML element used to group other elements together.\n• The div tag is the most commonly used container.\n• It helps in organizing content and applying styles efficiently.\n\n• What are class selectors in CSS?\n• Class selectors are used to apply styles to multiple HTML elements.\n• They are defined using a dot (.) followed by the class name.\n• For example, .h-center { text-align: center; } applies styles to all elements that have the h-center class.",
        },
      ],
    },
  ],

  14: [
    {
      id: "sc_day_14",
      title: "Introduction to CSS | Part 2",
      topics: [
        {
          id: "sc_day_14_t1",
          title: "Concept Overview",
          explanation:
            "• This section introduces you to CSS Text and Background properties. You will understand how the 'color' property is used to change the text color of elements like headings and paragraphs. You will also learn how the 'background-color' property is used to style the background of elements such as divs, sections, and cards. Understanding how CSS selectors (like class selectors) work is important because CSS applies styles based on these selectors. This conceptual clarity will help you understand how structure (HTML) and styling (CSS) work together to build visually appealing web pages. Take time to understand how properties, values, and selectors connect before moving to practice.",
        },
        {
          id: "sc_day_14_t2",
          title: "Hands-on Practice",
          explanation:
            "• In this section, you will apply CSS text and background properties to real HTML elements. You will create class selectors such as '.main-heading', '.paragraph', and '.card' and apply 'color' and 'background-color' properties to them. Practice changing different color values like blue, red, green, lightblue, and grey. Modify the HTML structure and observe how CSS affects the output. Try experimenting with different elements and see how the visual appearance changes instantly in the browser. This practical experimentation strengthens your understanding of how CSS styling works in real-world scenarios.",
        },
      ],
    },
  ],

  15: [
    {
      id: "sc_day_15",
      title: "Type Conversion",
      topics: [
        {
          id: "sc_day_15_t1",
          title: "JavaScript Dialog Boxes",
          explanation:
            "• JavaScript provides built-in dialog boxes for user interaction.\n\n• alert() displays a message in a popup and waits for the user to press OK.\n• confirm() asks the user to confirm an action and returns true (OK) or false (Cancel).\n• prompt() takes input from the user and always returns the value as a string.\n\n• Important: No matter what you enter in prompt(), it is treated as a string.",
        },
        {
          id: "sc_day_15_t2",
          title: "String Concatenation",
          explanation:
            '• The + operator concatenates strings in JavaScript.\n• If both operands are strings, they are joined together.\n• Example: "Elon" + " " + "Musk" becomes "Elon Musk".\n• When using prompt inputs, values are treated as strings, so + performs concatenation instead of addition.',
        },
        {
          id: "sc_day_15_t3",
          title: "Type Conversion Overview",
          explanation:
            "• Type conversion is the process of converting one data type into another.\n• JavaScript supports two types of conversion:\n\n• Implicit Conversion → Automatically handled by JavaScript.\n• Explicit Conversion → Manually done by the programmer using functions.",
        },
        {
          id: "sc_day_15_t4",
          title: "Implicit Type Conversion",
          explanation:
            '• Implicit conversion happens automatically.\n\n• When using + with a string, JavaScript converts numbers to strings.\n• Example: "5" + 5 results in "55".\n\n• When using arithmetic operators like -, JavaScript converts strings to numbers.\n• Example: "5" - 5 results in 0.\n\n• Implicit conversion can cause unexpected bugs if not handled carefully.',
        },
        {
          id: "sc_day_15_t5",
          title: "Explicit Type Conversion",
          explanation:
            "• Explicit conversion is manually converting data types to avoid unexpected results.\n• Common conversion methods include:\n\n• Number() → Converts value to number.\n• String() → Converts value to string.\n• toString() → Converts number to string.\n• Boolean() → Converts value to boolean.",
        },
        {
          id: "sc_day_15_t6",
          title: "String to Number Conversion",
          explanation:
            '• Number() converts a string into a number if the value is valid.\n• Example: Number("5") becomes 5.\n\n• When adding numbers taken from prompt(), convert them using Number() to avoid string concatenation.\n• Example: Number(a) + Number(b) ensures proper numeric addition.',
        },

        {
          id: "sc_day_15_t7",
          title: "Number to String Conversion",
          explanation:
            '• String() converts numbers into strings.\n• toString() method also converts numbers to strings.\n• Example: 10 becomes "10" after conversion.\n• After conversion, typeof will return string.',
        },

        {
          id: "sc_day_15_t8",
          title: "Boolean Conversion",
          explanation:
            '• Boolean() converts values into true or false.\n\n• Examples:\n• Boolean(0) → false\n• Boolean(1) → true\n• Boolean("") → false\n• Boolean("Hello") → true\n\n• Non-empty values are generally true, empty or zero-like values are false.',
        },

        {
          id: "sc_day_15_t9",
          title: "Truthy and Falsy Values",
          explanation:
            '• Every value in JavaScript is either truthy or falsy.\n\n• Falsy values (7 total):\n• false, 0, -0, "", null, undefined, NaN.\n\n• All other values are Truthy.\n• Examples of truthy values: true, 1, -1, "hello", "0", [], {}.\n• Understanding truthy and falsy helps in writing clean conditional statements.',
        },

        {
          id: "sc_day_15_t10",
          title: "Interview Quick Points",
          explanation:
            "• Type conversion changes one data type into another.\n• Implicit conversion is automatic and done by JavaScript.\n• Explicit conversion is manual and done using functions like Number(), String(), and Boolean().\n• Understanding type conversion prevents logical bugs in applications.",
        },
      ],
    },
  ],

  16: [
    {
      id: "sc_day_16",
      title: "Introduction to CSS | Part 3",
      topics: [
        {
          id: "sc_day_16_t1",
          title: "Concept Overview",
          explanation:
            "• In this section, you will learn about important CSS text styling properties including font-family, font-size, font-style, font-weight, and text-decoration. These properties help control how text appears on a webpage. You will understand how to import fonts using Google Fonts and apply them using the font-family property. You will also learn how font-size controls text size using pixel (px) units, how font-style changes text appearance (normal, italic, oblique), how font-weight adjusts text thickness using keywords or numeric values from 100 to 900, and how text-decoration adds effects like underline, overline, or line-through. Understanding these properties is essential for creating visually appealing and readable web pages.",
        },
        {
          id: "sc_day_16_t2",
          title: "Hands-on Practice",
          explanation:
            "• In this section, you will practice applying different font and text styling properties to HTML elements. You will import fonts from Google Fonts using the @import rule and apply them using the font-family property. You will experiment with font-size using pixel values such as 28px and 36px. Then, you will modify font-style to make text italic or normal, and use font-weight values like bold, 200, or 700 to change thickness. You will also apply text-decoration values like underline, overline, and line-through to observe how text appearance changes. Try combining multiple properties together on headings and paragraphs to see how they affect readability and design.",
        },
        {
          id: "sc_day_16_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            "• In this mini assignment, you will create a simple webpage containing a heading and a paragraph. Import a Google Font and apply it using the font-family property. Set different font sizes for the heading and paragraph using px units. Apply font-style and font-weight variations to make the heading bold and italic while keeping the paragraph normal. Add text-decoration effects such as underline or overline to observe their impact. Ensure there are no spelling mistakes in property values, no unnecessary quotations (except for font-family values), and correct usage of px units. This assignment will reinforce your understanding of CSS font and text styling properties.",
        },
      ],
    },
  ],

  17: [
    {
      id: "sc_day_17",
      title: "Sequence of Instructions, Variables & Operators",
      topics: [
        {
          id: "sc_day_17_t1",
          title: "Program & Sequence of Instructions",
          explanation:
            "• A program is a sequence of instructions given to a computer.\n• JavaScript executes instructions line by line from top to bottom.\n• Each line runs only after the previous line finishes execution.\n• This is called sequential execution.",
        },

        {
          id: "sc_day_17_t2",
          title: "Variables (Declaration, Definition, Initialization)",
          explanation:
            "• A variable is a container used to store data.\n\n• Declaration: Creating a variable using let.\n• Example: let age;\n• The variable exists but has no value.\n\n• Definition: Assigning a value after declaration.\n• Example: let age; age = 10;\n\n• Initialization: Declaring and assigning value at the same time.\n• Example: let age = 10;",
        },

        {
          id: "sc_day_17_t3",
          title: "Common Mistakes with Variables",
          explanation:
            '• Mistake 1: Printing variable name inside quotes.\n• Example: console.log("age");\n• Output: age\n• Reason: Quotes make it a string literal.\n\n• Mistake 2: Using variable before declaration.\n• Example: console.log(age); let age = 10;\n• Output: Error\n• Reason: JavaScript executes code line by line, and the variable is not initialized yet.',
        },

        {
          id: "sc_day_17_t4",
          title: "Variable Assignment & Reassignment",
          explanation:
            "• Variables can store values and those values can be changed.\n\n• Reassignment Example:\n• let a = 1; a = 2;\n• The old value is replaced with the new value.\n\n• Assigning one variable to another copies the value.\n• Example: a = b;\n\n• Assigning expression result:\n• let a = b + 1;\n• The expression is evaluated first, then assigned.",
        },

        {
          id: "sc_day_17_t5",
          title: "Expressions",
          explanation:
            "• An expression is a combination of values, variables, and operators that produces a result.\n• Examples:\n• 5 * 2 + 3 * 4\n•  a + 2\n•  a * b\n• Expressions are evaluated and the result can be stored in variables.",
        },

        {
          id: "sc_day_17_t6",
          title: "Order of Operations (BODMAS)",
          explanation:
            "• JavaScript follows BODMAS rule while evaluating expressions.\n\n• B: Brackets\n• O: Orders (Exponents)\n• D: Division\n• M: Multiplication\n• A: Addition\n• S: Subtraction\n\n• Example:\n• 5 * 2 + 3 * 4 = 22\n• Multiplication happens before addition.\n\n• Best Practice: Use brackets for clarity even if not required.",
        },

        {
          id: "sc_day_17_t7",
          title: "Modulus Operator (%)",
          explanation:
            "• The modulus operator returns the remainder after division.\n• Example:\n• 8 % 2 = 0\n• 10 % 3 = 1\n• Useful for checking even/odd numbers.",
        },

        {
          id: "sc_day_17_t8",
          title: "Exponentiation Operator (**)",
          explanation:
            "• The exponentiation operator calculates power.\n• Example:\n• 2 ** 3 = 8\n• 5 ** 2 = 25\n• It means base raised to the power of exponent.",
        },

        {
          id: "sc_day_17_t9",
          title: "Increment Operator (++)",
          explanation:
            "• The increment operator increases a value by 1.\n\n• Prefix (++x): Value increases before usage.\n• Example:\n• let y = ++x;\n\n• Postfix (x++): Value increases after usage.\n• Example:\n• let y = x++;\n\n• Prefix modifies first, Postfix modifies later.",
        },

        {
          id: "sc_day_17_t10",
          title: "Decrement Operator (--)",
          explanation:
            "• The decrement operator decreases a value by 1.\n\n• Prefix (--x): Decreases before usage.\n• Postfix (x--): Decreases after usage.\n\n• Understanding prefix and postfix behavior is important for interviews.",
        },

        {
          id: "sc_day_17_t11",
          title: "Interview Quick Points",
          explanation:
            "• JavaScript executes code line by line.\n• Printing variable inside quotes treats it as a string.\n• Variables can be reassigned.\n• Expressions follow BODMAS rule.\n• Prefix operators modify first, postfix modify later.\n• Understanding operator behavior prevents logical errors.",
        },
      ],
    },
  ],

  18: [
    {
      id: "sc_day_18",
      title: "Relational Operators",
      topics: [
        {
          id: "sc_day_18_t1",
          title: "Introduction to Relational Operators",
          explanation:
            "• Relational operators are used to compare two values in JavaScript.\n• They evaluate a condition and always return a boolean value: true or false.\n\n• These operators are commonly used inside conditions like if statements.\n\n• Operators:\n• >  Greater than\n• <  Less than\n• >= Greater than or equal to\n• <= Less than or equal to\n• == Equal to (loose equality)\n• != Not equal to\n\n• The result of any relational comparison is always either true or false.",
        },

        {
          id: "sc_day_18_t2",
          title: "Comparing Numbers",
          explanation:
            "• Relational operators compare numeric values based on their mathematical order.\n\n• Examples:\n• 5 < 10 → true (because 5 is smaller than 10)\n• 5 > 10 → false\n• 2 <= 2 → true (equal values satisfy <=)\n• 4 != 1 → true (values are not equal)\n\n• These operators work with both integers and floating point numbers.\n• They follow normal mathematical comparison rules.",
        },

        {
          id: "sc_day_18_t3",
          title: "Common Mistake: Assignment vs Comparison",
          explanation:
            "• Mistake: Using single = instead of == or ===.\n\n• Example:\n• console.log(3 = 3);\n\n• This causes a SyntaxError because = is used for assigning values to variables, not for comparison.\n\n• Correct usage:\n• 3 == 3 → true\n• 3 === 3 → true\n\n• Always remember:\n• =  → Assignment\n• == → Loose comparison\n• === → Strict comparison",
        },

        {
          id: "sc_day_18_t4",
          title: "Common Mistake: Missing Parenthesis",
          explanation:
            "• Every opening parenthesis '(' must have a matching closing parenthesis ')'.\n\n• Example:\n• console.log(2 <= 3\n• This results in SyntaxError.\n\n• Correct:\n• console.log(2 <= 3);\n\n• Proper syntax is essential because JavaScript parses code strictly.",
        },

        {
          id: "sc_day_18_t5",
          title: "Comparing Floating Point Numbers",
          explanation:
            "• Relational operators work the same way with decimal (floating point) numbers.\n\n• Examples:\n• 2.5 <= 3.2 → true\n• 0.1 != 0.1 → false\n\n• JavaScript treats floating numbers just like normal numbers for comparison.\n• However, due to floating-point precision issues, sometimes decimal comparisons may behave unexpectedly in complex calculations.",
        },

        {
          id: "sc_day_18_t6",
          title: "Comparing Strings",
          explanation:
            '• Strings can be compared using relational operators.\n• When using == or ===, JavaScript checks if both strings are exactly identical.\n\n• Examples:\n• "ABC" == "ABC" → true\n• "CBA" == "ABC" → false\n• "CBA" != "ABC" → true\n\n• JavaScript is case sensitive.\n• "ABC" == "abc" → false\n\n• Uppercase and lowercase letters are treated as completely different characters.\n\n• Important: String comparison checks character by character.',
        },

        {
          id: "sc_day_18_t7",
          title: "Loose Equality (==)",
          explanation:
            "• Loose equality (==) compares two values after performing type coercion.\n• Type coercion means JavaScript automatically converts values to a common type before comparison.\n\n• Example:\n• 2 == '2' → true\n• JavaScript converts '2' (string) into 2 (number) before comparing.\n\n• 5 == \"5\" → true\n\n• Because of automatic conversion, loose equality can sometimes give unexpected results.\n• This is why it should be used carefully.",
        },

        {
          id: "sc_day_18_t8",
          title: "Strict Equality (===)",
          explanation:
            "• Strict equality (===) compares both value and data type.\n• No type conversion happens.\n\n• Example:\n• 2 === '2' → false\n• Because 2 is a number and '2' is a string.\n\n• Strict equality ensures safer and more predictable comparisons.\n• It prevents accidental matches caused by type coercion.",
        },

        {
          id: "sc_day_18_t9",
          title: "Comparing with Boolean Values",
          explanation:
            "• When using loose equality:\n• 1 == true → true\n• 0 == false → true\n\n• This happens because JavaScript converts true to 1 and false to 0 during comparison.\n\n• With strict equality:\n• 1 === true → false\n• 0 === false → false\n\n• Because number and boolean are different data types.\n\n• Strict comparison avoids confusion caused by implicit conversion.",
        },

        {
          id: "sc_day_18_t10",
          title: "Strict Inequality (!==)",
          explanation:
            "• Strict inequality checks both value and type and returns true if they are different.\n\n• Example:\n• 2 !== '2' → true\n• Because number and string are different types.\n\n• This operator is safer than != because it avoids type coercion.",
        },

        {
          id: "sc_day_18_t11",
          title: "Best Practices",
          explanation:
            '• Always prefer strict equality (===) and strict inequality (!==).\n\n• Reasons:\n• Loose equality performs automatic type conversion.\n• Type coercion can lead to unexpected or confusing results.\n• Strict equality makes your code predictable and easier to debug.\n\n• Recommended:\n• 5 === 5 → true\n• 5 === "5" → false\n\n• Not Recommended:\n• 5 == "5" → true\n\n• Using strict comparison is considered professional and clean coding practice.',
        },

        {
          id: "sc_day_18_t12",
          title: "Interview Quick Points",
          explanation:
            "• Relational operators always return boolean values.\n• Single = is assignment, not comparison.\n• JavaScript is case sensitive when comparing strings.\n• == performs type coercion.\n• === compares both value and type.\n• Always use strict comparison in real-world applications to avoid logical bugs.",
        },
      ],
    },
  ],

  19: [
    {
      id: "sc_day_19",
      title: "CSS Box Model | Part 1",
      topics: [
        {
          id: "sc_day_19_t1",
          title: "Height Property",
          explanation:
            "• The CSS height property defines the vertical size of an HTML element.\n• Example:\n• .card { height: 200px; }\n\n• The value can be given in different units like px, %, vh, etc.\n• If height is not specified, the element adjusts automatically based on its content.\n• Setting height helps control layout and design structure.",
        },

        {
          id: "sc_day_19_t2",
          title: "Width Property",
          explanation:
            "• The CSS width property defines the horizontal size of an HTML element.\n• Example:\n• .card { width: 250px; }\n\n• Like height, width can be defined in px, %, vw, etc.\n• If width is not specified, block elements usually take full available width.\n• Controlling width is important for responsive layouts.",
        },

        {
          id: "sc_day_19_t3",
          title: "Background Image",
          explanation:
            '• The background-image property sets an image as the background of an HTML element.\n• Example:\n• .card { background-image: url("image.jpg"); }\n\n• The URL must be valid.\n• If height is not specified, the background image will only cover the content height.\n• Background images do not automatically resize unless background-size is specified.',
        },

        {
          id: "sc_day_19_t4",
          title: "Background Size",
          explanation:
            "• The background-size property controls how the background image is scaled.\n• Example:\n• .card { background-size: cover; }\n\n• Common values:\n• cover → Scales the image to fully cover the element while maintaining aspect ratio. Some parts may be cropped.\n• contain → Scales image to fit inside element without cropping.\n\n• Aspect ratio means the ratio of width to height of an image.",
        },

        {
          id: "sc_day_19_t5",
          title: "Viewport",
          explanation:
            "• The viewport is the visible area of a web page inside the browser window.\n• It changes depending on screen size and device.\n• Responsive design often uses viewport units to adjust layouts dynamically.",
        },

        {
          id: "sc_day_19_t6",
          title: "Viewport Height (vh)",
          explanation:
            "• The vh unit stands for viewport height.\n• 1vh equals 1% of the browser window height.\n\n• Example:\n• .card { height: 50vh; }\n• This sets the element height to 50% of the viewport height.\n\n• 100vh makes the element take the full height of the browser window.",
        },

        {
          id: "sc_day_19_t7",
          title: "Viewport Width (vw)",
          explanation:
            "• The vw unit stands for viewport width.\n• 1vw equals 1% of the browser window width.\n\n• Example:\n• .card { width: 100vw; }\n• This makes the element take full width of the viewport.\n\n• Viewport units are very useful in responsive web design.",
        },

        {
          id: "sc_day_19_t8",
          title: "Practical Example: Card Layout",
          explanation:
            "• Example HTML structure:\n• A div with class 'card' contains heading, paragraph, and button.\n\n• By combining height, width, background-image, background-size, vh, and vw units, we can create a full-screen hero section.\n\n• Example:\n• .card {\n•   height: 100vh;\n•   width: 100vw;\n•   background-image: url(\"image.jpg\");\n•   background-size: cover;\n• }\n\n• This creates a full-screen background section with content centered inside.",
        },

        {
          id: "sc_day_19_t9",
          title: "Best Practices",
          explanation:
            "• Always specify height when using background-image if you want full visibility.\n• Use background-size: cover for hero sections.\n• Use vh and vw units for responsive layouts.\n• Be careful with 100vw as it may sometimes include scrollbar width.\n• Maintain aspect ratio to avoid distorted images.",
        },

        {
          id: "sc_day_19_t10",
          title: "Interview Quick Points",
          explanation:
            "• Height and width control element dimensions.\n• Background-image requires valid URL.\n• background-size: cover maintains aspect ratio and may crop image.\n• 1vh = 1% of viewport height.\n• 1vw = 1% of viewport width.\n• 100vh and 100vw create full-screen layouts.\n• Viewport units are essential for responsive design.",
        },
      ],
    },
  ],

  20: [
    {
      id: "sc_day_20",
      title: "CSS Box Model | part 2",
      topics: [
        {
          id: "sc_day_20_t1",
          title: "Border Properties",
          explanation:
            "• CSS border properties define how the border of an HTML element appears. The border-width property specifies how thick the border should be. The border-style property defines the appearance of the border such as solid, dashed, dotted, or none. The border-color property sets the color of the border. It is important to note that border-style must be defined; otherwise, border-width and border-color will not be visible in the browser. The border-radius property controls the roundness of the element’s corners. You can also target specific corners using border-top-left-radius, border-top-right-radius, border-bottom-left-radius, and border-bottom-right-radius. Adding a background color makes the rounded corners more visible.",
        },
        {
          id: "sc_day_20_t2",
          title: "Padding",
          explanation:
            "• The padding property defines the space between the content of an element and its border. It creates inner spacing and improves readability and layout structure. Padding can be applied to all four sides at once or individually using padding-top, padding-right, padding-bottom, and padding-left. Increasing padding increases the overall size of the element unless box-sizing is adjusted. Padding is part of the CSS box model and plays a crucial role in UI spacing and alignment.",
        },
        {
          id: "sc_day_20_t3",
          title: "CSS Colors & Hex Codes",
          explanation:
            "• CSS allows multiple ways to define colors including color names, Hex codes, RGB, and HSL values. Hex codes are one of the most commonly used formats and start with a # symbol followed by six characters. They allow selection from over 16 million color combinations. For example, red is #ff0000, blue is #0000ff, green is #008000, and orange is #ffa500. Hex codes provide flexibility beyond predefined color names. Developers often use online color pickers to choose custom colors visually. The background-color property is commonly used to apply colors to elements.",
        },
        {
          id: "sc_day_20_t4",
          title: "Practical Application Example",
          explanation:
            "• When styling a card or button, border properties, padding, and colors work together. For example, a button may have border-width: 2px, border-style: solid, border-color: orange, border-radius: 20px, padding: 10px, and background-color: #25b1cc. These properties improve visual appearance and user experience. Remember that some HTML elements like button have default borders in the browser. Inspecting elements helps understand default styling behavior.",
        },
      ],
    },
  ],

  21: [
    {
      id: "sc_day_21",
      title: "Logical Operators",
      topics: [
        {
          id: "sc_day_21_t1",
          title: "Introduction to Logical Operators",
          explanation:
            "• Logical operators are used to perform operations on Boolean values. They always return true or false. In JavaScript, there are three logical operators: AND (&&), OR (||), and NOT (!). These operators are mainly used in conditional statements and decision-making logic.",
        },
        {
          id: "sc_day_21_t2",
          title: "AND Operator (&&)",
          explanation:
            "• The AND operator returns true only if both conditions are true. If at least one condition is false, the result will be false.",
          examples: [
            {
              language: "javascript",
              code: "console.log(true && true);\nconsole.log(true && false);",
              explanation:
                "• true && true returns true.\n• true && false returns false.",
            },
            {
              language: "javascript",
              code: "console.log((2 < 3) && (1 < 2));",
              explanation:
                "• 2 < 3 is true.\n• 1 < 2 is true.\n• true && true results in true.",
            },
            {
              language: "javascript",
              code: "console.log((2 < 3) && (2 < 1));",
              explanation:
                "• 2 < 3 is true.\n• 2 < 1 is false.\n• true && false results in false.",
            },
          ],
        },
        {
          id: "sc_day_21_t3",
          title: "OR Operator (||)",
          explanation:
            "• The OR operator returns true if at least one condition is true. It returns false only when both conditions are false.",
          examples: [
            {
              language: "javascript",
              code: "console.log(true || false);\nconsole.log(false || false);",
              explanation:
                "• true || false returns true.\n• false || false returns false.",
            },
            {
              language: "javascript",
              code: "console.log((2 < 3) || (2 < 1));",
              explanation:
                "• 2 < 3 is true.\n• 2 < 1 is false.\n• true || false results in true.",
            },
            {
              language: "javascript",
              code: "console.log((3 < 2) || (2 < 1));",
              explanation:
                "• 3 < 2 is false.\n• 2 < 1 is false.\n• false || false results in false.",
            },
          ],
        },
        {
          id: "sc_day_21_t4",
          title: "NOT Operator (!)",
          explanation:
            "• The NOT operator reverses the Boolean value. It converts true to false and false to true.",
          examples: [
            {
              language: "javascript",
              code: "console.log(!(false));",
              explanation: "• false becomes true after applying NOT operator.",
            },
            {
              language: "javascript",
              code: "console.log(!(2 < 1));",
              explanation: "• 2 < 1 is false.\n• Applying NOT makes it true.",
            },
            {
              language: "javascript",
              code: "console.log(!(2 < 3));",
              explanation: "• 2 < 3 is true.\n• Applying NOT makes it false.",
            },
          ],
        },
        {
          id: "sc_day_21_t5",
          title: "Combining Logical Operators",
          explanation:
            "• Multiple logical operators can be combined in one expression. JavaScript evaluates them step by step.",
          examples: [
            {
              language: "javascript",
              code: "console.log((4 < 5) && (!(1 != 1)));",
              explanation:
                "• 4 < 5 is true.\n• 1 != 1 is false.\n• !(false) becomes true.\n• true && true results in true.",
            },
          ],
        },
        {
          id: "sc_day_21_t6",
          title: "Practical Example",
          explanation:
            "• Logical operators are commonly used to validate multiple conditions together.",
          examples: [
            {
              language: "javascript",
              code: "let a = 6;\nlet b = 4;\n\nlet bothPositive = (a > 0) && (b > 0);\nlet oneGreaterThanFive = (a > 5) || (b > 5);\nlet result = bothPositive && oneGreaterThanFive;\n\nconsole.log(result);",
              explanation:
                "• Both numbers are positive.\n• At least one number is greater than 5.\n• Final result is true.",
            },
            {
              language: "javascript",
              code: "let a = 10;\nlet b = 1;\n\nlet bothPositive = (a > 0) && (b > 0);\nlet oneGreaterThanFive = (a > 5) || (b > 5);\nlet result = bothPositive && oneGreaterThanFive;\n\nconsole.log(result);",
              explanation:
                "• Both numbers are positive.\n• At least one number is greater than 5.\n• Final result is true.",
            },
          ],
        },
        {
          id: "sc_day_21_t7",
          title: "Summary",
          explanation:
            "• AND (&&) returns true only if both conditions are true. OR (||) returns true if at least one condition is true. NOT (!) reverses the Boolean value. Logical operators are essential for writing conditions, validations, and decision-making logic in JavaScript.",
        },
      ],
    },
  ],

  22: [
    {
      id: "sc_day_22",
      title: "Conditional Statements",
      topics: [
        {
          id: "sc_day_22_t1",
          title: "Introduction: How JavaScript Executes Code",
          explanation:
            "• JavaScript executes code sequentially, meaning it runs one instruction after another from top to bottom. By default, every line of code executes in order. However, in real-world programs, we often need certain instructions to execute only when a specific condition is satisfied. This is where conditional statements are used. Conditional execution allows the program flow to change depending on whether a condition evaluates to true or false.",
        },
        {
          id: "sc_day_22_t2",
          title: "Conditions",
          explanation:
            "• A condition is an expression that evaluates to either true or false. Conditions control whether a block of code should execute. These expressions are usually formed using comparison operators like >, <, >=, <=, ==, or !=. If the condition evaluates to true, the associated block executes. If it evaluates to false, the block is skipped.",
        },
        {
          id: "sc_day_22_t3",
          title: "If Statement",
          explanation:
            "• The if statement allows selective execution of a block of code. The condition inside parentheses must evaluate to either true or false. The block of code inside curly braces {} executes only when the condition is true. If the condition is false, the block is skipped completely.",
          examples: [
            {
              language: "javascript",
              code: "let a = 1;\nlet b = 2;\n\nif (a > b) {\n  console.log(a - b);\n}\n\nconsole.log(a + b);",
              explanation:
                "• Condition a > b evaluates to false.\n• The if block is skipped.\n• Only console.log(a + b) executes.\n• Output: 3",
            },
            {
              language: "javascript",
              code: "let a = 2;\nlet b = 1;\n\nif (a > b) {\n  console.log(a - b);\n}\n\nconsole.log(a + b);",
              explanation:
                "• Condition a > b evaluates to true.\n• The if block executes and prints 1.\n• Then console.log(a + b) prints 3.\n• Output: 1 3",
            },
          ],
        },
        {
          id: "sc_day_22_t4",
          title: "Practice Problem: Convert to Positive Integer",
          explanation:
            "• Sometimes we need to modify a value based on a condition. For example, if a number is negative, we convert it into a positive number.",
          examples: [
            {
              language: "javascript",
              code: "let a = 2;\n\nif (a < 0) {\n  a = a * (-1);\n}\n\nconsole.log(a);",
              explanation:
                "• If a is negative, it gets multiplied by -1.\n• If a is already positive, nothing changes.\n• The final value printed is always positive.",
            },
          ],
        },
        {
          id: "sc_day_22_t5",
          title: "Multiple If Statements",
          explanation:
            "• Using multiple if statements can work logically but may not always be the most efficient approach. If both conditions are independent, both may execute. Often, this can be simplified using an if–else structure.",
          examples: [
            {
              language: "javascript",
              code: 'const a = 2;\n\nif (a > 0) {\n  console.log("Positive");\n}\n\nif (a <= 0) {\n  console.log("Not Positive");\n}',
              explanation:
                "• Only one condition prints because the other condition is false.\n• However, checking both conditions separately can be simplified.",
            },
          ],
        },
        {
          id: "sc_day_22_t6",
          title: "If–Else Statement",
          explanation:
            "• The if–else statement allows two alternative blocks of execution. If the condition is true, the if block executes. If the condition is false, the else block executes. This structure ensures only one of the two blocks runs.",
          examples: [
            {
              language: "javascript",
              code: 'let a = 2;\n\nif (a > 0) {\n  console.log("Positive");\n} else {\n  console.log("Not Positive");\n}\n\nconsole.log("End");',
              explanation:
                '• Condition is true.\n• "Positive" is printed.\n• Then "End" is printed.',
            },
            {
              language: "javascript",
              code: 'let a = -2;\n\nif (a > 0) {\n  console.log("Positive");\n} else {\n  console.log("Not Positive");\n}\n\nconsole.log("End");',
              explanation:
                '• Condition is false.\n• "Not Positive" is printed.\n• Then "End" is printed.',
            },
          ],
        },
      ],
    },
  ],

  23: [
    {
      id: "sc_day_23",
      title: "HTML Void Elements & Lists",
      topics: [
        {
          id: "sc_day_23_t1",
          title: "HTML Void Elements",
          explanation:
            "• Void elements are HTML elements that do not have closing tags and do not contain content. They are self-contained elements used to embed or insert something into a webpage. Common examples include img, br, and input. These elements are called void elements because they cannot wrap content and do not require an end tag.",
        },
        {
          id: "sc_day_23_t2",
          title: "Favourite Places Section Layout",
          explanation:
            "• The Favourite Places section is divided into structured components such as a background container, heading, and card container. Breaking layouts into smaller parts helps in building clean and maintainable UI designs.",
          examples: [
            {
              language: "html",
              code: '<div class="favourite-places-bg-container"></div>',
            },
            {
              language: "css",
              code: ".favourite-places-bg-container {\n  background-image: url('https://assets.ccbp.in/frontend/static-website/tower-bg.png');\n  height: 100vh;\n  background-size: cover;\n}",
            },
          ],
        },
        {
          id: "sc_day_23_t3",
          title: "Adding Heading and Padding",
          explanation:
            "• Headings are added inside the background container. Styling like color, font-size, font-family, and padding improves visual appearance and spacing.",
          examples: [
            {
              language: "html",
              code: '<div class="favourite-places-bg-container">\n  <h1 class="favourite-places-heading">Favourite Places</h1>\n</div>',
            },
            {
              language: "css",
              code: ".favourite-places-heading {\n  color: white;\n  font-size: 28px;\n  font-family: 'Roboto';\n  font-weight: bold;\n  padding: 24px;\n}",
            },
          ],
        },
        {
          id: "sc_day_23_t4",
          title: "Favourite Place Card",
          explanation:
            "• Cards help structure content visually. The card container uses background color, border-radius, padding, and margin for spacing and design.",
          examples: [
            {
              language: "html",
              code: '<div class="favourite-place-card-container">\n  <h1 class="favourite-place-card-heading">Taj Mahal</h1>\n  <p class="favourite-place-card-description">\n    If there was just one symbol to represent all of India, it would be the Taj Mahal.\n  </p>\n</div>',
            },
            {
              language: "css",
              code: ".favourite-place-card-container {\n  background-color: white;\n  border-radius: 8px;\n  padding: 16px;\n  margin: 15px;\n}",
            },
          ],
        },
        {
          id: "sc_day_23_t5",
          title: "Adding Image (Void Element Example)",
          explanation:
            "• The img element is a void element. It does not require a closing tag. It is used to display images in HTML.",
          examples: [
            {
              language: "html",
              code: '<img src="https://assets.ccbp.in/frontend/static-website/tajmahal-img.png" />',
            },
          ],
        },
        {
          id: "sc_day_23_t6",
          title: "CSS Box Model",
          explanation:
            "• The CSS Box Model describes how HTML elements are displayed as rectangular boxes. Each box consists of content, padding, border, and margin. These properties together control spacing, layout, and size of elements.",
        },
        {
          id: "sc_day_23_t7",
          title: "HTML Lists",
          explanation:
            "• HTML lists are used to group related items for better readability. There are two main types: unordered lists and ordered lists.",
        },
        {
          id: "sc_day_23_t8",
          title: "Unordered List",
          explanation:
            "• Unordered lists display items with bullet points by default.",
          examples: [
            {
              language: "html",
              code: "<ul>\n  <li>Jallianwala Bagh</li>\n  <li>Wagah Border</li>\n  <li>Harike Wetland</li>\n  <li>Bathinda Fort</li>\n</ul>",
            },
            {
              language: "css",
              code: ".unordered-list {\n  list-style-type: circle;\n}",
            },
          ],
        },
        {
          id: "sc_day_23_t9",
          title: "Ordered List",
          explanation:
            "• Ordered lists display items with numbers by default. The style can be customized using list-style-type.",
          examples: [
            {
              language: "html",
              code: "<ol>\n  <li>Jallianwala Bagh</li>\n  <li>Wagah Border</li>\n  <li>Harike Wetland</li>\n  <li>Bathinda Fort</li>\n</ol>",
            },
            {
              language: "css",
              code: ".ordered-list {\n  list-style-type: upper-alpha;\n}",
            },
          ],
        },
        {
          id: "sc_day_23_t10",
          title: "Interview Questions - CSS Box Model",
          explanation:
            "• The CSS Box Model includes content, padding, border, and margin. Width and height define the content size. Padding creates space inside the border. Border surrounds the padding and content. Margin creates space outside the border. Padding affects internal spacing, while margin affects spacing between elements. Inline elements occupy only the space required by their content and do not start on a new line. Examples include span, img, a, and input.",
        },
      ],
    },
  ],

  24: [
    {
      id: "sc_day_24",
      title: "Website Behind The Scenes",
      topics: [
        {
          id: "sc_day_24_t1",
          title: "What is the Internet?",
          explanation:
            "• The Internet is a global network of billions of computers and devices connected together. These devices communicate using standard protocols. It enables data exchange, communication, and access to websites and online services. Approximately 22 billion devices worldwide are connected to the Internet.",
        },
        {
          id: "sc_day_24_t2",
          title: "IP Address",
          explanation:
            "• Every device connected to the Internet is assigned a unique IP (Internet Protocol) address. An IP address identifies a device and allows it to communicate with other devices over the network. Without IP addresses, devices would not know where to send or receive data.",
          examples: [
            {
              language: "text",
              code: "191.171.48.170\n191.172.178.170\n191.174.68.103",
              explanation:
                "• These are examples of IPv4 addresses. Each address uniquely identifies a device on the Internet.",
            },
          ],
        },
        {
          id: "sc_day_24_t3",
          title: "What Happens When We Type a URL?",
          explanation:
            "• When you type a website URL like varakumar.ccbp.tech in the browser, the browser sends a request to find the server where the website is hosted. The browser first looks up the domain name using DNS, finds the corresponding IP address, and then connects to that server to fetch the website content. Common browsers include Chrome, Safari, and Firefox.",
        },
        {
          id: "sc_day_24_t4",
          title: "Domain Name Structure",
          explanation:
            "• A domain name is the human-readable address of a website. It is easier to remember than an IP address.",
          examples: [
            {
              language: "text",
              code: "Domain Name: varakumar.ccbp.tech\nSubdomain: varakumar\nTop Level Domain (TLD): tech\n\nOther Examples:\nwww.google.com\nwww.amazon.in\nlearning.ccbp.in",
              explanation:
                "• The subdomain appears before the main domain. The Top Level Domain (TLD) appears at the end such as .com, .in, .tech.",
            },
          ],
        },
        {
          id: "sc_day_24_t5",
          title: "Domain Name System (DNS)",
          explanation:
            "• The Domain Name System (DNS) is like the phonebook of the Internet. It translates human-friendly domain names into IP addresses. When you enter a website URL, DNS finds the matching IP address so the browser can connect to the correct server.",
        },
        {
          id: "sc_day_24_t6",
          title: "Amazon Route 53",
          explanation:
            "• Amazon Route 53 is a cloud-based DNS web service. It is highly available and scalable. It handles DNS routing by mapping domain names to IP addresses. For example, when you enter varakumar.ccbp.tech, Route 53 maps it to an IP address like 13.249.43.67.",
          examples: [
            {
              language: "text",
              code: "varakumar.ccbp.tech  →  13.249.43.67",
              explanation:
                "• Route 53 resolves the domain name to the correct server IP.",
            },
          ],
        },
        {
          id: "sc_day_24_t7",
          title: "Amazon CloudFront (CDN)",
          explanation:
            "• Amazon CloudFront is a Content Delivery Network (CDN). It delivers website content quickly and securely to users worldwide. It uses Edge Locations (distributed servers) to reduce latency and improve performance by serving content from the nearest location to the user.",
        },
        {
          id: "sc_day_24_t8",
          title: "Amazon S3 Storage",
          explanation:
            "• Amazon S3 (Simple Storage Service) is cloud storage used to store website files such as HTML, CSS, JavaScript, images, and other resources. When a user requests a website, the server fetches the required files from S3 storage and sends them back to the browser.",
        },
        {
          id: "sc_day_24_t9",
          title: "Website Behind The Scenes Flow",
          explanation:
            "• When a user enters a domain name in the browser, the request follows a specific flow: First, the browser queries DNS to resolve the domain name into an IP address. Amazon Route 53 handles the DNS resolution. Then Amazon CloudFront delivers content through edge servers for faster performance. Finally, the actual website resources are fetched from Amazon S3 storage and delivered to the user’s browser.",
        },
      ],
    },
  ],

  25: [
    {
      id: "sc_day_25",
      title: "Nested Conditional Statements",
      topics: [
        {
          id: "sc_day_25_t1",
          title: "Introduction to Nested Conditions",
          explanation:
            "• A nested condition is when one conditional statement is placed inside another. The inner condition is evaluated only if the outer condition is true. This allows checking multiple conditions in a hierarchical structure.",
          examples: [
            {
              language: "javascript",
              code: "if (conditionB) {\n  if (conditionA) {\n    // Block 1\n  }\n  // Block 2\n}\n// Block 3",
              explanation:
                "• The inner if runs only when conditionB is true. If conditionB is false, conditionA is never checked.",
            },
          ],
        },
        {
          id: "sc_day_25_t2",
          title: "How Nested Conditions Work",
          explanation:
            "• The execution of nested conditions depends on whether the outer condition is true or false.",
          examples: [
            {
              language: "javascript",
              code: 'if (true) {\n  if (true) {\n    console.log("Block 1");\n  }\n  console.log("Block 2");\n}\nconsole.log("Block 3");',
              explanation:
                "• Both conditions are true. Block 1, Block 2, and Block 3 execute.",
            },
            {
              language: "javascript",
              code: 'if (true) {\n  if (false) {\n    console.log("Block 1");\n  }\n  console.log("Block 2");\n}\nconsole.log("Block 3");',
              explanation:
                "• Outer is true, inner is false. Block 1 skipped. Block 2 and Block 3 execute.",
            },
            {
              language: "javascript",
              code: 'if (false) {\n  if (true) {\n    console.log("Block 1");\n  }\n  console.log("Block 2");\n}\nconsole.log("Block 3");',
              explanation:
                "• Outer condition is false. Inner is never checked. Only Block 3 executes.",
            },
          ],
        },
        {
          id: "sc_day_25_t3",
          title: "Nested Conditions in Else Block",
          explanation:
            "• Nested conditions can also be written inside an else block.",
          examples: [
            {
              language: "javascript",
              code: "if (conditionA) {\n  // Block 1\n} else {\n  if (conditionB) {\n    // Block 2\n  }\n  // Block 3\n}",
              explanation:
                "• If conditionA is false, the else block runs and conditionB is checked.",
            },
          ],
        },
        {
          id: "sc_day_25_t4",
          title: "Practical Example: Greatest of Three Numbers",
          explanation:
            "• This example finds the greatest among three numbers using nested conditions.",
          examples: [
            {
              language: "javascript",
              code: "let a = 8, b = 5, c = 10;\n\nlet isAGreatest = (a > b) && (a > c);\n\nif (isAGreatest) {\n  console.log(a);\n} else {\n  let isBGreatest = (b > c);\n  if (isBGreatest) {\n    console.log(b);\n  } else {\n    console.log(c);\n  }\n}",
              explanation:
                "• First checks if a is greatest. If not, checks if b is greater than c. Otherwise c is the greatest.",
            },
          ],
        },
        {
          id: "sc_day_25_t5",
          title: "Else If Statement",
          explanation:
            "• The else if statement provides a cleaner way to handle multiple conditions compared to deeply nested if statements.",
          examples: [
            {
              language: "javascript",
              code: 'let score = 75;\n\nif (score >= 90) {\n  console.log("Grade A");\n} else if (score >= 80) {\n  console.log("Grade B");\n} else if (score >= 70) {\n  console.log("Grade C");\n} else {\n  console.log("Grade D");\n}',
              explanation:
                "• Conditions are checked in order. First true condition executes. Output: Grade C.",
            },
          ],
        },
        {
          id: "sc_day_25_t6",
          title: "Rules for Else If",
          explanation:
            "• The else block is optional. However, else if blocks cannot come after an else block.",
          examples: [
            {
              language: "javascript",
              code: "if (conditionA) {\n  // Block 1\n} else if (conditionB) {\n  // Block 2\n} else if (conditionC) {\n  // Block 3\n}",
              explanation: "• Valid structure without an else block.",
            },
            {
              language: "javascript",
              code: "// WRONG STRUCTURE\nif (conditionA) {\n  // Block 1\n} else {\n  // Block 2\n} else if (conditionB) {\n  // Error!\n}",
              explanation: "• Else if cannot come after an else block.",
            },
          ],
        },
        {
          id: "sc_day_25_t7",
          title: "Practical Example: Divisibility Check",
          explanation:
            "• This program checks whether a number is divisible by 10, by 5, or neither.",
          examples: [
            {
              language: "javascript",
              code: 'let a = 15;\n\nif (a % 10 === 0) {\n  console.log("Divisible by 10");\n} else if (a % 5 === 0) {\n  console.log("Divisible by 5");\n} else {\n  console.log("Not Divisible by 10 or 5");\n}',
              explanation:
                "• 15 is divisible by 5 but not 10. Output: Divisible by 5.",
            },
          ],
        },
        {
          id: "sc_day_25_t8",
          title: "Ternary Operator",
          explanation:
            "• The ternary operator is a shorthand for simple if-else statements.",
          examples: [
            {
              language: "javascript",
              code: 'const speed = 70;\nlet message = speed >= 100 ? "Too Fast" : "OK";\nconsole.log(message);',
              explanation:
                "• If condition is true, first value executes. Otherwise second value. Output: OK.",
            },
            {
              language: "javascript",
              code: "let a = 10;\nlet b = 20;\nlet minValue = a > b ? b : a;\nconsole.log(minValue);",
              explanation: "• Returns smaller value. Output: 10.",
            },
          ],
        },
        {
          id: "sc_day_25_t9",
          title: "Switch Statement",
          explanation:
            "• The switch statement compares one expression against multiple possible values. It uses strict equality (===) for comparison and requires break statements to prevent fall-through.",
          examples: [
            {
              language: "javascript",
              code: 'let day = 1;\n\nswitch (day) {\n  case 0:\n    console.log("Sunday");\n    break;\n  case 1:\n    console.log("Monday");\n    break;\n  default:\n    console.log("Invalid");\n}',
              explanation: "• day = 1 matches case 1. Output: Monday.",
            },
            {
              language: "javascript",
              code: 'let day = "0";\n\nswitch (day) {\n  case 0:\n    console.log("Sunday");\n    break;\n  default:\n    console.log("Invalid");\n}',
              explanation:
                '• Switch uses strict equality. "0" !== 0. Output: Invalid.',
            },
            {
              language: "javascript",
              code: 'let day = 4;\n\nswitch (day) {\n  case 4:\n    console.log("Thursday");\n  case 5:\n    console.log("Friday");\n  case 6:\n    console.log("Saturday");\n  default:\n    console.log("Invalid");\n}',
              explanation:
                "• Missing break causes fall-through. Output: Thursday, Friday, Saturday, Invalid.",
            },
          ],
        },
      ],
    },
  ],

  26: [
    {
      id: "sc_day_26",
      title: "HTML Hyperlinks",
      topics: [
        {
          id: "sc_day_26_t1",
          title: "HTML Anchor Element",
          explanation:
            "• The HTML anchor element <a> defines a hyperlink. Hyperlinks are used to navigate to other web pages, resources, or specific sections within the same document. Links are one of the core features of the web, allowing users to move between resources.",
          examples: [
            {
              language: "html",
              code: '<a href="https://www.ccbp.in/">Explore CCBP 4.0 Certification Programs</a>',
              explanation:
                "• The href attribute specifies the destination URL where the link navigates.",
            },
          ],
        },
        {
          id: "sc_day_26_t2",
          title: "HTML href Attribute",
          explanation:
            "• The href attribute specifies the URL or path of the page that the hyperlink points to. It can link to external websites, internal pages, or specific sections within the same page.",
        },
        {
          id: "sc_day_26_t3",
          title: "HTML target Attribute",
          explanation:
            "• The target attribute specifies where to open the linked document. The most common value is _blank, which opens the link in a new browser tab.",
          examples: [
            {
              language: "html",
              code: '<a href="https://www.ccbp.in/" target="_blank">Explore CCBP 4.0 Certification Programs</a>',
              explanation:
                "• The link opens in a new tab because target is set to _blank.",
            },
          ],
        },
        {
          id: "sc_day_26_t4",
          title: "Navigate Within the Same HTML Document",
          explanation:
            "• You can use the anchor element to navigate to a specific section within the same page. To do this, assign an id to the target section and use #idValue in the href attribute.",
          examples: [
            {
              language: "html",
              code: '<a href="#about">Go to About Section</a>\n\n<div id="about">\n  <h2>About Section</h2>\n</div>',
              explanation:
                "• Clicking the link scrolls the page to the element with id='about'.",
            },
          ],
        },
        {
          id: "sc_day_26_t5",
          title: "HTML Image Element as Link",
          explanation:
            "• An image can be wrapped inside an anchor tag to make it clickable. When clicked, it behaves like a hyperlink.",
          examples: [
            {
              language: "html",
              code: '<a href="https://www.ccbp.in/">\n  <img src="profile-avatar-img.png" alt="Profile Image" />\n</a>',
              explanation: "• The image acts as a clickable link.",
            },
          ],
        },
        {
          id: "sc_day_26_t6",
          title: "HTML Line Break Element (br)",
          explanation:
            "• The <br /> element is a void element used to insert a line break in text. It moves content to the next line without creating a new paragraph.",
          examples: [
            {
              language: "html",
              code: "<p>\n  Twinkle, twinkle, little star, <br />\n  How I wonder what you are! <br />\n  Up above the world so high.\n</p>",
              explanation:
                "• Each <br /> tag forces the text to continue on the next line.",
            },
          ],
        },
        {
          id: "sc_day_26_t7",
          title: "HTML Horizontal Rule Element (hr)",
          explanation:
            "• The <hr /> element inserts a horizontal line to separate content. It is commonly used to divide sections of a webpage. It is also a void element and does not require a closing tag.",
          examples: [
            {
              language: "html",
              code: "<h1>Twinkle Twinkle Little Star</h1>\n<hr />\n<p>\n  Twinkle, twinkle, little star,\n</p>\n<hr />",
              explanation:
                "• The <hr /> element visually separates content sections.",
            },
          ],
        },
        {
          id: "sc_day_26_t8",
          title: "Common HTML Void Elements",
          explanation:
            "• Void elements are HTML elements that do not have closing tags and cannot contain content. Common void elements include img, br, hr, and input. They are self-contained and are used to insert media, breaks, or input fields into a webpage.",
        },
      ],
    },
  ],

  27: [
    {
      id: "sc_day_27",
      title: "String Basic",
      topics: [
        {
          id: "sc_day_27_t1",
          title: "String Concatenation",
          explanation:
            "• String concatenation means combining two or more strings using the + operator. When strings are added together, JavaScript joins them into a single string.",
          examples: [
            {
              language: "javascript",
              code: 'let a = "1" + "2";\nconsole.log(a);',
              explanation: '• "1" and "2" are combined to form "12".',
            },
            {
              language: "javascript",
              code: 'let username = "Ravi";\nconsole.log("Hi " + username);',
              explanation:
                '• The string "Hi " is combined with the value of username. Output: Hi Ravi.',
            },
          ],
        },
        {
          id: "sc_day_27_t2",
          title: "Template Literals",
          explanation:
            "• Template literals are a modern way to create strings in JavaScript using backticks (`). They allow variable insertion, multi-line strings, and expressions inside strings.",
          examples: [
            {
              language: "javascript",
              code: 'let username = "Ravi";\nlet age = 20;\nconst text = `My name is ${username} and I am ${age} years old`;\nconsole.log(text);',
              explanation:
                "• Variables are inserted using ${}. Output: My name is Ravi and I am 20 years old.",
            },
            {
              language: "javascript",
              code: "let message = `Hello,\nWelcome to JavaScript.\nHave a nice day!`;\nconsole.log(message);",
              explanation:
                "• Template literals allow multi-line strings without special characters.",
            },
            {
              language: "javascript",
              code: "let a = 5;\nlet b = 3;\nconsole.log(`Sum is ${a + b}`);",
              explanation:
                "• Expressions can be evaluated inside ${}. Output: Sum is 8.",
            },
          ],
        },
        {
          id: "sc_day_27_t3",
          title: "Indexing",
          explanation:
            "• Strings in JavaScript are indexed starting from 0. Each character can be accessed using its index position.",
          examples: [
            {
              language: "javascript",
              code: 'let username = "Ravi";\nconsole.log(username[0]);\nconsole.log(username[1]);\nconsole.log(username[2]);\nconsole.log(username[3]);',
              explanation:
                "• Index 0 gives R, 1 gives a, 2 gives v, 3 gives i.",
            },
            {
              language: "javascript",
              code: 'let username = "Ravi";\nconsole.log(username[4]);',
              explanation:
                "• Accessing an index outside the string length returns undefined.",
            },
          ],
        },
        {
          id: "sc_day_27_t4",
          title: "Accessing Characters and Negative Index",
          explanation:
            "• Characters can be accessed using index positions. While negative indexing is not directly supported, methods like slice() allow accessing characters from the end.",
          examples: [
            {
              language: "javascript",
              code: 'let word = "JavaScript";\nconsole.log(word.slice(-6));',
              explanation:
                "• slice(-6) extracts the last 6 characters. Output: Script.",
            },
          ],
        },
        {
          id: "sc_day_27_t5",
          title: "Comments in JavaScript",
          explanation:
            "• Comments are ignored by JavaScript and are used to explain code for better readability.",
          examples: [
            {
              language: "javascript",
              code: "// This is a single-line comment",
              explanation: "• Used to comment a single line.",
            },
            {
              language: "javascript",
              code: "/*\nThis is a multi-line comment\n*/",
              explanation: "• Used to comment multiple lines of code.",
            },
          ],
        },
        {
          id: "sc_day_27_t6",
          title: "Length of a String",
          explanation:
            "• The .length property is used to find the number of characters in a string.",
          examples: [
            {
              language: "javascript",
              code: 'let username = "Ravi";\nlet length = username.length;\nconsole.log(length);',
              explanation: '• The string "Ravi" has 4 characters. Output: 4.',
            },
          ],
        },
      ],
    },
  ],

  28: [
    {
      id: "sc_day_28",
      title: "JavaScript String Methods",
      topics: [
        {
          id: "sc_day_28_t1",
          title: "Introduction to String Methods",
          explanation:
            "• JavaScript provides built-in reusable utilities called string methods. These methods help perform common operations such as extracting, modifying, searching, and checking string content. They simplify string manipulation and improve code readability.",
        },
        {
          id: "sc_day_28_t2",
          title: "slice()",
          explanation:
            "• The slice() method extracts a portion of a string from a starting index to an ending index. The start index is included, and the end index is excluded. It also supports negative indexing.",
          examples: [
            {
              language: "javascript",
              code: 'const message = "Hi Ravi";\nconst part = message.slice(3, 7);\nconsole.log(part);',
              explanation:
                "• Extracts characters from index 3 to 6. Output: Ravi.",
            },
            {
              language: "javascript",
              code: 'const message = "HI Ravi";\nconsole.log(message.slice(3));',
              explanation: "• Extracts from index 3 to end. Output: Ravi.",
            },
            {
              language: "javascript",
              code: 'const word = "JavaScript";\nconsole.log(word.slice(-6));',
              explanation:
                "• Negative index counts from the end. Output: Script.",
            },
          ],
        },
        {
          id: "sc_day_28_t3",
          title: "toUpperCase()",
          explanation:
            "• The toUpperCase() method converts all characters of a string to uppercase.",
          examples: [
            {
              language: "javascript",
              code: 'const name = "ravi";\nconsole.log(name.toUpperCase());',
              explanation: "• Converts string to uppercase. Output: RAVI.",
            },
          ],
        },
        {
          id: "sc_day_28_t4",
          title: "trim()",
          explanation:
            "• The trim() method removes whitespace from both the beginning and end of a string.",
          examples: [
            {
              language: "javascript",
              code: 'let mobile = " 9876543210 ";\nmobile = mobile.trim();\nconsole.log(mobile);',
              explanation:
                "• Removes leading and trailing spaces. Output: 9876543210.",
            },
          ],
        },
        {
          id: "sc_day_28_t5",
          title: "replace() and replaceAll()",
          explanation:
            "• replace() replaces only the first occurrence of a substring. replaceAll() replaces all occurrences.",
          examples: [
            {
              language: "javascript",
              code: 'let sentence = "teh cat and teh dog";\nsentence = sentence.replace("teh", "the");\nconsole.log(sentence);',
              explanation:
                "• Replaces only the first occurrence. Output: the cat and teh dog.",
            },
            {
              language: "javascript",
              code: 'let sentence = "teh cat and teh dog";\nsentence = sentence.replaceAll("teh", "the");\nconsole.log(sentence);',
              explanation:
                "• Replaces all occurrences. Output: the cat and the dog.",
            },
          ],
        },
        {
          id: "sc_day_28_t6",
          title: "startsWith() and endsWith()",
          explanation:
            "• startsWith() checks if a string begins with a specified value. endsWith() checks if it ends with a specified value. Both return true or false.",
          examples: [
            {
              language: "javascript",
              code: 'const url = "https://onthegomodel.com";\nlet is_secure_url = url.startsWith("https://");\nconsole.log(is_secure_url);',
              explanation:
                "• Checks if string starts with https://. Output: true.",
            },
            {
              language: "javascript",
              code: 'const gmail_id = "rahul123@gmail.com";\nlet is_gmail = gmail_id.endsWith("@gmail.com");\nconsole.log(is_gmail);',
              explanation:
                "• Checks if string ends with @gmail.com. Output: true.",
            },
          ],
        },
        {
          id: "sc_day_28_t7",
          title: "includes()",
          explanation:
            "• The includes() method checks if a string contains a specified substring and returns true or false.",
          examples: [
            {
              language: "javascript",
              code: 'const text = "JavaScript";\nconsole.log(text.includes("Script"));',
              explanation:
                '• Checks if "Script" exists in the string. Output: true.',
            },
          ],
        },
        {
          id: "sc_day_28_t8",
          title: "split()",
          explanation:
            "• The split() method divides a string into an array of substrings based on a specified separator.",
          examples: [
            {
              language: "javascript",
              code: 'const text = "apple,banana,orange";\nconsole.log(text.split(","));',
              explanation:
                '• Splits string by comma. Output: ["apple", "banana", "orange"].',
            },
          ],
        },
        {
          id: "sc_day_28_t9",
          title: "charAt()",
          explanation:
            "• The charAt() method returns the character at a specific index.",
          examples: [
            {
              language: "javascript",
              code: 'const word = "JavaScript";\nconsole.log(word.charAt(4));',
              explanation: "• Returns character at index 4. Output: S.",
            },
          ],
        },
        {
          id: "sc_day_28_t10",
          title: "indexOf() and lastIndexOf()",
          explanation:
            "• indexOf() returns the first occurrence index of a substring. lastIndexOf() returns the last occurrence index. If not found, indexOf() returns -1.",
          examples: [
            {
              language: "javascript",
              code: 'const text = "Hello World";\nconsole.log(text.indexOf("o"));',
              explanation: "• Returns first index of 'o'. Output: 4.",
            },
            {
              language: "javascript",
              code: 'const text = "hello hello";\nconsole.log(text.lastIndexOf("o"));',
              explanation: "• Returns last index of 'o'. Output: 10.",
            },
          ],
        },
        {
          id: "sc_day_28_t11",
          title: "repeat()",
          explanation:
            "• The repeat() method repeats a string a specified number of times. The count must be greater than or equal to 0.",
          examples: [
            {
              language: "javascript",
              code: 'const text = "Hi ";\nconsole.log(text.repeat(3));',
              explanation: "• Repeats the string 3 times. Output: Hi Hi Hi.",
            },
            {
              language: "javascript",
              code: 'console.log("* ".repeat(4));',
              explanation: "• Repeats symbol 4 times. Output: * * * *.",
            },
          ],
        },
      ],
    },
  ],

  29: [
    {
      id: "sc_day_29",
      title: "Introduction to HTML5",
      topics: [
        {
          id: "sc_day_29_t1",
          title: "Versions of HTML and Software Evolution",
          explanation:
            "• Versions help track improvements in software over time. Just like Android evolved from version 8.0 to 15.0, HTML has also evolved. Major HTML versions include HTML 1.0 (1993), HTML 2 (1995), HTML 3.2 (1997), HTML 4.01 (1997), and HTML5 (2014). Each version introduced improvements and new features.",
        },
        {
          id: "sc_day_29_t2",
          title: "Features of HTML5",
          explanation:
            "• HTML5 simplifies web development and enhances web applications. Key features include native multimedia support (audio and video), semantic elements, geolocation support, and new input types for forms. HTML5 removes dependency on third-party plugins for multimedia.",
        },
        {
          id: "sc_day_29_t3",
          title: "Multimedia Support in HTML5",
          explanation:
            "• HTML5 introduced native support for multimedia using <video> and <audio> elements. These allow embedding video and audio directly into web pages without using external plugins.",
          examples: [
            {
              language: "html",
              code: '<video src="VIDEO_URL">\n  The video element is not supported\n</video>',
              explanation: "• The <video> element embeds video content.",
            },
            {
              language: "html",
              code: '<audio src="AUDIO_URL" controls>\n  The audio element is not supported\n</audio>',
              explanation:
                "• The <audio> element embeds audio content with playback controls.",
            },
          ],
        },
        {
          id: "sc_day_29_t4",
          title: "Video and Audio Attributes",
          explanation:
            "• HTML5 provides attributes to control multimedia playback.",
          examples: [
            {
              language: "html",
              code: '<video src="VIDEO_URL" controls autoplay muted width="400" height="300"></video>',
              explanation:
                "• controls adds playback buttons, autoplay starts automatically, muted disables sound, width and height set size.",
            },
            {
              language: "html",
              code: '<audio src="AUDIO_URL" controls loop preload="auto"></audio>',
              explanation:
                "• loop repeats audio, preload loads audio when page loads.",
            },
          ],
        },
        {
          id: "sc_day_29_t5",
          title: "Handling Unsupported Formats",
          explanation:
            "• To support multiple browser formats, multiple <source> elements can be used inside video or audio tags.",
          examples: [
            {
              language: "html",
              code: '<video controls>\n  <source src="video1.mp4" />\n  <source src="video2.ogg" />\n</video>',
              explanation: "• Browser plays the first supported format.",
            },
            {
              language: "html",
              code: '<audio controls>\n  <source src="audio1.mp3" />\n  <source src="audio2.ogg" />\n</audio>',
              explanation: "• Ensures compatibility across different browsers.",
            },
          ],
        },
        {
          id: "sc_day_29_t6",
          title: "Semantic Elements",
          explanation:
            "• HTML5 introduced semantic elements that clearly describe their meaning and role in the webpage structure. Examples include <header>, <footer>, <nav>, <section>, <article>, and <aside>. These improve accessibility, readability, and SEO.",
        },
        {
          id: "sc_day_29_t7",
          title: "Semantic vs Non-Semantic Elements",
          explanation:
            "• Semantic elements describe the meaning of content and improve document structure. Examples include <header>, <nav>, <footer>, <section>, and <article>. Non-semantic elements like <div> and <span> do not describe content meaning and are mainly used for layout and styling.",
        },
        {
          id: "sc_day_29_t8",
          title: "Location Support (Geolocation API)",
          explanation:
            "• HTML5 provides access to the user's geographical location through the Geolocation API. This enables location-based services like weather apps, maps, and local search results.",
        },
        {
          id: "sc_day_29_t9",
          title: "New Input Types in HTML5",
          explanation:
            "• HTML5 introduced new input types that enhance form validation and user experience. These include date, week, month, time, range, file, password, URL, email, and search.",
          examples: [
            {
              language: "html",
              code: '<input type="date" />\n<input type="email" />\n<input type="range" />',
              explanation:
                "• These input types provide built-in validation and better UI controls.",
            },
          ],
        },
        {
          id: "sc_day_29_t10",
          title: "Interview Questions",
          explanation:
            "• HTML is used to structure web pages. HTML5 is the latest version with enhanced features like multimedia support, semantic elements, geolocation, and advanced form inputs. Semantic elements describe content meaning and improve accessibility. Non-semantic elements like <div> and <span> are mainly used for layout and styling without conveying meaning.",
        },
      ],
    },
  ],

  30: [
    {
      id: "sc_day_30",
      title: "HTML Semantic Elements",
      topics: [
        {
          id: "sc_day_30_t1",
          title: "Introduction to Semantic Elements",
          explanation:
            "• Semantic elements are HTML tags that clearly describe the meaning of their content to both the browser and the developer. Semantics means the meaning of a piece of code. These elements improve readability, accessibility, and help search engines understand the structure of the webpage.",
        },
        {
          id: "sc_day_30_t2",
          title: "Semantic vs Non-Semantic Elements",
          explanation:
            "• Semantic elements describe the meaning of the content they enclose, while non-semantic elements are used mainly for layout and styling without conveying meaning.",
          examples: [
            {
              language: "html",
              code: "<h1>Artificial Intelligence</h1>",
              explanation: "• <h1> clearly represents a top-level heading.",
            },
            {
              language: "html",
              code: "<div>Artificial Intelligence</div>",
              explanation:
                "• <div> does not describe the purpose of the content without additional context.",
            },
          ],
        },
        {
          id: "sc_day_30_t3",
          title: "Common Sectioning Semantic Elements",
          explanation:
            "• Sectioning elements define the structure of a webpage and divide it into meaningful parts.",
          examples: [
            {
              language: "html",
              code: "<header>Content</header>\n<nav>Content</nav>\n<article>Content</article>\n<section>Content</section>\n<aside>Content</aside>\n<footer>Content</footer>",
              explanation:
                "• These elements structure the webpage into logical sections.",
            },
          ],
        },
        {
          id: "sc_day_30_t4",
          title: "Purpose of Sectioning Elements",
          explanation:
            "• Each sectioning element has a specific role in structuring a webpage.",
          examples: [
            {
              language: "html",
              code: "<header>Top section with branding or navigation</header>",
              explanation: "• Represents the top portion of the webpage.",
            },
            {
              language: "html",
              code: "<nav>Navigation Links</nav>",
              explanation: "• Represents navigation links.",
            },
            {
              language: "html",
              code: "<article>Blog Post Content</article>",
              explanation:
                "• Represents independent content like a blog or news article.",
            },
            {
              language: "html",
              code: "<section>Grouped Thematic Content</section>",
              explanation:
                "• Represents a thematic grouping of related content.",
            },
            {
              language: "html",
              code: "<aside>Sidebar Content</aside>",
              explanation: "• Represents related or sidebar content.",
            },
            {
              language: "html",
              code: "<footer>Footer Information</footer>",
              explanation:
                "• Represents bottom content like copyright or contact details.",
            },
          ],
        },
        {
          id: "sc_day_30_t5",
          title: "New HTML5 Semantic Elements",
          explanation:
            "• HTML5 introduced additional semantic elements for better structure and meaning.",
          examples: [
            {
              language: "html",
              code: "<p>This is an <mark>important</mark> note.</p>",
              explanation: "• <mark> highlights important text.",
            },
            {
              language: "html",
              code: '<figure>\n  <img src="image.jpg" alt="Sample Image" />\n  <figcaption>Caption for the image.</figcaption>\n</figure>',
              explanation:
                "• <figure> represents self-contained content and <figcaption> adds a caption.",
            },
            {
              language: "html",
              code: "<details>\n  <summary>Click to see more details</summary>\n  <p>This is hidden content.</p>\n</details>",
              explanation:
                "• <details> creates expandable content and <summary> acts as its heading.",
            },
          ],
        },
        {
          id: "sc_day_30_t6",
          title: "Using Semantic Elements in a Blog Layout",
          explanation:
            "• Replacing non-semantic elements with semantic elements improves clarity and structure.",
          examples: [
            {
              language: "html",
              code: '<div class="nav-bar">...</div>\n<div class="blog-content-container">...</div>\n<div class="ads-container">...</div>\n<div class="footer">...</div>',
              explanation: "• Using non-semantic elements for layout.",
            },
            {
              language: "html",
              code: '<header class="nav-bar">...</header>\n<article class="blog-content-container">...</article>\n<aside class="ads-container">...</aside>\n<footer class="footer">...</footer>',
              explanation:
                "• Using semantic elements improves readability and structure.",
            },
          ],
        },
        {
          id: "sc_day_30_t7",
          title: "Advantages of Semantic Elements",
          explanation:
            "• Semantic elements provide structured code, improve SEO ranking, enhance accessibility for screen readers, and improve user navigation, especially for keyboard users.",
        },
        {
          id: "sc_day_30_t8",
          title: "Interview Questions",
          explanation:
            "• HTML semantic elements are tags that clearly describe the meaning and role of content. Examples include <header>, <section>, <article>, and <footer>. The <section> tag groups related content into meaningful parts, improving readability and helping search engines and assistive technologies understand the page structure.",
        },
      ],
    },
  ],

  31: [
    {
      id: "sc_day_31",
      title: "Introduction to Loops",
      topics: [
        {
          id: "sc_day_31_t1",
          title: "Introduction to Loops",
          explanation:
            "• Loops are used to execute a block of code multiple times as long as a specified condition is true. Normally, JavaScript executes code sequentially, meaning each line runs once. Loops allow us to control the flow of execution and repeat certain instructions automatically, which helps in handling repetitive tasks efficiently.",
        },
        {
          id: "sc_day_31_t2",
          title: "While Loop",
          explanation:
            "• The while loop repeatedly executes a block of code as long as the given condition evaluates to true. The condition is checked before each iteration.",
          examples: [
            {
              language: "javascript",
              code: "let a = 1;\nwhile (a <= 3) {\n  console.log(a);\n  a++;\n}",
              explanation:
                "• The loop runs while a is less than or equal to 3. Output: 1 2 3.",
            },
          ],
        },
        {
          id: "sc_day_31_t3",
          title: "Do-While Loop",
          explanation:
            "• The do-while loop is similar to the while loop, but it guarantees that the block of code executes at least once. The condition is checked after the first execution.",
          examples: [
            {
              language: "javascript",
              code: "let a = 1;\ndo {\n  console.log(a);\n  a++;\n} while (a <= 3);",
              explanation:
                "• The code runs first and then checks the condition. Output: 1 2 3.",
            },
          ],
        },
        {
          id: "sc_day_31_t4",
          title: "Code Walkthrough Example",
          explanation:
            "• This example demonstrates how a counter variable controls loop execution and ensures termination.",
          examples: [
            {
              language: "javascript",
              code: 'let a = 5;\nlet counter = 0;\n\nwhile (counter < 3) {\n  a = a + 1;\n  console.log(a);\n  counter = counter + 1;\n}\n\nconsole.log("End");',
              explanation: "• The loop runs 3 times. Output: 6 7 8 End.",
            },
          ],
        },
        {
          id: "sc_day_31_t5",
          title: "Common Mistakes in Loops",
          explanation:
            "• Improper loop setup can lead to errors or infinite loops. It is important to initialize variables correctly, update them properly, and ensure the condition eventually becomes false.",
          examples: [
            {
              language: "javascript",
              code: "// Mistake 1: Missing Initialization\nlet a = 5;\nwhile (counter < 3) {\n  a = a + 1;\n  console.log(a);\n  counter = counter + 1;\n}",
              explanation:
                "• Error occurs because counter is not defined before the loop.",
            },
            {
              language: "javascript",
              code: "// Mistake 2: Incorrect Termination Condition\nlet a = 10;\nlet counter = 0;\nlet condition = (counter < 3);\n\nwhile (condition) {\n  a = a + 1;\n  console.log(a);\n  counter = counter + 1;\n}",
              explanation:
                "• The condition is not updated inside the loop, which may cause an infinite loop.",
            },
            {
              language: "javascript",
              code: "// Mistake 3: Not Updating Counter\nlet a = 1;\nlet counter = 1;\n\nwhile (counter < 3) {\n  a = a + 1;\n  console.log(a);\n}",
              explanation:
                "• Counter is never updated, so the loop may run infinitely.",
            },
          ],
        },
      ],
    },
  ],

  32: [
    {
      id: "sc_day_32",
      title: "Leveraging Gen AI for Debugging & Building",
      topics: [
        {
          id: "sc_day_32_t1",
          title: "Introduction to Gen AI in Web Development",
          explanation:
            "• Generative AI (Gen AI) can significantly accelerate the development and debugging process when building static websites using HTML and CSS. It acts as an intelligent assistant that explains errors, suggests improvements, and helps developers understand core concepts faster.",
        },
        {
          id: "sc_day_32_t2",
          title: "Role of Gen AI in Debugging",
          explanation:
            "• Gen AI acts as a tutor during debugging. It explains errors, identifies possible causes, and connects issues to fundamental HTML and CSS concepts. This makes debugging faster, more structured, and concept-driven rather than trial-and-error.",
        },
        {
          id: "sc_day_32_t3",
          title: "Understanding Errors Using Gen AI",
          explanation:
            "• When encountering layout issues or unexpected behavior in HTML/CSS, Gen AI can break down the problem, explain why it occurs, and relate it to important concepts like box model, positioning, flexbox, alignment, image scaling, and layout grouping.",
          examples: [
            {
              language: "text",
              code: 'Prompt:\n\nI encountered an error while building a Static Website with HTML/CSS.\nCan you explain what the error means, why it might occur, and any relevant HTML/CSS concepts involved, without providing a fix?\n\nCode:\n"""\n<Your HTML/CSS Code Here>\n"""',
              explanation:
                "• This prompt helps you understand the root cause of the issue without directly jumping to the solution.",
            },
          ],
        },
        {
          id: "sc_day_32_t4",
          title: "Fixing Errors with Gen AI",
          explanation:
            "• Gen AI can analyze your code, identify structural or styling issues, explain underlying concepts, and guide you step-by-step toward fixing the issue. It can also provide corrected code if requested.",
          examples: [
            {
              language: "text",
              code: 'Prompt:\n\nI encountered an issue while building a Static Website with HTML/CSS.\nAnalyze the code, explain what might be causing the issue, discuss the related concepts, and guide me through resolving it with necessary fixes.\n\nCode:\n"""\n<Your HTML/CSS Code Here>\n"""',
              explanation:
                "• This prompt helps you both understand and fix the issue with conceptual clarity.",
            },
          ],
        },
        {
          id: "sc_day_32_t5",
          title: "Building Static Websites Using Gen AI",
          explanation:
            "• Gen AI can convert design mockups into complete HTML and CSS code. It helps match layout, spacing, colors, typography, shadows, and images with high accuracy.",
          examples: [
            {
              language: "text",
              code: "Prompt:\n\nAct as a skilled front-end web developer specializing in creating perfect static websites from design mockups. Build a static website that replicates the provided design mockup with 100% accuracy.\n\nGuidelines:\n- Match layout and structure exactly.\n- Use valid Unsplash image links.\n- Match colors, fonts, spacing, borders, and shadows.\n- Use provided icons correctly.",
              explanation:
                "• This prompt instructs Gen AI to generate a pixel-perfect static website.",
            },
          ],
        },
        {
          id: "sc_day_32_t6",
          title: "Building Variants Using Gen AI",
          explanation:
            "• Gen AI can generate creative variants of an existing design by modifying layout structure, colors, typography, and visual hierarchy while keeping the core idea intact.",
          examples: [
            {
              language: "text",
              code: "Prompt:\n\nAct as a skilled front-end developer. Transform the provided mockup into a creative variant with significant visual and structural differences.\n\nGuidelines:\n- Use different colors and spacing.\n- Apply new shadows and borders.\n- Use relevant Unsplash images.\n- Style icons according to the new theme.",
              explanation:
                "• This allows experimentation and creative exploration while maintaining structure.",
            },
          ],
        },
        {
          id: "sc_day_32_t7",
          title: "Resources",
          explanation:
            "• Useful resources include Gen AI tools for debugging assistance and Unsplash for high-quality, royalty-free images when building static websites.",
        },
      ],
    },
  ],

  33: [
    {
      id: "sc_day_33",
      title: "JavaScript For Loop",
      topics: [
        {
          id: "sc_day_33_t1",
          title: "Introduction to For Loop",
          explanation:
            "• The for loop is used to execute a block of code a specific number of times. It is commonly used when the number of iterations is known in advance, such as iterating over characters in a string or elements in an array.",
        },
        {
          id: "sc_day_33_t2",
          title: "Syntax of For Loop",
          explanation:
            "• A for loop consists of three main parts: initialization, termination condition, and updation. The loop runs until the termination condition becomes false.",
          examples: [
            {
              language: "javascript",
              code: "for (initialization; termination_condition; updation) {\n  // Block of code\n}",
              explanation:
                "• Initialization sets the starting point, the condition controls execution, and updation modifies the loop variable after each iteration.",
            },
          ],
        },
        {
          id: "sc_day_33_t3",
          title: "Iterating Over Characters in a String",
          explanation:
            "• The for loop can iterate over each character in a string using its index.",
          examples: [
            {
              language: "javascript",
              code: 'let word = "Hello";\n\nfor (let i = 0; i < word.length; i++) {\n  console.log(word[i]);\n}',
              explanation:
                "• The loop starts at index 0 and continues until i is less than word.length. Output: H e l l o.",
            },
          ],
        },
        {
          id: "sc_day_33_t4",
          title: "Code Walkthrough",
          explanation:
            "• In the first iteration, i is 0, so word[0] is printed. After each iteration, i is incremented by 1. The loop stops when i equals word.length.",
        },
        {
          id: "sc_day_33_t5",
          title: "Common Mistakes in For Loop",
          explanation:
            "• Incorrect termination conditions or improper updates may cause infinite loops or off-by-one errors.",
          examples: [
            {
              language: "javascript",
              code: '// Mistake 1: Incorrect Update Causing Infinite Loop\nlet word = "Hello";\n\nfor (let i = 0; i < word.length; i++) {\n  console.log(word[i]);\n  i--;  // Incorrect update\n}',
              explanation:
                "• Decreasing i prevents it from reaching the termination condition, causing an infinite loop.",
            },
            {
              language: "javascript",
              code: '// Mistake 2: Off-by-One Error\nlet word = "Hello";\n\nfor (let i = 0; i <= word.length; i++) {\n  console.log(word[i]);\n}',
              explanation:
                "• Using <= instead of < causes the loop to run one extra time, resulting in undefined.",
            },
            {
              language: "javascript",
              code: '// Corrected Version\nlet word = "Hello";\n\nfor (let i = 0; i < word.length; i++) {\n  console.log(word[i]);\n}',
              explanation:
                "• The loop runs correctly from index 0 to word.length - 1.",
            },
          ],
        },
      ],
    },
  ],

  34: [
    {
      id: "sc_day_34",
      title: "JavaScript Nested Loops",
      topics: [
        {
          id: "sc_day_34_t1",
          title: "Introduction to Nested Loops",
          explanation:
            "• Nested loops are loops placed inside another loop. They are used when we need to repeat a set of actions multiple times for each iteration of an outer loop. The inner loop completes all its iterations for every single iteration of the outer loop.",
        },
        {
          id: "sc_day_34_t2",
          title: "Syntax of Nested Loops",
          explanation:
            "• A nested loop consists of an outer loop and an inner loop. The outer loop runs first, and for each iteration of the outer loop, the inner loop executes completely.",
          examples: [
            {
              language: "javascript",
              code: "for (initializationA; terminationA; updationA) {\n  // Block 1\n\n  for (initializationB; terminationB; updationB) {\n    // Block 2\n  }\n\n  // Block 3\n}\n\n// Block 4",
              explanation:
                "• The inner loop runs fully for every iteration of the outer loop.",
            },
          ],
        },
        {
          id: "sc_day_34_t3",
          title: "Nested Loop Example",
          explanation:
            "• This example demonstrates how the inner loop executes fully for each iteration of the outer loop.",
          examples: [
            {
              language: "javascript",
              code: 'for (let a = 0; a < 3; a++) {\n  console.log("outer : " + a);\n\n  for (let b = 7; b < 9; b++) {\n    console.log(" inner : " + b);\n  }\n}\n\nconsole.log("End");',
              explanation:
                "• For each value of a (0, 1, 2), the inner loop runs for b = 7 and b = 8. After both loops finish, 'End' is printed.",
            },
          ],
        },
        {
          id: "sc_day_34_t4",
          title: "Step-by-Step Execution",
          explanation:
            "• When a = 0, the inner loop runs completely. Then a becomes 1 and the inner loop runs again. Then a becomes 2 and the inner loop runs again. Only after the outer loop finishes does the program move forward.",
        },
        {
          id: "sc_day_34_t5",
          title: "Common Mistakes in Nested Loops",
          explanation:
            "• Incorrect termination conditions or missing updates in nested loops can lead to infinite loops or incorrect iteration counts.",
          examples: [
            {
              language: "javascript",
              code: '// Mistake 1: Infinite Loop (Missing Increment)\nfor (let a = 0; a < 3; a++) {\n  console.log("outer : " + a);\n\n  for (let b = 7; b < 9;) {  // Missing b++\n    console.log(" inner : " + b);\n  }\n}',
              explanation:
                "• Since b is never incremented, the inner loop never reaches its termination condition.",
            },
            {
              language: "javascript",
              code: '// Mistake 2: Off-by-One Error\nfor (let a = 0; a < 3; a++) {\n  console.log("outer : " + a);\n\n  for (let b = 7; b <= 8; b++) {\n    console.log(" inner : " + b);\n  }\n}',
              explanation:
                "• Using <= instead of < may cause confusion in defining ranges. Always ensure the termination condition matches the intended iteration range.",
            },
          ],
        },
      ],
    },
  ],

  35: [
    {
      id: "sc_day_35",
      title: "More CSS Concepts",
      topics: [
        {
          id: "sc_day_35_t1",
          title: "Margin Variants",
          explanation:
            "• CSS margin properties control the space outside an element. You can apply margin to specific sides using margin-top, margin-right, margin-bottom, and margin-left.",
          examples: [
            {
              language: "css",
              code: ".color-box {\n  padding: 30px;\n  margin-top: 12px;\n}",
              explanation: "• Adds space only to the top of the element.",
            },
          ],
        },
        {
          id: "sc_day_35_t2",
          title: "Margin Auto (Centering)",
          explanation:
            "• Using margin-left: auto and margin-right: auto allows horizontal centering of block-level elements inside their parent container.",
          examples: [
            {
              language: "css",
              code: ".color-box {\n  width: 300px;\n  padding: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}",
              explanation:
                "• Centers the element horizontally within its container.",
            },
          ],
        },
        {
          id: "sc_day_35_t3",
          title: "Percentages in CSS",
          explanation:
            "• Percentages allow element sizes to be defined relative to their parent element. This is useful for responsive design.",
          examples: [
            {
              language: "css",
              code: ".color-box {\n  padding: 30px;\n  width: 50%;\n}",
              explanation: "• Sets the width to 50% of the parent container.",
            },
          ],
        },
        {
          id: "sc_day_35_t4",
          title: "Padding Variants",
          explanation:
            "• Padding defines the space inside an element between content and border. You can set padding individually for each side.",
          examples: [
            {
              language: "css",
              code: ".color-box {\n  padding-top: 20px;\n  padding-right: 15px;\n  padding-bottom: 10px;\n  padding-left: 5px;\n}",
              explanation:
                "• Adds different internal spacing to each side of the element.",
            },
          ],
        },
        {
          id: "sc_day_35_t5",
          title: "Block-Level vs Inline Elements",
          explanation:
            "• Block-level elements take full width and start on a new line. Inline elements take only the required width and stay on the same line.",
          examples: [
            {
              language: "html",
              code: "<h1>The Seven Wonders of the World</h1>\n<p>The Taj Mahal is one of the Seven Wonders.</p>",
              explanation:
                "• Block-level elements start on a new line and occupy full width.",
            },
            {
              language: "html",
              code: '<p>The <a href="#">Taj Mahal</a> is one of the Seven Wonders.</p>',
              explanation: "• Inline elements stay within the same line.",
            },
          ],
        },
        {
          id: "sc_day_35_t6",
          title: "Span Element",
          explanation:
            "• The <span> element is an inline container used for styling small portions of text without breaking the line.",
          examples: [
            {
              language: "html",
              code: '<p>The <span class="spanEle">Taj Mahal</span> is one of the Seven Wonders.</p>',
              explanation: "• Used to style a specific portion of text.",
            },
            {
              language: "css",
              code: ".spanEle {\n  background-color: orange;\n  font-weight: bold;\n}",
              explanation: "• Applies styling to the span element.",
            },
          ],
        },
        {
          id: "sc_day_35_t7",
          title: "Gradients in CSS",
          explanation:
            "• Gradients create smooth transitions between two or more colors. They are commonly used as background images.",
          examples: [
            {
              language: "css",
              code: ".linear-gradient-background {\n  height: 100vh;\n  background-image: linear-gradient(#2196f3, #f44336);\n}",
              explanation: "• Creates a linear gradient from blue to red.",
            },
            {
              language: "css",
              code: ".radial-gradient-background {\n  height: 100vh;\n  background-image: radial-gradient(#2196f3, #f44336);\n}",
              explanation: "• Creates a radial gradient from center outward.",
            },
          ],
        },
        {
          id: "sc_day_35_t8",
          title: "Interview Questions",
          explanation:
            "• The <div> element is a block-level container used for grouping larger sections of content. The <span> element is an inline container used for styling small portions of text. Block-level elements occupy full width and start on a new line, while inline elements occupy only the necessary width and stay on the same line.",
        },
      ],
    },
  ],

  36: [
    {
      id: "sc_day_36",
      title: "CSS Selectors",
      topics: [
        {
          id: "sc_day_36_t1",
          title: "Introduction to CSS Selectors",
          explanation:
            "• CSS Selectors are used to select HTML elements that we want to style. Different types of selectors allow us to target elements based on class, id, tag name, attributes, and more.",
        },
        {
          id: "sc_day_36_t2",
          title: "Class Selector",
          explanation:
            "• The class selector selects all HTML elements that have a specific class attribute. It is defined using a dot (.) followed by the class name. Multiple elements can share the same class.",
          examples: [
            {
              language: "html",
              code: '<p class="paragraph">The population of India is around 138 crores.</p>',
              explanation: "• The element has a class named paragraph.",
            },
            {
              language: "css",
              code: ".paragraph {\n  color: blue;\n}",
              explanation:
                '• Selects all elements with class="paragraph" and applies blue color.',
            },
          ],
        },
        {
          id: "sc_day_36_t3",
          title: "ID Selector",
          explanation:
            "• The ID selector selects an HTML element based on its id attribute. It is defined using a hash (#) followed by the ID name. IDs should be unique within a document.",
          examples: [
            {
              language: "html",
              code: '<p id="populationParagraph">The population of India is around 138 crores.</p>',
              explanation: "• The element has a unique id.",
            },
            {
              language: "css",
              code: "#populationParagraph {\n  color: blue;\n}",
              explanation:
                '• Selects the element with id="populationParagraph".',
            },
          ],
        },
        {
          id: "sc_day_36_t4",
          title: "Type (Tag) Selector",
          explanation:
            "• The type selector selects all elements based on their tag name such as h1, p, div, etc.",
          examples: [
            {
              language: "css",
              code: "p {\n  color: blue;\n}",
              explanation: "• Selects all paragraph elements.",
            },
          ],
        },
        {
          id: "sc_day_36_t5",
          title: "Fundamental Concepts of CSS",
          explanation:
            "• CSS styling behavior depends on three core concepts: Inheritance, Specificity, and Cascade.",
        },
        {
          id: "sc_day_36_t6",
          title: "CSS Inheritance",
          explanation:
            "• Inheritance is the mechanism where certain CSS properties applied to a parent element are passed down to its child elements.",
        },
        {
          id: "sc_day_36_t7",
          title: "Parent and Child Elements",
          explanation:
            "• If HTML elements are placed inside another element, the outer element is the parent, and the inner elements are its children.",
          examples: [
            {
              language: "html",
              code: '<div>\n  <h1>The seven wonders of the world</h1>\n  <p>\n    The <a href="#">Taj Mahal</a>\n    is one of the seven wonders of the world.\n  </p>\n</div>',
              explanation:
                "• div is the parent of h1 and p. p is the parent of a.",
            },
          ],
        },
        {
          id: "sc_day_36_t8",
          title: "Inherited Properties",
          explanation:
            "• Inherited properties automatically pass from parent to child. These usually include text-related and list-related properties.",
          examples: [
            {
              language: "text",
              code: "Inherited Properties:\n- font-family\n- font-style\n- font-weight\n- text-align\n- color\n- list-style-type",
              explanation:
                "• These properties are inherited by child elements.",
            },
          ],
        },
        {
          id: "sc_day_36_t9",
          title: "Non-Inherited Properties",
          explanation:
            "• Non-inherited properties do not pass from parent to child. These typically include box model and background properties.",
          examples: [
            {
              language: "text",
              code: "Non-Inherited Properties:\n- width\n- height\n- margin\n- padding\n- border-style\n- border-width\n- border-color\n- border-radius\n- background-color\n- background-image\n- background-size",
              explanation:
                "• These properties must be explicitly applied to each element.",
            },
          ],
        },
        {
          id: "sc_day_36_t10",
          title: "Specificity and Cascade",
          explanation:
            "• Specificity determines which CSS rule is applied when multiple rules target the same element. ID selectors have higher specificity than class selectors, and class selectors have higher specificity than type selectors. Cascade means the last declared rule (with equal specificity) will be applied.",
        },
      ],
    },
  ],

  37: [
    {
      id: "sc_day_37",
      title: "Loop Control Statements",
      topics: [
        {
          id: "sc_day_37_t1",
          title: "Introduction to Loop Control Statements",
          explanation:
            "• Loop control statements allow us to modify the normal flow of loop execution. They help us stop a loop early or skip specific iterations when certain conditions are met. The two primary loop control statements in JavaScript are break and continue.",
        },
        {
          id: "sc_day_37_t2",
          title: "Break Statement",
          explanation:
            "• The break statement immediately exits the loop when a specified condition is satisfied. Control moves to the first statement after the loop.",
          examples: [
            {
              language: "javascript",
              code: 'for (let i = 0; i < 10; i++) {\n  if (i === 2) {\n    break;\n  }\n  console.log(i);\n}\n\nconsole.log("End");',
              explanation:
                "• The loop stops when i becomes 2. Output: 0 1 End.",
            },
          ],
        },
        {
          id: "sc_day_37_t3",
          title: "Break in Nested Loops",
          explanation:
            "• When used inside nested loops, break only exits the innermost loop in which it is placed. The outer loop continues executing.",
          examples: [
            {
              language: "javascript",
              code: 'for (let a = 0; a < 2; a++) {\n  console.log("outer : " + a);\n\n  for (let b = 0; b < 4; b++) {\n    if (b === 1) {\n      break;\n    }\n    console.log(" inner : " + b);\n  }\n}',
              explanation:
                "• The inner loop exits when b becomes 1, but the outer loop continues.",
            },
          ],
        },
        {
          id: "sc_day_37_t4",
          title: "Continue Statement",
          explanation:
            "• The continue statement skips the remaining code in the current iteration and immediately proceeds to the next iteration of the loop.",
          examples: [
            {
              language: "javascript",
              code: 'for (let a = 0; a < 3; a++) {\n  if (a === 1) {\n    continue;\n  }\n  console.log(a);\n}\n\nconsole.log("End");',
              explanation:
                "• The iteration where a equals 1 is skipped. Output: 0 2 End.",
            },
          ],
        },
        {
          id: "sc_day_37_t5",
          title: "When to Use break and continue",
          explanation:
            "• Use break when you need to stop the loop completely once a condition is met. Use continue when you want to skip certain iterations but allow the loop to continue executing.",
        },
      ],
    },
  ],

  38: [
    {
      id: "sc_day_38",
      title: "More CSS Selectors",
      topics: [
        {
          id: "sc_day_38_t1",
          title: "Introduction to Advanced Selectors",
          explanation:
            "• CSS selectors are used to target HTML elements for styling. In this unit, we focus on advanced selectors including pseudo-classes, pseudo-elements, combinators, and attribute selectors. These selectors allow more precise and dynamic styling based on state, position, and relationships.",
        },
        {
          id: "sc_day_38_t2",
          title: "Pseudo-classes",
          explanation:
            "• Pseudo-classes allow us to style elements based on their special state such as hover, visited, focus, or position inside a parent element.",
          examples: [
            {
              language: "css",
              code: "button:hover {\n  background-color: darkviolet;\n  color: white;\n}",
              explanation: "• Styles the button when the user hovers over it.",
            },
            {
              language: "css",
              code: "a:visited {\n  color: brown;\n}",
              explanation: "• Styles links that have already been visited.",
            },
            {
              language: "css",
              code: "li:first-child {\n  color: green;\n}",
              explanation: "• Selects the first child li element.",
            },
            {
              language: "css",
              code: "li:last-child {\n  color: green;\n}",
              explanation: "• Selects the last child li element.",
            },
            {
              language: "css",
              code: "li:nth-child(2n) {\n  color: green;\n}",
              explanation: "• Selects every 2nd list item.",
            },
            {
              language: "css",
              code: "p:empty {\n  height: 20px;\n  background-color: #f0f0f0;\n}",
              explanation: "• Styles paragraph elements that have no content.",
            },
          ],
        },
        {
          id: "sc_day_38_t3",
          title: "Pseudo-elements",
          explanation:
            "• Pseudo-elements allow us to style specific parts of an element such as the first letter, first line, or insert content before or after an element.",
          examples: [
            {
              language: "css",
              code: "p::first-letter {\n  color: orange;\n  font-size: 36px;\n}",
              explanation: "• Styles the first letter of a paragraph.",
            },
            {
              language: "css",
              code: "p::first-line {\n  color: blue;\n}",
              explanation: "• Styles only the first line of a paragraph.",
            },
            {
              language: "css",
              code: 'li::before {\n  content: "* ";\n  color: darkviolet;\n}',
              explanation: "• Inserts content before list items.",
            },
            {
              language: "css",
              code: '.main-heading::after {\n  content: " (ML)";\n  color: darkviolet;\n}',
              explanation: "• Adds content after an element.",
            },
            {
              language: "css",
              code: "li::marker {\n  color: orange;\n}",
              explanation: "• Styles list bullet or number markers.",
            },
          ],
        },
        {
          id: "sc_day_38_t4",
          title: "Combinators",
          explanation:
            "• Combinators define relationships between selectors. They help target elements based on hierarchy or sibling relationships.",
          examples: [
            {
              language: "css",
              code: "div p {\n  color: orange;\n}",
              explanation:
                "• Descendant combinator: selects all p elements inside div.",
            },
            {
              language: "css",
              code: "div > p {\n  color: orange;\n}",
              explanation:
                "• Child combinator: selects direct p children of div.",
            },
            {
              language: "css",
              code: "h1 + p {\n  color: orange;\n}",
              explanation:
                "• Adjacent sibling combinator: selects the next p after h1.",
            },
            {
              language: "css",
              code: "h1 ~ p {\n  color: orange;\n}",
              explanation:
                "• General sibling combinator: selects all p siblings after h1.",
            },
          ],
        },
        {
          id: "sc_day_38_t5",
          title: "Attribute Selectors",
          explanation:
            "• Attribute selectors allow selecting elements based on attribute presence or specific attribute values.",
          examples: [
            {
              language: "css",
              code: "a[target] {\n  background-color: yellow;\n}",
              explanation:
                "• Selects all anchor elements with a target attribute.",
            },
            {
              language: "css",
              code: 'h1[class="section-heading"] {\n  color: blue;\n}',
              explanation:
                "• Selects h1 elements with class value 'section-heading'.",
            },
          ],
        },
      ],
    },
  ],

  39: [
    {
      id: "sc_day_39",
      title: "Introduction to Functions",
      topics: [
        {
          id: "sc_day_39_t1",
          title: "What is a Function?",
          explanation:
            "• A function is a reusable block of code that performs a specific task. It runs only when it is called. Functions help in organizing code, reducing repetition, and improving readability.",
        },
        {
          id: "sc_day_39_t2",
          title: "Function Definition and Calling",
          explanation:
            "• A function must first be defined using the function keyword. After defining it, we call it using its name followed by parentheses.",
          examples: [
            {
              language: "javascript",
              code: 'function greet() {\n  console.log("Hello");\n}\n\ngreet();',
              explanation:
                "• The function greet is defined and then called. Output: Hello.",
            },
          ],
        },
        {
          id: "sc_day_39_t3",
          title: "Arguments and Parameters",
          explanation:
            "• Parameters are variables defined in the function definition. Arguments are actual values passed to the function when calling it.",
          examples: [
            {
              language: "javascript",
              code: 'function greet(word) {\n  let msg = "Hello " + word;\n  console.log(msg);\n}\n\ngreet("Rahul");',
              explanation:
                "• Here, 'word' is a parameter and 'Rahul' is the argument. Output: Hello Rahul.",
            },
          ],
        },
        {
          id: "sc_day_39_t4",
          title: "Returning Values from Functions",
          explanation:
            "• The return statement sends a value back to the place where the function was called. Once return executes, the function stops running.",
          examples: [
            {
              language: "javascript",
              code: 'function greet(word) {\n  let msg = "Hello " + word;\n  return msg;\n}\n\nlet greeting = greet("Rahul");\nconsole.log(greeting);',
              explanation:
                "• The function returns a value instead of printing it directly. Output: Hello Rahul.",
            },
          ],
        },
        {
          id: "sc_day_39_t5",
          title: "Types of Functions Based on Arguments and Return Values",
          explanation:
            "• Functions can be categorized based on whether they accept arguments and whether they return values.",
          examples: [
            {
              language: "javascript",
              code: "function add() {\n  let a = 10;\n  let b = 20;\n  console.log(a + b);\n}\n\nadd();",
              explanation:
                "• Function without arguments and without return value.",
            },
            {
              language: "javascript",
              code: "function add(a, b) {\n  console.log(a + b);\n}\n\nadd(10, 20);",
              explanation:
                "• Function with arguments and without return value.",
            },
            {
              language: "javascript",
              code: "function add() {\n  let a = 10;\n  let b = 20;\n  return a + b;\n}\n\nlet result = add();\nconsole.log(result);",
              explanation:
                "• Function without arguments and with return value.",
            },
            {
              language: "javascript",
              code: "function add(a, b) {\n  return a + b;\n}\n\nlet result = add(10, 20);\nconsole.log(result);",
              explanation: "• Function with arguments and with return value.",
            },
          ],
        },
        {
          id: "sc_day_39_t6",
          title: "Built-in Functions",
          explanation:
            "• JavaScript provides built-in functions that are ready to use, such as console.log() for printing output, Number() for converting values to numbers, and String() for converting values to strings.",
        },
      ],
    },
  ],

  40: [
    {
      id: "sc_day_40",
      title: "CSS Specificity, Inline Styles & Cascade",
      topics: [
        {
          id: "sc_day_40_t1",
          title: "Understanding Specificity",
          explanation:
            "• Specificity determines which CSS rule is applied when multiple rules target the same HTML element. The browser calculates specificity and applies the most specific rule.",
        },
        {
          id: "sc_day_40_t2",
          title: "Specificity Order (Lowest to Highest)",
          explanation:
            "• CSS selectors are ranked in the following order of specificity: Type Selector < Class Selector < ID Selector < Inline Styles.",
          examples: [
            {
              language: "css",
              code: "h1 {\n  color: blue;\n}\n\n.heading {\n  color: green;\n}",
              explanation:
                "• Class selector (.heading) overrides type selector (h1) because it has higher specificity.",
            },
            {
              language: "css",
              code: ".heading {\n  color: green;\n}\n\n#heading5 {\n  color: red;\n}",
              explanation:
                "• ID selector (#heading5) overrides class selector because it is more specific.",
            },
          ],
        },
        {
          id: "sc_day_40_t3",
          title: "Inline Styles",
          explanation:
            "• Inline styles are written directly inside the HTML element using the style attribute. They have higher specificity than type, class, and ID selectors.",
          examples: [
            {
              language: "html",
              code: '<h1 style="color: white; background-color: orange;">Heading</h1>',
              explanation:
                "• Inline styles override any external or internal CSS rules.",
            },
          ],
        },
        {
          id: "sc_day_40_t4",
          title: "CSS Cascade (Source Order)",
          explanation:
            "• When two selectors have equal specificity, the rule that appears later in the CSS file is applied. This is known as the Cascade.",
          examples: [
            {
              language: "css",
              code: ".style-1 {\n  color: green;\n}\n\n.style-1 {\n  color: blue;\n}",
              explanation:
                "• Since both have equal specificity, the second rule (blue) is applied.",
            },
          ],
        },
        {
          id: "sc_day_40_t5",
          title: "The !important Rule",
          explanation:
            "• The !important declaration overrides all other specificity rules except another !important with higher specificity or later source order. It should be used carefully.",
          examples: [
            {
              language: "css",
              code: ".style-1 {\n  color: green;\n}\n\nh1 {\n  color: orange !important;\n}",
              explanation:
                "• The !important rule forces the h1 color to be orange, overriding other rules.",
            },
          ],
        },
        {
          id: "sc_day_40_t6",
          title: "Best Practices",
          explanation:
            "• Avoid overusing !important. Prefer solving conflicts using proper selector specificity and clean CSS structure. Inline styles are not recommended for scalable projects because they are not reusable and reduce maintainability.",
        },
      ],
    },
  ],

  41: [
    {
      id: "sc_day_41",
      title: "Sizing Elements and handling overflow",
      topics: [
        {
          id: "sc_day_41_t1",
          title: "Intrinsic and Extrinsic Size",
          explanation:
            "• Intrinsic size refers to the natural size an element takes by default (for example, images or paragraphs). Extrinsic size refers to a size explicitly defined using CSS properties such as width and height.",
        },
        {
          id: "sc_day_41_t2",
          title: "Intrinsic Size Example",
          explanation:
            "• Some elements automatically take a default size based on content or browser behavior.",
          examples: [
            {
              language: "html",
              code: '<img src="image.jpg" />\n<p>Once upon a time, there was a tortoise and a hare</p>',
              explanation:
                "• The image and paragraph take their natural default size.",
            },
          ],
        },
        {
          id: "sc_day_41_t3",
          title: "Extrinsic Size Example",
          explanation:
            "• We can override intrinsic size by explicitly defining width and height.",
          examples: [
            {
              language: "css",
              code: ".image {\n  width: 300px;\n  height: 200px;\n}",
              explanation: "• The image size is now controlled by CSS.",
            },
          ],
        },
        {
          id: "sc_day_41_t4",
          title: "Handling Overflow",
          explanation:
            "• Overflow occurs when content exceeds the size of its container. The CSS overflow property controls how extra content is handled.",
        },
        {
          id: "sc_day_41_t5",
          title: "Overflow Property Values",
          examples: [
            {
              language: "css",
              code: ".box {\n  height: 100px;\n  overflow: visible;\n}",
              explanation: "• visible (default): Extra content spills outside.",
            },
            {
              language: "css",
              code: ".box {\n  height: 100px;\n  overflow: hidden;\n}",
              explanation: "• hidden: Extra content is clipped.",
            },
            {
              language: "css",
              code: ".box {\n  height: 100px;\n  overflow: scroll;\n}",
              explanation: "• scroll: Always shows scrollbars.",
            },
            {
              language: "css",
              code: ".box {\n  height: 100px;\n  overflow: auto;\n}",
              explanation: "• auto: Adds scrollbars only when needed.",
            },
          ],
        },
        {
          id: "sc_day_41_t6",
          title: "Overflow-X and Overflow-Y",
          explanation:
            "• overflow-x handles horizontal overflow, and overflow-y handles vertical overflow.",
          examples: [
            {
              language: "css",
              code: ".box {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}",
              explanation: "• Controls overflow direction separately.",
            },
          ],
        },
        {
          id: "sc_day_41_t7",
          title: "Min and Max Sizes",
          explanation:
            "• Min and Max properties restrict how small or large an element can grow.",
        },
        {
          id: "sc_day_41_t8",
          title: "Min Size Example",
          examples: [
            {
              language: "css",
              code: ".paragraph {\n  min-height: 150px;\n}",
              explanation:
                "• Ensures the element height never goes below 150px.",
            },
          ],
        },
        {
          id: "sc_day_41_t9",
          title: "Max Size Example",
          examples: [
            {
              language: "css",
              code: ".paragraph {\n  max-height: 180px;\n  overflow: auto;\n}",
              explanation:
                "• Restricts maximum height and enables scroll if content exceeds limit.",
            },
          ],
        },
        {
          id: "sc_day_41_t10",
          title: "Viewport Meta Tag",
          explanation:
            "• The viewport meta element ensures proper responsive scaling on mobile devices.",
          examples: [
            {
              language: "html",
              code: '<meta name="viewport" content="width=device-width, initial-scale=1" />',
              explanation:
                "• Ensures proper rendering and touch zooming on mobile devices.",
            },
          ],
        },
      ],
    },
  ],

  42: [
    {
      id: "sc_day_42",
      title: "Arrow Functions, Scope & Hoisting",
      topics: [
        {
          id: "sc_day_42_t1",
          title: "Arrow Functions",
          explanation:
            "• Arrow functions provide a shorter and cleaner syntax for writing functions in JavaScript. They are an alternative to traditional function expressions.",
        },
        {
          id: "sc_day_42_t2",
          title: "Arrow Function Syntax Variations",
          examples: [
            {
              language: "javascript",
              code: "const sum = (a, b) => {\n  return a + b;\n};\n\nconsole.log(sum(4, 3));",
              explanation:
                "• Basic arrow function with parameters and return statement.",
            },
            {
              language: "javascript",
              code: "const sum = (a, b) => a + b;\n\nconsole.log(sum(4, 3));",
              explanation:
                "• For single expressions, return and curly braces are not required.",
            },
            {
              language: "javascript",
              code: 'const greet = name => `Hi ${name}!`;\n\nconsole.log(greet("Rahul"));',
              explanation:
                "• Parentheses are optional when there is only one parameter.",
            },
            {
              language: "javascript",
              code: 'const sayHi = () => "Hello!";\n\nconsole.log(sayHi());',
              explanation:
                "• Empty parentheses are required when there are no parameters.",
            },
          ],
        },
        {
          id: "sc_day_42_t3",
          title: "Scope in JavaScript",
          explanation:
            "• Scope determines where variables can be accessed in a program. JavaScript has Global Scope, Function Scope, and Block Scope.",
        },
        {
          id: "sc_day_42_t4",
          title: "Global Scope",
          examples: [
            {
              language: "javascript",
              code: "let x = 30;\n\nfunction calci() {\n  if (x > 18) {\n    console.log(x);\n  }\n}\n\ncalci();\nconsole.log(x);",
              explanation:
                "• Global variables are accessible everywhere in the program.",
            },
          ],
        },
        {
          id: "sc_day_42_t5",
          title: "Block Scope",
          examples: [
            {
              language: "javascript",
              code: "let age = 27;\n\nif (age > 18) {\n  let x = 0;\n  console.log(x);\n}\n\nconsole.log(x);",
              explanation:
                "• Variables declared with let or const inside a block are accessible only within that block.",
            },
          ],
        },
        {
          id: "sc_day_42_t6",
          title: "Function Scope",
          examples: [
            {
              language: "javascript",
              code: "function calci() {\n  let x = 30;\n  console.log(x);\n}\n\ncalci();\nconsole.log(x);",
              explanation:
                "• Variables declared inside a function are accessible only within that function.",
            },
          ],
        },
        {
          id: "sc_day_42_t7",
          title: "Scope Chaining",
          examples: [
            {
              language: "javascript",
              code: "let x = 10;\n\nfunction calci() {\n  let y = 20;\n  if (true) {\n    console.log(x);\n  }\n}\n\ncalci();",
              explanation:
                "• JavaScript searches for variables in the current scope and then moves outward to parent scopes.",
            },
          ],
        },
        {
          id: "sc_day_42_t8",
          title: "Hoisting",
          explanation:
            "• Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.",
        },
        {
          id: "sc_day_42_t9",
          title: "Variable Hoisting",
          examples: [
            {
              language: "javascript",
              code: "console.log(a);\nvar a = 10;",
              explanation: "• var is hoisted and initialized with undefined.",
            },
            {
              language: "javascript",
              code: "console.log(b);\nlet b = 20;",
              explanation:
                "• let is hoisted but not initialized. Accessing before declaration causes ReferenceError.",
            },
            {
              language: "javascript",
              code: "console.log(c);\nconst c = 30;",
              explanation: "• const behaves like let regarding hoisting.",
            },
          ],
        },
        {
          id: "sc_day_42_t10",
          title: "Function Hoisting",
          examples: [
            {
              language: "javascript",
              code: 'greet();\n\nfunction greet() {\n  console.log("Hello");\n}',
              explanation: "• Function declarations are fully hoisted.",
            },
            {
              language: "javascript",
              code: 'sayHi();\n\nconst sayHi = function() {\n  console.log("Hi");\n};',
              explanation: "• Function expressions are not fully hoisted.",
            },
            {
              language: "javascript",
              code: 'sayHello();\n\nconst sayHello = () => {\n  console.log("Hello");\n};',
              explanation: "• Arrow functions are not fully hoisted.",
            },
          ],
        },
      ],
    },
  ],

  43: [
    {
      id: "sc_day_43",
      title: "Box Sizing",
      topics: [
        {
          id: "sc_day_43_t1",
          title: "Introduction to Box Sizing",
          explanation:
            "• Every HTML element is represented as a rectangular box. In the default CSS box model, the width and height you assign to an element apply only to its content. Padding and border are added outside the specified width and height, which increases the total size of the element.",
        },
        {
          id: "sc_day_43_t2",
          title: "The box-sizing Property",
          explanation:
            "• The box-sizing property defines how the total width and height of an element are calculated. It controls whether padding and border are included inside or outside the specified width and height.",
          examples: [
            {
              language: "css",
              code: "box-sizing: content-box;\nbox-sizing: border-box;",
              explanation:
                "• content-box is the default value. border-box includes padding and border within the width and height.",
            },
          ],
        },
        {
          id: "sc_day_43_t3",
          title: "content-box (Default)",
          explanation:
            "• In content-box, width and height apply only to the content area. Padding and border are added outside, increasing the total element size.",
          examples: [
            {
              language: "css",
              code: ".box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n  box-sizing: content-box;\n}",
              explanation:
                "• Total width = 200 + 40 (padding) + 10 (border) = 250px.",
            },
          ],
        },
        {
          id: "sc_day_43_t4",
          title: "border-box",
          explanation:
            "• In border-box, width and height include content, padding, and border. This makes layout calculations easier and prevents unexpected overflow.",
          examples: [
            {
              language: "css",
              code: ".box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n  box-sizing: border-box;\n}",
              explanation:
                "• Total width remains 200px. Padding and border are included inside.",
            },
          ],
        },
        {
          id: "sc_day_43_t5",
          title: "Why border-box is Recommended",
          explanation:
            "• Using box-sizing: border-box; makes layout design predictable and easier to manage. Frameworks like Bootstrap apply border-box to all elements by default because it simplifies responsive design and prevents size miscalculations.",
        },
        {
          id: "sc_day_43_t6",
          title: "Universal Selector (*)",
          explanation:
            "• The universal selector (*) selects all HTML elements in a document. It is commonly used to apply global styles such as box-sizing or margin reset.",
          examples: [
            {
              language: "css",
              code: "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}",
              explanation:
                "• Applies the styles to all elements in the document.",
            },
          ],
        },
        {
          id: "sc_day_43_t7",
          title: "Specificity Note",
          explanation:
            "• Styles applied using the universal selector have the lowest specificity. This means they can be easily overridden by more specific selectors like class, id, or element selectors.",
        },
      ],
    },
  ],

  44: [
    {
      id: "sc_day_44",
      title: "Introduction to Recursion",
      topics: [
        {
          id: "sc_day_44_t1",
          title: "Stack (LIFO Concept)",
          explanation:
            "• A stack is a data structure that follows the Last-In/First-Out (LIFO) principle. The last item added to the stack is the first one removed. It is similar to a stack of books where the last book placed on top is removed first.",
        },
        {
          id: "sc_day_44_t2",
          title: "Calling a Function Inside Another Function",
          explanation:
            "• In JavaScript, a function can call another function to perform tasks. This helps organize code into reusable blocks.",
          examples: [
            {
              language: "javascript",
              code: "function function_1() {\n  // function body\n}\n\nfunction function_2() {\n  function_1();\n}",
              explanation: "• function_2 calls function_1 inside it.",
            },
            {
              language: "javascript",
              code: 'function checkCredentials(user, pass) {\n  return user === "admin" && pass === "123";\n}\n\nfunction loginUser(user, pass) {\n  const isValid = checkCredentials(user, pass);\n  console.log(isValid ? "Success" : "failed");\n}\n\nloginUser("admin", "123");',
              explanation:
                "• loginUser calls checkCredentials to validate login details.",
            },
          ],
        },
        {
          id: "sc_day_44_t3",
          title: "Function Call Stack",
          explanation:
            "• The call stack keeps track of active function calls. When a function is called, it is pushed onto the stack. When the function finishes execution, it is popped off the stack. The stack ensures proper execution order.",
          examples: [
            {
              language: "text",
              code: 'Call Flow for loginUser("admin", "123"):\n\n1. loginUser is pushed to the stack.\n2. checkCredentials is called and pushed.\n3. checkCredentials finishes and is popped.\n4. loginUser finishes and is popped.',
              explanation: "• Functions are executed in LIFO order.",
            },
          ],
        },
        {
          id: "sc_day_44_t4",
          title: "Introduction to Recursion",
          explanation:
            "• Recursion is a process where a function calls itself to solve a problem. The problem is broken into smaller instances of the same problem until a stopping condition (base case) is reached.",
        },
        {
          id: "sc_day_44_t5",
          title: "Factorial Example Using Recursion",
          explanation:
            "• The factorial of a number is calculated by multiplying the number by all positive integers below it. Recursion repeatedly calls the function with (n - 1) until it reaches the base case.",
          examples: [
            {
              language: "javascript",
              code: "function factorial(n) {\n  if (n == 1) return 1;  // Base case\n  return n * factorial(n - 1);\n}",
              explanation:
                "• The base case prevents infinite recursion. For factorial(5), it calculates 5 * 4 * 3 * 2 * 1.",
            },
          ],
        },
        {
          id: "sc_day_44_t6",
          title: "Step-by-Step Execution of Recursion",
          explanation:
            "• Each recursive call is added to the call stack until the base case is reached. Once the base case returns a value, each function call resolves in reverse order (LIFO) and gets removed from the stack.",
          examples: [
            {
              language: "javascript",
              code: 'function greet(count) {\n  if (count === 2) return;\n  console.log("Hello World");\n  greet(count + 1);\n}\n\nlet count = 0;\ngreet(count);',
              explanation:
                '• Execution Flow: greet(0) → greet(1) → greet(2) → stops. Prints "Hello World" twice.',
            },
          ],
        },
        {
          id: "sc_day_44_t7",
          title: "Base Case in Recursion",
          explanation:
            "• A base case is the stopping condition in recursion. Without a base case, the function will call itself infinitely, causing a stack overflow error.",
        },
        {
          id: "sc_day_44_t8",
          title: "Interview Questions",
          explanation:
            "• Recursion is a technique where a function calls itself to solve smaller instances of the same problem. A base case is the condition that stops the recursive calls. In the factorial example, recursion works by multiplying n with factorial(n-1) until n becomes 1.",
        },
      ],
    },
  ],

  45: [
    {
      id: "sc_day_45",
      title: "Introduction to Arrays",
      topics: [
        {
          id: "sc_day_45_t1",
          title: "Why Do We Need Arrays?",
          explanation:
            "• Arrays are used to store multiple values under a single variable name. Without arrays, storing large collections of data like marks of 50 students would require creating many separate variables, which is inefficient and difficult to manage.",
          examples: [
            {
              language: "javascript",
              code: "const mark1 = 85;\nconst mark2 = 90;\nconst mark3 = 78;",
              explanation: "• Without arrays, multiple variables are needed.",
            },
            {
              language: "javascript",
              code: "const marks = [85, 90, 78, 92, 88];",
              explanation:
                "• Using an array stores all marks in a single variable.",
            },
          ],
        },
        {
          id: "sc_day_45_t2",
          title: "What is an Array?",
          explanation:
            "• An array is a special non-primitive data type that can store multiple values in an ordered collection. Each value is stored in a numbered position starting from index 0.",
        },
        {
          id: "sc_day_45_t3",
          title: "Array Characteristics",
          explanation:
            "• Arrays are ordered collections, use zero-based indexing, are dynamic in size, can store mixed data types, and are mutable.",
        },
        {
          id: "sc_day_45_t4",
          title: "Primitive vs Array Variable",
          examples: [
            {
              language: "javascript",
              code: 'const studentName = "John";',
              explanation: "• Primitive variable stores a single value.",
            },
            {
              language: "javascript",
              code: 'const studentNames = ["John", "Alice", "Bob", "Emma"];',
              explanation: "• Array stores multiple values under one name.",
            },
          ],
        },
        {
          id: "sc_day_45_t5",
          title: "Creating Arrays (Array Literal)",
          explanation:
            "• The most common way to create arrays is using square brackets with comma-separated values.",
          examples: [
            {
              language: "javascript",
              code: "const numbers = [10, 20, 30, 40, 50];",
              explanation: "• Square brackets define the array.",
            },
          ],
        },
        {
          id: "sc_day_45_t6",
          title: "Different Types of Arrays",
          examples: [
            {
              language: "javascript",
              code: "const ages = [25, 30, 35, 40];",
              explanation: "• Array of numbers.",
            },
            {
              language: "javascript",
              code: 'const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai"];',
              explanation: "• Array of strings.",
            },
            {
              language: "javascript",
              code: "const flags = [true, false, true];",
              explanation: "• Array of boolean values.",
            },
          ],
        },
        {
          id: "sc_day_45_t7",
          title: "Mixed Data Type Array",
          examples: [
            {
              language: "javascript",
              code: 'const studentInfo = ["Ravi", 20, true, 8.5, "Computer Science"];',
              explanation: "• Arrays can store mixed data types.",
            },
          ],
        },
        {
          id: "sc_day_45_t8",
          title: "Empty Array",
          examples: [
            {
              language: "javascript",
              code: "const shoppingCart = [];",
              explanation: "• Creates an empty array.",
            },
          ],
        },
        {
          id: "sc_day_45_t9",
          title: "Array Constructor",
          examples: [
            {
              language: "javascript",
              code: "const numbers = new Array(10, 20, 30);",
              explanation: "• Alternative way to create an array.",
            },
            {
              language: "javascript",
              code: "const arr = new Array(5);\nconsole.log(arr);",
              explanation:
                "• Creates an array with 5 empty slots (undefined values).",
            },
          ],
        },
        {
          id: "sc_day_45_t10",
          title: "Array Indexing and Accessing Elements",
          examples: [
            {
              language: "javascript",
              code: 'const fruits = ["Apple", "Banana", "Mango"];\nconsole.log(fruits[0]);\nconsole.log(fruits[1]);\nconsole.log(fruits[2]);',
              explanation: "• Access elements using zero-based index.",
            },
          ],
        },
        {
          id: "sc_day_45_t11",
          title: "Accessing Last Element Dynamically",
          examples: [
            {
              language: "javascript",
              code: 'const colors = ["Red", "Green", "Blue", "Yellow"];\nconst lastColor = colors[colors.length - 1];\nconsole.log(lastColor);',
              explanation:
                "• Use length - 1 to access last element dynamically.",
            },
          ],
        },
        {
          id: "sc_day_45_t12",
          title: "Invalid Index Access",
          examples: [
            {
              language: "javascript",
              code: 'const fruits = ["Apple", "Banana", "Mango"];\nconsole.log(fruits[5]);',
              explanation: "• Accessing an invalid index returns undefined.",
            },
          ],
        },
        {
          id: "sc_day_45_t13",
          title: "Mutability of Arrays",
          examples: [
            {
              language: "javascript",
              code: 'const colors = ["Red", "Green", "Blue"];\ncolors[0] = "Yellow";\nconsole.log(colors);',
              explanation: "• Arrays are mutable; elements can be modified.",
            },
            {
              language: "javascript",
              code: 'const name = "John";\nname[0] = "D";\nconsole.log(name);',
              explanation: "• Strings are immutable; they cannot be modified.",
            },
          ],
        },
        {
          id: "sc_day_45_t14",
          title: "Interview Question",
          explanation:
            "• Arrays in JavaScript are special non-primitive variables that store multiple values in an ordered collection. Each value is accessed using an index starting from 0.",
        },
      ],
    },
  ],

  46: [
    {
      id: "sc_day_46",
      title: "Introduction to CSS Flexbox",
      topics: [
        {
          id: "sc_day_46_t1",
          title: "Introduction to Layout",
          explanation:
            "• A layout is a structured pattern used to arrange elements and organize content on a webpage. Layout determines how elements are positioned and aligned to create a visually structured design.",
        },
        {
          id: "sc_day_46_t2",
          title: "Methods to Design Layout",
          explanation:
            "• There are mainly two modern CSS layout methods: Flexbox and CSS Grid. Flexbox is stable and widely used for one-dimensional layouts (row or column). CSS Grid is more advanced and powerful for two-dimensional layouts but is comparatively more complex.",
        },
        {
          id: "sc_day_46_t3",
          title: "Introduction to Flexbox",
          explanation:
            "• Flexbox is a one-dimensional layout system that arranges elements in rows (horizontal) or columns (vertical). It simplifies alignment, spacing, and responsiveness.",
        },
        {
          id: "sc_day_46_t4",
          title: "Display Property in Flexbox",
          explanation:
            "• To enable Flexbox, set display: flex; on a container element. The container becomes a Flex Container, and its direct children become Flex Items.",
          examples: [
            {
              language: "css",
              code: ".boxes-container {\n  display: flex;\n}",
              explanation: "• Converts the element into a Flex Container.",
            },
          ],
        },
        {
          id: "sc_day_46_t5",
          title: "Flex Direction",
          explanation:
            "• The flex-direction property defines the main axis direction. The main axis can be horizontal (row) or vertical (column). The cross axis runs perpendicular to the main axis.",
          examples: [
            {
              language: "css",
              code: ".boxes-container {\n  display: flex;\n  flex-direction: row;\n}",
              explanation: "• Arranges items horizontally.",
            },
            {
              language: "css",
              code: ".boxes-container {\n  display: flex;\n  flex-direction: column;\n}",
              explanation: "• Arranges items vertically.",
            },
          ],
        },
        {
          id: "sc_day_46_t6",
          title: "Justify Content",
          explanation:
            "• The justify-content property aligns flex items along the main axis.",
          examples: [
            {
              language: "css",
              code: ".boxes-container {\n  display: flex;\n  justify-content: center;\n}",
              explanation: "• Aligns items at the center of the main axis.",
            },
            {
              language: "css",
              code: ".boxes-container {\n  display: flex;\n  justify-content: space-between;\n}",
              explanation: "• Distributes space evenly between items.",
            },
          ],
        },
        {
          id: "sc_day_46_t7",
          title: "Align Items",
          explanation:
            "• The align-items property aligns flex items along the cross axis.",
          examples: [
            {
              language: "css",
              code: ".boxes-container {\n  display: flex;\n  align-items: center;\n}",
              explanation:
                "• Centers items vertically (if flex-direction is row).",
            },
            {
              language: "css",
              code: ".boxes-container {\n  display: flex;\n  align-items: flex-end;\n}",
              explanation: "• Aligns items to the end of the cross axis.",
            },
          ],
        },
        {
          id: "sc_day_46_t8",
          title: "Other Important Flex Properties",
          explanation:
            "• Additional Flexbox properties include flex-wrap (wrap items to next line), flex-grow (allow item to grow), flex-shrink (allow item to shrink), flex-basis (initial size), order (change visual order), align-self (override align-items for specific item), and align-content (align multiple rows).",
        },
        {
          id: "sc_day_46_t9",
          title: "Music Section Example (Concept)",
          explanation:
            "• Flexbox can be used to center content vertically and horizontally, align buttons, and create responsive sections like a music landing page layout.",
          examples: [
            {
              language: "css",
              code: ".bg-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}",
              explanation:
                "• Centers all content vertically and horizontally inside the viewport.",
            },
          ],
        },
      ],
    },
  ],

  47: [
    {
      id: "sc_day_47",
      title: "CSS Flex Wrap & Nested Flex Containers",
      topics: [
        {
          id: "sc_day_47_t1",
          title: "Introduction to flex-wrap",
          explanation:
            "• The flex-wrap property controls whether flex items should wrap onto multiple lines or stay in a single line. By default, flex items try to fit into one line, which may cause overflow if there is not enough space.",
        },
        {
          id: "sc_day_47_t2",
          title: "Values of flex-wrap",
          explanation:
            "• The flex-wrap property has the following values: nowrap (default) keeps items in a single line, wrap moves items to the next line when needed, and wrap-reverse wraps items in reverse order.",
          examples: [
            {
              language: "css",
              code: ".container {\n  display: flex;\n  flex-wrap: nowrap;\n}",
              explanation: "• All items stay in one line (default behavior).",
            },
            {
              language: "css",
              code: ".container {\n  display: flex;\n  flex-wrap: wrap;\n}",
              explanation:
                "• Items move to the next line when space is insufficient.",
            },
            {
              language: "css",
              code: ".container {\n  display: flex;\n  flex-wrap: wrap-reverse;\n}",
              explanation: "• Items wrap but in reverse direction.",
            },
          ],
        },
        {
          id: "sc_day_47_t3",
          title: "Flex Wrap with Flex Direction",
          explanation:
            "• The behavior of flex-wrap depends on the flex-direction. If flex-direction is row, wrapping happens horizontally. If flex-direction is column, wrapping happens vertically.",
        },
        {
          id: "sc_day_47_t4",
          title: "Nested Flex Containers",
          explanation:
            "• A flex item can also act as a flex container. This allows complex layouts where parent containers manage overall structure and child containers manage internal alignment.",
          examples: [
            {
              language: "css",
              code: ".bg-container {\n  display: flex;\n}\n\n.cards-container {\n  display: flex;\n  flex-wrap: wrap;\n}",
              explanation:
                "• bg-container acts as a flex container. cards-container is a flex item inside bg-container, but also a flex container for its child cards.",
            },
          ],
        },
        {
          id: "sc_day_47_t5",
          title: "Frontend Developer Section Example",
          explanation:
            "• In this layout, the main container uses flexbox to arrange content. The cards-container acts as a flex item inside the main container and also as a flex container for the individual cards. Using flex-wrap ensures that cards adjust responsively across different screen sizes.",
        },
        {
          id: "sc_day_47_t6",
          title: "Shoes Shopping Section Example",
          explanation:
            "• In shopping layouts, flex-wrap helps product cards adjust responsively. When the screen width reduces, cards automatically move to the next row. Nested flex containers allow structured layouts such as headings, icons, and content blocks aligned properly.",
        },
        {
          id: "sc_day_47_t7",
          title: "Why flex-wrap is Important",
          explanation:
            "• Without flex-wrap, items may overflow or shrink too much. Using flex-wrap makes layouts responsive and adaptable. It ensures better user experience across different devices and screen sizes.",
        },
      ],
    },
  ],

  48: [
    {
      id: "sc_day_48",
      title: "Array Methods and Array Iteration in JavaScript",
      topics: [
        {
          id: "sc_day_48_t1",
          title: "Introduction to Array Methods",
          explanation:
            "• Array methods are built-in functions provided by JavaScript to perform operations like adding, removing, searching, sorting, and modifying elements in arrays. They help write clean, readable, and efficient code.",
        },
        {
          id: "sc_day_48_t2",
          title: "Finding Elements in Arrays",
          explanation:
            "• JavaScript provides methods to check if an element exists, find its index, or retrieve an element based on a condition.",
          examples: [
            {
              language: "javascript",
              code: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.includes("banana"));',
              explanation: "• includes() returns true if the value exists.",
            },
            {
              language: "javascript",
              code: "const arr = [1, 2, 8, 9, 10];\nconsole.log(arr.indexOf(8));",
              explanation:
                "• indexOf() returns the first index of the element.",
            },
            {
              language: "javascript",
              code: 'const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];\nconsole.log(fruits.lastIndexOf("Apple"));',
              explanation:
                "• lastIndexOf() returns the last index of the element.",
            },
            {
              language: "javascript",
              code: "const numbers = [5, 12, 8, 130, 44];\nconst found = numbers.find(num => num > 10);\nconsole.log(found);",
              explanation:
                "• find() returns the first element that satisfies the condition.",
            },
          ],
        },
        {
          id: "sc_day_48_t3",
          title: "Adding Elements to Arrays",
          explanation:
            "• Elements can be added either at the end or at the beginning of an array.",
          examples: [
            {
              language: "javascript",
              code: 'const fruits = ["Apple", "Banana"];\nfruits.push("Mango");\nconsole.log(fruits);',
              explanation: "• push() adds element at the end.",
            },
            {
              language: "javascript",
              code: 'const fruits = ["Banana", "Orange"];\nfruits.unshift("Apple");\nconsole.log(fruits);',
              explanation: "• unshift() adds element at the beginning.",
            },
          ],
        },
        {
          id: "sc_day_48_t4",
          title: "Removing Elements from Arrays",
          explanation:
            "• Elements can be removed from the beginning, end, or any specific position.",
          examples: [
            {
              language: "javascript",
              code: 'const fruits = ["Apple", "Banana", "Mango"];\nfruits.pop();\nconsole.log(fruits);',
              explanation: "• pop() removes the last element.",
            },
            {
              language: "javascript",
              code: 'const fruits = ["Banana", "Orange", "Apple"];\nfruits.shift();\nconsole.log(fruits);',
              explanation: "• shift() removes the first element.",
            },
            {
              language: "javascript",
              code: 'const fruits = ["apple", "banana", "orange"];\nconst removed = fruits.splice(1, 1);\nconsole.log(fruits);\nconsole.log(removed);',
              explanation: "• splice() removes elements from a specific index.",
            },
            {
              language: "javascript",
              code: 'let fruits = ["apple", "banana", "orange"];\nfruits.splice(1, 1, "mango");\nconsole.log(fruits);',
              explanation: "• splice() can also replace elements.",
            },
          ],
        },
        {
          id: "sc_day_48_t5",
          title: "Other Useful Array Methods",
          explanation:
            "• JavaScript provides additional methods for combining, converting, and sorting arrays.",
          examples: [
            {
              language: "javascript",
              code: 'const fruits1 = ["Banana", "Orange"];\nconst fruits2 = ["Apple", "Mango"];\nconst combined = fruits1.concat(fruits2);\nconsole.log(combined);',
              explanation:
                "• concat() combines arrays without modifying originals.",
            },
            {
              language: "javascript",
              code: 'const fruits = ["Banana", "Orange", "Apple"];\nconsole.log(fruits.join(", "));',
              explanation: "• join() converts array to string.",
            },
            {
              language: "javascript",
              code: 'const fruits = ["Banana", "Orange", "Apple"];\nfruits.sort();\nconsole.log(fruits);',
              explanation: "• sort() sorts elements alphabetically by default.",
            },
          ],
        },
        {
          id: "sc_day_48_t6",
          title: "Array Iteration - for-of Loop",
          explanation:
            "• Array iteration allows us to loop through elements. The for-of loop provides direct access to array values without needing index positions.",
          examples: [
            {
              language: "javascript",
              code: "let numbers = [1, 2, 3, 4];\nfor (let num of numbers) {\n  console.log(num);\n}",
              explanation: "• Prints each value in the array.",
            },
          ],
        },
        {
          id: "sc_day_48_t7",
          title: "Interview Questions",
          explanation:
            "• Array methods are built-in functions that help manipulate arrays efficiently. Common methods include push(), pop(), shift(), unshift(), indexOf(), includes(), find(), sort(), and concat(). These methods simplify array operations and improve code readability.",
        },
      ],
    },
  ],

  49: [
    {
      id: "sc_day_49",
      title: "Introduction to CSS Flexbox | Part 3",
      topics: [
        {
          id: "sc_day_49_t1",
          title: "align-self Property",
          explanation:
            "• The align-self property is used to align individual flex items along the cross axis. It overrides the align-items property of the flex container for a specific flex item.",
          examples: [
            {
              language: "css",
              code: ".box {\n  align-self: flex-start;\n}",
              explanation: "• Aligns the item to the start of the cross axis.",
            },
            {
              language: "css",
              code: ".box {\n  align-self: center;\n}",
              explanation: "• Aligns the item to the center of the cross axis.",
            },
            {
              language: "css",
              code: ".box {\n  align-self: flex-end;\n}",
              explanation: "• Aligns the item to the end of the cross axis.",
            },
            {
              language: "css",
              code: ".box {\n  align-self: stretch;\n}",
              explanation: "• Stretches the item to fill the cross axis.",
            },
          ],
        },
        {
          id: "sc_day_49_t2",
          title: "align-self Values",
          explanation:
            "• The align-self property supports the following values: flex-start, center, flex-end, stretch, and auto (default). When set to auto, it inherits the align-items value from its flex container.",
        },
        {
          id: "sc_day_49_t3",
          title: "Relation with flex-direction",
          explanation:
            "• The behavior of align-self depends on the flex-direction. If flex-direction is row, alignment happens vertically. If flex-direction is column, alignment happens horizontally.",
        },
        {
          id: "sc_day_49_t4",
          title: "order Property",
          explanation:
            "• The order property defines the visual order of flex items inside a flex container. By default, all items have order: 0. Items with lower order values appear first.",
          examples: [
            {
              language: "css",
              code: ".box1 {\n  order: 2;\n}\n\n.box2 {\n  order: 1;\n}",
              explanation:
                "• box2 appears before box1 because it has a smaller order value.",
            },
            {
              language: "css",
              code: ".box3 {\n  order: -1;\n}",
              explanation:
                "• Negative values move the item before default (0) items.",
            },
          ],
        },
        {
          id: "sc_day_49_t5",
          title: "Important Note on order",
          explanation:
            "• If two or more flex items have the same order value, they are displayed according to their source code order in the HTML.",
        },
        {
          id: "sc_day_49_t6",
          title: "Chat Screen Layout Example",
          explanation:
            "• In a chat screen layout, flexbox is commonly used to arrange elements such as back icons, profile images, and user information. The order property can rearrange elements visually without changing HTML structure. align-self can align individual elements like profile pictures or icons differently within the header container.",
        },
        {
          id: "sc_day_49_t7",
          title: "Why align-self and order are Important",
          explanation:
            "• These properties provide fine control over layout. align-self allows individual alignment adjustments without affecting other items. order allows visual rearrangement without modifying the HTML structure, which is useful in responsive design.",
        },
      ],
    },
  ],

  50: [
    {
      id: "sc_day_50",
      title: "More Array Methods",
      topics: [
        {
          id: "sc_day_50_t1",
          title: "Introduction to map(), filter(), and reduce()",
          explanation:
            "• map(), filter(), and reduce() are higher-order array methods in JavaScript. They iterate over arrays and take a callback function as an argument. These methods help perform transformations, filtering, and accumulation operations efficiently without modifying the original array.",
        },
        {
          id: "sc_day_50_t2",
          title: "map()",
          explanation:
            "• The map() method creates a new array by applying a function to each element of the original array. It transforms each element and returns a new array of the same length.",
          examples: [
            {
              language: "javascript",
              code: "const numbers = [1, 2, 3, 4];\nconst sqrdNumbers = numbers.map((number) => number * number);\nconsole.log(sqrdNumbers);",
              explanation: "• Each element is squared. Output: [1, 4, 9, 16].",
            },
          ],
        },
        {
          id: "sc_day_50_t3",
          title: "filter()",
          explanation:
            "• The filter() method creates a new array containing only elements that pass a condition. The callback function must return true or false.",
          examples: [
            {
              language: "javascript",
              code: "const numbers = [1, -2, 3, -4];\nconst positiveNumbers = numbers.filter((number) => number > 0);\nconsole.log(positiveNumbers);",
              explanation:
                "• Only positive numbers are returned. Output: [1, 3].",
            },
          ],
        },
        {
          id: "sc_day_50_t4",
          title: "reduce()",
          explanation:
            "• The reduce() method combines all elements of an array into a single value. It takes a callback function with accumulator and current value as parameters. It can optionally take an initial value.",
          examples: [
            {
              language: "javascript",
              code: "let arr = [1, 2, 3, 4];\nlet outputValue = arr.reduce((acc, currentVal) => acc + currentVal);\nconsole.log(outputValue);",
              explanation: "• Adds all numbers together. Output: 10.",
            },
            {
              language: "javascript",
              code: "let arr = [1, 2, 3, 4];\nlet outputValue = arr.reduce((acc, currentVal) => acc + currentVal, 0);\nconsole.log(outputValue);",
              explanation: "• Initial value is set to 0. Output: 10.",
            },
          ],
        },
        {
          id: "sc_day_50_t5",
          title: "slice()",
          explanation:
            "• The slice() method extracts a portion of an array. The start index is included, and the end index is excluded. It returns a new array and does not modify the original.",
          examples: [
            {
              language: "javascript",
              code: 'const fruits = ["Banana", "Orange", "Apple", "Mango"];\nlet sliced = fruits.slice(1, 3);\nconsole.log(sliced);',
              explanation:
                '• Extracts elements from index 1 to 2. Output: ["Orange", "Apple"].',
            },
          ],
        },
        {
          id: "sc_day_50_t6",
          title: "forEach()",
          explanation:
            "• The forEach() method iterates over each element of an array and executes a callback function. It does not return a new array.",
          examples: [
            {
              language: "javascript",
              code: "let nums = [10, 20, 30];\nnums.forEach(num => {\n  console.log(num);\n});",
              explanation: "• Prints each element. Output: 10 20 30.",
            },
          ],
        },
        {
          id: "sc_day_50_t7",
          title: "forEach() with Index",
          explanation:
            "• The callback function in forEach() can take both element and index as parameters.",
          examples: [
            {
              language: "javascript",
              code: "let nums = [10, 20, 30];\nnums.forEach((num, index) => {\n  console.log(index, num);\n});",
              explanation:
                "• Prints index and value. Output: 0 10, 1 20, 2 30.",
            },
          ],
        },
        {
          id: "sc_day_50_t8",
          title: "forEach() vs for Loop",
          explanation:
            "• forEach() is cleaner and simpler for iteration but does not support break or continue. A for loop provides full control, including break and continue statements.",
        },
        {
          id: "sc_day_50_t9",
          title: "Limitations of forEach()",
          explanation:
            "• You cannot use break or continue inside forEach(). It always iterates through all elements.",
          examples: [
            {
              language: "javascript",
              code: "let nums = [10, 20, 30];\nnums.forEach(num => {\n  if (num === 20) {\n    break;\n  }\n});",
              explanation:
                "• This will throw a SyntaxError because break is not allowed in forEach().",
            },
          ],
        },
        {
          id: "sc_day_50_t10",
          title: "Interview Questions",
          explanation:
            "• map() creates a new array by transforming each element. filter() creates a new array containing elements that pass a condition. reduce() reduces an array to a single value. The difference between map() and forEach() is that map() returns a new array, while forEach() does not return anything.",
        },
      ],
    },
  ],

  51: [
    {
      id: "sc_day_51",
      title: "Introduction of Objects",
      topics: [
        {
          id: "sc_day_51_t1",
          title: "Introduction to Objects",
          explanation:
            "• An Object is a collection of properties. A property is an association between a key (name) and a value. Objects are used to store related data together. For example, a person can have properties like firstName, lastName, age, and city.",
        },
        {
          id: "sc_day_51_t2",
          title: "Creating an Object",
          explanation:
            "• Objects are created using curly braces {} and key-value pairs separated by commas.",
          examples: [
            {
              language: "javascript",
              code: 'let person = {\n  firstName: "Rahul",\n  lastName: "Attuluri",\n  age: 28\n};\n\nconsole.log(person);',
              explanation: "• Creates an object with three properties.",
            },
          ],
        },
        {
          id: "sc_day_51_t3",
          title: "Identifiers in Objects",
          explanation:
            "• A valid identifier can contain letters, numbers, underscore (_) and dollar sign ($), but cannot start with a number.",
          examples: [
            {
              language: "javascript",
              code: "firstName;\n$firstName;\n_firstName;\nfirstName12;",
              explanation: "• These are valid identifiers.",
            },
            {
              language: "javascript",
              code: 'let person = {\n  "1": "value1",\n  "my choice": "value2"\n};',
              explanation:
                "• Invalid identifiers must be written inside quotes.",
            },
          ],
        },
        {
          id: "sc_day_51_t4",
          title: "Accessing Object Properties",
          explanation:
            "• Object properties can be accessed using Dot Notation or Bracket Notation.",
        },
        {
          id: "sc_day_51_t5",
          title: "Dot Notation",
          examples: [
            {
              language: "javascript",
              code: 'let person = {\n  firstName: "Rahul",\n  age: 28\n};\n\nconsole.log(person.firstName);',
              explanation: "• Used when key is a valid identifier.",
            },
          ],
        },
        {
          id: "sc_day_51_t6",
          title: "Bracket Notation",
          examples: [
            {
              language: "javascript",
              code: 'let person = {\n  firstName: "Rahul",\n  age: 28\n};\n\nconsole.log(person["firstName"]);',
              explanation:
                "• Useful when key has spaces or is stored in a variable.",
            },
            {
              language: "javascript",
              code: 'let key = "firstName";\nconsole.log(person[key]);',
              explanation: "• Accessing property using variable.",
            },
          ],
        },
        {
          id: "sc_day_51_t7",
          title: "Accessing Non-Existent Properties",
          examples: [
            {
              language: "javascript",
              code: "console.log(person.gender);",
              explanation: "• Returns undefined if property does not exist.",
            },
          ],
        },
        {
          id: "sc_day_51_t8",
          title: "Object Destructuring",
          explanation:
            "• Object destructuring allows extracting properties into variables using curly braces.",
          examples: [
            {
              language: "javascript",
              code: 'let person = {\n  firstName: "Rahul",\n  age: 28\n};\n\nlet { age } = person;\nconsole.log(age);',
              explanation: "• Variable name must match object key.",
            },
          ],
        },
        {
          id: "sc_day_51_t9",
          title: "Modifying Object Properties",
          examples: [
            {
              language: "javascript",
              code: 'person.firstName = "Abhi";\nconsole.log(person.firstName);',
              explanation: "• Modifies existing property using dot notation.",
            },
            {
              language: "javascript",
              code: 'person["firstName"] = "Abhi";',
              explanation: "• Modifies property using bracket notation.",
            },
          ],
        },
        {
          id: "sc_day_51_t10",
          title: "Adding New Properties",
          examples: [
            {
              language: "javascript",
              code: 'person.gender = "Male";\nconsole.log(person);',
              explanation: "• Adds a new property.",
            },
          ],
        },
        {
          id: "sc_day_51_t11",
          title: "Property Values (Function, Array, Object)",
          explanation:
            "• Object property values can be functions, arrays, or even other objects.",
        },
        {
          id: "sc_day_51_t12",
          title: "Function as Property (Method)",
          examples: [
            {
              language: "javascript",
              code: 'let person = {\n  firstName: "Rahul",\n  run: function () {\n    console.log("Start Running.");\n  }\n};\n\nperson.run();',
              explanation:
                "• When a function is stored inside an object, it is called a method.",
            },
          ],
        },
        {
          id: "sc_day_51_t13",
          title: "Array as Property",
          examples: [
            {
              language: "javascript",
              code: 'let person = {\n  habits: ["Playing Chess", "Singing"]\n};\n\nconsole.log(person.habits[0]);',
              explanation: "• Arrays can be stored as property values.",
            },
          ],
        },
        {
          id: "sc_day_51_t14",
          title: "Object as Property (Nested Object)",
          examples: [
            {
              language: "javascript",
              code: 'let person = {\n  car: {\n    name: "Audi",\n    model: "A6",\n    color: "White"\n  }\n};\n\nconsole.log(person.car.name);',
              explanation: "• Objects can be nested inside other objects.",
            },
          ],
        },
        {
          id: "sc_day_51_t15",
          title: "Interview Questions",
          explanation:
            "• Objects are created using curly braces {} with key-value pairs. Properties can be accessed using dot notation or bracket notation. Object destructuring allows unpacking properties into variables in a concise way.",
        },
      ],
    },
  ],

  52: [
    {
      id: "sc_day_52",
      title: "CSS Media Queries",
      topics: [
        {
          id: "sc_day_52_t1",
          title: "Introduction to Media Queries",
          explanation:
            "• Media Queries are used to create responsive web layouts. They allow us to apply CSS rules based on device type and device features like width, height, and orientation. Media queries are essential for building responsive websites that adapt to mobiles, tablets, laptops, and other devices.",
        },
        {
          id: "sc_day_52_t2",
          title: "Media Query Syntax",
          examples: [
            {
              language: "css",
              code: "@media media-type and (media-feature-expression) {\n  /* CSS rules go here */\n}",
              explanation:
                "• CSS inside the block is applied only if the condition matches.",
            },
          ],
        },
        {
          id: "sc_day_52_t3",
          title: "Media Types",
          explanation:
            "• Media types define the category of devices for which the styles apply.",
          examples: [
            {
              language: "css",
              code: "@media screen {\n  body {\n    background-color: lightblue;\n  }\n}",
              explanation: "• Applies styles only for screen devices.",
            },
          ],
        },
        {
          id: "sc_day_52_t4",
          title: "Common Media Types",
          explanation:
            "• screen - for mobiles, laptops, tablets. print - for printers. tv - for televisions. all - applies to all devices. If media type is not specified, it defaults to all.",
        },
        {
          id: "sc_day_52_t5",
          title: "Media Features (Width & Height)",
          explanation:
            "• Media features allow applying styles based on device dimensions.",
          examples: [
            {
              language: "css",
              code: "@media (max-width: 600px) {\n  body {\n    background-color: yellow;\n  }\n}",
              explanation:
                "• Applies styles when screen width is 600px or less.",
            },
            {
              language: "css",
              code: "@media (min-height: 800px) {\n  body {\n    font-size: 20px;\n  }\n}",
              explanation:
                "• Applies styles when screen height is 800px or more.",
            },
          ],
        },
        {
          id: "sc_day_52_t6",
          title: "Orientation",
          explanation:
            "• Orientation checks whether the device is in landscape or portrait mode.",
          examples: [
            {
              language: "css",
              code: "@media (orientation: landscape) {\n  body {\n    background-color: lightgreen;\n  }\n}",
              explanation:
                "• Applies styles when width is greater than height.",
            },
            {
              language: "css",
              code: "@media (orientation: portrait) {\n  body {\n    background-color: lightpink;\n  }\n}",
              explanation:
                "• Applies styles when height is greater than width.",
            },
          ],
        },
        {
          id: "sc_day_52_t7",
          title: "Combining Media Features with AND",
          explanation:
            "• The and operator combines multiple media features in one query.",
          examples: [
            {
              language: "css",
              code: "@media screen and (min-width: 600px) and (max-width: 900px) {\n  body {\n    background-color: orange;\n  }\n}",
              explanation:
                "• Applies styles when width is between 600px and 900px on screen devices.",
            },
          ],
        },
        {
          id: "sc_day_52_t8",
          title: "Using NOT Operator",
          explanation:
            "• The not operator negates the entire media query result. It must be used with a media type.",
          examples: [
            {
              language: "css",
              code: "@media not screen and (min-width: 600px) {\n  body {\n    background-color: gray;\n  }\n}",
              explanation:
                "• Applies styles to devices that are NOT screen devices.",
            },
          ],
        },
        {
          id: "sc_day_52_t9",
          title: "Using Comma Operator",
          explanation:
            "• The comma acts like a logical OR. It combines multiple media queries.",
          examples: [
            {
              language: "css",
              code: "@media (max-width: 600px), (orientation: portrait) {\n  body {\n    background-color: lightcoral;\n  }\n}",
              explanation: "• Applies styles if either condition is true.",
            },
          ],
        },
      ],
    },
  ],

  53: [
    {
      id: "sc_day_53",
      title: "CSS Flexbox Sizing Properties",
      topics: [
        {
          id: "sc_day_53_t1",
          title: "Introduction to Flexbox Sizing",
          explanation:
            "• In Flexbox, flex items can grow or shrink depending on the available space inside the flex container. Flexbox sizing properties control how elements scale up or scale down when space is available or limited.",
        },
        {
          id: "sc_day_53_t2",
          title: "flex-grow",
          explanation:
            "• The flex-grow property defines how much a flex item should grow relative to other flex items when extra space is available. The default value is 0, meaning the item will not grow. Positive values allow the item to grow proportionally.",
          examples: [
            {
              language: "css",
              code: ".boxes-container {\n  display: flex;\n}\n\n.box1 {\n  flex-grow: 1;\n}\n\n.box2 {\n  flex-grow: 2;\n}\n\n.box3 {\n  flex-grow: 1;\n}",
              explanation:
                "• Box2 grows twice as much as Box1 and Box3 when extra space is available.",
            },
          ],
        },
        {
          id: "sc_day_53_t3",
          title: "flex-shrink",
          explanation:
            "• The flex-shrink property defines how much a flex item should shrink relative to other flex items when there is not enough space. The default value is 1, meaning items will shrink equally. Setting it to 0 prevents shrinking.",
          examples: [
            {
              language: "css",
              code: ".boxes-container {\n  display: flex;\n  width: 200px;\n}\n\n.box1 {\n  flex-shrink: 1;\n}\n\n.box2 {\n  flex-shrink: 0;\n}\n\n.box3 {\n  flex-shrink: 1;\n}",
              explanation:
                "• Box2 will not shrink, while Box1 and Box3 shrink when space is limited.",
            },
          ],
        },
        {
          id: "sc_day_53_t4",
          title: "Understanding Growth and Shrink Behavior",
          explanation:
            "• If flex-grow is used, items expand when there is extra space. If flex-shrink is used, items reduce their size when space is insufficient. These properties work along the main axis and depend on the flex-direction property.",
        },
      ],
    },
  ],

  54: [
    {
      id: "sc_day_54",
      title: "JavaScript Object Methods & Iteration",
      topics: [
        {
          id: "sc_day_54_t1",
          title: "Introduction to Object Methods",
          explanation:
            "• Objects in JavaScript can contain many properties, and sometimes property names are dynamic. We may need to list keys, list values, iterate over objects, merge objects, or check whether a property exists. JavaScript provides built-in object methods to handle these tasks efficiently.",
        },
        {
          id: "sc_day_54_t2",
          title: "Object.keys()",
          explanation:
            "• Object.keys() returns an array containing all the property names (keys) of an object. The order of keys is not guaranteed.",
          examples: [
            {
              language: "javascript",
              code: 'let person = { name: "Rahul", age: 28, city: "Delhi" };\nconsole.log(Object.keys(person));',
              explanation: '• Output: ["name", "age", "city"].',
            },
          ],
        },
        {
          id: "sc_day_54_t3",
          title: "Object.values()",
          explanation:
            "• Object.values() returns an array of all property values in an object. It does not provide access to keys.",
          examples: [
            {
              language: "javascript",
              code: 'let person = { name: "Rahul", age: 28, city: "Delhi" };\nconsole.log(Object.values(person));',
              explanation: '• Output: ["Rahul", 28, "Delhi"].',
            },
          ],
        },
        {
          id: "sc_day_54_t4",
          title: "Object.entries()",
          explanation:
            "• Object.entries() returns an array of key-value pairs, where each pair is a two-element array. It is useful for iterating over both keys and values.",
          examples: [
            {
              language: "javascript",
              code: 'let person = { name: "Rahul", age: 28, city: "Delhi" };\nconsole.log(Object.entries(person));',
              explanation:
                '• Output: [["name", "Rahul"], ["age", 28], ["city", "Delhi"]].',
            },
          ],
        },
        {
          id: "sc_day_54_t5",
          title: "Object.assign()",
          explanation:
            "• Object.assign() is used to merge objects. The first argument is the target object, followed by source objects. It performs a shallow copy.",
          examples: [
            {
              language: "javascript",
              code: 'let basicInfo = { name: "Rahul", age: 28 };\nlet extraInfo = { city: "Delhi", country: "India" };\n\nlet result = Object.assign({}, basicInfo, extraInfo);\nconsole.log(result);',
              explanation:
                '• Output: { name: "Rahul", age: 28, city: "Delhi", country: "India" }.',
            },
            {
              language: "javascript",
              code: "let newObj = Object.assign(basicInfo, extraInfo);",
              explanation:
                "• This modifies basicInfo. To avoid mutation, use Object.assign({}, basicInfo, extraInfo).",
            },
          ],
        },
        {
          id: "sc_day_54_t6",
          title: "hasOwnProperty()",
          explanation:
            "• hasOwnProperty() checks whether a property exists directly on the object (not inherited from prototype).",
          examples: [
            {
              language: "javascript",
              code: 'let person = { name: "Rahul", age: 28, city: "Delhi" };\n\nconsole.log(person.hasOwnProperty("name"));\nconsole.log(person.hasOwnProperty("salary"));',
              explanation: "• Output: true, false.",
            },
          ],
        },
        {
          id: "sc_day_54_t7",
          title: "for-in Loop",
          explanation:
            "• The for-in loop iterates over the keys of an object. Always use bracket notation inside the loop to access values.",
          examples: [
            {
              language: "javascript",
              code: 'let person = { name: "Rahul", age: 28, city: "Delhi" };\n\nfor (let key in person) {\n  console.log(key, person[key]);\n}',
              explanation: "• Iterates over keys and prints key-value pairs.",
            },
          ],
        },
        {
          id: "sc_day_54_t8",
          title: "in Operator",
          explanation:
            "• The in operator checks whether a property exists in an object (including inherited properties).",
          examples: [
            {
              language: "javascript",
              code: 'let person = { name: "Rahul", age: 28, city: "Delhi" };\n\nconsole.log("name" in person);\nconsole.log("salary" in person);',
              explanation: "• Output: true, false.",
            },
          ],
        },
        {
          id: "sc_day_54_t9",
          title: "Interview Questions",
          explanation:
            "• Object.keys() returns an array of property names. Object.entries() returns key-value pairs. To iterate over object keys, we use the for-in loop. Object.assign() merges objects. hasOwnProperty() checks if a property exists directly on the object.",
        },
      ],
    },
  ],

  55: [
    {
      id: "sc_day_55",
      title: "Building Responsive Web Page | Part - 1 (Food Munch App)",
      topics: [
        {
          id: "sc_day_55_t1",
          title: "Project Overview",
          explanation:
            "• This project builds a fully responsive Food Munch web page using Semantic HTML5, Pure CSS, Flexbox layouts, and Media Queries. The website includes multiple sections such as Header, Banner, Menu, Features, Payment, and Footer. Each section is independently styled and fully responsive.",
        },
        {
          id: "sc_day_55_t2",
          title: "Technology Stack",
          explanation:
            "• Frontend technologies used include HTML5 semantic elements, CSS, Flexbox layout system, and Media Queries for responsiveness.",
        },
        {
          id: "sc_day_55_t3",
          title: "Page Structure",
          explanation:
            "• The webpage consists of the following logical sections: Header & Navigation, Banner Section, Feature Section, Menu Listing Section, Two-column Content Sections, Payment Section, Social Media Section, and Footer Section.",
        },
        {
          id: "sc_day_55_t4",
          title: "Header & Navigation Section",
          explanation:
            "• The header is designed for quick navigation with the logo aligned to the left and navigation links aligned horizontally. Navigation remains in a single line across screen sizes.",
        },
        {
          id: "sc_day_55_t5",
          title: "Header HTML Structure",
          examples: [
            {
              language: "html",
              code: '<header class="site-header">\n  <nav>\n    <div class="nav-container">\n      <a href="#">\n        <img src="food-munch-img.png" alt="Food Munch" class="food-munch-logo" />\n      </a>\n      <ul class="nav-links">\n        <li><a href="#wcuSection">Why Choose Us?</a></li>\n        <li><a href="#exploreMenuSection">Explore Menu</a></li>\n        <li><a href="#deliveryPaymentSection">Delivery & Payment</a></li>\n        <li><a href="#followUsSection">Follow Us</a></li>\n      </ul>\n    </div>\n  </nav>\n</header>',
              explanation:
                "• Header contains logo and navigation links inside a flex container.",
            },
          ],
        },
        {
          id: "sc_day_55_t6",
          title: "Header CSS Layout",
          examples: [
            {
              language: "css",
              code: ".site-header {\n  top: 0;\n  width: 100%;\n  background: #ffffff;\n}\n\n.nav-container {\n  display: flex;\n  align-items: center;\n}\n\n.food-munch-logo {\n  width: 80px;\n  height: 70px;\n}\n\n.nav-links {\n  width: 100%;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  margin: 12px 0 0;\n}\n\n.nav-links li a {\n  padding: 8px 12px;\n  color: #323f4b;\n  font-size: 14px;\n}",
              explanation:
                "• Flexbox is used to align navigation items horizontally.",
            },
          ],
        },
        {
          id: "sc_day_55_t7",
          title: "Responsive Navigation Media Query",
          examples: [
            {
              language: "css",
              code: "@media (min-width: 768px) {\n  .nav-links {\n    width: auto;\n    margin-left: auto;\n    margin-top: 0;\n    justify-content: flex-end;\n  }\n}",
              explanation:
                "• On larger screens, navigation aligns to the right.",
            },
          ],
        },
        {
          id: "sc_day_55_t8",
          title: "Banner Section Overview",
          explanation:
            "• The Banner section takes full viewport height with a background image. It centers headline text and buttons using Flexbox.",
        },
        {
          id: "sc_day_55_t9",
          title: "Banner HTML Structure",
          examples: [
            {
              language: "html",
              code: '<main>\n  <section class="banner">\n    <div class="banner-content">\n      <h1>Get Delicious Food Anytime</h1>\n      <p>Eat Smart & Healthy</p>\n      <div class="banner-actions">\n        <button class="custom-button">View Menu</button>\n        <button class="custom-outline-button">Order Now</button>\n      </div>\n    </div>\n  </section>\n</main>',
              explanation:
                "• Banner includes heading, subtitle, and action buttons.",
            },
          ],
        },
        {
          id: "sc_day_55_t10",
          title: "Banner CSS Layout",
          examples: [
            {
              language: "css",
              code: '.banner {\n  height: 100vh;\n  background-image: url("foodmunch-banner-bg.png");\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.banner-content {\n  text-align: center;\n}',
              explanation:
                "• Flexbox centers content vertically and horizontally.",
            },
          ],
        },
        {
          id: "sc_day_55_t11",
          title: "Button Styling",
          examples: [
            {
              language: "css",
              code: ".custom-button {\n  background: #d0b200;\n  color: #ffffff;\n  border: none;\n}\n\n.custom-outline-button {\n  background: transparent;\n  color: #d0b200;\n  border: 1px solid #d0b200;\n}",
              explanation:
                "• Primary button has filled background. Outline button has border style.",
            },
          ],
        },
      ],
    },
  ],

  56: [
    {
      id: "sc_day_56",
      title: "JavaScript Arrays of Objects",
      topics: [
        {
          id: "sc_day_56_t1",
          title: "Introduction to Arrays of Objects",
          explanation:
            "• In real-world applications, data usually contains multiple related properties. To store collections like students, products, or users, we use Arrays of Objects. Each element in the array is an object containing key-value pairs.",
        },
        {
          id: "sc_day_56_t2",
          title: "Creating an Array of Objects",
          examples: [
            {
              language: "javascript",
              code: 'let students = [\n  { name: "Rahul", age: 20 },\n  { name: "Anita", age: 22 }\n];',
              explanation: "• Each array element is an object.",
            },
            {
              language: "javascript",
              code: 'let products = [\n  { name: "Laptop", price: 50000 },\n  { name: "Mobile", price: 20000 },\n  { name: "Tablet", price: 30000 }\n];\n\nconsole.log(products);',
              explanation:
                "• Used to represent collections like API or database records.",
            },
          ],
        },
        {
          id: "sc_day_56_t3",
          title: "Accessing Data in Array of Objects",
          examples: [
            {
              language: "javascript",
              code: "console.log(products[0]);",
              explanation: "• Access object using index.",
            },
            {
              language: "javascript",
              code: "console.log(products[0].name);\nconsole.log(products[1].price);",
              explanation:
                "• Use array index first, then dot notation to access properties.",
            },
          ],
        },
        {
          id: "sc_day_56_t4",
          title: "Iterating Over Array of Objects",
          examples: [
            {
              language: "javascript",
              code: "for (let i = 0; i < products.length; i++) {\n  console.log(products[i].name);\n}",
              explanation: "• Index-based iteration using for loop.",
            },
            {
              language: "javascript",
              code: "for (let item of products) {\n  console.log(item.price);\n}",
              explanation: "• for...of loop gives direct access to objects.",
            },
          ],
        },
        {
          id: "sc_day_56_t5",
          title: "Filtering Array of Objects",
          examples: [
            {
              language: "javascript",
              code: "let expensiveProducts = products.filter((item) => {\n  return item.price > 30000;\n});\n\nconsole.log(expensiveProducts);",
              explanation:
                "• filter() returns elements that satisfy the condition.",
            },
          ],
        },
        {
          id: "sc_day_56_t6",
          title: "Mapping Array of Objects",
          examples: [
            {
              language: "javascript",
              code: "let productNames = products.map((item) => item.name);\nconsole.log(productNames);",
              explanation: "• map() extracts specific properties.",
            },
            {
              language: "javascript",
              code: "let lowerCaseNames = products.map((item) => item.name.toLowerCase());\nconsole.log(lowerCaseNames);",
              explanation: "• map() can transform data.",
            },
          ],
        },
        {
          id: "sc_day_56_t7",
          title: "Finding in Array of Objects",
          examples: [
            {
              language: "javascript",
              code: 'let result = products.find((item) => {\n  return item.name === "Mobile";\n});\n\nconsole.log(result);',
              explanation: "• find() returns the first matching object.",
            },
          ],
        },
        {
          id: "sc_day_56_t8",
          title: "Sorting Array of Objects",
          examples: [
            {
              language: "javascript",
              code: "products.sort((a, b) => {\n  return a.price - b.price;\n});\n\nconsole.log(products);",
              explanation: "• Sorts objects in ascending order based on price.",
            },
          ],
        },
        {
          id: "sc_day_56_t9",
          title: "Interview Questions",
          explanation:
            "• An array of objects stores multiple entities where each element is an object. To access properties, use array[index].property. We can iterate using for loop or for...of loop. filter() returns matching elements based on condition, while map() transforms each element into a new array.",
        },
      ],
    },
  ],

  57: [
    {
      id: "sc_day_57",
      title: "JavaScript Spread & Rest Operators",
      topics: [
        {
          id: "sc_day_57_t1",
          title: "Spread Operator Introduction",
          explanation:
            "• The spread operator (...) is used to unpack iterable elements like arrays or objects into individual elements. It expands values.",
        },
        {
          id: "sc_day_57_t2",
          title: "Spread Operator with Arrays",
          examples: [
            {
              language: "javascript",
              code: "let myArray = [1, 2, 3];\nconsole.log(...myArray);",
              explanation:
                "• Spreads array elements individually. Output: 1 2 3",
            },
            {
              language: "javascript",
              code: "let arr1 = [2, 3];\nlet arr2 = [...arr1];\nconsole.log(arr2);",
              explanation: "• Creates a shallow copy of arr1.",
            },
            {
              language: "javascript",
              code: "let arr1 = [2, 3];\nlet arr2 = [4, 5];\nlet arr3 = [...arr1, ...arr2];\nconsole.log(arr3);",
              explanation: "• Concatenates two arrays.",
            },
          ],
        },
        {
          id: "sc_day_57_t3",
          title: "Spread Operator with Objects",
          examples: [
            {
              language: "javascript",
              code: 'let person = { name: "Rahul", age: 27 };\nlet personDetails = { ...person };\nconsole.log(personDetails);',
              explanation: "• Creates a shallow copy of an object.",
            },
            {
              language: "javascript",
              code: 'let address = { city: "Hyderabad", pincode: 500001 };\nlet personDetails = { ...person, ...address };\nconsole.log(personDetails);',
              explanation: "• Merges multiple objects into one.",
            },
          ],
        },
        {
          id: "sc_day_57_t4",
          title: "Spread Operator in Function Calls",
          examples: [
            {
              language: "javascript",
              code: "function add(a, b, c) {\n  return a + b + c;\n}\n\nlet numbers = [1, 2, 3];\nconsole.log(add(...numbers));",
              explanation:
                "• Passes array values as individual arguments. Output: 6",
            },
          ],
        },
        {
          id: "sc_day_57_t5",
          title: "Rest Parameter Introduction",
          explanation:
            "• The rest parameter (...) collects multiple function arguments into a single array. It is used when the number of arguments is unknown.",
        },
        {
          id: "sc_day_57_t6",
          title: "Rest Parameter Usage",
          examples: [
            {
              language: "javascript",
              code: "function numbers(...args) {\n  console.log(args);\n}\n\nnumbers(1, 2, 3);",
              explanation:
                "• Collects arguments into an array. Output: [1, 2, 3]",
            },
            {
              language: "javascript",
              code: "function numbers(a, b, ...rest) {\n  console.log(a);\n  console.log(b);\n  console.log(rest);\n}\n\nnumbers(1, 2, 3, 4, 5);",
              explanation: "• Rest parameter must be the last parameter.",
            },
            {
              language: "javascript",
              code: "function sum(...args) {\n  let result = 0;\n  for (let arg of args) {\n    result += arg;\n  }\n  console.log(result);\n}\n\nsum(1, 2, 3);\nsum(1, 2, 3, 4, 5, 6);",
              explanation: "• Handles indefinite number of arguments.",
            },
          ],
        },
        {
          id: "sc_day_57_t7",
          title: "Destructuring with Rest Syntax",
          examples: [
            {
              language: "javascript",
              code: "let [a, b, ...rest] = [1, 2, 3, 4, 5];\nconsole.log(a);\nconsole.log(b);\nconsole.log(rest);",
              explanation: "• Rest collects remaining array elements.",
            },
            {
              language: "javascript",
              code: 'let { firstName, ...rest } = {\n  firstName: "Rahul",\n  lastName: "Attuluri",\n  age: 27\n};\n\nconsole.log(firstName);\nconsole.log(rest);',
              explanation: "• Rest collects remaining object properties.",
            },
          ],
        },
        {
          id: "sc_day_57_t8",
          title: "Interview Questions",
          explanation:
            "• The spread operator expands iterable elements into individual elements. The rest parameter collects multiple arguments into an array and must be placed at the end of function parameters. Destructuring allows extraction of values from arrays or objects into separate variables.",
        },
      ],
    },
  ],

  58: [
    {
      id: "sc_day_58",
      title: "Building Responsive Web Page | Part - 2",
      topics: [
        {
          id: "sc_day_58_t1",
          title: "Feature Section (Why Choose Us)",
          explanation:
            "• This section displays feature cards centered on the page. Cards have equal spacing and wrap responsively using Flexbox.",
        },
        {
          id: "sc_day_58_t2",
          title: "Feature Section Layout",
          examples: [
            {
              language: "html",
              code: '<section class="why-choose-us" id="wcuSection">\n  <div class="wcu-section">\n    <h1>Why Choose Us?</h1>\n    <p>We use both original recipes and classic versions of famous food items.</p>\n    <div class="features-container"></div>\n  </div>\n</section>',
              explanation: "• Main structure of feature section.",
            },
            {
              language: "css",
              code: ".features-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 24px;\n}",
              explanation: "• Flexbox ensures responsive wrapping and spacing.",
            },
          ],
        },
        {
          id: "sc_day_58_t3",
          title: "Feature Card Design",
          examples: [
            {
              language: "html",
              code: '<article class="feature-card">\n  <img src="food-serve.png" alt="Food Service">\n  <h3>Food Service</h3>\n  <p>Experience fine dining at the comfort of your home.</p>\n</article>',
              explanation: "• Single feature card.",
            },
            {
              language: "css",
              code: ".feature-card {\n  width: 100%;\n  max-width: 320px;\n  background: #ffffff;\n  border: 1px solid #e5eaf4;\n  border-radius: 16px;\n  padding: 24px;\n  text-align: center;\n}",
              explanation: "• Card styling with rounded borders.",
            },
          ],
        },
        {
          id: "sc_day_58_t4",
          title: "Explore Menu Section",
          explanation:
            "• Displays product cards in rows. Cards wrap automatically and align centrally.",
        },
        {
          id: "sc_day_58_t5",
          title: "Menu Layout",
          examples: [
            {
              language: "html",
              code: '<section id="exploreMenuSection">\n  <div class="menu-header">\n    <h1>Explore Menu</h1>\n  </div>\n  <div class="menu-container"></div>\n</section>',
              explanation: "• Menu section structure.",
            },
            {
              language: "css",
              code: ".menu-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 24px;\n}",
              explanation: "• Flexbox for responsive grid layout.",
            },
          ],
        },
        {
          id: "sc_day_58_t6",
          title: "Menu Card Design",
          examples: [
            {
              language: "html",
              code: '<article class="menu-card">\n  <img src="food-img.png" alt="">\n  <h3>Veg Starters</h3>\n  <a href="#">View All →</a>\n</article>',
              explanation: "• Single menu card.",
            },
            {
              language: "css",
              code: ".menu-card {\n  width: 100%;\n  max-width: 260px;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);\n  padding: 16px;\n}",
              explanation: "• Adds shadow and card styling.",
            },
          ],
        },
        {
          id: "sc_day_58_t7",
          title: "Two Column Layout Section",
          explanation:
            "• Used for Healthy Food and Delivery & Payment sections. On mobile, layout is stacked. On larger screens, it becomes horizontal.",
        },
        {
          id: "sc_day_58_t8",
          title: "Two Column Implementation",
          examples: [
            {
              language: "html",
              code: '<section>\n  <div class="container two-column">\n    <div class="image-block">\n      <img src="healthy-food.png" alt="">\n    </div>\n    <div class="content-block">\n      <h1>Fresh, Healthy, Organic</h1>\n      <p>Say no to harmful chemicals.</p>\n    </div>\n  </div>\n</section>',
              explanation: "• Two-column structure.",
            },
            {
              language: "css",
              code: ".two-column {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 768px) {\n  .two-column {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .two-column.reverse {\n    flex-direction: row-reverse;\n  }\n}",
              explanation: "• Responsive direction switching.",
            },
          ],
        },
        {
          id: "sc_day_58_t9",
          title: "Payment Icons Layout",
          examples: [
            {
              language: "html",
              code: '<div class="payment-icons">\n  <img src="visa.png" alt="">\n  <img src="mastercard.png" alt="">\n  <img src="paypal.png" alt="">\n</div>',
              explanation: "• Payment icons container.",
            },
            {
              language: "css",
              code: ".payment-icons {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 30px;\n}\n\n.payment-icons img {\n  margin: 20px;\n  width: 50px;\n  height: 50px;\n}",
              explanation:
                "• Aligns icons side-by-side and wraps on small screens.",
            },
          ],
        },
      ],
    },
  ],

  59: [
    {
      id: "sc_day_59",
      title: "Building Responsive Web Page | Part - 3",
      topics: [
        {
          id: "sc_day_59_t1",
          title: "Responsive Webpage Structure",
          explanation:
            "• This part completes the Food Munch responsive webpage using pure CSS. Sections covered include Follow Us and Footer sections. Each section is independently responsive and built using Flexbox.",
        },
        {
          id: "sc_day_59_t2",
          title: "Follow Us Section Overview",
          explanation:
            "• The Follow Us section contains social media icons displayed inside circular containers. Icons are centered using Flexbox and evenly spaced.",
        },
        {
          id: "sc_day_59_t3",
          title: "Follow Us Section - HTML Structure",
          examples: [
            {
              language: "html",
              code: '<section class="follow-us" id="followUsSection">\n  <div class="container">\n    <h2>Follow Us</h2>\n    <div class="social-icons"></div>\n  </div>\n</section>',
              explanation: "• Main wrapper for social media section.",
            },
          ],
        },
        {
          id: "sc_day_59_t4",
          title: "Social Icons Layout - CSS",
          examples: [
            {
              language: "css",
              code: ".follow-us {\n  text-align: center;\n}\n\n.social-icons {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n  margin-top: 24px;\n}",
              explanation: "• Flexbox centers icons with equal spacing.",
            },
            {
              language: "css",
              code: ".social-icons span {\n  width: 80px;\n  height: 80px;\n  background: #faf7e8;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}",
              explanation:
                "• Creates circular containers and centers SVG icons.",
            },
          ],
        },
        {
          id: "sc_day_59_t5",
          title: "Footer Section Overview",
          explanation:
            "• The Footer section displays company logo, email, and address. It uses Flexbox with column layout and centered alignment.",
        },
        {
          id: "sc_day_59_t6",
          title: "Footer HTML Structure",
          examples: [
            {
              language: "html",
              code: '<footer class="site-footer">\n  <div class="container footer-content">\n    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png" alt="Food Munch" class="food-munch-logo" />\n    <p class="email">orderfood@foodmunch.com</p>\n    <address>123 Ayur Vigyan Nagar, New Delhi, India.</address>\n  </div>\n</footer>',
              explanation:
                "• Footer container includes logo, email, and address.",
            },
          ],
        },
        {
          id: "sc_day_59_t7",
          title: "Footer Styling - CSS",
          examples: [
            {
              language: "css",
              code: ".site-footer {\n  background: #0d2436;\n  padding: 60px 0;\n}\n\n.footer-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}",
              explanation: "• Footer uses column layout with centered content.",
            },
            {
              language: "css",
              code: ".footer-content p,\n.footer-content address {\n  color: #959ead;\n  font-size: 14px;\n}\n\n.footer-content address {\n  font-style: normal;\n}",
              explanation: "• Styling for text elements in footer.",
            },
          ],
        },
        {
          id: "sc_day_59_t8",
          title: "Responsive Behavior",
          explanation:
            "• All sections use Flexbox for alignment and responsiveness. Social icons wrap properly on smaller screens. Footer remains centered and structured across all device sizes.",
        },
      ],
    },
  ],

  60: [
    {
      id: "sc_day_60",
      title: "Building a Website Using VS Code",
      topics: [
        {
          id: "sc_day_60_t1",
          title: "Getting Image URLs Using Cloudinary",
          explanation:
            "• Cloudinary is a cloud-based media management platform used to upload, store, and deliver images and videos. After uploading an image, Cloudinary provides a public URL that can be used inside the HTML img tag src attribute.",
          examples: [
            {
              language: "html",
              code: '<img src="https://res.cloudinary.com/demo/image/upload/sample.jpg" alt="Sample Image">',
              explanation:
                "• The src attribute contains the image URL generated by Cloudinary.",
            },
          ],
        },
        {
          id: "sc_day_60_t2",
          title: "Installing Visual Studio Code",
          explanation:
            "• Visual Studio Code (VS Code) is a lightweight and powerful source-code editor. It supports HTML, CSS, JavaScript, and many other languages. Download it based on your operating system (Windows, Mac, or Linux) and install it following the setup instructions.",
        },
        {
          id: "sc_day_60_t3",
          title: "Project Folder Structure",
          explanation:
            "• When building a website in VS Code, create a project folder containing HTML and CSS files. Keeping files organized improves maintainability.",
          examples: [
            {
              language: "text",
              code: "project-folder/\n  index.html\n  styles.css\n  images/",
              explanation: "• Basic folder structure for a simple website.",
            },
          ],
        },
        {
          id: "sc_day_60_t4",
          title: "Linking HTML and CSS Files",
          explanation:
            "• To apply CSS styles to an HTML document, we use the HTML <link> element. It connects the external CSS file to the HTML file. The link tag must be placed inside the head section of the HTML document.",
        },
        {
          id: "sc_day_60_t5",
          title: "Link Element Syntax",
          examples: [
            {
              language: "html",
              code: '<head>\n  <link rel="stylesheet" href="styles.css">\n</head>',
              explanation:
                '• rel="stylesheet" defines relationship, href specifies the CSS file path.',
            },
          ],
        },
        {
          id: "sc_day_60_t6",
          title: "Important Notes",
          explanation:
            "• The <link> element is a void element, meaning it does not require a closing tag. Always ensure the CSS file path in href matches the file location. If the file is in another folder, provide the correct relative path.",
        },
      ],
    },
  ],

  61: [
    {
      id: "sc_day_61",
      title: "Building a Website Using VS Code",
      topics: [
        {
          id: "sc_day_61_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Building a Website Using VS Code". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_61_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Building a Website Using VS Code" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_61_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Building a Website Using VS Code". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  62: [
    {
      id: "sc_day_62",
      title: "Getting Started with Git",
      topics: [
        {
          id: "sc_day_62_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Getting Started with Git". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_62_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Getting Started with Git" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_62_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Getting Started with Git". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  63: [
    {
      id: "sc_day_63",
      title: "CSS Grid part 1",
      topics: [

        {
          id: "sc_day_63_t1",
          title: "Layout",
          explanation:
            "• A layout is a structural pattern used to organize and arrange elements on a webpage.\n" +
            "• It defines how headers, sidebars, content sections, and footers are positioned.\n" +
            "• Proper layout planning improves readability and user experience.\n" +
            "• Popular websites like Facebook and YouTube follow well-structured layouts.\n" +
            "• Always plan the layout before writing code to avoid messy structure."
        },

        {
          id: "sc_day_63_t2",
          title: "Methods to Design a Layout",
          explanation:
            "• There are two primary methods to design webpage layouts: CSS Flexbox and CSS Grid.\n" +
            "• CSS Flexbox is a one-dimensional layout system.\n" +
            "• CSS Grid is a two-dimensional layout system.\n" +
            "• Flexbox is useful for simpler layouts like navigation bars.\n" +
            "• CSS Grid is more powerful and better suited for complex layouts.\n" +
            "• For complex UI structures, CSS Grid makes the code cleaner and more manageable."
        },

        {
          id: "sc_day_63_t3",
          title: "CSS Flexbox",
          explanation:
            "• Flexbox arranges elements either horizontally (row) or vertically (column).\n" +
            "• It works along a single axis at a time.\n" +
            "• It is useful for aligning items and distributing space efficiently.\n" +
            "• Flexbox is ideal for small components and simple page sections.\n" +
            "• For complex multi-row and multi-column layouts, Flexbox can become difficult to manage."
        },

        {
          id: "sc_day_63_t4",
          title: "Introduction to CSS Grid",
          explanation:
            "• CSS Grid is an advanced two-dimensional layout system.\n" +
            "• It allows developers to design layouts using both rows and columns simultaneously.\n" +
            "• It provides precise control over element placement.\n" +
            "• Grid supports advanced features like fractional units (fr), named areas, and minmax().\n" +
            "• It reduces the need for nested div elements.\n" +
            "• CSS Grid produces cleaner and more maintainable code compared to complex Flexbox layouts."
        },

        {
          id: "sc_day_63_t5",
          title: "Basic Terminology of CSS Grid",
          explanation:
            "• Rows are horizontal sections in a grid.\n" +
            "• Columns are vertical sections in a grid.\n" +
            "• Grid Lines divide rows and columns and are numbered starting from 1.\n" +
            "• A Grid Cell is the smallest unit formed between adjacent row and column lines.\n" +
            "• A Grid Track is the space between two adjacent grid lines.\n" +
            "• A Grid Area is a rectangular space enclosed by four grid lines and can span multiple cells."
        },

        {
          id: "sc_day_63_t6",
          title: "Steps to Build a Layout",
          explanation:
            "• Step 1: Identify the layout structure of the application.\n" +
            "• Step 2: Determine the number of rows and columns needed.\n" +
            "• Step 3: Visualize the layout in grid format.\n" +
            "• Step 4: Implement CSS Grid properties.\n" +
            "• Example: In a gallery layout, we may use 2 rows and 3 columns."
        },

        {
          id: "sc_day_63_t7",
          title: "display: grid",
          explanation:
            "• The display property converts an element into a Grid Container when set to grid.\n" +
            "• Syntax: display: grid;\n" +
            "• The element with display: grid becomes the Grid Container.\n" +
            "• All direct child elements become Grid Items.\n" +
            "• By default, Grid creates a single-column layout if rows and columns are not defined.\n" +
            "• This automatic behavior is called an Implicit Grid."
        },

        {
          id: "sc_day_63_t8",
          title: "Implicit Grid",
          explanation:
            "• When rows and columns are not explicitly defined, CSS Grid automatically places items.\n" +
            "• It creates new rows dynamically based on the number of child elements.\n" +
            "• For example, if there are 6 grid items, 6 rows may be created automatically.\n" +
            "• Implicit grids are dynamic and adjust based on content.\n" +
            "• However, they may not produce the expected structured layout."
        },

        {
          id: "sc_day_63_t9",
          title: "grid-template-columns",
          explanation:
            "• grid-template-columns defines the number and width of columns.\n" +
            "• Syntax: grid-template-columns: width width ...;\n" +
            "• Example: grid-template-columns: 33% 33% 33%; creates three equal columns.\n" +
            "• Units can be px, %, fr, etc.\n" +
            "• It explicitly controls the horizontal structure of the layout."
        },

        {
          id: "sc_day_63_t10",
          title: "grid-template-rows",
          explanation:
            "• grid-template-rows defines the number and height of rows.\n" +
            "• Syntax: grid-template-rows: height height ...;\n" +
            "• Example: grid-template-rows: 40% 40%; creates two rows.\n" +
            "• Units can be px, %, fr, etc.\n" +
            "• It explicitly controls the vertical structure of the layout."
        }

      ]
    }
  ],

  64: [
    {
      id: "sc_day_64",
      title: "Advanced CSS Grid - Blog Application",
      topics: [

        {
          id: "sc_day_64_t1",
          title: "Introduction",
          explanation:
            "• In the previous session, we learned the fundamentals of CSS Grid.\n" +
            "• In this session, we build a complete Blog Application using advanced Grid properties.\n" +
            "• We will learn how to control grid items precisely using grid lines and grid areas.\n" +
            "• The goal is to create a structured multi-section layout using CSS Grid."
        },

        {
          id: "sc_day_64_t2",
          title: "Identifying the Layout",
          explanation:
            "• Before writing CSS, always identify the layout structure.\n" +
            "• In this Blog Application, we have Header, Sidebar, Blog Content, Ads, and Footer.\n" +
            "• The layout consists of 3 rows and 3 columns.\n" +
            "• Different rows and columns have different widths and heights.\n" +
            "• Planning layout visually helps in writing cleaner grid code."
        },

        {
          id: "sc_day_64_t3",
          title: "Creating Grid Structure",
          explanation:
            "• The container is converted into a Grid Container using display: grid.\n" +
            "• grid-template-columns: 1fr 2fr 1fr defines three columns with flexible widths.\n" +
            "• grid-template-rows: 1fr 3fr 1fr defines three rows.\n" +
            "• gap: 15px creates spacing between grid items.\n" +
            "• fr unit distributes remaining space proportionally."
        },

        {
          id: "sc_day_64_t4",
          title: "Spanning Grid Items Across Columns",
          explanation:
            "• grid-column-start defines where a grid item begins horizontally.\n" +
            "• grid-column-end defines where it ends horizontally.\n" +
            "• Example: grid-column-start: 1; grid-column-end: 4; makes header span all 3 columns.\n" +
            "• This allows elements like Header and Footer to stretch across the entire layout."
        },

        {
          id: "sc_day_64_t5",
          title: "Spanning Grid Items Across Rows",
          explanation:
            "• grid-row-start defines where a grid item begins vertically.\n" +
            "• grid-row-end defines where it ends vertically.\n" +
            "• Example: grid-row-start: 1; grid-row-end: 2;\n" +
            "• Using row and column start/end gives full control over grid placement."
        },

        {
          id: "sc_day_64_t6",
          title: "Shorthand for grid-row and grid-column",
          explanation:
            "• grid-column: start/end is shorthand for grid-column-start and grid-column-end.\n" +
            "• grid-row: start/end is shorthand for grid-row-start and grid-row-end.\n" +
            "• Example: grid-column: 1/4; grid-row: 1/2;\n" +
            "• Providing only the start value automatically spans one track by default.\n" +
            "• Shorthand properties simplify grid placement and reduce code length."
        },

        {
          id: "sc_day_64_t7",
          title: "Positioning Sidebar, Blog, Ads, Footer",
          explanation:
            "• Sidebar is placed using grid-column: 1/2; grid-row: 2/3;\n" +
            "• Blog Content is placed using grid-column: 2/3; grid-row: 2/3;\n" +
            "• Ads section is placed using grid-column: 3/4; grid-row: 2/3;\n" +
            "• Footer spans across all columns using grid-column: 1/4; grid-row: 3/4;\n" +
            "• Each grid item is precisely placed inside the defined structure."
        },

        {
          id: "sc_day_64_t8",
          title: "auto Value in Grid",
          explanation:
            "• auto sets the size of rows or columns based on content.\n" +
            "• grid-template-rows: auto 1fr auto;\n" +
            "• Header and Footer adjust height according to their content.\n" +
            "• Middle row takes remaining space using 1fr.\n" +
            "• auto is useful when content height should determine row size."
        },

        {
          id: "sc_day_64_t9",
          title: "grid-area Property",
          explanation:
            "• grid-area assigns a name to a grid item.\n" +
            "• Example: .header { grid-area: header; }\n" +
            "• It connects grid items with grid-template-areas.\n" +
            "• grid-area can also be shorthand for row and column placement.\n" +
            "• Syntax: grid-area: row-start / column-start / row-end / column-end;"
        },

        {
          id: "sc_day_64_t10",
          title: "grid-template-areas",
          explanation:
            "• grid-template-areas provides a visual way to define layout.\n" +
            "• It defines layout using named areas in string format.\n" +
            "• Example:\n" +
            "  \"header header header\"\n" +
            "  \"sidebar blog ads\"\n" +
            "  \"footer footer footer\";\n" +
            "• It makes layout easier to read and manage.\n" +
            "• Best for simple and clearly structured grid designs."
        },

        {
          id: "sc_day_64_t11",
          title: "Grid Areas vs Grid Lines",
          explanation:
            "• Grid Lines are powerful and flexible but can become complex in large layouts.\n" +
            "• Grid Areas are more readable and semantic.\n" +
            "• Grid Areas are ideal for fixed, clearly defined layouts.\n" +
            "• Grid Lines are better for dynamic and complex grid positioning."
        }
      ]
    }
  ],

  65: [
    {
      id: "sc_day_65",
      title: "Factory Functions, Constructor Functions & Date Object",
      topics: [

        {
          id: "sc_day_65_t1",
          title: "Factory Function",
          explanation:
            "• A Factory Function is a regular function that returns a new object every time it is called.\n" +
            "• It follows camelCase naming convention.\n" +
            "• The function explicitly returns an object.\n" +
            "• Each function call creates a separate object instance.\n" +
            "• It does not require the new keyword.\n" +
            "• Useful for creating multiple similar objects without using classes."
        },

        {
          id: "sc_day_65_t2",
          title: "Factory Function Shorthand",
          explanation:
            "• ES6 provides shorthand syntax for object creation.\n" +
            "• Property shorthand allows writing { color, brand } instead of { color: color }.\n" +
            "• Method shorthand allows writing start() {} instead of start: function() {}.\n" +
            "• Shorthand improves readability and reduces code length."
        },

        {
          id: "sc_day_65_t3",
          title: "Constructor Function",
          explanation:
            "• A Constructor Function creates objects using the new operator.\n" +
            "• It follows PascalCase naming convention.\n" +
            "• Properties are assigned using the this keyword.\n" +
            "• The object is created automatically when called with new.\n" +
            "• The created object is called an Instance.\n" +
            "• Instance properties and methods belong to that specific object."
        },

        {
          id: "sc_day_65_t4",
          title: "The new Operator",
          explanation:
            "• When a function is called using new, JavaScript creates an empty object.\n" +
            "• The empty object is assigned to this inside the function.\n" +
            "• Properties and methods are attached to this.\n" +
            "• The new object is returned automatically.\n" +
            "• Example: let car1 = new Car('blue', 'Audi');\n" +
            "• car1 becomes an instance of Car."
        },

        {
          id: "sc_day_65_t5",
          title: "Factory vs Constructor Functions",
          explanation:
            "• Factory functions follow camelCase naming.\n" +
            "• Constructor functions follow PascalCase naming.\n" +
            "• Factory functions do not require new keyword.\n" +
            "• Constructor functions require new keyword.\n" +
            "• Factory functions explicitly return objects.\n" +
            "• Constructor functions return object implicitly."
        },

        {
          id: "sc_day_65_t6",
          title: "JavaScript Functions as Objects",
          explanation:
            "• In JavaScript, functions are also objects.\n" +
            "• Functions have properties and methods.\n" +
            "• Default properties include name, length, constructor.\n" +
            "• Default methods include call(), apply(), bind(), toString()."
        },

        {
          id: "sc_day_65_t7",
          title: "Function Properties",
          explanation:
            "• name property returns the name of the function.\n" +
            "• length property returns number of parameters.\n" +
            "• typeof functionName returns 'function'.\n" +
            "• These properties help in debugging and understanding functions."
        },

        {
          id: "sc_day_65_t8",
          title: "Constructor Property",
          explanation:
            "• Every object in JavaScript has a constructor property.\n" +
            "• The constructor property refers to the function used to create the object.\n" +
            "• Example: car1.constructor returns Car function definition.\n" +
            "• Useful for identifying object type."
        },

        {
          id: "sc_day_65_t9",
          title: "Built-in Constructor Functions",
          explanation:
            "• JavaScript provides built-in constructor functions.\n" +
            "• Examples: Date(), Error(), Promise(), Object(), String(), Number().\n" +
            "• These constructors create predefined object types.\n" +
            "• They provide built-in methods for common operations."
        },

        {
          id: "sc_day_65_t10",
          title: "Creating Date Objects",
          explanation:
            "• The Date object represents date and time.\n" +
            "• new Date() creates current date and local time.\n" +
            "• new Date(milliseconds) creates date from milliseconds since Jan 1, 1970 UTC.\n" +
            "• new Date(dateString) creates date from formatted string.\n" +
            "• new Date(year, month, day, hours, minutes, seconds, milliseconds) creates custom date.\n" +
            "• Months are counted from 0 to 11 (January = 0).\n" +
            "• If only one numeric argument is passed, it is treated as milliseconds."
        },

        {
          id: "sc_day_65_t11",
          title: "Date Auto-Correction",
          explanation:
            "• The Date object automatically corrects out-of-range values.\n" +
            "• Example: new Date(2008, 0, 33) becomes February 2, 2008.\n" +
            "• JavaScript adjusts overflow values internally.\n" +
            "• This helps prevent invalid date errors."
        },

        {
          id: "sc_day_65_t12",
          title: "Date Instance Methods",
          explanation:
            "• Date.now() returns milliseconds since Jan 1, 1970 UTC.\n" +
            "• getFullYear() returns the year.\n" +
            "• getMonth() returns month (0–11).\n" +
            "• getDate() returns day of month (1–31).\n" +
            "• getDay() returns weekday (0–6).\n" +
            "• getHours() and getMinutes() return time components.\n" +
            "• setFullYear(), setMonth(), setDate() modify date values.\n" +
            "• getUTCDate() and setUTCDate() work with universal time."
        }

      ]
    }
  ],

  66: [
    {
      id: "sc_day_66",
      title: "CSS Grid - 3",
      topics: [

        {
          id: "sc_day_66_t1",
          title: "Introduction to Grid Alignment",
          explanation:
            "• By default, grid rows and columns stretch to fill the container.\n" +
            "• Sometimes extra space remains when fixed sizes are used.\n" +
            "• CSS Grid provides alignment properties to control horizontal and vertical positioning.\n" +
            "• Alignment can be applied to entire grid or individual grid items."
        },

        {
          id: "sc_day_66_t2",
          title: "justify-content (Horizontal Alignment of Grid)",
          explanation:
            "• justify-content aligns columns horizontally inside the grid container.\n" +
            "• Works only when extra horizontal space is available.\n" +
            "• Values: start, end, center, stretch, space-around, space-evenly, space-between.",
          examples: [
            {
              language: "css",
              code:
                ".layout {\n" +
                "  display: grid;\n" +
                "  grid-template-columns: repeat(3, 150px);\n" +
                "  justify-content: center;\n" +
                "}",
              explanation:
                "Grid columns are centered horizontally inside container."
            }
          ]
        },

        {
          id: "sc_day_66_t3",
          title: "align-content (Vertical Alignment of Grid)",
          explanation:
            "• align-content aligns rows vertically inside grid container.\n" +
            "• Requires extra vertical space (set height).\n" +
            "• Values: start, end, center, stretch, space-around, space-evenly, space-between.",
          examples: [
            {
              language: "css",
              code:
                ".layout {\n" +
                "  display: grid;\n" +
                "  height: 95vh;\n" +
                "  grid-template-rows: repeat(2, 150px);\n" +
                "  align-content: center;\n" +
                "}",
              explanation:
                "Rows are centered vertically within container."
            }
          ]
        },

        {
          id: "sc_day_66_t4",
          title: "place-content (Shorthand)",
          explanation:
            "• place-content is shorthand for align-content and justify-content.\n" +
            "• Syntax: place-content: <align>/<justify>.\n" +
            "• If one value is given, it applies to both.",
          examples: [
            {
              language: "css",
              code:
                ".layout {\n" +
                "  display: grid;\n" +
                "  height: 95vh;\n" +
                "  place-content: center;\n" +
                "}",
              explanation:
                "Grid is centered both horizontally and vertically."
            }
          ]
        },

        {
          id: "sc_day_66_t5",
          title: "justify-items (Horizontal Alignment Inside Grid Items)",
          explanation:
            "• justify-items aligns content inside each grid item horizontally.\n" +
            "• Values: stretch (default), start, end, center.\n" +
            "• Affects inner content of grid items.",
          examples: [
            {
              language: "css",
              code:
                ".layout {\n" +
                "  display: grid;\n" +
                "  justify-items: center;\n" +
                "}",
              explanation:
                "Content inside each grid item is centered horizontally."
            }
          ]
        },

        {
          id: "sc_day_66_t6",
          title: "align-items (Vertical Alignment Inside Grid Items)",
          explanation:
            "• align-items aligns content vertically inside each grid item.\n" +
            "• Values: stretch (default), start, end, center.\n" +
            "• Controls vertical positioning of content.",
          examples: [
            {
              language: "css",
              code:
                ".layout {\n" +
                "  display: grid;\n" +
                "  align-items: center;\n" +
                "}",
              explanation:
                "Content inside grid items is vertically centered."
            }
          ]
        },

        {
          id: "sc_day_66_t7",
          title: "place-items (Shorthand)",
          explanation:
            "• place-items is shorthand for justify-items and align-items.\n" +
            "• Syntax: place-items: <align>/<justify>.\n" +
            "• One value applies to both directions.",
          examples: [
            {
              language: "css",
              code:
                ".layout {\n" +
                "  display: grid;\n" +
                "  place-items: center;\n" +
                "}",
              explanation:
                "Content inside each grid item is centered horizontally and vertically."
            }
          ]
        },

        {
          id: "sc_day_66_t8",
          title: "Aligning Individual Grid Items",
          explanation:
            "• justify-self aligns a single grid item horizontally.\n" +
            "• align-self aligns a single grid item vertically.\n" +
            "• place-self is shorthand for both.\n" +
            "• Values: stretch (default), start, end, center.",
          examples: [
            {
              language: "css",
              code:
                ".box {\n" +
                "  justify-self: end;\n" +
                "  align-self: center;\n" +
                "}",
              explanation:
                "The specific grid item moves to right and vertically centers."
            }
          ]
        }

      ]
    }
  ],

  67: [
    {
      id: "sc_day_67",
      title: "CSS grid - 4",
      topics: [

        {
          id: "sc_day_67_t1",
          title: "Introduction to Responsive Grid",
          explanation:
            "• By default, grid columns remain fixed unless defined responsively.\n" +
            "• Responsive design adjusts layout based on screen size.\n" +
            "• CSS Grid supports responsiveness using media queries or modern functions like auto-fit and minmax()."
        },

        {
          id: "sc_day_67_t2",
          title: "Responsive Grid using Media Queries",
          explanation:
            "• Media Queries allow applying CSS rules based on screen width.\n" +
            "• Different column counts can be defined for different screen sizes.\n" +
            "• Common breakpoints: <600px (1 column), >600px (2), >900px (3), >1200px (4).",
          examples: [
            {
              language: "css",
              code:
                ".grid-container {\n" +
                "  display: grid;\n" +
                "  grid-template-columns: 1fr;\n" +
                "}\n\n" +
                "@media (min-width: 600px) {\n" +
                "  .grid-container {\n" +
                "    grid-template-columns: repeat(2, 1fr);\n" +
                "  }\n" +
                "}\n\n" +
                "@media (min-width: 900px) {\n" +
                "  .grid-container {\n" +
                "    grid-template-columns: repeat(3, 1fr);\n" +
                "  }\n" +
                "}",
              explanation:
                "Columns increase as screen width increases.\n" +
                "Layout adapts dynamically to device size."
            }
          ]
        },

        {
          id: "sc_day_67_t3",
          title: "auto-fit",
          explanation:
            "• auto-fit automatically adjusts number of columns.\n" +
            "• Used inside repeat() function.\n" +
            "• It expands columns to fill available space.\n" +
            "• Eliminates need for multiple media queries.",
          examples: [
            {
              language: "css",
              code:
                ".grid-container {\n" +
                "  display: grid;\n" +
                "  grid-template-columns: repeat(auto-fit, 1fr);\n" +
                "}",
              explanation:
                "Number of columns changes automatically based on container width."
            }
          ]
        },

        {
          id: "sc_day_67_t4",
          title: "minmax()",
          explanation:
            "• minmax() defines minimum and maximum width for grid columns.\n" +
            "• Often used with auto-fit for responsiveness.\n" +
            "• Syntax: minmax(minimum, maximum).",
          examples: [
            {
              language: "css",
              code:
                ".grid-container {\n" +
                "  display: grid;\n" +
                "  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n" +
                "}",
              explanation:
                "Each column has minimum width of 300px.\n" +
                "Columns expand up to 1fr if extra space exists."
            }
          ]
        },

        {
          id: "sc_day_67_t5",
          title: "Grid vs Flexbox - Layout First vs Content First",
          explanation:
            "• Grid follows Layout-First approach (rows & columns defined).\n" +
            "• Flexbox follows Content-First approach (based on element size).\n" +
            "• Grid maintains alignment across rows.\n" +
            "• Flexbox may create uneven rows when wrapping."
        },

        {
          id: "sc_day_67_t6",
          title: "flex-basis in Flexbox",
          explanation:
            "• flex-basis defines initial size before space distribution.\n" +
            "• Helps create equal column structure in Flexbox.",
          examples: [
            {
              language: "css",
              code:
                ".flex-item {\n" +
                "  flex-basis: 30%;\n" +
                "}",
              explanation:
                "Each flex item takes 30% width before wrapping."
            }
          ]
        },

        {
          id: "sc_day_67_t7",
          title: "Equal Height Rows using grid-auto-rows",
          explanation:
            "• grid-auto-rows defines height of implicitly created rows.\n" +
            "• Makes all rows equal height easily.\n" +
            "• Easier in Grid compared to Flexbox.",
          examples: [
            {
              language: "css",
              code:
                ".grid-container {\n" +
                "  display: grid;\n" +
                "  grid-template-columns: repeat(3, 1fr);\n" +
                "  grid-auto-rows: 1fr;\n" +
                "}",
              explanation:
                "All rows get equal height automatically."
            }
          ]
        },

        {
          id: "sc_day_67_t8",
          title: "Two Dimensions vs One Dimension",
          explanation:
            "• Grid works in two dimensions (rows and columns).\n" +
            "• Flexbox works in one dimension (row OR column).\n" +
            "• Grid controls full layout structure.\n" +
            "• Flexbox is better for alignment inside components."
        },

        {
          id: "sc_day_67_t9",
          title: "Overlapping Elements",
          explanation:
            "• Grid allows overlapping by placing items in same grid cell.\n" +
            "• Achieved using grid lines or grid-area.\n" +
            "• Flexbox requires extra positioning methods like absolute or negative margins.",
          examples: [
            {
              language: "css",
              code:
                ".item1 {\n" +
                "  grid-column: 1 / 3;\n" +
                "  grid-row: 1 / 2;\n" +
                "}\n" +
                ".item2 {\n" +
                "  grid-column: 2 / 4;\n" +
                "  grid-row: 1 / 2;\n" +
                "}",
              explanation:
                "Both items overlap partially in same row."
            }
          ]
        },

        {
          id: "sc_day_67_t10",
          title: "When to Use Grid vs Flexbox",
          explanation:
            "• Use Grid for full page layout structures.\n" +
            "• Use Flexbox for alignment and small components.\n" +
            "• Grid is best for dashboards, galleries, structured layouts.\n" +
            "• Flexbox is best for navigation bars, buttons alignment, toolbars."
        }

      ]
    }
  ],

  68: [
    {
      id: "sc_day_68",
      title: "Behavior of 'this' in JavaScript",
      topics: [

        {
          id: "sc_day_68_t1",
          title: "Introduction to this",
          explanation:
            "• 'this' is a special keyword in JavaScript.\n" +
            "• Its value depends on how a function is called.\n" +
            "• It is determined in three main ways:\n" +
            "  1. Object methods → refers to the object.\n" +
            "  2. Regular functions → refers to global object.\n" +
            "  3. Arrow functions → refers to surrounding context."
        },

        {
          id: "sc_day_68_t2",
          title: "this in Object Methods",
          explanation:
            "• When a function is called as an object method, 'this' refers to that object.\n" +
            "• It points to the object before the dot.\n" +
            "• Example: car.start() → this = car.",
          examples: [
            {
              language: "javascript",
              code:
                "let car = {\n" +
                "  color: 'blue',\n" +
                "  brand: 'Audi',\n" +
                "  start: function() {\n" +
                "    console.log(this);\n" +
                "  }\n" +
                "};\n\n" +
                "car.start();",
              explanation:
                "Method is called using car.start().\n" +
                "'this' refers to car object."
            }
          ]
        },

        {
          id: "sc_day_68_t3",
          title: "this in Regular Functions",
          explanation:
            "• In a normal function call, 'this' refers to the global object.\n" +
            "• In browsers, global object is 'window'.\n" +
            "• Not attached to any object.",
          examples: [
            {
              language: "javascript",
              code:
                "function start() {\n" +
                "  console.log(this);\n" +
                "}\n\n" +
                "start();",
              explanation:
                "Regular function call.\n" +
                "'this' refers to window (in browser)."
            }
          ]
        },

        {
          id: "sc_day_68_t4",
          title: "this in Arrow Functions",
          explanation:
            "• Arrow functions do NOT have their own 'this'.\n" +
            "• They inherit 'this' from where they are defined.\n" +
            "• This is called lexical binding.\n" +
            "• Arrow function does not depend on how it is called."
        },

        {
          id: "sc_day_68_t5",
          title: "Arrow Function as Object Method",
          explanation:
            "• If arrow function is used as object method, it does not refer to object.\n" +
            "• It refers to outer context (usually window).\n" +
            "• Because arrow functions don’t bind their own 'this'.",
          examples: [
            {
              language: "javascript",
              code:
                "let car = {\n" +
                "  color: 'blue',\n" +
                "  brand: 'Audi',\n" +
                "  start: () => {\n" +
                "    console.log(this);\n" +
                "  }\n" +
                "};\n\n" +
                "car.start();",
              explanation:
                "Arrow function inherits 'this' from outer scope.\n" +
                "So it refers to window, not car."
            }
          ]
        },

        {
          id: "sc_day_68_t6",
          title: "Arrow Function in Callback",
          explanation:
            "• Arrow functions inside methods inherit 'this' correctly.\n" +
            "• Useful in callbacks like map(), findIndex(), etc.\n" +
            "• Keeps reference to parent object.",
          examples: [
            {
              language: "javascript",
              code:
                "let cars = ['Audi', 'BMW', 'Mercedes'];\n\n" +
                "let car = {\n" +
                "  brand: 'Audi',\n" +
                "  start: function() {\n" +
                "    cars.findIndex((item) => {\n" +
                "      console.log(this);\n" +
                "    });\n" +
                "  }\n" +
                "};\n\n" +
                "car.start();",
              explanation:
                "Arrow callback inherits 'this' from start().\n" +
                "'this' refers to car object."
            }
          ]
        },

        {
          id: "sc_day_68_t7",
          title: "this in Constructor Function",
          explanation:
            "• When function is called using new, a new object is created.\n" +
            "• That object is assigned to 'this'.\n" +
            "• 'this' refers to the instance object.",
          examples: [
            {
              language: "javascript",
              code:
                "function Car(color, brand) {\n" +
                "  this.color = color;\n" +
                "  this.brand = brand;\n" +
                "  this.start = function() {\n" +
                "    console.log(this);\n" +
                "  };\n" +
                "}\n\n" +
                "let car1 = new Car('blue', 'Audi');\n" +
                "car1.start();",
              explanation:
                "'new' creates empty object.\n" +
                "'this' refers to car1 instance."
            }
          ]
        },

        {
          id: "sc_day_68_t8",
          title: "Arrow Method inside Constructor",
          explanation:
            "• Arrow function inside constructor inherits 'this' from constructor.\n" +
            "• Since constructor 'this' refers to instance, arrow function also refers to instance.\n" +
            "• Works correctly inside constructor.",
          examples: [
            {
              language: "javascript",
              code:
                "function Car(color, brand) {\n" +
                "  this.color = color;\n" +
                "  this.brand = brand;\n" +
                "  this.start = () => {\n" +
                "    console.log(this);\n" +
                "  };\n" +
                "}\n\n" +
                "let car1 = new Car('blue', 'Audi');\n" +
                "car1.start();",
              explanation:
                "Arrow inherits 'this' from constructor.\n" +
                "'this' refers to car1."
            }
          ]
        },

        {
          id: "sc_day_68_t9",
          title: "Interview Recap",
          explanation:
            "• 'this' depends on how function is called.\n" +
            "• Object method → this = object.\n" +
            "• Regular function → this = global object.\n" +
            "• Arrow function → this = surrounding context.\n" +
            "• Constructor with new → this = new instance."
        }

      ]
    }
  ],

  69: [
    {
      id: "sc_day_69",
      title: "CSS Positioning part - 1",
      topics: [

        {
          id: "sc_day_69_t1",
          title: "Introduction to CSS Positioning",
          explanation:
            "• CSS Positioning allows placing elements anywhere in a document.\n" +
            "• Used to create complex layouts like navbars, modals, overlays.\n" +
            "• The 'position' property controls how an element is positioned.\n" +
            "• Main values: static, relative, fixed."
        },

        {
          id: "sc_day_69_t2",
          title: "Position: static",
          explanation:
            "• Default position of all elements.\n" +
            "• Elements follow normal document flow.\n" +
            "• top, left, right, bottom properties do not work.\n" +
            "• No visible change when applied.",
          examples: [
            {
              language: "css",
              code:
                ".box2 {\n" +
                "  position: static;\n" +
                "}",
              explanation:
                "Element stays in natural flow.\n" +
                "Offset properties have no effect."
            }
          ]
        },

        {
          id: "sc_day_69_t3",
          title: "Position: relative",
          explanation:
            "• Element remains in normal flow.\n" +
            "• Can be shifted using top, left, bottom, right.\n" +
            "• Movement is relative to its original position.\n" +
            "• Space of original position is preserved.",
          examples: [
            {
              language: "css",
              code:
                ".box2 {\n" +
                "  position: relative;\n" +
                "  top: 20px;\n" +
                "  left: 20px;\n" +
                "}",
              explanation:
                "Element moves 20px down and 20px right\n" +
                "from its original position."
            }
          ]
        },

        {
          id: "sc_day_69_t4",
          title: "Relative Position Rules",
          explanation:
            "• Use either top or bottom (not both).\n" +
            "• Use either left or right (not both).\n" +
            "• If both are given, top overrides bottom.\n" +
            "• Left overrides right."
        },

        {
          id: "sc_day_69_t5",
          title: "Position: fixed",
          explanation:
            "• Removed from normal document flow.\n" +
            "• Positioned relative to viewport.\n" +
            "• Does not move when page scrolls.\n" +
            "• Commonly used for navbars and floating buttons.",
          examples: [
            {
              language: "css",
              code:
                ".box2 {\n" +
                "  position: fixed;\n" +
                "  top: 0;\n" +
                "  left: 0;\n" +
                "}",
              explanation:
                "Element sticks to top-left of viewport\n" +
                "and remains fixed during scrolling."
            }
          ]
        },

        {
          id: "sc_day_69_t6",
          title: "Sizing with Fixed Position",
          explanation:
            "• top & bottom define height.\n" +
            "• left & right define width.\n" +
            "• Using all four (0) covers full viewport.\n" +
            "• Useful for fullscreen modals and overlays.",
          examples: [
            {
              language: "css",
              code:
                ".overlay {\n" +
                "  position: fixed;\n" +
                "  top: 0;\n" +
                "  bottom: 0;\n" +
                "  left: 0;\n" +
                "  right: 0;\n" +
                "}",
              explanation:
                "Element covers entire viewport screen."
            }
          ]
        },

        {
          id: "sc_day_69_t7",
          title: "Fixed Position and Scrolling",
          explanation:
            "• Fixed elements stay in same position even when scrolling.\n" +
            "• Ideal for sticky headers, chat buttons, notifications.\n" +
            "• Independent of document height."
        },

        {
          id: "sc_day_69_t8",
          title: "Building Fixed Navbar (E-Commerce Example)",
          explanation:
            "• Navbar should stay at top while scrolling.\n" +
            "• Use position: fixed.\n" +
            "• Set top: 0 and width: 100%.\n" +
            "• Ensure content below does not hide under navbar.",
          examples: [
            {
              language: "css",
              code:
                ".nav-bar {\n" +
                "  position: fixed;\n" +
                "  top: 0;\n" +
                "  left: 0;\n" +
                "  width: 100%;\n" +
                "  background-color: white;\n" +
                "}",
              explanation:
                "Navbar sticks to top of viewport\n" +
                "and spans full width."
            }
          ]
        },

        {
          id: "sc_day_69_t9",
          title: "Interview Recap",
          explanation:
            "• static → default position, normal flow.\n" +
            "• relative → shifts from original position.\n" +
            "• fixed → relative to viewport, removed from flow.\n" +
            "• Fixed elements stay during scrolling.\n" +
            "• Used in navbars, modals, floating buttons."
        }

      ]
    }
  ],

  70: [
    {
      id: "sc_day_70",
      title: "CSS Position part -2",
      topics: [

        {
          id: "sc_day_70_t1",
          title: "Introduction to Absolute Position",
          explanation:
            "• position: absolute removes element from normal document flow.\n" +
            "• It is positioned relative to its nearest positioned ancestor.\n" +
            "• If no positioned ancestor exists, it positions relative to the document.\n" +
            "• Commonly used for badges, labels, overlays, dropdowns."
        },

        {
          id: "sc_day_70_t2",
          title: "Absolute Position Basic Behavior",
          explanation:
            "• Once absolute is applied, element no longer occupies space.\n" +
            "• Parent adjusts as if the element doesn’t exist.\n" +
            "• Can be moved using top, left, right, bottom.",
          examples: [
            {
              language: "css",
              code:
                ".box3 {\n" +
                "  position: absolute;\n" +
                "  width: 50px;\n" +
                "}",
              explanation:
                "Element is removed from normal flow.\n" +
                "Now it can be positioned manually."
            }
          ]
        },

        {
          id: "sc_day_70_t3",
          title: "Positioned Ancestor",
          explanation:
            "• An ancestor with position other than static is called Positioned Ancestor.\n" +
            "• Absolute element positions itself relative to this ancestor.\n" +
            "• Usually we use position: relative on parent.",
          examples: [
            {
              language: "css",
              code:
                ".parent {\n" +
                "  position: relative;\n" +
                "}\n\n" +
                ".child {\n" +
                "  position: absolute;\n" +
                "  top: 0;\n" +
                "  left: 0;\n" +
                "}",
              explanation:
                "Child is positioned at top-left of parent."
            }
          ]
        },

        {
          id: "sc_day_70_t4",
          title: "Positioning in Corners",
          explanation:
            "• top: 0; left: 0 → top-left\n" +
            "• top: 0; right: 0 → top-right\n" +
            "• bottom: 0; left: 0 → bottom-left\n" +
            "• bottom: 0; right: 0 → bottom-right\n" +
            "• Works relative to positioned ancestor."
        },

        {
          id: "sc_day_70_t5",
          title: "Changing Positioned Ancestor",
          explanation:
            "• If nearest parent is not positioned, browser looks upward.\n" +
            "• First ancestor with position (relative, absolute, fixed) becomes reference.\n" +
            "• If none found, document becomes reference."
        },

        {
          id: "sc_day_70_t6",
          title: "No Positioned Ancestor",
          explanation:
            "• If no ancestor has positioning, absolute element is placed relative to document.\n" +
            "• It behaves similar to fixed but scrolls with page.\n" +
            "• Position is calculated from document edges."
        },

        {
          id: "sc_day_70_t7",
          title: "Fixed vs Absolute",
          explanation:
            "• Both removed from normal flow.\n" +
            "• fixed → positioned relative to viewport.\n" +
            "• absolute → positioned relative to nearest positioned ancestor.\n" +
            "• fixed does not move on scroll.\n" +
            "• absolute moves when parent scrolls."
        },

        {
          id: "sc_day_70_t8",
          title: "E-Commerce Example (Service Number Badge)",
          explanation:
            "• Service number should appear on top-left of card.\n" +
            "• It must move when page scrolls.\n" +
            "• So we use absolute for badge.\n" +
            "• Parent card should be relative.",
          examples: [
            {
              language: "css",
              code:
                ".service {\n" +
                "  position: relative;\n" +
                "}\n\n" +
                ".service-number {\n" +
                "  position: absolute;\n" +
                "  top: 0;\n" +
                "  left: 0;\n" +
                "}",
              explanation:
                "Badge is positioned relative to card.\n" +
                "Moves with card during scrolling."
            }
          ]
        },

        {
          id: "sc_day_70_t9",
          title: "Stacking Order & Overlapping",
          explanation:
            "• When positioned elements overlap, stacking order matters.\n" +
            "• By default, later HTML elements appear on top.\n" +
            "• Controlled using z-index property.\n" +
            "• z-index works only on positioned elements."
        },

        {
          id: "sc_day_70_t10",
          title: "z-index Property",
          explanation:
            "• z-index controls vertical stacking.\n" +
            "• Accepts auto or integer values.\n" +
            "• Higher value appears above lower value.\n" +
            "• Negative values push element backward.",
          examples: [
            {
              language: "css",
              code:
                ".navbar {\n" +
                "  position: fixed;\n" +
                "  z-index: 10;\n" +
                "}",
              explanation:
                "Navbar stays above other positioned elements."
            }
          ]
        },

        {
          id: "sc_day_70_t11",
          title: "Fixing Overlap Issue",
          explanation:
            "• If service container overlaps navbar, increase navbar z-index.\n" +
            "• Example: z-index: 10 for navbar.\n" +
            "• Ensures proper visual stacking.\n" +
            "• Always assign z-index carefully to avoid layout bugs."
        },

        {
          id: "sc_day_70_t12",
          title: "Interview Recap",
          explanation:
            "• absolute → relative to nearest positioned ancestor.\n" +
            "• fixed → relative to viewport.\n" +
            "• positioned ancestor must not be static.\n" +
            "• z-index controls stacking order.\n" +
            "• Higher z-index appears on top.\n" +
            "• Works only on positioned elements."
        }

      ]
    }
  ],

  71: [
    {
      id: "sc_day_71",
      title: "JavaScript Class",
      topics: [

        {
          id: "sc_day_71_t1",
          title: "Introduction to Classes",
          explanation:
            "• A class is a special type of function in JavaScript.\n" +
            "• It is used to create multiple objects with similar structure.\n" +
            "• Classes provide a cleaner syntax over constructor functions.\n" +
            "• typeof(ClassName) returns 'function'."
        },

        {
          id: "sc_day_71_t2",
          title: "Constructor Method",
          explanation:
            "• constructor() is a special method inside a class.\n" +
            "• It runs automatically when a new object is created.\n" +
            "• Used to initialize object properties.\n" +
            "• 'this' refers to the instance object.",
          examples: [
            {
              language: "javascript",
              code:
                "class Person {\n" +
                "  constructor(firstName, lastName) {\n" +
                "    this.firstName = firstName;\n" +
                "    this.lastName = lastName;\n" +
                "  }\n\n" +
                "  displayFullName() {\n" +
                "    return this.firstName + ' ' + this.lastName;\n" +
                "  }\n" +
                "}\n\n" +
                "let person1 = new Person('Virat', 'Kohli');\n" +
                "console.log(person1.displayFullName());",
              explanation:
                "'new' creates an instance.\n" +
                "constructor initializes properties.\n" +
                "'this' refers to person1."
            }
          ]
        },

        {
          id: "sc_day_71_t3",
          title: "Creating Multiple Objects",
          explanation:
            "• Using class, we can create multiple instances.\n" +
            "• Each instance has its own property values.\n" +
            "• Methods are shared through prototype.",
          examples: [
            {
              language: "javascript",
              code:
                "let person1 = new Person('Virat', 'Kohli');\n" +
                "let person2 = new Person('Sachin', 'Tendulkar');\n\n" +
                "console.log(person1);\n" +
                "console.log(person2);",
              explanation:
                "Two separate objects created from same class."
            }
          ]
        },

        {
          id: "sc_day_71_t4",
          title: "Inheritance in Classes",
          explanation:
            "• Inheritance allows one class to inherit properties and methods from another.\n" +
            "• Achieved using the 'extends' keyword.\n" +
            "• Promotes code reusability."
        },

        {
          id: "sc_day_71_t5",
          title: "extends Keyword",
          explanation:
            "• 'extends' creates a child class from parent class.\n" +
            "• Child class inherits methods and properties.\n" +
            "• Parent class is called Superclass.\n" +
            "• Child class is called Subclass."
        },

        {
          id: "sc_day_71_t6",
          title: "super() Keyword",
          explanation:
            "• super() calls the constructor of parent class.\n" +
            "• Must be called before using 'this' in subclass.\n" +
            "• Ensures parent properties are initialized.",
          examples: [
            {
              language: "javascript",
              code:
                "class Animal {\n" +
                "  constructor(name) {\n" +
                "    this.name = name;\n" +
                "  }\n\n" +
                "  eat() {\n" +
                "    return `${this.name} is eating`;\n" +
                "  }\n" +
                "}\n\n" +
                "class Dog extends Animal {\n" +
                "  constructor(name, breed) {\n" +
                "    super(name);\n" +
                "    this.breed = breed;\n" +
                "  }\n" +
                "}\n\n" +
                "let dog1 = new Dog('Rocky', 'Labrador');",
              explanation:
                "Dog inherits from Animal.\n" +
                "super(name) calls Animal constructor."
            }
          ]
        },

        {
          id: "sc_day_71_t7",
          title: "Method Overriding",
          explanation:
            "• When subclass defines a method with same name as superclass.\n" +
            "• Subclass method overrides parent method.\n" +
            "• Allows modifying inherited behavior.",
          examples: [
            {
              language: "javascript",
              code:
                "class Animal {\n" +
                "  makeSound() {\n" +
                "    return 'Animal sound';\n" +
                "  }\n" +
                "}\n\n" +
                "class Dog extends Animal {\n" +
                "  makeSound() {\n" +
                "    return 'Dog barking';\n" +
                "  }\n" +
                "}\n\n" +
                "let dog1 = new Dog();\n" +
                "console.log(dog1.makeSound());",
              explanation:
                "Dog class overrides makeSound method."
            }
          ]
        },

        {
          id: "sc_day_71_t8",
          title: "this in Classes",
          explanation:
            "• In classes, 'this' refers to the instance object.\n" +
            "• Inside constructor → refers to new object.\n" +
            "• Inside methods → refers to object calling method.\n" +
            "• Works similar to constructor functions."
        },

        {
          id: "sc_day_71_t9",
          title: "this in Subclass",
          explanation:
            "• In subclass, 'this' refers to subclass instance.\n" +
            "• super() must be called before accessing 'this'.\n" +
            "• After super(), 'this' can be used normally."
        },

        {
          id: "sc_day_71_t10",
          title: "Interview Recap",
          explanation:
            "• Class is syntactic sugar over constructor functions.\n" +
            "• constructor() initializes properties.\n" +
            "• extends enables inheritance.\n" +
            "• super() calls parent constructor.\n" +
            "• Method overriding modifies parent behavior.\n" +
            "• 'this' refers to instance object."
        }

      ]
    }
  ],
  72: [
    {
      id: "sc_day_72",
      title: "Introduction to Tailwind CSS",
      topics: [

        {
          id: "sc_day_72_t1",
          title: "What is Tailwind CSS?",
          explanation:
            "• Tailwind CSS is a utility-first CSS framework.\n" +
            "• It provides predefined utility classes to style HTML directly.\n" +
            "• Instead of writing custom CSS, we compose UI using small reusable classes.\n" +
            "• It speeds up development and reduces context switching between HTML and CSS.\n" +
            "• It is highly customizable using tailwind.config.js."
        },

        {
          id: "sc_day_72_t2",
          title: "Utility Classes",
          explanation:
            "• Utility classes are single-purpose classes.\n" +
            "• Each class applies one specific CSS property.\n" +
            "• Example: text-center, bg-blue-500, p-4, flex.\n" +
            "• Multiple utilities are combined to design UI.\n" +
            "• This approach avoids writing custom CSS class names."
        },

        {
          id: "sc_day_72_t3",
          title: "Why Use Tailwind CSS?",
          explanation:
            "• Eliminates the need to create and manage custom class names.\n" +
            "• Faster UI development.\n" +
            "• Consistent design system.\n" +
            "• Easy to maintain large applications.\n" +
            "• Popular in modern frontend jobs and interviews."
        },

        {
          id: "sc_day_72_t4",
          title: "Setting Up Tailwind (CDN)",
          explanation:
            "• Tailwind can be added using CDN.\n" +
            "• Add script inside head tag.\n" +
            "• Best for learning and small projects.",
          examples: [
            {
              language: "html",
              code:
                "<!DOCTYPE html>\n" +
                "<html>\n" +
                "  <head>\n" +
                "    <script src=\"https://cdn.tailwindcss.com\"></script>\n" +
                "  </head>\n" +
                "  <body>\n" +
                "    <h1 class=\"text-3xl\">Hello Tailwind</h1>\n" +
                "  </body>\n" +
                "</html>",
              explanation:
                "Tailwind classes can now be used directly inside HTML."
            }
          ]
        },

        {
          id: "sc_day_72_t5",
          title: "Background Utilities",
          explanation:
            "• Tailwind provides gradient utilities.\n" +
            "• bg-gradient-to-r, bg-gradient-to-tl etc.\n" +
            "• Custom background images use square brackets syntax.",
          examples: [
            {
              language: "html",
              code:
                "<div class=\"h-14 bg-gradient-to-r from-cyan-500 to-blue-500\"></div>",
              explanation:
                "Creates horizontal gradient from cyan to blue."
            },
            {
              language: "html",
              code:
                "<div class=\"bg-[url('image.png')]\"></div>",
              explanation:
                "Custom background image using arbitrary value syntax."
            }
          ]
        },

        {
          id: "sc_day_72_t6",
          title: "Centering Content with Flex",
          explanation:
            "• Tailwind makes centering very easy.\n" +
            "• min-h-screen → full viewport height.\n" +
            "• flex → enables flexbox.\n" +
            "• justify-center → horizontal alignment.\n" +
            "• items-center → vertical alignment.",
          examples: [
            {
              language: "html",
              code:
                "<div class=\"min-h-screen flex flex-col justify-center items-center\">\n" +
                "  <h1>Centered Content</h1>\n" +
                "</div>",
              explanation:
                "Content is perfectly centered vertically and horizontally."
            }
          ]
        },

        {
          id: "sc_day_72_t7",
          title: "Text & Spacing Utilities",
          explanation:
            "• text-6xl → large font size.\n" +
            "• mb-6 → margin bottom.\n" +
            "• text-[#102a43] → custom text color.\n" +
            "• Tailwind provides full color palette.",
          examples: [
            {
              language: "html",
              code:
                "<h1 class=\"text-6xl mb-6 text-[#102a43]\">Welcome</h1>",
              explanation:
                "Large heading with margin and custom color."
            }
          ]
        },

        {
          id: "sc_day_72_t8",
          title: "Creating a Card",
          explanation:
            "• bg-white → white background.\n" +
            "• rounded-3xl → rounded corners.\n" +
            "• p-6 → padding.\n" +
            "• flex flex-col → vertical layout.\n" +
            "• items-center → center align content.",
          examples: [
            {
              language: "html",
              code:
                "<div class=\"bg-white rounded-3xl p-6 flex flex-col items-center\">\n" +
                "  <h2 class=\"text-4xl mt-6\">Kiran V</h2>\n" +
                "  <p class=\"text-lg text-center m-4\">Description</p>\n" +
                "</div>",
              explanation:
                "Styled card using only utility classes."
            }
          ]
        },

        {
          id: "sc_day_72_t9",
          title: "Custom Fonts with tailwind.config",
          explanation:
            "• Tailwind allows theme customization.\n" +
            "• Use tailwind.config object.\n" +
            "• Extend fontFamily inside theme.\n" +
            "• Import fonts using Google Fonts.\n" +
            "• Use class like font-roboto.",
          examples: [
            {
              language: "html",
              code:
                "<script>\n" +
                "tailwind.config = {\n" +
                "  theme: {\n" +
                "    extend: {\n" +
                "      fontFamily: {\n" +
                "        roboto: ['Roboto', 'sans-serif'],\n" +
                "      }\n" +
                "    }\n" +
                "  }\n" +
                "}\n" +
                "</script>",
              explanation:
                "Extends Tailwind theme with custom font."
            }
          ]
        },

        {
          id: "sc_day_72_t10",
          title: "Tailwind Default Behavior",
          explanation:
            "• Tailwind resets browser default styles.\n" +
            "• Provides clean foundation.\n" +
            "• Styles must be explicitly defined.\n" +
            "• Ensures consistency across browsers."
        },

        {
          id: "sc_day_72_t11",
          title: "Interview Recap",
          explanation:
            "• Tailwind is utility-first CSS framework.\n" +
            "• Uses small reusable classes.\n" +
            "• CDN setup for quick start.\n" +
            "• Customization via tailwind.config.\n" +
            "• Speeds up UI development.\n" +
            "• Popular in modern frontend projects."
        }

      ]
    }
  ],

  73: [
    {
      id: "sc_day_73",
      title: "Tailwind CSS Grid & Layout (Fitness App)",
      topics: [

        {
          id: "sc_day_73_t1",
          title: "Building a Fitness App Layout",
          explanation:
            "• In this unit, we apply Tailwind utility classes to build a structured layout.\n" +
            "• We use CSS Grid utilities provided by Tailwind.\n" +
            "• Instead of writing custom CSS, we use predefined grid classes.\n" +
            "• The layout contains Header, Sidebar, Main, Ads, and Footer.\n" +
            "• The required layout has 4 columns and 3 rows."
        },

        {
          id: "sc_day_73_t2",
          title: "Tailwind Grid Basics",
          explanation:
            "• grid → creates grid container.\n" +
            "• grid-cols-{n} → creates n equal-width columns.\n" +
            "• grid-rows-{n} → creates n equal-height rows.\n" +
            "• gap-{size} → spacing between grid items.\n" +
            "• col-span-{n} → span across n columns.\n" +
            "• row-span-{n} → span across n rows."
        },

        {
          id: "sc_day_73_t3",
          title: "Creating 4 Column Layout",
          explanation:
            "• First step: define grid container.\n" +
            "• Use grid grid-cols-4 gap-4.\n" +
            "• This creates 4 equal columns with spacing.",
          examples: [
            {
              language: "html",
              code:
                "<div class=\"grid grid-cols-4 gap-4\">\n" +
                "  <div>Item 1</div>\n" +
                "  <div>Item 2</div>\n" +
                "  <div>Item 3</div>\n" +
                "  <div>Item 4</div>\n" +
                "</div>",
              explanation:
                "Creates 4 equal-width columns."
            }
          ]
        },

        {
          id: "sc_day_73_t4",
          title: "Header Spanning Full Width",
          explanation:
            "• Header must span across all 4 columns.\n" +
            "• Use col-span-4.",
          examples: [
            {
              language: "html",
              code:
                "<div class=\"col-span-4 bg-blue-200\">Header</div>",
              explanation:
                "Header spans entire row."
            }
          ]
        },

        {
          id: "sc_day_73_t5",
          title: "Sidebar Layout",
          explanation:
            "• Sidebar occupies 1 column.\n" +
            "• Use col-span-1.\n" +
            "• Positioned on left side."
        },

        {
          id: "sc_day_73_t6",
          title: "Main Section Layout",
          explanation:
            "• Main section occupies 2 columns.\n" +
            "• Use col-span-2.\n" +
            "• Central content area."
        },

        {
          id: "sc_day_73_t7",
          title: "Ads Section",
          explanation:
            "• Ads section occupies 1 column.\n" +
            "• Use col-span-1.\n" +
            "• Positioned on right side."
        },

        {
          id: "sc_day_73_t8",
          title: "Footer Layout",
          explanation:
            "• Footer spans entire width.\n" +
            "• Use col-span-4.\n" +
            "• Appears at bottom of grid."
        },

        {
          id: "sc_day_73_t9",
          title: "Column & Row Position Utilities",
          explanation:
            "• col-start-{n} → starting grid line for column.\n" +
            "• col-end-{n} → ending grid line.\n" +
            "• row-start-{n} → starting grid line for row.\n" +
            "• row-end-{n} → ending grid line.\n" +
            "• Useful for advanced positioning."
        },

        {
          id: "sc_day_73_t10",
          title: "Grid Content Alignment",
          explanation:
            "• place-content-start → aligns entire grid to start.\n" +
            "• place-content-center → centers grid content.\n" +
            "• place-content-end → aligns grid to end.\n" +
            "• Controls placement of whole grid inside container."
        },

        {
          id: "sc_day_73_t11",
          title: "Individual Item Alignment",
          explanation:
            "• justify-self-auto → default horizontal alignment.\n" +
            "• justify-self-start → align item to start horizontally.\n" +
            "• self-auto → default vertical alignment.\n" +
            "• self-start → align item to top vertically.\n" +
            "• Controls alignment per grid item."
        },

        {
          id: "sc_day_73_t12",
          title: "Aligning All Grid Items",
          explanation:
            "• justify-items-start → align all items horizontally to start.\n" +
            "• items-start → align all items vertically to start.\n" +
            "• place-items-start → shorthand for both horizontal & vertical alignment.\n" +
            "• Used to control alignment globally."
        },

        {
          id: "sc_day_73_t13",
          title: "Automatic Row Behavior",
          explanation:
            "• If grid-rows is not defined, rows auto-adjust.\n" +
            "• Height depends on content.\n" +
            "• Items move to next row automatically.\n" +
            "• Grid is content-aware by default."
        },

        {
          id: "sc_day_73_t14",
          title: "Interview Recap",
          explanation:
            "• grid → create grid container.\n" +
            "• grid-cols-4 → 4 equal columns.\n" +
            "• col-span-n → span across columns.\n" +
            "• col-start & row-start → precise positioning.\n" +
            "• place-content & place-items → alignment utilities.\n" +
            "• Tailwind grid replaces custom CSS grid easily."
        }

      ]
    }
  ],

  74: [
    {
      id: "sc_day_74",
      title: "Introduction to Dynamic Web Applications",
      topics: [

        {
          id: "sc_day_74_t1",
          title: "What is a Dynamic Web Application?",
          explanation:
            "• A dynamic web application responds to user interactions.\n" +
            "• Content changes based on user input, data, or real-time updates.\n" +
            "• Unlike static websites, content is not fixed.\n" +
            "• Provides personalized and interactive experiences.\n" +
            "• Examples include Instagram feeds, video recommendations, and live score updates."
        },

        {
          id: "sc_day_74_t2",
          title: "Static vs Dynamic Websites",
          explanation:
            "• Static websites display fixed content.\n" +
            "• Dynamic websites change content in real-time.\n" +
            "• Static sites do not respond to user input.\n" +
            "• Dynamic apps use JavaScript and backend communication.\n" +
            "• Modern applications are mostly dynamic."
        },

        {
          id: "sc_day_74_t3",
          title: "Key Components of Dynamic Applications",
          explanation:
            "• Client-Server Communication → Browser sends request, server responds with data.\n" +
            "• DOM Manipulation → JavaScript updates HTML & CSS dynamically.\n" +
            "• Application Logic → Defines behavior based on user actions.\n" +
            "• Real-Time Updates → Data refresh without page reload."
        },

        {
          id: "sc_day_74_t4",
          title: "Role of HTML, CSS, and JavaScript",
          explanation:
            "• HTML provides structure of the web page.\n" +
            "• CSS styles and designs the page.\n" +
            "• JavaScript adds interactivity and dynamic behavior.\n" +
            "• Together they form the foundation of web development."
        },

        {
          id: "sc_day_74_t5",
          title: "Technologies Used",
          explanation:
            "• JavaScript → Primary language for dynamic web apps.\n" +
            "• Runs on both client-side and server-side (Node.js).\n" +
            "• Web Assembly → Alternative for high-performance applications.\n" +
            "• Backend technologies provide APIs and data services."
        },

        {
          id: "sc_day_74_t6",
          title: "Why JavaScript is Important",
          explanation:
            "• Supported by all major browsers.\n" +
            "• Enables DOM manipulation.\n" +
            "• Handles events like clicks and form submissions.\n" +
            "• Used to build dashboards, animations, and games.\n" +
            "• Backbone of modern frontend frameworks (React, Angular, Vue)."
        },

        {
          id: "sc_day_74_t7",
          title: "Real World Examples",
          explanation:
            "• Instagram personalized feed.\n" +
            "• YouTube video recommendations.\n" +
            "• Live cricket scores.\n" +
            "• Traffic updates.\n" +
            "• E-commerce cart updates."
        },

        {
          id: "sc_day_74_t8",
          title: "Interview Recap",
          explanation:
            "• Dynamic web apps change content based on user interaction.\n" +
            "• JavaScript enables interactivity.\n" +
            "• HTML → structure, CSS → styling, JS → behavior.\n" +
            "• Client-server communication is essential.\n" +
            "• Most modern applications are dynamic."
        }

      ]
    }
  ],

  75: [
    {
      id: "sc_day_75",
      title: "Building Responsive Websites with Tailwind CSS",
      topics: [

        {
          id: "sc_day_75_t1",
          title: "Responsive Design in Tailwind",
          explanation:
            "• Responsive design ensures website adapts to different screen sizes.\n" +
            "• Tailwind uses mobile-first approach.\n" +
            "• Base styles apply to small screens by default.\n" +
            "• Larger screens override using breakpoint prefixes.\n" +
            "• Makes responsive design fast and clean."
        },

        {
          id: "sc_day_75_t2",
          title: "Tailwind Breakpoints",
          explanation:
            "• sm: → Small devices (≥ 640px).\n" +
            "• md: → Medium devices (≥ 768px).\n" +
            "• lg: → Large devices (≥ 1024px).\n" +
            "• xl: → Extra large devices (≥ 1280px).\n" +
            "• Prefix syntax: md:text-xl means apply from medium screen and above."
        },

        {
          id: "sc_day_75_t3",
          title: "Mobile First Strategy",
          explanation:
            "• Default classes apply to mobile.\n" +
            "• Add breakpoint prefix to modify for larger screens.\n" +
            "• Example: col-span-3 md:col-span-2.\n" +
            "• Means: 3 columns on small screen, 2 columns on medium+ screens."
        },

        {
          id: "sc_day_75_t4",
          title: "Hiding Elements Responsively",
          explanation:
            "• hidden → hides element.\n" +
            "• block → displays element.\n" +
            "• md:block → show element from medium screen onwards.\n" +
            "• Useful for sidebars, ads, navigation menus.",
          examples: [
            {
              language: "html",
              code:
                "<div class=\"hidden md:block md:col-span-1\">\n" +
                "  Ads Section\n" +
                "</div>",
              explanation:
                "Hidden on small devices. Visible from medium screens."
            }
          ]
        },

        {
          id: "sc_day_75_t5",
          title: "Responsive Column Spanning",
          explanation:
            "• col-span-{n} → default span.\n" +
            "• md:col-span-{n} → span changes on medium screens.\n" +
            "• Allows layout flexibility across devices.",
          examples: [
            {
              language: "html",
              code:
                "<div class=\"col-span-3 md:col-span-2\">\n" +
                "  Main Section\n" +
                "</div>",
              explanation:
                "Spans 3 columns on small screens.\n" +
                "Spans 2 columns on medium and above."
            }
          ]
        },

        {
          id: "sc_day_75_t6",
          title: "Responsive Grid Layout Example",
          explanation:
            "• grid grid-cols-4 gap-4 → 4 column layout.\n" +
            "• Combine with responsive spans.\n" +
            "• Elements adapt based on screen size.",
          examples: [
            {
              language: "html",
              code:
                "<div class=\"grid grid-cols-4 gap-4\">\n" +
                "  <header class=\"col-span-4\">Header</header>\n" +
                "  <aside class=\"col-span-1\">Sidebar</aside>\n" +
                "  <main class=\"col-span-3 md:col-span-2\">Main</main>\n" +
                "  <div class=\"hidden md:block md:col-span-1\">Ads</div>\n" +
                "  <footer class=\"col-span-4\">Footer</footer>\n" +
                "</div>",
              explanation:
                "Creates responsive 4-column layout.\n" +
                "Ads hidden on small screens.\n" +
                "Main adjusts width based on device size."
            }
          ]
        },

        {
          id: "sc_day_75_t7",
          title: "Why Tailwind is Powerful for Responsiveness",
          explanation:
            "• No media queries required manually.\n" +
            "• Prefix-based system is intuitive.\n" +
            "• Mobile-first by default.\n" +
            "• Easy to maintain large applications.\n" +
            "• Faster than writing custom CSS media queries."
        },

        {
          id: "sc_day_75_t8",
          title: "Interview Recap",
          explanation:
            "• Tailwind uses mobile-first responsive design.\n" +
            "• Breakpoints: sm, md, lg, xl.\n" +
            "• Use prefix syntax like md:text-xl.\n" +
            "• hidden md:block hides on mobile, shows on medium.\n" +
            "• col-span responsive classes adjust layout.\n" +
            "• Tailwind removes need for custom media queries."
        }

      ]
    }
  ],

  76: [
    {
      id: "sc_day_76",
      title: "Building Responsive Websites using GenAI",
      topics: [

        {
          id: "sc_day_76_t1",
          title: "Choosing a Website to Build",
          explanation:
            "• Before building a website, decide the type of website.\n" +
            "• Take inspiration from real-world applications.\n" +
            "• Plan layout, sections, and target audience.\n" +
            "• A clear plan improves output quality from GenAI tools."
        },

        {
          id: "sc_day_76_t2",
          title: "Real-World Application References",
          explanation:
            "• Netflix → Streaming platform.\n" +
            "• Amazon → E-commerce platform.\n" +
            "• Zomato → Food delivery platform.\n" +
            "• Real applications help understand layout structure.\n" +
            "• Observing UI improves design thinking."
        },

        {
          id: "sc_day_76_t3",
          title: "Design Reference Platforms",
          explanation:
            "• Envato → Templates marketplace.\n" +
            "• Colorlib → Free themes.\n" +
            "• UI8 → UI kits and resources.\n" +
            "• Dribbble → Design inspiration.\n" +
            "• Use references before prompting AI."
        },

        {
          id: "sc_day_76_t4",
          title: "Website Plan",
          explanation:
            "• A website plan describes structure clearly.\n" +
            "• Example sections: Header, Hero, Content, Footer.\n" +
            "• Define layout before generating code.\n" +
            "• Better plan = Better AI output."
        },

        {
          id: "sc_day_76_t5",
          title: "Requirements for Building Websites",
          explanation:
            "• Screenshot → Visual reference.\n" +
            "• Design File (Figma, Adobe XD) → Structured mockup.\n" +
            "• Written Plan → Text description of layout.\n" +
            "• At least one reference is required for accuracy."
        },

        {
          id: "sc_day_76_t6",
          title: "GenAI Tool Categories",
          explanation:
            "• General Purpose Tools → Code generation assistants.\n" +
            "• No Code Platforms → Drag & drop builders.\n" +
            "• AI Coding Tools → Advanced AI development platforms.\n" +
            "• Choose tool based on complexity."
        },

        {
          id: "sc_day_76_t7",
          title: "General Purpose AI Tools",
          explanation:
            "• GPT (ChatGPT).\n" +
            "• Gemini.\n" +
            "• Claude.\n" +
            "• DeepSeek.\n" +
            "• Best for generating HTML/CSS/JS quickly."
        },

        {
          id: "sc_day_76_t8",
          title: "Writing Effective Prompts",
          explanation:
            "• Be detailed and specific.\n" +
            "• Mention layout, fonts, colors, spacing.\n" +
            "• Specify image sources like Unsplash.\n" +
            "• Ask for 100% accuracy with mockup.\n" +
            "• Clear prompts = better code quality."
        },

        {
          id: "sc_day_76_t9",
          title: "Compare and Tweak",
          explanation:
            "• Always compare AI output with reference.\n" +
            "• Adjust spacing, fonts, shadows.\n" +
            "• Debug differences manually.\n" +
            "• Refine using follow-up prompts."
        },

        {
          id: "sc_day_76_t10",
          title: "Debug & Explain Strategy",
          explanation:
            "• DEBUG → Combine technical knowledge + AI.\n" +
            "• EXPLAIN → Ask AI to justify its approach.\n" +
            "• Iterative improvement is key.\n" +
            "• Never blindly accept AI output."
        },

        {
          id: "sc_day_76_t11",
          title: "No Code Platforms",
          explanation:
            "• Wix.\n" +
            "• Hostinger.\n" +
            "• Squarespace.\n" +
            "• Durable.\n" +
            "• Drag-and-drop website builders."
        },

        {
          id: "sc_day_76_t12",
          title: "Advantages of No Code Tools",
          explanation:
            "• Quick development.\n" +
            "• No coding knowledge required.\n" +
            "• Beginner friendly.\n" +
            "• Faster publishing."
        },

        {
          id: "sc_day_76_t13",
          title: "Disadvantages of No Code Tools",
          explanation:
            "• Limited customization.\n" +
            "• Hard to build complex apps.\n" +
            "• Not scalable for large systems.\n" +
            "• Limited backend control."
        },

        {
          id: "sc_day_76_t14",
          title: "AI Coding Tools",
          explanation:
            "• Google AI Studio.\n" +
            "• Replit.\n" +
            "• Lovable.\n" +
            "• Rocket.\n" +
            "• DeepSeek.\n" +
            "• Used for building & deploying apps."
        },

        {
          id: "sc_day_76_t15",
          title: "Building Variants",
          explanation:
            "• Variants are creative versions of same design.\n" +
            "• Useful for interviews.\n" +
            "• Shows creativity & flexibility.\n" +
            "• Demonstrates technical strength + AI skills."
        },

        {
          id: "sc_day_76_t16",
          title: "Using GenAI in Interviews",
          explanation:
            "• Build multiple variants quickly.\n" +
            "• Showcase debugging skills.\n" +
            "• Combine technical logic + AI usage.\n" +
            "• Present professional-level designs faster."
        },

        {
          id: "sc_day_76_t17",
          title: "Key Takeaways",
          explanation:
            "• Quality of prompt determines quality of output.\n" +
            "• Always compare and refine.\n" +
            "• No-code tools are fast but limited.\n" +
            "• AI coding tools offer more flexibility.\n" +
            "• Technical knowledge + AI = powerful combination."
        }

      ]
    }
  ],

  77: [
    {
      id: "sc_day_77",
      title: "DOM and Event Fundamentals",
      topics: [

        {
          id: "sc_day_77_t1",
          title: "JavaScript Variables",
          explanation:
            "• Variables are containers used to store values.\n" +
            "• Use 'let' keyword to declare variables.\n" +
            "• Variables can be declared first and assigned later.\n" +
            "• If a variable is declared but not assigned, it returns undefined.\n" +
            "• Variables can store strings, numbers, objects, etc."
        },

        {
          id: "sc_day_77_t2",
          title: "Variable Declaration & Assignment",
          explanation:
            "• Declaration → let message;\n" +
            "• Assignment → message = 'Hello';\n" +
            "• Combined → let message = 'Hello';\n" +
            "• '=' is called assignment operator.\n" +
            "• Console can be used to print variable values.",
          examples: [
            {
              language: "javascript",
              code:
                "let message;\n" +
                "console.log(message); // undefined\n\n" +
                "message = 'Hello Rahul';\n" +
                "console.log(message);",
              explanation:
                "Variable initially undefined.\n" +
                "After assignment, it stores the string value."
            }
          ]
        },

        {
          id: "sc_day_77_t3",
          title: "What is DOM?",
          explanation:
            "• DOM stands for Document Object Model.\n" +
            "• It is a tree structure created by the browser.\n" +
            "• Each HTML element becomes a node (object).\n" +
            "• JavaScript can manipulate HTML using DOM.\n" +
            "• DOM enables dynamic web applications."
        },

        {
          id: "sc_day_77_t4",
          title: "Document Object",
          explanation:
            "• document is the entry point of DOM.\n" +
            "• All HTML elements are accessed through document.\n" +
            "• Example: document.getElementById().\n" +
            "• Without document, we cannot access elements."
        },

        {
          id: "sc_day_77_t5",
          title: "HTML DOM Tree",
          explanation:
            "• HTML is represented as a tree structure.\n" +
            "• Each element is a node.\n" +
            "• Parent-child relationships exist.\n" +
            "• Helps JavaScript navigate and modify elements."
        },

        {
          id: "sc_day_77_t6",
          title: "Selecting Elements - getElementById",
          explanation:
            "• Used to select an element with specific ID.\n" +
            "• Syntax: document.getElementById('idName').\n" +
            "• Returns the element object.\n" +
            "• Allows further manipulation.",
          examples: [
            {
              language: "javascript",
              code:
                "let heading = document.getElementById('headingElement');\n" +
                "console.log(heading);",
              explanation:
                "Selects element having id='headingElement'."
            }
          ]
        },

        {
          id: "sc_day_77_t7",
          title: "textContent Property",
          explanation:
            "• Used to get or change text inside an element.\n" +
            "• Replaces existing text.\n" +
            "• Commonly used for dynamic updates.\n" +
            "• Works on any HTML element."
        },

        {
          id: "sc_day_77_t8",
          title: "style Property",
          explanation:
            "• Used to change inline CSS styles via JavaScript.\n" +
            "• Use camelCase naming for CSS properties.\n" +
            "• Example: backgroundColor, fontFamily.\n" +
            "• Allows dynamic styling.\n" +
            "• Only affects selected element."
        },

        {
          id: "sc_day_77_t9",
          title: "Events in JavaScript",
          explanation:
            "• Events are user interactions.\n" +
            "• Examples: click, keypress, scroll.\n" +
            "• Events trigger functions.\n" +
            "• Makes web pages interactive.\n" +
            "• Core concept in dynamic apps."
        },

        {
          id: "sc_day_77_t10",
          title: "onclick Event",
          explanation:
            "• Triggered when user clicks an element.\n" +
            "• Assign function to onclick attribute.\n" +
            "• Function executes when clicked.\n" +
            "• Used to manipulate DOM dynamically.",
          examples: [
            {
              language: "html",
              code:
                "<h1 id='headingElement'>Web Technologies</h1>\n" +
                "<button onclick='manipulateStyles()'>Change Heading</button>",
              explanation:
                "Button calls manipulateStyles function when clicked."
            },
            {
              language: "javascript",
              code:
                "function manipulateStyles() {\n" +
                "  let heading = document.getElementById('headingElement');\n" +
                "  heading.textContent = '4.O Technologies';\n" +
                "  heading.style.color = 'blue';\n" +
                "}",
              explanation:
                "Changes text and color dynamically on click."
            }
          ]
        },

        {
          id: "sc_day_77_t11",
          title: "Dynamic Web Application Flow",
          explanation:
            "• User clicks button.\n" +
            "• Event triggers JavaScript function.\n" +
            "• JavaScript manipulates DOM.\n" +
            "• HTML updates instantly without page reload.\n" +
            "• This creates dynamic behavior."
        },

        {
          id: "sc_day_77_t12",
          title: "Interview Recap",
          explanation:
            "• Variables store data.\n" +
            "• DOM represents HTML as objects.\n" +
            "• document is entry point.\n" +
            "• getElementById selects elements.\n" +
            "• textContent changes text.\n" +
            "• style modifies CSS dynamically.\n" +
            "• Events trigger interactivity.\n" +
            "• DOM + Events = Dynamic Web Apps."
        }

      ]
    }
  ],

  78: [
    {
      id: "sc_day_78",
      title: "DOM and Event Fundamentals",
      topics: [
        {
          id: "sc_day_78_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "DOM and Event Fundamentals". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_78_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "DOM and Event Fundamentals" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_78_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "DOM and Event Fundamentals". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  79: [
    {
      id: "sc_day_79",
      title: "Advanced DOM Manipulations & Dynamic App Building",
      topics: [

        {
          id: "sc_day_79_t1",
          title: "Creating Elements Dynamically",
          explanation:
            "• document.createElement() creates a new HTML element.\n" +
            "• The element is created in memory (not visible yet).\n" +
            "• We must append it to the DOM to display it.\n" +
            "• Used in dynamic web applications.",
          examples: [
            {
              language: "javascript",
              code:
                "let h1Element = document.createElement('h1');\n" +
                "h1Element.textContent = 'Web Technologies';\n" +
                "console.log(h1Element);",
              explanation:
                "Creates an <h1> element dynamically."
            }
          ]
        },

        {
          id: "sc_day_79_t2",
          title: "Appending Elements - appendChild()",
          explanation:
            "• appendChild() adds element to DOM.\n" +
            "• Can append to document.body.\n" +
            "• Can append to existing container.\n" +
            "• Makes created element visible.",
          examples: [
            {
              language: "javascript",
              code:
                "document.body.appendChild(h1Element);",
              explanation:
                "Appends element to body."
            }
          ]
        },

        {
          id: "sc_day_79_t3",
          title: "Adding Class Names Dynamically",
          explanation:
            "• classList.add() adds CSS classes.\n" +
            "• Multiple classes can be added.\n" +
            "• Used for styling dynamically.\n" +
            "• Works well with Tailwind utility classes."
        },

        {
          id: "sc_day_79_t4",
          title: "Removing Class Names",
          explanation:
            "• classList.remove() removes CSS classes.\n" +
            "• Used to toggle styles dynamically.\n" +
            "• Helps in interactive UI design.\n" +
            "• Often used with buttons and themes."
        },

        {
          id: "sc_day_79_t5",
          title: "Adding Event Listeners Dynamically",
          explanation:
            "• Events can be attached to dynamically created elements.\n" +
            "• Use onclick or addEventListener().\n" +
            "• Makes dynamic elements interactive.\n" +
            "• Essential in dynamic apps."
        },

        {
          id: "sc_day_79_t6",
          title: "Building Groceries App Dynamically",
          explanation:
            "• Create background container.\n" +
            "• Add heading element.\n" +
            "• Create list container.\n" +
            "• Add list items dynamically.\n" +
            "• Add button at bottom.\n" +
            "• Entire UI built using JavaScript."
        },

        {
          id: "sc_day_79_t7",
          title: "Creating Background Container",
          explanation:
            "• Create div element.\n" +
            "• Add Tailwind classes dynamically.\n" +
            "• Append to body.\n" +
            "• Acts as main wrapper."
        },

        {
          id: "sc_day_79_t8",
          title: "Using Loops for Dynamic Content",
          explanation:
            "• Loops execute code multiple times.\n" +
            "• Used to generate multiple elements.\n" +
            "• Common loop types: for, for...of, while.\n" +
            "• For arrays, for...of is clean and readable."
        },

        {
          id: "sc_day_79_t9",
          title: "for...of Loop",
          explanation:
            "• Iterates over iterable objects (arrays).\n" +
            "• Syntax: for (let item of array).\n" +
            "• Used to create list items dynamically.\n" +
            "• Cleaner than traditional for loop.",
          examples: [
            {
              language: "javascript",
              code:
                "let groceryItems = ['Milk', 'Peanut Butter', 'Noodles'];\n\n" +
                "for (let item of groceryItems) {\n" +
                "  let li = document.createElement('li');\n" +
                "  li.textContent = item;\n" +
                "  listContainerEl.appendChild(li);\n" +
                "}",
              explanation:
                "Creates multiple list items dynamically."
            }
          ]
        },

        {
          id: "sc_day_79_t10",
          title: "Adding Button Dynamically",
          explanation:
            "• Create button element.\n" +
            "• Add classes using classList.add().\n" +
            "• Set textContent.\n" +
            "• Append to container.\n" +
            "• Used for call-to-action."
        },

        {
          id: "sc_day_79_t11",
          title: "Dynamic App Flow",
          explanation:
            "• Create elements.\n" +
            "• Style elements.\n" +
            "• Append to DOM.\n" +
            "• Add events.\n" +
            "• Use loops for repetition.\n" +
            "• Entire UI built programmatically."
        },

        {
          id: "sc_day_79_t12",
          title: "Interview Recap",
          explanation:
            "• createElement() creates new DOM nodes.\n" +
            "• appendChild() adds element to DOM.\n" +
            "• classList.add() applies styles.\n" +
            "• classList.remove() removes styles.\n" +
            "• Loops generate repeated content.\n" +
            "• DOM manipulation builds dynamic apps.\n" +
            "• No page reload required."
        }

      ]
    }
  ],

  80: [
    {
      id: "sc_day_80",
      title: "JavaScript Schedulers & Asynchronous Execution",
      topics: [

        {
          id: "sc_day_80_t1",
          title: "Synchronous JavaScript",
          explanation:
            "• Synchronous code runs line by line.\n" +
            "• Each statement waits for the previous one to finish.\n" +
            "• It blocks further execution until complete.\n" +
            "• Simple and predictable execution flow.\n" +
            "• Default behavior of JavaScript."
        },

        {
          id: "sc_day_80_t2",
          title: "Asynchronous JavaScript",
          explanation:
            "• Asynchronous code does not block execution.\n" +
            "• It starts a task and moves forward.\n" +
            "• When task completes, callback function runs.\n" +
            "• Used for timers, API calls, events.\n" +
            "• Makes applications responsive."
        },

        {
          id: "sc_day_80_t3",
          title: "Synchronous vs Asynchronous",
          explanation:
            "• Synchronous: One task at a time.\n" +
            "• Asynchronous: Start task and continue.\n" +
            "• Synchronous blocks execution.\n" +
            "• Asynchronous is non-blocking.\n" +
            "• Async is slightly complex but powerful."
        },

        {
          id: "sc_day_80_t4",
          title: "JavaScript Schedulers",
          explanation:
            "• Built-in asynchronous timer functions.\n" +
            "• Used to delay execution.\n" +
            "• Used to repeat execution.\n" +
            "• Used for time-based operations.\n" +
            "• They schedule callback functions."
        },

        {
          id: "sc_day_80_t5",
          title: "setInterval()",
          explanation:
            "• Executes function repeatedly.\n" +
            "• Runs at specified time interval.\n" +
            "• Delay is in milliseconds.\n" +
            "• Continues until stopped.\n" +
            "• Returns a unique ID."
        },

        {
          id: "sc_day_80_t6",
          title: "clearInterval()",
          explanation:
            "• Stops a running setInterval().\n" +
            "• Requires the unique ID.\n" +
            "• Without ID, cannot cancel interval.\n" +
            "• Used to prevent infinite execution."
        },

        {
          id: "sc_day_80_t7",
          title: "Understanding null",
          explanation:
            "• undefined → variable declared but no value assigned.\n" +
            "• null → intentionally empty.\n" +
            "• Often used for future assignment.\n" +
            "• Commonly used for scheduler ID variables."
        },

        {
          id: "sc_day_80_t8",
          title: "setTimeout()",
          explanation:
            "• Executes function only once.\n" +
            "• Runs after specified delay.\n" +
            "• Does not repeat automatically.\n" +
            "• Returns unique ID."
        },

        {
          id: "sc_day_80_t9",
          title: "clearTimeout()",
          explanation:
            "• Cancels scheduled setTimeout().\n" +
            "• Requires timeout ID.\n" +
            "• Must be called before execution."
        },

        {
          id: "sc_day_80_t10",
          title: "Scheduler Flow",
          explanation:
            "• JavaScript registers timer.\n" +
            "• Timer runs in browser environment.\n" +
            "• After delay, callback is pushed to event queue.\n" +
            "• Event loop executes callback.\n" +
            "• Non-blocking behavior maintained."
        },

        {
          id: "sc_day_80_t11",
          title: "Interview Recap",
          explanation:
            "• Synchronous blocks execution.\n" +
            "• Asynchronous allows parallel task scheduling.\n" +
            "• setInterval → repeated execution.\n" +
            "• setTimeout → single execution.\n" +
            "• clearInterval & clearTimeout stop schedulers.\n" +
            "• null shows intentional empty value.\n" +
            "• Schedulers use callback functions."
        }

      ]
    }
  ],

  81: [
    {
      id: "sc_day_81",
      title: "Event Listeners, Operators & Event Object",
      topics: [

        {
          id: "sc_day_81_t1",
          title: "Event Listeners Overview",
          explanation:
            "• Event listeners allow JavaScript to respond to user actions.\n" +
            "• Events include click, keydown, keyup, mouse events, etc.\n" +
            "• JavaScript provides three ways to attach event listeners.\n" +
            "• Used to build interactive applications."
        },

        {
          id: "sc_day_81_t2",
          title: "Inline Event Listeners",
          explanation:
            "• Event added directly in HTML element.\n" +
            "• Uses onclick attribute.\n" +
            "• Simple but not recommended for large apps.\n" +
            "• Mixes HTML and JavaScript.",
          examples: [
            {
              language: "html",
              code:
                "<button onclick='greeting()'>Greet</button>",
              explanation:
                "Calls greeting() function when clicked."
            }
          ]
        },

        {
          id: "sc_day_81_t3",
          title: "onevent Listener (onclick)",
          explanation:
            "• Event assigned using element.onclick.\n" +
            "• Cleaner than inline method.\n" +
            "• Can overwrite previous onclick handler.\n" +
            "• Not ideal for multiple listeners."
        },

        {
          id: "sc_day_81_t4",
          title: "addEventListener()",
          explanation:
            "• Modern and recommended approach.\n" +
            "• Allows multiple event listeners.\n" +
            "• Separates HTML and JavaScript.\n" +
            "• Syntax: element.addEventListener(event, callback);",
          examples: [
            {
              language: "javascript",
              code:
                "let btn = document.getElementById('greetBtn');\n" +
                "btn.addEventListener('click', function() {\n" +
                "  console.log('Hi Rahul');\n" +
                "});",
              explanation:
                "Adds click event listener using modern method."
            }
          ]
        },

        {
          id: "sc_day_81_t5",
          title: "Comparison Operators",
          explanation:
            "• == compares values only.\n" +
            "• === compares value and type.\n" +
            "• != and !== check inequality.\n" +
            "• >, <, >=, <= compare numeric values.\n" +
            "• Prefer === for strict comparison."
        },

        {
          id: "sc_day_81_t6",
          title: "Logical Operators",
          explanation:
            "• && (AND) → true if both conditions true.\n" +
            "• || (OR) → true if one condition true.\n" +
            "• ! (NOT) → reverses boolean value.\n" +
            "• Used in conditional statements.\n" +
            "• Frequently used in validation logic."
        },

        {
          id: "sc_day_81_t7",
          title: "Keyboard Events",
          explanation:
            "• Triggered by keyboard interaction.\n" +
            "• keydown → when key is pressed.\n" +
            "• keyup → when key is released.\n" +
            "• Useful for input validation and shortcuts."
        },

        {
          id: "sc_day_81_t8",
          title: "Event Object",
          explanation:
            "• Automatically created when event occurs.\n" +
            "• Contains information about the event.\n" +
            "• Passed as parameter in callback function.\n" +
            "• Has properties and methods."
        },

        {
          id: "sc_day_81_t9",
          title: "event.type",
          explanation:
            "• Returns type of event.\n" +
            "• Example: click, keydown.\n" +
            "• Useful for debugging.\n" +
            "• Helps identify event source."
        },

        {
          id: "sc_day_81_t10",
          title: "event.target",
          explanation:
            "• Refers to element that triggered event.\n" +
            "• Useful in dynamic elements.\n" +
            "• Commonly used in event delegation.\n" +
            "• Allows flexible event handling."
        },

        {
          id: "sc_day_81_t11",
          title: "event.key",
          explanation:
            "• Used in keyboard events.\n" +
            "• Returns value of pressed key.\n" +
            "• Example: 'Enter', 'a', '1'.\n" +
            "• Helpful for keyboard-based logic."
        },

        {
          id: "sc_day_81_t12",
          title: "Interview Recap",
          explanation:
            "• addEventListener is best practice.\n" +
            "• Inline and onclick are older approaches.\n" +
            "• === is safer than ==.\n" +
            "• Logical operators control conditions.\n" +
            "• event object gives detailed event info.\n" +
            "• event.target identifies triggering element.\n" +
            "• event.key used in keyboard events.\n" +
            "• Events make web apps interactive."
        }

      ]
    }
  ],

  82: [
    {
      id: "sc_day_82",
      title: "JavaScript Promises & Asynchronous Flow",
      topics: [

        {
          id: "sc_day_82_t1",
          title: "Synchronous JavaScript",
          explanation:
            "• Executes line by line.\n" +
            "• Each statement waits for the previous one.\n" +
            "• Blocking behavior.\n" +
            "• Simple execution model.\n" +
            "• Default JavaScript behavior."
        },

        {
          id: "sc_day_82_t2",
          title: "Asynchronous JavaScript",
          explanation:
            "• Does not block execution.\n" +
            "• Starts a task and moves forward.\n" +
            "• Callback runs when task completes.\n" +
            "• Used for timers, APIs, file handling.\n" +
            "• Makes apps responsive."
        },

        {
          id: "sc_day_82_t3",
          title: "What is a Promise?",
          explanation:
            "• A Promise is an object representing a future result.\n" +
            "• It handles async operations.\n" +
            "• Can succeed or fail.\n" +
            "• Provides structured async handling.\n" +
            "• Avoids callback confusion."
        },

        {
          id: "sc_day_82_t4",
          title: "Promise States",
          explanation:
            "• Pending → Task in progress.\n" +
            "• Fulfilled → Task completed successfully.\n" +
            "• Rejected → Task failed.\n" +
            "• Once settled, state never changes.\n" +
            "• Only one final state possible."
        },

        {
          id: "sc_day_82_t5",
          title: "Creating a Promise",
          explanation:
            "• Use new Promise().\n" +
            "• Takes a function with resolve & reject.\n" +
            "• Call resolve() when success.\n" +
            "• Call reject() when failure.\n" +
            "• Defines async behavior."
        },

        {
          id: "sc_day_82_t6",
          title: "resolve() and reject()",
          explanation:
            "• resolve(value) → Promise becomes fulfilled.\n" +
            "• reject(error) → Promise becomes rejected.\n" +
            "• Only one of them runs.\n" +
            "• Determines final state.\n" +
            "• Passes data to handlers."
        },

        {
          id: "sc_day_82_t7",
          title: "Consuming Promises with .then()",
          explanation:
            "• .then() runs on success.\n" +
            "• Receives resolved value.\n" +
            "• Can chain multiple .then().\n" +
            "• Returns a new promise.\n" +
            "• Enables sequential async steps."
        },

        {
          id: "sc_day_82_t8",
          title: "Handling Errors with .catch()",
          explanation:
            "• .catch() runs on rejection.\n" +
            "• Receives error message.\n" +
            "• Handles failures gracefully.\n" +
            "• Prevents unhandled errors.\n" +
            "• Only runs if promise fails."
        },

        {
          id: "sc_day_82_t9",
          title: "Promise Chaining",
          explanation:
            "• Multiple .then() calls chained.\n" +
            "• Each step depends on previous.\n" +
            "• Must return next promise.\n" +
            "• If any step fails → .catch() runs.\n" +
            "• Cleaner async sequencing."
        },

        {
          id: "sc_day_82_t10",
          title: "Returning Promises in .then()",
          explanation:
            "• Must return promise for proper chaining.\n" +
            "• If not returned → next .then() runs immediately.\n" +
            "• Ensures correct execution order.\n" +
            "• Critical for multi-step workflows.\n" +
            "• Common interview trap."
        },

        {
          id: "sc_day_82_t11",
          title: "Schedulers vs Promises",
          explanation:
            "• setTimeout schedules delayed execution.\n" +
            "• Promises handle async results.\n" +
            "• Schedulers → time-based tasks.\n" +
            "• Promises → future value handling.\n" +
            "• Promises support error management."
        },

        {
          id: "sc_day_82_t12",
          title: "Real-World Example (Network Simulation)",
          explanation:
            "• setTimeout simulates API delay.\n" +
            "• Promise wraps async behavior.\n" +
            "• resolve returns user data.\n" +
            "• .then() handles success.\n" +
            "• .catch() handles failure."
        },

        {
          id: "sc_day_82_t13",
          title: "Interview Recap",
          explanation:
            "• Promise handles future results.\n" +
            "• States: Pending, Fulfilled, Rejected.\n" +
            "• resolve() → success.\n" +
            "• reject() → failure.\n" +
            "• .then() handles success.\n" +
            "• .catch() handles errors.\n" +
            "• Must return promises for chaining.\n" +
            "• Better than using only setTimeout."
        }

      ]
    }
  ],

  83: [
    {
      id: "sc_day_83",
      title: "Custom Promises, Async/Await & Error Handling",
      topics: [

        {
          id: "sc_day_83_t1",
          title: "Why Create Custom Promises?",
          explanation:
            "• For custom validation logic.\n" +
            "• For wrapping async operations.\n" +
            "• For simulating API calls.\n" +
            "• For reusable async functions.\n" +
            "• For better error handling."
        },

        {
          id: "sc_day_83_t2",
          title: "new Promise() Constructor",
          explanation:
            "• Creates a promise object.\n" +
            "• Takes executor function (resolve, reject).\n" +
            "• resolve() → success.\n" +
            "• reject() → failure.\n" +
            "• Moves promise from pending to final state."
        },

        {
          id: "sc_day_83_t3",
          title: "Promise Returning Functions",
          explanation:
            "• Wrap promises inside functions.\n" +
            "• Makes them reusable.\n" +
            "• Accept parameters.\n" +
            "• Clean architecture.\n" +
            "• Common in APIs."
        },

        {
          id: "sc_day_83_t4",
          title: "Passing Data via resolve()",
          explanation:
            "• resolve() can return strings.\n" +
            "• Can return objects.\n" +
            "• Can return arrays.\n" +
            "• Used to pass async results.\n" +
            "• Accessible inside .then() or await."
        },

        {
          id: "sc_day_83_t5",
          title: "Simulating Async with setTimeout",
          explanation:
            "• Wrap setTimeout inside Promise.\n" +
            "• Simulates API delay.\n" +
            "• Useful for testing.\n" +
            "• Demonstrates async behavior.\n" +
            "• Common interview example."
        },

        {
          id: "sc_day_83_t6",
          title: "Promise Chaining",
          explanation:
            "• Chain multiple .then().\n" +
            "• Must return next promise.\n" +
            "• If one fails → .catch() runs.\n" +
            "• Sequential async flow.\n" +
            "• Prevents callback nesting."
        },

        {
          id: "sc_day_83_t7",
          title: "Async/Await Introduction",
          explanation:
            "• Modern syntax for promises.\n" +
            "• Makes async code readable.\n" +
            "• Looks like synchronous code.\n" +
            "• Built on top of promises.\n" +
            "• Cleaner than chaining."
        },

        {
          id: "sc_day_83_t8",
          title: "async Keyword",
          explanation:
            "• Added before function.\n" +
            "• Makes function return a promise.\n" +
            "• Allows use of await.\n" +
            "• Automatically wraps return value.\n" +
            "• Required for await usage."
        },

        {
          id: "sc_day_83_t9",
          title: "await Keyword",
          explanation:
            "• Used before a promise.\n" +
            "• Pauses execution inside async function.\n" +
            "• Waits until promise resolves.\n" +
            "• Makes code sequential.\n" +
            "• Cannot be used outside async function."
        },

        {
          id: "sc_day_83_t10",
          title: "Multiple await Statements",
          explanation:
            "• Executes promises sequentially.\n" +
            "• Waits for each to finish.\n" +
            "• Cleaner than nested .then().\n" +
            "• Useful for step-by-step workflows.\n" +
            "• Easier debugging."
        },

        {
          id: "sc_day_83_t11",
          title: "Async Functions Always Return Promises",
          explanation:
            "• Even normal return values become promises.\n" +
            "• greet() returns Promise.\n" +
            "• Must use await or .then() to get value.\n" +
            "• Important interview question.\n" +
            "• Automatic wrapping behavior."
        },

        {
          id: "sc_day_83_t12",
          title: "Error Handling with try-catch",
          explanation:
            "• Used with async/await.\n" +
            "• Wrap risky code in try block.\n" +
            "• catch handles errors.\n" +
            "• Prevents app crash.\n" +
            "• Cleaner than .catch()."
        },

        {
          id: "sc_day_83_t13",
          title: "finally Block",
          explanation:
            "• Runs always (success or failure).\n" +
            "• Used for cleanup.\n" +
            "• Useful for loading spinners.\n" +
            "• Ensures final execution.\n" +
            "• Improves reliability."
        },

        {
          id: "sc_day_83_t14",
          title: "Real-World Pattern (Loading State)",
          explanation:
            "• Show loading message.\n" +
            "• Await multiple async tasks.\n" +
            "• Handle errors if occur.\n" +
            "• Use finally for cleanup.\n" +
            "• Common dashboard pattern."
        },

        {
          id: "sc_day_83_t15",
          title: "Interview Recap",
          explanation:
            "• Custom promises handle reusable async logic.\n" +
            "• async makes function return promise.\n" +
            "• await pauses execution.\n" +
            "• try-catch handles errors.\n" +
            "• finally runs always.\n" +
            "• async/await is cleaner than .then().\n" +
            "• Must return promises in chaining.\n" +
            "• Professional async structure."
        }

      ]
    }
  ],

  84: [
    {
      id: "sc_day_84",
      title: "Hypertext Transfer Protocol (HTTP)",
      topics: [

        {
          id: "sc_day_84_t1",
          title: "Web Resources",
          explanation:
            "• A Web Resource is any data available over the internet.\n" +
            "• Can be HTML, CSS, JS, JSON.\n" +
            "• Can be images, videos, PDFs.\n" +
            "• APIs also return resources.\n" +
            "• Everything on the web is a resource."
        },

        {
          id: "sc_day_84_t2",
          title: "Uniform Resource Locator (URL)",
          explanation:
            "• URL identifies location of resource.\n" +
            "• Syntax: protocol://domain/path?query.\n" +
            "• Protocol defines communication rule.\n" +
            "• Domain identifies server.\n" +
            "• Path identifies resource.\n" +
            "• Query parameters filter data."
        },

        {
          id: "sc_day_84_t3",
          title: "Protocol",
          explanation:
            "• Protocol = communication rules.\n" +
            "• HTTP transfers data.\n" +
            "• HTTPS transfers encrypted data.\n" +
            "• WebSockets enable real-time communication.\n" +
            "• Determines security and behavior."
        },

        {
          id: "sc_day_84_t4",
          title: "HTTP vs HTTPS",
          explanation:
            "• HTTP → Data transferred in plain text.\n" +
            "• HTTPS → Data encrypted using SSL/TLS.\n" +
            "• HTTPS is secure.\n" +
            "• Used for login, banking, payments.\n" +
            "• Modern browsers prefer HTTPS."
        },

        {
          id: "sc_day_84_t5",
          title: "Domain Name",
          explanation:
            "• Identifies web server.\n" +
            "• Example: www.flipkart.com.\n" +
            "• Maps to IP address.\n" +
            "• Human-readable address.\n" +
            "• DNS resolves domain to IP."
        },

        {
          id: "sc_day_84_t6",
          title: "Path",
          explanation:
            "• Identifies specific resource.\n" +
            "• Example: /watches.\n" +
            "• Can be nested paths.\n" +
            "• Maps to server endpoint.\n" +
            "• Often represents API route."
        },

        {
          id: "sc_day_84_t7",
          title: "Query Parameters",
          explanation:
            "• Add filtering or search criteria.\n" +
            "• Start with ? symbol.\n" +
            "• Multiple params separated by &.\n" +
            "• Used in search and filtering.\n" +
            "• Common in APIs."
        },

        {
          id: "sc_day_84_t8",
          title: "HTTP Request Structure",
          explanation:
            "• Sent from client to server.\n" +
            "• Contains Start Line.\n" +
            "• Contains Headers.\n" +
            "• May contain Body.\n" +
            "• Initiates action."
        },

        {
          id: "sc_day_84_t9",
          title: "HTTP Methods",
          explanation:
            "• GET → Retrieve data.\n" +
            "• POST → Create data.\n" +
            "• PUT → Update data.\n" +
            "• DELETE → Remove data.\n" +
            "• Defines intended action."
        },

        {
          id: "sc_day_84_t10",
          title: "HTTP Versions",
          explanation:
            "• HTTP/1.0 → Basic support.\n" +
            "• HTTP/1.1 → Persistent connections.\n" +
            "• HTTP/2 → Multiplexing, faster.\n" +
            "• HTTP/3 → Uses QUIC protocol.\n" +
            "• Improves performance."
        },

        {
          id: "sc_day_84_t11",
          title: "HTTP Headers",
          explanation:
            "• Provide additional metadata.\n" +
            "• Example: Content-Type.\n" +
            "• Authorization header.\n" +
            "• Accept header.\n" +
            "• Important for APIs."
        },

        {
          id: "sc_day_84_t12",
          title: "HTTP Request Body",
          explanation:
            "• Used in POST/PUT.\n" +
            "• Contains form data or JSON.\n" +
            "• Not used in GET.\n" +
            "• Carries payload.\n" +
            "• Often contains user input."
        },

        {
          id: "sc_day_84_t13",
          title: "HTTP Response Structure",
          explanation:
            "• Sent from server to client.\n" +
            "• Contains Status Line.\n" +
            "• Contains Headers.\n" +
            "• Contains Body.\n" +
            "• Returns requested data."
        },

        {
          id: "sc_day_84_t14",
          title: "Status Codes",
          explanation:
            "• 1XX → Informational.\n" +
            "• 2XX → Success.\n" +
            "• 3XX → Redirection.\n" +
            "• 4XX → Client Error.\n" +
            "• 5XX → Server Error.\n" +
            "• 200 OK → Success.\n" +
            "• 404 → Not Found.\n" +
            "• 401 → Unauthorized."
        },

        {
          id: "sc_day_84_t15",
          title: "Response Body",
          explanation:
            "• Contains requested resource.\n" +
            "• Can be HTML.\n" +
            "• Can be JSON.\n" +
            "• Can be image/video.\n" +
            "• Returned to browser."
        },

        {
          id: "sc_day_84_t16",
          title: "Interview Recap",
          explanation:
            "• HTTP transfers web resources.\n" +
            "• URL = protocol + domain + path + query.\n" +
            "• GET read, POST create, PUT update, DELETE remove.\n" +
            "• Request → Start line + Headers + Body.\n" +
            "• Response → Status line + Headers + Body.\n" +
            "• 2XX success, 4XX client error, 5XX server error.\n" +
            "• HTTPS is secure version of HTTP."
        }

      ]
    }
  ],

  85: [
    {
      id: "sc_day_85",
      title: "HTTP Requests using Fetch API",
      topics: [

        {
          id: "sc_day_85_t1",
          title: "What is fetch()?",
          explanation:
            "• fetch() is used to make HTTP requests.\n" +
            "• Used to communicate with backend APIs.\n" +
            "• Returns a Promise.\n" +
            "• Works asynchronously.\n" +
            "• Modern replacement for XMLHttpRequest."
        },

        {
          id: "sc_day_85_t2",
          title: "Basic Syntax",
          explanation:
            "• fetch(URL, options).\n" +
            "• URL → endpoint.\n" +
            "• options → request configuration.\n" +
            "• Returns Response object.\n" +
            "• Must handle using .then() or await."
        },

        {
          id: "sc_day_85_t3",
          title: "Request Configuration (Options Object)",
          explanation:
            "• method → GET, POST, PUT, DELETE.\n" +
            "• headers → metadata.\n" +
            "• body → data sent to server.\n" +
            "• credentials → cookies/auth.\n" +
            "• cache → request caching behavior."
        },

        {
          id: "sc_day_85_t4",
          title: "GET Request (Default)",
          explanation:
            "• Default method.\n" +
            "• Used to read data.\n" +
            "• Does not send body.\n" +
            "• Used for fetching lists or details.\n" +
            "• Example: fetching users."
        },

        {
          id: "sc_day_85_t5",
          title: "POST Request",
          explanation:
            "• Used to create new resource.\n" +
            "• Requires body.\n" +
            "• Body usually JSON.\n" +
            "• Must set Content-Type header.\n" +
            "• Success status → 201."
        },

        {
          id: "sc_day_85_t6",
          title: "PUT Request",
          explanation:
            "• Used to update resource.\n" +
            "• Requires body.\n" +
            "• Replaces existing data.\n" +
            "• Success status → 200.\n" +
            "• 404 if resource not found."
        },

        {
          id: "sc_day_85_t7",
          title: "DELETE Request",
          explanation:
            "• Used to delete resource.\n" +
            "• No body required usually.\n" +
            "• Success status → 204.\n" +
            "• No Content returned.\n" +
            "• Used for removing users/data."
        },

        {
          id: "sc_day_85_t8",
          title: "Headers",
          explanation:
            "• Content-Type → tells server format.\n" +
            "• Accept → expected response type.\n" +
            "• Authorization → token-based auth.\n" +
            "• Required in secure APIs.\n" +
            "• Sent inside headers object."
        },

        {
          id: "sc_day_85_t9",
          title: "Response Object",
          explanation:
            "• fetch returns Response object.\n" +
            "• response.status → HTTP code.\n" +
            "• response.statusText → text.\n" +
            "• response.headers → response headers.\n" +
            "• response.url → final URL."
        },

        {
          id: "sc_day_85_t10",
          title: "Reading Response Data",
          explanation:
            "• response.text() → plain text.\n" +
            "• response.json() → parse JSON.\n" +
            "• Both return promises.\n" +
            "• Must return in .then().\n" +
            "• Common interview question."
        },

        {
          id: "sc_day_85_t11",
          title: "Common Status Codes",
          explanation:
            "• 200 → OK.\n" +
            "• 201 → Created.\n" +
            "• 204 → No Content.\n" +
            "• 404 → Not Found.\n" +
            "• 422 → Validation error."
        },

        {
          id: "sc_day_85_t12",
          title: "Interview Recap",
          explanation:
            "• fetch() returns a promise.\n" +
            "• Must handle with .then() or await.\n" +
            "• GET → Read.\n" +
            "• POST → Create.\n" +
            "• PUT → Update.\n" +
            "• DELETE → Remove.\n" +
            "• response.json() parses body.\n" +
            "• Headers required for JSON APIs."
        }

      ]
    }
  ],

  86: [
    {
      id: "sc_day_86",
      title: "HTTP Requests using JS | Part 1",
      topics: [
        {
          id: "sc_day_86_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "HTTP Requests using JS | Part 1". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_86_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "HTTP Requests using JS | Part 1" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_86_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "HTTP Requests using JS | Part 1". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  87: [
    {
      id: "sc_day_87",
      title: "HTTP Requests using JS | Part 2",
      topics: [
        {
          id: "sc_day_87_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "HTTP Requests using JS | Part 2". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_87_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "HTTP Requests using JS | Part 2" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_87_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "HTTP Requests using JS | Part 2". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  88: [
    {
      id: "sc_day_88",
      title: "Forms",
      topics: [
        {
          id: "sc_day_88_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Forms". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_88_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Forms" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_88_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Forms". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  89: [
    {
      id: "sc_day_89",
      title: "Forms | Part 2",
      topics: [
        {
          id: "sc_day_89_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Forms | Part 2". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_89_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Forms | Part 2" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_89_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Forms | Part 2". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  90: [
    {
      id: "sc_day_90",
      title: "JS Closures",
      topics: [
        {
          id: "sc_day_90_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "JS Closures". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_90_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "JS Closures" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_90_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "JS Closures". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  91: [
    {
      id: "sc_day_91",
      title: "Debouncing & Throttling",
      topics: [
        {
          id: "sc_day_91_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Debouncing & Throttling". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_91_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Debouncing & Throttling" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_91_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Debouncing & Throttling". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  92: [
    {
      id: "sc_day_92",
      title: "Building a Dynamic Website using GenAI",
      topics: [
        {
          id: "sc_day_92_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Building a Dynamic Website using GenAI". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_92_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Building a Dynamic Website using GenAI" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_92_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Building a Dynamic Website using GenAI". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  93: [
    {
      id: "sc_day_93",
      title: "JS Modules",
      topics: [
        {
          id: "sc_day_93_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "JS Modules". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_93_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "JS Modules" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_93_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "JS Modules". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  94: [
    {
      id: "sc_day_94",
      title: "Node Packages",
      topics: [
        {
          id: "sc_day_94_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Node Packages". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_94_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Node Packages" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_94_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Node Packages". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  95: [
    {
      id: "sc_day_95",
      title: "Introduction to ReactJS",
      topics: [
        {
          id: "sc_day_95_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Introduction to ReactJS". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_95_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Introduction to ReactJS" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_95_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Introduction to ReactJS". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  96: [
    {
      id: "sc_day_96",
      title: "Introduction to ReactJS | Part 2",
      topics: [
        {
          id: "sc_day_96_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Introduction to ReactJS | Part 2". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_96_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Introduction to ReactJS | Part 2" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_96_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Introduction to ReactJS | Part 2". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  97: [
    {
      id: "sc_day_97",
      title: "Components and Props",
      topics: [
        {
          id: "sc_day_97_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Components and Props". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_97_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Components and Props" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_97_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Components and Props". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  98: [
    {
      id: "sc_day_98",
      title: "Components and Props | Part 2",
      topics: [
        {
          id: "sc_day_98_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Components and Props | Part 2". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_98_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Components and Props | Part 2" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_98_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Components and Props | Part 2". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  99: [
    {
      id: "sc_day_99",
      title: "Lists & Keys",
      topics: [
        {
          id: "sc_day_99_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Lists & Keys". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_99_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Lists & Keys" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_99_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Lists & Keys". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  100: [
    {
      id: "sc_day_100",
      title: "State & Events",
      topics: [
        {
          id: "sc_day_100_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "State & Events". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_100_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "State & Events" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_100_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "State & Events". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  101: [
    {
      id: "sc_day_101",
      title: "Conditional Rendering",
      topics: [
        {
          id: "sc_day_101_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Conditional Rendering". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_101_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Conditional Rendering" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_101_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Conditional Rendering". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  102: [
    {
      id: "sc_day_102",
      title: "State Hook | Part 2",
      topics: [
        {
          id: "sc_day_102_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "State Hook | Part 2". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_102_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "State Hook | Part 2" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_102_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "State Hook | Part 2". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  103: [
    {
      id: "sc_day_103",
      title: "State Hook | Part 2 | Delete Functionality",
      topics: [
        {
          id: "sc_day_103_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "State Hook | Part 2 | Delete Functionality". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_103_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "State Hook | Part 2 | Delete Functionality" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_103_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "State Hook | Part 2 | Delete Functionality". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  104: [
    {
      id: "sc_day_104",
      title: "Effect Hook and Rules of Hooks",
      topics: [
        {
          id: "sc_day_104_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Effect Hook and Rules of Hooks". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_104_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Effect Hook and Rules of Hooks" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_104_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Effect Hook and Rules of Hooks". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  105: [
    {
      id: "sc_day_105",
      title: "Effect Hook - 2",
      topics: [
        {
          id: "sc_day_105_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Effect Hook - 2". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_105_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Effect Hook - 2" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_105_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Effect Hook - 2". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  106: [
    {
      id: "sc_day_106",
      title: "Effect Hooks | Optimizing Performance",
      topics: [
        {
          id: "sc_day_106_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Effect Hooks | Optimizing Performance". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_106_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Effect Hooks | Optimizing Performance" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_106_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Effect Hooks | Optimizing Performance". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  107: [
    {
      id: "sc_day_107",
      title: "Making API Call with Hooks",
      topics: [
        {
          id: "sc_day_107_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Making API Call with Hooks". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_107_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Making API Call with Hooks" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_107_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Making API Call with Hooks". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  108: [
    {
      id: "sc_day_108",
      title: "Making API Call with Hooks | Part 2",
      topics: [
        {
          id: "sc_day_108_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Making API Call with Hooks | Part 2". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_108_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Making API Call with Hooks | Part 2" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_108_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Making API Call with Hooks | Part 2". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  109: [
    {
      id: "sc_day_109",
      title: "Schedulers with Hooks",
      topics: [
        {
          id: "sc_day_109_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Schedulers with Hooks". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_109_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Schedulers with Hooks" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_109_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Schedulers with Hooks". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  110: [
    {
      id: "sc_day_110",
      title: "Schedulers with Hooks | Part 2",
      topics: [
        {
          id: "sc_day_110_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Schedulers with Hooks | Part 2". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_110_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Schedulers with Hooks | Part 2" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_110_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Schedulers with Hooks | Part 2". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  111: [
    {
      id: "sc_day_111",
      title: "React Under the Hood",
      topics: [
        {
          id: "sc_day_111_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "React Under the Hood". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_111_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "React Under the Hood" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_111_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "React Under the Hood". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  112: [
    {
      id: "sc_day_112",
      title: "Routing using React Router",
      topics: [
        {
          id: "sc_day_112_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Routing using React Router". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_112_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Routing using React Router" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_112_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Routing using React Router". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  113: [
    {
      id: "sc_day_113",
      title: "Routing using React Router | Routing Components",
      topics: [
        {
          id: "sc_day_113_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Routing using React Router | Routing Components". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_113_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Routing using React Router | Routing Components" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_113_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Routing using React Router | Routing Components". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  114: [
    {
      id: "sc_day_114",
      title: "Routing Using React Router | Part 2",
      topics: [
        {
          id: "sc_day_114_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Routing Using React Router | Part 2". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_114_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Routing Using React Router | Part 2" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_114_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Routing Using React Router | Part 2". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  115: [
    {
      id: "sc_day_115",
      title: "Authentication & Authorization",
      topics: [
        {
          id: "sc_day_115_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Authentication & Authorization". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_115_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Authentication & Authorization" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_115_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Authentication & Authorization". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  116: [
    {
      id: "sc_day_116",
      title: "Authentication & Authorization | Route Parameters",
      topics: [
        {
          id: "sc_day_116_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Authentication & Authorization | Route Parameters". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_116_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Authentication & Authorization | Route Parameters" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_116_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Authentication & Authorization | Route Parameters". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  117: [
    {
      id: "sc_day_117",
      title: "Authentication & Authorization | Part 2",
      topics: [
        {
          id: "sc_day_117_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Authentication & Authorization | Part 2". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_117_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Authentication & Authorization | Part 2" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_117_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Authentication & Authorization | Part 2". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  118: [
    {
      id: "sc_day_118",
      title: "Authentication & Authorization | Handling Redirections",
      topics: [
        {
          id: "sc_day_118_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Authentication & Authorization | Handling Redirections". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_118_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Authentication & Authorization | Handling Redirections" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_118_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Authentication & Authorization | Handling Redirections". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  119: [
    {
      id: "sc_day_119",
      title: "Authentication & Authorization | Part 3",
      topics: [
        {
          id: "sc_day_119_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Authentication & Authorization | Part 3". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_119_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Authentication & Authorization | Part 3" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_119_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Authentication & Authorization | Part 3". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  120: [
    {
      id: "sc_day_120",
      title: "Sorting Products",
      topics: [
        {
          id: "sc_day_120_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "Sorting Products". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_120_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "Sorting Products" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_120_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "Sorting Products". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  121: [
    {
      id: "sc_day_121",
      title: "React Context",
      topics: [
        {
          id: "sc_day_121_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "React Context". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_121_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "React Context" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_121_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "React Context". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  122: [
    {
      id: "sc_day_122",
      title: "React Context | Part 2",
      topics: [
        {
          id: "sc_day_122_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "React Context | Part 2". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_122_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "React Context | Part 2" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_122_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "React Context | Part 2". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],

  123: [
    {
      id: "sc_day_123",
      title: "React Context | Part 3",
      topics: [
        {
          id: "sc_day_123_t1",
          title: "Concept Overview",
          explanation:
            '• This section gives you a clear conceptual foundation for "React Context | Part 3". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day\'s learning.',
        },
        {
          id: "sc_day_123_t2",
          title: "Hands-on Practice",
          explanation:
            '• Here you apply the concepts of "React Context | Part 3" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment.',
        },
        {
          id: "sc_day_123_t3",
          title: "Mini Assignment / Implementation",
          explanation:
            '• This mini assignment or implementation task lets you use what you have learned in "React Context | Part 3". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next.',
        },
      ],
    },
  ],
};
