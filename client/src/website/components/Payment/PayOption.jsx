import React, { useState } from "react";
import paypal from '../../assets/images/paypal.png'
import gpay from '../../assets/images/gpay.png'
import apay from '../../assets/images/amazon.png'
import sparkler from '../../assets/images/sparkler.png'


export default function PayOption() {
  const [selectedOption, setSelectedOption] = useState("");

  const [isOpen,setIsOpen] = useState(true);
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === "modalBackdrop") {
      setIsOpen(false)
    }
  };
  return (
    <>
    {isOpen &&
    <div 
      id="modalBackdrop" 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
      onClick={handleBackdropClick}
    >
      <div className='border flex-col lg:flex-row flex justify-between h-auto w-[68vw] bg-white rounded-2xl'>
        
        <div className='lg:w-[650px]'>
          <h1 className='text-2xl font-extrabold mb-3 m-5'>PAYMENT OPTION </h1>
          <p className='text-sm ml-5 mb-3'>Complete payment in 00:14:35</p>
          <hr className=" border-gray-300 border-2" />
          {/* use ternary operator for upi suggestions */}
          <div className='p-5 hover:bg-blue-100 '>
          <input  type="radio" value="UPI" name="payoption" className="mx-6   border-2 border-black"/><span className='text-xl font-semibold'>UPI</span><br /> 
           <div className='flex mt-2 flex-col lg:flex-row'>
              <span className='flex mt-2'><input type="radio" name="upi" value="paypal"  checked={selectedOption === "paypal"} onChange={handleOptionChange} className="ml-8 h-2 mt-1" /><img src={paypal} className='h-4 ' /></span>
              <span className='flex mt-2'><input type="radio" name="upi" value="gpay" checked={selectedOption === "gpay"} onChange={handleOptionChange} className="ml-8 h-2 mt-1" /><img src={gpay} className='h-4 ' /></span>
              <span className='flex mt-2'><input type="radio" name="upi" value="amazon" checked={selectedOption === "amazon"} onChange={handleOptionChange} className="ml-8 h-2 mt-1" /><img src={apay} className='h-4 ' /></span>
            </div>
            {selectedOption === "paypal" && (
        <div className="upi-input">
          
          <input type="text" id="upiId" placeholder="Enter UPI ID" className="bg-white mt-5 mx-8 w-52 p-1" />
        </div>
      )}
         {selectedOption === "gpay" && (
        <div className="upi-input">
         
          <input type="text" id="upiId" placeholder="Enter UPI ID"  className="bg-white mt-5 mx-8 w-52 p-1" />
        </div>
      )}
         {selectedOption === "amazon" && (
        <div className="upi-input">
         
          <input type="text" id="upiId" placeholder="Enter UPI ID"  className="bg-white mt-5 mx-8 w-52 p-1" />
        </div>
      )}
          </div>
          <hr />
          <div className='p-5  hover:bg-blue-100 '>
            <input type="radio" value="credit" name="payoption" checked={selectedOption === "credit"} onChange={handleOptionChange}  className="mx-6  border-2 border-black" /><span className='text-xl font-semibold'>Creadit / Debit / ATM Card</span><br />
            <p className='text-gray-500 mt-2 text-sm ml-7'>Add and Secure card as per RBI guidelines</p>
            {selectedOption === "credit" && (
        <div className="upi-input">
          <input type="text" id="upiId" placeholder="Enter card Number" className="bg-white mt-1 mx-8 w-60 p-1" /><br/>
          <input type="text" placeholder="Valid thru / MM / YY" className="bg-white mt-1 ml-8 w-40 p-1" /><input type="text" placeholder="CVV" className="bg-white mt-1 m-1 w-[75px] p-1"/><br/>
          <button className="bg-green-500 text-white font-semibold text-sm py-2 px-5 ml-8">PAY $599</button>
        </div>
      )}
          </div>
          <hr />
          <div className='py-8 px-5  hover:bg-blue-100 '>
            <input type="radio" value="net banking" name="payoption" className="mx-6  border-2 border-black" /><span className='text-xl font-semibold'>Net Banking</span><br />
          </div>
          <hr />
          <div className='py-8 px-5 hover:bg-blue-100'>
            <input type="radio" value="EMI" name="payoption" className="mx-6  border-2 border-black" /><span className='text-xl font-semibold'>EMI</span><br />
          </div>
          <hr />
          <div className='py-8 px-5 hover:bg-blue-100'>
            <input type="radio" value="other" name="payoption" className="mx-6  border-2 border-black" /><span className='text-xl font-semibold'>Other</span><br />
          </div>
        </div>
        <div className='bg-red-300 p-3 h-auto lg:w-[25vw] rounded-r-xl'>
          <div className='flex  h-24 items-center lg:w-40 m-auto'>
            <h1 className='text-white text-xl font-semibold flex m-auto'>Most popular&nbsp; <img src={sparkler} className='h-6 m-' /> </h1>
          </div>
          <div className='bg-purple-50 p-3 lg:h-[72vh] w-[300px] m-auto rounded-lg'>
            <div className='bg-white lg:h-36 text-center '>
            <h2 className="text-2xl font-bold p-5">Essential</h2>
          <p className="text-5xl font-bold">$599 <span className="text-xl font-semibold">/Year</span></p>
          

            </div>
            <ul className="space-y-3 m-1">
            <li className="flex items-center mt-6">
              <span className="text-green-600 mx-3">✓</span>
              <span className='text-gray-500 font-semibold'>Consequat ex proident</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mx-3">✓</span>
              <span className='text-gray-500 font-semibold'>Deserunt sit cupidatat adipisicing</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mx-3">✓</span>
              <span className='text-gray-500 font-semibold'>Amet id ea et nisi cillum consectetur</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mx-3">✓</span>
              <span className='text-gray-500 font-semibold'>Excepteur nisi eiusmod proident</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mx-3">✓</span>
              <span className='text-gray-500 font-semibold'>Magna eu anim commodo qui nisi</span>
            </li>
          </ul>
          <div className="mt-2">
          <button className="bg-green-500 text-white font-semibold text-lg w-64 mx-5 py-3 rounded-lg">
            Total Amount: $599
          </button>
        </div>
          </div>

        </div>
      </div>
      </div>
}
    </>
  )
}
