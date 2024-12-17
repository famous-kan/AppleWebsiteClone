import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import '../index.css'

const ImageSlide = () => {
    const [currectIndex, setCurrentIndex] = useState(0)

    const movies = [
        {
          id: 1,
          image: "https://is1-ssl.mzstatic.com/image/thumb/a_voEGGOjHGvUUhwrbStXQ/980x551.jpg",
          genre: "Comedy · ",
          detail: "A musical comedy based on holiday classic."
        },
        {
          id: 2,
          image: "https://is1-ssl.mzstatic.com/image/thumb/rQ9tx4HlD7su-j1sVFPebg/980x551.jpg",
          genre: "Thriller · ",
          detail: "New season"
        },
        {
          id: 3,
          image: "https://is1-ssl.mzstatic.com/image/thumb/t0ZBZJdSQL6-uGE65O5Q2A/980x551.jpg",
          genre: "Drama · ",
          detail: "Saoirse Ronan stars in a wartime family epic from director Steve McQueen."
        },
        {
         id:4,
         image: "https://is1-ssl.mzstatic.com/image/thumb/LEDx4gCVQd_lTJt81zQq8w/980x551.jpg",
         genre: "Sci-Fi · ",
         detail: "New season"
        },
        {
         id:5,
         image: "https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/980x551.jpg",
         genre: "Comedy · ",
         detail: "Breakdown.Breakthrough"
        },
        {
         id:6,
         image: "https://is1-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/980x551.jpg",
         genre: "Thriller · ",
         detail: "Catch up now.New season premieres Jan. 17."
        },

      ];

      useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => 
                prev === movies.length - 1 ? 0 :prev+1 
            )
        },6000)
        return () =>  clearInterval(interval)
      },[])

      const nextMovie = () => {
        setCurrentIndex(prev => prev === movies.length-1 ? 0 : prev+1)
      }

      const previousMovie = () => {
        setCurrentIndex(prev => prev === 0 ? movies.length -1 : prev-1)
      }


  return (
    <div className='w-screen h-[90vh] flex justify-center items-center flex-col gap-3'>
        <div className='relative w-full h-full flex justify-center items-center overflow-hidden'>
            <div className='absolute flex w-full h-full'>

                {movies.map((item,index) => {
                return (
                    <div>
                    <img 
                    src={item.image} 
                    key={item.id}
                    alt="" 
                    className='w-full h-full object-contain'
                    style={{ 
                        transform: `translateX(${(index - currectIndex) * 100}%)`,
                        transition: 'transform 0.8s ease-in-out',
                        position: 'absolute'
                    }}
                    />
                    
                    <p className=' text-white h-10 w-fit absolute bottom-2 left-[300px] text-xl flex justify-center items-center gap-2'
                    style={{
                      transform: `translateY(${index === currectIndex ? '0' : '100%'})`,
                      opacity: item.id === currectIndex+1 ? 1 : 0,
                      transition: 'all 0.8s ease-in-out',
                      visibility: item.id === currectIndex+1 ? 'visible' : 'hidden',
                      transitionDelay: item.id === currectIndex+1 ? '1s' : '0s',
                    }}
                    ><Button variant="light" href="/" className='rounded-pill '>Stream Now</Button>  <b>{item.genre}</b> {item.detail}</p>
                    </div>
                )
                })}
            </div>

            <Button onClick={previousMovie}
            variant="link"
            className='absolute h-full p-0 top-1/2 blur-[2px] left-[-140px] transform -translate-y-1/2 -translate-x-2/3'>
                <img 
                 src={movies[currectIndex === 0 ? movies.length - 1 : currectIndex - 1].image} 
                alt="Previous" 
                className="w-full h-full object-cover "
            />
            </Button>

            <Button onClick={nextMovie}
            variant="link"
            className='absolute h-full p-0 top-1/2 blur-[2px] right-[-140px] transform -translate-y-1/2 translate-x-2/3'>
              <img 
                src={movies[currectIndex === movies.length - 1 ? 0 : currectIndex + 1].image} 
                alt="Next" 
                className="w-full h-full object-cover"
            />
            </Button>


        </div>

            <div className=' w-full gap-3 h-[20px] flex justify-center items-center' >
                {movies.map((item,index) => {
                   return (
                    <p
                    className= {item.id === currectIndex +1 ? 'button-hover button-active' : 'button-hover'}     
                    onClick={() => setCurrentIndex(index)}
                    ></p>
                   )
                   
                })}  
            </div>


    </div>
  )
}

export default ImageSlide