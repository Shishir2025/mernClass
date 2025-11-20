import React from "react";
import { PiPlaceholder } from "react-icons/pi";

const Formlist = () => {
    const inputText = [
        { placeholder: "", label: "Name", type: "text" },
        { placeholder: "", label: "Email", type: "email" },
        { placeholder: "", label: "Subject", type: "text" },
    ];

    const checkboxes = [
        { label: "Milk", checked: true, disabled: false },
        { label: "Sugar", checked: false, disabled: false },
        { label: "Lemon (Disabled)", checked: false, disabled: true },
    ];

    const radios = [
        { label: "Male", value: "male", checked: true, disabled: false },
        { label: "Female", value: "female", checked: false, disabled: false },
        {
            label: "Don't know (Disabled)",
            value: "unknown",
            checked: false,
            disabled: true,
        },
    ];

    const people = ["Jill", "Eve", "Adam"];
    const people2 = [...people, "Steve"];





    return (
        <div>
            <h1>Forms and Lists</h1>

            <div className="w-full grid grid-cols-2  gap-5">


                <div className="  shadow-2xl">

                    <div className="m-10 text-2xl">


                        <h1 className="text-2xl">Input Form</h1>
                        {inputText.map(({ placeholder, label, type }, index) => (
                            <div key={index}>
                                <input type={type} />
                                <h1>{label}</h1>
                            </div>
                        ))}

                        <div className="grid grid-cols-2 m-5">
                            <div className="p-">
                                {" "}
                                {checkboxes.map(({ label, checked, disabled }, indx) => (
                                    <div key={indx}>
                                        <input
                                            type={"checkbox"}
                                            defaultChecked={checked}
                                            disabled={disabled}
                                        />
                                        <span
                                            className={disabled ? "text-gray-400" : "text-gray-800"}
                                        >
                                            {" "}
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div>
                                {radios.map(({ label, value, checked, disabled }, i) => (
                                    <div key={i}>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value={value}
                                            defaultChecked={checked}
                                            disabled={disabled}
                                        />
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>



                <div className=" shadow-2xl">

                    <div className="p-10 text-2xl">
                        <div >

                            <h1 className="text-3xl" >  Lists  </h1>

                            {people.map((p1, i) => (
                                <div className="" key={i}> {p1} </div>
                            ))}

                        </div> <div className="pt-5">  {people2.map((p2, i2) => (
                            <div className="border-gray-400 border-[.2rem]" >   <div key={i2} className="           "    > {p2} </div> </div>
                        ))}</div>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Formlist;
