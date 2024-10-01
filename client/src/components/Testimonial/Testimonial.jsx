import React, { useState } from 'react';
import p1 from './p1.jpg';
import p2 from './p2.jpeg';
import p3 from './p3.jpeg';
import star from './star.png';

export default function Testimonial() {
    const patientdata = [
        {
            patient_img: p1,
            patient_name: "Simon Targett",
            patient_category: "Cardiologist patient",
            patient_feedback: "Thanks for all the services, no doubt it is the best hospital."
        },
        {
            patient_img: p2,
            patient_name: "Sara Ali Khan",
            patient_category: "Orthopedic patient",
            patient_feedback: "Amazing doctors and staff, very satisfied with the treatment."
        },
        {
            patient_img: p3,
            patient_name: "Jane Smith",
            patient_category: "Neurology patient",
            patient_feedback: "Excellent care, the doctors were very understanding."
        },
        {
            patient_img: p1,
            patient_name: "Sanjiv Rathod",
            patient_category: "Dermatology patient",
            patient_feedback: "Superb experience, highly recommend this hospital!"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((currentIndex - 1 + patientdata.length) % patientdata.length);
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % patientdata.length);
    };

    const getDisplayedItems = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % patientdata.length;
            items.push(patientdata[index]);
        }
        return items;
    };

    const itemsToDisplay = getDisplayedItems();

    return (
        <>
            <div className=' py-10'>
                <div>
                    <h1 className='font-semibold text-3xl text-center mb-3'>Patients Testimonial</h1>
                    <p className='text-center text-gray-500'>Let's see what our happy patients say</p>
                </div>
                <div className='flex flex-wrap justify-evenly w-3/4 m-auto my-5'>

                    <button
                        onClick={handlePrevious}
                        className="p-3 text-yellow-400 text-2xl font-bold hover:scale-110 transition-all duration-300"
                    >
                       <div className='h-9 w-9 rounded-full text-white bg-yellow-300'> {"<"}</div>
                    </button>

                    {itemsToDisplay.map((data, index) => (
                        <div key={index} className='flex h-44 w-80 bg-white rounded-lg shadow-lg m-2'>
                            <div className='h-20 w-20'>
                                <div className='h-16 w-16 bg-yellow-300 rounded-full relative m-4'>
                                    <img className='h-16 w-16 rounded-full absolute left-2' src={data.patient_img} alt={data.patient_name} />
                                </div>
                            </div>
                            <div className='h-32 w-52 m-auto p-2'>
                                <h2 className='font-semibold'>{data.patient_name}</h2>
                                <p className='text-xs text-gray-500'>{data.patient_category}</p>
                                <img className='mt-[-22px] ml-[-30px] h-20' src={star} alt="Rating" />
                                <p className='text-sm mt-[-15px] text-gray-500'>{data.patient_feedback}</p>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={handleNext}
                        className="p-3 text-yellow-400 text-2xl font-bold hover:scale-110 transition-all duration-300"
                    >
                        <div className='h-9 w-9 rounded-full text-white bg-yellow-300'> {">"}</div>
                       
                    </button>
                </div>
            </div>
        </>
    );
}
