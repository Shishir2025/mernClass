import React from 'react';
import { TfiAlignJustify } from "react-icons/tfi";


const Head = () => {
    return (
        <div className=' bg-black h-76'>
            <div className='text-white pl-5 pt-3' > <TfiAlignJustify />
            </div>

            <div className='pt-5 flex  justify-center items-center'>
                <div className='flex gap-5 flex-col text-white items-center'>



                    <p className='text-2xl'>BEAUTIFUL RESPONSIVE WEB SITES</p>
                    <h1 className='font-semibold text-5xl'>BUILT WITH W3.CSS </h1>
                    <button className='bg-gray-500 tracking-wide cursor-pointer text-white hover:bg-white hover:text-black mt-5 font-bold p-3 text-2xl'>LEARN W3.CSS</button>
                </div>



            </div>






        </div>
    )
}

export default Head