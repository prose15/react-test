import React from 'react'
import { IoMdClose } from "react-icons/io";

const Model = ({model ,setModel}) => {
    const Coins = [{
        id : "ETH",
        name : "ETH"
    },
    {
        id : "BTH",
        name : "BTH"
    },
    {
        id : "DAI",
        name : "DAI"
    },
    {
        id : "USTC",
        name : "USTC"
    },
]

  return (
    <div>
           <div className='bg-black bg-opacity-50 w-full h-screen'>
            <div className='bg-white rounded-lg mx-auto w-[30%]'>
                <div className='flex justify-between p-4 '>
                <p className='text-black'>Select Token</p>
                <button className='' onClick={(prev)=>setModel(!prev)}><IoMdClose /></button>
                </div>
                <div className='flex justify-center'>
                    <input className='p-4 bg-gray-200 w-[80%] rounded-lg' placeholder='Search name or paste address'/>
                </div>
                <div className=''>
                    <ul className='flex flex-wrap m-4 p-4 justify-evenly'>
                        {Coins.map((data)=><li className='rounded-full bg-gray-100 p-4 hover:opacity-50 font-bold'>{data.name}</li>)}
                    </ul>
                </div>
            </div>
            
            </div>
    </div>
  )
}

export default Model