import React from 'react'

const Tab = () => {


    const values = [{ text: "London", color: "hover:text-gray-400" },
    { text: "Paris", color: "hover:text-gray-400" },
    { text: "Tokyo", color: "hover:text-gray-400" }
    ]
    return (
        <div><h1 className='text-center'>Tabs</h1>


            <div className='w-full'> <div> {values.map(({ text, color }) => (
                <div className={`${color}`}>   {text}</div>
            ))} </div></div>






        </div>
    )
}

export default Tab