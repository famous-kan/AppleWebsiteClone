import React, { useState } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(null)
  return (
    <div className="relative px-0">
    <div className="bg-[#f5f5f7] container flex h-14 items-center m-0 p-0 ">
    <NavigationMenu className='relative w-full [--background:transparent] [--viewport-padding:12px]' onValueChange={setActiveItem}>
        <NavigationMenuList className='mb-0 flex gap-2 w-full mx-[100px]'>
 
        {/* /////////////////////////////// */}
          <NavigationMenuItem>
            <Link href="https://www.apple.com/" className='m-[50px]'>
              <NavigationMenuLink className="text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18">
                <path d="M4.02,16.23c-.25-.16-.51-.39-.77-.71-.18-.21-.4-.51-.66-.9-.45-.65-.82-1.4-1.1-2.25-.31-.93-.46-1.82-.46-2.69,0-.97,.21-1.82,.62-2.53,.32-.57,.75-1.02,1.3-1.35,.55-.34,1.13-.51,1.76-.52,.22,0,.45,.03,.7,.09,.18,.05,.4,.13,.66,.23,.34,.13,.53,.21,.59,.23,.2,.07,.37,.1,.5,.1,.1,0,.24-.03,.4-.08,.09-.03,.26-.09,.5-.19,.24-.09,.43-.16,.58-.22,.23-.07,.45-.13,.65-.16,.24-.04,.48-.05,.71-.03,.44,.03,.84,.12,1.2,.26,.63,.25,1.14,.65,1.52,1.21-.16,.1-.31,.21-.45,.34-.31,.28-.57,.59-.76,.93-.27,.48-.4,1.01-.4,1.56,.01,.67,.18,1.26,.52,1.77,.24,.37,.56,.69,.95,.95,.19,.13,.36,.22,.52,.28-.08,.26-.17,.49-.25,.68-.22,.52-.48,.99-.77,1.43-.27,.39-.48,.68-.64,.87-.25,.3-.49,.52-.73,.68-.28,.18-.58,.27-.9,.27-.22,.01-.43-.02-.64-.08-.12-.04-.3-.1-.53-.2-.23-.1-.42-.17-.56-.21-.23-.06-.47-.09-.72-.09s-.49,.03-.72,.09c-.16,.04-.34,.11-.56,.2-.26,.11-.43,.18-.53,.21-.2,.06-.41,.1-.61,.11-.32,0-.62-.09-.92-.28ZM8.26,4.81c-.42,.21-.82,.3-1.22,.27-.06-.4,0-.81,.17-1.26,.15-.38,.35-.73,.62-1.04,.27-.31,.6-.57,1.01-.78,.41-.21,.8-.32,1.17-.34,.05,.42,0,.84-.15,1.28-.14,.4-.35,.76-.62,1.09-.27,.33-.6,.59-.98,.78Z" fill="currentcolor"/>
                </svg>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* /////////////////////////////// */}
          <NavigationMenuItem className=''>
          <NavigationMenuTrigger className='w-[50px] bg-[#f5f5f7] [&>svg]:hidden'>
            Store
          </NavigationMenuTrigger >
          <NavigationMenuContent className='absolute left-0 top-2 '>
              <ul className="grid w-[400px] mx-[200px] gap-5 p-2 md:w-screen md:grid-cols-3 ">

                  <div className='flex gap-12 pb-5 w-screen'>

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
                  </div>
              </ul>
            </NavigationMenuContent>



        </NavigationMenuItem>
          {/* /////////////////////////////// */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className='w-[50px] bg-[#f5f5f7] [&>svg]:hidden'>Mac</NavigationMenuTrigger>
            <NavigationMenuContent className='absolute left-0 top-2 '>
              <ul className="grid w-[400px] mx-[200px] gap-5 p-2 md:w-screen md:grid-cols-3 ">

                  <div className='flex gap-12 pb-5 w-screen'>

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
                  </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* /////////////////////////////// */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className='w-[50px] bg-[#f5f5f7] [&>svg]:hidden'>iPad</NavigationMenuTrigger>
            <NavigationMenuContent className='absolute left-0 top-2 '>
              <ul className="grid w-[400px] mx-[200px] gap-5 p-2 md:w-screen md:grid-cols-3 ">

                  <div className='flex gap-12 pb-5 w-screen'>

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
                  </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* /////////////////////////////// */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className='w-[50px] bg-[#f5f5f7]
             [&>svg]:hidden'>iPhone</NavigationMenuTrigger>
               <NavigationMenuContent className='absolute left-0 top-2 '>
              <ul className="grid w-[400px] mx-[200px] gap-5 p-2 md:w-screen md:grid-cols-3 ">

                  <div className='flex gap-12 pb-5 w-screen'>

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
                  </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* /////////////////////////////// */}
        </NavigationMenuList>
        <NavigationMenuViewport className='absolute top-[-20px] border-white shadow-none rounded-none left-0 w-full origin-top-center [--viewport-padding:12px]' />
      </NavigationMenu>
      <div className="ml-auto flex items-center space-x-4">
      <svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z"></path></svg>
      <svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"></path></svg>
      </div>
    </div>
    {activeItem && (
        <div className="absolute inset-0 top-[57px] -z-10 h-[calc(100vh-57px)] w-full bg-background/80 backdrop-blur-sm" />
      )}
    </div>
  
  )
}

export default Navbar