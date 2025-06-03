import React from 'react'
import { AlignLeft, Heart, Plus, Star } from 'lucide-react';


function Products() {
  return (
    <>
        <div className='flex flex-col gap-3'>
          <a href="#" className='w-full'><img src="images/p.png" className='w-full' alt="" /></a>
          <a href="#"><h3 className='product-title'>Ultraboost Light Running Shoes</h3></a>
          <p className='italic text-gray-500'>Running Shoes</p>
          <div className="flex justify-between">
            <span className='flex items-center gap-2 text-gray-700 text-sm'><span className='text-[#FFC831]'><Star size={20} /></span>5.0 (10 Reviews)</span>
            <span className='text-[#1A9452] text-sm font-medium'>In Stock</span>
          </div>
          <h4 className='p-price'>$200</h4>
          <div className="flex gap-3 items-center justify-between">
            <button className='add-to-cart'><Plus /> Add to Cart</button>
            <button className='wishlist'><Heart /></button>
          </div>
        </div>
    </>
  )
}

export default Products