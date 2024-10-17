import React from 'react'
import search from '../IMAGE/search.png'
import Header from '../Success/Navbar'
import Sidebar from '../History/Sidebar'

export default function IPD() {
    return (
        <>
        <Header/>
        <Sidebar />
            <div>
                <form className='m-auto  w-[70vw] pl-28'>

                    <label className='font-bold text-xl mx-3 text-gray-600'>Reports </label>
                    <input type='text'
                        placeholder='Search Patient Name'
                        className='w-[380px] mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px] ' />
                    <button className="bg-green-500 text-white font-semibold text-lg w-40 mx-3 py-2 rounded-lg">View History</button>
                    <button className="bg-red-500 text-white font-semibold text-lg w-40 mx-3 py-2 rounded-lg">Filter</button>
                    <br /><br />

                    <h1 className='font-bold text-xl text-gray-600 ml-10'>IPD Admission</h1><br />

                    <label className='font-bold text-lg  m-4   w-44 inline-block'>Date</label>
                    <input type='date' className='w-96 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' />
                    <input type='time' className='w-72 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' /><br />

                    <div className='flex'>
                        <label className='font-bold text-lg m-4   w-44 inline-block'>IPDNo/UHID</label>
                        <input type='number' placeholder='IPD-9/22-23' className='w-52 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' />
                        <input type='number' placeholder='3456789098765' className='w-52 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' />
                        <select className='w-40 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                            <option >OPD</option>
                        </select>
                        <div className='bg-red-400 h-12 px-1  border-zinc-300 text-black rounded-lg mb-4  '>
                            <img src={search} className='h-6 m-3' />
                        </div>
                    </div>

                    <label className='font-bold text-lg m-4   w-44 inline-block'>Patient</label>
                    <select className='w-[345px] mx-3 p-2 border-zinc-300 text-black rounded-l-lg mb-4  border-[1px]'>
                        <option >Select Patient</option>
                    </select>
                    <span className='bg-green-600 h-12 font-extrabold text-2xl text-white -ml-4 rounded-r-lg p-[3px] px-3 pb-[8px] '>+</span><br />


                    <label className='font-bold text-lg m-4   w-44 inline-block'>Gender</label>
                    <select className='w-96 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                        <option >Select Gender</option>
                    </select><br />


                    <label className='font-bold text-lg m-4   w-44 inline-block'>Age/DOB</label>
                    <input type='number' placeholder='Year' className='w-36 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' />
                    <input type='number' placeholder='Month' className='w-36 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' />
                    <input type='number' placeholder='Day' className='w-36 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' />
                    <input type='date' className='w-48 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' /><br />

                    <label className='font-bold text-lg m-4   w-44 inline-block'>Consultant</label>
                    <select className='w-96 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                        <option >Select </option>
                    </select>
                    <br />


                    <label className='font-bold text-lg m-4   w-44 inline-block'>Department</label>
                    <select className='w-96 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                        <option >Select </option>
                    </select><br />


                    <label className='font-bold text-lg m-4   w-44 inline-block'>Room</label>
                    <select className='w-96 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                        <option >Select </option>
                    </select><button className='bg-gray-200 font-semibold text-slate-700 text-lg w-40 px-3 py-2 rounded-lg'>Current Room</button><br />


                    <label className='font-bold text-lg m-4   w-44 inline-block'>Gaurdian</label>
                    <select className='w-[330px]  mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                        <option >Select </option>
                    </select>
                    <input type='text' placeholder='Gaurdian Name' className='w-[340px] mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' /><br />


                    <label className='font-bold text-lg m-4   w-44 inline-block'>Mobile</label>
                    <input type='number' placeholder='Mobile 1' className='w-[330px]  mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' />
                    <input type='number' placeholder='Mobile 2' className='w-[340px] mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' /><br />


                    <label className='font-bold text-lg m-4   w-44 inline-block'>Email</label>
                    <input type='email' placeholder='Email' className='w-96 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' /><br />


                    <div className='flex'>
                        <label className='font-bold text-lg m-4 w-44 inline-block'>Address</label>
                        <textarea type='text' placeholder='Address' className='w-1/2 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' /><br />
                    </div>


                    <label className='font-bold text-lg m-4   w-44 inline-block'>Occupation</label>
                    <select className='w-[330px] mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                        <option >Select </option>
                    </select>
                    <select className='w-[330px] mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                        <option >Select </option>
                    </select><br />


                    <label className='font-bold text-lg m-4   w-44 inline-block'>State</label>
                    <select className='w-[330px] mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                        <option >Select </option>
                    </select><br />


                    <label className='font-bold text-lg m-4   w-44 inline-block'>IPD File No</label>
                    <input type='number' placeholder='IPD File No' className='w-[330px] mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' />
                    <br />


                    <label className='font-bold text-lg m-4   w-44 inline-block'>Remark</label>
                    <input type='text' placeholder='Remark' className='w-[330px] mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' />
                    <br />


                    <div className='flex'>
                        <label className='font-bold text-lg m-4   w-44 inline-block'>Attachment</label>
                        <input type='file' className='w-[330px] mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4   border-[1px]' />
                        <div className='bg-red-400 h-12 px-1  border-zinc-300 text-black rounded-lg mb-4  '>
                            <img src={search} className='h-6 m-3' />
                        </div>
                    </div>

                    <label className='font-bold text-lg m-4   w-44 inline-block'>Package</label>
                    <select className='w-56 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                        <option >No </option>
                    </select><br /><br />


                    <h1 className='font-bold text-xl text-gray-600 ml-10'>IPD Case</h1><br />

                    <label className='font-bold text-lg m-4   w-44 inline-block'>Case Type</label>
                    <select className='w-[330px] mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                        <option >Select </option>
                    </select><br />

                    <label className='font-bold text-lg m-4   w-44 inline-block'>Ref By Dr.</label>
                    <select className='w-[330px] mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                        <option >Select </option>
                    </select><br />


                    <label className='font-bold text-lg m-4   w-44 inline-block'>Package</label>
                    <select className='w-56 mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                        <option >No </option>
                    </select> <button className="bg-red-500 text-white font-semibold text-lg w-36 mx-3 py-2 rounded-lg">Show</button><br />


                    <label className='font-bold text-lg m-4   w-44 inline-block'>Relation</label>
                    <select className='w-[330px]  mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]'>
                        <option >Select </option>
                    </select>
                    <input type='text' placeholder='Care Name' className='w-[340px] mx-3 p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px]' /><br />

                    <div className='border w-44 m-auto my-10'>
                        <button className=' items-center w-44 rounded-lg py-3 font-bold px-5 bg-green-500 text-white'>Create Report</button>
                    </div>
                </form>
            </div>
        </>
    )
}
