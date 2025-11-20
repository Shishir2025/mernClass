import React from 'react'

const Accordins = () => {

    const values = [
        { text: "Open Section 1", color: "hover:bg-gray-500" },
        { text: "Open Section 2", color: "hover:bg-gray-500" },
        { text: "Open Section 3", color: "hover:bg-gray-500" },

    ]


    return (
        <div >



            <div className=' mt-10'>

                <h1 className='text-4xl mb-10 text-center'> Accordions</h1>


                <div>

                    {values.map(({ text, color }) => (
                        <div className={`${color}  bg-black cursor-pointer text-white h-15 p-3 align-middle text-[1.4rem] gap-10`}  > {text}</div>
                    ))}

                </div>



            </div>






        </div >
    )
}






export default Accordins






