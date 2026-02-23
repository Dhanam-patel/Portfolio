import React from 'react'
import { useState } from 'react'
const experience = () => {
const [experience, setExperience] = useState([
  {id:1,
   company:'Shell — AI / ML Intern',
   role:'Artificial Intelligence Intern', 
   duration:'Jul 2025 to Aug 2025',
   tech:"Python • FastAPI • NumPy • Matplotlib • Seaborn • Pandas • Scikit-learn",
   description:['Developed machine learning pipelines for real-world structured datasets, covering data preprocessing, feature engineering, model training, and evaluation.','Built production-ready FastAPI services to serve trained models for real-time inference and external integration.','Performed exploratory data analysis and data transformation workflows to improve model performance and reliability.','Designed modular backend architecture to enable scalable deployment and easier experimentation with multiple models.', 'Worked on cloud-based deployment workflows on GCP, focusing on practical usability and system stability.'],},
])
  return (
    <div className='p-5'>
        <h1 className='ml-4 my-11 text-4xl geo-bold-italic text-gray-500 geo-regular-italic'>Experience</h1>
        <div>

        </div>
    </div>
  )
}

export default experience
