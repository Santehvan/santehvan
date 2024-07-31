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
    <Select onValueChange={(element)=>setSort(element)} >
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Звичайне" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="default" >Звичайне</SelectItem>
                  <SelectItem value="low_price" >Ціна(низька)</SelectItem>
                  <SelectItem value="hight_price">Ціна(Висока)</SelectItem>
                  
                </SelectGroup>
              </SelectContent>
            </Select></>
  )
}

export default Search