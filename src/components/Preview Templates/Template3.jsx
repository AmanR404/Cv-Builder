import React from 'react'
import { useSelector } from 'react-redux'

const Template3 = () => {
     // Data from Redux Store
    const personalInfo = useSelector((state => state.personalInfo))
    const workExperience = useSelector((state => state.workExperience))
    const myEducation = useSelector((state => state.myEducation))
    const mySkills = useSelector((state => state.mySkills))
    return (
        <div className='w-[90%] mx-auto pt-4 bg-blue-50 rounded-xl'>
            <h5 className='font-bold text-4xl text-center text-blue-900'>{personalInfo.firstname} {personalInfo.lastname}</h5>
            <h6 className='text-sm text-center text-blue-800'>{workExperience.jobtitle}</h6>
            <hr className='mt-2' />
            <section className='flex flex-col gap-3 mt-3'>
                <div className='flex gap-8'>
                    <span className='font-bold text-xl text-blue-900'>Objective</span>
                    <p>{personalInfo.objective}</p>
                </div>
                <hr />
                <div className='flex gap-8'>
                    <span className='font-bold text-xl text-blue-900'>Education</span>
                    <div className='flex flex-col'>
                        <span>{myEducation.university}</span>
                        <span>{myEducation.degree}</span>
                        <span>{myEducation.startyear}</span>
                        <span>{myEducation.endyear}</span>
                    </div>
                </div>
                <hr />
                <div className='flex gap-9'>
                    <span className='font-bold text-xl text-blue-900'>Key Skills</span>
                    <div className='flex gap-3'>
                        <span>{mySkills.skill1}</span>
                        <span>{mySkills.skill2}</span>
                    </div>
                </div>
                <hr />
                <div className='flex gap-8'>
                    <span className='font-bold text-xl text-blue-900'>Experience</span>
                    <div className='flex flex-col'>
                        <span>{workExperience.jobtitle}</span>
                        <span>{workExperience.organization}</span>
                        <span>{workExperience.startyear}</span>
                        <span>{workExperience.endyear}</span>
                    </div>
                </div>
                <hr />
                <div className='flex justify-around'>
                    <span>{personalInfo.number}</span>
                    <span>{personalInfo.email}</span>
                </div>
            </section>
        </div>
    )
}

export default Template3
