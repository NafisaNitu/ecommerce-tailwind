import React from 'react'

function Header() {
  return (
    <header className='bg-black py-3 px-4'>
        <div className="container w-max-7xl mx-auto">
            <nav className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                <a href=""><img src="images/nav.png" alt="" /></a>
                <ul className='flex flex-col sm:flex-row items-center text-white font-medium text-lg sm:gap-8 gap-4'>
                    <li className='relative'><a href="">Products</a><span className='sm:absolute bottom-[-4px] left-0 w-1/3 h-2 border-b-2 border-yellow-500'></span></li>
                    <li><a href="">Track Order</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About Us</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}        

export default Header