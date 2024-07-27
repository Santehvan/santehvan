"use server";

import Product from "../models/product.model";
import Value from "../models/value.model";
import { connectToDB } from "../mongoose";


export async function getValue(name: string) {
    try {
        connectToDB()

        const value = await Value.findOne({ name: name })

        return JSON.stringify(value);
    } catch (error: any) {
        throw new Error(`Error getting value: ${error.message}`)
    }
}