"use client";

import { RefObject, useEffect, useState } from "react";

interface Props {
  cursor: { x: number; y: number };
  cardRef: RefObject<HTMLDivElement>;
}

const Beaker = ({ cursor, cardRef }: Props) => {
  const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (cardRef.current && cursor.x !== null && cursor.y !== null){
      const cardRect = cardRef.current.getBoundingClientRect();
      const cxPercentage = (cursor.x / cardRect.width) * 100;
      const cyPercentage = (cursor.y / cardRect.height) * 100;
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      })
    }
  }, [cursor, cardRef])

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371.409 371.409" className="w-80 h-80 duration-200 transition-all">
      <defs>
        <radialGradient id="blueGradient" gradientUnits="userSpaceOnUse" cx={gradientCenter.cx} cy={gradientCenter.cy}>
          <stop stopColor="#2563EB70"/>
          <stop offset={1} stopColor="#404040"/>
        </radialGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" className="fill-transparent" stroke="url(#blueGradient)" d="M270.265,149.448c-36.107-47.124-70.38-78.948-73.439-141.372c0-1.836-0.612-3.06-1.836-4.284 c-0.612-3.06-3.672-4.896-6.732-3.06c-3.672,0-6.731,2.448-6.731,6.732c-77.112,83.232-207.468,294.372-43.452,354.959 c74.052,27.541,157.896-9.791,172.584-90.576C318.614,228.396,295.969,182.497,270.265,149.448z M138.686,323.256 c-17.748-10.404-28.764-31.211-34.272-49.572c-2.448-9.18-3.672-18.359-3.06-27.539c3.672-15.912,8.568-31.213,14.076-46.512 c3.06,13.463,9.18,26.928,17.748,36.719c19.584,21.422,59.364,34.273,70.38,61.201c6.732,16.523-19.584,30.6-30.6,34.271 C161.33,335.496,148.477,329.377,138.686,323.256z"></path>
    </svg>
  )
}

export default Beaker;