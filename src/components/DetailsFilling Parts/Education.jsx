import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { education } from '../../Redux/State/action'

const Education = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // Data Submit Function
  function onSubmit(data){
    dispatch(education(data))
    if(data.university && data.startyear && data.endyear){
      navigate('/skills')
    }
  }

  // Input Fields
  const component = <>  <p className='text-sm'>Type  </p>
    <select className='border-1 border-gray-400 rounded pl-3 py-1 w-[46%]' {...register("type", { required: { value: true, message: "This field is required" } })}>
      <option value="Primary education">Primary education</option>
      <option value="Secondary education">Secondary education or high school</option>
      <option value="Graduation">Graduation</option>
      <option value="Post Graduation">Post Graduation</option>
    </select>
    {errors.type && <div className='text-red-700 text-sm'>{errors.type.message}</div>}

    <div className='flex gap-4'>
      <div>
        <p className='text-sm'>University  </p>
        <input type="text" className='border-1 border-gray-400 rounded pl-4 py-1 w-full mr-14' {...register("university", { required: { value: true, message: "This field is required", minLength: { value: 3, message: "Min. length is 5" }, maxLength: { value: 12, message: "Max. length is 30" } } })} />
        {errors.university && <div className='text-red-700 text-sm'>{errors.university.message}</div>}
      </div>

      <div>
        <p className='text-sm'>Degree  </p>
        <select className='border-1 border-gray-400 rounded pl-3 py-1 w-[94%]' {...register("degree", { required: { value: true, message: "This field is required" } })}>
          <option value="B.A.">Bachelor of Arts </option>
          <option value="B.Sc.">Bachelor of Science</option>
          <option value="B.Tech">Bachelor of Technology</option>
          <option value="MBA">Master of Business Administration</option>
          <option value="Others">Others</option>
        </select>
        {errors.degree && <div className='text-red-700 text-sm'>{errors.degree.message}</div>}
      </div>
    </div>
    <div className='flex gap-4 mb-4'>
      <div>
        <p className='text-sm'>Start Year  </p>
        <input type="month" className='border-1 border-gray-400 rounded pl-4 py-1 w-full' {...register("startyear", { required: { value: true, message: "This field is required", minLength: { value: 3, message: "Min. length is 4" }, maxLength: { value: 12, message: "Max. length is 4" } } })} />
        {errors.startyear && <div className='text-red-700 text-sm'>{errors.startyear.message}</div>}
      </div>

      <div>
        <p className='text-sm'>End Year  </p>
        <input type="month" className='border-1 border-gray-400 rounded pl-4 py-1 w-full' {...register("endyear", { required: { value: true, message: "This field is required", minLength: { value: 3, message: "Min. length is 4" }, maxLength: { value: 12, message: "Max. length is 4" } } })} />
        {errors.endyear && <div className='text-red-700 text-sm'>{errors.endyear.message}</div>}
      </div>
    </div></>
  const [educationComponent, setEducationComponent] = useState([component])
  return (
    <section className='flex w-[90vw] md:w-[80vw] mx-auto mt-12 gap-32 sm:gap-8 lg:gap-32 flex-wrap sm:flex-nowrap'>
      {/* Shows Flow of Resume */}
      <aside className='w-60 h-52 flex flex-col gap-4 shadow-md'>
        <p className='border-b-1 border-gray-300 py-2 text-gray-400 font-semibold pl-8'>Personal Info</p>
        <p className='border-b-1 border-gray-300 py-2 text-gray-400 font-semibold pl-8'>Work Experience</p>
        <p className='border-b-1 border-gray-300 py-2 text-blue-600 font-semibold pl-8'>Education</p>
        <p className='border-b-1 border-gray-300 py-2 text-gray-400 font-semibold pl-8'>Key Skills</p>
      </aside>
      <aside className='w-96'>
        <h3 className='font-semibold text-md border-b-1 border-gray-300 mb-5'>Education Details</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {educationComponent.map((component) => component)}
          <div className='text-center mt-5'>
            {/* Navigation Buttons */}
            <Link to={'/experience'}><button className='cursor-pointer bg-white text-blue-600 border-1 border-blue-600 px-7 py-1 rounded mr-6'>Back</button></Link>
            <input type="submit" value="Next" className='cursor-pointer bg-blue-600 text-white px-7 py-1 rounded' />
          </div>
        </form>
        <p className='text-center border-b-1 border-gray-300 mb-5 mt-2 text-sm'><button className='text-blue-700 cursor-pointer' onClick={() => setEducationComponent([...educationComponent, component])}>Add more</button></p>
      </aside>
    </section>

  )
}

export default Education
