'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {useDebounce} from 'use-debounce'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useAppContext } from '@/app/(root)/context'


const Search = ({searchParams}:any) => {
    const router = useRouter();
    const {catalogData, setCatalogData} = useAppContext();
    const [sort, setSort] = useState('default');
    const [searchText, setSearchText] = useState();
    const [debounce] = useDebounce(searchText,200)

   
    

    const textFromInput = (e:any)=>{
        setSearchText(e.target.value)
    }

     useEffect(()=>{
      setCatalogData({...catalogData, search:debounce, sort:sort});
    },[debounce,sort])


    

  return (<>
    <div className='w-3/5 flex mr-5 max-md:text-black '><Input type='text' onChange={textFromInput}  placeholder='Пошук товару' /></div>
        <Select onValueChange={(element)=>setSort(element)} aria-label="Sort Options">
          <SelectTrigger className="w-[240px]" aria-label="Sort Selector">
            <SelectValue placeholder="Звичайне" aria-label="Aria Selected" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="default" aria-label="Default">Звичайне</SelectItem>
              <SelectItem value="low_price" aria-label="Low Price">Ціна(низька)</SelectItem>
              <SelectItem value="hight_price" aria-label="High Price">Ціна(Висока)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select></>
  )
}

export default Search
