import Image from "next/image"

const Divider = ({ iconUrl, width, height, mt, mb, type}: { iconUrl: string, width: number, height: number, mt: number, mb: number, type: string }) => {
  return (
    <div className={`mt-32 mb-32 ${type === "default" ? `w-full h-0.5 bg-black` : `flex justify-center`}`}>{type === "icon-only"
        ? <Image src={iconUrl} width={width} height={height} alt="deviding icon"/>
        : null}
    </div>
  )
}

export default Divider;