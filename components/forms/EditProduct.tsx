"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ProductValidation } from "@/lib/validations/product";
import { editProduct, getProductsProperities } from "@/lib/actions/product.actions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type ProductFormValues = z.infer<typeof ProductValidation>;

const EditProduct = ({ productId }: { productId: string }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof ProductValidation>>({
    resolver: zodResolver(ProductValidation),
  });

  const onSubmit = async (values: z.infer<typeof ProductValidation>) => {
    await editProduct({
      id: values.id,
      name: values.name,
      quantity: parseFloat(values.quantity),
      url: values.url,
      price: parseFloat(values.price),
      priceToShow: parseFloat(values.priceToShow),
      vendor: values.vendor,
      category: values.category,
      description: values.description
    })

    router.back()
  }


  useEffect(() => {
    const fetchProductProperities = async () => {
        try {
            const productProperities = await getProductsProperities(productId);

            productProperities.forEach(({ name, value }: { name: string, value: string}) => {
              form.setValue(name as keyof ProductFormValues, value)
            })
          } catch (error: any) {
            throw new Error(`Error appending existing product properities: ${error.message}`)
          }
    }

    fetchProductProperities();
  }, [productId])


  return (
    <Form {...form}>
      <form
        className='flex flex-col justify-start gap-10 custom-scrollbar'
        onSubmit={form.handleSubmit(onSubmit)}
      >

        <FormField
          control={form.control}
          name='id'
          render={({ field }) => (
            <FormItem className='flex w-full gap-3 max-[1440px]:flex-col pr-[400px] max-xl:pr-0'>
              <FormLabel className='text-base-semibold w-2/5 text-dark-1 max-lg:w-full'>
                ID
                <p className="mt-3 text-small-medium text-gray-500">Унікальний ID для товару</p>
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className=''
                  {...field}
                  disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='flex w-full gap-3 max-[1440px]:flex-col pr-[400px] max-xl:pr-0'>
              <FormLabel className='text-base-semibold w-2/5 text-dark-1 max-lg:w-full'>
                Ім&apos;я
                <p className="mt-3 text-small-medium text-gray-500">Додайте назву товару </p>
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className=''
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem className='flex w-full gap-3 max-[1440px]:flex-col pr-[400px] max-xl:pr-0'>
              <FormLabel className='text-base-semibold w-2/5 text-dark-1 max-lg:w-full'>
                Опис
                <p className="mt-3 text-small-medium text-gray-500">Опишіть ваш товар</p>
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  className=''
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full h-[2px] bg-gray-400 my-5 rounded-lg"></div>

        <FormField
          control={form.control}
          name='price'
          render={({ field }) => (
            <FormItem className='flex w-full gap-3 max-[1440px]:flex-col pr-[400px] max-xl:pr-0'>
              <FormLabel className='text-base-semibold w-2/5 text-dark-1 max-lg:w-full'>
                Ціна без знижки
                <p className="mt-3 text-small-medium text-gray-500">Скільки буде коштувати товар без знижки ?</p>
              </FormLabel>
              <FormControl>
                <Input
                    type='text'
                    className=''
                    {...field}
                    />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='priceToShow'
          render={({ field }) => (
            <FormItem className='flex w-full gap-3 max-[1440px]:flex-col pr-[400px] max-xl:pr-0'>
              <FormLabel className='text-base-semibold w-2/5 text-dark-1 max-lg:w-full'>
                Ціна
                <p className="mt-3 text-small-medium text-gray-500">Справжня ціна товару?</p>
              </FormLabel>
              <FormControl>
                <Input
                    type='text'
                    className=''
                    {...field}
                    />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='quantity'
          render={({ field }) => (
            <FormItem className='flex w-full gap-3 max-[1440px]:flex-col pr-[400px] max-xl:pr-0'>
              <FormLabel className='text-base-semibold w-2/5 text-dark-1 max-lg:w-full'>
                Кількість
                <p className="mt-3 text-small-medium text-gray-500">Скільки товару є на складі?</p>
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className=''
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full h-[2px] bg-gray-400 my-5 rounded-lg"></div>
        
        <FormField
          control={form.control}
          name='url'
          render={({ field }) => (
            <FormItem className='flex w-full gap-3 max-[1440px]:flex-col pr-[400px] max-xl:pr-0'>
              <FormLabel className='text-base-semibold w-2/5 text-dark-1 max-lg:w-full'>
                URl
                <p className="mt-3 text-small-medium text-gray-500">Provide the URL if you have one</p>
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className=''
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem className='flex w-full gap-3 max-[1440px]:flex-col pr-[400px] max-xl:pr-0'>
              <FormLabel className='text-base-semibold w-2/5 text-dark-1 max-lg:w-full'>
                Категорія
                <p className="mt-3 text-small-medium text-gray-500">Додайте товар до категорії</p>
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className=''
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='vendor'
          render={({ field }) => (
            <FormItem className='flex w-full gap-3 max-[1440px]:flex-col pr-[400px] max-xl:pr-0'>
              <FormLabel className='text-base-semibold w-2/5 text-dark-1 max-lg:w-full'>
                Постачальник
                <p className="mt-3 text-small-medium text-gray-500">Марка товару</p>
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className=''
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full h-[2px] bg-gray-400 my-5 rounded-lg"></div>

        <Button type='submit' className='bg-green-500 hover:bg-green-400'>
          Зберегти зміни
        </Button>
      </form>
    </Form>
)}

export default EditProduct;