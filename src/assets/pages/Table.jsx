import React from 'react'

const Table = () => {

    const tableData = [
        { first: "Jill", last: "Smith", points: 50 },
        { first: "Eve", last: "Jackson", points: 94 },
        { first: "Adam", last: "Johnson", points: 67 },
    ];



    return (
        <div className=' shadow-xl pt-10'>


            <div className='text-center'> <h1 className='text-4xl'>Tables </h1>
                <p>Don't worry. W3.CSS takes care of your tables.</p>

            </div>


            <div className='p-10'>

                <table className='w-full border-collapse shadow-lg'>
                    <thead>
                        <tr className='text-white bg-black' >
                            <th className='p-3 text-left font-semibold'> First Name</th>
                            <th className='p-3 text-left font-semibold' >Last Name</th>
                            <th className='p-3 text-left font-semibold' >Points</th>


                        </tr>
                    </thead>


                    <tbody>
                        {tableData.map(({ first, last, points }, index) => (
                            <tr className='border-b border-gray-300 ' key={index}>
                                <td className='p-3'> {first}</td>
                                <td className='p-3' > {last}</td>
                                <td className='p-3' > {points}</td>



                            </tr>
                        ))}


                    </tbody>




                </table>





            </div>



        </div>
    )
}

export default Table