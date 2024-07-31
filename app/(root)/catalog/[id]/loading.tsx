import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'


const loading = () => {
  return (
    <div className='flex gap-5 max-xl:flex-col'>
      <div className='max-w-[768px] w-full max-xl:mx-auto'>
        <Skeleton  className=' w-full h-[573px]'/>
        <div className='flex w-full gap-3 mt-3'>
          <Skeleton  className=' w-[104px] h-[78px]'/>
          <Skeleton  className=' w-[104px] h-[78px]'/>
          <Skeleton  className=' w-[104px] h-[78px]'/>
          <Skeleton  className=' w-[104px] h-[78px]'/>
          <Skeleton  className=' w-[104px] h-[78px]'/>
          <Skeleton  className=' w-[104px] h-[78px]'/>
        </div>
      </div>

      <Skeleton className='w-full h-[664px] max-xl:mx-auto' />
      


    </div>
  )
}

export default loading