//'use client'

import React from 'react'
import CreateOrder from '@/components/forms/CreateOrder'
import { getSession } from '@/lib/getServerSession'
import { fetchUserByEmail } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'



const Page = async () => {
    // //@ts-ignore

    // const today = new Date();

    // // Отримуємо день місяця
    // let day = today.getDate();
    // // Отримуємо місяць (місяці у JavaScript починаються з 0, тому додаємо 1)
    // let month = today.getMonth() + 1;
    // // Отримуємо рік і залишаємо тільки останні дві цифри
    // let year = today.getFullYear().toString().slice(-2);

    // // Форматуємо день та місяць, щоб вони завжди мали два символи
    // if (day < 10) {
    //     day = '0' + day;
    // }
    // if (month < 10) {
    //     month = '0' + month;
    // }
    // const {data:session} = useSession();
    // const [orderDetails, setOrderDetails] = useState({
    //     name:'',
    //     surname:'',
    //     phoneNumber:'',
    //     contactEmail:session?.user?.email, // Email
    //     accountEmail:session?.user?.email,
    //     wayToPay:'Безготівковий розрахунок', // Payment type
    //     deliveryMethod:'Нова пошта(у відділення)',
    //     city: '',
    //     adress:'',
    //     coment:'',
    //     products:data,
    //     toPay:priceToPay,
    //     data:`${day}.${month}.${year}`
    // })

    const email = await getSession();
   

    // if(!email){
    //   redirect('/login')
    // }

    


    const user = await fetchUserByEmail(email);
    
    // useEffect(()=>{
    //     setOrderDetails({...orderDetails, toPay:priceToPay})
    // },[priceToPay])

    // useEffect(()=>{
    //     setOrderDetails({...orderDetails, products: data})
    // },[data])

   

    // useEffect(()=>{
    //     setOrderDetails({...orderDetails, accountEmail: session?.user?.email, contactEmail:session?.user?.email})
    // },[session])

 
    // const router = useRouter();
  

    // const  [orderCreated,setOrderCreated] = useState(false)

    // const createOrder = async (e:any) => {


       

    //     setOrderDetails({...orderDetails, accountEmail:session?.user?.email})
    //     e.preventDefault();
        
    //     try {
    //         const response = await axios.post("/api/createOrder", orderDetails);
    //         setOrderCreated(true);
            
    //     } catch (error:any) {
    //         console.log(error);
    //     }
    //     router.push('/')
    // };



  return (
    <section className="flex flex-row w-full justify-between max-lg:flex-col">
        <CreateOrder userId={user?._id} email={email}/>
    </section>

//     <>

//     {orderCreated?
    
    
//     <div>
//         <h2 className="text-[25px] text-gray-700 text-center">Вітаємо! Ви успішно створили замовлення</h2>
//         <Image src='/assets/welldone.svg' width={300} height={300} alt="" className="mx-auto mt-5"></Image>
//         <div className="mx-auto w-fit mt-[-30px]">
//             <Link href="/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 z-40 relative">
//                             На головну
//             </Link>
//         </div>
//     </div>
    
    
//     :
//     <form action="" onSubmit={createOrder}>
//     <h1 className='text-[45px]'>Оформлення замовлення</h1>

//     <div className='flex flex-row w-full justify-between max-lg:flex-col '>

//         <div className='flex flex-col w-full border-r-2 border-gray-700 pr-16 max-lg:border-0 max-lg:p-0'>
//             <div className='flex flex-col '>
//                 <label htmlFor="name" className='mb-2 text-[18px]'>Ім'я</label>
//                             <input 
//                             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//                             type="text"
//                             placeholder="Ім'я"
//                             id='name'
//                             onChange={(e) => setOrderDetails({...orderDetails, name: e.target.value})}
//                             required
//                                 />
//             </div>

//             <div className='flex flex-col '>
//                 <label htmlFor="surname" className='mb-2 text-[18px]'>Прізвище</label>
//                             <input 
//                             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//                             type="texts"
//                             placeholder="Прізвище"
//                             id="surname"
//                             onChange={(e) => setOrderDetails({...orderDetails, surname: e.target.value})}
//                             required
//                                 />
//             </div>

//             <div className='flex flex-col '>
//                 <label htmlFor="phoneNumber" className='mb-2 text-[18px]'>Телефон</label>
//                             <input 
//                             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//                             type="texts"
//                             placeholder="Телефон"
//                             id="phoneNumber"
//                             onChange={(e) => setOrderDetails({...orderDetails, phoneNumber: e.target.value})}
//                             required
//                                 />
//             </div>

//             <div className='flex flex-col '>
//                 <label htmlFor="email" className='mb-2 text-[18px]'>Електронна пошта</label>
//                             <input 
//                             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//                             type="text"
//                             placeholder="Email"
//                             value={orderDetails.contactEmail}
//                             onChange={(e) => setOrderDetails({...orderDetails, contactEmail: e.target.value})}
//                             id="email"
//                             required
//                                 />
//             </div>
//             <div className='mb-4'>
//                 <p className='mb-2 text-[18px]'>Спосіб оплати</p>
//                 <RadioGroup defaultValue="Безготівковий розрахунок">
//                     <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="Безготівковий розрахунок" id="r2" />
//                         <Label htmlFor="r2">Безготівковий розрахунок</Label>
//                     </div>
//                 </RadioGroup>
//             </div>

//         </div>


//         <div className='flex flex-col w-full pl-16 max-lg:p-0'>
          

     


//             <div>
//                 <p className='mb-2 text-[18px]'>Спосіб доставки</p>
//                 <Select  onValueChange={(e) => setOrderDetails({...orderDetails, deliveryMethod: e})}>
//                     <SelectTrigger className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"'>
//                         <SelectValue placeholder="Нова пошта(у відділення)" />
//                     </SelectTrigger>
//                     <SelectContent>
//                         <SelectGroup>
//                         <SelectItem value="Нова пошта(у відділення)" >Нова пошта(у відділення)</SelectItem>
//                         <SelectItem value="Нова пошта(до дому)" >Нова пошта(до дому)</SelectItem>
                        
//                         </SelectGroup>
//                     </SelectContent>
//                 </Select>
//             </div>

//             <div className='flex flex-col '>
//                 <label htmlFor="city" className='mb-2 text-[18px]'>Місто</label>
//                             <input 
//                             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//                             type="texts"
//                             placeholder="Місто"
//                             id='city'
//                             onChange={(e) => setOrderDetails({...orderDetails, city: e.target.value})}
//                             required
//                                 />
//             </div>

//             <div className='flex flex-col '>
//                 <label htmlFor="adres" className='mb-2 text-[18px]'>Адреса/відділення(тільки вантажні)</label>
//                             <input 
//                             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//                             type="texts"
//                             placeholder="Адреса"
//                             id='adres'
//                             onChange={(e) => setOrderDetails({...orderDetails, adress: e.target.value})}
//                             required
//                                 />
//             </div>

//             <div className='flex flex-col '>
//                 <label htmlFor="coment" className='mb-2 text-[18px]'>Коментар</label>
//                 <Textarea placeholder='Ваш коментар' id='coment'maxLength={400} onChange={(e) => setOrderDetails({...orderDetails, coment: e.target.value})}/>
//             </div>

//             <Button type='submit' className='mt-10 w-fit ml-auto'>Підтвердження замовлення  </Button>
//         </div>
        
//     </div>


    

    
    
// </form>
    
//     }


    

//     </>
  )
}

export default Page;
