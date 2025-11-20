import React from 'react'

const Bar = () => {
    return (
        <div className='mt-10 px-5'>

            <h1 className=' text-center text-4xl' >Progress Bars </h1>

            <div className='flex flex-col pt-10 gap-5'>


                <div className='bg-gray-200'> <h1 className=' bg-black w-1/12 text-white p-2'> 5%  </h1></div>
                <div className='bg-gray-200 '> <h1 className=' cursor-pointer bg-black w-1/12 text-white p-2'> Click Me  </h1></div>


            </div>

        </div>
    )
}

export default Bar