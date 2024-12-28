import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfile, getstaffdata } from '../../redux/actions/StaffProfileAction';
import ProfileForm from './PopUpProfile';

export default function Staff() {
  const [showModal, setShowModal] = useState(false); 
  const [selectedProfile, setSelectedProfile] = useState(null);
  const dispatch = useDispatch();

  const state = useSelector(state => state);
  console.log("allstates", state); 


  const { profile } = useSelector((state) => state.profile);

const handleDelete = async (profile) =>{
  console.log("Staff" , profile)
  const id = profile.id;
  dispatch(deleteProfile(id));
  window.location.reload()
}

const handleUpdate = (data) => {
  setSelectedProfile(data); 
  setShowModal(true);
};

  useEffect(() => {
    console.log("getstaffdata called")
    dispatch(getstaffdata());
  }, [dispatch]);


  return (
    <>
      <h1 className="font-bold text-3xl max-w-44 m-auto my-5">All Staff </h1>
<div className='bg-white opacity-70 p-5 rounded-lg w-full'>
<div className="mb-4 flex justify-center space-x-2">
          <input
            type="text"
            placeholder="Search Member ID or Name"
            className="w-2/5 p-2 border rounded-xl"
          />
        </div>
    <div className='w-[1110px] overflow-x-auto'>
    <table className="min-w-full bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className='py-2 px-4 border-b text-left'>Sr.No</th>
          <th className='py-2 px-4 border-b text-left'>Name</th>
          <th className='py-2 px-4 border-b text-left'>User</th>
          <th className='py-2 px-4 border-b text-left'>Email</th>
          <th className='py-2 px-4 border-b text-left'>Contact No</th>
          <th className='py-2 px-4 border-b text-left'>Specialization</th>
          <th className='py-2 px-4 border-b text-left'>Profession</th>
          <th className='py-2 px-4 border-b text-left'>Qualification</th>
          <th className='py-2 px-4 border-b text-left'>Department</th>
          <th className='py-2 px-4 border-b text-left'>Role</th>
          <th className='py-2 px-4 border-b text-left'>Action</th>
        </tr>
      </thead>
      <tbody>
      {profile && profile.length > 0 ? (
        profile.map((data, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b">{index + 1}</td>
            <td className="py-2 px-4 border-b">{data.fullName}</td>
            <td className="py-2 px-4 border-b">{data.user}</td>
            <td className="py-2 px-4 border-b">{data.email}</td>
            <td className="py-2 px-4 border-b">{data.contact_number}</td>
            <td className="py-2 px-4 border-b">{data.specialization}</td>
            <td className="py-2 px-4 border-b">{data.type}</td>
            <td className="py-2 px-4 border-b">{data.qualifications}</td>
            <td className="py-2 px-4 border-b">{data.department}</td>
            <td className="py-2 px-4 border-b">{data.role}</td>
            {/* <td className="border border-slate-500 px-3 py-1 cursor-pointer " onClick={() => handleUpdate(data)}>EDIT</td> */}
            <td className="py-2 px-4 border-b">  <button 
            className="px-4 py-2 bg-green-400 text-white font- rounded-md hover:bg-green-600"
            onClick={() => handleUpdate(data)}>EDIT </button></td>
            {/* <td className="border border-slate-500 px-3 py-1 cursor-pointer" onClick={() => handleDelete(data)}>delete</td> */}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="11" className="text-center py-2">No profiles available</td>
        </tr>
      )}
    </tbody>
    </table>
    </div>
</div>
    

      {showModal && selectedProfile && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
            <ProfileForm selectedProfile={selectedProfile} setShowModal={setShowModal} />
          </div>
        </div>
      )}

    </>
  );
}
