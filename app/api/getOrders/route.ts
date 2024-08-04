import Product from "@/lib/models/product.model";
import Order from "@/lib/models/order.model";
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import User from "@/lib/models/user.model";

export async function GET(request: NextRequest) {
  try {
    await connectToDB();  // Додаємо await для асинхронного підключення

    const orders = await Order.find({});

    const response = NextResponse.json({
      message: "Orders found",
      data: orders,
    });
    
    response.headers.set('Cache-Control', 'no-store');
    return response;
  } catch (error: any) {
    console.log('Server Error:', error);
    const response = NextResponse.json({ error: error.message }, { status: 400 });
    response.headers.set('Cache-Control', 'no-store');
    return response;
  }
}
