import Product from "@/lib/models/product.model";
import Order from "@/lib/models/order.model";
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import User from "@/lib/models/user.model";

export async function GET(request: NextRequest) {
  try {
    await connectToDB();  // Додаємо await для асинхронного підключення

    const orders = await Order.find({});
    
    return NextResponse.json({
      message: "Orders found",
      data: orders,
    });
  } catch (error: any) {
    console.log('Server Error:', error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
} 