import React from 'react'

const Respon = () => {
    return (
        <div className='my-10'>

            <div className='flex flex-col justify-center text-center gap-2'>
                <h1 className='font-semibold text-3xl'> Built-In Responsiveness </h1>
                <p className='text-'>Resize the page to see the effect!</p>


            </div>







            <div className='flex flex-col my-6 gap-5 text-[1.12rem]' >

                <div className='grid grid-cols-2 border-2  border-gray-400 h-30'>

                    <div className=' flex flex-col justify-center py-4 px-5 bg-sky-500 '>
                        <h1 cls>w3-half </h1>


                        <ul> <li> The w3-half class uses half (50%) of the screen window.</li>
                            <li>On small screens (max 600 pixels) it automatically resizes to full screen width.</li>
                        </ul>
                    </div>
                    <h1> w3-half  </h1>
                </div>



                <div className='grid grid-cols-3 h-30 border-2  border-gray-400'>

                    <div className=' flex flex-col justify-center py-4 px-5 bg-green-500 '>
                        <h1 cls>w3-third</h1>


                        <ul> <li> The w3-half class uses half (50%) of the screen window.</li>
                            <li>On small screens (max 600 pixels) it automatically resizes to full screen width.</li>
                        </ul>
                    </div>
                    <h1> w3-third </h1>
                    <h1> w3-third </h1>

                </div>




                <div className='grid grid-cols-4 h-30 border-2  border-gray-400'>

                    <div className=' flex flex-col justify-center py-4 px-5 bg-red-500 '>
                        <h1 cls>w3-quarter</h1>


                        <ul> <li> The w3-half class uses half (50%) of the screen window.</li>
                            <li>On small screens (max 600 pixels) it automatically resizes to full screen width.</li>
                        </ul>
                    </div>
                    <h1> w3-quarter </h1>
                    <h1> w3-quarter </h1>
                    <h1> w3-quarter </h1>
                </div>



            </div>
        </div>
    )
}

export default Respon