import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { skills } from '../../Redux/State/action'

const KeySkills = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // Data Submit Function
  function onSubmit(data) {
    dispatch(skills(data));
    if (data.skill1) {
      navigate('/preview')
    }
  }

  // Input Fields
  const component = <> <div className='flex gap-4 mb-4'>
    <div>
      <input
        type="text"
        className="border border-gray-400 rounded pl-4 py-1 w-full"
        {...register("skill1", {
          required: "Required",
          minLength: { value: 2, message: "Min 2 characters" },
        })}
      />
      {errors.skill1 && <div className='text-red-700 text-sm'>{errors.skill1.message}</div>}
    </div>

    <div>
      <input type="text" className='border-1 border-gray-400 rounded pl-4 py-1 w-full' {...register("skill2")} />
      {errors.skill2 && <div className='text-red-700 text-sm'>{errors.skill2.message}</div>}
    </div>
  </div></>
  const [skillsComponent, setSkillsComponent] = useState([component])
  return (
    <section className='flex w-[90vw] md:w-[80vw] mx-auto mt-12 gap-32 flex-wrap sm:flex-nowrap'>
      {/* Shows Flow of Resume */}
      <aside className='w-60 h-52 flex flex-col gap-4 shadow-md'>
        <p className='border-b-1 border-gray-300 py-2 text-gray-400 font-semibold pl-8'>Personal Info</p>
        <p className='border-b-1 border-gray-300 py-2 text-gray-400 font-semibold pl-8'>Work Experience</p>
        <p className='border-b-1 border-gray-300 py-2 text-gray-400 font-semibold pl-8'>Education</p>
        <p className='border-b-1 border-gray-300 py-2 text-blue-600 font-semibold pl-8'>Key Skills</p>
      </aside>

      <aside className='w-96'>
        <h3 className='font-semibold text-md border-b-1 border-gray-300 mb-5'>Key Skills</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {skillsComponent.map((component) => component)}

          <p className='text-center border-b-1 border-gray-300 mb-5 mt-2 text-sm'><button className='text-blue-700 cursor-pointer '></button></p>

          <div className='text-center mt-5'>
            {/* Navigation Buttons */}
            <Link to={'/education'}> <button className='cursor-pointer bg-white text-blue-600 border-1 border-blue-600 px-7 py-1 rounded mr-6'>Back</button></Link>
            <input type="submit" value="Preview" className='cursor-pointer bg-blue-600 text-white px-5 py-1 rounded' />
          </div>
        </form>
        <p className='mb-5 mt-2 text-sm'><button className='text-blue-700 cursor-pointer' onClick={() => setSkillsComponent([...skillsComponent, component])}>Add new</button></p>
      </aside>
    </section>

  )
}

export default KeySkills
