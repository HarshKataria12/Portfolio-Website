export const SECTIONS = ["about","education","experience", "skills", "projects", "contact"];

export const experience = {
  company: "Summit Bank",
  title: "Software Development Intern",
  location: "Karachi, Pakistan",
  period: "Jan 2023 - Mar 2023",
  achievements: [
    "Contributed to commercial software systems in an agile, fast-paced engineering environment",
    "Shipped backend features and RESTful APIs used in internal production workflows",
    "Collaborated daily with engineers, product stakeholders, and cross-functional teams",
    "Worked independently with minimal guidance while managing multiple tasks and priorities",
    "Improved system reliability, performance, and code quality through testing and refactoring",
  ],
};
export const education = {
  university: "IU International University of Applied Sciences",
  degree: "B.Sc. Computer Science",
  location: "Berlin, Germany",
  period: "2023 – Present",
  highlights: [
    "Focused on Software Engineering, Databases, Operating Systems and Cloud Computing",
    "Built full-stack applications using React, Node.js and MongoDB",
    "Developed Machine Learning projects using Python and Scikit-learn",
    "Strong foundation in Data Structures, Algorithms and System Design",
  ],
};


export const skills = [
  { category: "Web & Backend", items: ["React.js","Redux Toolkit","Node.js","Express.js","MongoDB","REST APIs"] },
  { category: "AI / Data Science", items: ["Python","Pandas","NumPy","Scikit-learn","Matplotlib","Jupyter"] },
  { category: "Database & Tools", items: ["SQL","MySQL","Git","GitHub","Postman","Docker"] },
  { category: "Core Concepts", items: ["Data Structures","Algorithms","API Design","Agile Methods","Software Architecture"] },
];

export const projects = [
  {
    title: "Task Manager App",
    description:
      "Full-stack task management application with JWT authentication, priority-based task organization, and responsive design.",
    tech: ["React.js","Redux","Node.js","Express.js","MongoDB","JWT","Tailwind CSS"],
    link: "https://github.com/HarshKataria12/TaskManagement",
  },
  {
    title: "Habit Tracking App",
    description:
      "Python-based habit tracker with OOP design, CLI workflows, SQLite persistence, analytics, and pytest test suite.",
    tech: ["Python","SQLite","OOP","CLI","Pytest"],
    link: "https://github.com/HarshKataria12/HabitTracker",
  },
];

export const contact = {
  email: "harshkataria6660@gmail.com",
  github: "https://github.com/HarshKataria12",
  linkedin: "www.linkedin.com/in/harsh-kataria-727491350",
};
