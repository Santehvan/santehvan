import Image from "next/image"
import Link from "next/link"

interface Params{
  label: string,
  pageLink: string,
  imageSrc: string
}
const CategoryCard = ({label, pageLink, imageSrc}: Params) => {
  return (
    <article className="border  w-full h-80 rounded bg-gray-150 relative">
        <Image src={imageSrc} width={200} height={100} alt="" className="mx-auto mt-5 px-1"></Image>
        <Link href={pageLink} className="w-[80%] mx-auto hover:bg-black border border-black hover:text-white block mt-7 py-4 text-center rounded-md transition-colors">{label}</Link>
    </article>
  )
}

export default CategoryCard