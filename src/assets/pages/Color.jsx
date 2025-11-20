import React from 'react'

const Color = () => {

    const movieCard = [

        {
            title: "Frozen",
            desc: "The response to the animations was ridiculous",
        },
        {
            title: "The Fault in Our Stars",
            desc: "Touching, gripping and genuinely well made",
        },
        {
            title: "The Avengers",
            desc: "A huge success for Marvel and Disney",
        },
    ];








    return (
        <div className='mt-20'>

            <div >



                <div className='flex flex-col text-center gap-5'>
                    <h1 className='text-5xl'> Color Themes </h1>
                    <p className='text-[1.2rem]'>The color themes have been designed to work harmoniously with each other.</p>



                </div>


                <div className='w-ful flex gap-5 mt-10'>


                    <div className='w-1/2 box text-[1.5rem] shadow-2xl '>
                        <div className='bg-blue-500 p-5   text-white font-2xl '> Theme Indigo </div>
                        <div className=' p-5 py-5 text-blue-500 border-b-[0.1rem] border-gray-400'>  Movies 2014 </div>




                        {

                            movieCard.map(({ title, desc }, ind) => (
                                <div className='border-b-[0.1rem] p-5  border-gray-400' key={ind}>


                                    <div>{title}</div>
                                    <div className='text-[1rem]'>{desc}</div>
                                </div>
                            ))





                        }

                        <div className='bg-blue-500 pr-5 text-white flex justify-end'> Next</div>





                    </div>





                    <div className='w-1/2 box text-[1.5rem] shadow-2xl '>
                        <div className='bg-black p-5   text-white font-2xl '> Theme </div>
                        <div className=' p-5 py-5  border-b-[0.1rem] border-gray-400'>  Movies 2014 </div>




                        {

                            movieCard.map(({ title, desc }, ind) => (
                                <div className='border-b-[0.1rem] p-5  border-gray-400' key={ind}>


                                    <div>{title}</div>
                                    <div className='text-[1rem]'>{desc}</div>
                                </div>
                            ))





                        }

                        <div className='bg-black pr-5 text-white flex justify-end'> Next</div>





                    </div>


















                </div>










            </div>








        </div >
    )
}

export default Color