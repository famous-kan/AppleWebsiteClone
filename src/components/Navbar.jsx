import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import NavItem from './NavItem'

const Navbar = () => {
  const [isHover, setIsHover] = useState(false)


  return (
    
    <div className={`fixed top-0 flex shadow-lg h-12 w-full transition-colors duration-500 ${isHover ? 'bg-white ease-in-out ' : 'bg-white/75 backdrop-blur-sm'} z-50`}
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
      
    >
        
        <ul className="flex space-x-4 justify-center mx-auto items-center m-0 p-0"> 

          <Link to="/">
          <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
          </Link>  

          <NavItem
          label="Store"
          items={[
            { 
              label: 'Shop', 
              isLarge: true,
              subitems: [
                { label: 'Shop the Latest', href: "/" },
                { label: 'Mac', href: '/' },
                { label: 'iPad', href: '/' },
                { label: 'iPhone', href: '/' },
                { label: 'Apple Watch', href: '/' },
                { label: 'Apple Vision Pro', href: '/' },
                { label: 'Accesories', href: '/' }
              ]
            },
            { 
              label: 'Quick Links', 
              isLarge: false,
              subitems: [
                { label: 'Shop Holiday Gifts', href: '/' },
                { label: 'Find a Store', href: '/' },
                { label: 'Order Status ', href: '/' },
                { label: 'Apple Trade In ', href: '/' },
                { label: 'Financing', href: '/' },
              ]
            },
            { 
              label: 'Shop Special Stores', 
              isLarge: false,
              subitems: [
                { label: 'Certified Refurbished', href: '/' },
                { label: 'Education', href: '/' },
                { label: 'Business', href: '/' },
                { label: 'Veterans and Military', href: '/' },
                { label: 'Governemt', href: '/' },
              ]
            },

            ]}
           />
          <NavItem
          label="Mac" 
          items={[
            { 
              label: 'Explore Mac', 
              isLarge: true,
              subitems: [
                { label: 'Explore All Mac', href: "/" },
                { label: 'MacBook Air', href: '/' },
                { label: 'MacBook Pro', href: '/' },
                { label: 'iMac', href: '/' },
                { label: 'Mac mini', href: '/' },
                { label: 'Mac Studio', href: '/' },
                { label: 'Mac Pro', href: '/' },
                { label: 'Display', href: '/' },
              ]
            },
            { 
              label: 'Shop Mac', 
              isLarge: false,
              subitems: [
                { label: 'Shop Mac', href: '/' },
                { label: 'Help Me Choose', href: '/' },
                { label: 'Mac Accessories', href: '/' },
                { label: 'Apple Trade In', href: '/' },
                { label: 'Financing', href: '/' },
              ]
            },
            { 
              label: 'More from Mac', 
              isLarge: false,
              subitems: [
                { label: 'Mac Support', href: '/' },
                { label: 'AppleCare+ for Mac', href: '/' },
                { label: 'macOS Sequoia', href: '/' },
                { label: 'Apple intelligence', href: '/' },
                { label: 'Apps by Apple', href: '/' },
                { label: 'Continuity', href: '/' },
                { label: 'iCloud+', href: '/' },
                { label: 'Mac for Business', href: '/' },
                { label: 'Education', href: '/' },
              ]
            },

            ]}
           />
          {/* ///////////////3/////// */}
          <NavItem
          label="iPad" 
          items={[
            { 
              label: 'Explore Mac', 
              isLarge: true,
              subitems: [
                { label: 'Explore All Mac', href: "/" },
                { label: 'MacBook Air', href: '/' },
                { label: 'MacBook Pro', href: '/' },
                { label: 'iMac', href: '/' },
                { label: 'Mac mini', href: '/' },
                { label: 'Mac Studio', href: '/' },
                { label: 'Mac Pro', href: '/' },
                { label: 'Display', href: '/' },
              ]
            },
            { 
              label: 'Shop Mac', 
              isLarge: false,
              subitems: [
                { label: 'Shop Mac', href: '/' },
                { label: 'Help Me Choose', href: '/' },
                { label: 'Mac Accessories', href: '/' },
                { label: 'Apple Trade In', href: '/' },
                { label: 'Financing', href: '/' },
              ]
            },
            { 
              label: 'More from Mac', 
              isLarge: false,
              subitems: [
                { label: 'Mac Support', href: '/' },
                { label: 'AppleCare+ for Mac', href: '/' },
                { label: 'macOS Sequoia', href: '/' },
                { label: 'Apple intelligence', href: '/' },
                { label: 'Apps by Apple', href: '/' },
                { label: 'Continuity', href: '/' },
                { label: 'iCloud+', href: '/' },
                { label: 'Mac for Business', href: '/' },
                { label: 'Education', href: '/' },
              ]
            },

            ]}
           />
          {/* //////////////4/////// */}
          <NavItem
          label="iPhone" 
          items={[
            { 
              label: 'Explore Mac', 
              isLarge: true,
              subitems: [
                { label: 'Explore All Mac', href: "/" },
                { label: 'MacBook Air', href: '/' },
                { label: 'MacBook Pro', href: '/' },
                { label: 'iMac', href: '/' },
                { label: 'Mac mini', href: '/' },
                { label: 'Mac Studio', href: '/' },
                { label: 'Mac Pro', href: '/' },
                { label: 'Display', href: '/' },
              ]
            },
            { 
              label: 'Shop Mac', 
              isLarge: false,
              subitems: [
                { label: 'Shop Mac', href: '/' },
                { label: 'Help Me Choose', href: '/' },
                { label: 'Mac Accessories', href: '/' },
                { label: 'Apple Trade In', href: '/' },
                { label: 'Financing', href: '/' },
              ]
            },
            { 
              label: 'More from Mac', 
              isLarge: false,
              subitems: [
                { label: 'Mac Support', href: '/' },
                { label: 'AppleCare+ for Mac', href: '/' },
                { label: 'macOS Sequoia', href: '/' },
                { label: 'Apple intelligence', href: '/' },
                { label: 'Apps by Apple', href: '/' },
                { label: 'Continuity', href: '/' },
                { label: 'iCloud+', href: '/' },
                { label: 'Mac for Business', href: '/' },
                { label: 'Education', href: '/' },
              ]
            },

            ]}
           />
          {/* //////////////5/////// */}
          <NavItem
          label="Watch" 
          items={[
            { 
              label: 'Explore Mac', 
              isLarge: true,
              subitems: [
                { label: 'Explore All Mac', href: "/" },
                { label: 'MacBook Air', href: '/' },
                { label: 'MacBook Pro', href: '/' },
                { label: 'iMac', href: '/' },
                { label: 'Mac mini', href: '/' },
                { label: 'Mac Studio', href: '/' },
                { label: 'Mac Pro', href: '/' },
                { label: 'Display', href: '/' },
              ]
            },
            { 
              label: 'Shop Mac', 
              isLarge: false,
              subitems: [
                { label: 'Shop Mac', href: '/' },
                { label: 'Help Me Choose', href: '/' },
                { label: 'Mac Accessories', href: '/' },
                { label: 'Apple Trade In', href: '/' },
                { label: 'Financing', href: '/' },
              ]
            },
            { 
              label: 'More from Mac', 
              isLarge: false,
              subitems: [
                { label: 'Mac Support', href: '/' },
                { label: 'AppleCare+ for Mac', href: '/' },
                { label: 'macOS Sequoia', href: '/' },
                { label: 'Apple intelligence', href: '/' },
                { label: 'Apps by Apple', href: '/' },
                { label: 'Continuity', href: '/' },
                { label: 'iCloud+', href: '/' },
                { label: 'Mac for Business', href: '/' },
                { label: 'Education', href: '/' },
              ]
            },

            ]}
           />
          {/* //////////////6/////// */}
          <NavItem
          label="Vision" 
          items={[
            { 
              label: 'Explore Mac', 
              isLarge: true,
              subitems: [
                { label: 'Explore All Mac', href: "/" },
                { label: 'MacBook Air', href: '/' },
                { label: 'MacBook Pro', href: '/' },
                { label: 'iMac', href: '/' },
                { label: 'Mac mini', href: '/' },
                { label: 'Mac Studio', href: '/' },
                { label: 'Mac Pro', href: '/' },
                { label: 'Display', href: '/' },
              ]
            },
            { 
              label: 'Shop Mac', 
              isLarge: false,
              subitems: [
                { label: 'Shop Mac', href: '/' },
                { label: 'Help Me Choose', href: '/' },
                { label: 'Mac Accessories', href: '/' },
                { label: 'Apple Trade In', href: '/' },
                { label: 'Financing', href: '/' },
              ]
            },
            { 
              label: 'More from Mac', 
              isLarge: false,
              subitems: [
                { label: 'Mac Support', href: '/' },
                { label: 'AppleCare+ for Mac', href: '/' },
                { label: 'macOS Sequoia', href: '/' },
                { label: 'Apple intelligence', href: '/' },
                { label: 'Apps by Apple', href: '/' },
                { label: 'Continuity', href: '/' },
                { label: 'iCloud+', href: '/' },
                { label: 'Mac for Business', href: '/' },
                { label: 'Education', href: '/' },
              ]
            },

            ]}
           />
          {/* //////////////7/////// */}
          <NavItem
          label="AirPods" 
          items={[
            { 
              label: 'Explore Mac', 
              isLarge: true,
              subitems: [
                { label: 'Explore All Mac', href: "/" },
                { label: 'MacBook Air', href: '/' },
                { label: 'MacBook Pro', href: '/' },
                { label: 'iMac', href: '/' },
                { label: 'Mac mini', href: '/' },
                { label: 'Mac Studio', href: '/' },
                { label: 'Mac Pro', href: '/' },
                { label: 'Display', href: '/' },
              ]
            },
            { 
              label: 'Shop Mac', 
              isLarge: false,
              subitems: [
                { label: 'Shop Mac', href: '/' },
                { label: 'Help Me Choose', href: '/' },
                { label: 'Mac Accessories', href: '/' },
                { label: 'Apple Trade In', href: '/' },
                { label: 'Financing', href: '/' },
              ]
            },
            { 
              label: 'More from Mac', 
              isLarge: false,
              subitems: [
                { label: 'Mac Support', href: '/' },
                { label: 'AppleCare+ for Mac', href: '/' },
                { label: 'macOS Sequoia', href: '/' },
                { label: 'Apple intelligence', href: '/' },
                { label: 'Apps by Apple', href: '/' },
                { label: 'Continuity', href: '/' },
                { label: 'iCloud+', href: '/' },
                { label: 'Mac for Business', href: '/' },
                { label: 'Education', href: '/' },
              ]
            },

            ]}
           />
          {/* //////////////8/////// */}
          <NavItem
          label="TV & Home" 
          items={[
            { 
              label: 'Explore Mac', 
              isLarge: true,
              subitems: [
                { label: 'Explore All Mac', href: "/" },
                { label: 'MacBook Air', href: '/' },
                { label: 'MacBook Pro', href: '/' },
                { label: 'iMac', href: '/' },
                { label: 'Mac mini', href: '/' },
                { label: 'Mac Studio', href: '/' },
                { label: 'Mac Pro', href: '/' },
                { label: 'Display', href: '/' },
              ]
            },
            { 
              label: 'Shop Mac', 
              isLarge: false,
              subitems: [
                { label: 'Shop Mac', href: '/' },
                { label: 'Help Me Choose', href: '/' },
                { label: 'Mac Accessories', href: '/' },
                { label: 'Apple Trade In', href: '/' },
                { label: 'Financing', href: '/' },
              ]
            },
            { 
              label: 'More from Mac', 
              isLarge: false,
              subitems: [
                { label: 'Mac Support', href: '/' },
                { label: 'AppleCare+ for Mac', href: '/' },
                { label: 'macOS Sequoia', href: '/' },
                { label: 'Apple intelligence', href: '/' },
                { label: 'Apps by Apple', href: '/' },
                { label: 'Continuity', href: '/' },
                { label: 'iCloud+', href: '/' },
                { label: 'Mac for Business', href: '/' },
                { label: 'Education', href: '/' },
              ]
            },

            ]}
           />
          {/* //////////////9/////// */}
          <NavItem
          label="Entertainment" 
          items={[
            { 
              label: 'Explore Mac', 
              isLarge: true,
              subitems: [
                { label: 'Explore All Mac', href: "/" },
                { label: 'MacBook Air', href: '/' },
                { label: 'MacBook Pro', href: '/' },
                { label: 'iMac', href: '/' },
                { label: 'Mac mini', href: '/' },
                { label: 'Mac Studio', href: '/' },
                { label: 'Mac Pro', href: '/' },
                { label: 'Display', href: '/' },
              ]
            },
            { 
              label: 'Shop Mac', 
              isLarge: false,
              subitems: [
                { label: 'Shop Mac', href: '/' },
                { label: 'Help Me Choose', href: '/' },
                { label: 'Mac Accessories', href: '/' },
                { label: 'Apple Trade In', href: '/' },
                { label: 'Financing', href: '/' },
              ]
            },
            { 
              label: 'More from Mac', 
              isLarge: false,
              subitems: [
                { label: 'Mac Support', href: '/' },
                { label: 'AppleCare+ for Mac', href: '/' },
                { label: 'macOS Sequoia', href: '/' },
                { label: 'Apple intelligence', href: '/' },
                { label: 'Apps by Apple', href: '/' },
                { label: 'Continuity', href: '/' },
                { label: 'iCloud+', href: '/' },
                { label: 'Mac for Business', href: '/' },
                { label: 'Education', href: '/' },
              ]
            },

            ]}
           />
          {/* //////////////10/////// */}
          <NavItem
          label="Accessories" 
          items={[
            { 
              label: 'Explore Mac', 
              isLarge: true,
              subitems: [
                { label: 'Explore All Mac', href: "/" },
                { label: 'MacBook Air', href: '/' },
                { label: 'MacBook Pro', href: '/' },
                { label: 'iMac', href: '/' },
                { label: 'Mac mini', href: '/' },
                { label: 'Mac Studio', href: '/' },
                { label: 'Mac Pro', href: '/' },
                { label: 'Display', href: '/' },
              ]
            },
            { 
              label: 'Shop Mac', 
              isLarge: false,
              subitems: [
                { label: 'Shop Mac', href: '/' },
                { label: 'Help Me Choose', href: '/' },
                { label: 'Mac Accessories', href: '/' },
                { label: 'Apple Trade In', href: '/' },
                { label: 'Financing', href: '/' },
              ]
            },
            { 
              label: 'More from Mac', 
              isLarge: false,
              subitems: [
                { label: 'Mac Support', href: '/' },
                { label: 'AppleCare+ for Mac', href: '/' },
                { label: 'macOS Sequoia', href: '/' },
                { label: 'Apple intelligence', href: '/' },
                { label: 'Apps by Apple', href: '/' },
                { label: 'Continuity', href: '/' },
                { label: 'iCloud+', href: '/' },
                { label: 'Mac for Business', href: '/' },
                { label: 'Education', href: '/' },
              ]
            },

            ]}
           />
          {/* //////////////11/////// */}
          <NavItem
          label="Support" 
          items={[
            { 
              label: 'Explore Mac', 
              isLarge: true,
              subitems: [
                { label: 'Explore All Mac', href: "/" },
                { label: 'MacBook Air', href: '/' },
                { label: 'MacBook Pro', href: '/' },
                { label: 'iMac', href: '/' },
                { label: 'Mac mini', href: '/' },
                { label: 'Mac Studio', href: '/' },
                { label: 'Mac Pro', href: '/' },
                { label: 'Display', href: '/' },
              ]
            },
            { 
              label: 'Shop Mac', 
              isLarge: false,
              subitems: [
                { label: 'Shop Mac', href: '/' },
                { label: 'Help Me Choose', href: '/' },
                { label: 'Mac Accessories', href: '/' },
                { label: 'Apple Trade In', href: '/' },
                { label: 'Financing', href: '/' },
              ]
            },
            { 
              label: 'More from Mac', 
              isLarge: false,
              subitems: [
                { label: 'Mac Support', href: '/' },
                { label: 'AppleCare+ for Mac', href: '/' },
                { label: 'macOS Sequoia', href: '/' },
                { label: 'Apple intelligence', href: '/' },
                { label: 'Apps by Apple', href: '/' },
                { label: 'Continuity', href: '/' },
                { label: 'iCloud+', href: '/' },
                { label: 'Mac for Business', href: '/' },
                { label: 'Education', href: '/' },
              ]
            },

            ]}
           />
          
          {/* //////////////12/////// */}
          <NavItem
          label= {<svg xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44">
          <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
            </svg> }
           />
          {/* //////////////13/////// */}
          <NavItem
          label= {<svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path></svg> }
           />
          
      </ul>
          
          
      
    </div>
  
  )
}

export default Navbar