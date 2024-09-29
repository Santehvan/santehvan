import React from "react";
import { fetchProducts } from "@/lib/actions/product.actions";
import CategoryDiscount from "@/components/admin-components/CategoryDiscount";
const page = async () => {
  const products = await fetchProducts();
  return (
    <section className="px-10 py-20 w-full">
      <h1 className="w-full text-heading1-bold drop-shadow-text-blue max-[440px]:text-center">
        Знижки за категоріями
      </h1>
      <div className="w-full h-[2px] bg-gray-400 mt-20 rounded-lg"></div>
      <CategoryDiscount stringifiedProducts={JSON.stringify(products)} />
    </section>
  );
};

export default page;
