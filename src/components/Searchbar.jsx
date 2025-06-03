import React from 'react'
import { ShoppingCart,Search } from 'lucide-react';

function Searchbar() {
  return (
   <section className='bg-white py-8'>
        <div className="container w-max-7xl mx-auto px-20">
            <div className='flex justify-between items-center gap-2'>
                <select name="" id="" className='bg-gray-200 py-2 px-4 rounded-sm'>
                    <option value="">All Category</option>
                    <option value="">Shoes</option>
                    <option value="">Running Shoes</option>
                    <option value="">T-shirt</option>
                </select>
                <div className='flex items-center justify-center bg-gray-200 w-10/12'>
                    <input type="text" placeholder='Search Here...' className='bg-gray-200 rounded-sm w-full py-2 px-4 placeholder:text-black' />
                    <span className='px-4 cursor-pointer'><Search /></span>
                </div>
                <button className='flex items-center justify-center gap-4 py-2 px-4 w-2/12 bg-[#FFC831] hover:bg-black transition duration-300 hover:text-white rounded-sm'>
                    <ShoppingCart /><span> View Cart</span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Searchbar