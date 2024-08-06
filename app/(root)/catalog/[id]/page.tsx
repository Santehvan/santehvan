'use server'


import ProdactPage from '@/components/shared/ProdactPage';
import Product from '@/lib/models/product.model'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import AddToCart from '@/components/shared/AddToCart';


const CatalogItem = async (context:any) => {
  function removeLastWord(text:string, color:any) {
    // Видалити пробіли з обох боків рядка, розбити його на масив слів і видалити останнє слово
    let words = text.trim().split('_');
    console.log(color)
    if(color.name=='Колір'){
      let CountWords = words.length
      let colorLenght = color.value.trim().split(' ').length;
      console.log(CountWords)
      if(CountWords>1){
        words.splice(-colorLenght);
      }
    } 
    

    return words.join('_'); // З'єднує слова назад у рядок
  }
 

  


  
  const product = await Product.findOne({'params.0.value': context.params.id});
  let modifiedText = removeLastWord(context.params.id, product.params[5]);
  const colors =await Product.find({'params.0.value': { $regex: modifiedText, $options: "i" } });
  let fsd = context.params.id
  
  fsd.split('_').pop()

  
 
  let garantia = {name:'',value:''}
  
  //@ts-ignore
  if(product){
    garantia = product.params.find((obj:any) => obj.name === 'Гарантія');
  }


  return (
    <> {product?
        <section className='flex flex-col'>
          <div className='flex justify-between items-center max-xl:flex-col gap-10'>
            <div className=' w-fit max-xl:w-full'><ProdactPage images={product.images} /></div>
            <div className=' w-auto max-xl:mt-10 max-xl:w-fit '>
              <h1 className='text-[35px] leading-[45px]'>{product.name}</h1>
              <div className='flex items-center mt-10 gap-2 '><p className='fa fa-credit-card'></p>Оплата: готівка / безготівковий розрахунок</div>
              {garantia?<div className='flex items-center mt-4 gap-2'><p className='fa fa-shield'></p>{garantia.name}:{garantia.value}</div>:''}
              
              <div className='mt-10'>
                <h2 className='text-[25px] font-medium'>Колір</h2>
                <div className='flex gap-5 mt-5  flex-wrap'>
                  {colors?.map((color:any) =>(
                    <Link key={color.params[0].value} href={color.params[0].value} className='border-2 border-gray-700 rounded-lg p-1'><Image src={color.images[0]} width={80} height={80} alt='color'></Image></Link>
                  ))}
                </div>
              </div>
              <div className='mt-5'>
                <p className=" text-gray-700 line-through text-[25px]">{product.price}</p>
                <p className=" text-[30px]">₴{product.priceToShow}</p>
              </div>
              <div className='flex gap-5 mt-10 max-sm:flex-col'>
                <div className='flex'>
                  <AddToCart priceWithoutDiscount={product.price} id={product._id} image={product.images[0]} name={product.name} price={product.priceToShow} />
                
                </div>
                <div className='flex'><Link href='/catalog'><Button variant='outline'>Повернутися до покупок</Button></Link></div>
              </div>
            </div>
          </div>
          <div className='w-3/5 max-xl:max-w-[774px] max-xl:w-full max-xl:mx-auto'>
            <h2 className='mt-10 mb-5 text-[25px] font-semibold w-fit'>Опис</h2>
            <div className='w-full'>{product.description.replace(/[^а-щьюяґєіїА-ЩЬЮЯҐЄІЇ0-9. ]/g, '')}</div>
          </div>
          <div className='w-fit max-xl:mx-auto '>
            <h2 className='mt-10 mb-5 text-[25px] font-semibold'>Характеристики</h2>
            <table className='w-fit '>
            <tbody>
            
            {product.params.map((param:any) =>(
              
              <tr key={param.name}>
                <td className='py-3 px-4 border border-gray-700 text-[18px]'>{param.name}</td>
                <td className='py-3 px-4 border border-gray-700 text-[18px]'>{param.value.replaceAll("_", " ")}</td>
              </tr>
            ) )}
              </tbody>
            </table>
          </div>


      










        </section>
      :
        <section>
          <h1 className='text-[45px] text-center  font-bold leading-[65px]'>Товар не знайдено !</h1>
          <p className='text-gray-700 text-justify w-96  mx-auto mt-10'>На жаль, запитувана Вами сторінка не знайдена. Ймовірно, Ви вказали неіснуючу адресу, сторінка була вилучена, переміщена або зараз вона тимчасово недоступна!</p>
          <div className='text-center mt-36'><Link href='/catalog' className=''><Button>До каталогу</Button></Link></div>
        </section>
      }
    </>
  );
};

export default CatalogItem;
