import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";

export const HERO_CONTENT = `I love turning complex data into actionable insights and building intelligent systems that make a real impact. Working across Data Science, Machine Learning, and Data Engineering, I enjoy creating cloud-powered solutions, Python-based models, and AI-driven tools that solve real-world problems. I’m energized by opportunities to innovate, automate workflows, and scale solutions that drive measurable results.
When I’m not coding or experimenting with new AI tools, you’ll probably find me watching series, listening to music, or playing mobile games to unwind and recharge.
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
      "It is a software system designed to streamline restaurant operations, including order management, reservation handling, customer feedback collection, and inventory management. It employs Oracle SQL and PL/SQL for creating views, executing queries, and managing data with DML and DDL operations, utilizing functions and stored procedures for efficient task handling.",
    technologies: ["Oracle SQL", "PL/SQL", "DDL/DML", "TCL"],
    link: "https://github.com/Sai-Geeta-Acharya/DMDD_DineEase" // Add the link here
  },
  {
    title: "Cloud Native Webapp",
    image: project2,
    description:
      "Implemented secure RESTful APIs with Node.js and Sequelize ORM in a microservices architecture, integrating user management, CRUD operations, and automated email verification. Utilized serverless computing and Pub/Sub for scalability. Managed GCP infrastructure with Terraform, designed custom compute engine images, implemented encryption and SSL certificates, and facilitated seamless updates through continuous deployment and rolling updates.",
    technologies: ["Node.js", "Sequelize ORM","MicroServices", "Pub/Sub", "Terraform", "GCP","Basic Auth Authentication", "SSL Certificates", "CI/CD", "Linux", "Bash"],
    link: "https://github.com/CloudCourseSpring2024/webapp" // Add the link here
  },
  {
    title: "Library Management System",
    image: project3,
    description:
      "Library management application efficiently handles user registration and login, book and student management, and real-time status updates for borrowing activities. Implemented with Java and Swing for the GUI, it uses NetBeans as the IDE and MySQL for the database.",
    technologies: ["JAVA", "SWING", "MySQL"],
    link: "https://github.com/CSYE6200-Object-Oriented-DesignFall2023/final-project-final-group-8" // Add the link here
  },
  {
    title: "NammaBnB",
    image: project4,
    description:
      "Successfully executed Nammabnb project, seamlessly integrating front-end and back-end functionalities. Enabled hosts to showcase properties and guests to securely explore and book accommodations. Adhered to CRUD operations, routing, Redux, internationalization, and PWA standards for a professional-grade UI and intuitive user experience.",
    technologies: ["React", "Tailwind", "Prisma", "MongoDB", "NextAuth."],
    link: "https://github.com/info-6150-fall-2023/final-project-techno-sync" // Add the link here
  },
  {
    title: "Plant Disease Detection",
    image: project7,
    description:
      "Developed a robust plant disease detection system using Convolutional Neural Networks (CNN) with a remarkable accuracy rate on the Plant Village dataset, showcasing expertise in computer vision and machine learning for agricultural applications.",
    technologies: ["Python", "Keras", "sklearn", "Tensorflow"],
    link: "https://drive.google.com/file/d/19ICrBQTujWQjGt4zBujUb1u7S62csnJn/view?usp=sharing" // Add the link here
  },
  {
    title: "Hospital Database Management",
    image: project5,
    description:
      "creating and managing multiple tables to store information about doctors, patients, rooms, visitors, in-patients, out-patients, transaction types, and pharmacy. The project involved implementing primary and foreign keys, constraints, and inserting records to ensure data integrity and relationships between the entities. This setup allowed for efficient organization and retrieval of hospital-related data.",
    technologies: ["Oracle SQL", "LucidChart"],
    link: "https://drive.google.com/file/d/12Xiouvo7FGNgvyFpTjGoMDuAmKs_hghb/view?usp=sharing" // Add the link here
  },
  {
    title: "University Database Management",
    image: project6,
    description:
      "I worked on the Glearn student portal for GITAM University, a subpart of the university database. I identified entities and relationships, determined cardinalities, and defined attributes for the database. I normalized the database to 3NF. The website provides hassle-free transactions for students and administration and is maintained by the department to ensure efficient usage.",
    technologies: ["SQL", "Draw.io", "DDL/DML", "3NF"], 
    link: "https://drive.google.com/file/d/14t0dqEXAmr5PBnm3iG28ns-rrrIzh0yf/view?usp=sharing" // Add the link here
  },
];

export const CONTACT = {
  address: "Irving, TX, USA",
  phoneNo: "+1 (267) 205-3125",
  email: "sriteja439@gmail.com",
};
