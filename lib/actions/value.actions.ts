"use server";

import Product from "../models/product.model";
import Value from "../models/value.model";
import { connectToDB } from "../mongoose";

export async function findMaxId() {
    try {
        connectToDB();

        const products = await Product.find();

        const maxId = products.filter(product => product.isFetched)
        .reduce((maxId, product) => {
          const currentId = parseInt(product.id, 10);
          return currentId > maxId ? currentId : maxId;
        }, -Infinity);

        console.log(maxId);

        const existingValue = await Value.findOne({ name: "maxId" });

        if(existingValue.name !== "maxId") {
            const maxIdValue = await Value.create({
                name: "maxId",
                value: maxId
            })
        } else {
            existingValue.value = maxId;

            existingValue.save();
        }

    } catch (error: any) {
        throw new Error(`Error finding max id: ${error.message}`)
    }
}

export async function getValue(name: string) {
    try {
        connectToDB()

        const value = await Value.findOne({ name: name })

        return JSON.stringify(value);
    } catch (error: any) {
        throw new Error(`Error getting value: ${error.message}`)
    }
}