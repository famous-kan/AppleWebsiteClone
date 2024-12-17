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
            <div className="fixed left-0 right-0 mt-0 bg-white z-20">
               <div className=" mx-auto px-4 py-2">
               <ul className="grid grid-cols-3 w-2/4 mt-3 mx-56 ">
                {items.map((item) =>(
                    <li>
                        <span className='block text-sm text-gray-900'>
                        {item.label}
                        </span>

                        {item.subitems && (
                            <ul className='space-y-2 m-0 p-0 mt-3 '>
                                {item.subitems.map((subitem,index) => (
                                 <li className=''>
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
            </>
        )}
        </li>   

    )
  }  


  return (
    <li>
      <a
        href={href || '#'}
        className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
      >
        {label}
      </a>
    </li>
  )
}

export default NavItem