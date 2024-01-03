import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 absolute z-[100]
     w-full '>
      <h1 className='text-red-700 text-4xl font-bold cursor-pointer'>Netflix</h1>
      <div>
        <button className='text-white pr-4' >Sign In</button>
        <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
