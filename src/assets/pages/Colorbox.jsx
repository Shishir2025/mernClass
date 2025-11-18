import React from 'react'

const Colorbox = () => {


    const colorBox = [
        { label: 'Red', color: "bg-red-500" },
        { label: 'Blue', color: "bg-blue-500" },
        { label: 'Blue gray', color: 'bg-gray-500' },
        { label: 'Teal', color: 'bg-teal-500' },
        { label: 'Orange', color: 'bg-orange-500' },

    ]




    return (


        <div className='border-t border-b boder-2 border-gray-200 mt-10 flex flex-col gap-3 '>


            <div className='text-center text-4xl'>Color Classes</div>




            <div className='flex h-22'>
                {



                    colorBox.map(({ label, color }) => {

                        return (
                            <div className='grow text-center   text-white'>
                                <h1 className={`${color} p-2`} >{label}</h1>
                            </div>
                        )


                    })



                }






            </div >
        </div>
    )
}

export default Colorbox;