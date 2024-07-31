'use client'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { useAppContext } from "@/app/(root)/context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const PaginationForCatalog = ({searchParams, countOfPages,}:{searchParams:any, countOfPages:number}) => {
    const router = useRouter();
   
    const {catalogData, setCatalogData} = useAppContext();

  useEffect(()=>{

    console.log(searchParams.page)
    if(searchParams.page){
      console.log('fsd')
      setCatalogData({...catalogData, pNumber:searchParams.page});
    }else{
      setCatalogData({...catalogData, pNumber:1});
    }
    
  },[])

    

    const pageNumber:number = searchParams.page

    const setPage = (number:number)=>{
       setCatalogData({...catalogData, pNumber:number});
       
    }

   
    
  return (
   
    <Pagination className='mt-14 w'>
   
      {countOfPages>1?<PaginationContent className="cursor-pointer">
      <PaginationItem className={searchParams.page ==1?'text-gray-600  pointer-events-none max-grid1:hidden':'max-md:hidden'}>
        <PaginationPrevious onClick={()=>setPage(searchParams.page - 1)} />
      </PaginationItem>
     

      

        {searchParams.page <3?<></>:<>
        <PaginationItem>
        <PaginationLink onClick={()=>setPage(1)}>
          1
        </PaginationLink>
        </PaginationItem>
        {searchParams.page > 4?<PaginationItem><PaginationEllipsis  className="w-fit p-0 m-0"/></PaginationItem>:<></>}</>}

        
        {searchParams.page <4?<></>:<>
        <PaginationItem>
        <PaginationLink onClick={()=>setPage(searchParams.page - 2)}>
          {searchParams.page - 2}
        </PaginationLink>
        </PaginationItem>
        </>}


        {searchParams.page ==1?<></>:<>
        <PaginationItem>
        <PaginationLink onClick={()=>setPage(searchParams.page - 1)}>
          {searchParams.page - 1}
        </PaginationLink>
        </PaginationItem>
        </>}



        <PaginationItem>
          <PaginationLink onClick={()=>setPage(searchParams.page)} isActive>
            {searchParams.page}
          </PaginationLink>
        </PaginationItem>



        {searchParams.page == countOfPages?<></>:<>
        <PaginationItem>
          <PaginationLink onClick={()=>setPage(searchParams.page - (-1))}>
          {searchParams.page - (-1)}
          </PaginationLink>
        </PaginationItem>
        </>}

        {searchParams.page >countOfPages-3?<></>:<>
        <PaginationItem>
          <PaginationLink onClick={()=>setPage(searchParams.page - (-2))}>
          {searchParams.page - (-2)}
          </PaginationLink>
        </PaginationItem>
        </>}

       
       

      {searchParams.page == countOfPages || searchParams.page == countOfPages - 1 || countOfPages ==3?<></>:<>
      {searchParams.page<countOfPages-3?<PaginationItem>
        <PaginationEllipsis  className="w-fit p-0 m-0"/>
      </PaginationItem>:<></>}
      
      <PaginationItem>
          <PaginationLink onClick={()=>setPage(countOfPages)}>
          {countOfPages}
          </PaginationLink>
        </PaginationItem>

      </>}
      
      <PaginationItem className={searchParams.page ==countOfPages?'text-gray-600  pointer-events-none max-grid1:hidden':'max-md:hidden'}>
        <PaginationNext onClick={()=>setPage(pageNumber - (-1))} />
      </PaginationItem>
    </PaginationContent>
    :<div className="text-center mt-20 text-gray-600 text-[18px]">
      {countOfPages ===0?<p>Товару за вашим запитом не знайдено :(</p>:<></>}
    </div>
    }
    
  </Pagination>
  )
}

export default PaginationForCatalog