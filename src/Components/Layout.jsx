import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

const NavComp = ({title, page}) => {
  return(
    <>
        <li>
          <NavLink to={page} className={({ isActive }) => `default-class ${isActive ? "relative after:absolute after:content-[''] after:bg-cream after:w-full after:h-[2px] after:rounded-3xl after:-bottom-2 after:left-0 after:transform after:scale-x-100 after:transition-transform after:duration-100" : 'after:scale-x-0'}`}> {title} </NavLink>
        </li>
    </>
  )
}

function Layout() {
  return (
    <>
      <div className='py-6 px-8 xs:px-12 s:flex s:justify-between'>
        <span className='hidden s:block'>logo</span>
        <ul className='flex justify-between font-normal tracking-widest text-lg xs:text-xl s:w-3/4'>
          {/* <span className="block after:content-[''] after:bg-green-400 after:w-10 after:h-10"></span> */}
          <NavComp title="/Home" page="/home"/>
          <NavComp title="About" page="/about"/>
          <NavComp title="Work" page="/work"/>
          <NavComp title="Contact" page="/contact"/>
        </ul>
      </div>

      <div className='py-2 px-4'>
      <Outlet/>
      </div>

      <span> Footer </span>
    </>
  )
}

export default Layout