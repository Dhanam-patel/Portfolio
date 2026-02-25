import React from 'react'
import { useState } from 'react'
import Arrow from '../Design/Buttons/arrow.jsx'
const experience = () => {
  const [experience, setExperience] = useState([
    {
      id: 1,
      company: 'Edunet Foundation — AI & Cloud Computing Internship',
      role: 'Artificial Intelligence & Cloud Computing Intern',
      duration: 'Jul 2025 - Aug 2025',
      tech: "IBM Cloud • AutoAI • AI Chatbots • Data Analytics • Python • Visualization Tools",
      description: [
        'Gained hands-on experience with IBM Cloud services and AI tools, applying theoretical knowledge to practical scenarios.',
        'Worked on AI chatbot development and AutoAI projects, exploring real-world problem-solving use cases.',
        'Engaged in structured learning modules via IBM SkillsBuild, aligned with industry standards.',
        'Performed data analytics and visualization tasks, leveraging datasets to derive insights and actionable outcomes.',
        'Collaborated with mentors and industry professionals, enhancing professional skills and understanding of AI & Cloud computing workflows.'
      ],
    },
    {
      id: 2,
      company: 'Shell — AI / ML Intern',
      role: 'Artificial Intelligence Intern',
      duration: 'Jul 2025 - Aug 2025',
      tech: "Python • FastAPI • NumPy • Matplotlib • Seaborn • Pandas • Scikit-learn",
      description: ['Developed machine learning pipelines for real-world structured datasets, covering data preprocessing, feature engineering, model training, and evaluation.', 'Built production-ready FastAPI services to serve trained models for real-time inference and external integration.', 'Performed exploratory data analysis and data transformation workflows to improve model performance and reliability.', 'Designed modular backend architecture to enable scalable deployment and easier experimentation with multiple models.', 'Worked on cloud-based deployment workflows on GCP, focusing on practical usability and system stability.'],
    }
  ])

  const [expanded, setExpanded] = useState(null);

  const toggleDetails = (id) => {
    setExpanded(expanded === id ? null : id);
  }

  return (
    <div className='m-10'>
      <h1 className=' my-11 text-4xl geo-bold-italic text-gray-500 geo-regular-italic'>Experience</h1>
      <div>
        {experience.map((exp) => (
          <div key={exp.id} className=' '>
            {exp.id != 1 && <hr className='w-full border-gray-500 my-3' />}
            <div className='my-10 p-5 flex justify-between items-center'>
              <span className='w-[65%]'>
                <h2 className='text-xl font-bold text-white w-[80%]'>{exp.company}</h2>
                <h3 className='mt-3 text-m font-semibold text-gray-400'>{exp.role}</h3>
              </span>
              <p className='text-m text-gray-500 mr-0'>{exp.duration}</p>
              <span className='mr-10'>
                <Arrow onclick={() => toggleDetails(exp.id)} text="▼" tooltipText="Expand Details" />
              </span>
            </div>
            <div className='details hidden'>
              <hr className='w-full border-dashed border-gray-500 my-3' />
            <p className='text-m text-gray-500 my-5'>{exp.tech}</p>
            <ul className='list-disc list-inside mt-2'>
              {exp.description.map((desc, index) => (
                <li key={index} className='text-m m-2 text-gray-500'>{desc}</li>
              ))}
            </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default experience
