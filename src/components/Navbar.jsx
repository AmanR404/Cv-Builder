import React from 'react'
import { Link } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Navbar = () => {
  const handleResumes = () => {
      toast.success('No Saved Resumes Available...', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          });
  }
 
  return (
    <>
    <ToastContainer
                      position="bottom-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss={false}
                      draggable
                      pauseOnHover
                      theme="dark"
                     />
    <nav className='h-[15vh] flex justify-between items-center px-10 border-gray-500 border-y-1 shadow-md'>
    <Link to={'/'}>
    <div> 
    {/* Website Logo */}
      <span className='bg-red-600 text-white font-bold text-2xl rounded mr-0.5 px-0.5'>Cv</span><span className='font-bold text-gray-600 text-xl'>Builder</span>
    </div>
    </Link>
    {/* Navigations */}
    <ul className='flex gap-6 font-semibold text-gray-600'>
        <Link><li className='hover:text-black hidden sm:inline-block'>Resume Templates</li></Link>
        <Link><li className='hover:text-black' onClick={handleResumes}>My Resumes</li></Link> 
        <Link to={'/about'}><li className='hover:text-black'>About Us</li></Link>
    </ul>
  </nav>
  </>
  )
}

export default Navbar
