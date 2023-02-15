import React from 'react';
import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
  <div className='h-[70px] font-poppins  flex items-center bg-[#406343]'>
    <div className='flex flex-row items-center gap-5  max-w-screen-xl mx-auto container'>
    <div>
     <Image src="/images/logo.svg" width={80} height={80}/>
     </div>
    <div className='text-white flex gap-2'>
      <><HomeIcon className='text-white w-4'/>Home</>
      <><HomeIcon className='text-white w-4'/>Home</>
    </div>
    </div>
  </div>
  )
}

export default Header;