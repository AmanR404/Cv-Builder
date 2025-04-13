import React from 'react'

const About = () => {
  return (
    <section className='flex flex-col lg:flex-row py-16'>
        <div className='sm:w-[95%] md:w-[85%] lg:w-2/3 px-10 sm:px-24'>
            <p className='font-bold text-3xl mb-0.5'>Resume</p>
            <p className='font-bold text-3xl'>Builder</p>
            <p className='h-0.5 bg-blue-600 w-1/6 mb-4'></p>
            <p>Cv Builder dolor sit amet consectetur adipisicing elit. Earum quos adipisci eos tempora sint hic itaque libero nam quae dolores reiciendis, eligendi optio veniam sunt in natus suscipit corporis quia officiis eum? Sit reprehenderit dicta tempore ab quibusdam incidunt soluta distinctio maxime a eos quidem consectetur, qui exercitationem deleniti, corporis voluptas quisquam aspernatur repellat, nisi ratione aliquam! Reiciendis recusandae provident odio iste fugit, eveniet praesentium cumque dolores, beatae ratione, repudiandae voluptates! Quos, pariatur beatae. Amet odit blanditiis quis eaque ut!</p>
            <p className='font-semibold mt-5'>Share with your friends</p>
            {/* Social Media Buttons */}
            <div className='flex gap-3.5 w-6/12 sm:w-5/12 md:w-1/3 relative bottom-24'>
            <lord-icon
                src="https://cdn.lordicon.com/cxauoejw.json"
                trigger="hover"
                style={{width:'250px',height:'250px', cursor:'pointer'}}>
            </lord-icon>
            <lord-icon
                src="https://cdn.lordicon.com/dsdlqjde.json"
                trigger="hover"
                style={{width:'250px',height:'250px', cursor:'pointer'}}>
            </lord-icon>
            <lord-icon
                src="https://cdn.lordicon.com/vmxvhdko.json"
                trigger="hover"
                style={{width:'250px',height:'250px', cursor:'pointer'}}>
            </lord-icon>
            <lord-icon
                src="https://cdn.lordicon.com/ykddgejj.json"
                trigger="hover"
                style={{width:'250px',height:'250px', cursor:'pointer'}}>
            </lord-icon>
            <lord-icon
                src="https://cdn.lordicon.com/ozlkyfxg.json"
                trigger="hover"
                style={{width:'250px',height:'250px', cursor:'pointer'}}>
            </lord-icon>
            </div>
        </div>
        <div className='w-full pr-10'>
        <img src="/about.svg" alt="" /></div>
    </section>
  )
}

export default About
