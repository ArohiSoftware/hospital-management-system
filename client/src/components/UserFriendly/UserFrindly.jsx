import uparrow from './uparrow.png'

export default function UserFrindly() {
  return (
    <div className='bg-pink-50 py-10'>
    <div>
        <h1 className='font-semibold text-3xl text-center mb-3'>User Frindly Software</h1>
        <p className='text-center text-gray-500'>Let's see what our happy patients say</p>
    </div>
    <div className='flex w-3/4 m-auto mt-10 '>
 <div className='p-8 '>
<h1 className='font-bold text-5xl '>What Makes Us<br/> Different</h1>
<p className='mr-24 my-10 font-semibold text-xl text-gray-500 mb-3'>The Phrase typically refers to an exploration of the unique qualities characteristics ,or aspects that distinguish one entity , individual, or group from others.</p>
<button className='bg-black text-white text-xl flex py-3 px-5 mt-10 rounded-3xl font-bold'>See More <img src={uparrow} className='h-5 ml-1 mt-1'/></button>
 </div>
 <div className=' '>
<h2 className='text-pink-500 font-bold text-xl'>01.</h2>
<hr/>
<h1 className='font-bold text-xl'>No More Hiring silos</h1>
<p className='font-semibold text-lg text-gray-500 mb-3'>Lorem ipsum dolor sit amet consectetur  elit. Fugit praesentium, ab non id ea eveniet temporibus dolorem facere obcaecati!</p>

<h2 className='text-green-500 font-bold text-xl'>02.</h2>
<hr/>
<h1 className='font-bold text-xl'>No More Hiring silos</h1>
<p className='font-semibold text-lg text-gray-500 mb-3'>Lorem ipsum dolor sit amet consectetur  elit. Fugit praesentium, ab non id ea eveniet temporibus dolorem facere obcaecati!</p>

<h2 className='text-orange-500 font-bold text-xl'>03.</h2>
<hr/>
<h1 className='font-bold text-xl'>No More Hiring silos</h1>
<p className='font-semibold text-lg text-gray-500 mb-3'>Lorem ipsum dolor sit amet consectetur  elit. Fugit praesentium, ab non id ea eveniet temporibus dolorem facere obcaecati!</p>

<h2 className='text-yellow-500 font-bold text-xl'>04.</h2>
<hr/>
<h1 className='font-bold text-xl'>No More Hiring silos</h1>
<p className='font-semibold text-lg text-gray-500 mb-3'>Lorem ipsum dolor sit amet consectetur  elit. Fugit praesentium, ab non id ea eveniet temporibus dolorem facere obcaecati!</p>
 
 </div>
    </div>
    </div>
  )
}
