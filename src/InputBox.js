import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const InputBox = ({model,setModel}) => {
    const [coin1,setCoin1] = useState(0)
    const [coin2,setCoin2] = useState(0)
  return (
    <div>
        <h1 className='text-[50px] font-bold text-center mx-auto pt-24 '>Swap anytime, <br/>anywhere</h1>
        <div className='bg-white rounded-lg my-24 w-[30%] mx-auto py-2 px-0'>
            <div>
                <div className='bg-gray-100 flex justify-between items-center mx-4 p-8 rounded-lg'>
                    <div className='text-md'>
                        <p>you pay</p>
                        <input className='bg-gray-100 p-2' type='number' value={coin1} onChange={(e)=>{setCoin1(e.target.value)}}/>
                    </div>
                    <div>
                        <button className='rounded-full bg-pink-400 p-2 flex  text-white text-xl' onClick={()=>setModel(!model)}><p>Select Token</p>  <RiArrowDropDownLine size={30}/></button>
                       
                    </div>
                </div>
                <div className='bg-gray-100 flex justify-between items-center mx-4 p-8 rounded-lg my-2'>
                    <div className='text-md'>
                        <p>you recive</p>
                        <input className='bg-gray-100 p-2' type='number' value={coin2} onChange={(e)=>{setCoin2(e.target.value)}}/>
                    </div>
                    <div>
                        <button className='rounded-full bg-pink-400 p-2 flex text-white text-xl' onClick={()=>setModel(!model)} ><p>Select Token</p> <RiArrowDropDownLine size={30}/></button>    
                    </div>
                </div>
            </div>
            <div>
                <button className='text-pink-700 bg-pink-200 hover:opacity-50 rounded-lg p-4 w-[93%] mx-4'>Connect to wallet</button>
            </div>
        </div>
    </div>
  )
}

export default InputBox