import React, { useState } from "react";
import Arrow from "../Design/Buttons/arrow.jsx";

const Experience = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleDetails = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const experience = [
    {
      id: 1,
      company: "IBM — AI & Cloud Computing Internship",
      role: "Artificial Intelligence & Cloud Intern",
      duration: "Jul 2025 - Aug 2025",
      tech:
        "IBM Cloud • AutoAI • AI Chatbots • Data Analytics • Python • Visualization Tools",
      description: [
    "Completed this internship on IBM Cloud through Edunet Foundation via the AICTE Internship Portal (Government of India).",
    "Gained hands-on experience with IBM Cloud services and AI tools.",
    "Worked on AI chatbot development and AutoAI projects for real-world problem solving.",
    "Engaged in structured learning through IBM SkillsBuild aligned with industry standards.",
    "Performed data analytics and visualization to derive actionable insights.",
    "Collaborated with mentors and industry professionals in an enterprise workflow environment."
  ],
    },
    {
      id: 2,
      company: "Shell — AI / ML Intern",
      role: "Artificial Intelligence Intern",
      duration: "Jul 2025 - Aug 2025",
      tech:
        "Python • FastAPI • NumPy • Matplotlib • Seaborn • Pandas • Scikit-learn",
      description: [
    "Completed this internship at Shell through Edunet Foundation via the AICTE Internship Portal (Government of India).",
    "Developed end-to-end machine learning pipelines for structured datasets.",
    "Built production-ready FastAPI services for real-time model inference.",
    "Performed exploratory data analysis and feature engineering to improve model performance.",
    "Designed modular backend architecture for scalable experimentation and deployment."
  ],
    },
  ];

  return (
    <div className="m-10">
      <h1 className=' my-11 text-4xl geo-bold-italic text-gray-500 geo-regular-italic'>Experience</h1>

      {experience.map((exp) => {
        const isOpen = expanded === exp.id;

        return (
          <div key={exp.id}>
            {/* HEADER */}
            <div className="flex justify-between items-center">
              <span className="w-[65%]">
                <h2 className="text-xl font-bold text-white">{exp.company}</h2>
                <h3 className="mt-3 text-m font-semibold text-gray-400">
                  {exp.role}
                </h3>
              </span>

              <p className="text-m text-gray-500">{exp.duration}</p>

              <button onClick={() => toggleDetails(exp.id)}>
                <Arrow
                  isOpen={isOpen}
                  tooltipText={isOpen ? "Collapse Details" : "Expand Details"}
                />
              </button>
            </div>

            {/* DETAILS */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen
                  ? "max-h-150 opacity-100 mt-5"
                  : "max-h-0 opacity-0"
              }`}
            >
              <hr className="border-dashed border-gray-500 my-3" />

              <p className="text-m text-gray-500 my-5">{exp.tech}</p>

              <ul className="list-disc list-inside">
                {exp.description.map((desc, index) => (
                  <li key={index} className="text-m m-2 text-gray-500">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>

            {exp.id !== experience[experience.length - 1].id && <hr className='w-full border-gray-500 my-13' />}
          </div>
        );
      })}
    </div>
  );
};

export default Experience;