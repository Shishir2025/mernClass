import React from 'react'

const Carbox = () => {
    const carsBox = [
        { img: "https://www.w3schools.com/w3images/car.jpg", text: "w3-card" },
        { img: "https://www.w3schools.com/w3images/car.jpg", text: "w3-card-4" },
        { img: "https://www.w3schools.com/w3images/car.jpg", text: "w3-card-4" },
    ];




    return (
        <div className='p-5'>

            <div className='flex gap-6 '>
                {carsBox.map(({ img, text }, index) => (

                    <div className='w-1/3 shadow-lg' key={index}>
                        <img className='w-full ' src={img} alt={text} />
                        <div className=' text-[1.2 rem] flex  p-5'>{text}</div>


                    </div>

                ))}


            </div>



        </div>
    )
}

export default Carbox;