'use client'

import React, { useRef, useState } from 'react'
import { useAppContext } from '@/app/(root)/context'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useEffect } from 'react'
import Link from 'next/link'


const CartPage = (cartRef:any) => {
//@ts-ignore
const {cartData, setCartData, setPriceToPay} = useAppContext();

function hideCart(){
    //@ts-ignore
   
    cartRef.cartRef.current.style.right = "-100%";
    document.body.style.overflow = "auto"
  }



let together = 0

const [toPay, setToPay] = useState(0);

useEffect(()=>{
 
    cartData.map((data:any)=>{
        together = together + (data[3]*data[4])
    })
    setToPay(together);
    setPriceToPay(together.toFixed(2))
},[cartData])



function removeProduct(index:number){

    cartData.splice(index,1);
    setCartData((prev:any)=>[...prev], cartData); 
}

function setCount(index: number, value: any) {
    value = Number(value);
    if (Number.isInteger(value)) { // Перевірка чи є цілим числом
      cartData[index][4] = value;
      setCartData((prev: any) => [...prev], cartData);
    }else {
      // Якщо value не є цілим числом, присвоюємо йому значення 1
      
      cartData[index][4] = 1;
      setCartData((prev: any) => [...prev], cartData);
    }

  }

function plus(index:number){
    if(cartData[index][4]<999){
        cartData[index][4]++;
        setCartData((prev: any) => [...prev], cartData);
    }
  }

function minus(index:number){
    if(cartData[index][4]>1){
        cartData[index][4]--;
        setCartData((prev: any) => [...prev], cartData);
    }
  }


function delProduct(index: number, value: any){
    value = Number(value);
    if(value<1){
        removeProduct(index);
    }
}

  return (
    
       
        < >
            <h2 className='text-[35px] m-10 font-medium'>Кошик</h2>
            <div className='overflow-auto h-2/3 pb-20'>
              {cartData.map((data:any,index:number)=>(
              <div key={index} className='flex m-10 w-auto  justify-between border border-gray-700 rounded-md p-3 relative'>
                  <Image width={500} height={100} alt='' className='w-[100px] h-[100px] right-10 top-5 absolute' src={data[2]}  />
                  <div className='w-full'>
                      <p className='text-[18px] mb-5 font-medium h-[99px] w-[138px]'>{data[1]}</p>
                      <div ><span className='font-bold text-[20px] '>{data[3]}</span> грн.</div>
                  </div>  
                  <div className='flex flex-col justify-between    '>
                      <Image onClick={()=>removeProduct(index)} className='ml-auto cursor-pointer' width={25} height={25} alt='' src='/assets/close.svg'/>
                      <div className='flex gap-1 items-center'>
                          <Button onClick={()=>minus(index)} className='w-8 h-8'>-</Button>
                          <input className='w-8 h-8 border border-gray-700 rounded-md resize-none text-center pt-1'  value={data[4]} 
                          onChange={(e)=>setCount(index,e.target.value)} 
                          onBlur={(e)=>delProduct(index,e.target.value)} 
                          maxLength={3}></input>
                          <Button onClick={()=>plus(index)} className='w-8 h-8'>+</Button>
                      </div>
                  </div>
              </div>
              ))}
            </div>

            


            
            

            <div className='flex bg-white my-3 mx-10 right-0 flex-col absolute bottom-0 border-t-2 border-dashed pt-2 border-black'>
                <div className='text-[20px]  text-right mx-10  border-black pb-5 text-nowrap'>Разом: <span className='font-bold'>{toPay.toFixed(2)}</span> грн.</div>
                <Button onClick={hideCart} variant='outline' className='mb-5'>Повернутись до кокупок</Button>
                <Link href='/order' className='w-full'><Button onClick={hideCart} className='w-full'>Замовити</Button></Link>
            </div>
        </>
 
  )
}

export default CartPage