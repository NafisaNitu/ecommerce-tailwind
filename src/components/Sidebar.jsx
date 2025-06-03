
import React from 'react'
import {Funnel,ChevronUp } from 'lucide-react';

function Sidebar() {
  return (
    <div className='sm:flex hidden flex-col gap-3 2xl:pe-8 pe-4 border-r border-[#CCCCCC] border-opacity-45'>
        <div className="flex items-center gap-4 py-3 border-b-2 border-gray-300 border-opacity-45">
            <Funnel /> <h3 className='text-2xl  text-black'> Filters</h3>
        </div>
        <div className="flex items-center justify-between gap-2 py-3 border-b-2 border-gray-300 border-opacity-45">
           <h3 className='text-black'>Applied Filters</h3> <a href="" className='text-black underline'> clear all</a>
        </div>
        <div className='flex flex-col gap-3 py-2 border-b-2 border-gray-300 border-opacity-45'>
            <div className="flex justify-between gap-2 text-gray-600">
                <h3>Category</h3>
                <ChevronUp />
            </div>
            <div className="flex items-center gap-2 text-gray-800">
                <input type="checkbox" className='check-input' id='all' />
                <label htmlFor="all">All</label>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
                <input type="checkbox" checked className='check-input' id='running-shoes' />
                <label htmlFor="running-shoes">Running Shoes</label>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
                <input type="checkbox" className='check-input' id='category-3' />
                <label htmlFor="category-3">Category 3</label>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
                <input type="checkbox" className='check-input' id='category-4' />
                <label htmlFor="category-4">Category 4</label>
            </div>
        </div>

        <div className='flex flex-col gap-3 py-2 border-b-2 border-gray-300 border-opacity-45'>
            <div className="flex justify-between gap-2 text-gray-600">
                <h3>Stock Status</h3>
                <ChevronUp />
            </div>
            <div className="flex items-center gap-2 text-gray-800">
                <input type="checkbox" className='check-input' id='stack' />
                <label htmlFor="stack">In Stock</label>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
                <input type="checkbox" className='check-input' id="stack-out" />
                <label htmlFor="stack-out">Out of Stock</label>
            </div>
        </div>

         <div className='flex flex-col gap-3 py-2 border-b-2 border-gray-300 border-opacity-45'>
            <div className="flex justify-between gap-2 text-gray-600">
                <h3>Size</h3>
                <ChevronUp />
            </div>
            <div className="flex items-center gap-2 text-gray-800">
                <input type="checkbox" className='check-input' id='l' />
                <label htmlFor="l">Large</label>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
                <input type="checkbox" className='check-input' id='m' />
                <label htmlFor="m">Medium</label>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
                <input type="checkbox" className='check-input' id='s' />
                <label htmlFor="s">Small</label>
            </div>
        </div>

        <div className='flex flex-col gap-3 py-2'>
            <div className="flex justify-between gap-2 text-gray-600">
                <h3>Color</h3>
                <ChevronUp />
            </div>
            <div className="flex items-center gap-4">
                <div className='bg-red-500 color-input'></div>
                <div className='bg-[#FFA800] color-input'></div>
                <div className='bg-[#80FF00] color-input'></div>
                <div className='bg-[#00FFB2] color-input'></div>
                <div className='bg-[#0029FF] color-input'></div>
                <div className='bg-[#FF00C7] color-input'></div>
                <div className='bg-[#FF97DC] color-input'></div>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar