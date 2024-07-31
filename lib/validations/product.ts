import * as z from "zod";

export const ProductValidation = z.object({
    id: z.string().min(1, { message: "Product requires a custom id." }),
    name: z.string()
           .min(3, { message: "Minimum 3 characters." })
           .max(50, { message: "Maximum 50 caracters." }),
    price: z.string(),
    priceToShow: z.string(),
    description: z.string()
                  .min(3, { message: "Minimum 3 characters." }),
    url: z.string(),
    quantity: z.string(),
    category: z.string().optional(),
    vendor: z.string(),
})