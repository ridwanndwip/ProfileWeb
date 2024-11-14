import React from 'react'

function Home() {
  return (
    <>
    <div className='flex justify-between relative'>
      <div className='w-11/12 bg-black text-white h-36 rounded-lg'></div>
      <span className='w-[1px] h-[13rem] bg-dark block absolute right-0'></span>
    </div>

    {/* <div className='font-montserrat text-xs tracking-wide flex justify-end w-11/12 mt-4'>
      <span> Available For frelance</span>
      <span> Lets Scroll</span>
    </div> */}
    
    <div className='mt-6 w-11/12 text-xs'>
      <h1 className='tracking-[5px] font-semibold text-lg'> RIDWAN </h1>
      <span className='tracking-wider block mt-2 leading-6'> Im a Frontend dev / Email dev / React dev </span>
      <p className='tracking-wider mt-2 font-normal leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est quas quod vel perferendis. Hic iste provident perspiciatis fuga temporibus</p>
      <p className='tracking-wider mt-2 font-normal leading-6'>let check my latest project dibwh ini</p>
    </div>

    <div className='w-11/12'>
    <h1 className='tracking-widest font-semibold text-xs mt-6'> Recently launched  </h1>
    <p className='tracking-wider mt-2 font-normal text-xs leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      
      <div className='hover:bg-gray-300 hover:px-2'>
        <span className='text-xs tracking-wider'> Project 1</span>
        <span className='text-xs tracking-wider block mt-px'> Lorem ipsum dolor sit.</span>
        <div></div>
      </div>
    </div>

    </>
  )
}

export default Home