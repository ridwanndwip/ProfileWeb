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

function Layout() {
  return (
    <>
      <div className='bg-blue-00 mx-auto py-6 m:py-10 xl:py-14 w-[16rem] xs:w-full xs:px-10 s:px-16 m:px-20 xs:flex xs:justify-between'>
        <span className='hidden xs:block'>--------------- /Home</span>
        <ul className='flex justify-between xs:gap-3 m:gap-4 tracking-widest font-normal text-sm xs:text-base'>
          {DataList[0].navPage.map((page, index) => 
            <li key={index}>
              <NavLink to={page} className={({ isActive }) => isActive ? 'font-semibold xs:font-normal' : ''}> {DataList[0].navTitle[index]} </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className='px-6 xs:px-10 s:px-16 m:px-20'>
        <Outlet/>
      </div>

    
{/* // 'xs': '460px',
//  's': '576px',
//    'm': '768px',
//   'l': '992px', --
//    'xl': '1280px',
//    'hd': '1680px', */}


      <div className='bg-dark mt-10 py-10 px-6 text-light'>

        <div className='flex flex-col gap-8 items-start'>
          
          {/* List */}
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

          {/* Maps & Copyright */}
          <div className='flex flex-col text-xs'>
            <img src={Maps} alt="" className='w-11/12 block bg-red-700'/>
            <span className='mt-3 self-start'> @Lorem</span>
            <span className='self-start'> ridwanndwip </span>
          </div>

        </div>

      </div>
    </>
  )
}

export default Layout