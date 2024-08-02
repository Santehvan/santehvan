'use client'

import React, { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from "next/navigation"
import { useDebounce } from 'use-debounce'
import { useEffect } from 'react'
import { useAppContext } from "@/app/(root)/context"
import FilterButton from '@/components/shared/FilterButton'
import { useRef } from 'react';
import { Button } from '../ui/button'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'


const Filter = ({maxPrice, searchParams, minPrice, maxMin, vendors, series, color, Type, category, categories}:{maxPrice:number,searchParams:any ,minPrice:number, maxMin:Array<number>, vendors:Array<string>, series:Array<string>, color:Array<string>, Type:Array<string>, category:any, categories:Array<string>}) => {
    const {catalogData, setCatalogData} = useAppContext();
    const [filter, setFilter] = useState<{
      price: [number, number],
      width: [number, number],
      height: [number, number],
      deep: [number, number],
      vendor: string[],  // Визначаємо тип для vendor як масив рядків
      series: string[],
      color: string[],
      type: string[]
    }>({
      price: [minPrice, maxPrice],
      width: [maxMin[1], maxMin[0]],
      height: [maxMin[3], maxMin[2]],
      deep: [maxMin[5], maxMin[4]],
      vendor: [],
      series: [],
      color: [],
      type: []
    });

  
    

    const router = useRouter()

    const [debounce] = useDebounce(filter,200)
    
  
    const handleCheckboxChange = (v:any) => {
      
      const selectedVendor = v; // Assuming the value of checkbox is the vendor name
      //@ts-ignore
      const isChecked = filter.vendor.includes(v);
  
      setFilter((prevFilter):any => {
        if (!isChecked) {
          // If checkbox is checked, add the selected vendor to the array
          return {
            ...prevFilter,
            vendor: [...prevFilter.vendor, selectedVendor]
          };
        } else {
          // If checkbox is unchecked, remove the selected vendor from the array
          return {
            ...prevFilter,
            vendor: prevFilter.vendor.filter(vendor => vendor !== selectedVendor)
          };
        }
      });
      setCatalogData({...catalogData, pNumber:1});
    };

    useEffect(()=>{

      if(searchParams.vendor){
        setFilter((prevFilter:any) => ({
          ...prevFilter,
          vendor: [searchParams.vendor]
        }));
      }

      if(searchParams.color){
        setFilter((prevFilter:any) => ({
          ...prevFilter,
          color: [searchParams.color]
        }));
      }
      if(searchParams.type){
        setFilter((prevFilter:any) => ({
          ...prevFilter,
          type: [searchParams.type]
        }));
      }
      if(searchParams.series){
        setFilter((prevFilter:any) => ({
          ...prevFilter,
          series: [searchParams.series]
        }));
      }
   
      if(searchParams.maxWidth){
         setFilter((prevFilter:any) => ({
           ...prevFilter,
           width: [searchParams.minWidth, searchParams.maxWidth]
         }));
       }

      if(searchParams.maxPrice){
        setFilter((prevFilter:any) => ({
          ...prevFilter,
          price: [searchParams.minPrice, searchParams.maxPrice]
        }));
      }

      if(searchParams.maxHeight){
        setFilter((prevFilter:any) => ({
          ...prevFilter,
          height: [searchParams.minHeight, searchParams.maxHeight]
        }));
      }

      if(searchParams.maxDeep){
        setFilter((prevFilter:any) => ({
          ...prevFilter,
          deep: [searchParams.minDeep, searchParams.maxDeep]
        }));
      }

    },[])

   
    useEffect(()=>{
      
      
      router.push(`/catalog?${'page='+ catalogData.pNumber}${catalogData.sort!=''?'&sort='+ catalogData.sort:''}${filter.color.length>0?'&color='+ filter.color:''}${filter.type.length>0?'&type='+ filter.type:''}${catalogData.search?'&search='+ catalogData.search:''}${filter.vendor.length>0?'&vendor='+filter.vendor:''}${filter.series.length>0?'&series='+filter.series:''}${filter.price[0]!=minPrice || filter.price[1]!=maxPrice ?'&minPrice='+ filter.price[0]+'&maxPrice='+ filter.price[1]:''}${filter.width[0]!= maxMin[1] || filter.width[1]!=maxMin[0] ?'&minWidth='+ filter.width[0]+'&maxWidth='+ filter.width[1]:''}${filter.height[0]!= maxMin[3] || filter.height[1]!=maxMin[2] ?'&minHeight='+ filter.height[0]+'&maxHeight='+ filter.height[1]:''}${filter.deep[0]!= maxMin[5] || filter.deep[1]!=maxMin[4] ?'&minDeep='+ filter.deep[0]+'&maxDeep='+ filter.deep[1]:''}${category?'&category='+category:''}
      `      
     ) 
   },[debounce, catalogData.sort, catalogData.search, category,catalogData.pNumber]) 

   
  

  // useEffect(()=>{
        
  //  router.push(`/catalog?${'page='+ catalogData.pNumber}${catalogData.sort!=''?'&sort='+ catalogData.sort:''}${filter.color.length>0?'&color='+ filter.color:''}${filter.type.length>0?'&type='+ filter.type:''}${catalogData.search?'&search='+ catalogData.search:''}${filter.vendor.length>0?'&vendor='+filter.vendor:''}${filter.series.length>0?'&series='+filter.series:''}${filter.price[0]!=minPrice || filter.price[1]!=maxPrice ?'&minPrice='+ filter.price[0]+'&maxPrice='+ filter.price[1]:''}${filter.width[0]!= maxMin[1] || filter.width[1]!=maxMin[0] ?'&minWidth='+ filter.width[0]+'&maxWidth='+ filter.width[1]:''}${filter.height[0]!= maxMin[3] || filter.height[1]!=maxMin[2] ?'&minHeight='+ filter.height[0]+'&maxHeight='+ filter.height[1]:''}${filter.deep[0]!= maxMin[5] || filter.deep[1]!=maxMin[4] ?'&minDeep='+ filter.deep[0]+'&maxDeep='+ filter.deep[1]:''}${category?'&category='+category:''}
 
  //    `)
  // },[catalogData.pNumber])

    
  // useEffect(()=>{
  //   setFilter({...filter, price:[minPrice, maxPrice],height:[maxMin[3], maxMin[2]],width:[maxMin[1], maxMin[0]],deep:[maxMin[5], maxMin[4]]});
  // },[category])

   

    const handleChange = (newValue: [number, number]) => {
      setFilter({...filter, price:newValue})
      setCatalogData({...catalogData, pNumber:1});
    };




   

    const handleSeries = (v:any) => {
      const selectedSeria = v; 
      //@ts-ignore
      const isChecked = filter.series?.includes(v);
  
      setFilter((prevFilter):any => {
        if (!isChecked) {
          return {
            ...prevFilter,
            series: [...prevFilter.series, selectedSeria]
          };
        } else {
          return {
            ...prevFilter,
            series: prevFilter.series.filter(series => series !== selectedSeria)
          };
        }
      });
      setCatalogData({...catalogData, pNumber:1});
    };

    const handleColor = (v:any) => {
      const selectedColor = v; 
      //@ts-ignore
      const isChecked = filter.color?.includes(v);
  
      setFilter((prevFilter):any => {
        if (!isChecked) {
          return {
            ...prevFilter,
            color: [...prevFilter.color, selectedColor]
          };
        } else {
          return {
            ...prevFilter,
            color: prevFilter.color.filter(color => color !== selectedColor)
          };
        }
      });
      setCatalogData({...catalogData, pNumber:1});
    };

    const handleType = (v:any) => {
      const selectedType = v; 
      //@ts-ignore
      const isChecked = filter.type?.includes(v);
  
      setFilter((prevFilter):any => {
        if (!isChecked) {
          return {
            ...prevFilter,
            type: [...prevFilter.type, selectedType]
          };
        } else {
          return {
            ...prevFilter,
            type: prevFilter.type.filter(type => type !== selectedType)
          };
        }
      });
      setCatalogData({...catalogData, pNumber:1});
    };
  const divRef = useRef(null);
  const [bodyOverflow, setBodyOverflow] = useState(false);
  const toggleOverflow = (e:any) =>{
    if (divRef.current) {
      if (bodyOverflow) {
        document.body.style.overflow = 'auto';
        //@ts-ignore
        divRef.current.style.overflow = 'hidden';
        //@ts-ignore
        divRef.current.style.transform = `translateX(-100%)`
        e.target.style.transform = `translateX(0px)`
      } else {
        document.body.style.overflow = 'hidden';
        //@ts-ignore
        divRef.current.style.overflowY = 'auto';
        //@ts-ignore
        divRef.current.style.transform = `translateX(0%)`
        e.target.style.transform = `translateX(270px)`
      } 
    }
    setBodyOverflow(!bodyOverflow);
  };

 



  // useEffect(()=>{
    
  //   
   
  // },[maxPrice, minPrice,  maxMin])

  return (
    <>
    <Button onClick={(e)=>toggleOverflow(e)} name="filter" aria-label="Aria Filter" className="fixed duration-300 left-0 top-36 rounded-none rounded-r md:hidden transition-all"><i className="fa fa-filter pointer-events-none"></i></Button>
    <div ref={divRef} className='transition-all duration-300 w-[300px] border-r-2 border-gray-700 max-md:w-[270px]  max-md:fixed max-md:bg-white  max-md:flex max-md:flex-col justify-center z-50 items-center max-md:overflow-y-scroll overflow-x-hidden max-md:h-full  max-md:translate-x-[-100%] top-0  left-0 ' >
      <div className='h-full max-md:w-[300px] max-md:pl-10 pt-10 '>
            <h2 className='text-[28px]'>{category?category.replace(/_/g, ' '):'Фільтр'}</h2>
            <div className='mt-4 max-md:w-[90%]'>
                <h3 className='text-[23px]'>Ціна</h3>
                <Slider
                  value={filter.price}
                  onValueChange={handleChange}
                  max={maxPrice}
                  min={minPrice}
                  step={1}
                  className={cn("w-[80%] mt-4")}/>
                  <div className='flex justify-between mt-4 w-[80%]'>
                    <div className='w-20 h-8 border flex items-center justify-center'>{filter.price[0]}</div>
                    <div className='w-20 h-8 border flex items-center justify-center'>{filter.price[1]}</div>
                  </div>
            </div>
            
            <div className='mt-4 border-b-2 pb-4 w-[90%] border-dashed '>
                <h3 className='text-[23px]'>Виробник</h3>
                  {vendors.map((v)=>(
                    <div className="flex items-center space-x-2 mt-4" key={v}>
                     <Checkbox aria-label={'Aria Vendor '+ v} id={v} onCheckedChange={(e)=>handleCheckboxChange(v)} checked={filter.vendor.includes(v)} />
                      
                      <label
                        htmlFor={v}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {v}
                      </label>
                      </div>
                  ))}
                  
               
               
            </div>

            <div className='mt-4 pb-4 w-[90%] border-dashed '>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" >
                  <AccordionTrigger aria-label="Aria Categories" name="Categories" className='text-[20px]'>Категорія</AccordionTrigger>
                  <AccordionContent>
                    <a href='/catalog?category=' className='hover:underline max-lg:underline' >Всі категорії</a>
                    {categories.map((t)=>(
                      <div className="flex items-center space-x-2 mt-4" key={t}>
                        <a  href={'/catalog?category='+t.replace(/ /g, '_')} className='hover:underline max-lg:underline'>{t}</a>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>







            <div className='mt-4 pb-4 w-[90%] border-dashed '>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className='text-[20px]'>Вид</AccordionTrigger>
                  <AccordionContent>
                    {Type.map((t)=>(
                      <div className="flex items-center space-x-2 mt-4" key={t}>
                        <Checkbox  id={t} onCheckedChange={(e)=>handleCheckboxChange(t)} checked={filter.type.includes(t)} />
                      
                      <label
                        htmlFor={t}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {t}
                      </label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className='mt-4 pb-4 w-[90%] border-dashed '>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className='text-[20px]'>Серія</AccordionTrigger>
                  <AccordionContent>
                    {series.map((s)=>(
                      <div className="flex items-center space-x-2 mt-4" key={s}>
                      <Checkbox id={s} onCheckedChange={(e)=>handleCheckboxChange(s)} checked={filter.series.includes(s)} />
                      <label
                        htmlFor={s}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {s}
                      </label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className='mt-4 pb-4 w-[90%] border-dashed '>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className='text-[20px]'>Колір</AccordionTrigger>
                  <AccordionContent>
                    {color.map((c)=>(
                      <div className="flex items-center space-x-2 mt-4" key={c}>
                      <Checkbox  id={c} onCheckedChange={(e)=>handleCheckboxChange(c)} checked={filter.color.includes(c)} />
                      <label
                        htmlFor={c}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {c}
                      </label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className='mt-4 max-md:w-[90%]'>
                <h3 className='text-[23px]'>Ширина</h3>
                <Slider
                  value={filter.width}
                  onValueChange={([min,max])=>{setFilter({...filter, width:[min,max]})}}
                  max={maxMin[0]}
                  min={maxMin[1]}
                  step={1}
                  className={cn("w-[80%] mt-4")}/>
                  <div className='flex justify-between mt-4 w-[80%]'>
                    <div className='w-20 h-8 border flex items-center justify-center'>{filter.width[0]}</div>
                    <div className='w-20 h-8 border flex items-center justify-center'>{filter.width[1]}</div>
                  </div>
            </div>
            <div className='mt-4 max-md:w-[90%]'>
                <h3 className='text-[23px]'>Висота</h3>
                <Slider
                  value={filter.height}
                  onValueChange={([min,max])=>{setFilter({...filter, height:[min,max]})}}
                  max={maxMin[2]}
                  min={maxMin[3]}
                  step={1}
                  className={cn("w-[80%] mt-4")}/>
                  <div className='flex justify-between mt-4 w-[80%]'>
                    <div className='w-20 h-8 border flex items-center justify-center'>{filter.height[0]}</div>
                    <div className='w-20 h-8 border flex items-center justify-center'>{filter.height[1]}</div>
                  </div>
            </div>
            <div className='mt-4 max-md:w-[90%] max-md:pb-36'>
                <h3 className='text-[23px]'>Глибина</h3>
                <Slider
                  value={filter.deep}
                  onValueChange={([min,max])=>{setFilter({...filter, deep:[min,max]})}}
                  max={maxMin[4]}
                  min={maxMin[5]}
                  step={1}
                  className={cn("w-[80%] mt-4")}/>
                  <div className='flex justify-between mt-4 w-[80%]'>
                    <div className='w-20 h-8 border flex items-center justify-center'>{filter.deep[0]}</div>
                    <div className='w-20 h-8 border flex items-center justify-center'>{filter.deep[1]}</div>
                  </div>
            </div>
     
            </div>
        </div></>
  )
}

export default Filter