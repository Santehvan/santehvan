'use client'


import axios from 'axios';
import React from 'react'

const page = () => {

    const reloadOrders = async () => {
        try {
            const response = await axios.get("/api/getOrders");
            console.log('response',response.data.data)
           
        } catch (error:any) {
            console.log(error.mail);
        }
    }

  return (
    <div>
        <button  onClick={reloadOrders}>fdsfsd</button>

    </div>
  )
}

export default page
