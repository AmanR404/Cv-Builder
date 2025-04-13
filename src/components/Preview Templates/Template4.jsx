import React from 'react'
import { useSelector } from 'react-redux'

const Template4 = () => {
     // Data from Redux Store
    const personalInfo = useSelector((state=>state.personalInfo))
    const workExperience = useSelector((state=>state.workExperience))
    const myEducation = useSelector((state=>state.myEducation))
    const mySkills = useSelector((state=>state.mySkills))
  return (
    <div className='w-[90%] mx-auto pt-4'>
        <hr />
        <div>
            <h2 className='text-3xl mt-4 font-bold text-amber-900'>{personalInfo.firstname}</h2>
            <h2 className='text-3xl font-bold text-amber-900'>{personalInfo.lastname}</h2>
            <span className='text-sm text-amber-900'>{workExperience.jobtitle}</span>
        </div>
        <div className='flex mt-2 gap-14'>
            {/* Left Area */}
            <div className='flex flex-col'>
                <h5 className='text-amber-900 text-md mb-2 underline'>Education</h5>
                <span className='text-gray-800 text-sm'>{myEducation.university}</span>
                <span className='text-gray-800 text-sm'>{myEducation.degree}</span>
                <span className='text-gray-800 text-sm'>{myEducation.startyear}</span>
                <span className='text-gray-800 text-sm'>{myEducation.endyear}</span>
            </div>
            {/* Right Area */}
            <div className='flex flex-col gap-5'>
                <div>
                    <h5 className='text-amber-900 text-md mb-2 underline'>Objective</h5>
                    <p className='text-gray-800 text-sm'>{personalInfo.objective}</p>
                </div>

                <div className='flex flex-col'>
                    <h5 className='text-amber-900 text-md mb-2 underline'>Experience</h5>
                    <span className='text-gray-800 text-sm'>{workExperience.jobtitle}</span>
                    <span className='text-gray-800 text-sm'>{workExperience.organization}</span>
                    <span className='text-gray-800 text-sm'>{workExperience.startyear}</span>
                    <span className='text-gray-800 text-sm'>{workExperience.endyear}</span>
                </div>

                <div>
                    <h5 className='text-amber-900 text-md mb-2 underline'>Functional Skills</h5>
                    <span className='text-gray-800 text-sm mr-2'>{mySkills.skill1}</span>
                    <span className='text-gray-800 text-sm'>{mySkills.skill2}</span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Template4
