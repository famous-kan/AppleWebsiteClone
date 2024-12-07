import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <div className='bg-[#f5f5f7]'><Navbar /></div>

        <div className='bg-white flex-1'><Outlet /></div>
            
        <div className='bg-red-500'><Footer /></div>
        
    </div>
  )
}

export default Layout