import React, { useState } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(null)
  return (
    <div className="relative px-0">
    <div className="bg-[#f5f5f7] container flex h-14 items-center m-0 p-0 ">
      <NavigationMenu className='relative w-full ' onValueChange={setActiveItem}>
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
          <NavigationMenuItem className='bg-purple-400'>
            <NavigationMenuTrigger className='w-[50px] bg-[#f5f5f7] [&>svg]:hidden'>Store</NavigationMenuTrigger>
            <NavigationMenuContent className='w-screen bg-pink-400 border-none rounded-3xl'>
              <ul className="grid w-[400px] gap-3 p-4 md:w-screen md:grid-cols-2 rounded-none ">
                <p href="/products/software" title="Software">
                  Our cutting-edge software solutions.
                </p>
                <p href="/products/hardware" title="Hardware">
                  High-quality hardware products.
                </p>
                <p href="/products/services" title="Services">
                  Professional services and support.
                </p>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* /////////////////////////////// */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className='w-[50px] bg-[#f5f5f7] [&>svg]:hidden'>Mac</NavigationMenuTrigger>
            <NavigationMenuContent className='absolute left-0 w-screen'>
              <ul className=" w-[400px] gap-3 p-4 md:w-[1000px] md:grid-cols-2">
                <p href="/about" title="About Us">
                  Learn more about our company and mission.
                </p>
                <p href="/team" title="Our Team">
                  Meet the people behind our success.
                </p>
                <p href="/careers" title="Careers">
                  Join our team and grow with us.
                </p>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* /////////////////////////////// */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className='w-[50px] bg-[#f5f5f7] [&>svg]:hidden'>iPad</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <p href="/about" title="About Us">
                  Learn more about our company and mission.
                </p>
                <p href="/team" title="Our Team">
                  Meet the people behind our success.
                </p>
                <p href="/careers" title="Careers">
                  Join our team and grow with us.
                </p>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* /////////////////////////////// */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className='w-[50px] bg-[#f5f5f7]
             [&>svg]:hidden'>iPhone</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <p href="/about" title="About Us">
                  Learn more about our company and mission.
                </p>
                <p href="/team" title="Our Team">
                  Meet the people behind our success.
                </p>
                <p href="/careers" title="Careers">
                  Join our team and grow with us.
                </p>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* /////////////////////////////// */}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex items-center space-x-4">
        <p variant="ghost">Log in</p>
        <p>Sign up</p>
      </div>
    </div>
    {activeItem && (
        <div className="absolute inset-0 top-[57px] -z-10 h-[calc(100vh-57px)] w-full bg-background/80 backdrop-blur-sm" />
      )}
    </div>
  
  )
}

export default Navbar