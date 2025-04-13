import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { personalData } from '../../Redux/State/action'

const Personalinfo = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();

    // React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // Data Submit Function
    function onSubmit(data) {
        dispatch(personalData(data))
        if (data.objective && data.postcode && data.firstname && data.email && data.number) {
            navigate('/experience')
        }
    }
    return (
        <section className='flex w-[80vw] flex-wrap sm:flex-nowrap mx-auto mt-12 gap-32 sm:gap-20 md:gap-32'>
            {/* Shows Flow of Resume */}
            <aside className='w-60 h-52 flex flex-col gap-4 shadow-md'>
                <p className='border-b-1 border-gray-300 py-2 text-blue-600 font-semibold pl-8'>Personal Info</p>
                <p className='border-b-1 border-gray-300 py-2 text-gray-400 font-semibold pl-8'>Work Experience</p>
                <p className='border-b-1 border-gray-300 py-2 text-gray-400 font-semibold pl-8'>Education</p>
                <p className='border-b-1 border-gray-300 py-2 text-gray-400 font-semibold pl-8'>Key Skills</p>
            </aside>
            <aside className='w-96'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Input Fields */}
                    <div className='flex gap-4'>
                        <div>
                            <p className='text-sm'>First name  </p>
                            <input
                                type="text"
                                className="border border-gray-400 rounded pl-4 py-1 w-full"
                                {...register("firstname", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 3,
                                        message: "Min. length is 3",
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: "Max. length is 12",
                                    },
                                })}
                            />
                            {errors.firstname && <div className='text-red-700 text-sm'>{errors.firstname.message}</div>}
                        </div>

                        <div>
                            <p className='text-sm'>Last name  </p>
                            <input
                                type="text"
                                className="border border-gray-400 rounded pl-4 py-1 w-full"
                                {...register("lastname", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 3,
                                        message: "Min. length is 3",
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: "Max. length is 12",
                                    },
                                })}
                            />
                            {errors.lastname && <div className='text-red-700 text-sm'>{errors.lastname.message}</div>}
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <div>
                            <p className='text-sm'>Email  </p>
                            <input
                                type="email"
                                className="border border-gray-400 rounded pl-4 py-1 w-full"
                                {...register("email", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 3,
                                        message: "Min. length is 3",
                                    },
                                    maxLength: {
                                        value: 25,
                                        message: "Max. length is 25",
                                    },
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email address",
                                    },
                                })}
                            />
                            {errors.email && <div className='text-red-700 text-sm'>{errors.email.message}</div>}
                        </div>

                        <div>
                            <p className='text-sm'>Phone number   </p>
                            <input
                                type="number"
                                className="border border-gray-400 rounded pl-4 py-1 w-full"
                                {...register("number", {
                                    required: "This field is required",
                                    min: {
                                        value: 1000000000,
                                        message: "Number must be 10 digits",
                                    },
                                    max: {
                                        value: 999999999999,
                                        message: "Max. can be 12 digits",
                                    },
                                })}
                            />
                            {errors.number && <div className='text-red-700 text-sm'>{errors.number.message}</div>}
                        </div>
                    </div>

                    <p className='text-sm'>Address </p>
                    <input
                        type="text"
                        className="border border-gray-400 rounded pl-4 py-1 w-full"
                        {...register("address", {
                            required: "This field is required",
                            minLength: {
                                value: 3,
                                message: "Min. length is 3",
                            },
                            maxLength: {
                                value: 50,
                                message: "Max. length is 50",
                            },
                        })}
                    />
                    {errors.address && <div className='text-red-700 text-sm'>{errors.address.message}</div>}

                    <div className='flex gap-4'>
                        <div>
                            <p className='text-sm'>City   </p>
                            <input
                                type="text"
                                className="border border-gray-400 rounded pl-4 py-1 w-full"
                                {...register("city", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 3,
                                        message: "Min. length is 3",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Max. length is 20",
                                    },
                                })}
                            />
                            {errors.city && <div className='text-red-700 text-sm'>{errors.city.message}</div>}
                        </div>

                        <div>
                            <p className='text-sm'>State   </p>
                            <input
                                type="text"
                                className="border border-gray-400 rounded pl-4 py-1 w-full"
                                {...register("state", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 2,
                                        message: "Min. length is 2",
                                    },
                                    maxLength: {
                                        value: 40,
                                        message: "Max. length is 40",
                                    },
                                })}
                            />
                            {errors.state && <div className='text-red-700 text-sm'>{errors.state.message}</div>}
                        </div>
                    </div>

                    <p className='text-sm'>Postal code   </p>
                    <input
                        type="text"
                        className="border border-gray-400 rounded pl-4 py-1 w-full"
                        {...register("postcode", {
                            required: "This field is required",
                            minLength: {
                                value: 6,
                                message: "Min. length is 6",
                            },
                            maxLength: {
                                value: 6,
                                message: "Max. length is 6",
                            },
                        })}
                    />
                    {errors.postcode && <div className='text-red-700 text-sm'>{errors.postcode.message}</div>}

                    <p className='text-sm'>Objective   </p>
                    <input
                        type="text"
                        className="border border-gray-400 rounded pl-4 py-1 w-full"
                        {...register("objective", {
                            required: "This field is required",
                            minLength: {
                                value: 20,
                                message: "Min. length is 20",
                            },
                            maxLength: {
                                value: 100,
                                message: "Max. length is 100",
                            },
                        })}
                    />
                    {errors.objective && <div className='text-red-700 text-sm'>{errors.objective.message}</div>}

                    {/* Navigation Buttons */}
                    <div className='text-center mt-5'>
                        <button className='cursor-pointer bg-white text-blue-600 border-1 border-blue-600 px-7 py-1 rounded mr-6'>Back</button>
                        <input type="submit" value="Next" className='cursor-pointer bg-blue-600 text-white px-7 py-1 rounded' />
                    </div>
                </form>
            </aside>
        </section>

    )
}

export default Personalinfo
