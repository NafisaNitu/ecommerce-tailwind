import React from 'react'
import Sidebar from './Sidebar'
import ProductList from './ProductList'



function MainContent() {
  return (
    <section className='py-4'>
        <div className="container w-max-7xl mx-auto px-20">
            <div className="flex justify-center gap-8">
               <Sidebar />
                <ProductList />
            </div>
        </div>
    </section>
  )
}

export default MainContent