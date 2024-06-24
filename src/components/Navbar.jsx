import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between bg-slate-600 p-3 text-white'>
            <div className="md:text-2xl text-sm">Country Information</div>

            <div className="md:flex hidden">
                <ul className='flex gap-5 mx-10 '>
                    <li className='md:text-xl  text-sm cursor-pointer'>Home</li>
                    <li className='md:text-xl  text-sm cursor-pointer'>About</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
