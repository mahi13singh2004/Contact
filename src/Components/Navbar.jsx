import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-20 flex justify-between items-center mb-5'>
        <div className="left">
            <div className="logo h-20 w-32 px-3">
                <img className='max-w-full max-h-full object-contain mt-4' src="https://img.freepik.com/premium-vector/colorful-circle-social-media-social-media-with-phone-top_704913-28575.jpg?size=626&ext=jpg&ga=GA1.1.72212417.1724431325&semt=ais_hybrid" alt="Logo" />
            </div>
        </div>
        <div className="right mr-10">
            <ul className='flex space-x-10 text-xl font-semibold'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar