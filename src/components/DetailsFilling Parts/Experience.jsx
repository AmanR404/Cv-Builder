import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { experience } from '../../Redux/State/action'

const Experience = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // Data Submit Function
  const onSubmit = (data) => {
    dispatch(experience(data));
    navigate('/education')
  }

  // Input Fields
  const componentData = <div className='mb-4'>
    <p className='text-sm border-b-1 border-gray-300 mb-5'>Experience</p>
    <div className='flex gap-4'>
      <div>
        <p className='text-sm'>Job Title  </p>
        <input type="text" className='border-1 border-gray-400 rounded pl-4 py-1 w-full' {...register("jobtitle")} />
        {errors.jobtitle && <div className='text-red-700 text-sm'>{errors.jobtitle.message}</div>}
      </div>

      <div>
        <p className='text-sm'>Organization name  </p>
        <input type="text" className='border-1 border-gray-400 rounded pl-4 py-1 w-full' {...register("organization")} />
        {errors.organization && <div className='text-red-700 text-sm'>{errors.organization.message}</div>}
      </div>
    </div>
    <div className='flex gap-4'>
      <div>
        <p className='text-sm'>Start Year  </p>
        <input type='month' className='border-1 border-gray-400 rounded pl-4 py-1 w-full mr-2' {...register("startyear")} />
        {errors.startyear && <div className='text-red-700 text-sm'>{errors.startyear.message}</div>}
      </div>

      <div>
        <p className='text-sm'>End Year  </p>
        <input type="month" className='border-1 border-gray-400 rounded pl-4 py-1 w-full' {...register("endyear")} />
        {errors.endyear && <div className='text-red-700 text-sm'>{errors.endyear.message}</div>}
      </div>
    </div>
  </div>

  const [component, setComponent] = useState([componentData])
  return (
    <section className='flex w-[90vw] md:w-[80vw] mx-auto mt-12 gap-32 sm:gap-8 lg:gap-32 flex-wrap sm:flex-nowrap'>
      {/* Shows Flow of Resume */}
      <aside className='w-60 h-52 flex flex-col gap-4 shadow-md'>
        <p className='border-b-1 border-gray-300 py-2 text-gray-400 font-semibold pl-8'>Personal Info</p>
        <p className='border-b-1 border-gray-300 py-2 text-blue-600 font-semibold pl-8'>Work Experience</p>
        <p className='border-b-1 border-gray-300 py-2 text-gray-400 font-semibold pl-8'>Education</p>
        <p className='border-b-1 border-gray-300 py-2 text-gray-400 font-semibold pl-8'>Key Skills</p>
      </aside>
      <aside className='w-96'>
        <h3 className='font-semibold text-md'>Work Experience</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {component.map(component => component)}
          <div className='text-center mt-5'>
             {/* Navigation Buttons */}
            <Link to={'/personal'}><button className='cursor-pointer bg-white text-blue-600 border-1 border-blue-600 px-7 py-1 rounded mr-6'>Back</button></Link>
            <input type="submit" value="Next" className='cursor-pointer bg-blue-600 text-white px-7 py-1 rounded' />
          </div>
        </form>
        <p className='text-center border-b-1 border-gray-300 mb-5 mt-2 text-sm'><button className='text-blue-700 cursor-pointer' onClick={() => setComponent([...component, componentData])}>Add more</button></p>
      </aside>
    </section>
  )
}

export default Experience
