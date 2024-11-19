import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import Maps from './../img/maps.png'

const DataList =[
  {
    navPage : [ "/home", "/about", "work", "/contact" ],
    navTitle : [ "/Home", "About", "Work", "Contact"],
  },
  {
    footerTitle : [ "Instagram", "LinkedIn", "Github", "Lorem" ],
    footerContact : [ "Email", "LinkedIn"],
  }]

  
{/* // 'xs': '460px',
//  's': '576px',
//    'm': '768px',
//   'l': '992px', --
//    'xl': '1280px',
//    'hd': '1680px', */}


function Layout() {
  return (
    <>
    {/* mx-auto py-6 m:py-10 xl:py-14 w-[16rem] xs:w-full xs:px-10 s:px-16 m:px-20 xs:flex xs:justify-between */}

    {/* xs:gap-3 m:gap-4 tracking-widest font-normal text-sm xs:text-base font-MontserratAlternates */}
      <div className='mx-auto flex flex-col items-center gap-8 m:flex-row'>
        
        <ul className='nav pt-9 tracking-widest text-sm xs:w-[22rem] h-full m:flex m:flex-row-reverse m:w-[8rem] m:pt-0 m:items-center m:justify-around m:text-xs'>
          
          <li className='m:h-[15rem]'>
            <ul className='flex justify-between items-center w-[16rem] mx-auto m:w-0'>
              
              {DataList[0].navPage.map((page, index) =>
                <li key={index}>
                  <NavLink to={page} className={({ isActive }) => isActive ? 'font-semibold xs:font-normal' : ''}> {DataList[0].navTitle[index]} </NavLink>
                </li>
              )}

            </ul>
          </li>

          <li className='hidden m:block'>
            <span>Ridwan</span>
          </li>

        </ul>
        
        <div className='bg-blue-400 w-full'>
        {/* px-6 xs:px-16 */}
          <Outlet/>
        </div>
      
      </div>

      {/* <div className='px-6 xs:px-10 s:px-16 m:px-20'>
        <Outlet/>
      </div> */}

    
{/* 
      <div className='bg-dark mt-10 py-10 px-6 text-light'>

        <div className='flex flex-col gap-8 items-start'>
          
          <div className='flex text-xs w-[14rem] justify-between'>
            <ul className='flex flex-col gap-2'>
              <li className='font-semibold text-base'> Sosmed </li>
              {DataList[1].footerTitle.map((page, index) => 
                <li key={index} className=''>{page}</li>
              )}
            </ul>
            <ul className='flex flex-col gap-2'>
              <li className='text-base font-semibold'>Contact</li>
              {DataList[1].footerContact.map((page, index) => 
                <li key={index}>{page}</li>
              )}
            </ul>
          </div>

          <div className='flex flex-col text-xs'>
            <img src={Maps} alt="" className='w-11/12 block bg-red-700'/>
            <span className='mt-3 self-start'> @Lorem</span>
            <span className='self-start'> ridwanndwip </span>
          </div>

        </div>

      </div> */}
    </>
  )
}

export default Layout