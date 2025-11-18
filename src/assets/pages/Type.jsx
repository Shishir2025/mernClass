import { HiTv } from "react-icons/hi2";
import { FaCss3 } from "react-icons/fa";
import { GrDiamond } from "react-icons/gr";


import React from 'react'

const Type = () => {

    const cssData = [
        {
            icon: <HiTv size={200} />,
            title: 'Responsive',
            properties: [
                'Built-in responsiveness',
                'Mobile first fluid grid',
                'Fits any screen sizes',
                'PC Tablet Mobile'
            ]
        },
        {
            icon: <FaCss3 size={200} />
            ,
            title: 'Standard CSS',
            properties: [
                'Standard CSS only',
                'Easy to learn',
                'No need for jQuery',
                'No JavaScript library'
            ]
        },
        {
            icon: <GrDiamond size={200} />,
            title: 'Design',
            properties: [
                'Paper like design',
                'Bold colors and shadows',
                'Equal across platforms',
                'Equal across devices'
            ]
        },
    ];


    return (
        <div className=" grid grid-cols-3 gap-3  ">


            {
                cssData.map(({ title, icon, properties }) => {

                    return (


                        <div className=" flex  flex-col shadow-xl py-5 justify-center items-center  gap-5" >




                            <div className="text-2xl">{title}</div>

                            <div>{icon}</div>






                            <div className="flex flex-col gap-2">


                                {


                                    properties.map((pA) => {
                                        return (
                                            <p className="text-center " >{pA}</p>
                                        )
                                    })
                                }


                            </div>












                        </div>
                    )



                })
            }









        </div >
    )
}

export default Type