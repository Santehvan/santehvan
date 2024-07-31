import Link from "next/link"
import Image from "next/image"
import CategoryCard from "../cards/CategoryCard"

const Categories = () => {
  return (
    <section className="mt-56" id='categories'>
        <div className="flex justify-between items-center max-sm:flex-col">
          <div className="flex flex-1 items-center gap-2 max-">
            <h2 className="text-heading2-semibold">Категорії товарів</h2>
            <Image src="/assets/thin-right-arrow.svg" width={32} height={32} alt="arrow-right" className="mt-1 max-[322px]:hidden"/>
          </div>
            <Link href='/catalog' className="Underline drop-shadow-text-blue">Показати всі</Link>
        </div>
        <div className="flex gap-5 bordermt-10 mt-10 flex-col md:flex-row">
            <CategoryCard label="Меблі для ванної" pageLink="/catalog?category=Меблі_для_ванної_кімнати" imageSrc="/tymba.png"/>
            <CategoryCard label="Житлові меблі" pageLink="/catalog?category=Житлові_меблі" imageSrc="/komod.png"/>
            <CategoryCard label="Дитячі меблі" pageLink="/catalog?category=Дитячі_меблі " imageSrc="/krovatka.png"/>
        </div>
    </section>
  )
}

export default Categories