import React from "react";
import { FaCode, FaRobot, FaLaptopCode } from "react-icons/fa";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Software Engineer",
      icon: <FaLaptopCode className="h-16 w-16 text-yellow-500" />,
      details: [
        "I thrive on well-written, efficient code, elegant design patterns, and user-focused solutions.",
        <strong className="text-xl text-bold text-yellow-500 mt-4">
          Areas of Expertise:
        </strong>,
        "Back-end Development",
        "Front-end Development",
        "Databases",
        "Operating System",
        "Computer Networks",
        "APIs",
        "Clean Code principles",
        <strong className="text-xl text-bold text-yellow-500 mt-4">
          Tools of the Trade:
        </strong>,
        "Languages - C/C++, Python, Java, Javascript",
        "Version Control Systems - Git/GitHub",
        "IDEs - Visual Studio Code",
      ],
    },
    {
      name: "Frontend Developer",
      icon: <FaCode className="h-16 w-16 text-blue-500" />,
      details: [
        "I bring websites and applications to life with a focus on clean, user-friendly interfaces, performant code, and a passion for creating intuitive interactions.",

        <strong className="text-xl font-bold text-blue-600">Skills:</strong>,
        "HTML",
        "CSS/Tailwind CSS",
        "JavaScript/TypeScript",
        "Front-End Framework - React JS",
        "Responsive Design",
        "Web Performance Optimization",

        <strong className="text-xl font-bold text-blue-600">Tools:</strong>,
        "Code Editors - Visual Studio Code, Replit",
        "Browser Developer Tools",
        "Build Tools - Webpack",
        "Version Control Systems - Git/GitHub",
        "UI/UX Design Tools - Figma, Adobe XD, Canva (optional, but can be a plus)",
      ],
    },
    {
      name: "AI/ML Engineer",
      icon: <FaRobot className="h-16 w-16 text-green-500" />,
      details: [
        "I'm passionate about building intelligent systems using effective algorithms, robust models, and a focus on real-world applications.",
        <strong className="text-xl font-bold text-green-600">
          Expertise:
        </strong>,
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Image Processing",

        <strong className="text-xl font-bold text-green-600">Tools:</strong>,
        "Programming Language - Python",
        "Libraries - TensorFlow, PyTorch, scikit-learn",
        "Cloud Platforms - AWS SageMaker, GCP AI",
        "Data Visualization Tools - Matplotlib",
        "Data Manipulation - Numpy, Pandas",
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 bg-gray-100 mt-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-mono font-extrabold leading-tight mb-8">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-200"
            >
              {skill.icon}
              <h3 className="text-2xl font-bold mt-3">{skill.name}</h3>
              <ul className="font-sans font-medium text-base text-center mt-2">
                {skill.details.map((detail, index) => (
                  <li key={index} className="mt-2 text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
