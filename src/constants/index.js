import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project7 from "../assets/projects/project-7.jpg";

export const HERO_CONTENT = `I love turning complex data into actionable insights and building intelligent systems that make a real impact. Working across Data Science, Machine Learning, and Data Engineering, I enjoy creating cloud-powered solutions, Python-based models, and AI-driven tools that solve real-world problems. I’m energized by opportunities to innovate, automate workflows, and scale solutions that drive measurable results.
When I’m not coding or experimenting with new AI tools, you’ll probably find me watching Netflix, listening to music, or playing mobile games to unwind and recharge.
`

export const ABOUT_TEXT = ` With over 3 years of experience in data science, machine learning, and analytics, I specialize in building scalable solutions that automate workflows, uncover insights, and enhance decision-making. I earned my Master’s in Data Science from Drexel University (CGPA: 3.9), where I also participated in hackathons, winning 1st place at Philly Code Fest 2024 for developing ASTHRA, an AI-powered RAG platform that converts research papers into podcasts.

My experience spans across Python, cloud platforms (AWS, GCP, Azure), and modern data tools, where I have engineered automation pipelines, deployed ML models, and designed interactive dashboards in Power BI and Tableau. I’ve built AI-driven chatbots with LangChain, Python agents, and multi-model LLMs, enabling personalized learning and smarter user interactions.

I thrive in fast-paced, data-driven environments—whether optimizing ETL workflows, deploying ML systems with MLOps, or delivering actionable analytics that cut manual effort by over 80%. Beyond industry work, I’ve contributed to published research on data visualization and fraud detection and hold multiple certifications in machine learning, Python, and database management.

I’m passionate about leveraging data science, machine learning, and AI to solve complex problems, drive innovation, and create impactful, real-world solutions. Let’s connect and explore opportunities to collaborate!`

export const EXPERIENCES = [
  {
    year: "August 2024 - Present",
    role: "Business Analyst",
    company: "Worldwide Flight Services",
    description: `Automated PMI equipment verification with Python by integrating Dossier, generating structured Excel reports, and reducing manual effort by 80%. Built a Tkinter interface with SQLite validation to streamline asset document management, improving accuracy by 76%. 
    Designed Power BI dashboards with Power Query and 20+ DAX measures to track PMI status, repairs, and costs—boosting KPI visibility by 20% and cutting duplicate work requests by 83%.`,
    technologies: ["Python", "RestAPI", "PowerBI", "Tkinter", "SQL", "SQL-Lite", "Postman", "Excel"],
  },
  {
    year: "July 2023 - Jan 2024",
    role: "Data Science Intern",
    company: "MyEdMaster LLC",
    description: `Developed a disease prediction ML model in AWS SageMaker using K-Means clustering and LSTM, optimizing training with mini-batch gradient descent to cut training time by 20%. Conducted client surveys to enrich datasets, boosting data-driven decision-making by 25%. 
    Built an educational website with HTML, CSS, JavaScript, and an interactive chatbot for personalized learning resources. Leveraged LangChain, Python agents, and multi-model LLMs (Mistral 7B, Llama2-34B) to analyze user behavior, classify users into 4 groups, and deliver tailored explanations with real-world examples.`,
    technologies: ["AWS SageMaker", "K-Means", "LSTM", "Mini-batch Gradient Descent", "HTML", "CSS", "JavaScript", "LangChain", "Mistral 7B", "Llama2-34B","Chatbot","Python Agents"],
  },
  {
    year: "May 2021 - August 2021",
    role: "Research Assistant(Data Analyst)",
    company: "GITAM University",
    description: `Collaborated with Professor Dr. Bhavani on COVID data analysis, applying diverse visualization techniques (Tree Maps, Box Plots, Bubble Charts) to uncover trends and patterns. 
    Streamlined data integration with Apache NiFi and ETL pipelines, loading into AWS Redshift for advanced analytics. Built Tableau dashboards to present insights, contributing to a published research article on data visualization techniques that received 1500+ views and IEEE citations.`,
    technologies: ["AWS Redshift", "Tableau", "Apache NIFI", "ETL"],
  },
  {
    year: "August 2020 - April 2021",
    role: "Machine Learning Intern",
    company: "Triad Square Infosec",
    description: `Built a Hospital Management System using Java and Spring MVC, integrating a KNN model trained on patient history to predict wait times and the Nexmo API for automated medication reminders. 
    Implemented MLOps pipelines with Google Cloud Build, automated retraining via AI Platform, and monitoring using Stackdriver, with Google Cloud Storage for secure patient data management. Deployed the KNN model and application on Google Compute Engine and AI Platform, while hosting the user interface on Google App Engine for seamless operation.`,
    technologies: ["Java", "Spring MVC", "KNN", "Nexmo API", "Google Cloud Build", "AI Platform", "Stackdriver", "Google Cloud Storage", "Google Compute Engine", "Google App Engine"],
  },
];

export const PROJECTS = [
  {
    title: "ASTHRA",
    image: project1,
    description:
      `Developed ASTHRA, an advanced RAG platform using LlamaIndex, Deepgram, and Streamlit that transforms research papers into podcasts for easier comprehension. 
      It also provides an interactive chat interface, enabling deeper engagement with academic content. The platform is designed to help researchers and students save time and enhance accessibility. Awarded 1st Prize at Philly Codefest.`,
    technologies: ["LlamaIndex", "Deepgram", "AI agents", "OpenAI/ LLMs", "Python", "RAG"],
    link: "https://github.com/tetalisriteja439/ASTHRA/tree/main" // Add the link here
  },
  {
    title: "UP (Upgrade the game of Under Priviledged Business Owners)",
    image: project2,
    description:
      `Developed an AI-powered chatbot and application that empowers underprivileged business owners to manage operations through natural language. The system integrates multiple intelligent AI/Python agents for inventory management, sales analysis, market research, and customer communication—streamlining workflows and boosting efficiency, including:
      Inventory Manager – tracks stock, sales, and product performance
      Catalog Business Analyst – recommends product additions and pairings
      Internet Surfer – conducts market research and competitor analysis
      Report Analyst – generates performance insights and PDF reports
      Email Manager – organizes and automates customer/employee communication`,
    technologies: ["Python", "Streamlit","OpenAI", "groq", "duckduckgo_search","Google Auth Authentication"],
    link: "https://github.com/tetalisriteja439/Up-" // Add the link here
  },
  {
    title: "Academix",
    image: project3,
    description:
      "Created a comprehensive student assistant app powered by RAG to reduce hallucinations and deliver accurate, context-rich answers. The platform integrates multiple sources, including GitHub, YouTube transcripts, PDFs, class recordings, and internet search, into a unified application. To enhance usability, I developed a custom browser extension that transforms internet content into personalized, easy-to-read formats. An intuitive Gradio interface ensures smooth interaction and accessibility for students. Behind the scenes, the system leverages Vector DB, web scraping, and PDF parsing to provide reliable, study-focused insights.",
    technologies: ["RAG", "Vector DB", "togetherAI", "Python", "Gradio", "duckduckgo_search", "web scraping", "PDF parsing"],
    link: "https://github.com/tetalisriteja439/Academix" // Add the link here
  },
  {
    title: "California-Real-Estate-Data-Analysis",
    image: project4,
    description:
      `This study provides a comprehensive analysis of the California real estate market, designed to help prospective homebuyers make informed decisions. Unlike traditional approaches that focus mainly on demographics and property data, our report integrates macroeconomic indicators, historical trends, and demographic features to present a holistic view. 
      By leveraging diverse datasets from sources such as the FBI, FRED, U.S. Census Bureau, Zillow, CAR, and Kaggle, we explore key metrics including CPI, GDP, interest rates, unemployment, and housing prices. Through detailed analysis and visualizations, the report highlights market dynamics and optimal timing for real estate investments. Ultimately, it equips readers with data-backed insights to navigate California’s evolving housing market confidently.`,
    technologies: ["Python", "SQL", "Tableau", "JupyterNotebook", "Seaborn","Matplotlib"],
    link: "https://github.com/tetalisriteja439/California-Real-Estate-Data-Analysis" // Add the link here
  },
  {
    title: "Cricket-API",
    image: project7,
    description:
      `Developed an API to retrieve and analyze cricket player data from ESPNCricinfo, enabling in-depth performance insights for fantasy sports and analytics applications. The API provides access to player profiles, detailed career statistics, squad information, ball-by-ball match analysis, and player images. 
      Leveraging domain knowledge of cricket, raw data points were transformed into user-friendly features for easier interpretation.his API empowers developers and analysts to build cricket-focused tools with reliable, structured data.`,
    technologies: ["Python", "Flask", "Beautiful Soup", "Selenium", "Regex"],
    link: "https://github.com/tetalisriteja439/Cricket-API" // Add the link here
  },
  // ...existing code...
];

export const CONTACT = {
  address: "Irving, TX, USA",
  phoneNo: "+1 (267) 205-3125",
  email: "sriteja439@gmail.com",
};
