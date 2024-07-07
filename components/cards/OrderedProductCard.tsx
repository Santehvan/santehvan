import Image from "next/image";
import Link from "next/link";

interface Props {
    id: string;
    name: string;
    image: string;
    priceToShow: number;
    model: string;
    amount: number;
}

const OrderedProductCard = ({ id, name, image, priceToShow, model, amount}: Props) => {
  return (
    <article className="w-full h-52 flex border border-black rounded-2xl">
        <div className="w-56 flex justify-center items-center mr-3">
            <Link href={`/catalog/${model}`}>
                <Image
                    src={image}
                    height={160}
                    width={160}
                    alt="Product image"
                    className="border rounded-2xl p-3"
                />
            </Link>
        </div>
        <div className="w-full py-9">
            <Link href={`/catalog/${model}`}>
                <p className="text-body-medium">{name}</p>
                <p className="text-base-medium">Модель: {model}</p>
                <p className="text-small-medium">ID: {id}</p>
            </Link>
            <div className="w-full h-24 flex flex-col flex-1 justify-end items-end pr-4 max-sm:pb-10 ">
                <p className="text-subtle-medium">{priceToShow}₴ * {amount}</p>
                <p>=<span className="font-medium text-green-500">{(priceToShow * amount).toFixed(2)}₴</span></p>
            </div>
        </div>
    </article>
  )
}

export default OrderedProductCard;