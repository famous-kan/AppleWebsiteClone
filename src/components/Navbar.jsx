import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import NavItem from './NavItem'

const Navbar = () => {
    
  return (
    
    <div className=' fixed top-0 flex justify-between shadow-lg items-center h-12 w-full bg-white/75 backdrop-blur-sm z-50'>
        
        <ul className="flex space-x-4">

          <div className=''>
          <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
          </div>  

          <NavItem
          label="Store"
          items={[
            { 
              label: 'Electronics', 
              href: '/products/electronics',
              subitems: [
                { label: 'Smartphones', href: '/products/electronics/smartphones' },
                { label: 'Laptops', href: '/products/electronics/laptops' },
                { label: 'More', href: '/products/electronics', isMore: true }
              ]
            },
            { 
              label: 'Clothing', 
              href: '/products/clothing',
              subitems: [
                { label: 'Men\'s Wear', href: '/products/clothing/mens' },
                { label: 'Women\'s Wear', href: '/products/clothing/womens' },
                { label: 'More', href: '/products/clothing', isMore: true }
              ]
            },
            { label: 'Books', href: '/products/books' },
          ]}
        />
          
      </ul>
          
          
      
    </div>
  
  )
}

export default Navbar



{/* <div className='flex gap-12 pb-5 w-screen'>

<div className=' flex flex-col gap-1 mx-2  '>
    <p className='text-slate-400'>Shop</p>
   <Link to="/" className="text-2xl font-bold no-underline text-black">Shop the Latest</Link>
   <Link to="/" className="text-2xl font-bold no-underline text-black">Mac</Link>
   <Link to="/" className="text-2xl font-bold no-underline text-black">iPad</Link>
   <Link to="/" className="text-2xl font-bold no-underline text-black">iPhone</Link>
   <Link to="/" className="text-2xl font-bold no-underline text-black">Apple Watch</Link>
   <Link to="/" className="text-2xl font-bold no-underline text-black">Apple Vision Pro</Link>
   <Link to="/" className="text-2xl font-bold no-underline text-black">Accessories</Link>
</div>

<div className=' flex flex-col gap-1 '>
    <p className='text-slate-400'>Quick Links</p>
   <Link to="/" className="text-sm font-bold  no-underline text-black">Shop Holiday Gift</Link>
   <Link to="/" className="text-sm font-bold no-underline text-black">Find a Store</Link>
   <Link to="/" className="text-sm font-bold no-underline text-black">Order Status</Link>
   <Link to="/" className="text-sm font-bold no-underline text-black">Apple Trade In</Link>
   <Link to="/" className="text-sm font-bold no-underline text-black">Financing</Link>
</div>

<div className=' flex flex-col gap-1  '>
    <p className='text-slate-400'>Shop Special Stores</p>
   <Link to="/" className="text-sm font-bold no-underline text-black">Certified Refurbished</Link>
   <Link to="/" className="text-sm font-bold no-underline text-black">Education</Link>
   <Link to="/" className="text-sm font-bold no-underline text-black">Business</Link>
   <Link to="/" className="text-sm font-bold no-underline text-black">Veterans and Military</Link>
   <Link to="/" className="text-sm font-bold no-underline text-black">Government</Link>
</div>
</div> */}