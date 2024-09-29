"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setDiscount } from "@/lib/actions/product.actions";
import { Button } from "../ui/button";
import { ChangePriceValue } from "@/lib/actions/product.actions";
import { Input } from "../ui/input";

const CategoryDiscount = ({
  stringifiedProducts,
}: {
  stringifiedProducts: string;
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [discountValue, setDiscountValue] = useState<number | undefined>();
  const [newPrice, setNewPrice] = useState<number | undefined>();

  const products = JSON.parse(stringifiedProducts);
  const categories = Array.from(
    new Set(products.map((item: any) => item.category))
  ).filter((item) => item !== "");
  console.log(categories);

  const ChangeDiscount = async () => {
    // Перевіряємо, чи не є значення undefined або null, але дозволяємо значення 0
    if (
      selectedCategory &&
      discountValue !== undefined &&
      discountValue !== null
    ) {
      await setDiscount({
        category: selectedCategory,
        discount: discountValue,
      });
      alert("Знижка застосована!");
    } else {
      alert("Оберіть категорію та введіть коректну знижку");
    }
  };

  const changePrice = async () => {
    // Перевіряємо, чи не є значення undefined або null, але дозволяємо значення 0
    if (selectedCategory && newPrice !== undefined && newPrice !== null) {
      await ChangePriceValue({
        category: selectedCategory,
        newPrice: newPrice,
      });
      alert("Ціна змінена!");
    } else {
      alert("Оберіть категорію та введіть зміни");
    }
  };

  return (
    <div className="mt-14 flex justify-between">
      <div>
        <div className="mb-14">
          <div className="my-5">
            <label htmlFor="price">
              Введіть на скільки хочете підняти ціни %
            </label>
            <div>
              <Input
                onChange={(e) => setNewPrice(parseFloat(e.target.value))}
                type="number"
                id="price"
                className="mt-2"
                value={newPrice}
              />
            </div>
          </div>
          <Button onClick={changePrice}>Застосувати</Button>
        </div>
        <div>
          <div>
            <label htmlFor="discount">Введіть знижку на категорію %</label>
            <div className="my-5">
              <Input
                onChange={(e) => setDiscountValue(parseFloat(e.target.value))}
                type="number"
                id="discount"
                className="mt-2 "
                value={discountValue}
              />
            </div>
          </div>
          <Button onClick={ChangeDiscount}>Застосувати</Button>
        </div>
      </div>
      <div>
        <Select onValueChange={(element) => setSelectedCategory(element)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Виберіть категорію" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((category: any) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CategoryDiscount;
