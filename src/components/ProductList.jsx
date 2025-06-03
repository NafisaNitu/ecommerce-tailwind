import React from 'react'
import { AlignLeft, ArrowRight, ChevronLeft, ChevronRight, Heart, Plus, Star } from 'lucide-react';
import Products from './Products';


function ProductList() {
  return (
    <div className='flex-grow py-8'>
      <nav class="text-sm text-gray-500" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
          <li class="flex items-center">
            <a href="#" class="text-[#1E1E1E]">Home</a>
            <span class="mx-2">/</span>
          </li>
          <li class="flex items-center">
            <a href="#" class="text-[#1E1E1E]">Search</a>
            <span class="mx-2">/</span>
          </li>
          <li class="flex items-center text-[#1E1E1E]">Running Shoes</li>
        </ol>
      </nav>

      <div className="flex items-center justify-between gap-8 py-6">
          <p className='text-[#3f3f3f] italic text-3xl font-normal'>“Running Shoes” <span className='text-sm text-gray-600'>288 Results</span></p>
          <button className='flex items-center gap-2 text-black border-2 border-black py-2 px-4 rounded-md'><AlignLeft />Sort by</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </div>

      <div className="flex items-end justify-between gap-8 pt-12 w-2/3 float-end">

        <button className='flex items-center justify-end gap-2 text-lg text-black border-2 border-black py-2 px-4 rounded-md hover:bg-[#ECEFF1] transition duration-300'>Next Page <ArrowRight /></button>

          <div className='flex items-center justify-center gap-3'>
            <button className='text-black text-lg bg-[#ECEFF1] py-3 px-4 rounded-md hover:bg-gray-300 transition duration-300'>01</button>
            <p className='text-center text-sm text-gray-700'>of 55</p>
            <button className='text-black text-lg bg-[#ECEFF1] py-3 px-4 rounded-md hover:bg-gray-300 transition duration-300'><ChevronLeft /></button>
            <button className='text-black text-lg bg-[#ECEFF1] py-3 px-4 rounded-md hover:bg-gray-300 transition duration-300'><ChevronRight /></button>
          </div>
    
      </div>
    </div>
  )
}

export default ProductList