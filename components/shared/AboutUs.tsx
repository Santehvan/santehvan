"use client";

import Image from "next/image"
import { Button } from "../ui/button"
import Beaker from "../svg/Beaker"
import { useRef, useState } from "react";
import Link from "next/link";

const AboutUs = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(cardsRef.current !== null){
      const rect = cardsRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y })
    }
  }

  return (
    <section className="h-[700px] flex flex-1 max-xl:flex-col max-xs:mb-0 max-md:h-[500px] pb-5">
        <article className="w-1/2 h-full flex flex-col gap-7  max-xl:w-full">
            <h1 className="text-heading2-bold pl-2 mt-36">Чому ми?</h1>
            <p>Ми — ваш надійний партнер у світі сантехніки, пропонуючи широкий асортимент високоякісних товарів для дому та бізнесу. Завдяки нашому професійному підходу та першокласному обслуговуванню, ви завжди знайдете саме те, що потрібно для створення комфортного та сучасного простору. Обирайте нас для надійних рішень у сфері сантехніки.</p>
            <div className="w-full flex gap-3 mt-4">
                <Link href='/catalog'><Button className="px-8 w-full shadow-md">До товарів</Button></Link>
                <Link href='/presentations'><Button className="px-8 w-full shadow-md" variant="outline">Презентації</Button></Link>
            </div>
        </article>
        <article className="w-1/2 h-full flex items-center justify-center max-xl:w-full max-xl:justify-start max-xl:px-12 max-xl:mt-36 max-md:hidden">
          <div ref={cardsRef} onMouseMove={(event) => handleMouseMove(event)} className="xl:max-w-[40rem] max-w-[90%] h-[26rem] rounded-lg border border-neutral-600 absolute flex flex-row p-8 shadow-xl stroke-[1.5] hover:stroke-[2]">
            <div className="flex flex-col w-2/5 justify-between">
              <div className="flex flex-col gap-5"> 
      
                <h1 className="text-heading3-bold tracking-wide">Найкращі пропозиції для вашого дому</h1>
                <p>Високоякісна сантехніка та стильні меблі для будь-якого інтер&apos;єру.</p>
              </div>
              <div className="flex flex-col tracking-wide">
                <span className="flex flex-row gap-2">
                  <Image src="/assets/checked.svg" width={24} height={24} alt="Checked"/>
                  <p>Великий асортимент продукції</p>
                </span>
                <span className="flex flex-row gap-2">
                  <Image src="/assets/checked.svg" width={24} height={24} alt="Checked"/>
                  <p>Гарантія на всі товари</p>
                </span>
                <span className="flex flex-row gap-2">
                  <Image src="/assets/checked.svg" width={24} height={24} alt="Checked"/>
                  <p>Безкоштовна доставка</p>
                </span>
              </div>
            </div>
            <div className="w-3/5 flex flex-col items-center justify-center">
              <Beaker cursor={cursor} cardRef={cardsRef}/>
            </div>
          </div>
        </article>
    </section>
  )
}

export default AboutUs;