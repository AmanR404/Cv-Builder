import React from 'react'

const About = () => {
  return (
    <section className='flex flex-col lg:flex-row py-16'>
        <div className='sm:w-[95%] md:w-[85%] lg:w-2/3 px-10 sm:px-24'>
            <p className='font-bold text-3xl mb-0.5'>Resume</p>
            <p className='font-bold text-3xl'>Builder</p>
            <p className='h-0.5 bg-blue-600 w-1/6 mb-4'></p>
            <p>Cv Builder is a responsive web application built with React, Tailwind CSS, Redux, and React Hook Form that allows users to create professional resumes quickly and efficiently. Users can input personal and professional details through a dynamic form, with real-time validation. qui exercitationem deleniti, corporis voluptas quisquam aspernatur repellat, nisi ratione aliquam! Reiciendis recusandae provident odio iste fugit, eveniet praesentium cumque dolores, beatae ratione the final resume can be previewed and exported as a PDF.
            </p>
            <p className='font-semibold mt-5'>Share with your friends</p>
            {/* Social Media Buttons */}
            <div className='flex gap-3.5 w-6/12 sm:w-5/12 md:w-1/3 relative bottom-24'>
                <a href='https://www.facebook.com/sharer/sharer.php?u=https://cv-builder-chi-nine.vercel.app/' target='_blank'> <lord-icon
                    src="https://cdn.lordicon.com/cxauoejw.json"
                    trigger="hover"
                    style={{width:'35px',height:'250px', cursor:'pointer'}}>
                </lord-icon></a>
                <a href='https://www.linkedin.com/sharing/share-offsite/?url=https://cv-builder-chi-nine.vercel.app/' target='_blank'> <lord-icon
                    src="https://cdn.lordicon.com/dsdlqjde.json"
                    trigger="hover"
                    style={{width:'35px',height:'250px', cursor:'pointer'}}>
                </lord-icon></a>
                <a href='https://api.whatsapp.com/send?text=Check%20this%20awesome%20Resume%20Builder:%20https://cv-builder-chi-nine.vercel.app/' target='_blank'> <lord-icon
                    src="https://cdn.lordicon.com/vmxvhdko.json"
                    trigger="hover"
                    style={{width:'35px',height:'250px', cursor:'pointer'}}>
                </lord-icon></a>
                <a href='https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20Resume%20Builder!&url=https://cv-builder-chi-nine.vercel.app/' target='_blank'> <lord-icon
                    src="https://cdn.lordicon.com/ykddgejj.json"
                    trigger="hover"
                    style={{width:'35px',height:'250px', cursor:'pointer'}}>
                </lord-icon></a>
                <a href='mailto:?subject=Check%20out%20this%20awesome%20Resume%20Builder!&body=You%20can%20try%20it%20here:%20https://cv-builder-chi-nine.vercel.app/' target='_blank'> <lord-icon
                    src="https://cdn.lordicon.com/ozlkyfxg.json"
                    trigger="hover"
                    style={{width:'35px',height:'250px', cursor:'pointer'}}>
                </lord-icon></a>
            </div>
        </div>
        <div className='w-1/2 pr-10 mx-auto'>
        <img src="/about.svg" alt="" /></div>
    </section>
  )
}

export default About
