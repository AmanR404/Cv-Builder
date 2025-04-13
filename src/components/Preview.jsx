import React, { useRef } from 'react'
import Template1 from './Preview Templates/Template1'
import Template2 from './Preview Templates/Template2'
import Template3 from './Preview Templates/Template3'
import Template4 from './Preview Templates/Template4'
import { useSelector } from 'react-redux'
import html2canvas from 'html2canvas-pro'
import jsPDF from 'jspdf'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router'

const Preview = () => {
  const chooseTemplate = useSelector((state => state.chooseTemplate))
  const navigate = useNavigate()
  const printRef = useRef(null)

  // PDF Downloader Function
  const handleDownloadPDF = async() => {
    toast.success('Download Started...', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
      });

    const element = printRef.current
    const canvas = await html2canvas(element)
    const data = canvas.toDataURL('image/png')

    const pdf = new jsPDF({
      orientation : "portrait",
      unit : "px",
      format : "a4"
    })

    const imgProperties = pdf.getImageProperties(data)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('Resume.pdf')
  }

  return (
    <section className='w-[90%] lg:w-[60%] mx-auto mt-8'>
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
        <h2 className='font-semibold text-xl text-gray-700 mb-5'>Resume Preview</h2>
        <div className='flex gap-16 flex-wrap sm:flex-nowrap'>
            <div ref={printRef} className='w-[90%] sm:w-[60%] border-1 border-black rounded mb-4 pb-2'>
              {/* Templates Based on User Action */}
              {chooseTemplate == 1 && <Template1/>}
              {chooseTemplate == 2 && <Template2/>}
              {chooseTemplate == 3 && <Template3/>}
              {chooseTemplate == 4 && <Template4/>}
            </div>
            <div className='flex sm:flex-col gap-5 w-[35%]'>
                <button onClick={()=>navigate('/personal')} className='cursor-pointer w-[160px] sm:w-[130px] bg-white text-blue-600 border-1 border-blue-600 px-10 sm:px-7 py-1.5 rounded mr-3'>Start Over</button>
                <button onClick={handleDownloadPDF} className='cursor-pointer bg-blue-600 text-white px-7 sm:px-16 py-2 rounded'> Download </button>
            </div>
        </div>
    </section>
  )
}

export default Preview
