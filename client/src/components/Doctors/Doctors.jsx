import React from 'react'
import dr1 from './d1.png'
import dr2 from './d2.png'
import dr3 from './d3.png'
import dr4 from './d4.png'
// import StarRating from './Rating'

export default function Doctors() {

  const doctordata = [
    {
      status: "Available",
      drimg: dr1,
      drname: "Robert Henry",
      speciality: "Cardiologist",
      star: "103"
    },
    {
      status: "Available",
      drimg: dr2,
      drname: "Harry Litleton",
      speciality: "Neurologist",
      star: "97"
    },
    {
      status: "Available",
      drimg: dr3,
      drname: "Sanjeev Kapoor",
      speciality: "Child Specialist",
      star: "72"
    },
    {
      status: "Available",
      drimg: dr4,
      drname: "Sarina Khan",
      speciality: "Gynologist",
      star: "116"
    }
  ]
  return (
    <>
      <div className='bg-red-50 py-5'>
        <div>
          <h1 className='font-semibold text-3xl text-center mb-3'>Meet Our Doctors</h1>
          <p className='text-center text-gray-500 '>Well qualified doctors are ready to serve you </p>
        </div>
        <div className='flex flex-wrap justify-evenly w-1/2 m-auto my-5 '>
          {
            doctordata.map(
              (data) => {
                return (
                  <>
                    <div className='h-96 w-80 border rounded-xl bg-white m-3 shadow-lg'>
                      <div className='border w-24 text-center bg-gray-200 rounded-3xl px-4 text-sm ml-7 mb-2 mt-5'><p>{data.status}</p></div>
                      <div className='border h-40 rounded-2xl bg-red-400 w-60 m-auto relative'><img className='h-48 absolute bottom-0  mx-6' src={data.drimg} /></div>
                      <div className='text-center'>
                        <h1 className='font-semibold mt-2'>Dr. {data.drname}</h1>
                        <p className='text-sm'>{data.speciality}</p>
                        <p>
                          {/* star */}
                          <div className="flex justify-center mt-4">
                            <div className="flex text-yellow-500">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 15l-5.5 3 2-6-5-4h6.5L10 2l2 6h6.5l-5 4 2 6z" />
                              </svg>
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 15l-5.5 3 2-6-5-4h6.5L10 2l2 6h6.5l-5 4 2 6z" />
                              </svg>
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 15l-5.5 3 2-6-5-4h6.5L10 2l2 6h6.5l-5 4 2 6z" />
                              </svg>
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 15l-5.5 3 2-6-5-4h6.5L10 2l2 6h6.5l-5 4 2 6z" />
                              </svg>
                              <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 15l-5.5 3 2-6-5-4h6.5L10 2l2 6h6.5l-5 4 2 6z" />
                              </svg>
                              <span className='ml-2 text-gray-600'>({data.star})</span>
                            </div>
                          </div>

                        </p>
                        <button className='border border-green-400 rounded-2xl py-2 px-5 text-green-500 m-3 hover:bg-green-500 hover:text-white'>Book an Appointment</button>
                      </div>
                    
                    </div>
                  </>
                )
              }
            )
          }
         
        </div>
        <div className=' w-28 m-auto'>
        <button className=' items-center rounded-lg py-2 px-5 bg-green-500 text-white'>See More</button>
        </div>
        
      </div>
    </>
  )
}
