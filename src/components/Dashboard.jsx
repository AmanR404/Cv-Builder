import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import {templatePicker} from '../Redux/State/action'

const Dashboard = () => {
    const dispatch = useDispatch()
    const pickedTemplate = useSelector((state=>state.chooseTemplate))

    const [button, setButton] = useState(false)
    const [button2, setButton2] = useState(false)
    const [button3, setButton3] = useState(false)
    const [button4, setButton4] = useState(false)

    const buttonVisible = ()=> {
        setButton(true)
    }
    const buttonVisible2 = ()=> {
        setButton2(true)
    }
    const buttonVisible3 = ()=> {
        setButton3(true)
    }
    const buttonVisible4 = ()=> {
        setButton4(true)
    }
    const buttonHider = () => {
        setButton(false); setButton2(false); setButton3(false);setButton4(false)
    }

  return (
    <section className='flex flex-col gap-4 ml-16 w-[80vw] sm:mx-auto mt-10'>
        <p className='font-bold text-2xl text-gray-700'>Templates</p>
        <p className='font-semibold text-gray-700 text-sm'>Select a Template to get Started</p>
        {/* Templates */}
        <div className='flex flex-wrap gap-8'>
            {/* Template1 */}
            <div className='relative w-210px h-64'><img onMouseOver={()=>buttonVisible()} onMouseOut={()=>buttonHider()} className='w-210px h-64 border-1 border-gray-300 cursor-pointer' src="/template1.png" alt="" />
            {button==true && <Link to={'/personal'}><button onClick={()=>dispatch(templatePicker(1))} onMouseOver={()=>buttonVisible()} className='absolute top-28 left-12 bg-blue-600 text-white px-2.5 py-1 rounded cursor-pointer'>Use Template</button></Link>}
            </div>
            {/* Template2 */}
            <div className='relative w-210px h-64'><img onMouseOver={()=>buttonVisible2()} onMouseOut={()=>buttonHider()} className='w-210px h-64 border-1 border-gray-300 cursor-pointer' src="/template2.png" alt="" />
            {button2==true && <Link to={'/personal'}><button onClick={()=>dispatch(templatePicker(2))}  onMouseOver={()=>buttonVisible2()} className='absolute top-28 left-12 bg-blue-600 text-white px-2.5 py-1 rounded cursor-pointer'>Use Template</button></Link>}
            </div>
            {/* Template3 */}
            <div className='relative w-210px h-64'><img onMouseOver={()=>buttonVisible3()} onMouseOut={()=>buttonHider()} className='w-210px h-64 border-1 border-gray-300 cursor-pointer' src="/template3.png" alt="" />
            {button3==true && <Link to={'/personal'}><button onClick={()=>dispatch(templatePicker(3))}  onMouseOver={()=>buttonVisible3()} className='absolute top-28 left-12 bg-blue-600 text-white px-2.5 py-1 rounded cursor-pointer'>Use Template</button></Link>}
            </div>
            {/* Template4 */}
            <div className='relative w-210px h-64'><img onMouseOver={()=>buttonVisible4()} onMouseOut={()=>buttonHider()} className='w-210px h-64 border-1 border-gray-300 cursor-pointer' src="/template4.png" alt="" />
            {button4==true && <Link to={'/personal'}><button onClick={()=>dispatch(templatePicker(4))}  onMouseOver={()=>buttonVisible4()} className='absolute top-28 left-12 bg-blue-600 text-white px-2.5 py-1 rounded cursor-pointer'>Use Template</button></Link>}
            </div>  
        </div>
    </section>
  )
}

export default Dashboard
