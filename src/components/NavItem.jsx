import React, { useState } from 'react'

const NavItem = ({label,href ,items}) => {
    const [isHover, setIsHover] = useState(false)

    
  if(items){
    return(
        <li className='relative'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        >
          <a className="flex items-center  text-sm font-medium text-slate-700 no-underline p-2 hover:cursor-pointer">
           {label}
          </a>
        {isHover && (
            <>
           <div className=" slide-down fixed left-0 right-0 mt-0 z-50 bg-white/75 backdrop-blur-sm h-screen w-screen " >
              <div className='h-fit w-full bg-white '> 

               <div className=" mx-auto px-4 py-2">
               <ul className="grid grid-cols-3 w-2/4 mt-4 mx-56 mb-10 ">
                {items.map((item) =>(
                    <li>
                        <span className='block text-sm text-gray-900'>
                        {item.label}
                        </span>

                        {item.subitems && (
                            <ul className='list space-y-2 m-0 p-0 mt-3 '>
                                {item.subitems.map((subitem,index) => (
                                 <li className='fade-in'
                                 style={{
                                  animationDelay: `${index * 0.06}s`, // เพิ่ม delay สำหรับแต่ละ item
                                }}
                                 >
                                <a href={subitem.href}
                                 className= {`text-black no-underline text-sm ${ item.isLarge ? 'text-xl' : 'text-sm'} `} 
                                    >{subitem.label}</a>
                                 </li>   
                                ))}
                            </ul>
                        )}

                    </li>

                ))}

               </ul>
               </div>
            </div>
            </div>
            </>
        )}
        </li>   

    )
  }  


  return (
    <li>
      <a
        href={href || '#'}
        className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md  hover:text-white"
      >
        {label}
      </a>
    </li>
  )
}

export default NavItem