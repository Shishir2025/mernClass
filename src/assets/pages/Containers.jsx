import React from 'react'

const Containers = () => {









    return (
        <div className='m-5'>



            <div >

                <div className=' text-center flex flex-col gap-5 mb-10'> <h1 className='text-5xl'>  Containers  </h1> <p> Use containers to create headers, sections and footers. </p>  </div>



                <div>
                    <header className='bg-gray-500 h-30 flex items-center pl-5 text-5xl text-white'> Header  </header>

                    <div className=' my-10  flex flex-col gap-4'>
                        <h1 className='text-3xl'>  London </h1>

                        <ul className='flex flex-col pl-1 gap-5 text-[1.1rem]'>

                            <li>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</li>
                            <li>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</li>
                            <li>By the way, you can add a close icon to all containers if you want the ability to hide them. Look to your right!</li>
                        </ul>

                    </div >



                    <footer className='bg-gray-500 h-30 flex flex-col justify-center p-5'>


                        <h1 className='  text-2xl text-white' > Footer  </h1>
                        <p>  Footer information goes here </p> </footer>



                </div>




            </div>















        </div>
    )
}

export default Containers