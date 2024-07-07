"use server";

import Order from "../models/order.model";
import Product from "../models/product.model";
import { connectToDB } from "../mongoose";
import User from "../models/user.model";
import mongoose from 'mongoose';
import { revalidatePath } from "next/cache";

interface CreateOrderParams {
    products: {
        product: string,
        amount: number
    } [],
    userId: string;
    value: number;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    paymentType: string;
    deliveryMethod: string;
    city: string;
    adress: string;
    postalCode: string;
    comment: string | undefined;
}

function generateUniqueId() {
    const randomPart = Math.floor(1000 + Math.random() * 9000).toString(); // Generates a random 4-digit number
    const timestampPart = Date.now().toString().slice(-4); // Gets the last 4 digits of the current timestamp
    return randomPart + timestampPart; // Concatenate both parts to form an 8-digit ID
}

export async function createOrder({ products, userId, value, name, surname, phoneNumber, email, paymentType, deliveryMethod, city, adress, postalCode, comment }: CreateOrderParams) {
    try {
        connectToDB();

        const uniqueId = generateUniqueId();

        const createdOrder = await Order.create({
            id: uniqueId,
            products: products,
            user: userId,
            value: value,
            name: name,
            surname: surname,
            phoneNumber: phoneNumber,
            email: email,
            paymentType: paymentType,
            deliveryMethod: deliveryMethod,
            city: city,
            adress: adress,
            postalCode: postalCode,
            comment: comment ? comment : "",
            paymentStatus: "Pending",
            deliveryStatus: "Proceeding"
        })

        for(const product of products) {
            const orderedProduct = await Product.findById(product.product);

            orderedProduct.quantity = orderedProduct.quantity - product.amount;

            await orderedProduct.save();
        }
    } catch (error: any) {
        throw new Error(`Error creating order: ${error.message}`)
    }
}

export async function fetchOrders() {
    try {
        connectToDB();

        const orders = await Order.find()
            .populate({
                path: 'products',
                populate: {
                    path: 'product',
                    model: 'Product',
                    select: 'id images name priceToShow price'
                }
            })
            .populate({
                path: 'user',
                model: 'User',
                select: "_id email"
            })

        return orders;
    } catch (error: any) {
        throw new Error(`Error fetching ordeds: ${error.message}`)
    }
}

export async function fetchOrder(orderId: string) {
    try {
        connectToDB();

        const order = await Order.findOne({ id: orderId })
            .populate({
                path: 'products',
                populate: {
                    path: 'product',
                    model: 'Product',
                    select: 'id name images priceToShow params'
                }
            })
            .populate({
                path: 'user',
                model: 'User',
            });

        return order;
    } catch (error: any) {
        throw new Error(`Error fetching order: ${error.message}`)
    }
}




export async function fetchUsersOrders(email:string){
    try {

        const user = await User.findOne({email:email});

        const orders = await Order.find({ user: user._id} )
        .populate({
            path: 'products',
            populate: {
                path: 'product',
                model: 'Product',
                select: 'id name images priceToShow params'
            }
        })
        .populate({
            path: 'user',
            model: 'User',
        });


        return orders
    } catch (error:any) {
        throw new Error(`Error fetching user's orders: ${error.message}`)
    }
}

export async function delOrder(id:string){
    try {
        const objectId = new mongoose.Types.ObjectId(id);
        await Order.findByIdAndDelete(objectId);
    } catch (error:any) {
        throw new Error(`Error deleting order: ${error.message}`)
    }
}


export async function deleteOrder(id: string, path: string) {
    try {
        connectToDB();

        const order = await Order.deleteOne({ id: id });

        revalidatePath(path);
        revalidatePath("/myOrders");
        revalidatePath("/admin/orders");
    } catch (error: any) {
        throw new Error(`Error deleting order: ${error.message}`)
    }
}

export async function changePaymentStatus(id: string, status: string, path: string) {
    try {
        connectToDB();

        const order = await Order.findOne({ id: id });

        order.paymentStatus = status;

        order.save();

        revalidatePath(path);
    } catch (error: any) {
        throw new Error(`Error changing order's payment status: ${error.message}`)
    }
}

export async function changedeliveryStatus(id: string, status: string, path: string) {
    try {
        connectToDB();

        const order = await Order.findOne({ id: id });

        order.deliveryStatus = status;

        order.save();

        revalidatePath(path);
    } catch (error: any) {
        throw new Error(`Error changing order's delivery status: ${error.message}`)
    }
}