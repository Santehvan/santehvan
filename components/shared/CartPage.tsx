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
        together = together + (data.price * data.quantity)
    })
    setToPay(together);
    setPriceToPay(together.toFixed(2))
},[cartData])



function removeProduct(index:number){

    cartData.splice(index, 1);
    setCartData((prev:any)=>[...prev], cartData); 
}

function setCount(index: number, value: any) {
    value = Number(value);
    if (Number.isInteger(value)) { // Перевірка чи є цілим числом
      cartData[index].quantity = value;
      setCartData((prev: any) => [...prev], cartData);
    }else {
      // Якщо value не є цілим числом, присвоюємо йому значення 1
      
      cartData[index].quantity = 1;
      setCartData((prev: any) => [...prev], cartData);
    }

  }

function plus(index:number){
    if(cartData[index].quantity < 999){
        cartData[index].quantity ++;
        setCartData((prev: any) => [...prev], cartData);
    }
  }

function minus(index:number){
    if(cartData[index].quantity > 1){
        cartData[index].quantity--;
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
            <div className='w-full flex flex-col items-center gap-7 overflow-auto h-2/3 pb-20'>
              {cartData.map((data:any,index:number)=>(
                <article key={index} className="w-10/12 h-fit flex flex-col items-center">
                  <div className="w-full h-32 flex">
                    <div className="w-1/3 h-full flex justify-center items-center ">
                      <Image width={500} height={100} alt='' className='w-[100px] h-[100px]' src={data.image}  />
                    </div>
                    <div className="w-2/3 h-full px-2 py-3">
                      <div className="w-full h-fit flex">
                        <p className='text-[16px] mb-5 font-medium w-[180px]'>{data.name}</p>
                        <Image onClick={()=>removeProduct(index)} className='w-fit h-full ml-auto cursor-pointer' width={22} height={22} alt='' src='/assets/delete.svg'/>
                      </div>
                      <div className="w-full h-7 flex">
                        <div className='w-1/2 h-full flex gap-1 items-center'>
                          <Button onClick={()=>minus(index)} variant="ghost" className='w-5 h-5'>-</Button>
                          <input className='w-5 h-5 rounded-md shadow-2xl resize-none text-center pt-1 focus:outline-0'  value={data.quantity} 
                            onChange={(e)=>setCount(index,e.target.value)} 
                            onBlur={(e)=>delProduct(index,e.target.value)} 
                            maxLength={3}>
                          </input>
                          <Button onClick={()=>plus(index)} variant="ghost" className='w-5 h-5'>+</Button>
                        </div>
                        <div className="w-1/2 h-full flex flex-col items-end justify-end">
                          <p className="text-small-medium text-gray-700 line-through decoration-red-500 mr-3">₴{data.priceWithoutDiscount}</p>
                          <p className="w-full text-black h-full font-semibold text-end px-2">₴{data.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[2px] rounded-full bg-neutral-500/30"></div>
                </article>
              // <div key={index} className='flex flex-col m-10 w-auto justify-between border border-gray-700 rounded-md p-3 relative'>
              //     <Image width={500} height={100} alt='' className='w-[100px] h-[100px] right-10 top-5 absolute' src={data[2]}  />
              //     <p className='text-[18px] mb-5 font-medium h-[99px] w-[138px]'>{data[1]}</p>
              //     <div className='w-full'>
              //         <div ><span className='font-bold text-[20px] '>{data[3]}</span> грн.</div>
              //     </div>  
              //     <div className='flex flex-col justify-between    '>
              //         <Image onClick={()=>removeProduct(index)} className='ml-auto cursor-pointer' width={20} height={20} alt='' src='/assets/delete.svg'/>
              //         <div className='flex gap-1 items-center'>
              //             <Button onClick={()=>minus(index)} className='w-8 h-8'>-</Button>
              //             <input className='w-8 h-8 border border-gray-700 rounded-md resize-none text-center pt-1'  value={data[4]} 
              //             onChange={(e)=>setCount(index,e.target.value)} 
              //             onBlur={(e)=>delProduct(index,e.target.value)} 
              //             maxLength={3}></input>
              //             <Button onClick={()=>plus(index)} className='w-8 h-8'>+</Button>
              //         </div>
              //     </div>
              // </div>
              ))}
            </div>

            


            
            
            <div className='w-full flex bg-white my-3 px-10 right-0 flex-col absolute bottom-0 border-t-2 border-dashed pt-2 border-black'>
              <div className='text-[20px] text-center border-black pb-5 text-nowrap'>Разом: <span className='font-bold'>{toPay.toFixed(2)}</span> грн.</div>
              <Button onClick={hideCart} variant='outline' className='mb-5'>Повернутись до кокупок</Button>
              <Link href='/order' className='w-full'><Button onClick={hideCart} className='w-full'>Замовити</Button></Link>
            </div>
        </>
 
  )
}

export default CartPage