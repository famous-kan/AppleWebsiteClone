import React from 'react'
import iPhone16pro from '../assets/iPhone16pro.mp4'
import { Button } from 'react-bootstrap'
import Applegift from '../assets/Applegift.mp4'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
  return (
    <div>
        <div className='w-screen h-10 flex justify-center items-center bg-slate-800'>
            <p className='text-center mb-0 text-white'>Get $180–$650 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.*  <a href="/">Buy</a></p>
        </div>
        {/* //////////////////////////////// */}
        <div className=''>
            <div className='relative w-fit'>
            <video src={iPhone16pro} autoPlay playsInline muted></video>
            <Button variant="primary" href="/" className='absolute bottom-[140px] left-[49.8%] transform -translate-x-1/2 -translate-y-1/2 rounded-pill w-[60px] py-2' >Buy</Button>
            <p className='absolute bottom-24 left-[49.8%] transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[17px]  mb-1' >From $999 or $41.62/mo. for 24 mo.1 </p> 
            <p className='absolute bottom-14 left-[49.8%] transform -translate-x-1/2 -translate-y-1/2 text-[#7a7a7a] text-[17px] font-bold' >Apple Intelligence available now2</p>
            </div>

            <div className='absolute bottom-[-125px] left-[49.8%] transform -translate-x-1/2 -translate-y-1/2'>
            </div>

            <div className='absolute bottom-[-235px] flex flex-col justify-center items-center left-[49.8%] transform -translate-x-1/2 -translate-y-1/2'>
            </div>
        </div>
        {/* //////////////////////////////// */}
        <div className='py-8'>
            <div className='relative w-screen overflow-hidden h-[600px] flex justify-center items-center'> 
                <div className='absolute top-10 left-1/2 text-center transform -translate-x-1/2'>
                    <h3 className='text-white text-[52px] font-bold'>iPhone 16</h3>
                    <p className='text-white text-[30px]'>Hello, Apple Intelligence</p>
                    <div className='flex gap-4 justify-center '>
                        <Button variant='light' href="/" className=' rounded-pill w-[150px] py-3' >Learn more</Button>
                        <Button variant='outline-light' href="/" className='rounded-pill w-[90px] py-3' >Buy</Button>
                    </div>
                </div>
                <img 
                    src="https://www.apple.com/v/home/bw/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_medium.jpg" 
                    alt="" 
                    className='w-full h-full'
                />
            </div>
        </div>
        {/* //////////////////////////////// */}
        <div className='py-8 bg-[#f3f3f5]'>
            <div className='relative w-screen overflow-hidden h-[500px] flex justify-center items-center'> 
                <video 
                    src={Applegift} autoPlay playsInline muted
                    alt="" 
                    className='w-full h-full '
                />
                <div className='absolute bottom-0 left-1/2 text-center transform -translate-x-1/2'>
                    <h3 className='text-black text-[52px] font-bold'>Gift magic.</h3>
                    <p className='text-black text-[30px]'>Make their holiday wish come true.</p>
                    <div className='flex gap-4 justify-center'>
                        <Button variant='primary' href="/" className=' rounded-pill w-[150px] py-3' >Shop gifts</Button>
                    </div>
                </div>
            </div>
        </div>
       {/* //////////////////////////////// */}
        <div className='py-8'>

            <div className='grid md:grid-cols-2 gap-1 p-2  '>

                <div className='relative  flex justify-center items-center'>
                    <div className=' absolute top-10 flex flex-col justify-center items-center gap-3'>
                        <img src="https://www.apple.com/v/home/bw/images/logos/ipad-air/promo_logo_ipadair_ai__gikal75essya_medium.png" 
                        alt="" 
                        className='w-[140px]'
                        />
                        <span className="gradient text-[20px] ">Two sizes. Faster chip. Does it all</span>
                        <div className='flex gap-2'>
                            <Button variant='primary' href="/" className=' rounded-pill h-10 ' >Learn more</Button>
                            <Button variant='outline-primary' href="/" className=' rounded-pill h-10 w-16' >Buy</Button>
                        </div>
                    </div>

                    <img src="https://www.apple.com/v/home/bw/images/promos/ipad-air/promo_ipadair_ai__3fv1eitzqv6y_medium.jpg" 
                    alt="" 
                    srcset=""
                    className='w-full md:h-[570px] p-1'
                    />
                        <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-transparent bg-clip-text font-bold absolute bottom-10">Hello, Apple Intelligence.</span>
                </div>

                <div className=' flex justify-center items-start md:h-[570px] overflow-hidden'>
                    <img src="https://www.apple.com/v/home/bw/images/promos/airpods-pro-2/promo_airpods_pro_2_avail__vkitqi3okwie_medium.jpg"
                      alt="" 
                      srcset=""
                      className='w-full p-1 aspect-auto'
                      />
                </div>

                <div>
                    1
                </div>
                <div>
                    2
                </div>
                
            </div>
        
        </div>


    </div>
  )
}

export default HomePage