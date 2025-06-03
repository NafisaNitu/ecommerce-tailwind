import React from 'react'
import { ShoppingCart,Search } from 'lucide-react';

function Searchbar() {
  return (
   <section className='bg-white sm:py-8 py-4'>
        <div className="container w-max-7xl mx-auto sm:px-20 px-4">
            <div className='flex justify-between items-center gap-2'>
                <select name="" id="" className='bg-gray-200 py-2 px-4 rounded-sm sm:block hidden'>
                    <option value="">All Category</option>
                    <option value="">Shoes</option>
                    <option value="">Running Shoes</option>
                    <option value="">T-shirt</option>
                </select>
                <div className='flex items-center justify-center bg-gray-200 xl:w-10/12 lg:w-8/12 sm:w-6/12 w-2/3'>
                    <input type="text" placeholder='Search Here...' className='bg-gray-200 rounded-sm w-full py-2 px-4 placeholder:text-black' />
                    <span className='px-4 cursor-pointer'><Search /></span>
                </div>
                <button className='flex items-center justify-center sm:gap-4 gap-1 py-2 sm:px-4 px-2 xl:w-2/12 lg:w-4/12 sm:w-6/12 w-1/3 bg-[#FFC831] hover:bg-black transition duration-300 hover:text-white sm:text-md text-xs rounded-sm'>
                    <ShoppingCart /><span> View Cart</span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Searchbar